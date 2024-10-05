import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.color.gray};
    gap: 12px;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
`;

export const Button = styled.button`
    width: 48px;
    height: 26px;
    background: ${({ theme }) => theme.color.mercury};
    border: 1px solid ${({ theme }) => theme.color.gray};        border-radius: 13px;
    position: relative;  
    cursor: pointer;      
`;

export const Box = styled.div`
    ${({ $flicker }) => $flicker && css`
        position: absolute; 
        background: ${({ theme }) => theme.color.gray};
        width: 20px;
        height: 20px;
        border-radius: 10px;
        top: 2px;
        width: 20px;
        left: 3px;
        transition: 0.3s;

        ${({ $move }) => $move && css`
            transform: translateX(20px);
        `}
    `};

    ${({ $sun }) => $sun && css`
        position: absolute;
        top: 5px;
        left: 6px;
        transition: 0.3s;

        ${({ $move }) => $move && css`
            transform: translateX(20px);
        `}
    `}
`;