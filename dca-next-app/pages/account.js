import React from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

const account = () => {
    const options = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
    ];

    const [value, setValue] = React.useState('daily');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function submit(e) {
        e.preventDefault();
        alert(apiKey);
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
                    <input type="text" name="apiKey" />
                    <div>
                        API Secreet:
                        <input type="text" name="apiSecret" />
                    </div>
                    <div>
                        Frequency of purchase:
                        <select value={value} onChange={handleChange}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        amount:
                        <input type="text" name="amount" />

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


export default account