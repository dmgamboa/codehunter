
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Content from "./styled";

const Timeline = () => {
    return (
        <>
            <Content className="content">
                <TwitterTimelineEmbed
                    sourceType={"profile"}
                    screenName={"CodeHun77391693"}
                    options={{
                        tweetLimit: "4",
                        height: "100%",
                        width: "100%"
                    }}
                    noBorders="true"
                    // noFooter="true"
                    transparent="true"
                    autoHeight="true"
                />
            </Content>
        </>
    );
};

export default Timeline;
