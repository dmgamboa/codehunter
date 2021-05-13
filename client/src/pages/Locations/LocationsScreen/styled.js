import styled from "styled-components";

export const Layout = styled.div`
    flex: 1;
    position: relative;

    .view-toggle {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .filter {
        margin-left: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }
`;