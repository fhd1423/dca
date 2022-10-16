import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className=' relative bg-black h-screen w-screen'>
      <div className='w-full absolute top-40 text-center text-2xl font-bold text-gray-400'>
        Dollar Cost Average into Bitcoin, Ethereum, and more...🚀
        <div className='animate-bounce w-full font-bold text-gray-400'>
          without the <span className='text-white'> fees, </span> or the <span className='text-white'> hassle.🌟 </span>
        </div>
        <button onClick={() => signIn()} className='mt-20 h-18 w-36 p-4 border-white bg-white rounded-lg hover:text-black'>
          Login
        </button>
        <div className='mt-40'>
          Simply set how much you want to buy, how often you want to buy, we&apos;ll automate the rest away using your API keys.🪄
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log(session)
  if (session) {
    return {
      redirect: {
        destination: '/Account'
      }
    }
  }
  return {
    props: { session },
  }
}

