(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);n(177),n(178);var a=n(0),r=n.n(a),i=n(147),o=n(157),u=n(149),c=function(e){return r.a.createElement("a",{style:{padding:Object(u.a)(.5)},href:e.link},e.name)};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,{title:"Spacey's Stuff"}),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"html { background-color: #292D3E; } div, h1, h2, h3 { color: #ffffff; } a { color: #82AAFF; background: none; text-shadow: none;}"}}),r.a.createElement("h1",{style:{textAlign:"center"}},"SpaceCats' Stuff"),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"center"}},"What a horrible night to have an overly simple home page."),r.a.createElement("p",{style:{textAlign:"center"}},"Here are some places you can find my stuff."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(c,{name:"Github",link:"https://github.com/SpaceCats64"}),r.a.createElement(c,{name:"Twitter",link:"https://twitter.com/kittensandals"})),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"center"}},"I also have a blog here at the ",r.a.createElement(i.Link,{to:"/blog/"},"SpaceBlog")))}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(146),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(148),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var f=n(33);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(155),r=n.n(a),i=n(156),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none",textShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a);var c=u.rhythm,l=u.scale},150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){var a=n(11),r=n(24),i=n(16),o=/"/g,u=function(e,t,n,a){var r=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},177:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(17)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},178:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-pages-index-js-a6b4bb8cef046ea4c50a.js.map