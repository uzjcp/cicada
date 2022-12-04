import { CSSVariable } from '#/global_style';
import useTitlebarArea from '#/utils/use_titlebar_area_rect';
import styled from 'styled-components';

const Style = styled.div`
  z-index: 1;

  position: sticky;
  top: 0;

  user-select: none;
  font-size: 18px;
  font-weight: bold;
  color: ${CSSVariable.TEXT_COLOR_PRIMARY};
  backdrop-filter: blur(5px);
`;

function Top() {
  const { height } = useTitlebarArea();
  return (
    <Style
      style={{
        padding: `${height + 15}px 20px 15px 20px`,
      }}
    >
      排序乐单
    </Style>
  );
}

export default Top;
