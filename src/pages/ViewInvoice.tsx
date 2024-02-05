import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import logo from '../assets/logo-black.png';
import Buttons from '../components/Buttons/Buttons';
import { usePDF } from 'react-to-pdf';
import UseUrlParamsHook from '../Hooks/UseUrlParamsHook';
import config from '../Helpers/Config.json';
const ViewInvoice = () => {
    // States
    const [Data, setData] = useState([])
    const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });
    // States End
    const { id } = UseUrlParamsHook()
    useEffect(() => {
        fetch(`${config.BaseURL}/getInvoiceById/${id}`, {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res.response.status)
            if (res.response.status === 200) {
                let temp: any = []
                temp = res.response.data;
                setData([...temp])
                console.log(temp, 'dataaa')
            }
            else {
                console.log(res.Error.message)
            }
        }).catch(err => console.log(err, 'error'))
    }, [])
    const downloadInvoice = () => {

    }
    const data = Data.filter(e => e._id === id)[0]
    return (
        <>
            <Header />

            <div ref={targetRef} className="view-invoice-container mt-5 rounded-md">
                <div className="view-invoice-header flex items-center justify-between">
                    <div className="logo flex items-center">
                        <div className="logo-img">
                            <img src={logo} className='img-fluid mix-blend-color-burn' alt="" />
                        </div>
                        <div className="company-info">
                            <div className="">Fusion Grid Innovation</div>
                            <div className="">www.fgi.com</div>
                            <div className="">hello@gmail.com</div>
                            <div className="">+923328298392</div>
                        </div>
                    </div>
                    <div className="address-info">
                        <div className="">Fusion Grid Innovation</div>
                        <div className="">www.fgi.com</div>
                        <div className="">hello@gmail.com</div>
                    </div>
                </div>
                <div className="invoice-body relative mt-10 bg-white border rounded-md py-2 ">
                    <div className="font-bold absolute bottom-0 start-10 pb-5">Thanks for business!</div>
                    <div className="invoice-top flex items-center justify-between text-start px-2">
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Billed To</h1>
                                    <span className='font-bold'>{data?.billed_to}</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Invoice Number</h1>
                                    <span className='font-bold'>#AB2324-01</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Invoice Of (PKR)</h1>
                                    <span className='font-bold'>{data?.amount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-mid flex items-center justify-between text-start px-2 mt-16">
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Subject</h1>
                                    <span className='font-bold'>{data?.subject}</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Invoice date</h1>
                                    <span className='font-bold'>{new Date(data?.invoice_date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="invoice-top-texts">
                                <div className="">
                                    <h1 className='text-gray-500 text-lg font-normal'>Due date</h1>
                                    <span className='font-bold'>{new Date(data?.due_date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-bottom flex items-center justify-between border-b border-t mt-16 p-2">
                        <div className="text-gray-500 text-lg font-normal">Item Detail</div>
                        <div className="text-gray-500 text-lg font-normal">Qty</div>
                        <div className="text-gray-500 text-lg font-normal">Amount</div>
                    </div>
                    <div className="invoice-bottom-2 flex items-center justify-between border-b mt-5 p-2">
                        <div className="font-bold">
                            {data?.item}
                        </div>
                        <div className="font-bold">{data?.quantity}</div>
                        <div className="font-bold">
                            {data?.amount.toLocaleString()}
                        </div>
                    </div>
                    <div className="invoice-bottom-3 grid grid-cols-3 mt-5">
                        <div className="">
                        </div>
                        <div className="">
                        </div>
                        <div className="">
                            <div className="subtotal flex justify-between items-center px-2 border-b borde-2 pb-3">
                                <div className="text-gray-500 text-lg font-normal">Subtotal</div>
                                <div className="font-bold">{data?.amount.toLocaleString()}</div>
                            </div>
                            <div className="total flex justify-between items-center px-2 mt-2">
                                <div className="text-gray-500 text-lg font-normal">Total</div>
                                <div className="font-bold">{data?.amount.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center my-5 ">
                <Buttons click={toPDF} title='Download Invoice Now!!' Class='bg-blue-700 hover:bg-white hover:text-blue-700 border border-blue-700 transition-all px-3 py-2 text-white rounded-md' />

            </div>
        </>
    )
}

export default ViewInvoice