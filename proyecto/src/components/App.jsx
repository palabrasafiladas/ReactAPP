import React from 'react';
import '../styles/global.css';
import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Login from '../containers/Login';
import Layout from '../containers/Layout'; 
import Home from '../pages/Home';
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import '../containers/Layout';


const App = () => {
return (
    <BrowserRouter>
<Layout>
<Routes>
<Route path="/" element={<Home/>}/>
    <Route 
    path="/login" element={<Login/>}/>
    <Route
    path="/recovery-password" element={<RecoveryPassword/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
</Layout>
</BrowserRouter>

);


};
export default App;