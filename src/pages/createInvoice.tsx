import React, { useState } from 'react'
import Header from '../components/Header/Header'
import InputFields from '../components/inputFIelds/InputFields'
import Buttons from '../components/Buttons/Buttons'
import config from '../Helpers/Config.json'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
const CreateInvoice = () => {
    // States
    const [form, setForm] = useState({
        billed_to: "",
        biller_email: "",
        subject: "",
        invoice_date: "",
        due_date: "",
        item: "",
        item_description: "",
        quantity: "",
        amount: "",
        address: ""
    })
    const navigate = useNavigate()
    // States End
    // Form List
    const FORM_LIST = [
        {
            id: 1,
            label: "Billed to",
            name: "billed_to",
            placeholder: "Billed to",
            type: "text"
        },
        {
            id: 2,
            label: "Biller email",
            name: "biller_email",
            placeholder: "Biller Email",
            type: "text",
        },
        {
            id: 3,
            label: "Subject",
            name: "subject",
            placeholder: "Subject",
            type: "text",
        },
        {
            id: 4,
            label: "Invoice date",
            name: "invoice_date",
            placeholder: "Invoice date",
            type: "date",
        },
        {
            id: 5,
            label: "Due date",
            name: "due_date",
            placeholder: "Due date",
            type: "date",
        },
        {
            id: 6,
            label: "Item Name",
            name: "item",
            placeholder: "Item Name",
            type: "text",
        },
        {
            id: 7,
            label: "Item description",
            name: "item_description",
            placeholder: "Item description",
            type: "textArea",
        },
        {
            id: 8,
            label: "Quantity",
            name: "quantity",
            placeholder: "QTY",
            type: "number",
        },
        {
            id: 9,
            label: "Amount",
            name: "amount",
            placeholder: "Amount",
            type: "number",
        },
        {
            id: 10,
            label: "Billing Address",
            name: "address",
            placeholder: "Billing Address",
            type: "text",
        },
    ]
    // Form list End
    // Create invoice
    const formHandler = (fieldName: any, value: any) => {
        setForm(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }
    const CreateInvoiceForm = () => {
        if (form.billed_to === "" || form.biller_email === "" || form.subject === "" || form.invoice_date === "" || form.due_date === "" || form.item === "" || form.item_description === "" || form.quantity === "" || form.amount === "" || form.address === "") {
            message.info("Please Fill all fields to generate invoice")
            console.log(form)
        }
        else {
            fetch(`${config.BaseURL}/create-invoice`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "billed_to": form.billed_to,
                    "biller_email": form.biller_email,
                    "subject": form.subject,
                    "invoice_date": form.invoice_date,
                    "due_date": form.due_date,
                    "item": form.item,
                    "item_description": form.item_description,
                    "quantity": form.quantity,
                    "amount": form.amount,
                    "address": form.address
                })
            }).then(res => {
                return res.json()
            }).then(res => {
                if (res.data.status === 201) {
                    message.success(res.data.message)
                    navigate('/view-all-invoice')
                }
                else {
                    message.error(res.data.message)

                }
            }).catch(err => console.log(err, "error"))
        }
    }
    // Create invoice End
    return (
        <>
            <Header />
            <div className="invoice-form-container container mx-auto mt-5 rounded-md shadow-md p-5">
                <h1 className='mb-5 text-4xl'>Invoice Generator</h1>
                <div className="invoice-form grid grid-cols-2  gap-5  ">
                    {
                        FORM_LIST.map((form) => {
                            return (
                                <InputFields
                                    name={form.name}
                                    placeholder={form.placeholder}
                                    type={form.type}
                                    formHandler={formHandler}
                                    label={form.label}
                                    EyeIcon={""}
                                />
                            )
                        })
                    }
                </div>
                <Buttons click={CreateInvoiceForm} title='Create invoice' Class='bg-green-700 hover:bg-white mt-5 w-full hover:text-green-700 border border-green-700 transition-all px-3 py-2 text-white rounded-md' />

            </div>
        </>
    )
}

export default CreateInvoice