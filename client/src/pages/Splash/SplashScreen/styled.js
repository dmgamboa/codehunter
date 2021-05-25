import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to right bottom, #08497e, #005684, #006286, #006d86, #007884, #057f83, #168681, #278c7e, #30917e, #3a977d, #449c7c, #4ea17a);
    overflow: hidden;
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;

    .app-name,
    .team-name {
        text-align: center;
        color: white;
        text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
    }
    
    svg {
        width: clamp(5rem, 45vw, 20rem);
        margin-bottom: 1rem;
        fill: white;
        overflow: visible;
        stroke: #fff;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
`;