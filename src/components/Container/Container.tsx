/* Styles */
import { ContainerWrapper } from './Container.style';

type PropTypes = {
  children: React.ReactNode;
};

const Container: React.FC<PropTypes> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
