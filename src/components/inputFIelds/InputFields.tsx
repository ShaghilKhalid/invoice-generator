import React from 'react'
type inputProps = {
    name: String
    placeholder: String
    type: String
    EyeIcon: JSX.Element | ""
    label: String
    formHandler: (name: any, value: any) => void
}
const InputFields: React.FC<inputProps> = ({ name, placeholder, type, EyeIcon, formHandler, label }) => {
    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={`${name}`}>{label}</label>
                <input className='p-3 shadow-md border focus:border focus:border-blue-700 transition-all rounded-md focus:outline-none' onChange={(e: any) => formHandler(name, e.target.value)} name={`${name}`} placeholder={`${[placeholder]}`} type={`${type}`} />
                {
                    name === 'password' && (
                        <span className="icon">
                            {EyeIcon}
                        </span>
                    )
                }
            </div>
        </>
    )
}

export default InputFields