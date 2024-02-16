import React from 'react'
import QRCode from 'qrcode.react'

const Qrcode = () => {

    const table = ['table-1','table-2','table-3','table-4','table-5','table-6']
    const url = "http://192.168.244.221:3000/menu"
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className="grid grid-cols-3 gap-16">
            {table.map((val)=>(
                <div className=''>
                <QRCode value={`${url}?table=${val}`} />
                <p className='flex justify-center text-black mt-3'>{`Table ${val.split("-")[1]}`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Qrcode