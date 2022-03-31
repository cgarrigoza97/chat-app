import { createContext } from 'react';
import { AuthState } from '../../interfaces/authState';

export type AuthContextProps = {
    authState: AuthState,
    signin: (email: string, password: string) => void,
    signup: (username: string, email: string, password: string) => void,
    checkToken: () => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);