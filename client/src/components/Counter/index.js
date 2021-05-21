import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

// adapted from
// https://stackoverflow.com/questions/65013742/how-to-animate-number-with-framer-motion
const Counter = ({ from, to, duration = 1, delay = 0 }) => {
    const ref = useRef();

    useEffect(() => {
        const controls = animate(from, to, {
            duration,
            delay,
            onUpdate(value) {
                ref.current.textContent = value.toFixed(0);
            }
        });
        return () => controls.stop();
    }, [from, to]);

    return <span className="counter" ref={ref} />;
};

export default Counter;
