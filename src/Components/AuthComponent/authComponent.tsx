import React, { FormEvent, useEffect, useState } from 'react';
import './AuthStyle.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { useAppSelector } from 'src/app/hooks';
import {
    isAuthenticated,
    isLoading,
    UserLogin,
    error,
    authFailure,
    isRegister,
} from 'src/features/AuthFile/Auth';
import { authRequest } from 'src/features/AuthFile/Auth';
import { ToastError, ToastLoading } from '../Loading/Toast';
import { UserRegister } from 'src/features/AuthFile/Auth';
import { registerRequest } from 'src/features/AuthFile/Auth';
import { toast, ToastContainer } from 'react-toastify';

const Login = (props: Props) => {
    const [isActive, setIsActive] = React.useState(0);
    const location = useLocation();
    const redirect = location.search.split('=')[1] || '/';
    const isLogin = useAppSelector(isAuthenticated);
    const loading = useAppSelector(isLoading);
    const errorMessage = useAppSelector(error);
    const register = useAppSelector(isRegister);
    const naviage = useNavigate();

    const dispatch = useAppDispatch();
    const [userLogin, setUserlogin] = useState<UserLogin>({
        userName: '',
        password: '',
    });

    const [userRegister, setUserRegister] = useState<UserRegister>({
        userName: '',
        email: '',
        password: '',
        imgBase64: '',
    });

    const [nameImg, setNameImg] = useState<string>('');

    const handleFile = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        const file: any = e.target.files[0];
        setNameImg(file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setUserRegister({
                ...userRegister,
                imgBase64:
                    typeof reader.result === 'string' ? reader.result : '',
            });
        };
    };
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(authRequest(userLogin));
    };
    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userRegister);

        if (userRegister.password !== userRegister.confirmPassword)
            dispatch(authFailure('password different with confirm password'));
        else dispatch(registerRequest(userRegister));
    };

    useEffect(() => {
        if (register) {
            toast.success('register success');
        }
    }, [register, naviage]);

    if (isLogin) return <Navigate to={redirect} />;

    return (
        <div className="auth">
            <ToastContainer />
            {errorMessage && <ToastError errorMessage={errorMessage} />}
            {loading && <ToastLoading />}
            <section className="forms-section p-5">
                <div className="forms">
                    <div
                        className={`form-wrapper ${
                            isActive === 0 ? 'is-active' : ''
                        }`}
                        onClick={() => setIsActive(0)}
                    >
                        <button
                            type="button"
                            className="switcher switcher-login"
                        >
                            Login
                            <span className="underline"></span>
                        </button>
                        <form
                            className="form form-login"
                            onSubmit={handleLogin}
                        >
                            <fieldset>
                                <legend>
                                    Please, enter your email and password for
                                    login.
                                </legend>
                                <div className="input-block">
                                    <label htmlFor="username">User name</label>
                                    <input
                                        id="username"
                                        type="text"
                                        onChange={(e) =>
                                            setUserlogin({
                                                ...userLogin,
                                                userName: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">
                                        Password
                                    </label>
                                    <input
                                        id="login-password"
                                        type="password"
                                        onChange={(e) =>
                                            setUserlogin({
                                                ...userLogin,
                                                password: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-login">
                                Login
                            </button>
                        </form>
                    </div>
                    <div
                        className={`form-wrapper ${
                            isActive === 1 ? 'is-active' : ''
                        }`}
                        onClick={() => setIsActive(1)}
                    >
                        <button
                            type="button"
                            className="switcher switcher-signup"
                        >
                            Sign Up
                            <span className="underline"></span>
                        </button>
                        <form
                            className="form form-signup"
                            onSubmit={handleRegister}
                        >
                            <fieldset>
                                <legend>
                                    Please, enter your email, password and
                                    password confirmation for sign up.
                                </legend>
                                <div className="input-block">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input
                                        id="signup-email"
                                        type="email"
                                        required
                                        onChange={(e) =>
                                            setUserRegister({
                                                ...userRegister,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-email">
                                        user name
                                    </label>
                                    <input
                                        id="signup-email"
                                        type="text"
                                        onChange={(e) =>
                                            setUserRegister({
                                                ...userRegister,
                                                userName: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password">
                                        Password
                                    </label>
                                    <input
                                        id="signup-password"
                                        type="password"
                                        onChange={(e) =>
                                            setUserRegister({
                                                ...userRegister,
                                                password: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password-confirm">
                                        Confirm password
                                    </label>
                                    <input
                                        id="signup-password-confirm"
                                        type="password"
                                        onChange={(e) =>
                                            setUserRegister({
                                                ...userRegister,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="file-upload-wrapper">
                                    <label
                                        htmlFor="uploadFileRegister"
                                        className="upload__file__lb"
                                    >
                                        <small>
                                            {nameImg
                                                ? nameImg
                                                : 'select file !'}
                                        </small>
                                        <span>
                                            <i className="bi bi-upload"></i>{' '}
                                            Upload
                                        </span>
                                    </label>

                                    <input
                                        id="uploadFileRegister"
                                        type="file"
                                        className="custom-file-input"
                                        onChange={handleFile}
                                    />
                                    {userRegister.imgBase64 && (
                                        <img
                                            className="file-upload-img"
                                            src={userRegister.imgBase64}
                                            alt=""
                                        />
                                    )}
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-signup">
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
type Props = {};

export default Login;
