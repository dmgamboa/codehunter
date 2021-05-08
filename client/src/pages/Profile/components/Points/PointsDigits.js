import Liner from "../../images/blueDivider.png"

function PointsDigits({points}) {
    return (
        <>
            <pre><span style={{color:"#005526", fontWeight:"1000",fontSize:"300%"}} className="points-digits">{points}</span><span> points</span></pre>
            <img src={Liner} style={{float: "left", width: "30%", display:"inline-block", marginTop:"-17px"}} id="liner"/>
        </>
    )
}

export default PointsDigits
