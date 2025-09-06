import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,26,27,0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
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
  }
`;

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
const CloseBtn = styled.button`
  position: absolute;
  top: 0.5rem;     /* move further up */
  right: -1rem;   /* move further right */
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10001;

  @media (max-width: 600px) {
    top: 0.3rem;     /* even closer to the top on small screens */
    right: 0.3rem;   /* even closer to the edge */
    font-size: 1.6rem; /* slightly smaller so it doesn’t feel cramped */
  }
`;



// const NavBtn = styled.button`
//   background: none;
//   border: none;
//   color: #14ffe9;
//   font-size: 2.2rem;
//   cursor: pointer;
//   margin: 0 1.5rem;
//   transition: color 0.2s;
//   &:hover { color: #7f5fff; }
// `;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border: none;
  color: #14ffe9;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.4rem 0.7rem;
  border-radius: 50%;
  z-index: 10000;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #7f5fff;
    background: rgba(0,0,0,0.6);
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    padding: 0.3rem 0.6rem;
  }
`;

const LeftBtn = styled(NavBtn)`
  left: 1rem;
`;

const RightBtn = styled(NavBtn)`
  right: 1rem;
`;



const Img = styled.img`
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

const Vid = styled.video`
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

export default function ImageSlider({ open, onClose, images, startIndex = 0 }) {
  const [idx, setIdx] = useState(startIndex);
  if (!open || !images || images.length === 0) return null;
  const prev = () => setIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx(i => (i === images.length - 1 ? 0 : i + 1));
  const isVideo = (file) => /\.(mp4|webm)$/i.test(file);
  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
        {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <NavBtn onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></NavBtn>
          {isVideo(images[idx]) ? (
            <Vid controls src={images[idx]} />
          ) : (
            <Img src={images[idx]} alt={`Project screenshot ${idx+1}`} />
          )}
          <NavBtn onClick={next}><FontAwesomeIcon icon={faChevronRight} /></NavBtn>
        </div> */}

<div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  {isVideo(images[idx]) ? (
    <Vid controls src={images[idx]} />
  ) : (
    <Img src={images[idx]} alt={`Project screenshot ${idx+1}`} />
  )}
  <LeftBtn onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></LeftBtn>
  <RightBtn onClick={next}><FontAwesomeIcon icon={faChevronRight} /></RightBtn>
</div>

        <div style={{color:'#bdbdbd',marginTop:'1rem',fontSize:'1rem'}}>Media {idx+1} of {images.length}</div>
      </Modal>
    </Overlay>
  );
}
