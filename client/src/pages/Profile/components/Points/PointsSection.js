import PSStyle from "./PointsSectionStyle";
import React, { useState } from "react";
import theme from "../../../../context/themes/main";

const { colors } = theme;


//pass 0 to points when redeemed
function PointsSection({ points }) {
    return (
        <>
            <PSStyle>
                <div className="content">
                    <hr id="linerTop"/>
                    <div id="digits">
                        <p>
                            <span
                            style={{ color: colors.secondary, fontWeight: "700", fontSize: "280%" }}
                            className="points-digits">
                                {points}
                            </span>
                            <br/>
                            <span style={{fontSize:"150%", marginLeft:"15px"}}> points</span>
                        </p>
                    </div>
                    <hr id="linerBottom"/>
                </div>
            </PSStyle>
        </>
    );
}

export default PointsSection;
