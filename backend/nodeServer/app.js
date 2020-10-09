const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
// const key=require('./models/api_keys')
const app=express()
const default_port=3000

dotenv.config()


app.use(express.json())
app.use('/api', require('./routes/auth_routes'))
app.use('/api', require('./routes/main_routes'))

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})
mongoose.connect(`mongodb+srv://alchemy-db-madhu:${process.env.my_db_pass}@alchemy-20.xrhio.gcp.mongodb.net/alchemy-20?retryWrites=true&w=majority`, ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})
// mongoose.connection.db.listCollections({name: "api_keys"}).next((err, info)=>{
//     if(!info){
//         post:'',

//     }
// })

app.listen(process.env.PORT || default_port, ()=>{console.log('Server listening...')} )