import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

const PdfFrame = styled.iframe`
  width: 60vw;
  height: 70vh;
  border: none;
  background: #111;
  border-radius: 10px;
  overflow-y: scroll;
`;

export default function PdfPreviewModal({ open, onClose, pdfUrl }) {
  if (!open) return null;
  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
        <PdfFrame src={pdfUrl + '#toolbar=0&navpanes=0&scrollbar=1'} title="PDF Preview" />
        <div style={{color:'#bdbdbd',marginTop:'1rem',fontSize:'1rem'}}>Limited preview only. For full access, contact: <a href="mailto:radia_riaz@outlook.com" style={{color:'#14ffe9'}}>radia_riaz@outlook.com</a></div>
      </Modal>
    </Overlay>
  );
}
