import React,{ useEffect,useState } from 'react';
import Header from './Header';
import api from '../../components/api'


const Order = () => {

  const [order,setOrder] = useState([])

  const get_order = async ()=>{
    try{
      let value = await api.get('/order/getorder')
      setOrder(value.data['data'])
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
    get_order()
  },[])

  useEffect(()=>{
    console.log(order)
  },[order])

  return (
    <div className='h-screen w-full'>
      <Header title={"Order List"} />
      <div className="order-list">
        <table className='table-fixed w-full'>
          <thead className='border-b border-zinc-300'>
            <tr>
              <th className='py-3'>Order ID</th>
              <th className='py-3'>Date</th>
              <th className='py-3'>Customer name</th>
              <th className='py-3'>Location</th>
              <th className='py-3'>Amount</th>
              <th className='py-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(order) && order.length > 0 ? order.map((val)=>(
              <tr className='text-center bg-zinc-100 text-zinc-400'>
              <td className='py-5'>#{val.orderId}</td>
              <td className='py-5'>{val.date.split("T")[0].split("-").reverse().join("-")}</td>
              <td className='py-5'>{val.username}</td>
              <td className='py-5'>{val.table != 'External' ? val.table : val.location }</td>
              <td className='py-5'>₹{val.prize}</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>{val.status}</span></td>
            </tr>
            )) : "Loading..."}
            <tr className='text-center'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center bg-zinc-100 text-zinc-400'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center bg-zinc-100 text-zinc-400'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center bg-zinc-100 text-zinc-400'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center bg-zinc-100 text-zinc-400'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
            <tr className='text-center'>
              <td className='py-5'>#5553311</td>
              <td className='py-5'>26 March 2024</td>
              <td className='py-5'>Mohamed Sameer</td>
              <td className='py-5'>Valngaiman Avoor thriruvarur district</td>
              <td className='py-5'>₹126</td>
              <td className='py-5'><span className='uppercase text-sm text-orange-400 p-2 rounded bg-orange-100'>pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
