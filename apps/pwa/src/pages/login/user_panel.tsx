import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import p, { Profile as ProfileType } from '@/global_states/profile';
import getRandomCover from '@/utils/get_random_cover';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect } from 'react';
import parseSearch from '@/utils/parse_search';
import { LoginQuery } from '@/constants/query';
import useNavigate from '#/utils/use_navigate';
import Paper from './paper';
import Logo from './logo';
import { panelCSS } from './constants';

const NICKNAME_MAX_LENGTH = 10;
const DEFAULT_AVATAR = getRandomCover();
const Style = styled(Paper)`
  ${panelCSS}

  .avatar-box {
    display: flex;
    align-items: center;
    justify-content: center;

    > .avatar {
      width: 100px;
      height: 100px;
    }
  }

  .text {
    text-align: center;
    font-size: 18px;
  }
`;

function Profile({ profile }: { profile: ProfileType }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const query = parseSearch<LoginQuery>(location.search);
      const redirect = query.redirect || '/';
      navigate({ path: redirect });
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [location.search, navigate]);

  return (
    <Stack spacing={4}>
      <Logo />
      <div className="avatar-box">
        <Avatar className="avatar" src={profile.avatar || DEFAULT_AVATAR} />
      </div>
      <Typography className="text">
        🎉 欢迎回来,{' '}
        {profile.nickname.length > NICKNAME_MAX_LENGTH
          ? `${profile.nickname.slice(0, NICKNAME_MAX_LENGTH)}...`
          : profile.nickname}
      </Typography>
      <LinearProgress />
    </Stack>
  );
}

function UserPanel({ visible }: { visible: boolean }) {
  const profile = p.useState();

  let content: ReactNode = null;
  if (profile) {
    content = <Profile profile={profile} />;
  }

  return <Style visible={visible ? 1 : 0}>{content}</Style>;
}

export default UserPanel;
