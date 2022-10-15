import React from 'react'

const account = () => {
    const options=[
        {label: 'daily', value: 'daily'},
        {label: 'weekly', value: 'weekly'},
        {label: 'monthly', value: 'monthly'},
    ];

    const [value, setValue] = React.useState('daily');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function submit(e){
        e.preventDefault();
        alert(apiKey);
    }
    
  return (
    <div className=' relative bg-black h-screen w-screen'>
      <div className='w-full absolute top-40 text-center text-2xl f ont-bold text-gray-400'>
        Connect to Binance
        <div className='w-full font-bold text-gray-400'>
            API Key:
            <input type="text" name="apiKey"/>
            <div>
                API Secreet:
                <input type="text" name="apiSecret"/>
            </div>
            <div>
                Frequency of purchase:
                <select value={value} onChange={handleChange}>
                    {options.map((option)=>(
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div>
                amount:
                <input type="text" name="amount"/>

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


export default account