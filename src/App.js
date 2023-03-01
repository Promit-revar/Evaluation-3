/* eslint-disable */
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import makeRequest from './utils/makeRequest';
import getThemes from './endpoints/getTheme.json';
import CardComponent from './components/CardComponent';
import { ThemeContext } from './contexts/themeContext';
import {EventContextProvider} from './contexts/dataEventContext';
import SearchFilterComponent from './components/searchAndFilterComponent';
function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  React.useEffect(() => {
    makeRequest(getThemes).then((response) => {
      //console.log(response['themes'][response['preferredThemeId']].colorHexCode)
      setTheme({...response,"currTheme": response['themes'][response['preferredThemeId']].colorHexCode});
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <EventContextProvider>
      <SearchFilterComponent />
      <CardComponent />
      </EventContextProvider>
      <FooterComponent />
    </div>
  );
}

export default App;
