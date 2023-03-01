/* eslint-disable */
import React from 'react';
import './footer.css'
import { ThemeContext } from '../../contexts/themeContext';
import makeRequest from '../../utils/makeRequest';
import setThemeRequest from '../../endpoints/setTheme';
export default function FooterComponent(){
    const { theme, setTheme } = React.useContext(ThemeContext);
    //console.log(theme);
    if(theme['themes']){
    const setThemeHandler=async()=>{
        const reqData = theme.themes.findIndex((item)=>item.colorHexCode===theme.currTheme);
        console.log(reqData)
       const result=await makeRequest(setThemeRequest,{preferredThemeId:reqData}); 
      console.log(result);
    }
    const handleThemeChange=(e)=>{
        setTheme({...theme,currTheme:e.target.id});  
    }    
    return(
        <footer style={{backgroundColor:theme.currTheme}}>
            <div>
                THEMES
            </div>
            {theme['themes'].map((item,i)=>{
                if(theme.currTheme!==item['colorHexCode']){
                    return <div key={i} className={'theme-box'} style={{backgroundColor:item['colorHexCode']}} id={item['colorHexCode']} onClick={handleThemeChange}></div>
                }
            })}
            <div>
                <button className={'save-theme-btn'} style={{color:theme.currTheme}} onClick={setThemeHandler}>Save theme</button>
            </div>
            
        </footer>
    );
}
else{
    return <div>Loading ...</div>
}
}