import * as React from 'react';
import { Hello } from './Hello';

export const App = () => {
  return (
    <div>
      <p>React-kickstart with parcel and typescript</p>
      <Hello compiler="Parcel" framework="123" />
    </div>
  );
};