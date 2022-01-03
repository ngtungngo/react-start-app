import * as React from 'react';
import styled from 'styled-components';

const TaskbarContainer = styled.nav`
  background: ${(props) => props.theme.colors.surface} !important;
  color: ${(props) => props.theme.colors.text.default} !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  width: 100%;

  .headline {
    font-size: 26px;
    font-weight: 400;
  }

  > * {
    display: inline-flex;
    align-items: center;
  }
  .left {
    display: flex;
    padding-left: 24px;
    .product-area {
      padding: 12px 16px;
      max-width: 424px;
      display: inline-flex;
      align-items: center;
    }

    .logo {
      border: 1px dotted ${(props) => props.theme.colors.inactive};
      width: 80px;
      height: 40px;
      padding: 11px 19px 8px 15px;
    }
  }

  .left,
  .right {
    flex: 1 1 calc(50% - 80px);
  }

  .right {
    justify-content: flex-end;
  }

  .center {
    flex: 0 0 160px;
  }
`;

const getClockData = () => {
  const time = new Date();
  const hourString = time.getHours().toString().padStart(2, '0');
  const minuteString = time.getMinutes().toString().padStart(2, '0');
  const showColon = time.getSeconds() % 2 === 0;
  return {
    hourString,
    minuteString,
    showColon,
  };
};

interface TaskbarProps {
  appName: string;
  hourStr?: string;
  minuteStr?: string;
  darkMode?: boolean;
}

export const Taskbar = (props: TaskbarProps) => {
  const { appName, hourStr, minuteStr } = props;
  const [{ hourString, minuteString, showColon }, setClock] =
    React.useState(getClockData);
  React.useEffect(() => {
    if (!hourStr && !minuteStr) {
      const intervalId = setInterval(() => {
        setClock(getClockData());
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <TaskbarContainer>
      <div className="left">
        <div className="logo">LOGO</div>
        <div className="product-area">
          <div className="product-name headline">{appName}</div>
        </div>
      </div>
      <div className="center">
        <div className="info-area headline">
          <div className="">
            {hourStr ? hourStr : hourString}
            <span style={{ minWidth: '1rem' }}>
              {((showColon || hourStr) && ':') || ' '}
            </span>
            {minuteStr ? minuteStr : minuteString}
          </div>
        </div>
      </div>
      <div className="right"></div>
    </TaskbarContainer>
  );
};
