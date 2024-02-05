import React, { useState } from 'react'
import LoginLeftBanner from '../components/loginLeftBanner/loginLeftBanner'
import InputFields from '../components/inputFIelds/InputFields'
import Buttons from '../components/Buttons/Buttons'
import { message } from 'antd'

const Login = () => {
    // States 
    const [eye, setEye] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    // States End
    // Icons
    const EyeIcon = <span onClick={() => setEye(state => !state)}>
        {
            eye ?
                <svg width={23} height={23} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                </svg>
                :
                <svg width={23} height={23} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                    <path d="m1 1 22 22" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                </svg>

        }
    </span>
    // Icons End
    // Form List
    const FORM_LIST = [
        {
            id: 1,
            label: "Email",
            name: "email",
            placeholder: "Enter your email",
            type: "email"
        },
        {
            id: 2,
            label: "Password",
            name: "password",
            placeholder: "Enter your password",
            type: !eye ? "password" : "text",
        }
    ]
    // Form list End
    // Login
    const formHandler = (fieldName: any, value: any) => {
        setForm(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }
    const login = () => {
        if (form.email === "admin@gmail.com" && form.password === "Ok@123456") {
            localStorage.setItem("token", form.email)
            window.location = '/'
        }
        else if (form.email === "" && form.password === "") {
            message.info("Please fill required fields to continue")
        }
        else {
            message.error("incorrect credentials")
        }
    }
    // Login End
    return (
        <>
            <div className="container lg:grid lg:grid-cols-2">
                <div className="left-banner">
                    <LoginLeftBanner />
                </div>
                <div className="login flex items-center justify-center flex-col">
                    <div className="login-heading mb-3">
                        <h1 className='text-3xl'>Login</h1>
                    </div>
                    <div className="login-fields flex flex-col w-1/2 gap-4 relative">
                        {
                            FORM_LIST.map((form) => {
                                return (
                                    <InputFields
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        type={form.type}
                                        EyeIcon={EyeIcon}
                                        label={form.label}
                                        formHandler={formHandler}
                                    />
                                )
                            })
                        }
                        <Buttons click={login} title='Login' Class='bg-blue-700 hover:bg-white hover:text-blue-700 border border-blue-700 transition-all p-3 text-white rounded-md' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login