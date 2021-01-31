import React, { FC } from "react";
import styled from "styled-components";

interface BlurProps {
  imageSource?: string;
}
const BackgroundBlur = styled.div<BlurProps>`
  background-image: url(${(props) => props.imageSource});
  background-size: cover;
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  position: absolute;
  filter: blur(13px);
`;

const BlurMask = styled.div`
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  position: absolute;
  background: #272640;
  opacity: 0.4;
  top: -40px;
  left: -40px;
`;

const BlurWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: fixed;
  z-index: -99;
`;

export const Blur: FC<BlurProps> = (props: BlurProps) => {
  return (
    <BlurWrapper>
      <BackgroundBlur imageSource={props.imageSource}></BackgroundBlur>
      <BlurMask></BlurMask>
    </BlurWrapper>
  );
};
