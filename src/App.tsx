import React from "react";
import styled from "styled-components";

import { Links } from "./components/Links";
import { Footer } from "./components/Footer";
import { Blur } from "./components/BackgroundBlur";

import HeaderImageSource from "./static/tiesosnera.jpg";

const Wrapper = styled.div`
  padding: 15px;
`;

const Container = styled.div`
  margin: 3em auto auto auto;
  max-width: 500px;
`;
const Section = styled.div`
  /* border-style: dashed;
  border-color: gray; */
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background-color: white;
  max-width: 100%;
  color: #212f45;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const Description = styled.div`
  display: grid;
  padding: 1em;
  background: #f5f4fc;
`;
const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
`;
const BandName = styled.span`
  font-size: 1.5em;
`;

export const App = () => (
  <Wrapper>
    <Container>
      <Blur imageSource={HeaderImageSource}></Blur>
      <Section>
        <Logo src={HeaderImageSource}></Logo>
        <Description>
          <Title>Tiesos Nėra</Title>
          <BandName>Shaltinis</BandName>
        </Description>
        <Links></Links>
        <Footer></Footer>
      </Section>
    </Container>
  </Wrapper>
);
