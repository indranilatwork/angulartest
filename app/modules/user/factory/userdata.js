'use strict';
module.exports = function() {

    var util = require('../../../util/util'),
    loggedinUser = {
        userData:{}
     };
     loggedinUser.setData = function(data) {
        angular.copy( data,loggedinUser.userData);
    };
     loggedinUser.getData = function() {
        return loggedinUser.userData;
    };
     return loggedinUser;
   
};


