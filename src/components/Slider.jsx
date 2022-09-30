import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile} {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(p) => p.direct === 'left' && '10px'};
  right: ${(p) => p.direct === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(p) => p.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(p) => p.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${tablet} {
    flex: 0;
  }
`;
const Image = styled.img`
  height: 80%;
  object-fit: cover;
  width: 100%;
  ${tablet} {
    display: none;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const sliderItems = [
  {
    id: 1,
    title: 'Instalación Albercas',
    img: 'https://i.pinimg.com/originals/ff/51/64/ff5164c8eda18c9beea4079b09694934.jpg',
    desc: 'Tenemos los paquetes de instalación hechos para ti.',
    bg: 'f5fafd',
    cat: 'installation-package',
  },
  {
    id: 2,
    title: 'Servicio de mantenimiento',
    img: 'https://5.imimg.com/data5/SELLER/Default/2021/2/BJ/IH/AG/33886061/swimming-pool-maintenance-service.jpeg',
    desc: 'Ofrecemos servicio de mantenimiento en todo CDMX.',
    bg: 'fcf1ed',
    cat: 'maintenance',
  },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const rightLimit = 1;
  const leftLimit = 0;
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : rightLimit);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : leftLimit);
    }
  };
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate('/services', { state: path });
  };

  return (
    <Container>
      <Arrow direct="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={() => routeChange(item.cat)}>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direct="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
