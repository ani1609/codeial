const express=require('express');
const app=express();
const port=3000;

app.use('/', require('./routes/index'));

app.listen(port, function(err)
{
    if (err)
    {    
        console.log(`Error while running the server: ${err}`);
        return;
    }

    console.log(`Server is up and running on port: ${port}`);

});
