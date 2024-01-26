import Carousel from 'react-bootstrap/Carousel';
import slider1 from  "../assets/images/slider_1.jpg";
import slider2 from  "../assets/images/slider_2.jpg";
import slider3 from  "../assets/images/slider_3.jpg";
import Image from 'react-bootstrap/Image';
import Cards from '../assets/cards';
import Button from 'react-bootstrap/Button';





function Home() {
  return (
    // <>
    //   <svg
    //     class="bg-primary "
    //     viewBox="0 0 5950 394"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       fill-rule="evenodd"
    //       clip-rule="evenodd"
    //       d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z"
    //       fill="#024"
    //     ></path>
    //   </svg>
    //   <div class="my-5 py-5 text-center ">home</div>
    // </>

    <>
      <Carousel style={{height: '500px', overflow: 'hidden', marginBottom:'3rem'}} fade >
        <Carousel.Item interval={4000}>
          <Image
          className=''
                fluid
                src={slider1}
                alt="me"
            />
            <Carousel.Caption  style={{top:'30px',}}>
              <h3>Welcome to Our Mechanic shop</h3>
              <p>We offer only the best services</p>
              <Button href="/about">Learn more</Button>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={4000}>
          <Image
                fluid
                src={slider2} 
                alt="me"
            />

            <Carousel.Caption style={{top:'30px', color:'black'}}>
              <h3>Welcome to Our Mechanic shop</h3>
              <p>We offer only the best services</p>
              <Button href="/about">Learn more</Button>
              
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <Image
                
                fluid
                src={slider3}
                alt="me"
            />
            <Carousel.Caption style={{top:'30px', color:'black'}}>
              <h3>Welcome to Our Mechanic shop</h3>
              <p>We offer only the best services</p>
              <Button href="/about">Learn more</Button>
            </Carousel.Caption>
          
        </Carousel.Item>

      </Carousel>
      <h2 style={{textAlign:'center'}}>Our Services</h2>
      <Cards />
    </>   
  );
}
export default function HomeComponent() {
  return (
    <>
      <Home />
    </>
  );
}
