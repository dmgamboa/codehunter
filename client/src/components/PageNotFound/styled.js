import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2rem;

    p {
        margin-bottom: 5rem;
    }

    .image-container {
        margin-left: 50%;
        
        .image {
            width: 50%;
            transform: translateX(-50%);
            margin-bottom: 5rem;
        }
    }

    .easter-egg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }


    a {
        align-self: center;
        width: 75%;
    }
`;