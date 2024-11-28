import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './component/NavBar.js';
import Sidebar from './component/SideBar.js';

import './static/styles.css';

function App() {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">

                </div>
            </div>
        </div>
    );
}

export default App;
