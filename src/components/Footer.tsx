import React from "react";
import styled from "styled-components";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../links.json";

const FooterWrapper = styled.section`
  text-align: center;
  padding: 10px 0;
  white-space: nowrap;
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #272640;
  &:hover {
    color: #3e1f47;
  }
`;

const StyledSocialLink = styled(SocialLink)`
  margin-right: 32px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <StyledSocialLink href={SOCIALS.FACEBOOK} target="_blank" rel="noopener">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          fixedWidth
        ></FontAwesomeIcon>
      </StyledSocialLink>
      <SocialLink href={SOCIALS.INSTAGRAM} target="_blank" rel="noopener">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          fixedWidth
        ></FontAwesomeIcon>
      </SocialLink>
    </FooterWrapper>
  );
};
