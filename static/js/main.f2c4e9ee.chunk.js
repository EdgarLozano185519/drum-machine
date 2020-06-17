(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),o=(a(14),a(8)),m=a.n(o),l=(a(15),a(2)),i=a(3),u=a(1),d=a(5),p=a(4),h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=document.querySelectorAll("#"+this.props.text)[1];e.currentTime=0,e.play(),e.volume=.5,document.getElementById("display").innerHTML=this.props.text}},{key:"render",value:function(){return c.a.createElement("div",{onClick:this.handleClick,className:"drum-pad",id:this.props.text,role:"button"},this.props.text,c.a.createElement("audio",{className:"clip",id:this.props.text,src:this.props.src}))}}]),a}(c.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleKey=n.handleKey.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"playSound",value:function(e){document.querySelectorAll("#"+e)[1].play()}},{key:"handleKey",value:function(e){switch(e.keyCode){case 81:this.playSound("Q");break;case 87:this.playSound("W");break;case 69:this.playSound("E");break;case 65:this.playSound("A");break;case 83:this.playSound("S");break;case 68:this.playSound("D");break;case 90:this.playSound("Z");break;case 88:this.playSound("X");break;case 67:this.playSound("C")}}},{key:"render",value:function(){return c.a.createElement("div",{id:"drum-machine",role:"region","aria-label":"DrumMachine"},c.a.createElement("h2",null,"Welcome to My Simple Drum Machine"),c.a.createElement("p",null,"Welcome to this small and simple drum machine. This is a fun little app where you can press buttons and trigger drum sounds with keys. You can click on the drum elements below. Alternatively, pressing the corresponding key on the keyboard, such as Q, W, or any of the keys, and a sound is played. Have fun composing simple music."),c.a.createElement(h,{text:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}),c.a.createElement(h,{text:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}),c.a.createElement(h,{text:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}),c.a.createElement(h,{text:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}),c.a.createElement(h,{text:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}),c.a.createElement(h,{text:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}),c.a.createElement(h,{text:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}),c.a.createElement(h,{text:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}),c.a.createElement(h,{text:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}))}}]),a}(c.a.Component);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})),c.a.createElement("h1",null,"The Awesome Drum Machine!"),c.a.createElement(y,null))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f2c4e9ee.chunk.js.map