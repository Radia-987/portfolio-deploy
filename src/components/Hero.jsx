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
`;

const Name = styled.h1`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background: linear-gradient(90deg, #7f5fff, #14ffe9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  color: #bdbdbd;
  margin-bottom: 1.5rem;
`;

const Intro = styled.p`
  max-width: 600px;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
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
`;


const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
`;

const InfoCol = styled.div`
  min-width: 220px;
  max-width: 320px;
  text-align: left;
  background: #232526cc;
  border-radius: 16px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 16px #14ffe922;
  font-size: 1.02rem;
`;

const SectionTitle = styled.h3`
  color: #14ffe9;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0 0 0.5rem 1.1rem;
  padding: 0;
  color: #bdbdbd;
  font-size: 0.98rem;
`;

const Highlight = styled.span`
  color: #7f5fff;
  font-weight: 600;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <AnimatedBg />
      <Content>
        <Name>Radia Riaz</Name>
  <Tagline>App Developer | MERN Stack Developer | CGPA 3.88/4.0 | NUST</Tagline>
        <Intro style={{ marginBottom: '2.2rem' }}>
          <b>Rawalpindi, Pakistan</b> &nbsp;|&nbsp; <a href="mailto:radia_riaz@outlook.com" style={{color:'#14ffe9'}}>radia_riaz@outlook.com</a>
        </Intro>
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</ResumeButton>
      </Content>
    </HeroSection>
  );
}
