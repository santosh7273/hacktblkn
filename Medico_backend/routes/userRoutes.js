import express from 'express';
import { followUnfollow, loginUser, logOut, myProfile, registerUser, userProfile } from '../controllers/userControllers.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/logout", isAuth, logOut)
router.get("/me", isAuth, myProfile)


export default router;