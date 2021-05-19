import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

import { useAuth } from "../../../context/Auth";

import ScanModal from "../ScanModal";
import { validateCodeAndEarnPoints } from "../axios";
import { StyledScanner } from "./styled";

const ScanScreen = () => {
    const prefix = "/codehunter/";
    const mongoDBIDLength = 24;
    const { getUser, userPoints, setUserPoints } = useAuth();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleScan = async (data) => {
        console.log(data);
        if (data) {
            console.log("detected QR code");
            if (data.substring(0, prefix.length) !== prefix) {
                setError("Invalid QR code.");
            } else {
                const locationID = data.substring(prefix.length);

                if (locationID.length == mongoDBIDLength) {
                    const oldPoints = userPoints;

                    const newPoints = await validateCodeAndEarnPoints(locationID, getUser());
                    setUserPoints(newPoints);
                }
            }
        }
    };

    return (
        <StyledScanner>
            <QrReader
                delay={1000}
                onError={(e) => console.error(e)}
                onScan={() => {
                    !modalVisible && handleScan();
                }}
            />
            <ScanModal error={error} success={success} visible={modalVisible} />
        </StyledScanner>
    );
};

export default ScanScreen;
