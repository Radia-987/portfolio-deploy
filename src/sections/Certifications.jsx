
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';




const Section = styled.section`
  background: #181a1b;
  min-height: 60vh;
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
  margin-bottom: 2.5rem;
`;
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 1100px;
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
  transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s;
  &:hover {
    transform: scale(1.045);
    box-shadow: 0 4px 32px #14ffe944;
  }
`;
const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #14ffe9;
  margin-bottom: 0.7rem;
`;
const CardDesc = styled.div`
  color: #bdbdbd;
  font-size: 1.01rem;
  margin-bottom: 1.1rem;
`;
const CardActions = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 1.1rem;
`;
const CardLink = styled.button`
  color: #14ffe9;
  font-size: 1.05rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #7f5fff;
  }
`;
const CertImgModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,26,27,0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CertImgModal = styled.div`
  background: #232526;
  border-radius: 16px;
  box-shadow: 0 8px 32px #14ffe944;
  padding: 2rem 2.5rem;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const CertImg = styled.img`
  max-width: 60vw;
  max-height: 65vh;
  border-radius: 10px;
  background: #111;
  box-shadow: 0 2px 16px #14ffe922;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: #14ffe9;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10001;
`;

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(null); // 0 for German, 1 for AWS
  const certs = [
    {
      name: 'German Language Course (A1.1)',
      awardedTo: 'Radia Riaz',
      details: [
        'Level: A1.1 (Beginner)',
        'Duration: 30 hours',
        'Issued By: LSFI',
        'Date: 8 Oct 2023',
      ],
      skills: [
        'Basic German communication',
        'Simple conversation and grammar',
      ],
      img: '/certifications/German.jpg'
    },
    {
      name: 'AWS Builders Online Series',
      awardedTo: 'Radia Riaz',
      details: [
        'Certificate of Attendance',
        'Date: 31 July 2025',
        'Organizer: Amazon Web Services',
        'Track: Generative AI on AWS',
      ],
      skills: [
        'AWS AI/ML ecosystem',
        'GenAI app development',
      ],
      img: '/certifications/AWS.png'
    }
  ];
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <CardsGrid>
        {certs.map((cert, idx) => (
          <Card key={idx} style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
            <div>
              <CardTitle>{cert.name}</CardTitle>
              <CardDesc>
                <div style={{marginBottom:'0.7rem'}}><b>Awarded To:</b> {cert.awardedTo}</div>
                <div style={{marginBottom:'0.7rem'}}>
                  <b>Details:</b>
                  <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                    {cert.details.map((d, i) => (<li key={i}>{d}</li>))}
                  </ul>
                </div>
                <div style={{marginBottom:'0.7rem'}}>
                  <b>Skills:</b>
                  <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                    {cert.skills.map((s, i) => (<li key={i}>{s}</li>))}
                  </ul>
                </div>
              </CardDesc>
            </div>
            <div>
              <CardActions>
                <CardLink onClick={() => setModalOpen(idx)}><FontAwesomeIcon icon={faEye}/> Show Certificate</CardLink>
              </CardActions>
            </div>
          </Card>
        ))}
      </CardsGrid>
      {modalOpen !== null && (
        <CertImgModalOverlay>
          <CertImgModal>
            <CloseBtn onClick={() => setModalOpen(null)} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
            <CertImg src={certs[modalOpen].img} alt="Certificate" />
          </CertImgModal>
        </CertImgModalOverlay>
      )}
    </Section>
  );
}
