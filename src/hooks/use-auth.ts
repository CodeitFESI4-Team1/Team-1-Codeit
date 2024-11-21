import { useUser } from '../_queries/auth/user-queries';

export function useAuth() {
  const { data: user } = useUser();
  const isAuth = !!user;
  return { isAuth };
}
