import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' relative bg-black h-screen w-screen'>
      <div className='w-full absolute top-40 text-center text-2xl font-bold text-gray-400'>
        Dollar Cost Average into Bitcoin, Ethereum, and more...🚀
        <div className='animate-bounce w-full font-bold text-gray-400'>
          without the <span className='text-white'> fees, </span> or the <span className='text-white'> hassle.🌟 </span>
        </div>
      </div>
    </div>
  )
}