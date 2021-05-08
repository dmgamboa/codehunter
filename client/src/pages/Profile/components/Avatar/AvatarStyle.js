import styled from "styled-components";

export const StyledAvatar = styled.div`
    top: 10px;
    margin: 20px;
    #profilePic {
        width: 100%;
        border-style: solid solid none solid;
        border-width: 0.7px;
    }
    #picLine {
        width: 100%;
        height: 10%;
    }
`;

export const Image = styled.img`
    padding: 2rem;
    margin-bottom: 1rem;
    max-width: 100%;
    height: 65vh;
    object-fit: contain;
`;