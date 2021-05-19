import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as Image } from "../../assets/icons/awkward.svg";

import { Container } from "./styled";

const PageNotFound = () => {
    const transition = {
        y: {
            duration: 1,
            yoyo: Infinity,
            ease: "easeOut"
        },
    };

    const animate = {
        y: ["10%", "-10%"]
    };

    return (
        <Container>
            <motion.div transition={transition} animate={animate} className="image-container">
                <Image className="image" />
            </motion.div>

            <h1>Well, this is awkward...</h1>
            <p>We can&apos;t seem to find the page you&apos;re looking for. Please log in and try again.</p>
            <Link to="account/login">
                <Button type="primary" block>Log In</Button>
            </Link>
        </Container>
    );
};

export default PageNotFound;