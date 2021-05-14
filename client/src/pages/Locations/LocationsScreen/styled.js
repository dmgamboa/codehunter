import styled from "styled-components";

export const Layout = styled.div`
    flex: 1;
    position: relative;

    &.map-view {
        .search {
            span.ant-input-wrapper.ant-input-group {
                background: white;
            }
        }
    }

    .icon-buttons {
        z-index: 999;
        position: fixed;
        right: 1rem;
        bottom: 5rem;
        display: flex;
        flex-direction: column;

        & > *:not(:last-child) {
            margin-bottom: 0.5rem;
        }
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .filter {
        z-index: 1;
        margin-left: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }
`;