import { useState } from "react";
import QrReader from "react-qr-reader";

import { useAuth } from "../../../context/Auth";

import ScanModal from "../ScanModal";
import { handleCodeScan } from "../axios";
import { StyledScanner } from "./styled";

const ScanScreen = () => {
    const prefix = "/codehunter/";
    const mongoDBIDLength = 24;
    const { getUser, userData, setUserData } = useAuth();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleScan = async (data) => {
        console.log(data);
        if (data) {
            console.log("Detected QR code");
            if (data.substring(0, prefix.length) !== prefix) {
                setError("Invalid QR code.");
            } else {
                const locationID = data.substring(prefix.length);

                if (locationID.length == mongoDBIDLength) {
                    const oldUserData = userData;
                    console.log(oldUserData);

                    const newUserData = await handleCodeScan(locationID, getUser());
                    setUserData(newUserData);

                    console.log(newUserData);
                }
            }
        }
    };

    return (
        <StyledScanner>
            <QrReader
                delay={1000}
                onError={(e) => console.error(e)}
                onScan={(data) => {
                    !modalVisible && handleScan(data);
                }}
            />
            <ScanModal error={error} success={success} visible={modalVisible} />
        </StyledScanner>
    );
};

export default ScanScreen;
