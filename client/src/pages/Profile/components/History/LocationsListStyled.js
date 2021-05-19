import styled from "styled-components";


export const ListStyled = styled.div`
    max-height: 220px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: 2px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    background: rgb(154,189,169);
    background: linear-gradient(180deg, rgba(154,189,169,1) 0%, rgba(176,212,192,0.6055015756302521) 71%, rgba(202,217,209,0.30858280812324934) 100%);
    color: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(64,64,64,0.7) 33%, rgba(230,230,230,0.2) 100%);
    location {
        border-bottom: 1px solid black;
        div {
            border-bottom: 1px solid black;
            height: 40px;
            padding: 10px;
            display: block;
            text-align: center;
            p {
                vertical-align: middle;
                
            }
            .location-name {
                display: inline;
                float: left;
                text-align: left;
            }
            .location-date {
                display: inline;
                text-align: center;
            }
            .location-points {
                display: inline;
                text-align: right;
                float: right;
            }
        }
    }
    div {
        border-bottom: 1px solid black;
        height: 40px;
        padding: 10px;
        display: block;
        text-align: center;
        p {
            vertical-align: middle;
            
        }
        .location-name {
            display: inline;
            float: left;
            text-align: left;
        }
        .location-date {
            display: inline;
            text-align: center;
        }
        .location-points {
            display: inline;
            text-align: right;
            float: right;
        }
    }
`;

export const HistoryListStyled = styled.div`
    margin: 20px;
    margin-top: 5%;
`;
