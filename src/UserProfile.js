import {useContext } from 'react';
import { UserContext } from './context/UserContext';

const UserProfile = ()=>{
    const {setUser} = useContext(UserContext)

    return(
        <div>
            <p>
                I am the profile user
            </p>
            <button onClick ={()=>setUser({name: 'Nokwanda', age:40})}>Change the user</button>
        </div>
    );
}
export default UserProfile;