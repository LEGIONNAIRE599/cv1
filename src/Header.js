import React from 'react';
import './Header.css'; // Crée un fichier Header.css


function Header() {
  return (
    <header className="header">
      <img src="./cvvv.jpg" alt="Mon Nom" className="profile-photo" />
      <div className="header-info">
        <h1>KAMGANG SUFFO VAIC HURIEL</h1>
        <p>+237 691705057 | <a href="mailto:vaicvaic599@gmail.com">vaicvaic599@gmail.com</a></p>
        <p>LinkedIn: [Etudiant en Licence II en ICT For D]</p>
      </div>
    </header>
  );
}

export default Header;