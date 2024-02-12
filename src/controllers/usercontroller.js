const db = require('../../config/db');
const bcrypt = require('bcrypt');
const UserController = {
    getUsersById: async (req, res) => {
            try{
                const {id} = req.params
                const data = await db.connection.promise().query(
                  `SELECT *  from users_auth where id = ?`,[id]
                );
                res.status(200).json({
                  user: data[0][0],
                });
           } catch (error){
                console.error('Error de carga:',error);
                res.status(500).json({message:'Server Error'});
            }
    },
    deleteUsersById: async (req, res) => {
        try{
            const { id } = req.params;
            const update = await db.connection
              .promise()
              .query(
                `DELETE FROM  users_auth where id = ?`,
                [id]
              );
            res.status(200).json({
              message: "deleted",
            });
           } catch (error){
                console.error('Error de carga:',error);
                res.status(500).json({message:'Server Error'});
            }
    },
    updateUsersById: async (req, res) => {
        try{
            const { id } = req.params;
            const {username,email,password}=req.body;
            const hashedpassword = await bcrypt.hash(password,10);
            const update = await db.connection
            .promise()
            .query(
                `UPDATE users_auth set username = ?, email = ?, password = ? where id = ?`,
                [username,email,hashedpassword,id]
            );
            res.status(200).json({
            message: "updated",
            })
        } catch (error){
            console.error('Error de carga:',error);
            res.status(500).json({message:'Server Error'});
        }
    },
    updateUsersById: async (req, res) => {
        try{
            const { id } = req.params;
            const {username,email,password}=req.body;
            const hashedpassword = await bcrypt.hash(password,10);
            const update = await db.connection
            .promise()
            .query(
                `UPDATE users_auth set username = ?, email = ?, password = ? where id = ?`,
                [username,email,hashedpassword,id]
            );
            res.status(200).json({
            message: "updated",
            })
        } catch (error){
            console.error('Error de carga:',error);
            res.status(500).json({message:'Server Error'});
        }
    },
    insertUser: async (req, res) => {
        try{
            const {username,email,password}=req.body;
            const hashedpassword = await bcrypt.hash(password,10);
            const [rows, fields] = await db.execute(
                "INSERT INTO users_auth (username,email,password) VALUES (?,?,?)",
                [username,email,hashedpassword]
                );
            res.status(201).json({message:"User registered succesfully"});
        } catch (error){
            console.error('Error registering user:',error);
            res.status(500).json({message:'Server Error'});
        }
    }
  };

  module.exports = UserController;