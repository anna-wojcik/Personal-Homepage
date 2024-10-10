import styled, { css } from "styled-components"

export const LinkIcon = styled.a`
    color: ${({ theme }) => theme.colors.linkIcon.colorDefault};
    transition: color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $portfolio }) => $portfolio && css`
        color: ${({ theme }) => theme.colors.portfolioIcon.colorDefault};
    `};

    &:hover {
        color: ${({ theme }) => theme.colors.linkIcon.colorHover};

        ${({ $portfolio }) => $portfolio && css`
            color: ${({ theme }) => theme.colors.portfolioIcon.colorHover};
        `};
    };
`;

export const styleIcon = (Icon) => styled(Icon)`
    width: 48px;
    height: 48px;

    ${({ $portfolio }) => $portfolio && css`
        width: 40px;
        height: 40px;
    `};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
		width: 32px;
        height: 32px;
	}
`;