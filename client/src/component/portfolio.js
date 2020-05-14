/* eslint-disable */ 

import React , {Component} from 'react';

import WOW from 'wow.js';
import Product1 from '../images/p1.jpg'
import Product2 from '../images/p2.jpg'
import Product3 from '../images/p3.jpg'
import Product4 from '../images/p4.jpg'
import Product5 from '../images/p5.jpg'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import '../App.css';
import './portfolio.css';

export class Portfolio extends Component {
    componentDidMount ( ){
        const wow = new WOW();
        wow.init();
    }
    state = {
       
        optionses: {            
            margin: 10,            
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        },
    }
    
    render () {
        return (
            <div className="container-fluid" id="portfolio">
                <div className="portfolio-title">
                    <h3>PORTFOLIO</h3>                        
                </div>
                <div className='container-fluid'  id="port">          

                    <OwlCarousel items={3}  
                        className="owl-theme wow slideInLeft" data-wow-duration="3s"  
                        id="owl-theme"
                        {...this.state.optionses}
                        autoplay={true}
                        loop
                    > 
                        <div><img  className="img-1" src= {Product3}/></div>       
                        <div><img  className="img-1" src= {Product4}/></div>       
                        <div><img  className="img-1" src= {Product3}/></div>                       
                        <div><img  className="img-1" src= {Product4}/></div>       
                        <div><img  className="img-1" src= {Product5}/></div>       
                        
                    </OwlCarousel>
                </div>  
            </div>
        )
    }
}