
import styled from 'styled-components';
import { useState } from 'react';
import PdfPreviewModal from '../components/PdfPreviewModal';
// ...existing code...
const Section = styled.section`
  background: #181a1b;
  min-height: 60vh;
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2rem 0 2.5rem 0;
  }
`;

const Title = styled.h2`
  color: #14ffe9;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    max-width: 98vw;
  }
`;

const Card = styled.div`
  background: #232526;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(20,255,233,0.08);
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s;
  &:hover {
    transform: scale(1.045);
    box-shadow: 0 4px 32px #14ffe944;
  }

  @media (max-width: 900px) {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
    border-radius: 14px;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.3rem 0.7rem 0.3rem;
    border-radius: 10px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #14ffe9;
  margin-bottom: 0.7rem;

  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }
`;

const CardDesc = styled.div`
  color: #bdbdbd;
  font-size: 1.01rem;
  margin-bottom: 1.1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 0.7rem;
  }
`;

const CardActions = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 1.1rem;

  @media (max-width: 600px) {
    gap: 0.7rem;
    margin-top: 0.7rem;
    flex-direction: column;
    align-items: stretch;
  }
`;

const CardLink = styled.a`
  color: #14ffe9;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #7f5fff;
  }

  @media (max-width: 600px) {
    font-size: 0.98rem;
    justify-content: center;
    width: 100%;
  }
`;

// ...rest of the
// const Section = styled.section`
//   background: #181a1b;
//   min-height: 60vh;
//   padding: 4rem 0 4rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h2`
//   color: #14ffe9;
//   font-family: 'Poppins', sans-serif;
//   font-weight: 600;
//   font-size: 2rem;
//   margin-bottom: 2.5rem;
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
//   gap: 2.2rem;
//   width: 100%;
//   max-width: 1100px;
// `;

// const Card = styled.div`
//   background: #232526;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px rgba(20,255,233,0.08);
//   padding: 2rem 1.5rem 1.2rem 1.5rem;
//   color: #fff;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s;
//   &:hover {
//     transform: scale(1.045);
//     box-shadow: 0 4px 32px #14ffe944;
//   }
// `;

// const CardTitle = styled.h3`
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.25rem;
//   color: #14ffe9;
//   margin-bottom: 0.7rem;
// `;

// const CardDesc = styled.div`
//   color: #bdbdbd;
//   font-size: 1.01rem;
//   margin-bottom: 1.1rem;
// `;

// const CardActions = styled.div`
//   display: flex;
//   gap: 1.1rem;
//   margin-top: 1.1rem;
// `;

// const CardLink = styled.a`
//   color: #14ffe9;
//   font-size: 1.05rem;
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
//   text-decoration: none;
//   transition: color 0.2s;
//   &:hover {
//     color: #7f5fff;
//   }
// `;


export default function Research() {
  const [modalOpen, setModalOpen] = useState(null); // 0 for IOT, 1 for SQE
  const pdfs = ['/research/IOT.pdf', '/research/SQE.pdf'];
  return (
    <Section id="research">
      <Title>Research Papers</Title>
      <CardsGrid>
        <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
            <CardTitle>IoT-Based LPG Gas Leakage Detection and Prevention System</CardTitle>
            <CardDesc>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Description:</b> <span style={{color:'#e0e0e0'}}>An IoT-powered safety system for real-time LPG gas leak detection and prevention, designed for homes, restaurants, and industrial plants.</span>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Key Hardware:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>MQ-6 sensor</li>
                  <li>Arduino Uno</li>
                  <li>Vibration sensor</li>
                  <li>Servo motor</li>
                  <li>Bluetooth module</li>
                  <li>LCD, buzzer, LEDs, exhaust fan</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Workflow:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Monitors gas levels</li>
                  <li>Triggers alarms and safety actions</li>
                  <li>Sends mobile alerts</li>
                  <li>Displays status on LCD</li>
                  <li>Tampering/earthquake detection</li>
                  <li>Automated ventilation</li>
                  <li>Bluetooth alerts</li>
                  <li>Emergency shut-off</li>
                </ul>
              </div>
            </CardDesc>
          </div>
          <div>
            <CardActions>
              <CardLink as="button" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setModalOpen(0)}>
                Preview PDF
              </CardLink>
            </CardActions>
            <div style={{color:'#bdbdbd',fontSize:'0.95rem',marginTop:'0.7rem'}}>
              For access or collaboration, contact: <a href="mailto:radia_riaz@outlook.com" style={{color:'#14ffe9'}}>radia_riaz@outlook.com</a>
            </div>
          </div>
        </Card>
        <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
            <CardTitle>A Comparative Study on Instructional vs Role-Based Prompt Engineering in NLP Tasks</CardTitle>
            <CardDesc>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Description:</b> <span style={{color:'#e0e0e0'}}>Empirical research comparing instructional and role-based prompting for LLMs (GPT) in domain-specific QA.</span>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Key Findings:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Role-based prompts yield higher accuracy and professional tone</li>
                  <li>Instructional prompts are more readable</li>
                  <li>Actionable insights for AI content generation and prompt engineering</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Tech Stack:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Python (nltk, rouge-score, scikit-learn, textstat, textblob)</li>
                  <li>Google Forms</li>
                  <li>Matplotlib, Seaborn</li>
                  <li>GPT-based LLM</li>
                </ul>
              </div>
            </CardDesc>
          </div>
          <div>
            <CardActions>
              <CardLink as="button" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setModalOpen(1)}>
                Preview PDF
              </CardLink>
            </CardActions>
            <div style={{color:'#bdbdbd',fontSize:'0.95rem',marginTop:'0.7rem'}}>
              For access or collaboration, contact: <a href="mailto:radia_riaz@outlook.com" style={{color:'#14ffe9'}}>radia_riaz@outlook.com</a>
            </div>
          </div>
        </Card>
      </CardsGrid>
      <PdfPreviewModal open={modalOpen !== null} onClose={() => setModalOpen(null)} pdfUrl={modalOpen !== null ? pdfs[modalOpen] : ''} />
    </Section>
  );
}
