import React from 'react';
import photoContent from '../contents/mundoydibujos.jpg';

export const App: React.FC = () => {


  return (
    <>
      <h1>Hola Mundo!</h1>
      <img className='rounded' src={photoContent} alt="map" />
    </>   
  );
}
