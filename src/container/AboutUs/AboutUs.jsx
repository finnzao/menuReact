import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nós</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Bem-vindo ao nosso restaurante! Estamos animados por tê-lo aqui e esperamos tornar sua experiência gastronômica inesquecível. Em nosso estabelecimento, buscamos fornecer a melhor qualidade de comida e serviço possível..</p>
        <button type="button" className="custom__button">Ler mais</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <div className='.app__aboutus-content_division '></div>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nossa historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Há 10 anos entregando a sensação de provar uma otima comida ao redor do Brasil. Indicado multipla vezes para premeios de melhor atendimento ,e uma comida que irá fazer você voltar mais do que uma vez...</p>
        <button type="button" className="custom__button">Ler mais</button>
      </div>
    </div>
  </div>
);

export default AboutUs;