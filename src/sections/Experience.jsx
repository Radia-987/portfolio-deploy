// import styled from 'styled-components';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

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
// const ImgOverlay = styled.div`
//   position: fixed;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: rgba(24,26,27,0.92);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const ImgModal = styled.div`
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
// const CertImg = styled.img`
//   max-width: 60vw;
//   max-height: 65vh;
//   border-radius: 10px;
//   background: #111;
//   box-shadow: 0 2px 16px #14ffe922;
// `;
// const PdfFrame = styled.iframe`
//   max-width: 95vw;
//   min-width: 800px;
//   height: 95vh;
//   border-radius: 10px;
//   background: #111;
//   border: none;
// `;

// export default function Experience() {
//   const [pdfOpen, setPdfOpen] = useState(null); // 0 for CETQAP, 1 for DevLogix
//   return (
//     <Section id="experience">
//       <Title>Internship Experience</Title>
//       <CardsGrid>
//         <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
//           <div>
//             <CardTitle>CETQAP – Quantum & AI Research Intern</CardTitle>
//             <CardDesc>
//               <div style={{marginBottom:'0.7rem'}}><b>Company:</b> <span style={{color:'#e0e0e0'}}>Centre of Excellence for Technology Quantum and AI Pakistan</span></div>
//               <div style={{marginBottom:'0.7rem'}}><b>Duration:</b> July–September 2024 (8 weeks)</div>
//               <div style={{marginBottom:'0.7rem'}}><b>Role:</b> Research Intern</div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Key Tasks:</b>
//                 <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
//                   <li>Orientation, quantum ML intro, literature review</li>
//                   <li>Weekly meetings, coding classical ML models</li>
//                   <li>Simulating QSVM, QRL study, RL implementation</li>
//                   <li>Paper writing, final presentation</li>
//                 </ul>
//               </div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Learning Outcomes:</b>
//                 <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
//                   <li>Explored quantum computing</li>
//                   <li>Classical vs quantum ML, RL</li>
//                   <li>Research writing, teamwork</li>
//                 </ul>
//               </div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Fields:</b> Quantum Computing, Machine Learning, Research, AI
//               </div>
//             </CardDesc>
//           </div>
//           <div>
//             <CardActions>
//               <CardLink onClick={() => setPdfOpen(0)}><FontAwesomeIcon icon={faEye}/> Show Certificate (PDF)</CardLink>
//             </CardActions>
//           </div>
//         </Card>
//         <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
//           <div>
//             <CardTitle>DevLogix – React & Backend Developer Intern</CardTitle>
//             <CardDesc>
//               <div style={{marginBottom:'0.7rem'}}><b>Company:</b> <span style={{color:'#e0e0e0'}}>DevLogix</span></div>
//               <div style={{marginBottom:'0.7rem'}}><b>Duration:</b> Aug–Oct 2024 (3 months, Remote)</div>
//               <div style={{marginBottom:'0.7rem'}}><b>Role:</b> React.js & Backend Developer Intern</div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Key Tasks:</b>
//                 <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
//                   <li>Frontend development (React.js)</li>
//                   <li>Backend APIs (Node.js, MongoDB)</li>
//                   <li>Smart HR system, team meetings, project planning</li>
//                 </ul>
//               </div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Learning Outcomes:</b>
//                 <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
//                   <li>Built full-stack HR app</li>
//                   <li>Improved React/Node skills</li>
//                   <li>Teamwork, project lifecycle</li>
//                 </ul>
//               </div>
//               <div style={{marginBottom:'0.7rem'}}>
//                 <b>Fields:</b> Web Development, React.js, Node.js, MongoDB, HR Tech
//               </div>
//             </CardDesc>
//           </div>
//           <div>
//             <CardActions>
//               <CardLink onClick={() => setPdfOpen(1)}><FontAwesomeIcon icon={faEye}/> Show Certificate (PDF)</CardLink>
//             </CardActions>
//           </div>
//         </Card>
//       </CardsGrid>
//       {pdfOpen === 0 && (
//         <ImgOverlay>
//           <ImgModal>
//             <CloseBtn onClick={() => setPdfOpen(null)} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
//             <PdfFrame src={'/internship/CETQAP.pdf'} title="CETQAP Certificate PDF" />
//           </ImgModal>
//         </ImgOverlay>
//       )}
//       {pdfOpen === 1 && (
//         <ImgOverlay>
//           <ImgModal>
//             <CloseBtn onClick={() => setPdfOpen(null)} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
//             <PdfFrame src={'/internship/DevLogix.pdf'} title="DevLogix Certificate PDF" />
//           </ImgModal>
//         </ImgOverlay>
//       )}
//     </Section>
//   );
// }
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

const ImgOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,26,27,0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgModal = styled.div`
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

const PdfFrame = styled.iframe`
  max-width: 95vw;
  min-width: 800px;
  height: 95vh;
  border-radius: 10px;
  background: #111;
  border: none;

  @media (max-width: 900px) {
    min-width: 90vw;
    height: 60vh;
  }
  @media (max-width: 600px) {
    min-width: 98vw;
    height: 40vh;
    border-radius: 8px;
  }
`;

export default function Experience() {
  const [pdfOpen, setPdfOpen] = useState(null); // 0 for CETQAP, 1 for DevLogix
  return (
    <Section id="experience">
      <Title>Internship Experience</Title>
      <CardsGrid>
        <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
            <CardTitle>CETQAP – Quantum & AI Research Intern</CardTitle>
            <CardDesc>
              <div style={{marginBottom:'0.7rem'}}><b>Company:</b> <span style={{color:'#e0e0e0'}}>Centre of Excellence for Technology Quantum and AI Pakistan</span></div>
              <div style={{marginBottom:'0.7rem'}}><b>Duration:</b> July–September 2024 (8 weeks)</div>
              <div style={{marginBottom:'0.7rem'}}><b>Role:</b> Research Intern</div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Key Tasks:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Orientation, quantum ML intro, literature review</li>
                  <li>Weekly meetings, coding classical ML models</li>
                  <li>Simulating QSVM, QRL study, RL implementation</li>
                  <li>Paper writing, final presentation</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Learning Outcomes:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Explored quantum computing</li>
                  <li>Classical vs quantum ML, RL</li>
                  <li>Research writing, teamwork</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Fields:</b> Quantum Computing, Machine Learning, Research, AI
              </div>
            </CardDesc>
          </div>
          <div>
            <CardActions>
              <CardLink onClick={() => setPdfOpen(0)}><FontAwesomeIcon icon={faEye}/> Show Certificate (PDF)</CardLink>
            </CardActions>
          </div>
        </Card>
        <Card style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
            <CardTitle>DevLogix – React & Backend Developer Intern</CardTitle>
            <CardDesc>
              <div style={{marginBottom:'0.7rem'}}><b>Company:</b> <span style={{color:'#e0e0e0'}}>DevLogix</span></div>
              <div style={{marginBottom:'0.7rem'}}><b>Duration:</b> Aug–Oct 2024 (3 months, Remote)</div>
              <div style={{marginBottom:'0.7rem'}}><b>Role:</b> React.js & Backend Developer Intern</div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Key Tasks:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Frontend development (React.js)</li>
                  <li>Backend APIs (Node.js, MongoDB)</li>
                  <li>Smart HR system, team meetings, project planning</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Learning Outcomes:</b>
                <ul style={{margin:'0.3rem 0 0.3rem 1.1rem',color:'#bdbdbd'}}>
                  <li>Built full-stack HR app</li>
                  <li>Improved React/Node skills</li>
                  <li>Teamwork, project lifecycle</li>
                </ul>
              </div>
              <div style={{marginBottom:'0.7rem'}}>
                <b>Fields:</b> Web Development, React.js, Node.js, MongoDB, HR Tech
              </div>
            </CardDesc>
          </div>
          <div>
            <CardActions>
              <CardLink onClick={() => setPdfOpen(1)}><FontAwesomeIcon icon={faEye}/> Show Certificate (PDF)</CardLink>
            </CardActions>
          </div>
        </Card>
      </CardsGrid>
      {pdfOpen === 0 && (
        <ImgOverlay>
          <ImgModal>
            <CloseBtn onClick={() => setPdfOpen(null)} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
            <PdfFrame src={'/internship/CETQAP.pdf'} title="CETQAP Certificate PDF" />
          </ImgModal>
        </ImgOverlay>
      )}
      {pdfOpen === 1 && (
        <ImgOverlay>
          <ImgModal>
            <CloseBtn onClick={() => setPdfOpen(null)} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
            <PdfFrame src={'/internship/DevLogix.pdf'} title="DevLogix Certificate PDF" />
          </ImgModal>
        </ImgOverlay>
      )}
    </Section>
  )
}