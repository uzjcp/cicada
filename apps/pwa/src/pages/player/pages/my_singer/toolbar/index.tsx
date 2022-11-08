import styled from 'styled-components';
import IconButton from '#/components/icon_button';
import { MdAdd } from 'react-icons/md';
import Filter from './filter';
import { TOOLBAR_HEIGHT } from '../constants';
import Question from './question';
import { openCreateSingerDialog } from '../utils';

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: ${TOOLBAR_HEIGHT}px;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;

  backdrop-filter: blur(5px);
`;

function Toolbar() {
  return (
    <Style>
      <IconButton onClick={openCreateSingerDialog}>
        <MdAdd />
      </IconButton>
      <Question />
      <Filter />
    </Style>
  );
}

export default Toolbar;
