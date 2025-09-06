
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faImages } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../components/ImageSlider';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
const DateLabel = styled.div`
  background: #7f5fff;
  color: #fff;
  font-size: 0.92rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.18rem 0.7rem;
  display: inline-block;
  margin-bottom: 0.7rem;
  align-self: flex-end;
`;
// ...existing code...
const ProjectsSection = styled.section`
  background: #181a1b;
  min-height: 60vh;
  padding: 3rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2rem 0 2.5rem 0;
  }
`;

const SectionTitle = styled.h2`
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

const CardStack = styled.div`
  font-size: 0.98rem;
  color: #7f5fff;
  margin-bottom: 0.7rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const CardShort = styled.p`
  color: #bdbdbd;
  font-size: 1.01rem;
  margin-bottom: 1.1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 0.7rem;
  }
`;

const SeeMoreBtn = styled.button`
  background: none;
  border: none;
  color: #14ffe9;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    color: #7f5fff;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;

const CardDetails = styled.div`
  background: #181a1bcc;
  border-radius: 12px;
  margin-top: 0.7rem;
  padding: 1.1rem 1rem 0.7rem 1rem;
  color: #e0e0e0;
  font-size: 0.98rem;
  box-shadow: 0 2px 8px #14ffe922;

  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 0.7rem 0.5rem 0.5rem 0.5rem;
  }
`;

const CardLinks = styled.div`
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

const CardImage = styled.img`
  width: 100%;
  max-height: 175px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #232526 60%, #14ffe9 100%);
  display: block;

  @media (max-width: 600px) {
    max-height: 120px;
    margin-bottom: 0.7rem;
  }
`;


