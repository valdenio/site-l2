import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.gray};
  overflow: hidden;
  padding-bottom: 20rem;
`;

export const DivTextStyled = styled.div``;

export const DivMainTextStyled = styled.div`
  align-self: flex-start;
  // margin-top: 180px;
  justify-content: flex-end;
  width: 70%;

  /*width: 100%;
  max-width: 100%;
  margin-top: -180px;
  margin-left: 90px;*/

  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    align-self: flex-start;
    display: flex;
    width: 45%;
    max-width: 45%;
    // align-self: center;
    // margin-left: 5px;
    margin-bottom: 40px;
  }

  p {
    align-self: flex-start;
    display: flex;
    // width: 35%;
    max-width: 35%;
    // margin-left: -120px;
    // align-self: center;
    margin-bottom: 40px;
  }

  .line {
    width: 100%;
    // width: 90%;
    border-bottom: 2px solid #8e9195;
    // margin-left: 620px;
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;

export const DivImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 5px;
  // margin-left: 750px;
  gap: 30px;

  img {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ArrowSpinnerContainerStyled = styled.div`
  width: 30%;
  align-items: flex-start;

  display: flex;

  /*margin-left: 180px;
  margin-top: 90px;
  margin-bottom: 80px;*/

  div {
    width: 100%;
  }
`;
