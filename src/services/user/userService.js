import isStagingEnv from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-omariosouto.vercel.app';

export const userService = {
  async getProfilePage(context) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(context).getToken();
      const response = await HttpClient(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        user: {
          totalLikes: 100,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não foi possível obter os posts!');
    }
  },
};
