import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await (signInWithPopup(auth, provider));
        navigate("/");
    }

    return (<div className="login-container">
        <p>Sign in with Google to continue</p>
        <button onClick={signInWithGoogle} className="google-signin-btn">Sign in with Google</button>
    </div>);
};