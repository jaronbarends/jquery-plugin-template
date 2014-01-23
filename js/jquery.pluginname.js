;(function($) {

	$.fn.pluginName = function(options) {

		var defaults = {
			someVar: "default plugin value for someVar",
			someOtherVar: "default plugin value for someOtherVar"
		},
		config,
		pluginName = 'pluginName';

		options = options || {};
		config = $.extend({}, defaults, options);
	
		var init = function(obj) {
			$(obj).html("someVar:"+config.someVar+"<br/>someOtherVar:"+config.someOtherVar);
		};
		
		//do stuff with every element of the wrapped set, and return the set for chaining
		return this.each(function() {
			init(this);
		});

	};
	//End of plugin definition


	var initPluginInstances = function() {
		var efcs = window.EFCS;
		if (efcs && efcs.plugins && efcs.plugins.pluginName && efcs.plugins.pluginName.instances) {
			var instances = efcs.plugins.pluginName.instances;
			for (var i=0; i<instances.length; i++) {
				var instance = instances[i];
				$(instance.selector).pluginName(instance.options);
			}
		}
	};
	
	//Initialise all plugin instances on dom ready
	$(document).ready(initPluginInstances);

})(jQuery);