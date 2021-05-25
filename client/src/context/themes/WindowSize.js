import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    const handleWindowResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener("resize", throttle(handleWindowResize, 500));

        handleWindowResize();

        return () => window.removeEventListener("resize", throttle(handleWindowResize, 500));
    }, []);

    return windowSize;
};

export default WindowSize;