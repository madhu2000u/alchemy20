const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
// const key=require('./models/api_keys')
const app=express()
const defalul_port=3000

dotenv.config()


app.use(express.json())
app.use('/api', require('./routes/auth_routes'))
app.use('/api', require('./routes/main_routes'))

mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})
// mongoose.connection.db.listCollections({name: "api_keys"}).next((err, info)=>{
//     if(!info){
//         post:'',

//     }
// })

app.listen(process.env.process || defalul_port, ()=>{console.log('Server listening...')} )