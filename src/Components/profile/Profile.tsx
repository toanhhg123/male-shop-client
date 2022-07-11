import React, { useEffect, useRef, useState } from 'react';
import { updateProfile, userInfo } from 'src/features/AuthFile/Auth';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { ToastError } from '../Loading/Toast';
import './profile.scss';

type Props = {};

const handleForm = (form: HTMLFormElement) => {
    function floatLabel(inputType: string) {
        form.querySelectorAll(inputType).forEach(function (
            input: HTMLInputElement | any
        ) {
            var $this = input;
            $this.addEventListener('focus', () => {
                $this.nextSibling.classList = 'active';
            });
            $this.addEventListener('blur', function () {
                if ($this?.value === '' || $this.value === 'blank') {
                    $this.nextSibling.classList = '';
                }
            });
        });
    }

    floatLabel('.floatLabel');
};

const Profile = (props: Props) => {
    const dispatch = useAppDispatch();

    const formProfile = useRef<HTMLFormElement>(null);

    const [error, setError] = useState<string>('');
    useEffect(() => {
        if (formProfile.current) handleForm(formProfile.current);
    }, [formProfile]);

    const user = useAppSelector(userInfo);
    const [userState, setUserState] = useState({
        userName: user?.userName,
        email: user?.email,
        password: '',
        newPasswod: '',
        confirmNewPassowrd: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userState.newPasswod !== userState.confirmNewPassowrd)
            setError('password does not match with confirm passowd ');
        else {
            dispatch(
                updateProfile({
                    userName: userState.userName || '',
                    password: userState.password || '',
                    email: userState.email || '',
                    newPassword: userState.newPasswod,
                })
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            ref={formProfile}
            className="form__profile"
        >
            {error && <ToastError errorMessage={error} />}
            <div className="form-group">
                <h2 className="heading">Profile</h2>
                <div className="controls__profile">
                    <input
                        required
                        type="text"
                        id="name"
                        className="floatLabel"
                        name="name"
                        disabled
                        defaultValue={userState?.userName || ''}
                    />
                    <label className="active" htmlFor="name">
                        user name
                    </label>
                </div>
                <div className="controls__profile">
                    <input
                        required
                        type="text"
                        id="email"
                        className="floatLabel"
                        name="email"
                        value={userState?.email || ''}
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                email: e.target.value,
                            })
                        }
                    />
                    <label className="active" htmlFor="email">
                        email
                    </label>
                </div>
                <div className="controls__profile">
                    <input
                        required
                        type="password"
                        className="floatLabel"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                password: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="password">password</label>
                </div>

                <div className="controls__profile">
                    <input
                        required
                        type="password"
                        className="floatLabel"
                        name="password-new"
                        id="password-new"
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                newPasswod: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="password-new">new password</label>
                </div>

                <div className="controls__profile">
                    <input
                        required
                        type="password"
                        className="floatLabel"
                        name="password-new-confirm"
                        id="password-new-confirm"
                        onChange={(e) =>
                            setUserState({
                                ...userState,
                                confirmNewPassowrd: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="password-new-confirm">
                        confirm password
                    </label>
                </div>

                {/* <div className="controls__profile">
                    <textarea
                        name="comments"
                        className="floatLabel"
                        id="comments"
                    ></textarea>
                    <label className='active' htmlFor="comments">Comments</label>
                </div> */}
                <button type="submit" className="col-1-4 button__profile">
                    update
                </button>
            </div>
        </form>
    );
};

export default Profile;
