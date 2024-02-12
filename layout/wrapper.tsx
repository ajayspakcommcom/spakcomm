import React, { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Wrapper;