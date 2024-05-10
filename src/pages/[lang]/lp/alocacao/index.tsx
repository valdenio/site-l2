import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  LPage,
  NavWrapper,
  NavLogo,
  Pill,
  PillImage,
  SocialLink,
  SocialWrapper,
  SubtitleS1,
  TitleS1,
  ContactBar,
  ContactButtonsWrapper,
  WhatsappButton,
  ContactBarText,
  QRCodeButton,
  TitleS2,
  WhatsappIcon,
  SubtitleS2,
  ServicesGrid,
  SecondaryContactBar,
  SecondaryWhatsappButton,
  FooterWrapper,
  FooterTitle,
  MarginBlock,
  FooterDescription,
  FooterS1TextWrapper,
  BreakLine,
  FooterItemsGrid,
  FooterItem,
  FooterItemImgBg,
  RecentClientsTitle,
  LogoItem,
  LogoFalseBlock,
  LogoGridDesktop,
  LogoGridMobile,
  NavFooter,
  CopyrightText,
  Modal,
  ModalContent,
  ModalResponsibleBlock,
  ModalResponsibleImage,
  ModalResponsibleDescription,
  ModalResponsibleName,
  ModalResponsibleData,
  ModalTitle,
  ModalQRCode,
  ModalCloseButton,
  ModalContentWrapper,
} from './styled';
import ServiceComponent, { ServiceComponentProps } from './servicecomponent';

