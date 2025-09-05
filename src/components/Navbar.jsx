import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: #181a1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(0,0,0,0.4);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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

export default function Navbar() {
  return (
    <NavbarContainer>
      <div style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px', color: '#14ffe9', fontFamily: 'Poppins, sans-serif' }}>
        Radia
      </div>
      <NavLinks>
        <NavLink to="home" smooth duration={500}>Home</NavLink>
        <NavLink to="about" smooth duration={500}>About</NavLink>
        <NavLink to="projects" smooth duration={500}>Projects</NavLink>
        <NavLink to="research" smooth duration={500}>Research</NavLink>
        <NavLink to="certifications" smooth duration={500}>Certifications</NavLink>
        <NavLink to="experience" smooth duration={500}>Experience</NavLink>
        <NavLink to="contact" smooth duration={500}>Contact</NavLink>
      </NavLinks>
      <SocialLinks>
        <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
      </SocialLinks>
    </NavbarContainer>
  );
}
