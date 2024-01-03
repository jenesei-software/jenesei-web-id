import React from 'react';
import { AppRoutes, AppRoutesAuthorization } from '@core/router';
import { InnerContainer, MainContainer } from '.';

/**
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const isAuth = true;
  return (
    <MainContainer>
      <InnerContainer>{isAuth ? <AppRoutes /> : <AppRoutesAuthorization />}</InnerContainer>
    </MainContainer>
  );
};
