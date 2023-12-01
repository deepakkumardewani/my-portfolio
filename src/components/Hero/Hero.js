import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, my name is <br />
          Deepak Kumar Dewani
        </SectionTitle>
        <SectionText>I am a Frontend heavy Full Stack Developer</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
