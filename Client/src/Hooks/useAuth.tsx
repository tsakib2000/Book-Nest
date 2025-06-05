import{ useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useAuth = () => {
const auth = useContext(AuthContext)
if(!auth){
    throw new Error('User Not Found')
}

return auth
};

export default useAuth;