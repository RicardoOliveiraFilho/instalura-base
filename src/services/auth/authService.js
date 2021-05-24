import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/HttpClient';
import isStagingEnv from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

export const authService = context => {
  const cookies = parseCookies(context);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }

          return false;
        })
        .catch(() => false);
    },
    async getSession() {
      const session = jwt.decode(token);
      return session.user;
    },
  };
};
