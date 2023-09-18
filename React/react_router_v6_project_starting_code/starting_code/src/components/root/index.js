import React from 'react';
import Navigation from '../navigation';


// import Outlet



const Root = () => {
    return (
        <>
            <Navigation/>
            <Outlet />
        </>
    );
};

export default Root;