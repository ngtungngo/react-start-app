import * as React from 'react';
import { Hello } from '../components/Hello';
import { TopNavi } from '../components/TopNavi';
export const Dashboard = () => {
    return (
      <div>
        <TopNavi />
        <p>React-kickstart with parcel and typescript</p>
        <Hello compiler="Parcel" framework="123" />
      </div>
    );
};
