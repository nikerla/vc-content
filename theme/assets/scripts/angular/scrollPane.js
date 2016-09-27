angular.module('storefrontApp').directive('scrollPane',function() {
	return {
	    restrict:'A',
	    link: function (scope, elm, attrs) {
	    elm.addClass('scroll-pane');
	    elm.jScrollPane({
	    	autoReinitialise: true
	    });
	}};
});