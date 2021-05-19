import { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { ReactComponent as ClosedDoge } from "../../assets/icons/awkward.svg";
import { ReactComponent as OpenDoge } from "../../assets/icons/dizzy.svg";

import { Container } from "./styled";

const PageNotFound = () => {
    const [bounce, setBounce] = useState(true);
    const [swipes, setSwipes] = useState([]);

    const key = ["up", "up", "down", "down", "left", "right", "left", "right"];

    const variants = {
        bounce: {
            y: ["10%", "-10%"],
            transition: {
                y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    type: "spring",
                    ease: "easeOut"
                }
            }
        },
        stop: { y: ["0%", "0%"], transition: { repeat: Infinity, repeatDelay: 1, ease: "easeOut" } }
    };

    const handleDogeClick = () => {
        setBounce(!bounce);
    };

    const handleSwipe = (dir) => {
        const updatedSwipes = [...swipes, dir.toLowerCase()];
        setSwipes(updatedSwipes);
    };

    const getSwipes = useSwipeable({
        onSwiped: (e) => {
            !bounce && handleSwipe(e.dir);
        }
    });

    const checkSwipes = () => {
        const keyAsString = key.join("");
        const swipesAsString = swipes.join("");
        swipesAsString.includes(keyAsString) && console.log("success!");
    };

    useEffect(() => {
        if (!bounce) {
            setTimeout(() => {
                setBounce(true);
            }, 2500);
        }

        if (bounce && swipes.length > 0) {
            checkSwipes();
            setSwipes([]);
        }
    }, [bounce]);

    return (
        <Container {...getSwipes}>
            <motion.div
                variants={variants}
                animate={bounce ? "bounce" : "stop"}
                className="image-container"
                onClick={handleDogeClick}
            >
                {bounce ? <ClosedDoge className="image" /> : <OpenDoge className="image" />}
            </motion.div>

            <h1>Well, this is awkward...</h1>
            <p>
                We can&apos;t seem to find the page you&apos;re looking for. Please log in and try
                again.
            </p>
            <Link to="account/login">
                <Button type="primary" block>
                    Log In
                </Button>
            </Link>
        </Container>
    );
};

export default PageNotFound;
