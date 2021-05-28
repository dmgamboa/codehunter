import { StyledBtn } from "./styled";

const CircleIconBtn = ({ className, icon, onClick, size = "55px" }) => {
    return (
        <StyledBtn className={className} onClick={onClick} style={{height: size , width: size}}>
            {icon}
        </StyledBtn>
    );
};

export default CircleIconBtn;
