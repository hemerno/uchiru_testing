import { Container, IndicatorWrapper } from './ProgressIndicator.style';

const ProgressIndicator: React.FC = () => {
  return (
    <Container>
      <IndicatorWrapper>
        <div className="loader-1"></div>
        <div className="loader-2"></div>
        <div></div>
      </IndicatorWrapper>
    </Container>
  );
};

export default ProgressIndicator;
