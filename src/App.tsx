import React from 'react';
import RotatingCircle from './RotatingCircle';
import { Container } from './styles';

const App: React.FC = () => (
  <Container>
    <div>привет меня</div>
    <RotatingCircle buttonCount={6} />
  </Container>
);

export default App;
