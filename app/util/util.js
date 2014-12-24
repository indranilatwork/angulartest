"use strict";
var api = require("./api"),
  Util = {
    api: api,
    
        /*
             * This function validates forms depending on specified rule.
             * And shows error if the field is not valid.
                 * @params
                 *  * @param {dom node} form the dom refference of the form to be validated.
             * @param {plainObject} config the properties object config.
             * Valid properties of config are :
             *@rules {object} Rule set to validate the form
             *@messages {object} Set of messages to show if any field is not valid.
             */
    validateForm: function(form, config) {
        form.validate({
            rules: config.rules,
            messages: config.messages,
            onfocusout: function(element, event) {
                if(config.events && !config.events.focusOut)
                {
                    return;
                } else {
                    $(element).valid();
                }
                        
            },
            errorClass: "text-left error",
            errorElement: "div"
        });
        return form;
    },
        checkLogin : function(id){
        var me = this;
        if(window.localStorage.getItem('incubatize-user-data')){
            if(id){
                if(window.localStorage.getItem('incubatize-user-data') == id){
                    return true;
                }else{
                    return false;
                }
                
            }else{
                return true;
            }
        }  else{
            return false;
        }
    }

    // Write your utility fuctions here

  };
module.exports = Util;
