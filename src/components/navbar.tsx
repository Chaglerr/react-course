import { Link, useNavigate } from "react-router-dom";
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/login");
    };
    return (
        <div className="navbar">
            <Link to="/" className="navbar-link">Home</Link>
            {!user ? (<Link to="/login" className="navbar-link">Login</Link>) :
            (<Link to="/createpost" className="navbar-link">Create Post</Link>) }
            <div className="navbar-right">
                {user && (
                    <>
                        <div className="user-info-logout-container">
                            <p className="user-name">{user?.displayName}</p>
                            <img src={user?.photoURL || ""} width="100" height="100" className="user-avatar" />
                            <button onClick={signUserOut} className="logout-btn">Log Out</button>
                        </div>
                    </>
                )}

            </div>
        </div>);
};