import React from 'react'

export function Modal({setModalOn, setChoice}) {
    const handleCancelClick = () =>{
        setChoice(false)
        setModalOn(false)
    }
  return (
    <div className=" bg-sky-700 opacity-100 fixed inset-0 z-50">
        <div className='flex h-screen justify-center items-center'>
            <div className='bg-zinc-200 flex-col justify-center bg-white py-12 px-24 border-4 border-zinc-500 rounded-xl'>
                <div className='flex text-lg text-zinc-600 mb-10'> Change Your Password
                    <div className='flex'>
                        <input>
                        
                        </input>
                        <button>Save</button>
                        <button onClick={handleCancelClick}  className='rounded px-4 py-2 ml-4 text-white bg-red-500' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal