const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;
const route = require("./routes/index");

app.use(express.json());
app.use(route);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})