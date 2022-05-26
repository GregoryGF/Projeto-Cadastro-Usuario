import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../components/Home/Home';
import UserCrud from '../components/users/UsersCrud';

export default props => (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserCrud/>}/>
        <Route path="*" element={<Home />}/>
    </Routes>
);