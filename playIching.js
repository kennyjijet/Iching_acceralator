$.backTextButton.title = Alloy.Globals.languages[Alloy.Globals.currentLanguages].backButton;
$.playIchingWindow.title = Alloy.Globals.languages[Alloy.Globals.currentLanguages].playIching;
$.setCoin.title = Alloy.Globals.languages[Alloy.Globals.currentLanguages].setCoin;
$.showResult.title = Alloy.Globals.languages[Alloy.Globals.currentLanguages].showResult;
$.informCoin.title = Alloy.Globals.languages[Alloy.Globals.currentLanguages].informCoin;

$.informCoin.enabled = false;

//$.informCoin.setText(Alloy.Globals.languages[Alloy.Globals.currentLanguages].informCoin);
var status = 'run';
var isTouchedCoin = false;
var runningIndex = 1;
var prefix = 'Coin';
var faceCoin = '';
var runCoinInterval = null;
var countTouch = 0;
var results = [];
$.setCoin.hide();
$.showResult.hide();
Alloy.Globals.resultIndex = 0;
//// Main.
var isInitialized = false;
var initialTime = setTimeout(function() {
	if(!isInitialized)
	{
		initialization();
		isInitialized = true;
		clearTimeout(initialTime);
	}
}, 300);

function initialization()
{
	
	for(var i = 0 ;i < 20; i++){
		prefix = 'top';
		$.coinAnim.image = "/images/"+ prefix + i + ".png";
	}
	for(var i = 0 ;i < 20; i++){
		prefix = 'end';
		$.coinAnim.image = "/images/"+ prefix + i + ".png";
	}
	for(var i = 0 ;i < 20; i++){
		prefix = 'Coin';
		$.coinAnim.image = "/images/"+ prefix + i + ".png";
	}
}

function getResult(resultString)
{
	switch(resultString)
	{
		case "head,head,head,head,head,head" : 
			return 1;
		break;
        case "head,head,head,tail,head,head" :
        	return 2;
        break;
        case "head,head,head,head,tail,head" :
        	return 3;
        break;
        case "head,head,head,tail,tail,head" :
        	return 4;
        break;
        case "head,head,head,head,head,tail" :
        	return 5;
        break;
        case "head,head,head,tail,head,tail" :
        	return 6;
        break;
        case "head,head,head,head,tail,tail" :
        	return 7;
        break;
        case "head,head,head,tail,tail,tail" :
        	return 8;
        break;
        case "tail,head,head,head,head,head" :
        	return 9;
        break;
        case "tail,head,head,tail,head,head" :
        	return 10;
        break;
        case "tail,head,head,head,tail,head" :
        	return 11;
        break; 
        case "tail,head,head,tail,tail,head" :
        	return 12;
        break;
        case "tail,head,head,head,head,tail" :
        	return 13;
        break;
        case "tail,head,head,tail,head,tail" :
        	return 14;
        break;
        case "tail,head,head,head,tail,tail" :
        	return 15;
        break;
        case "tail,head,head,tail,tail,tail" :
        	return 16;
        break;
        case "head,tail,head,head,head,head" :
        	return 17;
        break;
        case "head,tail,head,tail,head,head" :
        	return 18;
        break;
        case "head,tail,head,head,tail,head" :
        	return 19;
        break;
        case "head,tail,head,tail,tail,head" :
        	return 20;
        break;
        case "head,tail,head,head,head,tail" :
        	return 21;
        break;
        case "head,tail,head,tail,head,tail" :
        	return 22;
        break;
        case "head,tail,head,head,tail,tail" :
        	return 23;
        break;
        case "head,tail,head,tail,tail,tail" :
        	return 24;
        break;
        case "tail,tail,head,head,head,head" :
        	return 25;
        break;
        case "tail,tail,head,tail,head,head" :
        	return 26;
        break;
        case "tail,tail,head,head,tail,head" :
        	return 27;
        break;
        case "tail,tail,head,tail,tail,head" :
        	return 28;
        break;
        case "tail,tail,head,head,head,tail" :
        	return 29;
        break;
        case "tail,tail,head,tail,head,tail" :
        	return 30;
        break;
        case "tail,tail,head,head,tail,tail" :
        	return 31;
        break;
        case "tail,tail,head,tail,tail,tail" :
        	return 32;
        break;
        case "head,head,tail,head,head,head" :
        	return 33;
        break;
        case "head,head,tail,tail,head,head" :
        	return 34;
        break;
        case "head,head,tail,head,tail,head" :
        	return 35;
        break;
        case "head,head,tail,tail,tail,head" :
        	return 36;
        break;
        case "head,head,tail,head,head,tail" :
        	return 37;
        break;
        case "head,head,tail,tail,head,tail" :
        	return 38;
        break;
        case "head,head,tail,head,tail,tail" :
        	return 39;
        break;
        case "head,head,tail,tail,tail,tail" :
        	return 40;
        break;
        case "tail,head,tail,head,head,head" :
        	return 41;
        break;
        case "tail,head,tail,tail,head,head" :
        	return 42;
        break;
        case  "tail,head,tail,head,tail,head":
        	return 43;
        break;
        case "tail,head,tail,tail,tail,head" :
        	return 44;
        break;
        case "tail,head,tail,head,head,tail" :
        	return 45;
        break;
        case "tail,head,tail,head,tail,tail" :
        	return 46;
        break;
        case "tail,head,tail,tail,tail,tail" :
        	return 47;
        break;
        case "head,tail,tail,head,head,head" :
        	return 48;
        break;
        case "head,tail,tail,tail,head,head" :
        	return 49;
        break;
        case "head,tail,tail,head,tail,head" :
        	return 50;
        break;
        case "head,tail,tail,tail,tail,head" :
        	return 51;
        break;
        case "head,tail,tail,head,head,tail" :
        	return 52;
        break;
        case "head,tail,tail,tail,head,tail" :
        	return 53;
        break;
        case "head,tail,tail,head,tail,tail" :
        	return 54;
        break;
        case "head,tail,tail,tail,tail,tail" :
        	return 55;
        break;
        case "tail,tail,tail,head,head,head" :
        	return 56;
        break;
        case "tail,tail,tail,tail,head,head" :
        	return 57;
        break;
        case "tail,tail,tail,head,tail,head" :
        	return 58;
        break;
        case "tail,tail,tail,tail,tail,head" :
        	return 59;
        break;
        case "tail,tail,tail,head,head,tail" :
        	return 61;
        break;
        case "tail,tail,tail,tail,head,tail" :
        	return 62;
        break;
        case "tail,tail,tail,head,tail,tail" :
        	return 63;
        break;
        case "tail,tail,tail,tail,tail,tail" :
        	return 64;
        break;
	}
}

