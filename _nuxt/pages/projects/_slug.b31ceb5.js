(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4f277647",content,!0,{sourceMap:!1})},172:function(t,e,n){"use strict";var r=n(165);n.n(r).a},173:function(t,e,n){(e=n(33)(!1)).push([t.i,"",""]),t.exports=e},181:function(t,e,n){"use strict";n.r(e);n(162);var r={head:function(){return{title:this.project.title,description:this.project.content,meta:[{name:"twitter:title",content:this.project.title},{name:"twitter:description",content:this.project.content},{name:"twitter:image",content:"http://placehold.it/1200x600"},{name:"twitter:card",content:"summary_large_image"}]}},data:function(){return{slug:this.$route.params.slug}},computed:{project:function(){var t=this;return this.$store.state.projects.all.find((function(e){return e.slug===t.slug}))},relatedProjects:function(){var t=this;return this.$store.state.projects.all.filter((function(e){return e.slug!==t.slug}))}}},c=(n(172),n(10)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-column"},[n("img",{attrs:{src:t.project.banner,alt:t.project.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.project.title))]),t._v(" "),n("p",[t._v(t._s(t.project.content))])])}),[],!1,null,"7003a128",null);e.default=component.exports}}]);