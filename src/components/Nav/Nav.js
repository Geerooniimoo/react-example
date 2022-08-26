import React, { useState } from 'react';
import './Nav.css';

const Nav = props =>
<nav>
    <h1>Geronimo Perez</h1>
    <div>
        <button onClick={()=> props.currentPage('about')}>About me</button>
        <button onClick={()=> props.currentPage('work')}>Projects</button>
        <button onClick={()=> props.currentPage('contact')}>Contacts</button>
        <button onClick={()=> props.currentPage('resume')}>Resume</button>
    </div>
</nav>;

export default Nav;