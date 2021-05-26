import { useState } from "react";
import { Drawer } from "antd";
import { GithubOutlined, ArrowLeftOutlined, LinkedinOutlined } from "@ant-design/icons";

import { StyledBubble, StyledDrawer } from "./styled";

const Bubble = ({ name, avatar, place, animal, intro, career, outsideOfWork, githubLink, linkedinLink }) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const showGitHub = (link) => {
        window.open(link, "_blank");
    };

    const onClose = () => {
        setVisible(false);
    };

    const inlineStyle = {
        position: "absolute",
    };

    return (
        <StyledDrawer>
            <div className="site-drawer-render-in-current-wrapper">
                <StyledBubble>
                    <img src={avatar} alt={name} onClick={showDrawer}></img>
                    <h1 className="name">{name}</h1>
                </StyledBubble>

                <Drawer
                    title="About Me"
                    placement={place}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    getContainer={false}
                    style={inlineStyle}
                    width="100%"
                >
                    <div className="about-me">
                        <ArrowLeftOutlined className="return" onClick={onClose} />

                        <div className="general-info">
                            <p>{intro}</p>

                            <h4>Career Aspirations</h4>
                            <p>{career}</p>

                            <h4>Outside of Work</h4>
                            <p>{outsideOfWork}</p>
                        </div>

                        <div className="contact-info">

                            {linkedinLink && 
                            <LinkedinOutlined className="icon" 
                                onClick={() => { showGitHub(linkedinLink); }} />
                            }

                            <GithubOutlined className="icon" onClick={() => {
                                showGitHub(githubLink); }} />
                        </div>

                        <div className="name-info">
                            <h1>{name}</h1>
                            <img src={animal}></img>
                            <div className="darken-overlay">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </StyledDrawer>
    );
};

export default Bubble;
