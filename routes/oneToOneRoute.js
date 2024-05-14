import { Router } from "express";
import { createIndividualWithPassport,getIndividualWithPassport } from "../controller/RelationShip/oneToOneController.js";
const router=Router();

router.post('/one',createIndividualWithPassport );

export default router;
