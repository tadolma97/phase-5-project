import Carousel from 'react-bootstrap/Carousel';
import Login from './Login';
import {useState} from "react"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import firstImage from '../firstImage.jpg'
import secondImage from '../secondImage.jpg'
import thirdImage from '../thirdImage.jpg'

function MainPage({setUser}){
  const [showLogin, setShowLogin]= useState(true)

    return (
        <>
        {showLogin ? 
          <>
          <Navbar bg="light" variant="light" className="nav-bar" fixed="top" style={{marginBottom: 0, paddingTop: 0, paddingBottom: 0, boxShadow: "2px 2px 1px rgba(46, 46, 46, 0.62)", height: 50}}>
            <Container>
            <Navbar.Brand >HEALTH PARTNER</Navbar.Brand>

            <Nav className=" navbar-collapse justify-content-end">
                <Button style={{borderRadius:50, border: 0, backgroundColor: 'rgb(0,193,162)', fontSize: 20}} onClick={()=>setShowLogin(false)} className="ml-auto p-2">Login</Button>
            </Nav>
            </Container>
        </Navbar>
        <Carousel fade controls={false} indicators={false} className='position-relative position-relative-example'>
          <Carousel.Item interval={2500} className='slideshowImage'>
            <img
              className="d-block w-100"
              src={firstImage}
              alt="First slide"
            />
            <Carousel.Caption className="translate-middle text-dark bg-light p-2 text-dark bg-opacity-50">
              <h1>Manage Your Medicines</h1>
              <h5>One place for all your medications</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500} className='slideshowImage'>
            <img
              className="d-block w-100"
              src={secondImage}
              alt="First slide"
            />
            <Carousel.Caption bsPrefix='carousel-caption' className=" top-60 start-30 translate-middle text-dark bg-light p-2 text-dark bg-opacity-50">
                <h1 className=" top-60 start-30">Keep your team updated</h1>
                <h5>Keep your mind and those of your loved ones at ease</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500} className='slideshowImage'>
            <img
              className="d-block w-100"
              src={thirdImage}
              alt="First slide"
            />
            <Carousel.Caption className=" translate-middle position-absolute top-60 start-30 text-dark bg-light p-2 text-dark bg-opacity-50">
                <h1>Enjoy every moment </h1>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          
        </Carousel> 
        </> : <Login setUser={setUser}></Login>}
        {/* <div className="position-absolute top-50 start-50">Hello, this goes in top right corner of screen over carousel</div> */}
        </>
      );
    }

export default MainPage