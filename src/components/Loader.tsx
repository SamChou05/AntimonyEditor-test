import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
}

const loaderStyle: React.CSSProperties = {
  display: 'flex'
};

const CustomLoader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div style={loaderStyle}>
      <ClipLoader size={10} color={'#09a7f0'} loading={loading} />
    </div>
  );
};

export default CustomLoader;
