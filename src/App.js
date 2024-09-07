
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';


const theme = createTheme({
  palette: {
    primary: {
      main: '#865313',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <Container>
      <HeroSection />

      </Container>
     <NavBar />
    </ThemeProvider>
  );
}

export default App;
