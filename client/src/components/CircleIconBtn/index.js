import { StyledBtn } from "./styled";

const CircleIconBtn = ({
    className,
    icon,
    onClick
}) => {
    return (
        <StyledBtn
            className={className}
            onClick={onClick}
        >
            {icon}
        </StyledBtn>
    );
}

export default CircleIconBtn;