const AssigmentLP: NextPage = () => {
  const language = i18next.language.substring(0, 2);

  const [openModal, setOpenModal] = useState(false);

  const servicesData: ServiceComponentProps[] = [
    {
      title: 'dev. front-end',
      type: 'tecnologia',
      imageSrc: 'service1',
      peopleQuantity: '14',
      technologiesTitle: 'tecnologias: ',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Implementam a interface visual e interativa de um website ou aplicativo, traduzindo o design em código. Nossos frontends colaboram de perto com designers e devs backend para integrar componentes e garantir a funcionalidade da aplicação.',
    },
    {
      title: 'dev. back-end',
      type: 'tecnologia',
      imageSrc: 'service2',
      peopleQuantity: '23',
      technologiesTitle: 'tecnologias: ',
      technologies: ['html', 'css', 'react', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Criam e mantém a lógica e funcionalidade dos servidores e bancos de dados que sustentam as aplicações web e móveis. Desenvolvem APIs, gerenciam dados e garantem a segurança e escalabilidade do sistema.',
    },
    {
      title: 'ux/ui design',
      type: 'design',
      imageSrc: 'service3',
      peopleQuantity: '06',
      technologiesTitle: 'tecnologias: ',
      technologies: ['Figma', 'adobePremiere', 'photoshopt', 'illustrator'],
      description:
        // eslint-disable-next-line max-len
        'Esse profissional pesquisa, projeta e avalia a experiência do usuário em produtos digitais. Eles colaboram com equipes multidisciplinares para entender as necessidades dos usuários, criar wireframes e protótipos, e realizar testes de usabilidade. Seu objetivo é garantir que os produtos sejam fáceis de usar e eficazes para os usuários.',
    },
    {
      title: 'eng. e cient. de dados',
      type: 'tecnologia',
      imageSrc: 'service4',
      peopleQuantity: '02',
      technologiesTitle: 'tecnologias: ',
      technologies: ['html', 'css', 'react', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Responsável por coletar, limpar, analisar e interpretar grandes conjuntos de dados para extrair insights e informar decisões estratégicas. Eles utilizam técnicas estatísticas, aprendizado de máquina e análise de dados para resolver problemas complexos e prever tendências futuras.',
    },
    {
      title: 'qa',
      type: 'tecnologia',
      imageSrc: 'service1',
      peopleQuantity: '02',
      technologiesTitle: 'tecnologias: ',
      technologies: ['html', 'css', 'react', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Garante a qualidade e a integridade dos produtos de software. Eles realizam testes de software, identificam e relatam defeitos e anomalias, e garantem que os produtos atendam aos requisitos e padrões de qualidade estabelecidos.',
    },
    {
      title: 'marketing e tráfego',
      type: 'design',
      imageSrc: 'service2',
      peopleQuantity: '14',
      technologiesTitle: 'tecnologias: ',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Desenvolve e implementa estratégias para promover produtos ou serviços, alcançar clientes em potencial e aumentar as vendas. Isso pode incluir atividades como pesquisa de mercado, análise de concorrência, definição de público-alvo, criação de campanhas de publicidade, gestão de redes sociais, SEO (otimização para mecanismos de busca), marketing de conteúdo, email marketing e análise de desempenho das campanhas.',
    },
    {
      title: 'po/pm',
      type: 'gestão',
      imageSrc: 'service3',
      peopleQuantity: '02',
      technologiesTitle: 'métodos: ',
      technologies: ['html', 'css', 'javascript', 'react', 'angular', 'python'],
      description:
        // eslint-disable-next-line max-len
        'Representam os interesses dos stakeholders e do cliente durante o desenvolvimento do projeto. Eles definem e priorizam os requisitos do projeto, comunicar as necessidades do cliente à equipe de desenvolvimento, garantir a entrega de valor ao cliente em cada incremento do produto, e tomar decisões sobre o escopo e as funcionalidades do projeto.',
    },
  ];

  useEffect(() => {
    const nav = document.querySelector('.nav') as HTMLElement;
    nav.style.display = 'none';

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <LPage>
      {openModal && (
        <Modal>
          <ModalContentWrapper>
            <ModalContent>
              <ModalTitle>
                Fale com <br /> a nossa comercial
              </ModalTitle>
              <ModalResponsibleBlock>
                <ModalResponsibleImage
                  alt="comercial"
                  src="/images/AssignmentsLP/comercial.svg"
                />
                <ModalResponsibleData>
                  <ModalResponsibleDescription>
                    Responsável comercial:
                  </ModalResponsibleDescription>
                  <ModalResponsibleName>Michelle</ModalResponsibleName>
                </ModalResponsibleData>
              </ModalResponsibleBlock>
            </ModalContent>
          </ModalContentWrapper>
          <ModalQRCode alt="qrcode" src="/images/AssignmentsLP/qrcode.png" />
          <ModalCloseButton
            alt="closebutton"
            onClick={() => setOpenModal(false)}
            src="/images/AssignmentsLP/close.svg"
          />
        </Modal>
      )}
      <MarginBlock>
        {/* HEADER */}
        <NavWrapper>
          <SocialLink href={`/${language}`}>
            <NavLogo src="/images/Logo-Small.svg" />
          </SocialLink>
          <SocialWrapper>
            <SocialLink href="https://www.instagram.com/l2code.com.br">
              INSTAGRAM
            </SocialLink>
            <SocialLink href="https://br.linkedin.com/company/l2code-dev">
              LINKEDIN
            </SocialLink>
          </SocialWrapper>
        </NavWrapper>
        <TitleS1>
          Alocação <br /> de times
        </TitleS1>
        <SubtitleS1>
          especialistas
          <Pill>
            <PillImage src="/images/AssignmentsLP/pill1.svg" />
            ciência de dados
          </Pill>
          para sua
          <Pill>
            fintech
            <PillImage src="/images/AssignmentsLP/pill2.svg" />
          </Pill>
        </SubtitleS1>
        <ContactBar backgroundColor="black">
          <ContactBarText color="">Fale com nossa comercial</ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => setOpenModal(true)}
              src="/images/AssignmentsLP/qrcode-contactbar.svg"
            />
            <WhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="black">
          Fale com a nossa comercial
          <SecondaryWhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>

        {/* LISTA DE PROFISSIONAIS */}
        <TitleS2>Qual perfil sua empresa busca?</TitleS2>
        <SubtitleS2>
          Atuamos em todo processo de criação do produto digital, com
          profissionais de todas as senioridades, de júniors a sêniors.
        </SubtitleS2>
        <ServicesGrid>
          {servicesData.map((serviceData) => {
            return <ServiceComponent {...serviceData} />;
          })}
        </ServicesGrid>
      </MarginBlock>

      {/* FOOTER */}
      <FooterWrapper backgroundColor="purple" style={{ paddingBottom: '18vw' }}>
        <FooterS1TextWrapper>
          <FooterTitle>
            Contrate <BreakLine screen="desktop" /> sob medida
          </FooterTitle>
          <FooterDescription>
            Nosso modelo é diferente, porque entendemos o desafio e cultura da
            sua empresa antes de recomendar um profissional. <br />
            <br /> Afinal, todo time trabalha com uma tecnologia e software
            gráfico específico, ou mesmo busca determinada personalidade.
          </FooterDescription>
        </FooterS1TextWrapper>

        <FooterItemsGrid>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="globe" src="/images/AssignmentsLP/globe.svg" />
            </FooterItemImgBg>
            Remoto, mas sempre online
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="shield" src="/images/AssignmentsLP/shield.svg" />
            </FooterItemImgBg>
            Proteção de NDA
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="monitor" src="/images/AssignmentsLP/monitor.svg" />
            </FooterItemImgBg>
            Equipamento incluso
          </FooterItem>
          <FooterItem>
            <FooterItemImgBg>
              <img alt="message" src="/images/AssignmentsLP/message.svg" />
            </FooterItemImgBg>
            Brasileiros, mas poliglotas
          </FooterItem>
        </FooterItemsGrid>

        <ContactBar backgroundColor="black">
          <ContactBarText color="">Fale com nossa comercial</ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => setOpenModal(true)}
              src="/images/AssignmentsLP/qrcode-contactbar.svg"
            />
            <WhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="black">
          Agregue uma pessoa ou um time inteiro à sua estrutura pelo período
          mínimo de 1 mês
          <SecondaryWhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>
      </FooterWrapper>

      <FooterWrapper backgroundColor="black" style={{ marginTop: '-12vw' }}>
        <FooterS1TextWrapper>
          <FooterTitle>
            Confie <BreakLine screen="desktop" /> na entrega
          </FooterTitle>
          <FooterDescription>
            Há 7 anos ajudamos grandes bancos e fintechs nacionais a entregarem
            solução de excelência, conquistando novos cliente e valorizando seus
            papéis na bolsa de valores. <br /> <br /> Fazemos isso com processo
            e de modo consistente.
          </FooterDescription>
        </FooterS1TextWrapper>
        <RecentClientsTitle>Clientes recentes</RecentClientsTitle>
        <LogoGridDesktop>
          <LogoItem
            alt="companylogo1"
            src="/images/AssignmentsLP/companylogo1.svg"
          />
          <LogoItem
            alt="companylogo2"
            src="/images/AssignmentsLP/companylogo2.svg"
          />
          <LogoItem
            alt="companylogo3"
            src="/images/AssignmentsLP/companylogo3.svg"
          />
          <LogoItem
            alt="companylogo4"
            src="/images/AssignmentsLP/companylogo4.svg"
          />
          <LogoItem
            alt="companylogo5"
            src="/images/AssignmentsLP/companylogo5.svg"
          />
        </LogoGridDesktop>
        <LogoGridMobile>
          <LogoFalseBlock>
            <LogoItem
              alt="companylogo1"
              src="/images/AssignmentsLP/companylogo1.svg"
            />
            <LogoItem
              alt="companylogo2"
              src="/images/AssignmentsLP/companylogo2.svg"
            />
          </LogoFalseBlock>
          <LogoFalseBlock>
            <LogoItem
              alt="companylogo3"
              src="/images/AssignmentsLP/companylogo3.svg"
            />
            <LogoItem
              alt="companylogo4"
              src="/images/AssignmentsLP/companylogo4.svg"
            />
            <LogoItem
              alt="companylogo5"
              src="/images/AssignmentsLP/companylogo5.svg"
            />
          </LogoFalseBlock>
        </LogoGridMobile>

        <ContactBar backgroundColor="white">
          <ContactBarText color="">Fale com nossa comercial</ContactBarText>
          <ContactButtonsWrapper>
            <QRCodeButton
              onClick={() => setOpenModal(true)}
              src="/images/AssignmentsLP/qrcode-contactbar.svg"
            />
            <WhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
              <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
              Iniciar chat
            </WhatsappButton>
          </ContactButtonsWrapper>
        </ContactBar>
        <SecondaryContactBar backgroundColor="white">
          Profissionais especializados a partir de R$ 00,00 / hora
          <SecondaryWhatsappButton href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para...">
            <WhatsappIcon src="/images/AssignmentsLP/wpp-icon.svg" />
            Iniciar chat
          </SecondaryWhatsappButton>
        </SecondaryContactBar>
      </FooterWrapper>

      <NavFooter>
        <SocialLink href={`/${language}`}>
          <NavLogo src="/images/AssignmentsLP/white-logo.svg" />
        </SocialLink>
        <CopyrightText>© 2024 todos os direitos reservados</CopyrightText>
      </NavFooter>
    </LPage>
  );
};

export default AssigmentLP;
