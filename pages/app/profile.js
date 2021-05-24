import React from 'react';

import { authService } from '../../src/services/auth/authService';

export default function ProfilePage(props) {
  return (
    <div>
      Página de Profile!
      {JSON.stringify(props, null, 4)}
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('Server Side!');
  const auth = authService(context);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();

    return {
      props: {
        user: session,
      },
    };
  }

  context.res.writeHead(307, { location: '/login' });

  return context.res.end();
}
