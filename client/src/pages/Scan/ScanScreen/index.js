import QrReader from "react-qr-reader";
import { StyledScanner } from "./styled";
import { validateCodeAndEarnPoints } from "../axios";

const ScanScreen = () => {
    const prefix = "/codehunter/";
    const mongoDBIDLength = 24;
    
    const handleScan = (data) => {
        if (data && data.substring(0, prefix.length) == prefix) {
            const locationID = data.substring(prefix.length);
            if (locationID.length == mongoDBIDLength);
            validateCodeAndEarnPoints(locationID, "qweqwe");
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <StyledScanner>
            <QrReader
                delay={250}
                style={{ height: "40vh", width: "40vw" }}
                onError={handleError}
                onScan={handleScan}
                //facingMode={"rear"}
            />
        </StyledScanner>
    );
};

export default ScanScreen;
