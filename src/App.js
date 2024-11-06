import './App.css';
import MainPage from './Pages/HomePage/MainPage.js';
import './Pages/HomePage/MainPage.css';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth={false} sx={{width:'80%', margin:'0, auto'}}>
            <MainPage/>
    </Container>
  );
}

export default App;
