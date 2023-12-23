import React, { useState } from 'react';
import "./RateLawModal.css"; // Make sure to create or rename the corresponding CSS file

interface RateLawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rateLaw: {ModelName: string, SpeciesConsumed: string, SpeciesCreated: string, rate: string }) => void;
}

const RateLawModal: React.FC<RateLawModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [ModelName, setModelName] = useState<string>('');
  const [SpeciesConsumed, setSpeciesConsumed] = useState<string>('');
  const [SpeciesCreated, setSpeciesCreated] = useState<string>('');
  const [rate, setRate] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ ModelName, SpeciesConsumed, SpeciesCreated, rate });
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
          value={ModelName}
          onChange={(e) => setModelName(e.target.value)}
          placeholder="Model Name"
        />
        <textarea className='body'
          value={SpeciesConsumed}
          onChange={(e) => setSpeciesConsumed(e.target.value)}
          placeholder="Species Consumed"
        />
        <textarea className='body'
          value={SpeciesCreated}
          onChange={(e) => setSpeciesCreated(e.target.value)}
          placeholder="consumed"
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
