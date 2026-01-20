// import styled from 'styled-components';

// const AboutSection = styled.section`
//   min-height: 60vh;
//   background: linear-gradient(135deg, #232526 70%, #181a1b 100%);
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 4rem 1.5rem 3rem 1.5rem;
// `;

// const AboutTitle = styled.h2`
//   color: #14ffe9;
//   font-family: 'Poppins', sans-serif;
//   font-size: 2.1rem;
//   font-weight: 700;
//   margin-bottom: 1.2rem;
// `;

// const AboutContent = styled.div`
//   max-width: 700px;
//   background: #181a1bcc;
//   border-radius: 18px;
//   box-shadow: 0 2px 16px #7f5fff22;
//   padding: 2rem 2.2rem;
//   font-size: 1.13rem;
//   color: #e0e0e0;
//   text-align: left;
//   line-height: 1.7;
// `;

// const AboutHighlight = styled.span`
//   color: #7f5fff;
//   font-weight: 600;
// `;

// export default function About() {
//   return (
//     <AboutSection id="about">
//       <AboutTitle>About Me</AboutTitle>
//       <AboutContent>
//         I am a dedicated and results-driven Software Engineering student at NUST, currently in my final year with a CGPA of 3.88/4.0. With a strong foundation in computer science and hands-on experience in full-stack development, I specialize in building modern web and mobile applications using the <AboutHighlight>MERN stack</AboutHighlight> and <AboutHighlight>React Native</AboutHighlight>.<br /><br />
//         My technical expertise spans <AboutHighlight>Java</AboutHighlight>, <AboutHighlight>C++</AboutHighlight>, <AboutHighlight>Python</AboutHighlight>, and cloud technologies, enabling me to deliver robust and scalable solutions. I am passionate about solving real-world problems, collaborating in diverse teams, and continuously learning new tools and frameworks to stay at the forefront of technology.<br /><br />
//   Beyond software development, I am skilled at using Canva for graphic design, and I have basic (Level 1) knowledge of the German language. I am committed to contributing to impactful projects and welcome opportunities for professional growth and collaboration.
//       </AboutContent>
//     </AboutSection>
//   );
// }
import styled from 'styled-components';

const AboutSection = styled.section`
  min-height: 60vh;
  background: linear-gradient(135deg, #232526 70%, #181a1b 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 3rem 1.5rem;

  @media (max-width: 700px) {
    padding: 2.2rem 0.5rem 1.5rem 0.5rem;
    min-height: 50vh;
  }
`;

const AboutTitle = styled.h2`
  color: #14ffe9;
  font-family: 'Poppins', sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
`;

const AboutContent = styled.div`
  max-width: 700px;
  background: #181a1bcc;
  border-radius: 18px;
  box-shadow: 0 2px 16px #7f5fff22;
  padding: 2rem 2.2rem;
  font-size: 1.13rem;
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;

  @media (max-width: 700px) {
    max-width: 98vw;
    padding: 1.2rem 0.7rem;
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    padding: 0.7rem 0.2rem;
    font-size: 0.98rem;
    border-radius: 12px;
  }
`;

const AboutHighlight = styled.span`
  color: #7f5fff;
  font-weight: 600;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        I am a dedicated and results-driven Software Engineering student at NUST, currently in my final year with a CGPA of 3.88/4.0. With a strong foundation in computer science and hands-on experience across multiple domains, I specialize in <AboutHighlight>full-stack web development</AboutHighlight> using <AboutHighlight>React.js</AboutHighlight> and modern backend technologies including <AboutHighlight>Node.js</AboutHighlight>, <AboutHighlight>MongoDB</AboutHighlight>, <AboutHighlight>PostgreSQL</AboutHighlight>, and <AboutHighlight>MySQL</AboutHighlight>.<br /><br />
        As a <AboutHighlight>React Native</AboutHighlight> mobile developer, I build cross-platform applications that deliver seamless user experiences. I'm also an aspiring <AboutHighlight>AI/ML Engineer</AboutHighlight>, actively exploring <AboutHighlight>Machine Learning</AboutHighlight>, <AboutHighlight>Natural Language Processing (NLP)</AboutHighlight>, <AboutHighlight>Generative AI</AboutHighlight>, and intelligent systems to solve complex problems.<br /><br />
        My technical expertise spans <AboutHighlight>Java</AboutHighlight>, <AboutHighlight>C++</AboutHighlight>, <AboutHighlight>Python</AboutHighlight>, and cloud technologies, enabling me to deliver robust and scalable solutions. Beyond development, I leverage Canva for graphic design and have basic proficiency in German (Level 1). I am passionate about collaborating in diverse teams, continuously learning emerging technologies, and contributing to impactful projects that drive innovation.
      </AboutContent>
    </AboutSection>
  );
}