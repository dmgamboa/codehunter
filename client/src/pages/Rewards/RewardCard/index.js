import { useState } from "react";
import { GiftOutlined } from "@ant-design/icons";

import LocationPlaceholder from "../../../assets/placeholder-location.jpg";

import { StyledCard, StyledModal } from "./styled";

import Confetti from "react-confetti";
import { getCodeForReward, setUserPoints } from "../axios"; 
import { useAuth } from "../../../context/Auth";

import _ from "lodash";


const RewardCard = ({ name, description, cost, availability, update, companyLogo }) => {

    const [showConfetti, setShowConfetti] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isRedeemModalVisible, setIsRedeemModalVisible] = useState(false);
    const [redeemableCode, setRedeemableCode] = useState("no code");
    const [successRedeem, setSuccessRedeem] = useState(true);
    const [isRedeemed, setIsRedeemed] = useState(false);
    const { getUserData, setUserData } = useAuth();

    const showConfirmation = () => {
        setIsModalVisible(true);
    };

    const handleRedeem = _.debounce(async () => {
        const code = await getCodeForReward({ name: name, description: description, cost: cost });
        setRedeemableCode(code);
        setIsModalVisible(false);
        setIsRedeemModalVisible(true);

        const userId = JSON.stringify(getUserData()._id);
        const data = {
            _id: userId, 
            rewardCost: cost
        };

        const updatedUser = await setUserPoints(data);
        if (!updatedUser) {
            setSuccessRedeem(false);
        } else {
            setSuccessRedeem(true);
            setIsRedeemed(true);
            setUserData(updatedUser);
        }
    }, 200);

    const handleShownCode = () => {
        setIsRedeemModalVisible(false);

        if (successRedeem) {
            setShowConfetti(true);
        }
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
            {showConfetti ? <Confetti className="confetti" numberOfPieces={50}/> : null}    
            {!isRedeemed && <StyledCard
                hoverable
                onClick={showConfirmation}
                cover={<img src={companyLogo || LocationPlaceholder} alt="placeholder name" />}
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
            </StyledCard>}

            <StyledModal
                title={<span><GiftOutlined/>{successRedeem ? "keep this code somewhere safe" : "Keep hunting!"}</span>}
                visible={isRedeemModalVisible}
                onOk={() => {
                    update();
                    handleShownCode();
                }}
                onCancel={() => { 
                    update();
                    handleShownCode();
                }}
                okText="ok"
                closeOnOverlayClick={false}
            >
                <p className="modal-name">{successRedeem ? "Here ya go!" : "You don't have enough points"}</p>
                <p className="cost">{successRedeem ? redeemableCode : "but you'll get there" }</p>
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
