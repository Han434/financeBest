import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
    },
    companyDescription : {
        type: String,
    },
    companyType : {
        type: String,
    }
});

// module.exports = mongoose.model('Company', companySchema);

export default mongoose.model('Company', companySchema);