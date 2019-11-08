import React from 'react';
import './App.css';

import SwapiData from './SwapiData'
import styled from 'styled-components';

// basic data request so i can see the data structure
import axios from "axios";

axios
  .get(`https://swapi.co/api/people/`)
  .then(response => {
    console.log(response);
    
  })
  .catch(error => {
    console.log("the SWAPI person was not returned", error);
  });


const AppContainer = styled.div`
  text-align: center;
`;

const PageHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  // https://swapi.co/api/people/1/

  return (
    <AppContainer>
      <PageHeader>React Wars</PageHeader>
      <SwapiData/>
    </AppContainer>
    
  );
}

export default App;
