import React from "react";
import styled from "styled-components";
import {
  faYoutube,
  faSpotify,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { STREAMING } from "../links.json";
const LINKS = STREAMING.TIESOS_NERA;

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

const IconTextWrapper = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div`
  // todo: use as link bg
  margin-right: 16px;
`;
const Button = styled.button`
  /* width: 80px;
  height: 36px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: red;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em; */
  color: #3e1f47;
  font-size: 16px;
  padding: 4px 16px;
  border: 4px solid #3e1f47;
  border-radius: 3px;
`;

export const Links = () => {
  return (
    <LinksWrapper>
      <Link href={LINKS.SPOTIFY} rel="noopener">
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faSpotify} size="2x" fixedWidth />
          </Icon>
          <Platform>Spotify</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link>
      <Link href={LINKS.YOUTUBE} rel="noopener">
        <IconTextWrapper>
          <Icon>
            <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
          </Icon>
          <Platform>Youtube</Platform>
        </IconTextWrapper>
        <Button>Play</Button>
      </Link>
      <Link href={LINKS.SOUNDCLOUD} rel="noopener">
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
