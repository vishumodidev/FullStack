const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser= require('body-parser');
const authRouter= require('./routes/auth');


const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://vishumodidev:vishumodidev@taskmanagement.feukg4y.mongodb.net/?retryWrites=true&w=majority&appName=taskmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use('/api/auth',authRouter);

app.listen(5000,()=>{
    console.log("Server listening on Port " + 5000);
})