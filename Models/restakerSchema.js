import mongoose from 'mongoose';

const restakerSchema = new mongoose.Schema({
  userAddress: String,
  amountRestaked: Number,
  validatorAddress: String
});

const restakerModel= mongoose.model('Restaker', restakerSchema);

export default restakerModel