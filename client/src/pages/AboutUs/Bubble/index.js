import StyledBubble from "./StyledBubble";

const Bubble = ({ name }) => {
    return (
        <StyledBubble>
            <img src={"https://dummyimage.com/150x150/000/fff&text=Avatar"} alt={name}></img>
            <h1 className="name">{name}</h1>
        </StyledBubble>
    );
};

export default Bubble;