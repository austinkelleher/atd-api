var request = require('request');

/**
* Base URL of the After the Deadline API service
*/
var BASE_URL = 'http://service.afterthedeadline.com';
/**
* After the Deadline API paths
*/
var ApiUrls = {
	CHECK_DOC: BASE_URL + '/checkDocument',
	CHECK_GRAM: BASE_URL + '/checkGrammar',
	STATS: BASE_URL + '/stats'
};

/**
* @var key API Key
*/
var ATDApi = function(key) {
	this.API_KEY = key;
};

/**
* Checks a document and returns errors and suggestions 
* @var text String to validate. HTML is stripped. 
* @var callback Callback with returned data and errors
*/
ATDApi.prototype.checkDocument = function(text, callback) {
	this._textRequest(ApiUrls.CHECK_DOC, text, callback);
};

/**
* Returns grammar suggestions, but not spelling errors
* @var text String to validate. HTML is stripped.
* @var callback Callback with returned data and errors
*/
ATDApi.prototype.checkGrammar = function(text, callback) {
	this._textRequest(ApiUrls.CHECK_GRAM, text, callback);
};

/**
* Returns statistical information on grammar, spelling, and style
* for the provided text
* @var text String to compute statistics on
*/
ATDApi.prototype.stats = function(text, callback) {
	this._textRequest(ApiUrls.STATS, text, callback);
};

/**
* Convenience function for reuse purposes. Performs an API request
* on a string of text
* @var url API URL to request
* @var text String to perform operation on
* @var callback Callback with returned data and errors
*/
ATDApi.prototype._textRequest = function(url, text, callback) {
	this._post(url, {
		data: text,
		key: this.API_KEY
	}, callback);	
};

/**
* Performs basic POST request
* @var url URL of POST request
* @var form POST data
* @var callback Callback with returned data and errors
*/
ATDApi.prototype._post = function(url, form, callback) {
	request.post(url, { form: form }, function (error, response, body) {
		if(error)
			callback(body, error);
		else
			callback(body);
	});
};

exports.ATDApi = ATDApi;
