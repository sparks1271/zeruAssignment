import mongoose from 'mongoose';

const rewardSchema = new mongoose.Schema({
  userAddress: String,
  totalRewards: Number,
  perValidatorRewards: [{
    validatorAddress: String,
    amount: Number,
    timestamp: Date
  }]
});

const rewardModel= mongoose.model('Reward', rewardSchema);
export default rewardModel