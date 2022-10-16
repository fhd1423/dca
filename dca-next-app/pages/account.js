import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import db from './firebase_connect';
import { collection, addDoc } from "firebase/firestore";



const Account = () => {
    const options = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
    ];

    const cryptoOptions = [
        { label: 'Bitcoin', value: 'BTCUSD' },
        { label: 'Ethereum', value: 'ETHUSD' },
        { label: 'BNB', value: 'BNBUSD' },
        { label: 'Cardano', value: 'ADAUSD' },
        { label: 'Solana', value: 'SOLUSD' },
        { label: 'Dogecoin', value: 'DOGEUSD' }
    ];


    const [frequency, setFrequency] = useState('daily');
    const [cryptocurrency, setCryptocurrency] = useState('Bitcoin');
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    const [amount, setAmount] = useState('');


    const handleFrequencyChange = (event) => {
        setFrequency(event.target.value);
    };

    const handleApiKeyChange = (event) => {
        setApiKey(event.target.value);
    };

    const handleApiSecretChange = (event) => {
        setApiSecret(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCryptocurrencyChange = (event) => {
        setCryptocurrency(event.target.value);
    };

    async function submit(e) {
        e.preventDefault();
        alert('Your order to buy ' + amount + ' ' + cryptocurrency + ' will be proccessed on a ' + frequency + ' basis')
        const docRef = await addDoc(collection(db, "userData"), {
            apiKey: apiKey,
            apiSecret: apiSecret,
            frequency: frequency,
            amount: amount,
            cryptocurrency: cryptocurrency
        });
        console.log("Document written with ID: ", docRef.id);
    }


    return (
        <div className=' relative bg-black h-screen w-screen'>
            <button onClick={() => signOut()} className='text-xl font-bold text-gray-400 absolute right-0 mt-10 mr-10 h-18 w-36 p-4 border-white bg-white rounded-lg hover:text-black'>
                Logout
            </button>
            <div className='text-red-500 w-full absolute top-40 text-center text-2xl font-bold text-gray-400'>
                Connect to Binance Exchange
                <div className='text-black'> empty </div>
                <div className='w-full font-bold text-gray-400'>
                    API Key:
                    <input className='ml-2 rounded-lg' type="text" name="apiKey" onChange={handleApiKeyChange} />
                    <div className='text-black'> empty </div>
                    <div>
                        API Secret:
                        <input className='ml-2 rounded-lg' type="text" name="apiSecret" onChange={handleApiSecretChange} />
                        <div className='text-black'> empty </div>
                    </div>
                    <div>
                        <Dropdown
                            label="Select cryptocurrency type:"
                            options={cryptoOptions}
                            value={cryptocurrency}
                            onChange={handleCryptocurrencyChange}
                        />
                        <div className='text-black'> empty </div>
                    </div>
                    <Dropdown
                        label="Select frequency of purchases:"
                        options={options}
                        value={frequency}
                        onChange={handleFrequencyChange}
                        className='bg-red'
                    />
                    <div>
                        <div className='text-black'> empty </div>
                        # of coins to buy:
                        <input className=' ml-2 rounded-lg' type="text" name="amount" onChange={handleAmountChange} />

                        <div>
                            <div className='text-black'> empty </div>
                            <button className='mt-20 h-18 w-36 p-4 border-white bg-white rounded-lg hover:text-black' onClick={submit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    console.log(session)
    if (!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    return {
        props: { session },
    }
}

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    )
}

export default Account