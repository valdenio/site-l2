import styled, { keyframes }  from 'styled-components';

export const ArrowSpinnerComponentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ImageArrowSpinnerStyled = styled.img`
    &.absolute {
        position: absolute;
        margin: 0 auto;
    }

    &.animate {
        animation: ${SpinningAnimation} 27s linear infinite;
        
    }

    @media (max-width: 800px) {
        &:first-child {
            width: 113px;
            height: 113px;
        }

        &:last-child {
            width: 12px;
            height: 12px;
        }
    }
`;