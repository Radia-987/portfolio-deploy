
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #181a1b 70%, #232526 100%);
  color: #fff;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 1.2s ease;
  padding: 2rem 1.5rem;

  @media (max-width: 700px) {
    min-height: 75vh;
    padding: 2rem 1rem;
  }
  @media (max-width: 500px) {
    min-height: 70vh;
    padding: 1.5rem 0.8rem;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #7f5fff, #14ffe9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const Tagline = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  color: #bdbdbd;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const Intro = styled.p`
  max-width: 600px;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto; /* <-- Add these lines */
  display: block;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.5rem;
    max-width: 95vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2.2rem;
  background: linear-gradient(90deg, #7f5fff, #14ffe9);
  color: #181a1b;
  font-weight: 600;
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(20,255,233,0.12);
  transition: background 0.3s, color 0.3s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #14ffe9, #7f5fff);
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }

  @media (max-width: 600px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
  }
`;

// Placeholder for animated background (replace with your own or a library)
const AnimatedBg = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle at 20% 30%, #7f5fff22 0%, transparent 60%),
              radial-gradient(circle at 80% 70%, #14ffe922 0%, transparent 60%);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;
export default function Hero() {
  return (
    <HeroSection id="home">
      <AnimatedBg />
      <Content>
        <Name>Radia Riaz</Name>
        <Tagline>Software Engineer | Web & Mobile Development | AI & ML Enthusiast</Tagline>
        <Intro style={{ marginBottom: '2.2rem' }}>
          <b>Rawalpindi, Pakistan</b> &nbsp;|&nbsp; <a href="mailto:radia_riaz@outlook.com" style={{color:'#14ffe9'}}>radia_riaz@outlook.com</a>
        </Intro>
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</ResumeButton>
      </Content>
    </HeroSection>
  );
}