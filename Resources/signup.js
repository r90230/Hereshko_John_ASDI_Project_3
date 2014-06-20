

//Text Field and Label
	//Main site field

var headerLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Log in!",
	font: {fontSize: 25},
	color: "#E47100",
	top: 45,
	left: margin*2.5
});

var userLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Username Here",
	font: {fontSize: 15, fontWeight: "bold"},
	color: "#CC6500",
	top: 90,
	left: margin*3
});

var userField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 120,
	width: 250, 
	height: 30,
	hintText: "Username",
	value: ""
});

var passLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Password (6 character minimum)",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 160,
	color: "#CC6500",
	left: margin*3
});

var passField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	bordercolor: "#000",
	color: '#336699',
	top: 190,
	width: 250, 
	height: 30,
	passwordMask: true,
	hintText: "Password (Six character minimum)"
});

	//Main Site Field end
	
	//Sign Up Field

var emailField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 40,
	width: 250, 
	height: 30,
	hintText: "E-mail Address",
	value: "",
	returnKeyType: Ti.UI.RETURNKEY_NEXT
});

var emailLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Email Address",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 10,
	color: "#CC6500",
	left: margin*3
});


var userSignupField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 110,
	width: 250, 
	height: 30,
	hintText: "Username",
	value: "",
	returnKeyType: Ti.UI.RETURNKEY_NEXT
});

var userSignupLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Username",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 80,
	color: "#CC6500",
	left: margin*3
});

var passSignupField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 185,
	width: 250, 
	height: 30,
	hintText: "Password",
	passwordMask: true,
	returnKeyType: Ti.UI.RETURNKEY_NEXT
});

var passSignupLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Password (6 Characters!)",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 155,
	color: "#CC6500",
	left: margin*3
});

var passVerifyField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 260,
	width: 250, 
	height: 30,
	hintText: "Verify Password",
	passwordMask: true,
	returnKeyType: Ti.UI.RETURNKEY_NEXT
});

var verifyLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Verify Password",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 230,
	color: "#CC6500",
	left: margin*3
});

var userIDField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 335,
	width: 250, 
	height: 30,
	hintText: "User ID",
	value: "",
	focusable: true
});

var userIDLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "User ID - Provided by Admin",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 305,
	color: "#CC6500",
	left: margin*3
});

	//Signup Field end
//End Text Fields and Labels

var loginButton = Ti.UI.createLabel({
	borderRadius: 50,
	borderColor: "#000",
	text: "Sign In",
	backgroundColor: "#E47100",
	height: 50,
	width: "80%",
	top: 255,
	textAlign: "center"
});

var createButton = Ti.UI.createLabel({
	borderColor: "#000",
	borderRadius: 10,
	text: "Sign Up!",
	backgroundColor: "#CC6500",
	height: 50,
	width: "80%",
	top: 340,
	textAlign: "center"
});

var signupButton = Ti.UI.createLabel({
	borderColor: "#000",
	borderRadius: 10,
	text: "Confirm",
	backgroundColor: "#CC6500",
	height: 50,
	width: "80%",
	top: 410,
	textAlign: "center"
});

emailField.addEventListener('return', function() {
    userSignupField.focus();
});

userSignupField.addEventListener('return', function() {
    passSignupField.focus();
});

passSignupField.addEventListener('return', function() {
	passVerifyField.focus();
});

passVerifyField.addEventListener('return', function() {
    userIDField.focus();
});

//functions - main screen



var userCheck = function(){
	if(userField.value === ""){
		alert("No username entered!");
		return false;
	}else{
		passCheck();
		return true;
		passCheck();
	};
};

var passCheck = function (){ 
	if(passField.value.length < 6){
		alert("Password must be 6 characters long.");
	}else if (passField.value.length >= 6){
		countOpen();
		alert("Successful login!");
		
	};
};

//functions - main screen end
//functions - signup screen

var emailCheck = function(){
	var checkValue = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (checkValue.test(emailField.value)){
		userSignupCheck();
	}else{
		alert("Email incorrect! Remember to use xxxx@xxx.com format");
	};
};

var userSignupCheck = function(){
	if(userSignupField.value === ""){
		alert("Username not entered!");
	}else{
		passSignupCheck();
		return true;
	};
};

var passSignupCheck = function(){
	if(passSignupField.value.length < 6){
		alert("Password must be 6 characters or over.");
	}else if (passSignupField.value.length >= 6){
		passVerifyCheck();
	};
};

var passVerifyCheck = function(){
	if(passSignupField.value != passVerifyField.value){
		alert("Passwords do not match!");
	}else if (passSignupField.value === passVerifyField.value){
		alert("Successful signup!");
		var db = Ti.Database.open('userDatabase');
		db.file.setRemoteBackup(false);
		db.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, user TEXT, pass TEXT, userid INTEGER);');
		
		var addRows = db.execute('INSERT INTO users (email,user,pass,userid) VALUES ("?,?,?,?", emailField.value, userSignupField.value, passVerifyField.value,userIDField.value)');
		addRows;
	};
};

var signupOpen = function(){
	navWindow.openWindow(newWindow);
};

var countOpen = function(){
	navWindow.openWindow(countWindow);
};


loginButton.addEventListener("click", userCheck);
createButton.addEventListener("click", signupOpen);
signupButton.addEventListener("click", emailCheck);

newView.add(emailLabel, emailField, userSignupLabel, userSignupField, passSignupLabel, passSignupField, verifyLabel, passVerifyField, userIDField, userIDLabel, signupButton);
mainView.add(headerLabel, userLabel, userField, passLabel, passField, loginButton, createButton);
mainWindow.add(border, mainView);
