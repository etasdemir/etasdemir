import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import AboutSection from '../../components/AboutSection';
import AboutDescription from '../../components/AboutDescription';
import Navigation from '../../nav/Navigation';
import { ABOUT } from '../../shared/Constants';
import { AboutElement } from '../../shared/Types';

function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('about', aboutRef);
  }, []);

  const getAlignment = (index: number): string => {
    let textAlign = 'flex-start';
    if (index % 2 === 1) {
      textAlign = 'flex-end';
    }
    return textAlign;
  };

  return (
    <Container ref={aboutRef}>
      <Title>About</Title>
      {ABOUT.map((item: AboutElement, index) => {
        return (
          <AboutSection
            key={item.title + index}
            title={item.title}
            subtitle={item.subtitle}
            description={<AboutDescription item={item} index={index} />}
            alignment={getAlignment(index)} />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 4vw;
  text-align: end;
`;

export default About;  