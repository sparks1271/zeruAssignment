import mongoose from "mongoose";
import 'dotenv/config';
import restakerModel from "./Models/restakerSchema.js";
import validatorModel from "./Models/validatorSchema.js";
import rewardModel from "./Models/rewardSchema.js";

const eigenlayerData = async () => {
  await mongoose.connect(`${process.env.MONGODB_DB_URL}/zeruAssignment`, { family: 4 });

  await restakerModel.deleteMany();
  await validatorModel.deleteMany();
  await rewardModel.deleteMany();

  await restakerModel.insertMany([
    { userAddress: '0xUser1', amountRestaked: 120, validatorAddress: '0xValidator1' },
    { userAddress: '0xUser2', amountRestaked: 300, validatorAddress: '0xValidator2' },
    { userAddress: '0xUser3', amountRestaked: 250, validatorAddress: '0xValidator1' }
  ]);

  await validatorModel.insertMany([
    {
      operatorAddress: '0xValidator1',
      totalDelegated: 370,
      slashHistory: [{ timestamp: new Date(), amount: 5, reason: 'Downtime' }],
      status: 'active'
    },
    {
      operatorAddress: '0xValidator2',
      totalDelegated: 300,
      slashHistory: [{ timestamp: new Date(), amount: 10, reason: 'Misbehavior' }],
      status: 'jailed'
    }
  ]);

  await rewardModel.insertMany([
    {
      userAddress: '0xUser1',
      totalRewards: 15,
      perValidatorRewards: [{ validatorAddress: '0xValidator1', amount: 15, timestamp: new Date() }]
    },
    {
      userAddress: '0xUser2',
      totalRewards: 20,
      perValidatorRewards: [{ validatorAddress: '0xValidator2', amount: 20, timestamp: new Date() }]
    },
    {
      userAddress: '0xUser3',
      totalRewards: 12,
      perValidatorRewards: [{ validatorAddress: '0xValidator1', amount: 12, timestamp: new Date() }]
    }
  ]);

  console.log('Sample data inserted!');
  mongoose.connection.close();
};

eigenlayerData();
