import React from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'



const account = () => {
    const options = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
    ];

    const cryptoOptions = [
        { label: 'Bitcoin', value: 'Bitcoin' },
        { label: 'Ethereum', value: 'Ethereum' },
        { label: 'Tether', value: 'Tether' },
        { label: 'USDCoin', value: 'USDCoin' },
        { label: 'BNB', value: 'BNB' },
        { label: 'BUSD', value: 'BUSD' },
        { label: 'Cardano', value: 'Cardano' },
        { label: 'Solana', value: 'Solana' },
        { label: 'Dogecoin', value: 'Dogecoin' }
    ];

    const [frequency, setFrequency] = React.useState('daily');
    const [cryptocurrency, setCryptocurrency] = React.useState('Bitcoin');
    const [apiKey,setApiKey] = React.useState('');
    const [apiSecret,setApiSecret] = React.useState('');
    const [amount,setAmount] = React.useState('');


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

    function submit(e) {
        e.preventDefault();
        alert(apiKey+" "+apiSecret+" "+frequency+" "+amount);
    }


    return (
        <div className=' relative bg-black h-screen w-screen'>
            <button onClick={() => signOut()} className='text-gray-400 absolute right-0 mt-10 mr-10 h-18 w-36 p-4 border-white bg-white rounded-lg hover:text-black'>
                Logout
            </button>
            <div className='w-full absolute top-40 text-center text-2xl f ont-bold text-gray-400'>
                Connect to Binance
                <div className='w-full font-bold text-gray-400'>
                    API Key:
                    <input type="text" name="apiKey" onChange={handleApiKeyChange}/>
                    <div>
                        API Secret:
                        <input type="text" name="apiSecret" onChange={handleApiSecretChange}/>
                    </div>
                    <div>
                        <Dropdown
                            label="cryptocurrency:"
                            options={cryptoOptions}
                            value={cryptocurrency}
                            onChange={handleCryptocurrencyChange}
                        />
                    </div>
                        <Dropdown
                            label="frequency:"
                            options={options}
                            value={frequency}
                            onChange={handleFrequencyChange}
                        />
                    <div>
                        Dollar amount:
                        <input type="text" name="amount" onChange={handleAmountChange}/>

                        <div>
                            <button onClick={submit}>
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

const Dropdown = ({label,value,options,onChange})=>{
    return(
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    )
}

export default account