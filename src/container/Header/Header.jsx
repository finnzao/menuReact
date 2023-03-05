import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">

      <SubHeading tittle={""} />

      <h1 className='app__header-h1'> Muito além de um restaurante.Somos uma experiencia. </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Há 10 anos entregando a melhor experiência gastronomica para você</p>
      <button type="button" className="custom__button">Explorar Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