function setRunInterval()
{
	runCoinInterval = setInterval(function() {
	if(status == 'stop')
	{
		if(runningIndex >= 20)
		{
			setStopInterval();
			if(countTouch < 6){
				$.setCoin.show(); 
			}else{
				//var testArray = "head,head,head,head,head,head";
				var result = getResult(results.toString());
				Ti.API.info('result ' + result);
				Alloy.Globals.resultIndex = result;
				$.showResult.show();	
			}
			
		}
	}
	else if(status == 'run'){
		
		//Ti.API.info('runningIndex ' + runningIndex);	
		if(runningIndex > 20)
		{
			runningIndex = 1;
		}	
	}
	
	$.coinAnim.image = "/images/"+ prefix + runningIndex + ".png";
	runningIndex++;
	}, 50);	
}

function random()
{
	var random_boolean = Math.random() >= 0.5;
	return random_boolean;
}


function drawBar()
{
	var viewBar = Titanium.UI.createView({
		width : 100,
		height : 20,
		backgroundImage : "/images/"+ faceCoin,
		bottom : "5"
	});
	
	viewBar.bottom = countTouch * 20;
	$.resultBar.add(viewBar);
}

function setStopInterval()
{
	clearTimeout(runCoinInterval);
}

function cancelFunction()
{
	
	Alloy.Globals.selectedCategory = "";
	runningIndex = 1;
	clearInterval(runCoinInterval);
	$.playIchingWindow.close();
}

setTimeout(function() {
	setRunInterval();
}, 300);

$.showResult.addEventListener('click', function(e){
	
	var resultView = Alloy.createController("result").getView();
	Alloy.Globals.windowsPlayIching = $.playIchingWindow;
	//Alloy.Globals.windows.push($.playIchingWindow); 
	if(OS_IOS){
		Alloy.Globals.navGroupWin.openWindow(resultView);	
	}else{
		resultView.open();
	}
});


$.coinAnim.addEventListener('click', function(e){
	//Ti.API.info("Click");
	if(countTouch >= 6)
	{
		return;	
	}
	
	
	if(isTouchedCoin){
		//setCoint();
		return;
	}
	
	
	if(random())
	{
		prefix = 'top';
		$.coinAnim.image = "/images/"+ prefix + runningIndex + ".png";
		faceCoin = 'head.png';
		results.push("head");
	}else{
		prefix = 'end';
		$.coinAnim.image = "/images/"+ prefix + runningIndex + ".png";
		faceCoin = 'tail.png';
		results.push("tail");
	}
	drawBar();
	runningIndex = 1;
	status = 'stop';
	isTouchedCoin = true;
	countTouch++;

});

function setCoint()
{
	
	$.setCoin.hide();
	prefix = 'Coin';
	runningIndex = 1;
	status = 'run';
	isTouchedCoin = false;
	setRunInterval();
	
}



$.setCoin.addEventListener('click', function(e){
	
	setCoint();
});


$.cancelEnrollBtn.addEventListener('click', function(e){
	cancelFunction();
});


if (OS_ANDROID) {
    $.playIchingWindow.addEventListener('android:back', function(e) {
        cancelFunction();
    });
}
