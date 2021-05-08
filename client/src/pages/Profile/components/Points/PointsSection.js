import PointsDigits from "./PointsDigits"
import RedeemButton from "./RedeemButton"
import PSStyle from "./PointsSectionStyle"

//pass 0 to points when redeemed
function PointsSection({points, onClick}) {
    return (
        <>
        <PSStyle>
            <PointsDigits id="digits" points={points}/>
            <RedeemButton id="redeemBtn" onClick={onClick}/>
        </PSStyle>
        </>
    )
}


export default PointsSection
