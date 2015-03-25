atd-api
=========

NodeJS API for [afterthedeadline.com (ADT)](http://www.afterthedeadline.com/api.slp "After the Deadline API documentation").

Supported API requests:

    checkDocument - Checks a document and returns errors and suggestions
    checkGrammar  - Checks a document (sans spelling) returns errors and suggestions
    stats         - Returns statistics about the writing quality of a document

## Request Examples

###Validate spelling
        var api = new ATDApi('API KEY HERE');
        api.checkDocument('this is a tes tnh', function(body, error) {
                console.log(body);
        });

###Validate grammar
        var api = new ATDApi('API KEY HERE');
        api.checkGrammar('this is a tes tnh', function(body, error) {
                console.log(body);
        });

###Obtain Statistics
        var api = new ATDApi('API KEY HERE');
        api.stats('this is a tes tnh', function(body, error) {
                console.log(body);
        });
