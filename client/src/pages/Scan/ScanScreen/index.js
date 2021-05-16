import QrReader from "react-qr-reader";
import { StyledScanner } from "./styled";
import { validateCodeAndEarnPoints } from "../axios";
import { useAuth } from "../../../context/Auth";

const ScanScreen = () => {
    const prefix = "/codehunter/";
    const mongoDBIDLength = 24;
    const { getUID } = useAuth();
    
    const handleScan = (data) => {
        if (data && data.substring(0, prefix.length) == prefix) {
            const locationID = data.substring(prefix.length);
            
            if (locationID.length == mongoDBIDLength) {
                validateCodeAndEarnPoints(locationID, getUID());
            }
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
