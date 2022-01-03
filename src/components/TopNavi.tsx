
import * as React from 'react';
import styled from 'styled-components';

const NaviContainer = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 24%) 0rem 0.25rem 0.5rem;
  border-top: 0.0625rem solid rgb(226, 230, 235);
  border-bottom: 0.0625rem solid rgb(167, 171, 175);

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  padding: 0px 1.5rem;
  overflow-x: auto;

  background-color: ${(props) => props.theme.colors.surface};
  > * {
    padding: 12px 24px 12px 24px;
    height: 3.5rem;
    white-space: nowrap;
    border-right: 0.0625rem solid rgb(226, 230, 235);
  }

  > *:not(:last-child) {
  }

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
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
