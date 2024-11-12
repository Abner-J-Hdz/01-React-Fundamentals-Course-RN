import axios from "axios";
import { useEffect, useRef, useState } from "react"
import type { User, UserResponse } from "../interfaces";

const loadUser = async (page: number = 1) => {
    try {
        const { data } = await axios.get<UserResponse>('https://reqres.in/api/users',{
            params:{
                page: page
            }
        })

        return data.data;
        
    } catch (error) {
        console.log(error);
        return []
    }
}

export const useUSer = () => {
  
    const [users, setUsers] = useState<User[]>([])
    const currentPageRef = useRef(1)

    useEffect(() => {

        //loadUser().then(users => setUsers(users))
        loadUser(currentPageRef.current).then(setUsers)
        //esto es lo mismo que la linea comentada, ya que recibe los mismos valores ((users) => setUsers(users))
    }, [])

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUser(currentPageRef.current)
        if(users.length > 0){
            setUsers(users)
            return
        }
        currentPageRef.current--;
    }

    const previousPage = async () => {
        if(currentPageRef.current < 1) return
        currentPageRef.current--;
        const users = await loadUser(currentPageRef.current)
        setUsers(users)
    }

    return {
        users,
        nextPage,
        previousPage
    }

}
