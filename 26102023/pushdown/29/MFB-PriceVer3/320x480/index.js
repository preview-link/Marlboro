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



(lib.bg_tunnel = function() {
	this.initialize(img.bg_tunnel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,38);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,51);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,28);


(lib.dark = function() {
	this.initialize(img.dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,73);


(lib.lightmotor = function() {
	this.initialize(img.lightmotor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,72);


(lib.lighttunnel = function() {
	this.initialize(img.lighttunnel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,286);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.motor_ = function() {
	this.initialize(img.motor_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,130);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,56);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,32);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.0051,0.019,0.8952,0.8899);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-2.4,185,4.9);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.motor_();
	this.instance.setTransform(-83,-57.1,0.8783,0.8783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-57.1,166,114.2);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lightmotor();
	this.instance.setTransform(-189.3,-63.65,1.7689,1.7689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.3,-63.6,378.6,127.30000000000001);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.motor_();
	this.instance.setTransform(-72.5,-49.85,0.7671,0.7671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-49.8,145,99.69999999999999);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lightmotor();
	this.instance.setTransform(-171.45,-57.65,1.6023,1.6023);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.4,-57.6,342.9,115.30000000000001);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn2();
	this.instance.setTransform(-84.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-25.5,169,51);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-15.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14,31,28);


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
	this.instance = new lib.btn1();
	this.instance.setTransform(-78,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-19,156,38);


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
	this.instance = new lib.t2();
	this.instance.setTransform(-80,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-16,152,32);


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
	this.instance = new lib.t1();
	this.instance.setTransform(-122,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-28,244,56);


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
	this.instance = new lib.dark();
	this.instance.setTransform(-160,-240);

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


(lib.lightt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("Egt6AAcMBIggXhMATVA7lMhIgAXig");
	var mask_graphics_26 = new cjs.Graphics().p("Egt6AAbMBIggXgMATVA7lMhIgAXig");
	var mask_graphics_27 = new cjs.Graphics().p("Egt6AAZMBIhgXgMATUA7mMhIhAXgg");
	var mask_graphics_28 = new cjs.Graphics().p("Egt5AAUMBIhgXcMATSA7mMhIhAXeg");
	var mask_graphics_29 = new cjs.Graphics().p("Egt5AAOMBIjgXZMATQA7nMhIjAXag");
	var mask_graphics_30 = new cjs.Graphics().p("Egt3AAGMBIkgXVMATLA7pMhIkAXWg");
	var mask_graphics_31 = new cjs.Graphics().p("Egt2gACMBImgXRMATHA7qMhImAXRg");
	var mask_graphics_32 = new cjs.Graphics().p("Egt1gAOMBIogXKMATDA7sMhIoAXKg");
	var mask_graphics_33 = new cjs.Graphics().p("EgtzgAbMBIrgXDMAS8A7uMhIrAXDg");
	var mask_graphics_34 = new cjs.Graphics().p("EgtxgAqMBItgW6MAS2A7vMhItAW7g");
	var mask_graphics_35 = new cjs.Graphics().p("EgtugA7MBIwgWxMAStA7yMhIwAWxg");
	var mask_graphics_36 = new cjs.Graphics().p("EgtsgBNMBI0gWnMASlA71MhI0AWng");
	var mask_graphics_37 = new cjs.Graphics().p("EgtpgBiMBI3gWbMAScA74MhI3AWbg");
	var mask_graphics_38 = new cjs.Graphics().p("EgtlgB4MBI6gWPMASRA77MhI6AWPg");
	var mask_graphics_39 = new cjs.Graphics().p("EgtigCQMBI/gWBMASGA7+MhI/AWBg");
	var mask_graphics_40 = new cjs.Graphics().p("EgtegCqMBJDgVyMAR6A8BMhJDAVzg");
	var mask_graphics_41 = new cjs.Graphics().p("EgtagDGMBJIgViMARtA8FMhJIAVjg");
	var mask_graphics_42 = new cjs.Graphics().p("EgtVgDjMBJMgVSMARfA8JMhJMAVTg");
	var mask_graphics_43 = new cjs.Graphics().p("EgtRgEDMBJSgVAMARRA8OMhJSAVAg");
	var mask_graphics_44 = new cjs.Graphics().p("EgtMgEkMBJXgUtMARCA8SMhJXAUug");
	var mask_graphics_45 = new cjs.Graphics().p("EgtGgFHMBJcgUZMAQxA8XMhJcAUZg");
	var mask_graphics_46 = new cjs.Graphics().p("EgtAgFsMBJigUEMAQfA8cMhJiAUEg");
	var mask_graphics_47 = new cjs.Graphics().p("Egs6gGTMBJogTuMAQNA8hMhJoATug");
	var mask_graphics_48 = new cjs.Graphics().p("Egs0gG7MBJvgTXMAP6A8mMhJvATWg");
	var mask_graphics_49 = new cjs.Graphics().p("EgstgHmMBJ1gS+MAPmA8rMhJ1AS+g");
	var mask_graphics_50 = new cjs.Graphics().p("EgsmgISMBJ8gSkMAPRA8wMhJ8ASkg");
	var mask_graphics_51 = new cjs.Graphics().p("EgsegJAMBKCgSKMAO7A82MhKCASKg");
	var mask_graphics_52 = new cjs.Graphics().p("EgsWgJwMBKJgRuMAOkA88MhKJARtg");
	var mask_graphics_53 = new cjs.Graphics().p("EgsNgKiMBKQgRQMAOLA9AMhKQARRg");
	var mask_graphics_54 = new cjs.Graphics().p("EgsEgLVMBKWgQzMANzA9HMhKWAQyg");
	var mask_graphics_55 = new cjs.Graphics().p("Egr7gMLMBKegQTMANZA9NMhKeAQTg");
	var mask_graphics_56 = new cjs.Graphics().p("EgrxgNCMBKlgPyMAM+A9SMhKlAPyg");
	var mask_graphics_57 = new cjs.Graphics().p("EgrngN7MBKsgPQMAMjA9XMhKsAPRg");
	var mask_graphics_58 = new cjs.Graphics().p("EgrcgO1MBKzgOuMAMGA9eMhKzAOtg");
	var mask_graphics_59 = new cjs.Graphics().p("EgrRgPyMBK6gOJMALpA9jMhK6AOKg");
	var mask_graphics_60 = new cjs.Graphics().p("EgrFgQwMBLBgNkMALKA9pMhLBANkg");
	var mask_graphics_61 = new cjs.Graphics().p("Egq4gRvMBLHgM+MAKqA9uMhLHAM+g");
	var mask_graphics_62 = new cjs.Graphics().p("EgqrgSxMBLOgMWMAKJA90MhLOAMWg");
	var mask_graphics_63 = new cjs.Graphics().p("EgqegT0MBLVgLuMAJoA96MhLVALug");
	var mask_graphics_64 = new cjs.Graphics().p("EgqQgU4MBLbgLEMAJGA9+MhLbALEg");
	var mask_graphics_65 = new cjs.Graphics().p("EgqBgV/MBLhgKYMAIiA+DMhLhAKZg");
	var mask_graphics_66 = new cjs.Graphics().p("EgpygXGMBLngJtMAH+A+IMhLnAJtg");
	var mask_graphics_67 = new cjs.Graphics().p("EgpigYQMBLsgI/MAHZA+NMhLsAI/g");
	var mask_graphics_68 = new cjs.Graphics().p("EgpSgZaMBLygIRMAGzA+RMhLyAIRg");
	var mask_graphics_69 = new cjs.Graphics().p("EgpBganMBL3gHhMAGMA+WMhL3AHhg");
	var mask_graphics_70 = new cjs.Graphics().p("Egovgb0MBL7gGwMAFkA+ZMhL7AGwg");
	var mask_graphics_71 = new cjs.Graphics().p("EgpNgbHMBLzgIEMAGoA+TMhLzAIEg");
	var mask_graphics_72 = new cjs.Graphics().p("EgpogaWMBLpgJdMAHxA+KMhLoAJdg");
	var mask_graphics_73 = new cjs.Graphics().p("Egn3gZhMBLcgK8MAI/A9/MhLbAK8g");
	var mask_graphics_74 = new cjs.Graphics().p("Egl/gYpMBLMgMgMAKSA9zMhLMAMgg");
	var mask_graphics_75 = new cjs.Graphics().p("EgkAgXtMBK5gOIMALnA9jMhK6AOIg");
	var mask_graphics_76 = new cjs.Graphics().p("Egh9gWwMBKlgPxMAM+A9SMhKlAPxg");
	var mask_graphics_77 = new cjs.Graphics().p("A/21xMBKNgRbMAOUA8+MhKNARbg");
	var mask_graphics_78 = new cjs.Graphics().p("A9v0zMBJzgTDMAPqA8qMhJzATDg");
	var mask_graphics_79 = new cjs.Graphics().p("A7rz2MBJZgUnMAQ8A8UMhJZAUng");
	var mask_graphics_80 = new cjs.Graphics().p("A5ty8MBI+gWEMASIA79MhI9AWEg");
	var mask_graphics_81 = new cjs.Graphics().p("A35yHMBIjgXYMATOA7nMhIjAXYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:-274.9262,y:384.2282}).wait(1).to({graphics:mask_graphics_26,x:-274.704,y:384.1566}).wait(1).to({graphics:mask_graphics_27,x:-274.0352,y:383.9361}).wait(1).to({graphics:mask_graphics_28,x:-272.917,y:383.5673}).wait(1).to({graphics:mask_graphics_29,x:-271.3463,y:383.0493}).wait(1).to({graphics:mask_graphics_30,x:-269.3202,y:382.381}).wait(1).to({graphics:mask_graphics_31,x:-266.8358,y:381.5613}).wait(1).to({graphics:mask_graphics_32,x:-263.8901,y:380.5893}).wait(1).to({graphics:mask_graphics_33,x:-260.4804,y:379.4638}).wait(1).to({graphics:mask_graphics_34,x:-256.6038,y:378.1838}).wait(1).to({graphics:mask_graphics_35,x:-252.2576,y:376.7482}).wait(1).to({graphics:mask_graphics_36,x:-247.439,y:375.1559}).wait(1).to({graphics:mask_graphics_37,x:-242.1454,y:373.406}).wait(1).to({graphics:mask_graphics_38,x:-236.3743,y:371.4973}).wait(1).to({graphics:mask_graphics_39,x:-230.123,y:369.4287}).wait(1).to({graphics:mask_graphics_40,x:-223.3892,y:367.1992}).wait(1).to({graphics:mask_graphics_41,x:-216.1706,y:364.8077}).wait(1).to({graphics:mask_graphics_42,x:-208.4647,y:362.2532}).wait(1).to({graphics:mask_graphics_43,x:-200.2695,y:359.5347}).wait(1).to({graphics:mask_graphics_44,x:-191.5829,y:356.6511}).wait(1).to({graphics:mask_graphics_45,x:-182.4029,y:353.6014}).wait(1).to({graphics:mask_graphics_46,x:-172.7278,y:350.3847}).wait(1).to({graphics:mask_graphics_47,x:-162.5557,y:347}).wait(1).to({graphics:mask_graphics_48,x:-151.885,y:343.4463}).wait(1).to({graphics:mask_graphics_49,x:-140.7146,y:339.7227}).wait(1).to({graphics:mask_graphics_50,x:-129.0429,y:335.8285}).wait(1).to({graphics:mask_graphics_51,x:-116.869,y:331.7627}).wait(1).to({graphics:mask_graphics_52,x:-104.192,y:327.5245}).wait(1).to({graphics:mask_graphics_53,x:-91.0111,y:323.1133}).wait(1).to({graphics:mask_graphics_54,x:-77.3259,y:318.5284}).wait(1).to({graphics:mask_graphics_55,x:-63.1361,y:313.7691}).wait(1).to({graphics:mask_graphics_56,x:-48.4417,y:308.8348}).wait(1).to({graphics:mask_graphics_57,x:-33.2429,y:303.7252}).wait(1).to({graphics:mask_graphics_58,x:-17.5402,y:298.4397}).wait(1).to({graphics:mask_graphics_59,x:-1.3344,y:292.9781}).wait(1).to({graphics:mask_graphics_60,x:15.3735,y:287.3401}).wait(1).to({graphics:mask_graphics_61,x:32.5819,y:281.5256}).wait(1).to({graphics:mask_graphics_62,x:50.2892,y:275.5346}).wait(1).to({graphics:mask_graphics_63,x:68.4932,y:269.3671}).wait(1).to({graphics:mask_graphics_64,x:87.1915,y:263.0235}).wait(1).to({graphics:mask_graphics_65,x:106.3811,y:256.504}).wait(1).to({graphics:mask_graphics_66,x:126.0587,y:249.8091}).wait(1).to({graphics:mask_graphics_67,x:146.2204,y:242.9396}).wait(1).to({graphics:mask_graphics_68,x:166.8622,y:235.8961}).wait(1).to({graphics:mask_graphics_69,x:187.9791,y:228.6799}).wait(1).to({graphics:mask_graphics_70,x:209.5249,y:221.3423}).wait(1).to({graphics:mask_graphics_71,x:237.6216,y:219.7718}).wait(1).to({graphics:mask_graphics_72,x:267.4485,y:218.0714}).wait(1).to({graphics:mask_graphics_73,x:285.2378,y:216.259}).wait(1).to({graphics:mask_graphics_74,x:303.906,y:214.3514}).wait(1).to({graphics:mask_graphics_75,x:323.2347,y:212.3698}).wait(1).to({graphics:mask_graphics_76,x:342.9551,y:210.3412}).wait(1).to({graphics:mask_graphics_77,x:362.745,y:208.2984}).wait(1).to({graphics:mask_graphics_78,x:382.2283,y:206.2801}).wait(1).to({graphics:mask_graphics_79,x:400.9785,y:204.331}).wait(1).to({graphics:mask_graphics_80,x:418.527,y:202.5007}).wait(1).to({graphics:mask_graphics_81,x:434.3736,y:200.8423}).wait(138));

	// light_motor_png
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(-292.25,418.5,1.757,1.757,0,0,0,165,-47);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.7567,scaleY:1.7565,rotation:-0.0031,x:-581.7732,y:501.0437},0).wait(1).to({scaleX:1.7556,scaleY:1.7548,rotation:-0.0124,x:-580.6412,y:500.8743},0).wait(1).to({scaleX:1.7538,scaleY:1.752,rotation:-0.028,x:-578.7515,y:500.5916},0).wait(1).to({scaleX:1.7513,scaleY:1.7481,rotation:-0.0498,x:-576.1015,y:500.1947},0).wait(1).to({scaleX:1.7481,scaleY:1.7431,rotation:-0.0779,x:-572.6887,y:499.6831},0).wait(1).to({scaleX:1.7442,scaleY:1.737,rotation:-0.1124,x:-568.5108,y:499.0561},0).wait(1).to({scaleX:1.7396,scaleY:1.7297,rotation:-0.1531,x:-563.5654,y:498.3128},0).wait(1).to({scaleX:1.7342,scaleY:1.7213,rotation:-0.2002,x:-557.8501,y:497.4523},0).wait(1).to({scaleX:1.7281,scaleY:1.7117,rotation:-0.2537,x:-551.3625,y:496.4736},0).wait(1).to({scaleX:1.7213,scaleY:1.701,rotation:-0.3135,x:-544.1005,y:495.3756},0).wait(1).to({scaleX:1.7137,scaleY:1.6892,rotation:-0.3798,x:-536.0617,y:494.1573},0).wait(1).to({scaleX:1.7054,scaleY:1.6762,rotation:-0.4524,x:-527.2441,y:492.8173},0).wait(1).to({scaleX:1.6963,scaleY:1.6621,rotation:-0.5316,x:-517.6454,y:491.3543},0).wait(1).to({scaleX:1.6866,scaleY:1.6468,rotation:-0.6172,x:-507.2636,y:489.7669},0).wait(1).to({scaleX:1.676,scaleY:1.6303,rotation:-0.7093,x:-496.0965,y:488.0537},0).wait(1).to({scaleX:1.6648,scaleY:1.6127,rotation:-0.8078,x:-484.1423,y:486.213},0).wait(1).to({scaleX:1.6527,scaleY:1.5938,rotation:-0.913,x:-471.399,y:484.2431},0).wait(1).to({scaleX:1.64,scaleY:1.5739,rotation:-1.0246,x:-457.8647,y:482.1424},0).wait(1).to({scaleX:1.6265,scaleY:1.5528,rotation:-1.1429,x:-443.5376,y:479.909},0).wait(1).to({scaleX:1.6123,scaleY:1.5305,rotation:-1.2677,x:-428.4159,y:477.5409},0).wait(1).to({scaleX:1.5973,scaleY:1.507,rotation:-1.3991,x:-412.4979,y:475.0361},0).wait(1).to({scaleX:1.5815,scaleY:1.4823,rotation:-1.5372,x:-395.782,y:472.3926},0).wait(1).to({scaleX:1.5649,scaleY:1.4564,rotation:-1.6819,x:-378.2667,y:469.6081},0).wait(1).to({scaleX:1.5476,scaleY:1.4294,rotation:-1.8332,x:-359.9504,y:466.6805},0).wait(1).to({scaleX:1.5296,scaleY:1.4011,rotation:-1.9913,x:-340.8319,y:463.6072},0).wait(1).to({scaleX:1.5108,scaleY:1.3717,rotation:-2.156,x:-320.9096,y:460.3859},0).wait(1).to({scaleX:1.4912,scaleY:1.3411,rotation:-2.3274,x:-300.1824,y:457.0141},0).wait(1).to({scaleX:1.4708,scaleY:1.3092,rotation:-2.5056,x:-278.6492,y:453.4891},0).wait(1).to({scaleX:1.4497,scaleY:1.2761,rotation:-2.6905,x:-256.3089,y:449.8082},0).wait(1).to({scaleX:1.4278,scaleY:1.2419,rotation:-2.8822,x:-233.1605,y:445.9687},0).wait(1).to({scaleX:1.4052,scaleY:1.2064,rotation:-3.0807,x:-209.2031,y:441.9677},0).wait(1).to({scaleX:1.3817,scaleY:1.1697,rotation:-3.2859,x:-184.436,y:437.8022},0).wait(1).to({scaleX:1.3575,scaleY:1.1318,rotation:-3.498,x:-158.8585,y:433.4693},0).wait(1).to({scaleX:1.3325,scaleY:1.0927,rotation:-3.7169,x:-132.47,y:428.9657},0).wait(1).to({scaleX:1.3067,scaleY:1.0524,rotation:-3.9426,x:-105.2702,y:424.2884},0).wait(1).to({scaleX:1.2801,scaleY:1.0108,rotation:-4.1752,x:-77.2587,y:419.434},0).wait(1).to({scaleX:1.2528,scaleY:0.968,rotation:-4.4147,x:-48.4353,y:414.3993},0).wait(1).to({scaleX:1.2246,scaleY:0.9239,rotation:-4.661,x:-18.8,y:409.1808},0).wait(1).to({scaleX:1.1957,scaleY:0.8787,rotation:-4.9143,x:11.6472,y:403.775},0).wait(1).to({scaleX:1.166,scaleY:0.8322,rotation:-5.1744,x:42.906,y:398.1784},0).wait(1).to({scaleX:1.1355,scaleY:0.7844,rotation:-5.4415,x:74.9761,y:392.3873},0).wait(1).to({regX:165.2,regY:-47,scaleX:1.1042,scaleY:0.7355,rotation:-5.7156,x:285.75,y:333.9},0).wait(1).to({regX:0,regY:0,x:119.0246,y:382.3536},0).wait(1).to({x:130.6339,y:378.1545},0).wait(1).to({x:142.5242,y:373.8538},0).wait(1).to({regX:165.2,regY:-47,x:332.75,y:316.9},0).wait(1).to({regX:0,regY:0,scaleX:1.0349,x:166.0933,y:368.3219,alpha:0.8984},0).wait(1).to({scaleX:0.9641,x:177.749,y:367.1672,alpha:0.7944},0).wait(1).to({scaleX:0.8916,x:189.6633,y:365.9869,alpha:0.6882},0).wait(1).to({scaleX:0.8176,x:201.8364,y:364.7811,alpha:0.5796},0).wait(1).to({regX:165.3,regY:-46.9,scaleX:0.742,x:332.75,y:316.95,alpha:0.4688},0).wait(1).to({regX:0,regY:0,scaleX:0.8299,x:199.6841,y:364.8836,alpha:0.3551},0).wait(1).to({scaleX:0.9195,x:184.9255,y:366.3455,alpha:0.239},0).wait(1).to({scaleX:1.011,x:169.8709,y:367.8369,alpha:0.1207},0).wait(1).to({regX:165.2,regY:-47,scaleX:1.1042,x:332.75,y:316.9,alpha:0},0).wait(139));

	// light_motor_png
	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.setTransform(-460.2,416.35,1.757,1.757,0,0,0,188,-47.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.7567,scaleY:1.7565,rotation:-0.0017,x:-790.0711,y:500.4348},0).wait(1).to({scaleX:1.7558,scaleY:1.7548,rotation:-0.007,x:-788.7826,y:500.2387},0).wait(1).to({scaleX:1.7542,scaleY:1.752,rotation:-0.0157,x:-786.6316,y:499.9114},0).wait(1).to({scaleX:1.7521,scaleY:1.7481,rotation:-0.028,x:-783.6151,y:499.4521},0).wait(1).to({scaleX:1.7493,scaleY:1.7431,rotation:-0.0438,x:-779.7304,y:498.8605},0).wait(1).to({scaleX:1.7458,scaleY:1.737,rotation:-0.0631,x:-774.9746,y:498.1357},0).wait(1).to({scaleX:1.7418,scaleY:1.7297,rotation:-0.086,x:-769.345,y:497.2771},0).wait(1).to({scaleX:1.7371,scaleY:1.7213,rotation:-0.1125,x:-762.8387,y:496.284},0).wait(1).to({scaleX:1.7318,scaleY:1.7117,rotation:-0.1425,x:-755.4531,y:495.1557},0).wait(1).to({scaleX:1.7258,scaleY:1.701,rotation:-0.1761,x:-747.1854,y:493.8912},0).wait(1).to({scaleX:1.7192,scaleY:1.6892,rotation:-0.2134,x:-738.0331,y:492.4898},0).wait(1).to({scaleX:1.7119,scaleY:1.6762,rotation:-0.2542,x:-727.9934,y:490.9505},0).wait(1).to({scaleX:1.704,scaleY:1.6621,rotation:-0.2987,x:-717.0638,y:489.2724},0).wait(1).to({scaleX:1.6955,scaleY:1.6468,rotation:-0.3468,x:-705.2417,y:487.4545},0).wait(1).to({scaleX:1.6863,scaleY:1.6303,rotation:-0.3985,x:-692.5247,y:485.4957},0).wait(1).to({scaleX:1.6765,scaleY:1.6127,rotation:-0.4539,x:-678.9102,y:483.3949},0).wait(1).to({scaleX:1.666,scaleY:1.5939,rotation:-0.513,x:-664.3958,y:481.1511},0).wait(1).to({scaleX:1.6549,scaleY:1.5739,rotation:-0.5757,x:-648.9792,y:478.7629},0).wait(1).to({scaleX:1.6431,scaleY:1.5528,rotation:-0.6422,x:-632.658,y:476.2293},0).wait(1).to({scaleX:1.6306,scaleY:1.5305,rotation:-0.7123,x:-615.4298,y:473.5489},0).wait(1).to({scaleX:1.6175,scaleY:1.507,rotation:-0.7861,x:-597.2926,y:470.7204},0).wait(1).to({scaleX:1.6037,scaleY:1.4823,rotation:-0.8637,x:-578.244,y:467.7424},0).wait(1).to({scaleX:1.5893,scaleY:1.4564,rotation:-0.945,x:-558.282,y:464.6136},0).wait(1).to({scaleX:1.5742,scaleY:1.4294,rotation:-1.03,x:-537.4045,y:461.3323},0).wait(1).to({scaleX:1.5584,scaleY:1.4011,rotation:-1.1188,x:-515.6093,y:457.8973},0).wait(1).to({scaleX:1.542,scaleY:1.3717,rotation:-1.2114,x:-492.8947,y:454.3068},0).wait(1).to({scaleX:1.5249,scaleY:1.3411,rotation:-1.3077,x:-469.2586,y:450.5592},0).wait(1).to({scaleX:1.5071,scaleY:1.3092,rotation:-1.4078,x:-444.6993,y:446.6531},0).wait(1).to({scaleX:1.4887,scaleY:1.2762,rotation:-1.5117,x:-419.215,y:442.5865},0).wait(1).to({scaleX:1.4696,scaleY:1.2419,rotation:-1.6194,x:-392.8039,y:438.3579},0).wait(1).to({scaleX:1.4497,scaleY:1.2064,rotation:-1.7309,x:-365.4645,y:433.9654},0).wait(1).to({scaleX:1.4293,scaleY:1.1697,rotation:-1.8463,x:-337.1951,y:429.4072},0).wait(1).to({scaleX:1.4081,scaleY:1.1318,rotation:-1.9654,x:-307.9944,y:424.6814},0).wait(1).to({scaleX:1.3863,scaleY:1.0927,rotation:-2.0884,x:-277.8608,y:419.7861},0).wait(1).to({scaleX:1.3638,scaleY:1.0523,rotation:-2.2152,x:-246.7932,y:414.7193},0).wait(1).to({scaleX:1.3406,scaleY:1.0108,rotation:-2.3459,x:-214.7903,y:409.4791},0).wait(1).to({scaleX:1.3167,scaleY:0.968,rotation:-2.4805,x:-181.8508,y:404.0633},0).wait(1).to({scaleX:1.2921,scaleY:0.9239,rotation:-2.6189,x:-147.9739,y:398.47},0).wait(1).to({scaleX:1.2668,scaleY:0.8787,rotation:-2.7612,x:-113.1585,y:392.6969},0).wait(1).to({scaleX:1.2409,scaleY:0.8322,rotation:-2.9074,x:-77.4037,y:386.742},0).wait(1).to({scaleX:1.2143,scaleY:0.7844,rotation:-3.0574,x:-40.7088,y:380.6029},0).wait(1).to({regX:188.2,regY:-47.9,scaleX:1.1869,scaleY:0.7354,rotation:-3.2114,x:217.8,y:326.6},0).wait(1).to({regX:0,regY:0,x:25.4302,y:371.5993},0).wait(1).to({x:54.8239,y:368.8822},0).wait(1).to({x:84.9291,y:366.0994},0).wait(1).to({regX:188.2,regY:-47.9,x:336.8,y:315.6},0).wait(1).to({regX:0,regY:0,scaleX:1.0588,scaleY:0.6589,rotation:-3.2113,x:139.659,y:358.2444,alpha:0.8994},0).wait(1).to({scaleX:0.9277,scaleY:0.5807,rotation:-3.2111,x:164.1128,y:353.1248,alpha:0.7966},0).wait(1).to({regX:188.3,regY:-47.8,scaleX:0.7937,scaleY:0.5007,rotation:-3.2109,x:336.8,y:315.6,alpha:0.6914},0).wait(1).to({regX:0,regY:0,scaleX:0.8559,scaleY:0.5379,rotation:-3.211,x:177.3267,y:350.2778,alpha:0.582},0).wait(1).to({scaleX:0.9195,scaleY:0.5758,rotation:-3.2111,x:165.4582,y:352.7568,alpha:0.4703},0).wait(1).to({scaleX:0.9843,scaleY:0.6145,rotation:-3.2112,x:153.342,y:355.2875,alpha:0.3562},0).wait(1).to({scaleX:1.0505,scaleY:0.654,x:140.978,y:357.8701,alpha:0.2398},0).wait(1).to({scaleX:1.1181,scaleY:0.6943,rotation:-3.2113,x:128.366,y:360.5044,alpha:0.1211},0).wait(1).to({regX:188.2,regY:-47.9,scaleX:1.1869,scaleY:0.7354,rotation:-3.2114,x:336.8,y:315.6,alpha:0},0).wait(137));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-568.9,0,916.2,612.5);


