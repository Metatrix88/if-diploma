import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { username, birthdate, email, password, token, id, imageData } =
    useSelector((state) => state.user);
  return {
    isAuth: !!email,
    username,
    birthdate,
    email,
    password,
    token,
    id,
    imageData,
  };
};
