(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__1owT0"}},12:function(t,e,n){t.exports={container:"Container_container__1pAMj"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactsForm_form__WgMZS",label:"ContactsForm_label__23otC",input:"ContactsForm_input__3fjWv",button:"ContactsForm_button__dwf5e"}},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(9),i=n.n(o),s=(n(19),n(13)),u=n(4),l=n(5),b=n(7),m=n(6),d=n(23),h=n(10),j=n(2),p=n.n(j),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onAddSubmit(a,c),t.props.onRepeat(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"name",value:e,onChange:this.handleInputChange})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{className:p.a.input,type:"number",name:"number",value:n,onChange:this.handleInputChange})]}),Object(a.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),C=n(11),O=n.n(C),v=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},x=n(3),_=n.n(x);function g(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:_.a.item,children:[Object(a.jsxs)("p",{className:_.a.title,children:[c,": ",r]}),Object(a.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var y=n(12),N=n.n(y);function S(t){var e=t.children;return Object(a.jsx)("div",{className:N.a.container,children:e})}var w=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.repeatContact=function(e,n){return!!t.state.contacts.find((function(t){return t.name===e||t.number===n}))},t.addContact=function(e,n){var a={id:Object(d.a)(),name:e,number:n},c=t.repeatContact(e,n);console.log(c),e&&n?c?alert("".concat(e," is already exist!")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}})):alert("You did not enter a name or number")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=n.toLowerCase(),r=e.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(a.jsxs)(S,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onAddSubmit:this.addContact,onRepeat:this.repeatContact}),Object(a.jsx)("h2",{children:"Contact"}),Object(a.jsx)(v,{value:n,onChange:this.changeFilter}),Object(a.jsx)(g,{contacts:r,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);n(20);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={item:"ContactList_item__3HXOF",button:"ContactList_button__1YHCi"}}},[[21,1,2]]]);
//# sourceMappingURL=main.c71353a8.chunk.js.map