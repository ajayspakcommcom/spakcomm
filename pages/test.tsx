import React from 'react';


const Index: React.FC = () => {

    const [inputValue, setInputValue] = React.useState('');
    const [showComponent, setShowComponent] = React.useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        const val = inputValue;
        console.log(val);
        setShowComponent(true);
        console.log(showComponent);
    };


    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value..."
            />
            <button onClick={handleButtonClick}>Generate Component</button>
        </>
    );
};

export default Index;
