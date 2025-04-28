import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="education">
      <h2>Formation Académique</h2>
      <div className="education-item">
        <h3>Étudiant en Licence 2</h3>
        <p><strong>Nom de l’établissement:</strong> UNIVERSITE DE YAOUNDE 1</p>
        <p><strong>Année d’obtention:</strong> 2024 - 2025</p>
      </div>
      <div className="education-item">
        <h3>Licence 1</h3>
        <p><strong>Nom de l’établissement:</strong> UNIVERSITE DE YAOUNDE 1</p>
        <p><strong>Année d’obtention:</strong> 2024</p>
      </div>
       <div className="education-item">
        <h3>BACCALAUREAT D</h3>
        <p><strong>Nom de l’établissement:</strong> Lycée bilingue de yaounde</p>
        <p><strong>Année d’obtention:</strong> 2023</p>
      </div>
       <div className="education-item">
        <h3>Probatoire D</h3>
        <p><strong>Nom de l’établissement:</strong> Lycée bilingue de yaounde</p>
        <p><strong>Année d’obtention:</strong> 2022 </p>
      </div>
        <div className="education-item">
        <h3>BEPC</h3>
        <p><strong>Nom de l’établissement:</strong> Lycée bilingue de yaounde</p>
        <p><strong>Année d’obtention:</strong> 2018 </p>
      </div>
    </section>
  );
}

export default Education;