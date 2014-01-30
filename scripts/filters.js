'use strict';

angular.module('confFilters', [])
	.filter('filterobj', function() {
		return function(objToFilter, searchKeyword) {
		    var result = {},
		        stringifiedVal,
		        re = new RegExp(searchKeyword, 'i');
		    angular.forEach(objToFilter, function(val, key){
		    	stringifiedVal = JSON.stringify(val);
		    	if(re.test(stringifiedVal)){
		    		result[key]=val;
		    	}
		    });
		    return result;
		};
	});