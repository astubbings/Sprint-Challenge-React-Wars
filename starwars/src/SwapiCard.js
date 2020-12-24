import React from "react";
import styled from "styled-components";

const WholeCardContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 2%;
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  margin: 1%;
`
const NameStyled = styled.h1`
  color: rebeccapurple;
  background-color: paleturquoise;
  border: 3px solid lightcyan;
  padding: 2%;
  margin-top: 0px;
`
const StatsContainer = styled.div`
  border: 3px solid lightcyan;
  background-color: indianred;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  margin: 1%;
  padding: 1%;
`
const InfoStyled = styled.h3`
    color: rebeccapurple;
    margin: 1px;
    margin-top: 5px;
`;

const SwapiCard = props => {
    return (
      <WholeCardContainer>

        <NameContainer>
        <NameStyled>{props.charName}</NameStyled>
        
        </NameContainer>

        <StatsContainer>
          
          <InfoStyled>Birth Year: {props.charBirth}</InfoStyled>
          <InfoStyled>Height(cm): {props.charHeight}</InfoStyled>
          <InfoStyled>Mass(kg): {props.charMass}</InfoStyled>
        </StatsContainer>
          

      </WholeCardContainer>
    );
  };
  
  export default SwapiCard;