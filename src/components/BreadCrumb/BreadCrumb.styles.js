import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    background : var(--medGrey);
    width : 100%;
    height : 70px;
`;

export const Content = styled.div`

    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    /* padding : 0 20px; */

    span{
        color : var(--white);
        font-size : var(--fontMed);
        padding-right : 10px;

        @media screen and (max-width: 768px){
            font-size: var(--fontSmall);
        }
    }
`;

