import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import { Table, Tooltip } from 'antd';
import type { TableColumnsType } from 'antd';
import UseGetHook from '../Hooks/UseGetHook';
import { Link } from 'react-router-dom';
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
const ViewAllInvoices = () => {
    // Fetch Data
    const { Data, fetchAllInvoice } = UseGetHook()
    useEffect(() => {
        fetchAllInvoice()
    }, [])
    // Fetch Data End
    // table
    const columns: TableColumnsType<DataType> = [

        {
            title: 'Biller Name',
            dataIndex: 'billed_to',
            ellipsis: {
                showTitle: false,
            },
            render: (billed_to, key) => (
                <Tooltip placement="topLeft" title={billed_to}>
                    <Link to={`/view-invoice?id=${key.key}`}>{billed_to}</Link>
                </Tooltip>
            ),
        },
        {
            title: 'Biller Email',
            dataIndex: 'biller_email',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            ellipsis: {
                showTitle: false,
            },
            render: (subject) => (
                <Tooltip placement="topLeft" title={subject}>
                    {subject} shaghil
                </Tooltip>
            ),
        },
        {
            title: 'Invoice Date',
            dataIndex: 'invoice_date',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Due Date',
            dataIndex: 'due_date',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Item',
            dataIndex: 'item',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Item description',
            dataIndex: 'item_description',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (quantity) => (
                <p> {quantity}</p>
            ),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
    ];

    const data: any = Data.map((e: any) => ({
        key: e._id,
        billed_to: e.billed_to,
        biller_email: e.biller_email,
        subject: e.subject,
        invoice_date: new Date(e.invoice_date).toLocaleDateString(),
        due_date: new Date(e.due_date).toLocaleDateString(),
        item: e.item,
        item_description: e.item_description,
        quantity: e.quantity,
        amount: e.amount.toLocaleString(),
        address: e.address,
    }))
    // Table End
    return (
        <>
            <Header />
            <div className="all-invoice-table container mx-auto mt-16">
                <Table columns={columns} dataSource={data} />
            </div>
        </>
    )
}

export default ViewAllInvoices