import { useMenu } from '../hooks/hooks';
import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

  .active {
    background: ${(props) => props.theme.colors.selected_lighten};
    color: ${(props) => props.theme.colors.selected};
    font-weight: bold;
    border-bottom: 0.125rem solid #094a9b;
  }

  a:hover {
    background-color: #c6c6c6;
  }
`;

export const TopNavi = () => {
  const { currentPage, setCurrentPage } = useMenu();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!currentPage) {
      setCurrentPage('dashboard');
    }
  }, []);
  const handleSetActive = (page) => (e) => {
    e && e.preventDefault();
    setCurrentPage(page);
    navigate(`/${page.toLowerCase().replace(' ', '-')}`);
  };
  
  return (
    <NaviContainer>
      <a
        target="_selft"
        href="#"
        className={!currentPage || currentPage == 'dashboard' ? 'active' : ''}
        onClick={handleSetActive('dashboard')}
      >
        Dashboard
      </a>
      <a
        target="_selft"
        href="#"
        className={currentPage == 'reports' ? 'active' : ''}
        onClick={handleSetActive('reports')}
      >
        Reports
      </a>
    </NaviContainer>
  );
};
