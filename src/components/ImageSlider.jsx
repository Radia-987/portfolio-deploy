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

const NavBtn = styled.button`
  background: none;
  border: none;
  color: #14ffe9;
  font-size: 2.2rem;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: color 0.2s;
  &:hover { color: #7f5fff; }
`;


const Img = styled.img`
  max-width: 60vw;
  max-height: 65vh;
  border-radius: 10px;
  background: #111;
  box-shadow: 0 2px 16px #14ffe922;
`;

const Vid = styled.video`
  max-width: 60vw;
  max-height: 65vh;
  border-radius: 10px;
  background: #111;
  box-shadow: 0 2px 16px #14ffe922;
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
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <NavBtn onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></NavBtn>
          {isVideo(images[idx]) ? (
            <Vid controls src={images[idx]} />
          ) : (
            <Img src={images[idx]} alt={`Project screenshot ${idx+1}`} />
          )}
          <NavBtn onClick={next}><FontAwesomeIcon icon={faChevronRight} /></NavBtn>
        </div>
        <div style={{color:'#bdbdbd',marginTop:'1rem',fontSize:'1rem'}}>Media {idx+1} of {images.length}</div>
      </Modal>
    </Overlay>
  );
}
