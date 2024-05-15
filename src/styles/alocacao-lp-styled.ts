import styled from 'styled-components';
import { colors } from './colors';

// Geral

export const LPage = styled.div`
  font-family: 'Circular Air Pro', sans-serif;
  color: ${colors.black};
`;

export const MarginBlock = styled.div`
  margin: 0 24px;
`;

export const BreakLine = styled.br<{ screen: string }>`
  display: ${(props) => (props.screen == 'mobile' ? 'none' : 'block')};

  @media (max-width: 700px) {
    display: ${(props) => (props.screen == 'desktop' ? 'none' : 'block')};
  }
`;

export const Modal = styled.div`
  border-top: 1px solid;
  border-color: ${colors.white};
  height: 60vh;
  background-color: ${colors.black};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  border-radius: 50px 50px 0 0;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const ModalContentWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white} !important;
  margin: 2vh 8vh 10vh 8vh;
  justify-content: space-between;
  width: 50%;
`;

export const ModalTitle = styled.text`
  display: flex;
  font-size: clamp(32px, 6vh, 72px);
  font-style: normal;
  font-weight: 700;
  line-height: 90%;
  letter-spacing: clamp(-2px, 1vw, -4px);
  margin-top: 8vh;
`;

export const ModalResponsibleBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;

export const ModalResponsibleImage = styled.img`
  width: clamp(80px, 8vh, 120px);
  height: auto;
`;

export const ModalResponsibleData = styled.div`
  display: grid;
  gap: 1vh;
`;

export const ModalResponsibleDescription = styled.div`
  font-size: clamp(16px, 1vw, 22px);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.48px;
`;

export const ModalResponsibleName = styled.p`
  font-size: clamp(30px, 8vh, 40px);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.8px;
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  right: 5vh;
  top: 3vh;
  width: 4vh;
  height: 4vh;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const ModalQRCode = styled.img`
  width: auto;
  height: 70%;
  display: flex;
  align-self: center;
  margin: 0 auto;
  border-radius: 10px;
`;

// Navbar

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8vh;
`;

export const NavLogo = styled.img`
  background-color: transparent;
  max-width: 50px;
  margin: 24px;

  @media (max-width: 700px) {
    margin: 24px 0;
    max-width: 35px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const SocialLink = styled.a`
  font-size: clamp(8px, 1vw, 12px);
  font-style: normal;
  font-weight: 700;
`;

// Título e Subtítulo

export const TitleS1 = styled.text`
  font-size: clamp(50px, 8vw, 168px);
  font-style: normal;
  font-weight: 700;
  max-width: 50%;
  letter-spacing: clamp(-7px, 1vw, -10px);
  line-height: 90%;

  @media (max-width: 700px) {
    max-width: 70%;
    letter-spacing: -3.24px;
  } ;
`;

export const SubtitleS1 = styled.text`
  display: flex;
  align-items: center;
  font-size: clamp(20px, 2vw, 40px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.6px;
  gap: 16px;
  margin-top: 40px;
  margin-bottom: 8vh;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-top: 16px;
  } ;
`;

export const Pill = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border-radius: 100px;
  background-color: ${colors.white};
  padding: clamp(8px, 1.2rem, 28px) clamp(8px, 1.8rem, 32px);
  transition: all 1s ease-in-out;
`;

export const PillImage = styled.img`
  border-radius: 100px;
  max-width: 72px;
  max-height: 72px;
  width: 8vw;
  transition: all 1s ease-in-out;
`;

// Barra de Contatos

export const ContactBar = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) =>
    props.backgroundColor == 'black' ? colors.black : colors.offwhite};
  color: ${(props) =>
    props.backgroundColor == 'black' ? colors.white : colors.black} !important;
  border-radius: 12px;
  max-height: 88px;
  height: 8vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media (max-width: 700px) {
    height: 12vw;
    padding: 0 12px;
    display: none;
  }
