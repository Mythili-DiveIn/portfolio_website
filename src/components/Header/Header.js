import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiEgyptianProfile } from 'react-icons/gi'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/portfolio_website/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" , marginBottom:'1em'}}>
        <Span>My</Span><GiEgyptianProfile size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="/portfolio_website/#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/portfolio_website/#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/portfolio_website/#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
        <SocialIcons target='_blank' href="https://google.com">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://google.com">
          <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://google.com">
          <AiFillInstagram size="2rem"/>
        </SocialIcons>
      </Div3>
    
  </Container>
);

export default Header;
