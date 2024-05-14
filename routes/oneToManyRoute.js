import { Router } from "express";
import { createAuthorWithBooks,getAuthorWithBooks } from "../controller/RelationShip/oneToManyController.js";
const router=Router();

router.post('/oneMany',createAuthorWithBooks );

export default router;