/*
 * The server to receivE
 */

var express = require('express');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
var dateFormat = require('dateformat');
var bodyParser = require('body-parser');

var app = express();

var DATE_FORMAT   = 'yyyy-mm-dd';
var PORT_NUMBER   = process.argv[2]; // get from command line arg
var CSV_DIRECTORY = process.argv[3]; // get from command line arg
var CSV_FILENAME  = 'dagstaat.csv';
var CSV_FILE      = path.join(CSV_DIRECTORY, CSV_FILENAME);

app.use(bodyParser.json());

// Only accept CORS on local host and local subnet
// TODO use some sort of API key, this approach is very hacky :p
var corsOptions = {
    'origin': /(localhost|192\.168\.*|10\.)/,
    'methods': 'GET'
};
// Enable pre-flight
app.options('*', cors());

// Data comes in
app.post('/postDagstaatje', cors(corsOptions), (req, res, next) => {
    createCSV(req.body, (err) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log('Saved %s', CSV_FILE);
            res.send('Dagstaatje ontvangen door server');
        }
    });
});

// Save a CSV file to disk
function createCSV(data, callback) {
    var csvString = '';
    csvString += dateFormat(new Date(), DATE_FORMAT);
    csvString += ',';
    csvString += data.start;
    csvString += ',';
    csvString += data.extra;
    csvString += ',';
    csvString += data.turnover;
    csvString += ',';
    csvString += data.tab;
    csvString += ',';
    csvString += data.tabPaid;
    csvString += ',';
    csvString += data.out;
    csvString += ',';
    csvString += data.pin;
    csvString += ',';
    csvString += data.counted;
    csvString += ',';
    csvString += data.envelope;
    console.log(csvString);
    // Check if we have permission to write to dir
    fs.access(CSV_DIRECTORY, fs.W_OK, (err) => {
        // If the directory is not writable, notify client
        if (err) return callback('No access to ' + CSV_DIRECTORY);
        // Everything is OK (over)write the file
        fs.writeFile(CSV_FILE, csvString, (err) => {
            if (err) return callback('I have access to ' + CSV_DIRECTORY + ', but unable to save file');
            callback();
        });
    });
}

// Try to start the server...
// Check if the port number argument is correct, TODO check if arg is of type number!
if (PORT_NUMBER < 80 || PORT_NUMBER > 65534) {
    return console.log('Error starting server: Invalid port number');
}
// Check if we have access to the save dir
fs.access(CSV_DIRECTORY, fs.W_OK, (err) => {
    if (err) return console.log('Error starting server: Cannot save to %s', CSV_DIRECTORY);
    // Dir is writable, start the server...
    var server = app.listen(PORT_NUMBER, () => {
        console.log('Listening at %s:%s', server.address().address, server.address().port);
        console.log('Saving CSV file to %s', CSV_FILE);
    });
});
