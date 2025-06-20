import validatorModel from "../Models/validatorSchema.js";

const getValidators = async (req, res) => {
  try {
    const validators = await validatorModel.find();
    res.json({status:200,success:true,message:validators});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};

export default getValidators