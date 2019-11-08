import React, { useState, useEffect} from 'react';
import axios from 'axios';

import styled from 'styled-components';

import SwapiCard from './SwapiCard';



const CardImportReturnDiv = styled.div`
 margin: auto;
`

export default function SwapiData() {
    
    const [SwapiPeople, setSwapiPeople] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          //console.log(response);
          setSwapiPeople(response.data.results);
        })
        .catch(error => {
          console.log("the nasa photo was not returned", error);
        });
    }, []);

    return (
      <CardImportReturnDiv>
        {SwapiPeople.map( (mapItem, index) => {
          return (
            <SwapiCard
              charName={mapItem.name}
              charBirth={mapItem.birth_year}
              charHeight={mapItem.height}
              charMass={mapItem.mass}
              
              key={index}
            />
          );
        })}
        
        
        {/* <NasaCard
              imgUrl={nasaPhotos.url}
              date={nasaPhotos.date}
              title={nasaPhotos.title}
              desc={nasaPhotos.explanation}
            /> */}

      </CardImportReturnDiv>
    );
  };