import { motion } from "framer-motion";

const ScanOverlay = () => {
    return (
        <svg className="overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                {/* adapted from https://codepen.io/NickNoordijk/pen/VLvxLE */}
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#08497E">
                        <animate
                            attributeName="stop-color"
                            values="#08497E; rgba(0,0,0,0.5); #08497E"
                            dur="6s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                    <stop offset="100%" stopColor="rgba(0,0,0,0.5)">
                        <animate
                            attributeName="stop-color"
                            values="rgba(0,0,0,0.5); #08497E; rgba(0,0,0,0.5)"
                            dur="6s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                </linearGradient>
            </defs>
            <path
                style={{ fill: "url(#gradient)" }}
                d="M407,0v30h60c8.3,0,15,6.7,15,15v60h30V15c0-8.3-6.7-15-15-15H407z"
            />
            <path
                style={{ fill: "url(#gradient)" }}
                d="M45,30h60V0H15C6.7,0,0,6.7,0,15v90h30V45C30,36.7,36.7,30,45,30z"
            />
            <path
                style={{ fill: "url(#gradient)" }}
                d="M467,482h-60v30h90c8.3,0,15-6.7,15-15v-90h-30v60C482,475.3,475.3,482,467,482z"
            />
            <path
                style={{ fill: "url(#gradient)" }}
                d="M30,407H0v90c0,8.3,6.7,15,15,15h90v-30H45c-8.3,0-15-6.7-15-15V407z"
            />
            <motion.path
                animate={{ y: ["35%", "-35%"]}}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    type: "spring"
                }}
                style={{ fill: "url(#gradient)" }}
                d="M444.5,271h-377c-8.3,0-15-6.7-15-15v0c0-8.3,6.7-15,15-15h377c8.3,0,15,6.7,15,15v0C459.5,264.3,452.8,271,444.5,271z"
            />
        </svg>
    );
};

export default ScanOverlay;
