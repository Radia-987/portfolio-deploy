import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Section = styled.section`
  background: #181a1b;
  min-height: 40vh;
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  color: #14ffe9;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2.2rem;
`;
const Card = styled.div`
  background: #232526;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(20,255,233,0.08);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  color: #fff;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Message = styled.p`
  color: #bdbdbd;
  font-size: 1.08rem;
  margin-bottom: 2rem;
  text-align: center;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  align-items: center;
`;
const LinkRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #14ffe9;
  font-size: 1.13rem;
  font-weight: 500;
  text-decoration: none;
  background: #181a1bcc;
  border-radius: 12px;
  padding: 0.7rem 1.3rem;
  box-shadow: 0 2px 8px #14ffe922;
  transition: color 0.2s, background 0.2s, transform 0.2s;
  &:hover {
    color: #7f5fff;
    background: #232526;
    transform: scale(1.04);
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card>
        <Message>
          Feel free to reach out for opportunities, collaborations, or questions.<br/>
          I look forward to connecting with you!
        </Message>
        <Links>
          <LinkRow href="mailto:radia_riaz@outlook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> radia_riaz@outlook.com
          </LinkRow>
          <LinkRow href="https://github.com/Radia-987" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub: Radia-987
          </LinkRow>
          <LinkRow href="https://www.linkedin.com/in/radia-riaz-056365255" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: radia-riaz-056365255
          </LinkRow>
        </Links>
      </Card>
    </Section>
  );
}
