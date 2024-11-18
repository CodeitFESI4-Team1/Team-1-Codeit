import { getUser } from '@/src/_apis/auth/user-apis';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { User } from '@/src/types/auth';

export function getUserQuery() {
  return {
    queryKey: ['user'],
    queryFn: getUser,
  };
}
