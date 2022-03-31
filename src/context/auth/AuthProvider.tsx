import { AuthState } from "../../interfaces/authState";
import { AuthContext } from "./AuthContext";
import { useCallback, useState } from 'react';
import { axiosInstance } from "../../axios/axiosInstance";
import { AuthResponse } from '../../interfaces/authResponse';
import { User } from '../../interfaces/user';

const initialState: AuthState = {
    user: null,
    checking: false,
    loggedIn: false,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {

    const [auth, setAuth] = useState(initialState);

    const signin = async (email: string, password: string) => {
        
        try {
            const tokenReponse = await axiosInstance.post<AuthResponse>('auth/signin');

            const { accessToken, refreshToken } = tokenReponse.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const userResponse = await axiosInstance.get<User>('auth/user');

            setAuth({
                user: userResponse.data,
                checking: false,
                loggedIn: true
            });
        }
        catch (e) {
            // TODO: handle error
        }
    }

    const signup = async (username: string, email: string, password: string) => {

    }

    const checkToken = useCallback(async () => {} , []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        setAuth(initialState);
    }

    return (
        <AuthContext.Provider value={{
            authState: initialState,
            signin,
            signup,
            checkToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )

}