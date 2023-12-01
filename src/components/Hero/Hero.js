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
        <SectionText>
          I am a Frontend heavy Full Stack Developer
          <br />I have over 6 years of experience building applications with
          various Javascript frontend frameworks. I also have experience with
          backend technologies like NodeJS, GraphQL, MongoDB. I have created
          multiple microservices, managed DBs and deployed application to the
          cloud using CI/CD
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
