import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

import { StyledScanner } from "./styled";
import { validateCodeAndEarnPoints } from "../axios";
import { useAuth } from "../../../context/Auth";

const ScanScreen = () => {
    const prefix = "/codehunter/";
    const mongoDBIDLength = 24;
    const { getUser, userPoints, setUserPoints } = useAuth();

    const [error, setError] = useState("");
    const [code, setCode] = useState(null);

    const handleError = (err) => {
        console.error(err);
    };

    const handleScan = async (data) => {
        setCode(data);
        if (data) {
            if (data.substring(0, prefix.length) !== prefix) {
                handleError("Invalid QR code.");
            } else {
                const locationID = data.substring(prefix.length);
                
                if (locationID.length == mongoDBIDLength) {
                    const oldPoints = userPoints;
                    
                    const newPoints = await validateCodeAndEarnPoints(locationID, getUser());
                    setUserPoints(newPoints);
                }                
            }
        }
        setCode(null);
    };

    return (
        <StyledScanner>
            <QrReader
                delay={2000}
                onError={handleError}
                onScan={() => { !code && handleScan(); }}
            />
        </StyledScanner>
    );
};

export default ScanScreen;
