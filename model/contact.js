var mongoose = require('mongoose')

var schema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
        
    },
    number : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true,        
    },
    website: {
        type: String,
        required: true,          
    },
    websiteOne: {
        type: String,
               
    },
    websiteTwo: {
        type: String,
                 
    },
    websiteThree: {
        type: String,
                 
    },
    domain: {
        type: String,
        required: true,          
    },
    domainOne: {
        type: String,
               
    },
    domainTwo: {
        type: String,
                 
    },
    domainThree: {
        type: String,
                 
    },
    objective : {
        type: String,
    },    
    date: {
        type: Date,
        default: Date.now
    }
});

var Contact = mongoose.model('Contact', schema);

module.exports = Contact;