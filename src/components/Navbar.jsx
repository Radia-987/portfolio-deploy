

import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';

// const NavbarContainer = styled.nav`
//   position: sticky;
//   top: 0;
//   width: 100%;
//   background: #181a1b;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   z-index: 100;
//   box-shadow: 0 2px 16px rgba(0,0,0,0.4);

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0.7rem 1rem;
//   }
// `;
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: #181a1b;
  display: flex;
  justify-content: space-between;
  align-items: center; /* <-- Ensure this is present */
  padding: 1rem 2rem;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    flex-direction: row; /* Ensure row direction */
    align-items: center; /* Ensure vertical centering */
    padding: 0.7rem 1rem;
    height: 56px; /* Add a fixed height if needed */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background: #22262e;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 1rem 0 1rem 1.5rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    display: ${props => (props.open ? "flex" : "none")};
    z-index: 99;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #7f5fff;
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7f5fff, #14ffe9);
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -4px;
  }
  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.3rem;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #14ffe9;
    transform: scale(1.15);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <div style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px', color: '#14ffe9', fontFamily: 'Poppins, sans-serif' }}>
        Radia
      </div>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }} />
        <span style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }} />
        <span style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }} />
      </Hamburger>
      <NavLinks open={menuOpen}>
        <NavLink to="home" smooth duration={500} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="about" smooth duration={500} onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="research" smooth duration={500} onClick={() => setMenuOpen(false)}>Research</NavLink>
        <NavLink to="certifications" smooth duration={500} onClick={() => setMenuOpen(false)}>Certifications</NavLink>
        <NavLink to="experience" smooth duration={500} onClick={() => setMenuOpen(false)}>Experience</NavLink>
        <NavLink to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </NavLinks>
     
    </NavbarContainer>
  );
}