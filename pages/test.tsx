import React from 'react';

const Index: React.FC = () => {

    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];


    console.log(bothPlus);

    return (
        <>

        </>
    );
};

export default Index;
