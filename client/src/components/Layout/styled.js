import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* min-height: 100vh; */
    height: 100vh;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    background: rgb(8,73,126);
    background: linear-gradient(0deg, rgba(8,73,126,0.22) 0%, rgba(8,73,126,0) 20%, rgba(255,255,255,1) 100%);
    z-index: 99;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;