const https = require('https');

function validateStreamableURL (url) {
    return new Promise ((resolve, reject) => {
        if (!url) {
            reject('ERROR: No URL provided.');
        }
        const streamableId = streamableIdFromURL(url);
        if (streamableId) {
            https.get(`https://api.streamable.com/videos/${streamableId}`, (response) => { // streamable http request
                let data = '';
    
                response.on('data', (chunk) => {
                  data += chunk;
                });
    
                if (response.statusCode == "404" || response.statusCode == "302") { 
                    reject("ERROR: Streamable video doesn't exist.");
                } else {
                    resolve(streamableId);
                }
            
            }).on("error", (err) => {
                reject('ERROR: Something went wrong.');
            });
        } else {
            reject('ERROR: Invalid streamable URL!');
        }
    })
}

function streamableIdFromURL (url) { // also checks if link is a streamable link
    if (url.toLowerCase().includes("streamable.com")) {
        if (!/^https?:\/\//i.test(url)) { // add https:// if url doesn't include it already
            url = 'http://' + url;
        } 
        const urlOptions = new URL(url);
        return String(urlOptions.pathname).slice(1);
    } else {
        return null;
    }
}

module.exports = {streamableIdFromURL, validateStreamableURL}

