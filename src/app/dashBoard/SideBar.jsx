import NavLinks from '@/components/NavLinks';

import React from 'react';

const SideBar = () => {
    return (
        <aside>
            <h1 className='h1 text-4xl text-bold'>DashBoard</h1>
            <ul>
                <li><NavLinks exact activeClassName="text-red-500" href="/dashBoard/add-product">Add Product</NavLinks></li>
                <li><NavLinks exact activeClassName="text-red-500" href="/dashBoard/manage-Product">Manage Product</NavLinks></li>
                <li><NavLinks exact  activeClassName="text-blue-500" href="/">Home</NavLinks></li>


            </ul>
        </aside>
    );
};




export default SideBar;



