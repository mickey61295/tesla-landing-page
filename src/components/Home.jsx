import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
      <Container>
        <Section title="Model 3" background="model-3.jpg" />
        <Section title="Model Y" background="model-y.jpg" />
        <Section title="Model X" background="model-x.jpg" />
        <Section title="Model S" background="model-s.jpg" />
        <Section
          title="Low Cost Solar Roofs"
          description="Best in America"
          background="solar-roof.jpg"
        />
        <Section
          title="Best Quality Solar Panels"
          description="Money-back Guarantee"
          background="solar-panel.jpg"
        />
        <Section
          title="Accessories"
          description=""
          background="accessories.jpg"
          rightBtn
        />
      </Container>
    );
}

export default Home

const Container = styled.div`
  height: 100vh;

`;