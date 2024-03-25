const Room = require('../model/room')
const asyncHandler = require('express-async-handler')

//get all rooms
const getRooms = asyncHandler(async(req, res) =>{
    try{
        const rooms = await Room.find({});
        res.status(200).json(rooms)
    } catch(error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//get a room
const getRoom =  asyncHandler(async(req, res) =>{
    try{
        const {id} = req.params;
        const room = await Room.findById(id);
        res.status(200).json(room)
    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

//create room
const createRoom =  asyncHandler(async(req, res)=>{
    try{
        const room = await Room.create(req.body)
        res.status(200).json(room);
    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

//update room
const updateRoom = asyncHandler(async(req, res) =>{
    try{
        const {id} = req.params;
        const room = await Room.findByIdAndUpdate(id, req.body);
        // we cannot find any room in database
        if(!room){
            return res.status(404).json({message: `cannot find any room with ID ${id}`})
        }
        const updatedRoom = await Room.findById(id);
        res.status(200).json(updatedRoom)
    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

//delete room
const deleteRoom = asyncHandler(async(req, res) =>{
    try{
        const {id} = req.params;
        const room = await Room.findByIdAndDelete(id);
        if(!room){
            return res.status(404).json({message: `cannot find any room with ID ${id}`})
        }
        res.status(200).json(room)
    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getRooms, getRoom, deleteRoom, updateRoom, createRoom
}
