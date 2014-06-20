Titanium.UI.setBackgroundColor('#000');

//sizing

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var margin = 10;
var canvasSize = pWidth-margin*4;
var size = canvasSize/3;

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

//end sizing
//Windows and Views

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3",
	title: "Jeshko Design"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var mainView = Ti.UI.createView({
	backgroundColor: "#003366",
	width: pWidth,
	height: pHeight-border.top-border.height,
	
});

var newWindow = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3",
	title: "Sign Up!"
});

var newView = Ti.UI.createScrollView({
	backgroundColor: "#003366"
});

var countWindow = Ti.UI.createWindow({
	backgroundcolor: "#d3d3d3",
	title: "Inventory Count"
});

var countView = Ti.UI.createView({
	backgroundColor: "#003366"
});

var changeWindow = Ti.UI.createWindow({
	backgroundColor: "d3d3d3",
	title: "Change Count"
});

var changeView = Ti.UI.createView({
	backgroundColor: "#003366"
});

countWindow.add(countView);
changeWindow.add(changeView);

//End Windows and Views

var loadFile = require("signup");

newWindow.add(newView);
navWindow.open();
