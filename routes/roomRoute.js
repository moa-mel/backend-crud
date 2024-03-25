const express = require('express')
const router = express.Router()
const {getRooms, getRoom, updateRoom, createRoom, deleteRoom} = require('../controllers/roomController')
const Room = require('../model/room')

//get all rooms
router.get('/', getRooms) 
//get a room
router.get('/:id', getRoom)
//create room
router.post('/', createRoom)
//update room
router.put('/:id', updateRoom)
//delete room
router.delete('/:id', deleteRoom)

module.exports = router;