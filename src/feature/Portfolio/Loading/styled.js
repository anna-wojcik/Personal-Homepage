import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIconLightSVG } from "../../../images/loadingLight.svg";
import { ReactComponent as LoadingIconDarkSVG } from "../../../images/loadingDark.svg";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } 
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingIconLight = styled(LoadingIconLightSVG)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100px;
        height: 100px;
    }
`;

export const LoadingIconDark = styled(LoadingIconDarkSVG)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100px;
        height: 100px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 88px 0 48px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;

export const RotatingIcon = styled.div`
    animation: ${rotate} 2s linear infinite;
    display: inline-block;
`;