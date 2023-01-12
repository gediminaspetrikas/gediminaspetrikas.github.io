import React, { useEffect } from "react";
import styled from "styled-components";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

import { Links } from "./components/Links";
import { Footer } from "./components/Footer";
import { Blur } from "./components/BackgroundBlur";

import HeaderImageSource from "./static/laime_sq.jpg";

declare global {
  interface Window {
    fbq: any;
  }
}

const Wrapper = styled.div`
  padding: 16px;
`;

const Container = styled.div`
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`;
const Section = styled.div`
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
  padding: 16px;
  background: #f8f7fc;
`;
const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
`;
const BandName = styled.span`
  font-size: 26px;
`;

//TODO: use effect to enable/disable facebook tracker
export const App = () => {
  useEffect(() => {
    if (getCookieConsentValue()) {
      // ???
      window.fbq("consent", "grant");
    }
  }, []);
  return (
    <div>
      <Wrapper>
        <Container>
          <Blur imageSource={HeaderImageSource}></Blur>
          <Section>
            <Logo src={HeaderImageSource}></Logo>
            <Description>
              <Title>Laimė</Title>
              <BandName>Shaltinis</BandName>
            </Description>
            <Links></Links>
            <Footer></Footer>
          </Section>
        </Container>
        <CookieConsent
          onAccept={() => {
            window.fbq("consent", "grant");
          }}
          style={{ background: "#272640" }}
          buttonStyle={{ color: "#272640", fontSize: "22px" }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Wrapper>
    </div>
  );
};
