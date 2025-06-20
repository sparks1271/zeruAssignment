import express from "express";
import restakerData from "../controller/restakecontroller.js";
import getValidators from "../controller/validatorController.js";
import getRewardsByAddress from "../controller/rewardController.js";

const router = express.Router();

router.get("/restakers", restakerData);
router.get("/validators", getValidators);
router.get("/rewards/:address", getRewardsByAddress);

export default router;
