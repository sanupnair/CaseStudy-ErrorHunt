const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require ('body-parser'); // Part #1 Point 1
const port = 3000;
const nav= [
    {
        link:"/books",
        name:"Books"
    },
    {
        link:"/authors",
        name:"Authors"
    },
    {
        link:"/addbook",
        name:"Add Book"
    },
    {
        link:"/addauthor",
        name:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express(); //Part #1 Point 1


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); // Part #1 Point 1
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(3000,()=>{
    console.log("Server Ready on 3000"); // Part #1 Point 1
});