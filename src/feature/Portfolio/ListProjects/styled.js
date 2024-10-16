import styled from "styled-components";

export const ProjectsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    padding: 0;
    list-style-type: none;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ProjectItem = styled.li`
    max-width: 592px;
    min-width: 288px;
    background:  ${({ theme }) => theme.colors.listProduct.background};
    border: 6px solid ${({ theme }) => theme.colors.listProduct.border};
    border-radius: 4px;
    padding: 56px;

    display: flex;
    flex-direction: column;
    text-align: left;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        padding: 24px;
        width: 358px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        width: 238px;
    }
`;

export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        gap: 10px;
    }
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.listProduct.title};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.listProduct.content};
    line-height: 25.2px;
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.largeMax}px) {
        margin: 16px 0;
        font-size: 14px;
        line-height: 16.94px;
    }
`;

export const Paragraph = styled(Description)`
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.listProduct.link};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.listProduct.borderLink};
`;