// stage content:
(lib._320x4801 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghw
	this.instance = new lib.ghw();
	this.instance.setTransform(0,407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219));

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(164,212,1,1,0,0,0,4,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({startPosition:0},0).to({regX:4.2,regY:-27.8,scaleX:0.8303,scaleY:0.8303,x:164.15,y:95.05},13,cjs.Ease.sineOut).wait(114).to({startPosition:0},0).to({regX:4.1,regY:-27.9,scaleX:1.0001,scaleY:1,x:164.1,y:183.7},9).wait(69));

	// Layer_18
	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(533.55,455);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({x:238.5,y:327},10).wait(49));

	// btn1_png
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.setTransform(500.15,311);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({x:163},10,cjs.Ease.sineOut).wait(10).to({startPosition:0},0).to({scaleX:0.9053,scaleY:0.9053,x:162.95,y:310.95},6).to({scaleX:1,scaleY:1,x:163,y:311},8).wait(35));

	// btn2_png
	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.setTransform(162.5,310.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({scaleX:0.9053,scaleY:0.9053,alpha:0.3516},6).to({scaleX:1,scaleY:1,alpha:1},11).wait(32));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("EgmHAfVMAAAg+pMBMPAAAMAAAA+pg");
	var mask_graphics_45 = new cjs.Graphics().p("EgmHgpLMBMOgABMAABA+pMhMOAABg");
	var mask_graphics_46 = new cjs.Graphics().p("EgmIgo+MBMOgAEMAADA+pMhMOAAEg");
	var mask_graphics_47 = new cjs.Graphics().p("EgmLgoqMBMPgAJMAAIA+pMhMPAAJg");
	var mask_graphics_48 = new cjs.Graphics().p("EgmNgoNMBMOgAQMAANA+pMhMOAAQg");
	var mask_graphics_49 = new cjs.Graphics().p("EgmRgnnMBMOgAaMAAVA+pMhMOAAag");
	var mask_graphics_50 = new cjs.Graphics().p("EgmWgm5MBMOgAlMAAfA+pMhMOAAlg");
	var mask_graphics_51 = new cjs.Graphics().p("EgmcgmCMBMPgAzMAAqA+pMhMPAAzg");
	var mask_graphics_52 = new cjs.Graphics().p("EgmiglCMBMOgBDMAA3A+pMhMOABDg");
	var mask_graphics_53 = new cjs.Graphics().p("Egmpgj5MBMOgBVMABFA+oMhMOABVg");
	var mask_graphics_54 = new cjs.Graphics().p("EgmxginMBMNgBpMABWA+oMhMNABpg");
	var mask_graphics_55 = new cjs.Graphics().p("Egm6ghMMBMMgCAMABpA+oMhMMAB/g");
	var mask_graphics_56 = new cjs.Graphics().p("EgnEgfoMBMMgCZMAB9A+nMhMMACZg");
	var mask_graphics_57 = new cjs.Graphics().p("EgnPgd6MBMLgC0MACUA+mMhMLAC0g");
	var mask_graphics_58 = new cjs.Graphics().p("EgnagdqMBMKgDRMACrA+mMhMKADRg");
	var mask_graphics_59 = new cjs.Graphics().p("EgnngdZMBMJgDxMADGA+kMhMJADxg");
	var mask_graphics_60 = new cjs.Graphics().p("Egn0gdHMBMHgETMADiA+iMhMHAETg");
	var mask_graphics_61 = new cjs.Graphics().p("EgoCgc0MBMFgE3MAEAA+gMhMFAE3g");
	var mask_graphics_62 = new cjs.Graphics().p("EgoQgcgMBMCgFeMAEfA+fMhMCAFeg");
	var mask_graphics_63 = new cjs.Graphics().p("EgofgcLMBL/gGGMAFAA+dMhL/AGGg");
	var mask_graphics_64 = new cjs.Graphics().p("Egovgb0MBL7gGwMAFkA+ZMhL7AGwg");
	var mask_graphics_65 = new cjs.Graphics().p("Ego/gbcMBL3gHdMAGIA+WMhL3AHdg");
	var mask_graphics_66 = new cjs.Graphics().p("EgpQgbDMBLzgILMAGuA+SMhLzAILg");
	var mask_graphics_67 = new cjs.Graphics().p("EgphgapMBLtgI7MAHWA+OMhLtAI7g");
	var mask_graphics_68 = new cjs.Graphics().p("EgpygaNMBLngJtMAH+A+IMhLnAJtg");
	var mask_graphics_69 = new cjs.Graphics().p("Egp2gZxMBLggKgMAIoA+DMhLgAKgg");
	var mask_graphics_70 = new cjs.Graphics().p("EgpfgZTMBLZgLVMAJUA98MhLZALVg");
	var mask_graphics_71 = new cjs.Graphics().p("EgpGgY1MBLQgMLMAKAA92MhLQAMLg");
	var mask_graphics_72 = new cjs.Graphics().p("EgosgYVMBLGgNDMAKuA9uMhLHANDg");
	var mask_graphics_73 = new cjs.Graphics().p("EgoRgW7MBK8gN6MALcA9lMhK9AN7g");
	var mask_graphics_74 = new cjs.Graphics().p("Egn2gTsMBKygOzMAMKA9cMhKxAO0g");
	var mask_graphics_75 = new cjs.Graphics().p("EgnZgQbMBKmgPsMAM5A9TMhKmAPsg");
	var mask_graphics_76 = new cjs.Graphics().p("Egm8gNIMBKagQmMANoA9JMhKZAQmg");
	var mask_graphics_77 = new cjs.Graphics().p("EgmegJ2MBKMgRfMAOYA8+MhKMARfg");
	var mask_graphics_78 = new cjs.Graphics().p("EgmAgGkMBJ/gSYMAPGA8zMhJ/ASYg");
	var mask_graphics_79 = new cjs.Graphics().p("EglhgDVMBJwgTPMAP0A8nMhJwATPg");
	var mask_graphics_80 = new cjs.Graphics().p("EglDgAKMBJigUFMAQhA8bMhJiAUFg");
	var mask_graphics_81 = new cjs.Graphics().p("EgklAC7MBJUgU5MARLA8PMhJTAU6g");
	var mask_graphics_82 = new cjs.Graphics().p("EgkHAF6MBJEgVsMAR2A8DMhJFAVtg");
	var mask_graphics_83 = new cjs.Graphics().p("EgjrAIwMBI2gWcMASdA74MhI2AWdg");
	var mask_graphics_84 = new cjs.Graphics().p("EgjPALcMBIogXJMATCA7sMhIoAXKg");
	var mask_graphics_85 = new cjs.Graphics().p("Egi1AN8MBIagXzMATkA7hMhIaAX0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:174.025,y:-327.45}).wait(1).to({graphics:mask_graphics_45,x:174.1472,y:-263.6699}).wait(1).to({graphics:mask_graphics_46,x:174.5165,y:-262.7484}).wait(1).to({graphics:mask_graphics_47,x:175.1363,y:-261.2013}).wait(1).to({graphics:mask_graphics_48,x:176.0103,y:-259.0196}).wait(1).to({graphics:mask_graphics_49,x:177.1418,y:-256.1945}).wait(1).to({graphics:mask_graphics_50,x:178.5343,y:-252.7176}).wait(1).to({graphics:mask_graphics_51,x:180.1908,y:-248.5808}).wait(1).to({graphics:mask_graphics_52,x:182.1142,y:-243.7764}).wait(1).to({graphics:mask_graphics_53,x:184.3071,y:-238.2974}).wait(1).to({graphics:mask_graphics_54,x:186.7718,y:-232.1375}).wait(1).to({graphics:mask_graphics_55,x:189.5104,y:-225.2913}).wait(1).to({graphics:mask_graphics_56,x:192.5243,y:-217.7542}).wait(1).to({graphics:mask_graphics_57,x:195.8145,y:-209.5229}).wait(1).to({graphics:mask_graphics_58,x:199.3815,y:-190.4175}).wait(1).to({graphics:mask_graphics_59,x:203.225,y:-169.6464}).wait(1).to({graphics:mask_graphics_60,x:207.344,y:-147.3865}).wait(1).to({graphics:mask_graphics_61,x:211.7365,y:-123.6482}).wait(1).to({graphics:mask_graphics_62,x:216.3997,y:-98.4472}).wait(1).to({graphics:mask_graphics_63,x:221.3295,y:-71.8055}).wait(1).to({graphics:mask_graphics_64,x:226.5249,y:-43.7022}).wait(1).to({graphics:mask_graphics_65,x:234.894,y:-15.1888}).wait(1).to({graphics:mask_graphics_66,x:243.6412,y:14.6127}).wait(1).to({graphics:mask_graphics_67,x:252.7508,y:45.649}).wait(1).to({graphics:mask_graphics_68,x:262.204,y:77.856}).wait(1).to({graphics:mask_graphics_69,x:270.6221,y:111.1584}).wait(1).to({graphics:mask_graphics_70,x:276.5522,y:145.4682}).wait(1).to({graphics:mask_graphics_71,x:282.6219,y:180.6839}).wait(1).to({graphics:mask_graphics_72,x:288.8099,y:216.6894}).wait(1).to({graphics:mask_graphics_73,x:295.0925,y:247.5067}).wait(1).to({graphics:mask_graphics_74,x:301.4431,y:267.2904}).wait(1).to({graphics:mask_graphics_75,x:307.8327,y:287.2401}).wait(1).to({graphics:mask_graphics_76,x:314.2298,y:307.2582}).wait(1).to({graphics:mask_graphics_77,x:320.5999,y:327.2378}).wait(1).to({graphics:mask_graphics_78,x:326.9063,y:347.063}).wait(1).to({graphics:mask_graphics_79,x:333.1097,y:366.6094}).wait(1).to({graphics:mask_graphics_80,x:339.1689,y:385.7445}).wait(1).to({graphics:mask_graphics_81,x:345.0403,y:404.3286}).wait(1).to({graphics:mask_graphics_82,x:350.6794,y:422.216}).wait(1).to({graphics:mask_graphics_83,x:356.0399,y:439.2562}).wait(1).to({graphics:mask_graphics_84,x:361.0755,y:455.2955}).wait(1).to({graphics:mask_graphics_85,x:365.7322,y:470.1558}).wait(134));

	// Layer_10
	this.instance_5 = new lib.lighttunnel();
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(175));

	// Layer_2
	this.instance_6 = new lib.Tween20("synched",0);
	this.instance_6.setTransform(424.45,398.75);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81).to({_off:false},0).to({x:99.45},14,cjs.Ease.sineOut).wait(35).to({startPosition:0},0).to({x:-269.5},11,cjs.Ease.sineOut).wait(78));

	// t1_png
	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.setTransform(536.15,267,0.5714,0.5714,0,0,0,0.1,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:162,alpha:1},14,cjs.Ease.sineOut).wait(35).to({startPosition:0},0).to({x:-139},11,cjs.Ease.sineOut).wait(78));

	// t2_png
	this.instance_8 = new lib.Tween11("synched",0);
	this.instance_8.setTransform(162,274);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92).to({_off:false},0).to({y:311},7,cjs.Ease.sineIn).wait(31).to({startPosition:0},0).to({x:-139},11,cjs.Ease.sineOut).wait(78));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egr0AmIIgU9DQFekbG+k6QN9p2HhijQHWifQyFlQD6BTIHDFQGMCXBuAVQChAgBTAfQBbAkAvA2QAuA0AWBdQARBLANCcIghFdQgeFbANgGIDmMCI2+KUg");
	mask_1.setTransform(29.525,249);

	// Layer_7
	this.instance_9 = new lib.lightt();
	this.instance_9.setTransform(160,240,1,1,0,0,0,160,240);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(219));

	// motor__png
	this.instance_10 = new lib.Tween17("synched",0);
	this.instance_10.setTransform(-225.6,415,1.757,1.757);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(1).to({scaleX:1.7565,scaleY:1.7565,x:-225.3171,y:414.9525},0).wait(1).to({scaleX:1.7549,scaleY:1.7549,x:-224.467,y:414.81},0).wait(1).to({scaleX:1.7522,scaleY:1.7522,x:-223.0479,y:414.5719},0).wait(1).to({scaleX:1.7484,scaleY:1.7484,x:-221.0577,y:414.2381},0).wait(1).to({scaleX:1.7435,scaleY:1.7435,x:-218.4947,y:413.8082},0).wait(1).to({scaleX:1.7375,scaleY:1.7375,x:-215.3568,y:413.2818},0).wait(1).to({scaleX:1.7304,scaleY:1.7304,x:-211.6423,y:412.6588},0).wait(1).to({scaleX:1.7222,scaleY:1.7222,x:-207.3491,y:411.9386},0).wait(1).to({scaleX:1.7129,scaleY:1.7129,x:-202.4755,y:411.1211},0).wait(1).to({scaleX:1.7025,scaleY:1.7025,x:-197.0195,y:410.206},0).wait(1).to({scaleX:1.691,scaleY:1.691,x:-190.9794,y:409.1928},0).wait(1).to({scaleX:1.6784,scaleY:1.6784,x:-184.3531,y:408.0813},0).wait(1).to({scaleX:1.6646,scaleY:1.6646,x:-177.139,y:406.8712},0).wait(1).to({scaleX:1.6498,scaleY:1.6498,x:-169.3351,y:405.5622},0).wait(1).to({scaleX:1.6337,scaleY:1.6337,x:-160.9397,y:404.154},0).wait(1).to({scaleX:1.6166,scaleY:1.6166,x:-151.951,y:402.6462},0).wait(1).to({scaleX:1.5983,scaleY:1.5983,x:-142.3671,y:401.0387},0).wait(1).to({scaleX:1.5789,scaleY:1.5789,x:-132.1864,y:399.331},0).wait(1).to({scaleX:1.5584,scaleY:1.5584,x:-121.407,y:397.5228},0).wait(1).to({scaleX:1.5367,scaleY:1.5367,x:-110.0272,y:395.614},0).wait(1).to({scaleX:1.5138,scaleY:1.5138,x:-98.0453,y:393.6042},0).wait(1).to({scaleX:1.4898,scaleY:1.4898,x:-85.4596,y:391.4931},0).wait(1).to({scaleX:1.4647,scaleY:1.4647,x:-72.2685,y:389.2804},0).wait(1).to({scaleX:1.4384,scaleY:1.4384,x:-58.4701,y:386.9659},0).wait(1).to({scaleX:1.4109,scaleY:1.4109,x:-44.063,y:384.5493},0).wait(1).to({scaleX:1.3823,scaleY:1.3823,x:-29.0455,y:382.0303},0).wait(1).to({scaleX:1.3525,scaleY:1.3525,x:-13.4159,y:379.4086},0).wait(1).to({scaleX:1.3215,scaleY:1.3215,x:2.8272,y:376.684},0).wait(1).to({scaleX:1.2893,scaleY:1.2893,x:19.6854,y:373.8562},0).wait(1).to({scaleX:1.256,scaleY:1.256,x:37.1603,y:370.925},0).wait(1).to({scaleX:1.2215,scaleY:1.2215,x:55.2533,y:367.8901},0).wait(1).to({scaleX:1.1858,scaleY:1.1858,x:73.966,y:364.7513},0).wait(1).to({scaleX:1.149,scaleY:1.149,x:93.2996,y:361.5083},0).wait(1).to({scaleX:1.1109,scaleY:1.1109,x:113.2557,y:358.1609},0).wait(1).to({scaleX:1.0717,scaleY:1.0717,x:133.8356,y:354.7089},0).wait(1).to({scaleX:1.0313,scaleY:1.0313,x:155.0407,y:351.152},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:176.8722,y:347.49},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,x:199.3314,y:343.7227},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,x:222.4196,y:339.8499},0).wait(1).to({scaleX:0.8576,scaleY:0.8576,x:246.1379,y:335.8715},0).wait(1).to({scaleX:0.8111,scaleY:0.8111,x:270.4876,y:331.7871},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:295.4696,y:327.5967},0).wait(1).to({scaleX:0.7147,scaleY:0.7147,x:321.085,y:323.3},0).wait(1).to({scaleX:0.6646,scaleY:0.6646,x:347.335,y:318.8969},0).wait(1).to({scaleX:0.6133,scaleY:0.6133,x:374.2204,y:314.3871},0).wait(1).to({scaleX:0.5609,scaleY:0.5609,x:401.7422,y:309.7707},0).wait(1).to({scaleX:0.5072,scaleY:0.5072,x:429.9012,y:305.0473},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:458.6983,y:300.217},0).wait(1).to({scaleX:0.3961,scaleY:0.3961,x:488.1343,y:295.2794},0).wait(1).to({scaleX:0.3388,scaleY:0.3388,x:518.2098,y:290.2346},0).wait(1).to({scaleX:0.2802,scaleY:0.2802,x:548.9256,y:285.0824},0).wait(1).to({scaleX:0.2204,scaleY:0.2204,x:580.2821,y:279.8227},0).wait(1).to({scaleX:0.1594,scaleY:0.1594,x:612.28,y:274.4554},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,x:644.9197,y:268.9805},0).wait(1).to({regY:3,scaleX:0.0337,scaleY:0.0337,x:678.2,y:263.4},0).wait(139));

	// motor__png
	this.instance_11 = new lib.Tween19("synched",0);
	this.instance_11.setTransform(-416.25,404.95,1.757,1.757);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},0).wait(1).to({scaleX:1.7565,scaleY:1.7565,x:-415.9085,y:404.9086},0).wait(1).to({scaleX:1.7549,scaleY:1.7549,x:-414.8826,y:404.7843},0).wait(1).to({scaleX:1.7522,scaleY:1.7522,x:-413.1698,y:404.5767},0).wait(1).to({scaleX:1.7484,scaleY:1.7484,x:-410.7679,y:404.2856},0).wait(1).to({scaleX:1.7435,scaleY:1.7435,x:-407.6746,y:403.9107},0).wait(1).to({scaleX:1.7375,scaleY:1.7375,x:-403.8875,y:403.4517},0).wait(1).to({scaleX:1.7304,scaleY:1.7304,x:-399.4044,y:402.9084},0).wait(1).to({scaleX:1.7222,scaleY:1.7222,x:-394.223,y:402.2804},0).wait(1).to({scaleX:1.7129,scaleY:1.7129,x:-388.341,y:401.5675},0).wait(1).to({scaleX:1.7025,scaleY:1.7025,x:-381.7561,y:400.7695},0).wait(1).to({scaleX:1.691,scaleY:1.691,x:-374.4662,y:399.886},0).wait(1).to({scaleX:1.6784,scaleY:1.6784,x:-366.469,y:398.9167},0).wait(1).to({scaleX:1.6646,scaleY:1.6646,x:-357.7622,y:397.8615},0).wait(1).to({scaleX:1.6498,scaleY:1.6498,x:-348.3437,y:396.72},0).wait(1).to({scaleX:1.6337,scaleY:1.6337,x:-338.2113,y:395.492},0).wait(1).to({scaleX:1.6166,scaleY:1.6166,x:-327.3627,y:394.1772},0).wait(1).to({scaleX:1.5983,scaleY:1.5983,x:-315.796,y:392.7753},0).wait(1).to({scaleX:1.5789,scaleY:1.5789,x:-303.5088,y:391.2862},0).wait(1).to({scaleX:1.5584,scaleY:1.5584,x:-290.4991,y:389.7095},0).wait(1).to({scaleX:1.5367,scaleY:1.5367,x:-276.7648,y:388.0449},0).wait(1).to({scaleX:1.5138,scaleY:1.5138,x:-262.3038,y:386.2923},0).wait(1).to({scaleX:1.4898,scaleY:1.4898,x:-247.1141,y:384.4514},0).wait(1).to({scaleX:1.4647,scaleY:1.4647,x:-231.1936,y:382.5219},0).wait(1).to({scaleX:1.4384,scaleY:1.4384,x:-214.5403,y:380.5035},0).wait(1).to({scaleX:1.4109,scaleY:1.4109,x:-197.1523,y:378.3962},0).wait(1).to({scaleX:1.3823,scaleY:1.3823,x:-179.0276,y:376.1995},0).wait(1).to({scaleX:1.3525,scaleY:1.3525,x:-160.1643,y:373.9134},0).wait(1).to({scaleX:1.3215,scaleY:1.3215,x:-140.5604,y:371.5374},0).wait(1).to({scaleX:1.2893,scaleY:1.2893,x:-120.2141,y:369.0716},0).wait(1).to({scaleX:1.256,scaleY:1.256,x:-99.1236,y:366.5155},0).wait(1).to({scaleX:1.2215,scaleY:1.2215,x:-77.2871,y:363.869},0).wait(1).to({scaleX:1.1858,scaleY:1.1858,x:-54.7027,y:361.1318},0).wait(1).to({scaleX:1.149,scaleY:1.149,x:-31.3688,y:358.3038},0).wait(1).to({scaleX:1.1109,scaleY:1.1109,x:-7.2837,y:355.3848},0).wait(1).to({scaleX:1.0717,scaleY:1.0717,x:17.5542,y:352.3746},0).wait(1).to({scaleX:1.0313,scaleY:1.0313,x:43.1467,y:349.2728},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:69.4952,y:346.0795},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,x:96.6014,y:342.7943},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,x:124.4666,y:339.4172},0).wait(1).to({scaleX:0.8576,scaleY:0.8576,x:153.0923,y:335.9478},0).wait(1).to({scaleX:0.8111,scaleY:0.8111,x:182.48,y:332.3862},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:212.6308,y:328.732},0).wait(1).to({scaleX:0.7147,scaleY:0.7147,x:243.5462,y:324.9852},0).wait(1).to({scaleX:0.6646,scaleY:0.6646,x:275.2274,y:321.1455},0).wait(1).to({scaleX:0.6133,scaleY:0.6133,x:307.6755,y:317.2129},0).wait(1).to({scaleX:0.5609,scaleY:0.5609,x:340.8917,y:313.1873},0).wait(1).to({scaleX:0.5072,scaleY:0.5072,x:374.8769,y:309.0684},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:409.6323,y:304.8562},0).wait(1).to({scaleX:0.3961,scaleY:0.3961,x:445.1586,y:300.5505},0).wait(1).to({scaleX:0.3388,scaleY:0.3388,x:481.4569,y:296.1513},0).wait(1).to({scaleX:0.2802,scaleY:0.2802,x:518.5279,y:291.6584},0).wait(1).to({scaleX:0.2204,scaleY:0.2204,x:556.3722,y:287.0718},0).wait(1).to({scaleX:0.1594,scaleY:0.1594,x:594.9906,y:282.3914},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,x:634.3836,y:277.6171},0).wait(1).to({regY:1.5,scaleX:0.0337,scaleY:0.0337,x:674.55,y:272.75},0).wait(137));

	// dark
	this.instance_12 = new lib.dark();

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(160,240);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},14).to({state:[{t:this.instance_13}]},18).to({state:[{t:this.instance_13}]},43).to({state:[{t:this.instance_13}]},24).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({alpha:0},18).wait(43).to({startPosition:0},0).to({alpha:1},24).wait(120));

	// Layer_1
	this.instance_14 = new lib.bg_tunnel();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(219));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-202,158.9,807.8,339.1);
// library properties:
lib.properties = {
	id: '4559B31F8AB15145BF192D0EA03E60BC',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_tunnel.jpg", id:"bg_tunnel"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/cursor.png", id:"cursor"},
		{src:"images/dark.png", id:"dark"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/lightmotor.png", id:"lightmotor"},
		{src:"images/lighttunnel.png", id:"lighttunnel"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/motor_.png", id:"motor_"},
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
an.compositions['4559B31F8AB15145BF192D0EA03E60BC'] = {
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