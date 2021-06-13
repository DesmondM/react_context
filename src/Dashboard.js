import {useContext} from 'react';
import { UserContext, UserProvider } from "./context/UserContext";
import UserProfile from './UserProfile';
import AddYears from './AddYears';
const Dashboard = () =>{
    const value  = useContext(UserContext);
    const {user, setUser} =useContext(UserContext);
    return(
        <div>
            <h1> The Dashboard</h1>
            <p>{user.name} {user.age} </p>   {/* // pulled from context */}
            <UserProfile/>
            <AddYears/>
        </div>
    );
};
export default Dashboard;
