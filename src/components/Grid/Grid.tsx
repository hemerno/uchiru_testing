import { GridWrapper } from './Grid.style';

type PropTypes = {
  children: React.ReactNode;
};

const Grid: React.FC<PropTypes> = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
