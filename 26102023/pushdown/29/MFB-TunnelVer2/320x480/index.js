(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.cahaya = function() {
	this.initialize(img.cahaya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,72);


(lib.full = function() {
	this.initialize(img.full);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.half = function() {
	this.initialize(img.half);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,300);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.lightbelakang = function() {
	this.initialize(img.lightbelakang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.motor = function() {
	this.initialize(img.motor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.pursue = function() {
	this.initialize(img.pursue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.pursuer = function() {
	this.initialize(img.pursuer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,85);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lightbelakang();
	this.instance.setTransform(-160,-239,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-239,320,480);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.half();
	this.instance.setTransform(-160,-240,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.full();
	this.instance.setTransform(240,-160,1.3333,1.3333,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-160,480,320);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cahaya();
	this.instance.setTransform(-160,-240,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.t1();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.t2();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.light();
	this.instance.setTransform(-160,-240,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.motor();
	this.instance.setTransform(-160,-240,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pursuer();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,281,85);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cursor();
	this.instance.setTransform(-8.6,-9,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-9,17.299999999999997,18);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pursue();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(-160,-240,320,480), null);


(lib.cta2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween26("synched",0);
	this.instance.setTransform(268.6,424.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).to({x:175.6,y:344},8).wait(47));

	// Layer_29
	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(160,262);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({alpha:1},6).wait(8).to({regX:5,regY:65,x:165,y:327},0).to({scaleX:0.9355,scaleY:0.9355,x:165.05},6).to({scaleX:1,scaleY:1,x:165},3).wait(38));

	// Layer_2
	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.setTransform(159.55,328.55,0.6076,0.6076,0,0,0,-21.7,-197.3);
	this.instance_2.alpha = 0.3008;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({_off:false},0).to({alpha:0.4883},8).to({regX:-21.6,scaleX:0.5691,scaleY:0.5691,y:328,alpha:0.5508},6).to({regX:-21.7,scaleX:0.6076,scaleY:0.6076,y:328.55,alpha:0.7305},3).to({alpha:1},10).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,502);


// stage content:
(lib.themaic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ghw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

	// Layer_9
	this.instance_1 = new lib.cta2();
	this.instance_1.setTransform(159.9,266.2,1.0021,1.0021,0,0,0,159.8,262.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250));

	// Layer_8
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(-160,240);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).to({x:160,alpha:1},12,cjs.Ease.sineOut).wait(36).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(84));

	// Layer_7
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(-160,240);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({x:160,alpha:1},11,cjs.Ease.sineOut).wait(53).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(84));

	// Layer_6
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(158.35,254.7,3.536,3.536,0,0,0,-1.9,14.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:3.4387,scaleY:3.4387,x:164.8511,y:205.8514,alpha:0.0202},0).wait(1).to({scaleX:3.3401,scaleY:3.3401,x:164.6496,y:207.2208,alpha:0.0407},0).wait(1).to({scaleX:3.2403,scaleY:3.2403,x:164.4456,y:208.6063,alpha:0.0614},0).wait(1).to({scaleX:3.1395,scaleY:3.1395,x:164.2397,y:210.0056,alpha:0.0824},0).wait(1).to({scaleX:3.0379,scaleY:3.0379,x:164.0321,y:211.4159,alpha:0.1035},0).wait(1).to({scaleX:2.9358,scaleY:2.9358,x:163.8235,y:212.8334,alpha:0.1247},0).wait(1).to({scaleX:2.8335,scaleY:2.8335,x:163.6144,y:214.2542,alpha:0.146},0).wait(1).to({scaleX:2.7313,scaleY:2.7313,x:163.4056,y:215.6732,alpha:0.1672},0).wait(1).to({scaleX:2.6297,scaleY:2.6297,x:163.1978,y:217.0848,alpha:0.1883},0).wait(1).to({scaleX:2.529,scaleY:2.529,x:162.992,y:218.4829,alpha:0.2092},0).wait(1).to({scaleX:2.4297,scaleY:2.4297,x:162.7893,y:219.8606,alpha:0.2298},0).wait(1).to({scaleX:2.3325,scaleY:2.3325,x:162.5905,y:221.2108,alpha:0.2501},0).wait(1).to({scaleX:2.2378,scaleY:2.2378,x:162.397,y:222.526,alpha:0.2697},0).wait(1).to({scaleX:2.1461,scaleY:2.1461,x:162.2097,y:223.7988,alpha:0.2888},0).wait(1).to({scaleX:2.058,scaleY:2.058,x:162.0296,y:225.0219,alpha:0.3071},0).wait(1).to({scaleX:1.974,scaleY:1.974,x:161.8579,y:226.189,alpha:0.3245},0).wait(1).to({scaleX:1.8944,scaleY:1.8944,x:161.6952,y:227.294,alpha:0.3411},0).wait(1).to({scaleX:1.8196,scaleY:1.8196,x:161.5424,y:228.3323,alpha:0.3566},0).wait(1).to({regX:-1.9,regY:14.2,scaleX:1.7499,scaleY:1.7499,x:158.1,y:254.15,alpha:0.3711},0).wait(1).to({regX:0,regY:0,scaleX:1.567,scaleY:1.567,x:161.0311,y:231.852,alpha:0.582},0).wait(1).to({scaleX:1.4251,scaleY:1.4251,x:160.7449,y:233.8318,alpha:0.7457},0).wait(1).to({scaleX:1.3221,scaleY:1.3221,x:160.537,y:235.2698,alpha:0.8645},0).wait(1).to({scaleX:1.2539,scaleY:1.2539,x:160.3996,y:236.2204,alpha:0.9431},0).wait(1).to({scaleX:1.2162,scaleY:1.2162,x:160.3235,y:236.7464,alpha:0.9866},0).wait(1).to({regX:-1.9,regY:14,scaleX:1.2046,scaleY:1.2046,x:158,y:254,alpha:1},0).to({scaleX:1,scaleY:1,x:158.05},7).wait(1).to({regX:0,regY:0,scaleX:0.6021,scaleY:0.6021,x:159.1525,y:245.5914,alpha:0.9169},0).wait(1).to({scaleX:0.3254,scaleY:0.3254,x:158.5978,y:249.4803,alpha:0.8591},0).wait(1).to({scaleX:0.1739,scaleY:0.1739,x:158.2941,y:251.6097,alpha:0.8274},0).wait(1).to({scaleX:0.0992,scaleY:0.0992,x:158.1444,y:252.6594,alpha:0.8118},0).wait(1).to({scaleX:0.0632,scaleY:0.0632,x:158.0723,y:253.1651,alpha:0.8043},0).wait(1).to({regX:-2.1,regY:14.1,scaleX:0.0463,scaleY:0.0463,x:157.95,y:254.05,alpha:0.8008},0).wait(1).to({regX:0,regY:0,scaleX:0.0428,scaleY:0.0428,x:155.1406,y:253.4484,alpha:0.4135},0).wait(1).to({scaleX:0.0409,scaleY:0.0409,x:153.4651,y:253.4762,alpha:0.1905},0).wait(1).to({scaleX:0.0398,scaleY:0.0398,x:152.5813,y:253.4909,alpha:0.0728},0).wait(1).to({scaleX:0.0393,scaleY:0.0393,x:152.1821,y:253.4975,alpha:0.0197},0).wait(1).to({scaleX:0.0392,scaleY:0.0392,x:152.0513,y:253.4997,alpha:0.0023},0).wait(1).to({regX:-2.6,regY:14.1,x:151.95,y:254.05,alpha:0},0).to({_off:true},1).wait(144));

	// Layer_4
	this.instance_5 = new lib.logo();

	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(160,240);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},26).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},120).to({state:[{t:this.instance_6}]},17).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(1).to({alpha:0.9379},0).wait(1).to({alpha:0.8746},0).wait(1).to({alpha:0.8104},0).wait(1).to({alpha:0.7456},0).wait(1).to({alpha:0.6805},0).wait(1).to({alpha:0.6155},0).wait(1).to({alpha:0.5513},0).wait(1).to({alpha:0.4884},0).wait(1).to({alpha:0.4274},0).wait(1).to({alpha:0.3692},0).wait(1).to({alpha:0.3143},0).wait(1).to({alpha:0.2633},0).wait(1).to({alpha:0.2167},0).wait(1).to({alpha:0.1748},0).wait(1).to({alpha:0.1377},0).wait(1).to({alpha:0.1056},0).wait(1).to({alpha:0.0781},0).wait(1).to({alpha:0.0553},0).wait(1).to({alpha:0.0368},0).wait(1).to({alpha:0.0223},0).wait(1).to({alpha:0.0115},0).wait(1).to({alpha:0.0042},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(120).to({_off:false,y:197.95},0).to({alpha:1},17,cjs.Ease.sineIn).wait(63));

	// Layer_3
	this.instance_7 = new lib.black();
	this.instance_7.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({alpha:0},23,cjs.Ease.sineOut).wait(91).to({alpha:1},34).wait(76));

	// Layer_5
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(156.1,269.05,1.7237,1.7237,0,0,0,-3.4,32.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({scaleX:1.0047,scaleY:1.0047,y:263.4,alpha:0.8516},15,cjs.Ease.quartIn).wait(1).to({regX:0,regY:0,scaleX:0.9038,scaleY:0.9038,x:159.1432,y:232.8716,alpha:0.8667},0).wait(1).to({scaleX:0.8066,scaleY:0.8066,x:158.7995,y:234.9153,alpha:0.8813},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,x:158.4725,y:236.86,alpha:0.8952},0).wait(1).to({scaleX:0.6273,scaleY:0.6273,x:158.1656,y:238.6847,alpha:0.9082},0).wait(1).to({scaleX:0.5471,scaleY:0.5471,x:157.882,y:240.3711,alpha:0.9202},0).wait(1).to({scaleX:0.4741,scaleY:0.4741,x:157.6239,y:241.9054,alpha:0.9312},0).wait(1).to({scaleX:0.4087,scaleY:0.4087,x:157.3927,y:243.2801,alpha:0.941},0).wait(1).to({scaleX:0.3509,scaleY:0.3509,x:157.1884,y:244.495,alpha:0.9497},0).wait(1).to({scaleX:0.3005,scaleY:0.3005,x:157.01,y:245.5559,alpha:0.9572},0).wait(1).to({scaleX:0.2568,scaleY:0.2568,x:156.8557,y:246.4737,alpha:0.9638},0).wait(1).to({scaleX:0.2193,scaleY:0.2193,x:156.7231,y:247.2618,alpha:0.9694},0).wait(1).to({scaleX:0.1873,scaleY:0.1873,x:156.6099,y:247.9351,alpha:0.9742},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:156.5135,y:248.5083,alpha:0.9783},0).wait(1).to({scaleX:0.1369,scaleY:0.1369,x:156.4316,y:248.9952,alpha:0.9818},0).wait(1).to({scaleX:0.1172,scaleY:0.1172,x:156.3622,y:249.4082,alpha:0.9847},0).wait(1).to({scaleX:0.1006,scaleY:0.1006,x:156.3033,y:249.7582,alpha:0.9872},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,x:156.2534,y:250.0546,alpha:0.9893},0).wait(1).to({scaleX:0.0745,scaleY:0.0745,x:156.2112,y:250.3056,alpha:0.9911},0).wait(1).to({scaleX:0.0644,scaleY:0.0644,x:156.1755,y:250.5178,alpha:0.9926},0).wait(1).to({scaleX:0.0559,scaleY:0.0559,x:156.1454,y:250.6973,alpha:0.9939},0).wait(1).to({scaleX:0.0487,scaleY:0.0487,x:156.1199,y:250.8488,alpha:0.995},0).wait(1).to({scaleX:0.0426,scaleY:0.0426,x:156.0984,y:250.9764,alpha:0.9959},0).wait(1).to({scaleX:0.0375,scaleY:0.0375,x:156.0804,y:251.0838,alpha:0.9967},0).wait(1).to({scaleX:0.0332,scaleY:0.0332,x:156.0652,y:251.1739,alpha:0.9973},0).wait(1).to({scaleX:0.0296,scaleY:0.0296,x:156.0525,y:251.2492,alpha:0.9979},0).wait(1).to({scaleX:0.0267,scaleY:0.0267,x:156.042,y:251.3119,alpha:0.9983},0).wait(1).to({scaleX:0.0242,scaleY:0.0242,x:156.0333,y:251.3638,alpha:0.9987},0).wait(1).to({scaleX:0.0222,scaleY:0.0222,x:156.0261,y:251.4065,alpha:0.999},0).wait(1).to({scaleX:0.0205,scaleY:0.0205,x:156.0202,y:251.4414,alpha:0.9992},0).wait(1).to({scaleX:0.0192,scaleY:0.0192,x:156.0155,y:251.4696,alpha:0.9994},0).wait(1).to({scaleX:0.0181,scaleY:0.0181,x:156.0117,y:251.4922,alpha:0.9996},0).wait(1).to({scaleX:0.0172,scaleY:0.0172,x:156.0087,y:251.51,alpha:0.9997},0).wait(1).to({scaleX:0.0166,scaleY:0.0166,x:156.0063,y:251.5239,alpha:0.9998},0).wait(1).to({scaleX:0.0161,scaleY:0.0161,x:156.0046,y:251.5345,alpha:0.9999},0).wait(1).to({scaleX:0.0157,scaleY:0.0157,x:156.0033,y:251.5423,alpha:1},0).wait(1).to({regX:-3.2,regY:35.6,scaleX:0.0154,scaleY:0.0154,x:155.95,y:252.05},0).wait(1).to({regX:0,regY:0,x:153.3551,y:251.501,alpha:0.5592},0).wait(1).to({x:151.6612,y:251.5016,alpha:0.2769},0).wait(1).to({x:150.6782,y:251.502,alpha:0.113},0).wait(1).to({x:150.1946,y:251.5022,alpha:0.0324},0).wait(1).to({x:150.0236,y:251.5023,alpha:0.0039},0).wait(1).to({regX:-3.2,regY:32.5,x:149.95,y:252.05,alpha:0},0).to({_off:true},1).wait(147));

	// Layer_10
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.setTransform(0,241,1,1,0,0,0,-160,1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).to({alpha:1},40).wait(65).to({startPosition:0},0).to({startPosition:0},24).wait(69));

	// Layer_16
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.setTransform(160,240);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84).to({_off:false},0).to({alpha:1},5).wait(68).to({startPosition:0},0).to({alpha:0},24).wait(69));

	// Layer_17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_57 = new cjs.Graphics().p("EggGAQpMAAAghRMBANAAAMAAAAhRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_graphics_57,x:149.5,y:76.55}).wait(32).to({graphics:null,x:0,y:0}).wait(161));

	// Layer_15
	this.instance_11 = new lib.Tween10("synched",0);
	this.instance_11.setTransform(152.15,236.95,1,1,-143.7975,0,0,-16.1,61.1);
	this.instance_11.alpha = 0.1992;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:-143.6383,x:102.9439,y:276.6092,alpha:0.2003},0).wait(1).to({rotation:-143.1562,x:102.6253,y:276.1811,alpha:0.2037},0).wait(1).to({rotation:-142.3452,x:102.097,y:275.4545,alpha:0.2093},0).wait(1).to({rotation:-141.1993,x:101.3678,y:274.4149,alpha:0.2173},0).wait(1).to({rotation:-139.7129,x:100.4521,y:273.0439,alpha:0.2277},0).wait(1).to({rotation:-137.8807,x:99.3713,y:271.3207,alpha:0.2405},0).wait(1).to({rotation:-135.6982,x:98.1546,y:269.222,alpha:0.2557},0).wait(1).to({rotation:-133.1614,x:96.8391,y:266.7237,alpha:0.2734},0).wait(1).to({rotation:-130.2673,x:95.4714,y:263.8018,alpha:0.2935},0).wait(1).to({rotation:-127.0139,x:94.1075,y:260.4346,alpha:0.3162},0).wait(1).to({rotation:-123.4005,x:92.8136,y:256.605,alpha:0.3414},0).wait(1).to({rotation:-119.4282,x:91.6657,y:252.3027,alpha:0.3691},0).wait(1).to({rotation:-115.0997,x:90.749,y:247.5278,alpha:0.3992},0).wait(1).to({rotation:-110.4201,x:90.1566,y:242.2936,alpha:0.4319},0).wait(1).to({rotation:-105.3973,x:89.9868,y:236.63,alpha:0.4669},0).wait(1).to({rotation:-100.0421,x:90.3397,y:230.5864,alpha:0.5042},0).wait(1).to({rotation:-94.369,x:91.3125,y:224.2343,alpha:0.5437},0).wait(1).to({rotation:-88.3968,x:92.9935,y:217.6685,alpha:0.5854},0).wait(1).to({regX:-16,regY:61.1,rotation:-82.1487,x:153.7,y:235.25,alpha:0.6289},0).wait(1).to({regX:0,regY:0,rotation:-75.4174,x:98.8226,y:204.1942,alpha:0.6593},0).wait(1).to({rotation:-68.4662,x:103.1545,y:197.5623,alpha:0.6907},0).wait(1).to({rotation:-61.3378,x:108.3743,y:191.3318,alpha:0.7229},0).wait(1).to({rotation:-54.0823,x:114.4159,y:185.6787,alpha:0.7557},0).wait(1).to({rotation:-46.7574,x:121.1663,y:180.7646,alpha:0.7888},0).wait(1).to({rotation:-39.4291,x:128.4678,y:176.7222,alpha:0.8219},0).wait(1).to({rotation:-32.171,x:136.1257,y:173.642,alpha:0.8547},0).wait(1).to({rotation:-25.0645,x:143.9193,y:171.5611,alpha:0.8868},0).wait(1).to({rotation:-18.198,x:151.6173,y:170.457,alpha:0.9178},0).wait(1).to({rotation:-11.6656,x:158.9941,y:170.246,alpha:0.9473},0).wait(1).to({rotation:-5.5659,x:165.8452,y:170.7885,alpha:0.9749},0).wait(1).to({regX:-16,regY:61,rotation:0,x:156,y:233,alpha:1},0).to({_off:true},1).wait(161));

	// Layer_11
	this.instance_12 = new lib.Tween12("synched",0);
	this.instance_12.setTransform(160,240);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({_off:false},0).to({alpha:1},32).wait(27).to({startPosition:0},0).to({alpha:0},24).wait(78));

	// Layer_2
	this.instance_13 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(250));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-240.7,-404.1,971.5,1457.3000000000002);
// library properties:
lib.properties = {
	id: 'D726BDEE2905E646A86B01C31A9339B1',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/cahaya.png", id:"cahaya"},
		{src:"images/cursor.png", id:"cursor"},
		{src:"images/full.png", id:"full"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/half.png", id:"half"},
		{src:"images/light.png", id:"light"},
		{src:"images/lightbelakang.png", id:"lightbelakang"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/motor.png", id:"motor"},
		{src:"images/pursue.png", id:"pursue"},
		{src:"images/pursuer.png", id:"pursuer"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D726BDEE2905E646A86B01C31A9339B1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;