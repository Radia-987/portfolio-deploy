
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';




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
// const CardLink = styled.button`
//   color: #14ffe9;
//   font-size: 1.05rem;
//   background: none;
//   border: none;
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
//   cursor: pointer;
//   transition: color 0.2s;
//   &:hover {
//     color: #7f5fff;
//   }
// `;
// const CertImgModalOverlay = styled.div`
//   position: fixed;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: rgba(24,26,27,0.92);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const CertImgModal = styled.div`
//   background: #232526;
//   border-radius: 16px;
//   box-shadow: 0 8px 32px #14ffe944;
//   padding: 2rem 2.5rem;
//   max-width: 90vw;
//   max-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;
// const CertImg = styled.img`
//   max-width: 60vw;
//   max-height: 65vh;
//   border-radius: 10px;
//   background: #111;
//   box-shadow: 0 2px 16px #14ffe922;
// `;
// const CloseBtn = styled.button`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.2rem;
//   background: none;
//   border: none;
//   color: #14ffe9;
//   font-size: 2rem;
//   cursor: pointer;
//   z-index: 10001;
// `;
// ...existing code...
const Section = styled.section`
  background: #181a1b;
  min-height: 60vh;
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2.2rem 0 2.2rem 0;
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
  gap: 2.2rem; /* This sets both row and column gap */
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 5rem; /* Ensure vertical gap on mobile/tablet */
    max-width: 98vw;
  }
`;
//

const Card = styled.div`
  background: linear-gradient(135deg, #232526 0%, #2a2c2d 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(20,255,233,0.08);
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-left: 4px solid transparent;
  border-image: linear-gradient(180deg, #14ffe9 0%, #7f5fff 100%) 1;
  transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s, border-left 0.3s;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #14ffe9 0%, #7f5fff 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: scale(1.045);
    box-shadow: 0 4px 32px #14ffe944;
    border-left: 4px solid #14ffe9;
    
    &:before {
      opacity: 1;
    }
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

const SkillBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #7f5fff22 0%, #14ffe922 100%);
  color: #14ffe9;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #7f5fff44;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(135deg, #7f5fff44 0%, #14ffe944 100%);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(127, 95, 255, 0.3);
  }
  
  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
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

const CardLink = styled.button`
  color: #14ffe9;
  font-size: 1.05rem;
  background: linear-gradient(135deg, #7f5fff11 0%, #14ffe911 100%);
  border: 1px solid #14ffe944;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #fff;
    background: linear-gradient(135deg, #7f5fff 0%, #14ffe9 100%);
    border-color: #14ffe9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(20, 255, 233, 0.3);
  }

  @media (max-width: 600px) {
    font-size: 0.98rem;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
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

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
    max-width: 98vw;
    max-height: 98vh;
    border-radius: 10px;
  }
`;

const CertImg = styled.img`
  max-width: 60vw;
  max-height: 65vh;
  border-radius: 10px;
  background: #111;
  box-shadow: 0 2px 16px #14ffe922;

  @media (max-width: 900px) {
    max-width: 80vw;
    max-height: 50vh;
  }
  @media (max-width: 600px) {
    max-width: 95vw;
    max-height: 40vh;
  }
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

  @media (max-width: 600px) {
    top: 0.7rem;
    right: 0.7rem;
    font-size: 1.5rem;
  }
`;

// ...existing code
export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(null); // 0 for German, 1 for AWS
  const certs = [
    {
      name: 'Generative AI Application Developer',
      awardedTo: 'Radia Riaz',
      details: [
        '🏆 Top Performer Award',
        'NCEAC - HEC Generative AI Training',
        'Duration: Oct - Nov 2025',
        'Issued By: UETIANS Lahore Endowment Foundation, USA',
        'Partners: NCEAC, CPAKANGELS, iCodeGuru, SPIRE',
        'Certificate ID: 73dc26ea703eefb0',
        'Issue Date: 20th December, 2025',
      ],
      skills: [
        'Generative AI application development',
        'AI/ML implementation',
      ],
      img: '/certifications/HEC.png'
    },
    {
      name: 'Developing Your Creativity as a Leader',
      awardedTo: 'Radia Riaz',
      details: [
        'Course by LinkedIn Learning',
        'Sponsored By: PMI® Registered Education Provider',
        'Completion Date: Nov 25, 2025',
        'Provider ID: #4101',
        'Activity: 4101G12F3K',
        'PDUs/Contact Hours: 0.75',
      ],
      skills: [
        'Creativity and Innovation',
        'Leadership',
      ],
      img: '/certifications/Leadership.png'
    },
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
                  <div style={{marginTop:'0.5rem'}}>
                    {cert.skills.map((s, i) => (<SkillBadge key={i}>{s}</SkillBadge>))}
                  </div>
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
