
import React from'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from'pure-react-carousel';
import'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'

const Carousel = () => {
  return ( 
    <div className='content'>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={3}
      >
      <Slider>
        <Slide index={0}>
          <div className='testimony'>
          
          <div className='image'>
            <img src={'https://res.cloudinary.com/dxrxekidt/image/upload/v1681934358/samples/people/boy-snow-hoodie.jpg'} alt='image' width={200} height={200}/>
          <div/>
          </div>
          <div>
            <h1>Ask Our Clients</h1>
            <p>The creative studio is a full-service creative agency<br/> specializing in custom web design, web development.<br/> Having worked with almost every technology language<br/>(.Net,PHP, Laravel Angular 1.0,2.0, e.t.c...), we start with your<br/> business goals and then provide the right scalable solution. <br/>
            </p>
            <h5>Dani Yourk</h5>
          </div>
          </div>
        
      </Slide>

        <Slide index={1}>
          <div className='testimony'>
          <div className='image'>
            <img src={'https://res.cloudinary.com/dxrxekidt/image/upload/v1688200055/download_2_es05ws.jpg'} alt='image' width={200}/>
          <div/>
          </div>
          <div>
            <h1>Ask Our Clients</h1>
            <p>The creative studio is a full-service creative agency<br/> specializing in custom web design, web development.<br/> Having worked with almost every technology language<br/>(.Net,PHP, Laravel Angular 1.0,2.0, e.t.c...), we start with your<br/> business goals and then provide the right scalable solution. <br/>
            </p>
            <h5>Janet Hope</h5>
          </div>
          
          </div>
        </Slide>

        <Slide index={2}>
          <div className='testimony'>
          <div className='image'>
            <img src={'https://res.cloudinary.com/dxrxekidt/image/upload/v1688200132/protection-masks-1_ixzdju.jpg'} alt='image' width={200}/>
          <div/>
          </div>
          <div>
            <h1>Ask Our Clients</h1>
            <p>The creative studio is a full-service creative agency<br/> specializing in custom web design, web development.<br/> Having worked with almost every technology language<br/>(.Net,PHP, Laravel Angular 1.0,2.0, e.t.c...), we start with your<br/> business goals and then provide the right scalable solution. <br/>
            </p>
            <h5>Dani Yourk</h5>
          </div>
          
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
    </div>
  );
};

export default Carousel;

