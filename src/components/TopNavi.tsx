
import * as React from 'react';
import styled from 'styled-components';

const NaviContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  > *:not(:last-child) {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 28px;
    font-weight: bold;
  }

  a:hover {
    background-color: #c6c6c6;
  }
`;

export const TopNavi = () => {
  return (
    <NaviContainer>
      <a href="/dashboard">Dashboard</a>
      <a href="/reports">Reports</a>
    </NaviContainer>
  );
};
