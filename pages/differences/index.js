import CardDiferentialsContainer from '../../components/CardDiferentialsContainer';
import CardDiferentialsContent from '../../components/CardDiferentialsContent';

const DifferencesData = [
  {
    title: 'Garantia Estendida',
    description:
      'Garantia acima do mercado, por exemplo: 3 anos para estrutura e 1 ano para automatização.',
  },
  {
    title: 'Materiais de Alta Qualidade',
    description:
      'Uso de aço galvanizado, pintura eletrostática, ou portas com isolamento térmico/acústico.',
  },
  {
    title: 'Personalização Sob Medida',
    description:
      'Modelos personalizados: cores, tamanhos, vazados, com logotipo, motorizações, etc.',
  },
  {
    title: 'Automatização',
    description:
      'Oferecer portas automáticas com controle remoto, sensores de presença ou integração com sistemas de segurança.',
  },
  {
    title: 'Orçamento Rápido e Gratuito',
    description: 'Atendimento por WhatsApp com simulação imediata de preços.',
  },
  {
    title: 'Atendimento Emergencial 24h',
    description:
      'Manutenção ou desbloqueio de portas travadas fora do horário comercial.',
  },
];

const Differences = () => {
  return DifferencesData.map((item, index) => {
    <CardDiferentialsContent
      key={index}
      icon="asdf"
      title={item.title}
      description={item.description}
    />;
  });
};

const Testimonials = () => {
  return (
    <div className="w-screen h-screen grid">
      <div className="bg-zinc-900 h-full w-full min-h-1/2"></div>
      <CardDiferentialsContainer>{Differences()}</CardDiferentialsContainer>
    </div>
  );
};

export default Testimonials;
