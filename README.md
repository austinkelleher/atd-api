atd-api
=========

NodeJS API for [afterthedeadline.com (ADT)](http://www.afterthedeadline.com/api.slp "After the Deadline API documentation").

Supported API requests:

    checkDocument - Checks a document and returns errors and suggestions
    checkGrammar  - Checks a document (sans spelling) returns errors and suggestions
    stats         - Returns statistics about the writing quality of a document

Supported Languages/Prefixes:

    Frech      - fr
    German     - de
    Portuguese - pt
    Spanish    - es

##Installation
	npm install atd-api

## Request Examples

###Basic Usage
	var api  = new ATDApi('API KEY HERE');       //Defaults to English language
	var api1 = new ATDApi('API KEY HERE', 'es'); //Spanish language

###Validate spelling
        api.checkDocument('this is a tes tnh', function(body, error) {
                console.log(body);
        });

###Validate grammar
        api.checkGrammar('this is a tes tnh', function(body, error) {
                console.log(body);
        });

###Obtain Statistics
        api.stats('this is a tes tnh', function(body, error) {
                console.log(body);
        });
