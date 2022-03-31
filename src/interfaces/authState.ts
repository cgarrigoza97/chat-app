import { User } from "./user";

export interface AuthState {
    user: User | null;
    checking: boolean;
    loggedIn: boolean;
}