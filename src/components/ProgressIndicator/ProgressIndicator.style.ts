import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const IndicatorWrapper = styled.div`
  /* https://github.com/tobiasahlin/SpinKit */
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  & > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  & .loader-1 {
    animation-delay: -0.32s;
  }
  & .loader-2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
