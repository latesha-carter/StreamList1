import React, { useState } from 'react';

const StreamList: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <h1>Stream List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Enter something..." 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StreamList;