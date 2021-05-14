import PSStyle from "./PointsSectionStyle";
import Liner from "../../images/blueDivider.png";
import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';



//pass 0 to points when redeemed
function PointsSection({points}) {

    const onRedeem = () => {
        console.log("your points are redeemed");
    }

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const showModal = () => {
        setVisible(true);
    };


    const handleOk = () => {
        success();
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const success = () => {
        message.success('Points are redeemed', 2);
      };

      
        
    return (
        <>
        <PSStyle>
            <div id="digits">
                <pre><span style={{color:"#005526", fontWeight:"1000",fontSize:"300%"}} className="points-digits">{points}</span><span> points</span></pre>
                <img src={Liner} style={{float: "left", width: "30%", display:"inline-block", marginTop:"-17px"}} id="liner"/>
            </div>
            <div id="redeemBtn">
                <Button type="primary" id="redeemBtn" onClick={showModal}>Redeem Points</Button>
            </div>

            <Modal className="redeem-modal"
            centered
            bodyStyle={{ 
                // backgroundColor:"#99B4A5",
                top:"30px",
                height:120,
                textAlign: "center",
            fontSize:17}}
            // style={{border:"1px solid #005526"}}
            width={300}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="submit" type="primary" id="yesRedeem"
                    style={{left:0, width:"130px"}} loading={loading} onClick={handleOk}>
                Redeem Points
                </Button>,
                <Button key="back" id="cancelRedeem"
                style={{right:0, width:"130px"}} onClick={handleCancel}>
                Cancel
                </Button>,
            ]}
            >
                <p id="confirmationText">
                    Are you sure you want
                </p>
                <p id="confirmationText">
                    to redeem your points?
                </p>
            </Modal>

            

        </PSStyle>
        </>
    )
}


export default PointsSection
