/* eslint-disable */
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import makeRequest from './utils/makeRequest';
import getThemes from './endpoints/getTheme.json';
import { ThemeContext } from './contexts/themeContext';
function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  React.useEffect(() => {
    makeRequest(getThemes).then((response) => {
      // console.log(response);
      //const [currTheme,setCurrTheme]=React.useState(theme['themes'][theme['preferredThemeId']].colorHexCode);
      console.log(response['themes'][response['preferredThemeId']].colorHexCode)
      //console.log({...response,"currTheme": response['themes'][response['preferredThemeId']].colorHexCode})
      setTheme({...response,"currTheme": response['themes'][response['preferredThemeId']].colorHexCode});
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      {console.log(theme)}
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
