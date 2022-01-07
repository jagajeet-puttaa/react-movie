import styled from "styled-components";

export const Wrapper = styled.button`

    display: block;
    background : var(--darkGrey);
    color : var(--white);
    border: 0;
    height: 60px;   
    width: 20%;
    border-radius: 30px;
    min-width: 200px;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition : all 0.3s;
    cursor : pointer;
    outline : none;

    :hover{
        opacity: 0.8;
    }

`;