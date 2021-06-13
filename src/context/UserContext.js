import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({
        name: 'Desmond',
        surname: 'Mpofu',
        age: 46,
        course: 'Computing'
    })
    return <UserContext.Provider value = {{user,setUser}}> {children}</UserContext.Provider>;
}