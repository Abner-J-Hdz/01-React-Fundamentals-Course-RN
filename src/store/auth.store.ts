import { create } from "zustand"

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking'
    token?: string,
    user?:{
        name: string
        email:string
    }

    login: (email:string, password:string) => void
    logout:() => void
}
//El store, o como crear un stado global con Zustand
export const useAuthStore = create<AuthState>()((set) => ({
        status: 'checking',
        token: undefined,
        user: undefined,
        
        login: (email:string, password:string) => {
            set({
                status: 'authenticated',
                token: "ABC123" + password,
                user:{
                    name: 'Jonh Doe',
                    email
                }
            });
        },
        logout:() => {
            set({
                status: 'unauthenticated', 
                token: undefined, 
                user: undefined
            })
        },
    })
)

