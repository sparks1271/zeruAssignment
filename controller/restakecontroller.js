import restakerModel from "../Models/restakerSchema.js";

const restakerData = async (req, res) => {
    try {
        const restakers = await restakerModel.find();
        console.log("Restakers data:", restakers);  
        if (restakers.length === 0) {
            return res.status(404).json({success:false, error: 'No restakers found' });  
        }
        res.json({status:200,success:true,message:restakers});
    } catch (error) {
        console.error("Error fetching restakers:", error);  
        res.status(500).json({ error: 'Failed to fetch restakers' });
    }
}

export default restakerData