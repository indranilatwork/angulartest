window.name = "NG_DEFER_BOOTSTRAP!";

window._ = require("underscore");
window.lang = require('./app/lang/lang');


window.angular = require('angular');
window.angularRouter = require('angularRouter');
window.angularBootstrap = require('angularBootstrap');
window.angularBootstrapTpl = require('angularBootstrapTpl');
var App = require('./app/modules/application/app.module'),
  validator = require('jqueryValidater'),
  toastr = require("toastr");
toastr.options = {
  "closeButton": true
}
angular.element().ready(function() {
  angular.resumeBootstrap([App['name']]);
});
