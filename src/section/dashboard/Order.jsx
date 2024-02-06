import React from 'react';
import Header from './Header';

const Order = () => {
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
