const db = require('../../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/**
 * @swagger
 *    components: authcontroller
 *      schemas:users_auth
 *        user:
 *          type: varchar
 *          required:
 *            -title : auth login
 *            -author
 *            -finished
 *          properties:
 *            username:
 *              type: varchar(50)
 *              description: username auth.
 *            password:
 *              type: varchar(100)
 *              description: password auth.
 */

const UserAuthController = {
    loginUser: async (req, res) => {
        try{
            const {email,password}=req.body;
            
            const [rows,fields]=await db.execute("SELECT * FROM users_auth where email= ?",[email]);
            
            console.log('rows',rows);
            if(rows.lenght===0){
                
                return res.status(400).json({message:"Invalid credentials"});
            }
            const user = rows[0];
            const isPasswordMath = await bcrypt.compare(password,user.password);
            if(!isPasswordMath){
               
                return res.status(400).json({messag:"Invalid Credentials"});
            } 
            const token = jwt.sign({userId:user.id},"6764jkgkkgjk995959jkkjg446",{expiresIn:"1h"});
            console.log(`token`+token);
            res.json({
                "Token": token
            });
            //res.json[{ token }];
        }catch(error){
            console.error("Error logging in:", error);
            res.status(500).json({message:"Server Error"});
        }
    },
    loginUserInfo: async (req, res) => {
        try{
            const userId=req.user.userId;
            console.log(userId);
            const [rows,fields]= await db.execute("SELECT * FROM users_auth WHERE id = ?",[userId]);
            if(rows.lenght===0){
                return res.status(404).json({message:"user not found"});
            }
            res.json({user:rows[0]});
        } catch(error){
            console.error("Error fetching user info", error);
            res.status(500).json({message: "Server Error"});
        }
    }
    
}

module.exports = UserAuthController;