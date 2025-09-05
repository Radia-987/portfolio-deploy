import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,26,27,0.96);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: linear-gradient(135deg, #232526 70%, #181a1b 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px #14ffe944;
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  max-width: 600px;
  width: 95vw;
  color: #e6e6f0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  font-size: 1.08rem;
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

export default function ProjectDetailsModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose} title="Close"><FontAwesomeIcon icon={faTimes} /></CloseBtn>
        <div style={{width:'100%',padding:'0.5rem 0'}}>
          <div style={{color:'#14ffe9',fontWeight:600,fontSize:'1.18rem',marginBottom:'1.1rem'}}>Project Details</div>
          <div style={{lineHeight:'1.7',color:'#e6e6f0'}}>{children}</div>
        </div>
      </Modal>
    </Overlay>
  );
}
