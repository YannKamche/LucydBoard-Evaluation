import { googleLogo } from '../assets'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom';
const OAuth = () => {

    //initialize dispatch
    const dispatch = useDispatch();

    //initialize navigate
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            //create the provider
            const provider = new GoogleAuthProvider();

            //create auth: import getAuth
            const auth = getAuth(app);

            //Get the result from google
            const result = await signInWithPopup(auth, provider);

            //Get the response
            const res = await fetch('/api/auth/google', {
                method: 'POST', //sending the data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            //convert the response to json and add it to redux toolkit
            const data = await res.json();
            console.log(data)
            dispatch(signInSuccess(data));
            navigate('/user-dashboard')

        } catch (error) {
            console.log("Could not login with google", error);
        }
    }
  return (
     <button type='button' onClick={handleGoogleClick} className='button flex justify-center items-center gap-2 disabled:opacity-80'><img src={googleLogo} alt="google" /> Continue with<span className='font-bold'>Google</span></button>

  )
}

export default OAuth
