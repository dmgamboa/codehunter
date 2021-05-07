
import { motion } from "framer-motion";

const SplashLogo = ({
    orderInterval,
    traceDuration,
    fillDelay,
    fillDuration
}) => {
    const pathVariants = (order) => {
        const orderDelay = order === 1 ? 0 : order * orderInterval;

        return { 
            start: {
                pathLength: 0,
                opacity: 0,
                fill: "rgba(0, 0, 0, 0)"
            },
            end: {
                pathLength: 1,
                opacity: 1,
                fill: "rgba(255, 255, 255, 1)",
                transition: {
                    default: {
                        duration: traceDuration,
                        delay: orderDelay,
                        ease: "easeInOut"
                    },
                    fill: {
                        delay: fillDelay,
                        duration: fillDuration,
                        ease: "easeInOut"
                    }

                }
            }
        };
    }

    const pathVariantsInner = {
        start: {
            opacity: 0,
        },
        end: {
            opacity: 1,
            transition: {
                delay: fillDelay,
                duration: fillDuration,
                ease: "easeInOut"
            }
        }
    }

    return(
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            initial="start"
            animate="end"
        >
            <defs>
                {/* adapted from https://codepen.io/mathiesjanssen/pen/QgLzmM */}
                <filter id="inset-shadow">
                    <feComponentTransfer in="SourceAlpha">
                    <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="4"/>
                    <feOffset dx="3" dy="6" result="offsetblur"/>
                    <feFlood floodColor="rgba(0, 0, 0, 0.9)" result="color"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode />
                    </feMerge>
                </filter>
            </defs>
        
            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M407,0v30h60c8.3,0,15,6.7,15,15v60h30V15c0-8.3-6.7-15-15-15H407z"
                variants={pathVariants(1)}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M45,30h60V0H15C6.7,0,0,6.7,0,15v90h30V45C30,36.7,36.7,30,45,30z"
                variants={pathVariants(2)}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M467,482h-60v30h90c8.3,0,15-6.7,15-15v-90h-30v60C482,475.3,475.3,482,467,482z"
                variants={pathVariants(2)}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M30,407H0v90c0,8.3,6.7,15,15,15h90v-30H45c-8.3,0-15-6.7-15-15V407z"
                variants={pathVariants(1)}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M201.3,54.4H69.7c-8.3,0-15,6.7-15,15V186c0,8.3,6.7,15,15,15h116.6c8.3,0,15-6.7,15-15L201.3,54.4L201.3,54.4z M171.3,171
                H84.7V84.4h86.6L171.3,171L171.3,171z"
                variants={pathVariantsInner}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M119.3,104h17.4c8.3,0,15,6.7,15,15v17.4c0,8.3-6.7,15-15,15h-17.4c-8.3,0-15-6.7-15-15V119C104.3,110.7,111,104,119.3,104
                z"
                variants={pathVariantsInner}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M442.3,311H310.6v124.8h-15.4V297.6h73.6V173.2h-24.5v-48.7h-27.8V85.3h-21.8v39.2h-27.8v48.7h-24.5v262.6h-14.8V221.9
                h-95.1v213.9H54.7v21.8h270c0.3,0,0.7,0.1,1,0.1h116.6c0.3,0,0.7,0,1-0.1h3.8v-0.7c6-2,10.2-7.6,10.2-14.2V326
                C457.2,317.8,450.5,311,442.3,311z M319,200.1h21.8v21.8H319V200.1z M319,248.9h21.8v21.8H319V248.9z M190.4,427.2h-21.8v-21.8h21.8
                V427.2z M190.4,375h-21.8v-21.8h21.8V375z M190.4,322.9h-21.8V301h21.8V322.9z M190.4,270.7h-21.8v-21.8h21.8V270.7z M294.7,151.4
                h21.8v21.8h-21.8V151.4z M292.1,270.7h-21.8v-21.8h21.8V270.7z M292.1,221.9h-21.8v-21.8h21.8V221.9z M340.6,341h86.6v86.6h-86.6
                V341z"
                variants={pathVariantsInner}
            />

            <motion.path
                style={{filter: "url(#inset-shadow)"}}
                d="M375.2,360.6h17.4c8.3,0,15,6.7,15,15V393c0,8.3-6.7,15-15,15h-17.4c-8.3,0-15-6.7-15-15v-17.4
                C360.2,367.3,366.9,360.6,375.2,360.6z"
                variants={pathVariantsInner}
            />
        </motion.svg>
    );
}

export default SplashLogo;