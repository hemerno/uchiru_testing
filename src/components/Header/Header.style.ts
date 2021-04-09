import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  background: #2196f3;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);

  section {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
  }
  .header-link {
    display: block;
    height: 100%;
    padding: 2rem 1rem;
    opacity: 0.7;

    &:hover {
      background: #1e88e5;
      opacity: 1;
    }
    &.selected {
      background: #1e88e5;
      opacity: 1;
    }
  }
`;
