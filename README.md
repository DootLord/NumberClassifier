# NumberClassifier
A Neural Network made in HTML5 and NodeJS to classify numbers

A simple program but used to broaden my knowledge of how a nerual network works outside of MatLab's tools (that does a LOT of the heavy lifting for you)

The idea is to have the client provide a 200 x 200 canvas that can be drawn and then the image data is passed to the server.

Once this is done each pixel is passed to a input neuron on a one to one ratio, so each pixel has it's own input neron. 
All input neruons are mapped to a output neruon. 10 neruons in total ranging 0 to 9. 
The connections between each neruon to an output will have weights associated with them that dictate how much an input will effect the
output neruon. 

This works in princable, but I'm still clueless on how to actually teach the network, as well as how use the NN libary as intended...

SCIENCE!

## Setup

If you wish to use this application then run it like any NodeJS application.

Clone the project and in the directory run "npm install" This will install all of the required packages for the project to run.
Once this is done simply run the index.js file with the command "node index.js". The server is now running! (I'm so proud of you!)

The website is hosted locally on port 8080 (So localhost:8080 OR 127.0.0.0:8080) 

Have a fiddle and tell me what you think. (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