`;

export const ContactBarText = styled.p<{ color: string }>`
  font-size: clamp(12px, 2.4vw, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.96px;

  @media (max-width: 700px) {
    line-height: 1;
    width: 50%;
  }
`;

export const ContactButtonsWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 16px;
  margin: 12px 0;
  align-items: center;
  padding: 1%;
`;

export const QRCodeButton = styled.img`
  cursor: pointer;
  border-radius: 100px;
  max-width: 64px;
  max-height: 64px;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${colors.secondary1};
  color: ${colors.black} !important;
  border-radius: 4px;
  padding: 0 clamp(12px, 3vw, 32px);
  gap: 10px;
  font-size: clamp(10px, 1.8vw, 18px);
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.36px;

  @media (max-width: 700px) {
    height: 70%;
  }
`;

export const WhatsappIcon = styled.img`
  width: clamp(12px, 2vw, 24px);
`;

// Lista de Profissionais

export const TitleS2 = styled.text`
  display: flex;
  font-size: clamp(32px, 6rem, 72px);
  font-style: normal;
  font-weight: 700;
  line-height: 90%;
  letter-spacing: clamp(-2px, 1vw, -4px);
  margin-top: 8vh;
`;

export const SubtitleS2 = styled.text`
  display: flex;
  font-size: clamp(16px, 3rem, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.8px;
  margin-top: 3vh;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10vh;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: clamp(16px, 2vw, 40px) 0;
`;

export const ServiceTitle = styled.text`
  font-size: clamp(30px, 2vw, 40px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.6px;
`;

export const ServiceType = styled.text`
  font-size: clamp(7px, 2vw, 12px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`;

export const ServicePeopleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: clamp(12px, 2vw, 24px) 0;
  gap: clamp(20px, 2vw, 40px);
`;

export const ServicePeopleImage = styled.img`
  width: 100px;
  height: 100px;
  width: 50%;
  height: 100%;
`;

export const ServicePeopleData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-end;
`;

export const ServicePeoplePill = styled.div`
  img {
    width: clamp(10px, 1vw, 24px);
    height: 100%;
  }

  display: flex;
  align-items: center;
  gap: 4px;
  font-size: clamp(10px, 1vw, 18px);
  background-color: ${colors.secondary1};
  width: fit-content;
  padding: clamp(8px, 1vw, 12px);
  border-radius: 100px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const ServiceTechnologiesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 700px) {
    gap: 2px;
  }
`;

export const ServiceTechnologiesTitle = styled.text`
  font-size: clamp(7px, 2vw, 12px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`;

export const ServiceTechnologiesImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ServiceTechnologiesImage = styled.img`
  height: clamp(23px, 2vw, 47px);
  width: auto;
`;

export const ServiceDescription = styled.text<{ seeMore: boolean }>`
  font-size: clamp(16px, 1vw, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.96px;
  transition: height 2s ease-in-out;

  @media (max-width: 700px) {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.seeMore ? 3 : 0)};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SeeMoreButton = styled.button`
  color: ${colors.green};
  display: flex;
  align-items: center;
  gap: 3px;
  text-transform: uppercase;
  font-size: 8px;
  font-style: normal;
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  border: none;
  margin-top: 4px;
  background-color: ${colors.offwhite};
`;

// Footer

export const FooterWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${colors.purple};
  color: ${colors.white};
  padding: 10vw 24px 5vw 24px;
  border-radius: 0 12vw 0 0;
  background-color: ${(props) => colors[props.backgroundColor]};
  display: grid;
`;

export const FooterS1TextWrapper = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterTitle = styled.text`
  font-size: clamp(32px, 5vw, 72px);
  font-style: normal;
  font-weight: 700;
  line-height: 90%;
  letter-spacing: clamp(-1.92px, 1vw, -4.32px);
  width: 30%;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const FooterDescription = styled.text`
  font-size: clamp(14px, 1.7vw, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.96px;
  width: 70%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const FooterItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: clamp(35px, 4vw, 100px) 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: clamp(14px, 1vw, 24px);
  margin: 5px;
`;

export const FooterItemImgBg = styled.div`
  padding: clamp(12px, 1vw, 24px);
  background-color: ${colors.offwhite};
  border-radius: 100px;
  align-items: center;
  display: flex;

  img {
    width: clamp(24px, 2vw, 36px);
  }
`;

export const SecondaryContactBar = styled.div<{ backgroundColor: string }>`
  display: none;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 16px;
  padding: 16px 12px;
  font-size: clamp(16px, 2.4vw, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.64px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.backgroundColor == 'black' ? colors.black : colors.offwhite};
  color: ${(props) =>
    props.backgroundColor == 'black' ? colors.white : colors.black};

  @media (max-width: 700px) {
    display: flex;
  }
`;

export const SecondaryWhatsappButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.secondary1};
  color: ${colors.black} !important;
  border-radius: 4px;
  padding: 8px;
  gap: 10px;
  font-size: clamp(10px, 1.8vw, 18px);
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const RecentClientsTitle = styled.div`
  margin-top: clamp(40px, 6vw, 80px);
  margin-bottom: clamp(20px, 3vw, 40px);
  font-size: clamp(8px, 1vw, 12px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: clamp(1.6px, 1vw, 2.4px);
  text-transform: uppercase;
  width: 70%;
  display: flex;
  align-content: flex-end;
  justify-self: end;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const LogoGridDesktop = styled.div`
  display: flex;
  width: 70%;
  justify-self: end;
  gap: clamp(45px, 2vw, 65px);
  flex-wrap: wrap;
  margin-bottom: 8vw;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoGridMobile = styled.div`
  display: none;
  margin-bottom: 8vw;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoItem = styled.img`
  height: clamp(21px, 2vw, 32px);
  width: auto;

  @media (max-width: 700px) {
    margin: 5vw;
  }
`;

export const LogoFalseBlock = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;

    &:last-child {
      justify-content: space-between;
    }
  }
`;

export const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const CopyrightText = styled.text`
  font-size: clamp(8px, 1vw, 12px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: clamp(1.6px, 1vw, 2.4px);
  text-transform: uppercase;
`;
