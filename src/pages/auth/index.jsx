import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import toast from 'react-hot-toast';
import { LoginInput } from '@/component/login-input';

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const login = async () => {
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      console.log("api response",response)

      if (response.status === 401) {
        toast.error("Invalid Credentials!", {duration: 2000})
      }

      router.push('/');
    } catch (error) {
      
      console.log(error);
    }
  };

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });
   
     

      login();
    } catch (error) {
      toast.error("Something went wrong!")
        console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/unilogo2.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full min-h-screen">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              )}
              <LoginInput
                id="email"
                type="email"
                label="Email address or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <LoginInput
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            {/* <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div> */}
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? '' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? '' : 'Login'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
