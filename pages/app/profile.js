import React from 'react';

import { authService } from '../../src/services/auth/authService';
import { useUserService } from '../../src/services/user/hook';
import { userService } from '../../src/services/user/userService';

export default function ProfilePage() {
  const dados = useUserService.getProfilePage();

  return (
    <div>
      Página de Profile!
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
      {dados.loading && 'Loading...'}
      {!dados.loading && dados.data && 'Carregou com sucesso!'}
      {!dados.loading && dados.error}
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const auth = authService(context);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(context);

    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  context.res.writeHead(307, { location: '/login' });

  return context.res.end();
}
