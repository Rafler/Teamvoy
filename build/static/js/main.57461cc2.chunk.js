(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){e.exports=n(244)},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=n(26),u=n(37),s=n(28),m=n(248),i=n(247),p=(n(132),function(e){var t=e.currentPokemon,n=e.setCurrentPokemon;return r.a.createElement("div",{className:"right-block",onClick:function(){return n({})}},r.a.createElement("div",{className:"pokemon-details"},r.a.createElement("img",{src:t.info.sprites.front_shiny,alt:"pokemon"}),r.a.createElement("h1",{className:"title"},"".concat(t.name," #").concat(t.info.id)),r.a.createElement("table",{className:"ui compact table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Type"),r.a.createElement("td",null,t.info.types.map(function(e){return e.type.name+" "}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Attack"),r.a.createElement("td",null,t.info.stats[4].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"Defense"),r.a.createElement("td",null,t.info.stats[3].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"HP"),r.a.createElement("td",null,t.info.stats[5].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"SP Attack"),r.a.createElement("td",null,t.info.stats[2].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"SP Defense"),r.a.createElement("td",null,t.info.stats[1].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"Speed"),r.a.createElement("td",null,t.info.stats[0].base_stat)),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",null,t.info.weight)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total moves"),r.a.createElement("td",null,t.info.moves.length))))))}),f=function(e){var t=e.pokemon,n=e.setCurrentPokemon;return r.a.createElement("div",{key:t.name,className:"card",onClick:function(){return n(t)}},r.a.createElement("img",{src:t.info.sprites.front_shiny,alt:"pokemon"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"header"},t.name),t.info.types.map(function(e){return r.a.createElement("span",{key:e.type.name,className:"type ".concat(e.type.name)},e.type.name)})))},E=(n(133),function(e){var t=e.pokemonsArr,n=e.setCurrentPokemon,a=e.loadMoreData;return r.a.createElement("div",{className:"left-block"},r.a.createElement("div",{className:"ui link cards"},t.every(function(e){return e.info})&&t.map(function(e){return r.a.createElement(f,{setCurrentPokemon:n,pokemon:e})})),r.a.createElement("button",{onClick:a,className:"ui primary button"},"Load More"))}),d=(n(134),function(e){var t=e.types,n=e.updatePokemons,o=e.pokemons,c=e.setCurrentPokemon,l=e.active,u=Object(a.useState)(""),m=Object(s.a)(u,2),i=m[0],p=m[1];return Object(a.useEffect)(function(){n(i?o.filter(function(e){return e.info.types.some(function(e){return e.type.name===i})}):o),c({})},[i,o,c,n]),Object(a.useEffect)(function(){p("")},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"POKEDEX"),r.a.createElement("div",{className:"filter-menu"},r.a.createElement("select",{value:i,onChange:function(e){var t=e.target;return p(t.value)},className:"ui selection dropdown"},r.a.createElement("option",{value:"",disabled:!0},"Choose your type:"),t.map(function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.name)})),r.a.createElement("button",{type:"reset",className:"negative ui button",onClick:function(){return p("")}},"Reset")))});var O=Object(l.b)(function(e){return{pokemons:e.pokemons,types:e.types}})(d),k=(n(135),function(e){var t=e.loadData,n=e.pokemons,o=e.loadMore,c=e.loadTypes,l=(e.types,Object(a.useState)({})),f=Object(s.a)(l,2),d=f[0],k=f[1],b=Object(a.useState)(!1),y=Object(s.a)(b,2),v=y[0],P=y[1],N=Object(a.useState)([]),h=Object(s.a)(N,2),j=h[0],_=h[1];function S(){P(!0),setTimeout(function(){return P(!1)},2e3)}return Object(a.useEffect)(function(){S(),t(),c()},[t,c]),Object(a.useEffect)(function(){_(Object(u.a)(n))},[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{active:v,inverted:!0},r.a.createElement(i.a,{inverted:!0,content:"Loading"})),r.a.createElement(O,{updatePokemons:_,setCurrentPokemon:k,active:v}),r.a.createElement("main",{className:"main-block"},r.a.createElement(E,{pokemonsArr:j,setCurrentPokemon:k,loadMoreData:function(){S(),k({}),t(o)}}),d.info&&r.a.createElement(p,{currentPokemon:d,setCurrentPokemon:k})))}),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon/?limit=12";return fetch("".concat(e)).then(function(e){return e.json()})},y={GET_POKEMONS:"GET_POKEMONS",GET_POKEMONS_INFO:"GET_POKEMONS_INFO",GET_POKEMONS_TYPES:"GET_POKEMONS_TYPES"},v=function(e){return function(t){b(e).then(function(e){var n;t((n=e,{type:y.GET_POKEMONS,pokemons:n}))})}},P=function(e){return function(t){b(e).then(function(e){var n;t((n=e,{type:y.GET_POKEMONS_INFO,pokemonInfo:n}))})}},N=function(){return function(e){b("http://pokeapi.co/api/v2/type").then(function(t){var n;e((n=t,{type:y.GET_POKEMONS_TYPES,types:n}))})}};var h=Object(l.b)(function(e){return{pokemons:e.pokemons,loadMore:e.loadMore,types:e.types}},function(e){return{loadData:function(t){return e(v(t))},loadTypes:function(){return e(N())}}})(k),j=n(36),_=n(113),S=n(114);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(S.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={pokemons:[],types:[]};var w=Object(j.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y.GET_POKEMONS:return t.pokemons.results.map(function(e){return P(e.url)(w.dispatch)}),T({},e,{pokemons:[].concat(Object(u.a)(e.pokemons),Object(u.a)(t.pokemons.results)),loadMore:t.pokemons.next});case y.GET_POKEMONS_INFO:return T({},e,{pokemons:e.pokemons.map(function(e){return e.name===t.pokemonInfo.name?T({},e,{info:t.pokemonInfo}):e})});case y.GET_POKEMONS_TYPES:return T({},e,{types:t.types.results});default:return e}},Object(j.a)(_.a));c.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(h,null)),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.57461cc2.chunk.js.map