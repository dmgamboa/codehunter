import React from "react";
import QrReader from "react-qr-reader";

import { StyledScanner } from "./styled";

const ScanScreen = () => {
    const handleScan = (data) => {
        console.log(data);
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
