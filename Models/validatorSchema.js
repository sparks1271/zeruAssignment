import mongoose from 'mongoose';

const validatorSchema = new mongoose.Schema({
  operatorAddress: String,
  totalDelegated: Number,
  slashHistory: [{
    timestamp: Date,
    amount: Number,
    reason: String
  }],
  status: String
});

const validatorModel= mongoose.model('Validator', validatorSchema);

export default validatorModel