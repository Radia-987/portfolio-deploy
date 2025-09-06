import styled from 'styled-components';

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

const CloseBtn = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  background: none;
  border: none;
  color: #14ffe9;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10001;

  @media (max-width: 600px) {
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }
`;

const PdfFrame = styled.iframe`
  width: 60vw;
  height: 70vh;
  border: none;
  background: #111;
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 85vw;
    height: 50vh;
  }
  @media (max-width: 600px) {
    width: 98vw;
    height: 40vh;
  }
`;

export default function PdfSlider({ open, onClose, pdfUrl }) {
  if (!open) return null;
  return (
    <Overlay>
      <CloseBtn onClick={onClose} title="Close">×</CloseBtn>
      <Modal>
        <PdfFrame src={pdfUrl} title="Demo PDF" />
      </Modal>
    </Overlay>
  );
}