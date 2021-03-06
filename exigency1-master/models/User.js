const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    usertype: {
        type: String,
        required: true
    },
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        default: Date.now
    },
    phoneno: {
        type: Number,
        required: true
    },
    vno: {
        type: String,
        default: 'NA',
        required: true
    },
    macno: {
        type: String,
        default: 'NA',
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    add1: {
        type: String,
        required: true
    },
    add2: {
        type: String
    },
    state: {
        type: String,
        required: true
    },
    ecfn1: {
        type: String,
        required: true
    },
    ecln1: {
        type: String,
        required: true
    },
    ecpn1: {
        type: Number,
        required: true
    },
    ecfn2: {
        type: String,
        required: true
    },
    ecln2: {
        type: String,
        required: true
    },
    ecpn2: {
        type: Number,
        required: true
    },
    ecfn3: {
        type: String,
        required: true
    },
    ecln3: {
        type: String,
        required: true
    },
    ecpn3: {
        type: Number,
        required: true
    },
    authNo: {
        type: Number,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;