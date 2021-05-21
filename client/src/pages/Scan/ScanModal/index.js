import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import { ReactComponent as DisappointedDoge } from "../../../assets/icons/doge/annoying.svg";
import { ReactComponent as HappyDoge } from "../../../assets/icons/doge/happy.svg";
import Confetti from "../../../assets/lottie/confetti.json";

import { StyledModal } from "./styled";

const ScanModal = ({ error, onClose, visible, points }) => {
    const errorMessages = ["Wait a second ...", "Holup...", "Uh oh..."];
    const successMessages = ["Wow!", "You're amazing!", "Keep it up!"];
    const lottieOptions = {
        loop: false,
        autoplay: true,
        animationData: Confetti
    };

    const getRandomMessage = (messages) => {
        const index = Math.floor(Math.random() * (messages.length - 1));
        return messages[index];
    };

    return (
        <StyledModal
            centered
            onCancel={onClose}
            visible={visible}
            title={
                <>
                    {error ? (
                        <DisappointedDoge className="doge" />
                    ) : (
                        <motion.div
                            className="doge"
                            animate={{ scale: [0, 1.5, 1] }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <HappyDoge />
                        </motion.div>
                    )}
                    <span className="title">
                        {error
                            ? getRandomMessage(errorMessages)
                            : getRandomMessage(successMessages)}
                    </span>
                </>
            }
            footer={
                error ? (
                    <Button block type="primary" onClick={onClose}>
                        Try again
                    </Button>
                ) : (
                    <Link to="/locations">
                        <Button block type="primary">
                            Hunt more
                        </Button>
                    </Link>
                )
            }
        >
            <div className="message">
                {error ? error : `You have successfully earned ${points.diff} points.`}
            </div>

            <div className="confetti">
                <Lottie options={lottieOptions} />
            </div>
        </StyledModal>
    );
};

export default ScanModal;
