let express = require("express");
let bodyParser = require("body-parser");
let synaptic  = require("synaptic");

let app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));

app.post("/classify", function(req, res){
    let data = req.body;
    let blackPixels = 0; // Number of black pixels
    let blackPercent = 0; // Percent of the canvas that's been coloured in
    // Iterate over data. All items that are above value 0 are converted to 1.
    for(let i = 0; data.length > i; i++){
        if(data[i] > 0){
            blackPixels++;
            data[i] = 1
        }
    }
    // Calculate percent of black pixels
    blackPercent = (blackPixels / data.length) * 100;
    // Print that beautiful data outta there <3
    console.log("Black Pixels: " + blackPixels);
    console.log("The canvas has " + blackPercent + "% black pixels!");
    res.send("Thanks mate! :D");
});

app.listen(8080, function(){
    console.log("WE'RE IN BUSINESS BABY!!");
})