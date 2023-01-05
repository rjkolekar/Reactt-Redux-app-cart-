import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleRemove = (productid)=>{
    dispatch(remove(productid))
  }
  return (
    <div>
      <h1>Your Cart Products </h1>
      <div>
        {
          products.map((product)=>(
            <div key={product.id} className='container mx-auto items-center justify-between flex mb-4 border border-gray-500 shadow-lg'>
              <img className='h-[100px] m-4 mr-4' src={product.image} alt="" />
              <h5 className=' '>{product.title}</h5>
              <span className=''>Rs{product.price}</span>
              <button className='mr-6 bg-slate-600 text-white rounded-full p-2' onClick={()=>handleRemove(product.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
