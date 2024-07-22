import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age : {
        type: String,
    }
});

// module.exports = mongoose.model('Company', companySchema);

export default mongoose.model('Company', companySchema);