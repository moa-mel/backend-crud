const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const roomRoute = require('./routes/roomRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
dotenv.config()


const PORT = process.env.PORT || 8080

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))

//middleware
app.use('/api/rooms', roomRoute)
app.use(errorMiddleware)

//routes
app.get('/', (req, res)=>{
    res.send('Hello node')
})

mongoose.connect("mongodb+srv://zedek:olaitan23CG@hotelroom.yo5eha6.mongodb.net/?retryWrites=true&w=majority&appName=hotelroom")
.then(()=>{
    console.log('connected to mongodb')
    app.listen(PORT, ()=>{
        console.log(`Node API app is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
});