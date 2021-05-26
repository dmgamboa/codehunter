import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Layout = styled.div`
    /* height: 89vh; */
    /* width: 100vw; */
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    /* display: grid;
    grid-template: 
        "title" 10%
        "filters" 8%
        "tabsAndList" 82%
        / 100%; */
    .title {
        grid-area: title;
        .giftIcon {
            color: ${colors.primary};
        }
    }

    .filters {
        /* grid-area: filters; */
        margin-bottom: 5px;
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
        /* grid-area: tabsAndList; */
        text-align: left;
        /* overflow-y: scroll; */
        .loadingIcon {
            margin-top: 20px;
            font-size: clamp(1rem, 25px, 2rem);
            text-align: center;
        }
    }

    .top {
        position: sticky;
        top: -1rem;
        padding-top: 1.5rem;
        margin-left: -1px;
        z-index: 99;
        background: #fff;
    }

    .ant-card {
        margin-bottom: 0.5rem;
    }
    .ant-card-cover {
        /* border: 1.5px solid #fff; */
    }
    .scrollToTop {
        position: absolute;
        bottom: 80px;
        right: 35px;
    }
    .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::after{
        box-shadow: inset -10px 0 8px -8px rgb(0 0 0 / 30%);
    }
    .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::before {
        box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 30%);
    }
    .ant-tabs-extra-content {
        padding-left: 0.5rem;
    }
`;

export const Filters = styled.div`

`;

export const StyledInfiniteScroll = styled(InfiniteScroll)`

`;