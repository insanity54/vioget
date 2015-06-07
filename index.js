var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');


var page = process.argv[2];
console.log('got args', page);

if (!page) throw new Error('put the url of yt vid page as arg');


// get yt page
request(page, function (err, response, body) {
  if (!err && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage. 
    //fs.writeFileSync('test.html', body, 'utf8');
    
    var vids = [];
    
    $ = cheerio.load(body);
    console.log($('#channels-browse-content-grid a').each(function(i, e) {
        
    }
        ).attr('href'));
  }
});


