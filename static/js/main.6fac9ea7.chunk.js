(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{256:function(e,c,t){},476:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),n=t(28),r=t.n(n),i=(t(255),t(256),t(53)),l=t(486),j=t(482),o=t(247),d=t(487),b=t(36),h=t.p+"static/media/logo.58644156.png",u=t(490),O=t(491),x=t(492),p=t(493),m=t(494),v=t(5);var g=function(){var e=Object(a.useState)(!0),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(null),r=Object(i.a)(n,2),g=r[0],y=r[1];return Object(a.useEffect)((function(){var e=function(){return y(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){s(!(g<768))}),[g]),Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsxs)("div",{className:"logo-container",children:[Object(v.jsx)(l.a,{src:h,size:64}),Object(v.jsx)(j.a.Title,{level:2,className:"logo",children:Object(v.jsx)(b.b,{to:"/",children:"Crypto App"})}),Object(v.jsx)(o.a,{className:"menu-control-container",onClick:function(){return s(!t)},children:Object(v.jsx)(u.a,{})})]}),t&&Object(v.jsxs)(d.a,{theme:"dark",children:[Object(v.jsx)(d.a.Item,{icon:Object(v.jsx)(O.a,{}),children:Object(v.jsx)(b.b,{to:"/",children:"Home"})}),Object(v.jsx)(d.a.Item,{icon:Object(v.jsx)(x.a,{}),children:Object(v.jsx)(b.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(v.jsx)(d.a.Item,{icon:Object(v.jsx)(p.a,{}),children:Object(v.jsx)(b.b,{to:"/exchanges",children:"Exchanges"})}),Object(v.jsx)(d.a.Item,{icon:Object(v.jsx)(m.a,{}),children:Object(v.jsx)(b.b,{to:"/news",children:"News"})})]})]})},y=t(144),f=t(50),N={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"01078b54a1msh98f5f93d14b1bbap127859jsn5192447e1781"};console.log("coinranking1.p.rapidapi.com","01078b54a1msh98f5f93d14b1bbap127859jsn5192447e1781");var w=function(e){return{url:e,headers:N}},C=Object(y.a)({reducerPath:"cryptoApi",baseQuery:Object(f.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return w("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return w("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return w("/coin/".concat(c,"/history/").concat(t))}}),getCryptoExchanges:e.query({query:function(){return w("/exchanges")}})}}}),k=C.useGetCryptosQuery,S=C.useGetCryptoDetailsQuery,P=C.useGetCryptoHistoryQuery,E=C.useGetCryptoExchangesQuery,A=t(485),M=t(108),T=t(62),q=t(481),F=t(31),$=t.n(F),D=t(479),I=function(){return Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)(D.a,{})})},L=function(e){var c=e.simplified,t=k(c?10:100),s=t.data,n=t.isFetching,r=Object(a.useState)([]),l=Object(i.a)(r,2),j=l[0],o=l[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),u=h[0],O=h[1];return Object(a.useEffect)((function(){var e,c,t=null===s||void 0===s||null===(e=s.data)||void 0===e||null===(c=e.coins)||void 0===c?void 0:c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));o(t)}),[s,u]),n?Object(v.jsx)(I,{}):Object(v.jsxs)(v.Fragment,{children:[!c&&Object(v.jsx)("div",{className:"search-crypto",children:Object(v.jsx)(A.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(v.jsx)(M.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(v.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(v.jsx)(b.b,{to:"/crypto/".concat(e.id),children:Object(v.jsxs)(q.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(v.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:""}),hoverable:!0,children:[Object(v.jsxs)("p",{children:["Price: ",$()(e.price)]}),Object(v.jsxs)("p",{children:["Market Cap: ",$()(e.marketCap)]}),Object(v.jsxs)("p",{children:["Daily Change: ",$()(e.change),"%"]})]})})},e.id)}))})]})},U=t(30),H=t(495),Q=t(496),V=t(497),G=t(498),W=t(148),z=t(499),J=t(248),R=t(484),_=t(34),B=t.n(_),Z=t(118),K=t(57),X=t.n(K),Y=t(147),ee=t(244),ce=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[],i=0;i<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i++){var l,j;n.push(t.data.history[i].price),r.push(new Date(t.data.history[i].timestamp).toLocaleDateString())}var o={labels:r,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0097ff",borderColor:"#0099ff"}]};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(M.a,{className:"chart-header",children:[Object(v.jsxs)(B.a,{level:2,className:"chart-title",children:[s," Price Chart "]}),Object(v.jsxs)(T.a,{className:"price-container",children:[Object(v.jsxs)(B.a,{className:"price-change",level:5,children:["Change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(v.jsxs)(B.a,{className:"current-price",level:5,children:["Current ",s," Price: $ ",a]})]})]}),Object(v.jsx)(ee.a,{data:o,options:{scales:{yAxis:[{ticks:{beginAtZero:!0}}]},radius:0,borderWidth:.75}})]})},te=function(){var e,c=Object(U.f)().coinId,t=Object(a.useState)("7d"),s=Object(i.a)(t,2),n=s[0],r=s[1],l=S(c),j=l.data,o=l.isFetching,d=P({coinId:c,timePeriod:n}).data,b=null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.coin;if(o)return Object(v.jsx)(I,{});var h=[{title:"Price to USD",value:"$ ".concat(b.price&&$()(b.price)),icon:Object(v.jsx)(H.a,{})},{title:"Rank",value:b.rank,icon:Object(v.jsx)(Q.a,{})},{title:"24h Volume",value:"$ ".concat(b.volume&&$()(b.volume)),icon:Object(v.jsx)(V.a,{})},{title:"Market Cap",value:"$ ".concat(b.marketCap&&$()(b.marketCap)),icon:Object(v.jsx)(H.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat($()(b.allTimeHigh.price)),icon:Object(v.jsx)(G.a,{})}],u=[{title:"Number Of Markets",value:b.numberOfMarkets,icon:Object(v.jsx)(x.a,{})},{title:"Number Of Exchanges",value:b.numberOfExchanges,icon:Object(v.jsx)(p.a,{})},{title:"Aprroved Supply",value:b.approvedSupply?Object(v.jsx)(W.a,{}):Object(v.jsx)(z.a,{}),icon:Object(v.jsx)(J.a,{})},{title:"Total Supply",value:"$ ".concat($()(b.totalSupply)),icon:Object(v.jsx)(J.a,{})},{title:"Circulating Supply",value:"$ ".concat($()(b.circulatingSupply)),icon:Object(v.jsx)(J.a,{})}];return Object(v.jsxs)(T.a,{className:"coin-detail-container",children:[Object(v.jsxs)(T.a,{className:"coin-heading-container",children:[Object(v.jsxs)(B.a,{level:2,className:"coin-name",children:[b.name," (",b.slug,") Price"]}),Object(v.jsxs)("p",{children:[b.name," live price in USD. View value statistics, market cap and supply."]}),Object(v.jsx)(R.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(v.jsx)(Z.Option,{children:e},e)}))}),Object(v.jsx)(ce,{coinHistory:d,currentPrice:$()(b.price),coinName:b.name}),Object(v.jsxs)(T.a,{className:"stats-container",children:[Object(v.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(v.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(v.jsxs)(B.a,{className:"coin-details-heading",children:[b.name," Value Statistics"]}),Object(v.jsxs)("p",{children:["An overview showing the stats of ",b.name]})]}),h.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(v.jsxs)(T.a,{className:"coin-stats",children:[Object(v.jsxs)(T.a,{className:"coin-stats-name",children:[Object(v.jsx)(X.a,{children:c}),Object(v.jsx)(X.a,{children:t})]}),Object(v.jsx)(X.a,{className:"stats",children:a})]})}))]}),Object(v.jsxs)(T.a,{className:"other-stats-info",children:[Object(v.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(v.jsx)(B.a,{className:"coin-details-heading",children:"Other Statistics"}),Object(v.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),u.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(v.jsxs)(T.a,{className:"coin-stats",children:[Object(v.jsxs)(T.a,{className:"coin-stats-name",children:[Object(v.jsx)(X.a,{children:c}),Object(v.jsx)(X.a,{children:t})]}),Object(v.jsx)(X.a,{className:"stats",children:a})]})}))]})]})]}),Object(v.jsxs)(T.a,{className:"coin-desc-link",children:[Object(v.jsx)(M.a,{className:"coin-desc",children:Object(v.jsxs)(B.a,{level:3,className:"coin-details-heading",children:["What is ",b.name,Object(Y.a)(b.description)]})}),Object(v.jsxs)(T.a,{className:"coin-links",children:[Object(v.jsxs)(B.a,{level:3,className:"coin-details-heading",children:[b.name," Links"]}),b.links.map((function(e){return Object(v.jsxs)(M.a,{className:"coin-link",children:[Object(v.jsx)(B.a,{level:5,className:"link-name",children:e.type}),Object(v.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ae=t(483);var se=function(){var e,c=k(10),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(v.jsx)(I,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(B.a,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(v.jsxs)(M.a,{gutter:[32,32],children:[Object(v.jsx)(T.a,{span:12,children:Object(v.jsx)(ae.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(v.jsx)(T.a,{span:12,children:Object(v.jsx)(ae.a,{title:"Total Exchanges",value:$()(s.totalExchanges)})}),Object(v.jsx)(T.a,{span:12,children:Object(v.jsx)(ae.a,{title:"Total Market Cap",value:$()(s.totalMarketCap)})}),Object(v.jsx)(T.a,{span:12,children:Object(v.jsx)(ae.a,{title:"Total 24h Volume",value:$()(s.total24hVolume)})}),Object(v.jsx)(T.a,{span:12,children:Object(v.jsx)(ae.a,{title:"Total Market",value:$()(s.totalMarkets)})})]}),Object(v.jsxs)("div",{className:"home-heading-container",children:[Object(v.jsx)(B.a,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies"}),Object(v.jsx)(B.a,{level:3,className:"show-more",children:Object(v.jsx)(b.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(v.jsx)(L,{simplified:!0}),Object(v.jsxs)("div",{className:"home-heading-container",children:[Object(v.jsx)(B.a,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(v.jsx)(B.a,{level:3,className:"show-more",children:Object(v.jsx)(b.b,{to:"/news",children:"Show More"})})]}),Object(v.jsx)(de,{simplified:!0})]})},ne={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"01078b54a1msh98f5f93d14b1bbap127859jsn5192447e1781"},re=Object(y.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(f.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ne}}})}}}),ie=re.useGetCryptoNewsQuery,le=t(242),je=t.n(le),oe="https://u.today/sites/default/files/2019-12/Cryptocurrency%20News.jpg",de=function(e){var c,t=e.simplified,s=Object(a.useState)("Cryptocurrency"),n=Object(i.a)(s,2),r=n[0],j=n[1],o=ie({newsCategory:r,count:t?6:12}).data,d=k(100).data;return(null===o||void 0===o?void 0:o.value)?Object(v.jsxs)(M.a,{gutter:[24,24],children:[!t&&Object(v.jsx)(T.a,{span:24,children:Object(v.jsxs)(R.a,{showSearch:!0,className:"select-news",placeholder:"Select a currency",optionFilterProp:"children",onChange:function(e){return j(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(v.jsx)(Z.Option,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===d||void 0===d||null===(c=d.data)||void 0===c?void 0:c.coins.map((function(e){return Object(v.jsx)(Z.Option,{value:e.name,children:e.name})}))]})}),o.value.map((function(e,c){var t,a,s,n,r,i;return Object(v.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(v.jsx)(q.a,{hoverable:!0,className:"news-card",children:Object(v.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(v.jsxs)("div",{className:"news-image-container",children:[Object(v.jsx)(B.a,{className:"news-title",level:4,children:e.name}),Object(v.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||oe,alt:"news"})]}),Object(v.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(v.jsxs)("div",{className:"provider-container",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(l.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||oe,alt:"news"}),Object(v.jsx)(X.a,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(v.jsx)(X.a,{children:je()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(v.jsx)(I,{})},be=t(488),he=t(243),ue=t.n(he),Oe=function(){var e,c=E(),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return a?Object(v.jsx)(I,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(M.a,{children:[Object(v.jsx)(T.a,{span:6,children:"Exchanges"}),Object(v.jsx)(T.a,{span:6,children:"24h Trade Volume"}),Object(v.jsx)(T.a,{span:6,children:"Markets"}),Object(v.jsx)(T.a,{span:6,children:"Change"})]}),Object(v.jsx)(M.a,{children:s.map((function(e){return Object(v.jsx)(T.a,{span:24,children:Object(v.jsx)(be.a,{children:Object(v.jsx)(ue.a,{showArrow:!1,header:Object(v.jsxs)(M.a,{children:[Object(v.jsxs)(T.a,{span:6,children:[Object(v.jsx)(X.a,{children:Object(v.jsx)("strong",{children:e.rank})}),Object(v.jsx)(l.a,{className:"exchange-image",src:e.iconUrl}),Object(v.jsx)(X.a,{children:Object(v.jsx)("strong",{children:e.name})})]}),Object(v.jsxs)(T.a,{span:6,children:["$",$()(e.volume)]}),Object(v.jsxs)(T.a,{span:6,children:["$",$()(e.numberOfMarkets)]}),Object(v.jsxs)(T.a,{span:6,children:["$",$()(e.marketShare)]})]},e.id),children:Object(Y.a)(e.description||"")},e.id)})})}))})]})},xe=t(480),pe=t(489);var me,ve=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("div",{className:"navbar",children:Object(v.jsx)(g,{})}),Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(xe.a,{children:Object(v.jsx)("div",{className:"routes",children:Object(v.jsxs)(U.c,{children:[Object(v.jsx)(U.a,{exact:!0,path:"/",children:Object(v.jsx)(se,{})}),Object(v.jsx)(U.a,{exact:!0,path:"/exchanges",children:Object(v.jsx)(Oe,{})}),Object(v.jsx)(U.a,{exact:!0,path:"/cryptocurrencies",children:Object(v.jsx)(L,{})}),Object(v.jsx)(U.a,{exact:!0,path:"/crypto/:coinId",children:Object(v.jsx)(te,{})}),Object(v.jsx)(U.a,{exact:!0,path:"/news",children:Object(v.jsx)(de,{})})]})})}),Object(v.jsxs)("div",{className:"footer",children:[Object(v.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Crypto App ",Object(v.jsx)("br",{}),"All rights reserved"]}),Object(v.jsxs)(pe.b,{children:[Object(v.jsx)(b.b,{to:"/",children:"Home"}),Object(v.jsx)(b.b,{to:"/exchanges",children:"Exchanges"}),Object(v.jsx)(b.b,{to:"/news",children:"News"})]})]})]})]})},ge=t(47),ye=t(33),fe=t(13),Ne=Object(fe.a)({reducer:(me={},Object(ye.a)(me,C.reducerPath,C.reducer),Object(ye.a)(me,re.reducerPath,re.reducer),me)});r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(b.a,{basename:"/",children:Object(v.jsx)(ge.a,{store:Ne,children:Object(v.jsx)(ve,{})})})}),document.getElementById("root"))}},[[476,1,2]]]);
//# sourceMappingURL=main.6fac9ea7.chunk.js.map