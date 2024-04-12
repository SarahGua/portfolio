import { Container } from 'react-bootstrap';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import FooterComponent from './Components/FooterComponent';
import ProjectComponents from './Components/ProjectComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsComponent from './Components/ContactsComponent';

function App() {
  return (
    <BrowserRouter>
      <Container className='d-flex flex-column justify-content-between h-100'>
        <NavBar />
          <Routes>
              <Route path='/' element={<HomeComponent />} />
              <Route path='/projects' element={<ProjectComponents />} />
              <Route path='/contacts' element={<ContactsComponent />} />
          </Routes>
        <FooterComponent />
      </Container>
    </BrowserRouter>
  );
}

export default App;
