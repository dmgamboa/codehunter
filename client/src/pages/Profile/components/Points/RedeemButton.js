import { Button } from "antd";
import Container from "./StyledBtn"

function RedeemButton({onClick}) {
    return (
        <>
        <Container>
            <Button type="primary" onClick= {onClick} id="redeemBtn">Redeem Points</Button>
        </Container>
        </>
    )
}

export default RedeemButton
