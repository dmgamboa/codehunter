import styled from "styled-components";

export const StyledBtn = styled.button`
    padding: 0.75rem;
    border: none;
    border-radius: 50%;
    filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
    background: #005526;
    color: white;
    font-size: 1.75rem;
    cursor: pointer;

    &:hover {
        background: #08497E;
    }
`;