import { FloatingButtonWPP } from './styled';

function WhatsAppButton() {
  return (
    <FloatingButtonWPP>
      <a
        target="blank"
        href="https://wa.me/5553991583941?text=Olá pessoal da L2, entro em contato para..."
      >
        <img alt="manda um zap" src="/images/manda_um_zap.svg" />
      </a>
    </FloatingButtonWPP>
  );
}

export default WhatsAppButton;