export default function Projects() {
  // Example project data, newest first
  const cabImages = [
    '/assets/client-2.png', '/assets/client-3.png', '/assets/client-4.png', '/assets/client-5.png', '/assets/client-6.png', '/assets/client-7.png', '/assets/client-8.png', '/assets/client-9.png', '/assets/client-14.png', '/assets/client-15.png', '/assets/client-16.png', '/assets/client-17.png', '/assets/client-18.png', '/assets/client-19.png', '/assets/client-20.png', '/assets/client-21.png', '/assets/client-22.png', '/assets/client-23.png'
  ];
  const recipeMedia = [
    '/recipe/1.5.png',
    '/recipe/1.png',
    '/recipe/2.png',
    '/recipe/3.png',
    '/recipe/4.webm',
    '/recipe/5.png',
    '/recipe/6.png',
    '/recipe/7.png',
    '/recipe/8.png',
    '/recipe/9.png',
    '/recipe/10.png',
    '/recipe/11.png',
    '/recipe/12.png'
  ];
  const netflixImages = [
    '/netflix/1.png','/netflix/2.png','/netflix/3.png','/netflix/4.png','/netflix/5.png','/netflix/6.png','/netflix/7.png','/netflix/8.png','/netflix/9.png','/netflix/10.png','/netflix/11.png','/netflix/12.png','/netflix/13.png','/netflix/14.png','/netflix/15.png','/netflix/16.png','/netflix/17.png','/netflix/18.png','/netflix/19.png','/netflix/20.png'
  ];
  const projects = [
    {
      title: 'Recipe Master Clone',
      date: '2025',
      stack: 'React Native, Expo, Clerk, Express.js, PostgreSQL, Gemini API',
      image: recipeMedia[0],
      short: 'A modern mobile app for browsing, saving, and exploring recipes with AI support, YouTube tutorials, and secure authentication.',
      details: (
        <CardDetails>
          <b>Key Features:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Light/dark themes, smooth UI with React Native & Expo</li>
            <li>Clerk authentication with 6-digit email verification</li>
            <li>Recipe browsing, favorites, category filters</li>
            <li>YouTube video tutorials for recipes</li>
            <li>Backend: Express.js + PostgreSQL (Neon)</li>
            <li>AI support for recipe queries via Gemini API</li>
          </ul>
          <b>Tech Stack:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>React Native, Expo, Clerk, Express.js, PostgreSQL, Gemini API</li>
          </ul>
          <b>Learning:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Mobile app development, secure auth, integrating AI and video, full-stack deployment</li>
          </ul>
          <b>Reflection:</b> Built to explore modern mobile UX, authentication, and AI integration in real-world apps.
        </CardDetails>
      ),
      images: recipeMedia,
    },
    {
      title: 'NovaStream – Netflix Clone',
      date: '2024',
      stack: 'ReactJS, TailwindCSS, TMDb API, Stripe, MongoDB, AWS',
      image: netflixImages[0],
      short: 'A ReactJS and TailwindCSS-based streaming platform with TMDb API, multilingual support (English, Italian, Spanish, German), Stripe subscriptions, search, filtering, watch history, and a MongoDB backend on AWS.',
      details: (
        <CardDetails>
          <b>Key Features:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Multilingual: English, Italian, Spanish, German</li>
            <li>Stripe-powered subscriptions for premium users</li>
            <li>Search, filtering, and watch history</li>
            <li>Ad-free streaming for premium users</li>
            <li>Backend: MongoDB Cluster on AWS</li>
          </ul>
          <b>Tech Stack:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>ReactJS, TailwindCSS, TMDb API, Stripe, MongoDB, AWS</li>
          </ul>
          <b>Learning:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Building scalable streaming apps, integrating payments, multilingual UI, and cloud deployment</li>
          </ul>
          <b>Reflection:</b> Developed to master full-stack streaming platforms and cloud-based deployments.
        </CardDetails>
      ),
      images: netflixImages,
    },
    {
      title: 'TurboTrip – Java Swing Cab Booking System',
      date: '2023',
      stack: 'Java Swing, MySQL, OOP, NetBeans',
      image: cabImages[0],
      short: 'A full-featured desktop cab booking app with client and admin modules, built solo to master Java Swing UI, OOP, and relational databases.',
      details: (
        <CardDetails>
          <b>Key Features:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Client: Auth, profile, booking (intercity/intracity/truck), fare calc, billing, payment (cash/card).</li>
            <li>Admin: Driver/fare management, booking/billing oversight.</li>
          </ul>
          <b>Tech Stack:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Java Swing (custom UI), MySQL (PK/FK/joins), OOP, NetBeans IDE</li>
          </ul>
          <b>Learning:</b>
          <ul style={{margin:'0.5rem 0 0.7rem 1.1rem'}}>
            <li>Hands-on Java Swing UI, OOP, SQL joins, client–admin system design.</li>
          </ul>
          <b>Reflection:</b> Built solo as a first-year project to connect UI, logic, and DB. Motivated me to keep building and learning.
        </CardDetails>
      ),
      images: cabImages,
    },
    // Add more projects here, newest first
  // ...existing code...
  ];

  const [detailsOpen, setDetailsOpen] = useState(null); // index of open details modal, or null
  const [imgOpen, setImgOpen] = useState(null); // index of open image slider, or null

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <CardsGrid>
        {projects.map((proj, idx) => (
          <Card key={idx}>
            <div>
              <DateLabel>{proj.date}</DateLabel>
              <CardTitle>{proj.title}</CardTitle>
              <CardStack>{proj.stack}</CardStack>
              {idx === 0 && <CardImage src={'/introproject/recipe.png'} alt="Recipe Master Clone preview" style={{objectFit:'contain', maxHeight:'170px'}} />}
              {idx === 1 && <CardImage src={'/introproject/netflix.png'} alt="NovaStream preview" style={{objectFit:'cover', maxHeight:'175px'}} />}
              {idx === 2 && <CardImage src={'/introproject/cab.png'} alt="Cab Booking System preview" />}
              <CardShort>{proj.short}</CardShort>
            </div>
            <div>
              {proj.details && (
                <SeeMoreBtn onClick={() => setDetailsOpen(idx)}>
                  See More <FontAwesomeIcon icon={faChevronDown} />
                </SeeMoreBtn>
              )}
              <CardLinks>
                {proj.images && proj.images.length > 0 && (
                  <CardLink as="button" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setImgOpen(idx)}>
                    <FontAwesomeIcon icon={faImages} /> Demo/Pictures
                  </CardLink>
                )}
              </CardLinks>
            </div>
          </Card>
        ))}
      </CardsGrid>
      <ProjectDetailsModal open={detailsOpen !== null} onClose={() => setDetailsOpen(null)}>
        {detailsOpen !== null && projects[detailsOpen].details}
      </ProjectDetailsModal>
      <ImageSlider open={imgOpen !== null} onClose={() => setImgOpen(null)} images={imgOpen !== null ? projects[imgOpen].images : []} />
    </ProjectsSection>
  );
}

