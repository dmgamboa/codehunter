import styled from "styled-components";

export const StyledContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 2;

    .kissy-doge {
        max-width: 30%;
    }

    h1 {
        text-align: center;
    }

    ul {
        li {
            list-style-type: "\\1F496";

            &:nth-child(2n) {
                list-style-type: "\\1F308";
            }

            &:nth-child(3n) {
                list-style-type: "\\1F984";
            }

            h3 {
                display: inline;
                margin-left: 0.5rem;

                &:after {
                    content: "|";
                    margin: 0 0.5rem;
                }
            }

            &.momo {
                list-style-type: "\\1F440";
            }

            &.secret {
                color: transparent;
                cursor: pointer;

                h3 {
                    color: transparent;
                }
            }
        }
    }
`;