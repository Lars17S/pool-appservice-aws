import React, { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { mobile, tablet } from '../responsive';
import { listSliderItems } from '../graphql/queries';

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

function Slider() {
  const [sliderItems, setSliderItems] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const rightLimit = sliderItems.length - 1;
  const leftLimit = 0;

  async function fetchSliderItems() {
    const apiData = await API.graphql({ query: listSliderItems });
    const sliderItemsFromAPI = apiData.data.listSliderItems.items;
    setSliderItems(sliderItemsFromAPI);
  }

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : rightLimit);
    } else {
      setSlideIndex(slideIndex < rightLimit ? slideIndex + 1 : leftLimit);
    }
  };

  useEffect(() => {
    fetchSliderItems();
  }, []);

  return (
    <Container>
      <Arrow direct="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
              <Link to={item.url}>
                <Button>Saber más</Button>
              </Link>
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
