import styled from 'styled-components';

export const FloatingButtonWPP = styled.div`
  position: relative;
  text-align: end;
  margin: 15px;
  bottom: 0;
  right: 0;

  img {
    width: 85px;
    height: 85px;
  }

  @media (max-width: 900px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;
