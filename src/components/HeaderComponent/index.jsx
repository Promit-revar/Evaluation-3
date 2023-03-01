/* eslint-disable */
import React from 'react';
import './header.css'
import { ThemeContext } from '../../contexts/themeContext';
export default function HeaderComponent(){
    const { theme, setTheme } = React.useContext(ThemeContext);
    if(theme['themes']){
    return(
        <nav style={{backgroundColor:theme.currTheme}}>
            <div className="logo">
                EVENTIFY
            </div>
        </nav>
    );
    }
    else{
        return <div>Loading ...</div>
    }
}