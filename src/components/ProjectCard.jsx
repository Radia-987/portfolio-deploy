// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

// const Card = styled.div`
//   background: #232526;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px rgba(20,255,233,0.08);
//   padding: 2rem 1.5rem;
//   margin: 1rem 0;
//   max-width: 350px;
//   transition: transform 0.3s, box-shadow 0.3s;
//   color: #fff;
//   position: relative;
//   overflow: hidden;
//   &:hover {
//     transform: translateY(-8px) scale(1.03) rotate(-1deg);
//     box-shadow: 0 8px 32px #14ffe944, 0 2px 16px #7f5fff33;
//   }
// `;

// const Title = styled.h3`
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.3rem;
//   margin-bottom: 0.5rem;
//   color: #14ffe9;
// `;

// const Description = styled.p`
//   color: #bdbdbd;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// `;

// const TechStack = styled.div`
//   font-size: 0.95rem;
//   color: #7f5fff;
//   margin-bottom: 1.2rem;
// `;

// const ButtonRow = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const CardButton = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
//   background: #181a1b;
//   color: #14ffe9;
//   border-radius: 20px;
//   padding: 0.5rem 1.2rem;
//   font-size: 0.98rem;
//   font-weight: 500;
//   text-decoration: none;
//   box-shadow: 0 2px 8px #14ffe922;
//   transition: background 0.2s, color 0.2s, transform 0.2s;
//   &:hover {
//     background: #14ffe9;
//     color: #181a1b;
//     transform: scale(1.07);
//   }
// `;

// export default function ProjectCard({ title, description, tech, viewLink, demoLink }) {
//   return (
//     <Card>
//       <Title>{title}</Title>
//       <Description>{description}</Description>
//       <TechStack>{tech}</TechStack>
//       <ButtonRow>
//         <CardButton href={viewLink} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faExternalLinkAlt} /> View More
//         </CardButton>
//         {demoLink && (
//           <CardButton href={demoLink} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faVideo} /> Demo/Video
//           </CardButton>
//         )}
//       </ButtonRow>
//     </Card>
//   );
// }
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background: #232526;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(20,255,233,0.08);
  padding: 2rem 1.5rem;
  margin: 1rem 0;
  max-width: 350px;
  transition: transform 0.3s, box-shadow 0.3s;
  color: #fff;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px) scale(1.03) rotate(-1deg);
    box-shadow: 0 8px 32px #14ffe944, 0 2px 16px #7f5fff33;
  }

  @media (max-width: 900px) {
    max-width: 95vw;
    padding: 1.2rem 0.7rem;
    margin: 1rem auto;
  }
  @media (max-width: 600px) {
    max-width: 99vw;
    padding: 1rem 0.3rem;
    margin: 1rem auto;
  }
`;

const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #14ffe9;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  color: #bdbdbd;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const TechStack = styled.div`
  font-size: 0.95rem;
  color: #7f5fff;
  margin-bottom: 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: stretch;
  }
`;

const CardButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #181a1b;
  color: #14ffe9;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 0.98rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 8px #14ffe922;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: #14ffe9;
    color: #181a1b;
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    justify-content: center;
    width: 100%;
  }
`;

export default function ProjectCard({ title, description, tech, viewLink, demoLink }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechStack>{tech}</TechStack>
      <ButtonRow>
        <CardButton href={viewLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} /> View More
        </CardButton>
        {demoLink && (
          <CardButton href={demoLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faVideo} /> Demo/Video
          </CardButton>
        )}
      </ButtonRow>
    </Card>
  );
}