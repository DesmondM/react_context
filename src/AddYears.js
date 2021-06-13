import { UserContext } from "./context/UserContext"
import {useContext } from 'react';


const AddYears = () => {
    const {setUser} = useContext(UserContext)

    return(
        <div>
            <p>After 10 Years  your will be</p>
            <button onClick = {()=>setUser({name: 'User age', age: 50+20})}>Change Age</button>
        </div>
    );
}

export default AddYears;