import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import CreateInvoice from '../pages/createInvoice'
import ViewInvoice from '../pages/ViewInvoice'
import ViewAllInvoices from '../pages/ViewAllInvoices'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        localStorage.getItem("token") === null ?
                            <Route path='/' element={<Login />} />
                            :
                            <>
                                <Route path='/' element={<CreateInvoice />} />
                                <Route path='/view-invoice' element={<ViewInvoice />} />
                                <Route path='/view-all-invoice' element={<ViewAllInvoices />} />
                            </>
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router