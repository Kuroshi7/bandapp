import React from 'react';
import './Container.css'; // Importa o arquivo de estilos

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;