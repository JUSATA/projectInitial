const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../../config/db');

const router =express.Router();

const UserController = require('../controllers/usercontroller');

router.get('/user/:id', UserController.getUsersById);
router.get('/deleteuser/:id', UserController.deleteUsersById);


/** POST Methods */
    /**
     * @openapi
     * '/api/user/update':
     *  put:
     *     tags:
     *     - User Controller
     *     summary: Modify a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - userId
     *            properties:
     *              userId:
     *                type: string
     *                default: ''
     *              firstName:
     *                type: string
     *                default: ''
     *              lastName:
     *                type: string
     *                default: ''
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post('/updateuser/:id', UserController.updateUsersById);


router.post('/insertuser', UserController.insertUser);

module.exports=router;


