import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 2rem;

    p {
        margin-bottom: 5rem;
    }

    .image {
        align-self: center;
        width: 30%;
        margin-bottom: 5rem;
    }

    a {
        align-self: center;
        width: 75%;
    }
`;