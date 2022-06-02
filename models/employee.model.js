const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    fullName: {type: String },
    email: {type: String },
    mobile: {type: Number },
    city: {type: String },
});

mongoose.model('employee', employeeSchema);