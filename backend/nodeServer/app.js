const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const key=require('./models/api_keys')
const app=express()
const defalul_port=3000

dotenv.config()

app.use(express.json())
app.use('/api', require('./routes/auth_routes'))
app.use('/api', require('./routes/main_routes'))

mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})
// mongoose.connection.db.listCollections({name: "api_keys"}).next((err, info)=>{
//     if(!info){
//         post:'c4f1b5949f1d8c69c8c8219518fa5af85531ac630825a1a65f42dd2e70b5f03166b422c1057ed8f31522b33605aaa3ef5d28f76f7c11346724b902f476163361',

//     }
// })

app.listen(process.env.process || defalul_port, ()=>{console.log('Server listening...')} )