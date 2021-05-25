import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Layout = styled.div`
    height: 89vh;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    text-align: center;

    display: grid;
    grid-template: 
        "title" 10%
        "filters" 8%
        "tabsAndList" 82%
        / 100%;

    .title {
        grid-area: title;
        .giftIcon {
            color: ${colors.primary};
        }
    }

    .filters {
        grid-area: filters;
        
        .filterTags {
            display: flex;
            justify-content: space-around;
        }
        .filterTag {
            border-radius: 16px;
        }
        .filterTagActive {
            background-color: ${colors.primary};
            color: #FFF;
        }
        .filterTagInactive {
            border: 1px solid ${colors.secondary};

        }
    }

    .tabs {
        grid-area: tabsAndList;
        text-align: left;
        overflow-y: scroll;
    
        .loadingIcon {
            margin-top: 20px;
            font-size: clamp(1rem, 25px, 2rem);
            text-align: center;
        }
    }
    
`;

export const Filters = styled.div`


`;