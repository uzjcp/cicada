import styled from 'styled-components';

import { VERTICAL_SPACE } from '../constants';
import Copyright from './copyright';
import { HORIZONTAL_LAYOUT_WIDTH } from './constants';

const Style = styled.div`
  background-color: var(--color-primary);
  > .content {
    padding: 50px ${VERTICAL_SPACE}px;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: ${HORIZONTAL_LAYOUT_WIDTH}px) {
    > .content {
      flex-direction: column;
    }
  }
`;

function Footer() {
  return (
    <Style>
      <div className="content">
        <Copyright />
      </div>
    </Style>
  );
}

export default Footer;
