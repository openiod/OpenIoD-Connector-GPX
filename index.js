
/**
 * OpenIoD module for connecting GPX data 
 *
 * @param  {String} ##todo 
 * @return {String}
 */
 
 "use strict";

 
var fs 		= require('fs');
var request = require('request');
var sys 	= require('sys');
//var MongoClient = require('mongodb').MongoClient;
//var	format 	= require('util').format;
//var openIodConnector_ILM_CsvHistory			= require('OpenIoD-Connector-ILM/observation-csv-history');	
//var openIodConnector_ILM_MongoAggregation	= require('OpenIoD-Connector-ILM/observation-aggregation');	
	 
var localGpxFolders 	= [];
var gpxFolders 				= {};

//var csvHistoryUrl = 'http://82.201.127.232:8080/csv/';
//var airboxCsvFileName = '25_cal.csv';
//var tmpFolder;


module.exports = {


/*
	loadGpxFolders: function(folder) {
	
		var context = this;
		var gpxLocalPath = __dirname+'/gpx/';
		var localGpxIndex = -1;
		localGpxFolders=[]; // reset localGpxFolders array
		fs.readdir(gpxLocalPath, function (err, files) {
			if (err) { console.log("Local gpx folder not found: " + gpxLocalPath);
			} else {
				localGpxFolders 	= files;
  				console.log("Local gpx folders: " + localGpxFolders.toString());
				
				for (var i=0;i<localGpxFolders.length;i++) {
					if (localGpxFolders[i] == 'README.md' ) {
						continue;
					}
					context.loadGpxFile(localGpxFolders[i]);
				}
			}
		});
	},

	loadGpxFile: function(gpxFolderName) {
	
		var gpxFolderLocalPath = __dirname+'/gpx/'+gpxFolderName;
		
		var sweDataRecordJson = fs.readFileSync(gpxFolderLocalPath+'/datarecord.json');
		gpxFolders[gpxFolderName] = {};
		var gpx = gpxFolders[gpxFolderName];
		console.log('gpx: ' +  gpxFolderName);
		//console.log('  data: ' + sweDataRecordJson);
		var _sweDataRecord = JSON.parse(sweDataRecordJson);
		gpx.sweDataRecord = _sweDataRecord.sweDataRecord;
	},

	getGpx: function(gpxName) {	
		return gpxFolders[gpxName];		
	},
	
	getGpxFolders: function() {	
		return gpxFolders;		
	},
*/

/*
	getFeatureOfInterest: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_CsvHistory.getFeatureOfInterest(featureOfInterest, param, function() {
			console.log('End of getFeatureOfInterest');
 			callback();
		//} );
	},

	getObservationHistory: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_CsvHistory.reqCsvHistory(featureOfInterest, param, function() {
			console.log('End of getObservationHistory');
 			callback();
		} );
	},
	
*/
	getData: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_MongoAggregation.getData(featureOfInterest, param, callback);
		
		if (featureOfInterest == 'marathonEHV') {
			callback(getMarathonEhv());
			return;
		}
		
		callback('File not found');
		
		
	},

	

//
//	merge: function (featureOfInterest, param, callback) {
//		//openIodConnector_ILM_MongoAggregation.merge(featureOfInterest, param, callback);
//	}


};


var getMarathonEhv = function() {
	var gpxFolderName 	= 'marathonEHV';
	var gpxFileName		= '42k-marathon-2015.gpx';
	var gpxFolderLocalPath = __dirname+'/../../data/gpx/'+gpxFolderName;
	var gpxFile = fs.readFileSync(gpxFolderLocalPath+gpxFileName);
	return gpxFile;
};



