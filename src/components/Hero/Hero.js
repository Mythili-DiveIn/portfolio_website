import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To < br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
      The purpose of this  Portfolio is to  showcase my designing and  development skills.
      </SectionText>
       <Button  onClick= {()=> window.location = 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;