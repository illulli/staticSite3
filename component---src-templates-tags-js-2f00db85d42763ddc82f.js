webpackJsonp([50739212244294],{202:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var u=a(4),n=l(u),d=a(7),r=l(d),s=a(!function(){var e=new Error('Cannot find module "./../components/Blog/PostList.js"');throw e.code="MODULE_NOT_FOUND",e}()),o=l(s),f=a(46),i=l(f),g=function(e){var t=e.pathContext,a=e.data;console.log("Tags tenplate");var l=t.tag,u=a.allJsonJson,d=u.edges,r=u.totalCount,s=r+" post"+(1===r?"":"s")+' tagged with "'+l+'"';return n.default.createElement("div",null,n.default.createElement("h1",null,s),n.default.createElement("ul",null,d.map(function(e){var t=e.node,a=t.path,l=t.value;return n.default.createElement("li",{key:a},n.default.createElement(i.default,{key:a,to:a},l))})),n.default.createElement(i.default,{key:"/tags",to:"/tags"},"All tags"),n.default.createElement(o.default,{posts:d}))};t.default=g,g.propTypes={pathContext:r.default.shape({tag:r.default.string.isRequired}),data:r.default.shape({allJsonJson:r.default.shape({totalCount:r.default.number.isRequired,edges:r.default.arrayOf(r.default.shape({node:r.default.shape({value:r.default.string.isRequired,path:r.default.string.isRequired,tags:r.default.arrayOf({tag:r.default.string.isRequired})})}).isRequired)})})};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-2f00db85d42763ddc82f.js.map