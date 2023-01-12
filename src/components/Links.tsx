import React from "react";
import styled from "styled-components";
import {
  faYoutube,
  faSpotify,
  faSoundcloud,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { STREAMING } from "../links.json";
const LINKS = STREAMING.LAIME;

const LinksWrapper = styled.div`
  background-color: white;
  line-height: 20px;
  color: #212f45;
`;
const Link = styled.a`
  border-top: 1px solid #dedede;

  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #272640;

  &:last-of-type {
    border-bottom: 1px solid #dedede;
  }

  &:hover {
    background: #f4f1f8;
  }
`;

const Platform = styled.span`
  flex: 1;
  margin-left: 16px;
`;

const IconTextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 16px;
`;
const Button = styled.button`
  color: #3e1f47;
  font-size: 16px;
  padding: 4px 16px;
  border: 4px solid #3e1f47;
  border-radius: 3px;
`;

const trackAndRedirect: Function = (url: string) => (event: Event) => {
  event.preventDefault();
  window.fbq("track", "Lead");
  window.location.href = url;
};

export const Links = () => {
  return (
    <LinksWrapper>
      <Link href="#" onClick={trackAndRedirect(LINKS.SPOTIFY)} rel="noopener">
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faSpotify} size="2x" fixedWidth />
          </Icon>
          <Platform>Spotify</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link>
      <Link href="#" onClick={trackAndRedirect(LINKS.BANDCAMP)} rel="noopener">
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faBandcamp} size="2x" fixedWidth />
          </Icon>
          <Platform>Bandcamp</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link>
      {/* <Link href="#" onClick={trackAndRedirect(LINKS.YOUTUBE)} rel="noopener">
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
          </Icon>
          <Platform>Youtube</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link> */}
      <Link
        href="#"
        onClick={trackAndRedirect(LINKS.SOUNDCLOUD)}
        rel="noopener"
      >
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faSoundcloud} size="2x" fixedWidth />
          </Icon>
          <Platform>Soundcloud</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link>
    </LinksWrapper>
  );
};
