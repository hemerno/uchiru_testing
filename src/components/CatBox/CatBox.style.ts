import styled from 'styled-components';

export const CatWrapper = styled.article`
  position: relative;
  place-self: center;
  width: 225px;
  height: 225px;
  transition: 0.1s linear transform, 0.1s linear box-shadow;

  &:hover {
    transform: scale(1.13);
    box-shadow: 0px 9px 18px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.24);
  }

  img {
    width: 225px;
    height: 225px;
    object-fit: cover;
  }
`;

export const CatLikeButton = styled.div`
  cursor: pointer;
  width: 40px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  fill: transparent;
  stroke: #f24e1e;
  transition: 0.1s linear fill, 0.1s linear stroke;

  & svg path:hover {
    fill: #f24e1e;
  }
`;
