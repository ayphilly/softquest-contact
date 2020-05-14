import React, {Component} from 'react';
import build from '../svg/hello.svg';
import './contact.css'
import history from '../history'
import {Footer} from '../component/footer'
import {Portfolio} from '../component/portfolio'

export class Contact extends Component {

    state = { 
              
        firstname: '',
        lastname : '',
        email: '',
        number : '',
        objective : '',
        website:'choose an option',
        domain: 'choose an option',
        domainOne: '',
        domainTwo: '',
        domainThree: '',
        websiteOne: '',
        websiteTwo: '',
        websiteThree: '',
        
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.firstname ==="" ||this.state.lastname===""||this.state.email===""||this.state.number==="" ||this.state.website==="" ||this.state.domain==="") {
            alert("form fields can't be empty");
            return;
        }

        //const data = new FormData(event.target);       
        fetch('http://localhost:8082/api/contact', {
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'            
          },
          body: JSON.stringify(this.state),
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })     
        

        history.push('thankyou')
    }

    handleChange =(event)=> {
        const value = event.target.name;
        this.setState({[value]: event.target.value});
    }

    handleSelect1 =(event)=> {
        this.setState({domain: event.target.value});
    }
    handleSelect2 =(event)=> {
        this.setState({website: event.target.value});
    }

    submitt = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    


    
    render () {
        
        return (
            <div  id="contact">
                <div className="contact-form-div">
                    
                    <div className="contact-svg">
                        <img src={build} className="contact-svg-im" alt="Brand"/>
                    </div>  

                    <div className= "contact-form">
                        <form onSubmit={this.handleSubmit} >
                            <h3>
                                Welcome, Softquest <br/> Systems LTD
                            </h3>
                            <div className="names">
                                <div className="first-name">
                                    <label >FIRST NAME</label>
                                    <input type="text" value={this.state.firstname} onChange={this.handleChange} className="firstname" id="firstname" name="firstname" placeholder="First Name"></input>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="lastname">LAST NAME</label>
                                    <input type="text" value={this.state.lastname} onChange={this.handleChange} className="lastname" name="lastname" id="lastname" placeholder="Last Name"></input>
                                </div>
                                
                            </div>
                            <div className="names">
                                <div className="mail">
                                    <label htmlFor="email">E-MAIL</label>
                                    <input type="text" value={this.state.email} onChange={this.handleChange} className="email" name="email" placeholder="email"></input>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="lastname">NUMBER</label>
                                    <input type="text" value={this.state.number} onChange={this.handleChange} className="number" name="number" placeholder="+234"></input>
                                </div>                                
                            </div>
                            <div className="select">
                                <div className="select-one">
                                <label>
                                    TYPE OF WEBSITE
                                    <select value={this.state.website} onChange={this.handleSelect2}>
                                        <option selected value="choose an option">choose an option</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="website">Website</option> 
                                        <option value="landing page">landing page</option>
                                        <option value="others">others</option>                                        
                                    </select>
                                </label>
                                </div>
                                <div className="select-two">
                                <label>
                                    DOMAIN NAME ?
                                    <select value={this.state.domain} onChange={this.handleSelect1}>
                                        <option value="choose an option">choose an option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>                                        
                                    </select>
                                </label>
                                </div>                                
                            </div>
                           { this.state.domain === 'yes' && <div className="options">
                                <div className="option-1">
                                    <label htmlFor="option-one">option1</label>
                                    <input type="text" value={this.state.domainOne} onChange={this.handleChange} className="domainOne" name="domainOne" id="option-one" placeholder="domain-one" ></input>
                                </div>
                                <div className="option-2">
                                    <label htmlFor="option-two">Option2</label>
                                    <input type="text" value={this.state.domainTwo} onChange={this.handleChange} className="domainTwo" name="domainTwo" id="option-two" placeholder="domain-two" ></input>
                                </div> 
                                <div className="option-3">
                                    <label htmlFor="option-three">Option3</label>
                                    <input type="text" value={this.state.domainThree} onChange={this.handleChange} className="domainThree" name="domainThree" id="option-three" placeholder="domain-three"></input>
                                </div>        
                            </div>}

                            <div className="options">
                                <div className="web-1">
                                    <label htmlFor="website-one">website-one</label>
                                    <input type="text" value={this.state.websiteOne} onChange={this.handleChange} className="websiteOne" name="websiteOne" placeholder="website-one"></input>
                                </div>
                                <div className="web-2">
                                    <label htmlFor="website-two">website-two</label>
                                    <input type="text" value={this.state.websiteTwo} onChange={this.handleChange} className="websiteTwo" name="websiteTwo" placeholder="website-two"></input>
                                </div> 
                                <div className="web-3">
                                    <label htmlFor="website-three">website-three</label>
                                    <input type="text" value={this.state.websiteThree} onChange={this.handleChange} className="websiteThree" name="websiteThree" placeholder="website-three"></input>
                                </div>        
                            </div>
                            <div className="textarea-input">
                                <div className="big-text">
                                    <label htmlFor="need">SERVICE</label>
                                    <textarea type="text" value={this.state.objective} onChange={this.handleChange} className="objective" name="objective" placeholder="Type Something" cols="30" rows="3"></textarea>
                                </div>                                    
                                    
                            </div> 
                            {this.state.error && <p className="error">{this.state.error}</p>}   
                            <input type="submit" className="button-submit" value="SUBMIT"/>                      
                        </form>
                        
                    </div> 
                            
                </div>
                <Portfolio/>                    
                <Footer/>
            </div>
           
        )
    }
}