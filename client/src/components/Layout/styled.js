import styled from "styled-components";

const maxWidth = "500px";

export const Layout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: ${maxWidth};
    margin: 0 auto;
    background: #fff;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    height: 100%;
    background: linear-gradient(
        0deg,
        rgba(8, 73, 126, 0.22) 0%,
        rgba(8, 73, 126, 0) 20%,
        rgba(255, 255, 255, 1) 100%
    );
    z-index: 99;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    * {
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;
