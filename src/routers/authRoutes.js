const express = require('express');
const router =express.Router();
const UserAuthController = require('../controllers/authcontroller');
const HealthController = require('../controllers/healthcontroller');

const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const token=req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"access Denied"});
    }
    try {
        const decoded = jwt.verify(
            token.split(" ")[1],
            "6764jkgkkgjk995959jkkjg446"
        );
        req.user=decoded;
        next();
    }catch(error){
        console.error("Error verifying token",error);
        res.status(401).json({message:"Invalid Token"});
    }
}
/** POST Methods */
    /**
     * @openapi
     * '/login':
     *  put:
     *     tags:
     *     - User Controller
     *     summary: auth user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: varchar
     *            required:
     *              - username
     *            properties:
     *              username:
     *                type: VARCHAR
     *                default: ''
     *              email:
     *                type: VARCHAR
     *                default: ''
     *     responses:
     *      200:
     *        description: EXITOSO
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

router.post('/login', UserAuthController.loginUser);
router.get('/userinfo',verifyToken, UserAuthController.loginUserInfo);
router.get('/healthroute', HealthController.testroute);
module.exports=router;
