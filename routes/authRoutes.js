const { Router} = require('express');
const authController=require('../controllers/authController');
const { requireAuth, Admin } = require('../middleware/authMiddleware');

const router =Router();

router.get('/signUp',authController.signUp_get);
router.post('/signUp',authController.signUp_post);
router.get('/signIn',authController.signIn_get);
router.post('/signIn',authController.signIn_post);
router.get('/logout',authController.logout_get);


/////
router.get('/Terms',authController.Terms_get);
router.get('/main',authController.main_get);
router.get('/wishlist',authController.wishlist_get);


router.get('/admin',authController.admin_get);


module.exports=router;