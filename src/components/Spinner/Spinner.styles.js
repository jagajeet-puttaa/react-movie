import styled from "styled-components";

export const Spinner = styled.div`

    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px auto;

    animation: spin 0.8s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`;