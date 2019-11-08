import React from "react";
import styled from "styled-components";

const WholeCardContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 2%;
`
const ImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
`
// const ImgFromNasa = styled.img`
//   max-width: 100%;
// `
const InfoContainer = styled.div`
  border: 1px solid lightcyan;
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 1%;
`
const NameStyled = styled.h1`
  color: rebeccapurple;
  background-color: paleturquoise;
  padding: 1%;
`
// const DescTextStyled = styled.p`
//   padding-left: 2%;
// `
// const DateTaken = styled.h2`
//   padding-left: 2%;
// `
const SwapiCard = props => {
    return (
      <WholeCardContainer>

        <ImgContainer>
        <NameStyled>{props.charName}</NameStyled>
        
        </ImgContainer>

        <InfoContainer>
          {props.charHeight}
        </InfoContainer>
          

      </WholeCardContainer>
    );
  };
  
  export default SwapiCard;