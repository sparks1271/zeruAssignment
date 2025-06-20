import rewardModel from "../Models/rewardSchema.js";

 const getRewardsByAddress = async (req, res) => {
  const { address } = req.params;
  try {
    const rewards = await rewardModel.findOne({ userAddress: address });
    if (!rewards) return res.status(404).json({ message: 'No rewards found for this address' });
    res.json({status:200,success:true,message:rewards});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
};

export default getRewardsByAddress