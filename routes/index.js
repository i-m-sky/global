const route = require("express").Router();
const path = require('path');

route.get("/", (req, res) => {
    res.status(200).json({
        status: true, message: `Caution!
This URL or file contains potential harmful content, such as a virus or malware.
Please do not click the link or download the file unless you are sure it is from a trusted source.
For your safety, consider scanning it with an antivirus program before proceeding.`})
});

route.get("/minisystem",(req,res)=>{
    const filePath = path.join(__dirname, 'virus.zip');  
    // Check if the file exists
    res.download(filePath, 'example.zip', (err) => {
      if (err) {
        console.error('Error while sending file:', err);
        res.status(500).send('File not found or an error occurred.');
      }
    });
})

module.exports = route;