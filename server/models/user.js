import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailAddress: {
        type: String,
    },
    password: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    }
});

// module.exports = mongoose.model('Company', companySchema);

export default mongoose.model('User', userSchema);