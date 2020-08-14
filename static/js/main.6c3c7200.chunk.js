(this["webpackJsonpone-memory-app"]=this["webpackJsonpone-memory-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(19),a(1)),i=a(2),s=a(4),m=a(3),u=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"One Memory"),r.a.createElement("blockquote",null," \u201c A moment lasts all of a second, but the memory lives on forever ",r.a.createElement("span",{role:"img","aria-label":"sparked start"}," \u2728")," \u201e ")))},p=a(13),h=a(7),d=a.n(h);a(21);d.a.initializeApp({apiKey:"AIzaSyByQfh4ZpdiIzPV324W4n9SnIIILLl_v1g",authDomain:"onememoryapp-d4ec6.firebaseapp.com",databaseURL:"https://onememoryapp-d4ec6.firebaseio.com",projectId:"onememoryapp-d4ec6",storageBucket:"onememoryapp-d4ec6.appspot.com",messagingSenderId:"867043533998",appId:"1:867043533998:web:da7f0633e196d1d789793f"});var E=d.a,v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).deleteEntry=function(e){window.confirm("Are sure you want to delete this entry? \u274c ")&&(E.database().ref().child(e).remove(),alert("Deleted \u2705"))},e.state={entries:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a){var l=a[r];l.id=r,n.push(l)}e.setState({entries:n})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper entriesSection"},this.state.entries.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("button",{onClick:function(){return e.deleteEntry(t.id)},className:"removeEntry"},"\u2716"),r.a.createElement("p",null," Date: ",t.date),r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.comment),r.a.createElement("p",null,t.signature," "))})))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getPreviewContainerClassName=function(){return e.state.comment||e.state.date||e.state.title||e.state.signature?"preview":"hidden"},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleFormSubmit=function(t){t.preventDefault(),E.database().ref().push(e.state),e.setState({comment:"",date:"",title:"",signature:""})},e.state={comment:"",date:"",title:"",signature:""},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"wrapper description"},r.a.createElement("p",null,"oneMemory is an app that allows users to share their most treasured souvenirs with the world. Fill out the form, and let's your most precious memory lives forever in ",r.a.createElement("span",{className:"characters"},"380")," characters!")),r.a.createElement("section",{className:"formSection wrapper"},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"date"},"Entry Date:"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.date,type:"date",name:"date",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.title,type:"text",name:"title",placeholder:"Trip to France",required:!0,autoFocus:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"sign"},"Signature:"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.signature,type:"text",name:"signature",required:!0,placeholder:"John S."}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"newEntry"}),r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.comment,type:"text",name:"comment",id:"newEntry",rows:"5",cols:"40",maxLength:"380",placeholder:"Type out your Souvenir",required:!0,autoFocus:!0}),r.a.createElement("button",{type:"submit"},"Log Entry")),r.a.createElement("div",{className:this.getPreviewContainerClassName()},r.a.createElement("h2",null,"Preview"),r.a.createElement("div",{className:"userEntry"},r.a.createElement("p",null,this.state.date),r.a.createElement("h3",null," ",this.state.title),r.a.createElement("p",null," ",this.state.comment),r.a.createElement("p",null,this.state.signature," ")))),r.a.createElement("section",{className:"tableau  "},r.a.createElement("h2",null,"Pin Your Entry ",r.a.createElement("span",{className:"pinImg",role:"img","aria-label":"pin image"},"\ud83d\udccc")),r.a.createElement(v,null)))}}]),a}(n.Component),b=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Built by",r.a.createElement("a",{href:"https://luztherose.com",target:"_blank",rel:"noopener noreferrer"}," Luz De La Rosa"),", 2020"),r.a.createElement("p",null,"Created at",r.a.createElement("a",{href:"https://junocollege.com/"}," Juno College"))))},y=(a(24),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(f,null),r.a.createElement(b,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c3c7200.chunk.js.map