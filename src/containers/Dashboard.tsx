import * as React from 'react';
import { Hello } from '../components/Hello';
import { Page } from '../components/Page';
import { MainContainer } from '../globalstyles';

export const Dashboard = () => {
    return (
      <Page>
        <MainContainer>
          <p>React-kickstart with parcel and typescript</p>
          <Hello compiler="Parcel" framework="123" />
        </MainContainer>
      </Page>
    );
};
