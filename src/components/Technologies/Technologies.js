import React from 'react';
import {  DiCodeBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SpecialBorder } from './TechnologiesStyles';
import { AiFillSketchCircle } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            <SpecialBorder>React.js</SpecialBorder> <SpecialBorder>VueJs</SpecialBorder> <SpecialBorder>Angular</SpecialBorder>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaNode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SpecialBorder>NodeJs</SpecialBorder> <SpecialBorder>JQuery</SpecialBorder>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillSketchCircle size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
             <SpecialBorder>Sketch</SpecialBorder>  <SpecialBorder>Figma</SpecialBorder> <SpecialBorder>ProCreate</SpecialBorder>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
