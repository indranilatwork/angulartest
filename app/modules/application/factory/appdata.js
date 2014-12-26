'use strict';
module.exports = function() {

    var appData = {
        selectedMenu : ""
     };
     appData.setData = function(data) {
        appData.selectedMenu = data;
    };
     appData.getData = function() {
        return appData.selectedMenu;
    };
     return appData;
   
};


