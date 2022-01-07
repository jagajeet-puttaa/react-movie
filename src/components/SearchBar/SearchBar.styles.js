import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;

`;

export const Content = styled.div`

    position: relative;
    max-width: var(--maxWidth);
    background: var(--medGrey);
    width: 100%;
    height: 55px;
    border-radius: 40px;
    margin: 0 auto;
    color: var(--white);

    img{
        position: absolute;
        left: 20px;
        top: 14px;
        width: 30px;
    }

    input{
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 80px;
        height: 40px;
        color: var(--white);
        background: transparent;
        width: 95%;
        border: 0px;

        :focus{
            outline: none;
        }
    }

`;