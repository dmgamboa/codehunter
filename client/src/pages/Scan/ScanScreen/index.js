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

    const [points, setPoints] = useState({});
    const [code, setCode] = useState(null);
    const [error, setError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleScan = async (data) => {
        setError("");
        setCode(data);

        if (
            data.length > prefix.length &&
            data?.substring(0, prefix.length) !== prefix &&
            data.substring(prefix.length) != mongoDBIDLength
        ) {
            setError("That doesn't look like a code associated with any of our locations.");
        } else {
            const locationID = data.substring(prefix.length);
            const oldUserData = userData;
            const newUserData = await handleCodeScan(locationID, getUser());

            if (newUserData.points !== oldUserData.points) {
                setUserData(newUserData);
                setPoints({
                    old: oldUserData.points,
                    new: newUserData.points,
                    diff: newUserData.points - oldUserData.points
                });
            } else {
                setError("It looks like you've scanned this code before.");
            }
        }

        handleModal();
    };

    return (
        <StyledScanner>
            <QrReader
                delay={1000}
                onScan={(data) => {
                    !modalVisible && data && data !== code && handleScan(data);
                }}
            />
            <ScanModal error={error} visible={modalVisible} onClose={handleModal} points={points} />
        </StyledScanner>
    );
};

export default ScanScreen;
