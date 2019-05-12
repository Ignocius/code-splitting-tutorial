import React from 'react';
import logo from '../logo.svg';
import '../App.css'

const Page2 = ({onRouteChange}) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-header">Page 2 H</h1>
            </header>
            <button className="disabled">Page2</button>
            <button onClick={() => onRouteChange('page1')}>Page2</button>
            <button onClick={() => onRouteChange('page3')}>Page3</button>
        </div>
    )
}

export default Page2;