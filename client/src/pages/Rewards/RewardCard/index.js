import { useState } from "react";
import { GiftOutlined } from "@ant-design/icons";

import LocationPlaceholder from "../../../assets/placeholder-location.jpg";

import { StyledCard, StyledModal } from "./styled";

import Confetti from "react-confetti";
import { getCodeForReward } from "../axios"; 

const RewardCard = ({ name, description, cost, availability }) => {
 
    const [showConfetti, setShowConfetti] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isRedeemModalVisible, setIsRedeemModalVisible] = useState(false);
    const [redeemableCode, setRedeemableCode] = useState("no code");


    const showConfirmation = () => {
        setIsModalVisible(true);
    };
    const handleRedeem = async () => {
        const code = await getCodeForReward({ name: name, description: description, cost: cost });

        setRedeemableCode(code);

        setIsModalVisible(false);
 

        setIsRedeemModalVisible(true);
    };

    const handleShownCode = () => {
        setIsRedeemModalVisible(false);

        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            {/* This becomes a antd card using styled component (see styled.js) */}
            {showConfetti ? <Confetti className="confetti" numberOfPieces={80}/> : null}    
            <StyledCard
                hoverable
                onClick={showConfirmation}
                cover={<img src={LocationPlaceholder} alt="placeholder name" />}
            >
                <h1 className="name">
                    {name} 
                </h1>
                <div className="details">
                    {description}
                </div>
                <p className="cost">{cost}</p>

                <div className="icons">
                    {availability}
                </div>
            </StyledCard>

            <StyledModal
                title={<span><GiftOutlined/>Keep this code somewhere safe</span>}
                visible={isRedeemModalVisible}
                onOk={handleShownCode}
                onCancel={handleShownCode}
                okText="ok"
            >
                <p className="modal-name">Here ya go!</p>
                <p className="cost">{redeemableCode}</p>
            </StyledModal>
 
            <StyledModal
                title={<span><GiftOutlined/> Please confirm</span>}
                visible={isModalVisible}
                onOk={handleRedeem}
                onCancel={handleCancel}
                okText="Redeem Now!"
                cancelText="Maybe Later"
            >
                <p className="modal-name">{name}</p>
                <p className="modal-details">{description}</p>
                <p className="modal-cost">{cost} pts</p>
            </StyledModal>
        </>
    );
};

export default RewardCard;
