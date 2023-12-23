import React, { useState } from 'react';
import "./RateLawModal.css"; // Make sure to create or rename the corresponding CSS file

interface RateLawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rateLaw: { variable1: string, variable2: string, rate: string }) => void;
}

const RateLawModal: React.FC<RateLawModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [variable1, setVariable1] = useState<string>('');
  const [variable2, setVariable2] = useState<string>('');
  const [rate, setRate] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ variable1, variable2, rate });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='titleCloseBtn'>
            <button onClick={onClose}> X </button>
        </div>
        <h2 className='title'>Define Rate Law</h2>
        <textarea className='body'
          value={variable1}
          onChange={(e) => setVariable1(e.target.value)}
          placeholder="Variable 1"
        />
        <textarea className='body'
          value={variable2}
          onChange={(e) => setVariable2(e.target.value)}
          placeholder="Variable 2"
        />
        <textarea className='body'
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
        />
        <div className='footer'>
            <button onClick={onClose}> Cancel </button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
       
      </div>
    </div>
  );
};

export default RateLawModal;
