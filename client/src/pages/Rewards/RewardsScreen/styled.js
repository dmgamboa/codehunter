import styled from "styled-components";

export const Layout = styled.div`
    height: 89vh;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    text-align: center;

    .filters {
        /* min-width: 90vw; */
        /* max-width: 450px; */
        display: flex;
        justify-content: space-between;
        
    }

    .tabs {
        text-align: left;
    
    
        .loadingIcon {
            margin-top: 20px;
            font-size: clamp(1rem, 25px, 2rem);
            text-align: center;
        }
    }
    
    /* flex: 1;
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
    } */
`;

export const Filters = styled.div`


`;