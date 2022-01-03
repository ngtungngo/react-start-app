import * as React from 'react';
import styled from 'styled-components';
import { Taskbar } from './Taskbar';
import { TopNavi } from './TopNavi';

const Header = styled.div`
  background: ${(props) => props.theme.colors.surface} !important;
  color: ${(props) => props.theme.colors.textColor} !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 64px;
`;

const PageContent = styled.div`
  padding-top: 64px;
  margin: 1.5rem;
  @media screen and (min-width: 1200px) {
    transition: width 0.25s ease;
  }
`;


interface PageProps {
  children?: React.ReactNode;
  hourStr?: string;
  minuteStr?: string;
  darkMode?: boolean;
  message?: string;
  error?: string | any;
}

export const Page = (props: PageProps) => {
    const {darkMode} = props;
  return (
    <>
      <Header>
        <Taskbar
          appName="My App"
          darkMode={darkMode}
          minuteStr={props.minuteStr}
          hourStr={props.hourStr}
        />
        <TopNavi />
      </Header>
      <PageContent isOpen={open}>{props.children}</PageContent>
    </>
  );
};
