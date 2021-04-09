import React from 'react';
/* Styles */
import { ErrorWrapper } from './ErrorPage.style';

type PropTypes = {
  error?: string;
  message: string;
};

const ErrorPage: React.FC<PropTypes> = ({
  error = '404',
  message = 'No cats found here :(',
}) => {
  return (
    <ErrorWrapper>
      <p>{error}</p>
      <p>{message}</p>
    </ErrorWrapper>
  );
};

export default ErrorPage;
