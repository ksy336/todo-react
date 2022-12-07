import React from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper block-header">
        <Link to="/boards" className="link">
          <div className="boards-item">Выбор проекта</div>
        </Link>
        <Link to="/columns" className="link">
          <div className="columns-item">Задачи</div>
        </Link>
        <div className="text-logo">TODO-приложение</div>
      </div>
    </header>
  );
};

export default Header;
