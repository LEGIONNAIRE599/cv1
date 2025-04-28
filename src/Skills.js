import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills-category">
        <h3>Techniques</h3>
        <p>
          <strong>Compétence 1:</strong> Développeur web et application Mobile. Je
          manipule de nombreux Framework à savoir: -JDK (Langage JAVA) -DOTNET CORE
          (Langage Csharp) -NODE JS(JavaScript) -DARK (Langage FLUTTER)
          -DJANGO(Langage Python) -GCC (Langage C) -GPP (Langage Cpp) 
        </p>
        <p>
          Je manipule également des bases de données tel que: -MySqlYog
          -PHPMYADMIN 
        </p>
        <p><strong>Compétence 2:</strong> Maintenance informatique </p>
        <p><strong>Compétence 3:</strong> Manager les membres d’une équipe </p>
      </div>
      <div className="skills-category">
        <h3>Informatique</h3>
        <p>
          J’ai une connaissance théorique et pratique sur tous les logiciels
          informatiques.
        </p>
      </div>
      <div className="skills-category">
        <h3>Langues</h3>
        <p>Français : Excellent </p>
        <p>Anglais : Moyen </p>
      </div>
    </section>
  );
}

export default Skills;