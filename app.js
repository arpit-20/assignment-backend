const  express=require('express')
const mongoose=require('mongoose')
var cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())

//connect to db

const url="mongodb://localhost/AlienDB"

mongoose.connect(url,{useNewUrlParser:true},
    mongoose.set('useNewUrlParser', true),
mongoose.set('useFindAndModify', false),
mongoose.set('useCreateIndex', true),
mongoose.set('useUnifiedTopology', true)
);

mongoose.connection.on('open',()=>{
    console.log("connected........");
    
})

const alienRouter=require('./routers/routes')

app.use('/aliens',alienRouter);



app.listen(9000,()=>{
console.log('server started');

})