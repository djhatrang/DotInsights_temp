!function(d){"use strict";for(var p=window.dotinsights.Localization,e=location.origin,a=location.pathname.split("/"),t=0;t<a.length-2;t++)""!==a[t]&&(e+="/"+a[t]);var o=e+"/assets/data/q4-2022/",u=dotinsights.NumberUtil,i=d(".block-chart"),x="{dd}/{MM}/{yyyy}",y="{MM}/{yyyy}",h="Plus Jakarta Sans",g=window.echarts,f=(new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(88, 88, 88,0)"},{offset:1,color:"rgba(140, 140, 140,1)"}]),new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(88, 88, 88,0)"},{offset:1,color:"rgba(140, 140, 140,1)"}]),{padding:[15,20],backgroundColor:"#000",borderWidth:0,extraCssText:"border-radius: 10px;box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);",textStyle:{fontFamily:h,color:"#fff",fontSize:14,fontWeight:"500"}}),v=d.extend(!0,{},f,{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}}),w={show:!0,icon:"roundRect",textStyle:{fontFamily:h,color:"#ffffff",fontSize:15,fontWeight:"500",padding:[3,0,0,0]},itemWidth:14,itemHeight:14,itemGap:30,top:"bottom",type:"scroll",pageIconColor:"#ffffff",pageIconInactiveColor:"rgba(255,255,255,0.2)",pageTextStyle:{fontFamily:h,color:"#ffffff",fontSize:15,fontWeight:"500"}},A={label:{color:"#000",backgroundColor:"#ccc"}};function S(){var e={};return 767<window.innerWidth?e={xAxis:{splitNumber:5}}:(e={tooltip:{trigger:"axis"},xAxis:{splitNumber:3}},window.innerWidth<460&&d.extend(e,{xAxis:{splitNumber:2}})),e}function L(){var e={};return 767<window.innerWidth?e={xAxis:{splitNumber:8}}:(e={xAxis:{splitNumber:3}},window.innerWidth<460&&d.extend(!0,e,{xAxis:{splitNumber:2}})),e}function k(){var e={};return 767<window.innerWidth?e={grid:{left:"40px",right:"40px"},yAxis:[{offset:20,axisLabel:{formatter:"{value}"}},{offset:20,axisLabel:{formatter:"{value}"}}],xAxis:{splitNumber:3,axisLabel:{formatter:x}}}:(e={grid:{left:"20px",right:"20px"},yAxis:[{offset:5,axisLabel:{formatter:function(e){return u.formatMoney(e)}}},{offset:5,axisLabel:{formatter:function(e){return u.formatMoney(e)}}}],xAxis:{splitNumber:3,axisLabel:{formatter:y}}},window.innerWidth<460&&d.extend(e,{xAxis:{splitNumber:2}})),e}function F(){var e={};return 767<window.innerWidth?e.yAxis={axisLabel:{formatter:"{value}"}}:e.yAxis={axisLabel:{formatter:function(e){return u.formatMoney(e)}}},e}function l(){return 767<window.innerWidth?{yAxis:{axisLabel:{formatter:"{value}"}}}:{yAxis:{axisLabel:{formatter:function(e){return e?u.formatMoney(e):"-"}}}}}function n(){return 767<window.innerWidth?{yAxis:{axisLabel:{formatter:"${value}"}}}:{yAxis:{axisLabel:{formatter:function(e){return e?"$"+u.formatMoney(e):"-"}}}}}function r(){var e={};return 767<window.innerWidth?e={xAxis:{axisLabel:{hideOverlap:!1,showMaxLabel:!0,rotate:0,align:"center"}},series:{barMaxWidth:50,itemStyle:{borderRadius:[8,8,0,0]},label:{fontSize:16}}}:(e={xAxis:{axisLabel:{hideOverlap:!0,showMaxLabel:!1,rotate:45,lineHeight:12,align:"right"}},series:{barMaxWidth:20,itemStyle:{borderRadius:[3,3,0,0]},label:{fontSize:12}}},window.innerWidth<460&&d.extend(!0,e,{series:{barMaxWidth:10,itemStyle:{borderRadius:[3,3,0,0]},label:{fontSize:10}}})),e}function W(){var e={};return 767<window.innerWidth?e={grid:{left:"25px",right:"25px"},xAxis:{splitNumber:3,axisLabel:{formatter:x}},yAxis:[{axisLabel:{formatter:"{value}"}},{axisLabel:{formatter:"{value}"}}]}:(e={grid:{left:"15px",right:"15px"},xAxis:{splitNumber:3,axisLabel:{formatter:y}},yAxis:[{axisLabel:{formatter:function(e){return e?u.formatMoney(e):"-"}}},{axisLabel:{formatter:function(e){return e?u.formatMoney(e):"-"}}}]},window.innerWidth<460&&d.extend(!0,e,{xAxis:{splitNumber:2}})),e}function B(){var e={};return 767<window.innerWidth?e={yAxis:{axisLabel:{formatter:"${value}"}},xAxis:{splitNumber:5,axisLabel:{formatter:x}}}:(e={yAxis:{axisLabel:{formatter:function(e){return"$"+u.formatWithCommas(e)}}},xAxis:{splitNumber:3,axisLabel:{formatter:y}}},window.innerWidth<460&&d.extend(e,{xAxis:{splitNumber:3}})),e}function s(){var e={};return window.innerWidth<768?e.series=[{label:{fontSize:12}},{label:{fontSize:12}}]:e.series=[{label:{fontSize:16}},{label:{fontSize:16}}],e}function P(t,e,o,i,l,a){var n=t.length,r=[];e.forEach(function(e){r[e.name]=[]});for(var s=0;s<n;s++)e.forEach(function(e){var a=t[s][e.name]?u.validate(t[s][e.name]):"";r[e.name].push([t[s].date,a])});var c=[],m=(e.forEach(function(e,a){var t={name:e.label,data:r[e.name],itemStyle:{color:o[a]},type:"line",smooth:!0,showSymbol:!1,connectNulls:!0,emphasis:{focus:"series"}};e.hasOwnProperty("options")&&(t=d.extend(!0,{},t,e.options)),i&&i[a]&&(t.areaStyle={color:new g.graphic.LinearGradient(0,0,1,1,[{offset:0,color:i[a][0]},{offset:1,color:i[a][1]}])}),void 0!==l&&(t=d.extend(!0,{},t,l)),c.push(t)}),{color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:d.extend(!0,{},f,{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}}),legend:w,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#262626"}},splitLine:{show:!1,lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{margin:12,formatter:x,color:"#ccc"}},yAxis:{type:"value",axisLine:{show:!1},splitNumber:4,splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{color:"#ccc"}},series:c});return a?d.extend(!0,{},m,a):m}function C(e){var a={},t=(767<window.innerWidth?a.xAxis="mf-daily-active-user"===e?{splitNumber:4}:{splitNumber:5}:(a.xAxis={splitNumber:3,axisLabel:{formatter:y}},window.innerWidth<460&&d.extend(!0,a,{xAxis:{splitNumber:2}})),{});switch(e){case"tvl-defi-parachain":case"tvl-dot-dex":case"tvl-ksm-dex":case"tvl-dot-lending":case"tvl-ksm-lending":case"tvl-dot-liquid-staking":case"tvl-ksm-liquid-staking":case"tvl-liquid-crowdloan":case"stablecoin-issuance":case"total-bridge-tvl":a.tooltip={valueFormatter:function(e){return e?"$"+u.formatWithCommas(e):"-"}},t=767<window.innerWidth?{axisPointer:{label:{formatter:"${value}"}},axisLabel:{formatter:"${value}"}}:{axisPointer:{label:{formatter:"${value}"}},axisLabel:{formatter:function(e){return e?"$"+u.formatMoney(e):"-"}}},a.yAxis=t}return a}d(document).ready(function(){i.waypoint(function(){var e=this.element||this,e=d(e),f=e.data("chart-name"),a=e.data("chart-source"),b=g.init(e.get(0),"macarons");if(b.showLoading("default",{text:"loading",color:"#004bff",textColor:"#004bff",maskColor:"rgba(0,0,0,0)",zlevel:0,fontSize:18,showSpinner:true,spinnerRadius:10,lineWidth:2,fontWeight:600,fontStyle:"normal",fontFamily:h}),f)if("inline"!==a)fetch(o+(void 0!==a?a:f)+".json").then(function(e){return e.json()}).then(function(e){var a,t,o,i,l,n,r,s,c,m={};switch(f){case"price-dev-act":m=function(e){for(var a=e.length,t={kusama:[],polkadot:[],dev:[]},o=["#66E1B6","#E6007A","#0091FF"],i=0;i<a;i++)t.kusama.push([e[i].date,e[i].ksm]),t.polkadot.push([e[i].date,e[i].dot]),t.dev.push([e[i].date,e[i].dev]);var o={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{left:"3%",right:95,top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#262626"}},axisPointer:A,axisLabel:{margin:12,formatter:x,color:"#ccc"}},yAxis:[{type:"value",name:p.ksmPrice,nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:o[0]}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#020722",backgroundColor:"#66E1B6"}},axisLabel:{color:"#ccc"}},{type:"value",name:p.dotPrice,nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,offset:70,axisLine:{show:!0,lineStyle:{color:o[1]}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisLabel:{color:"#ccc"}},{type:"value",name:p.developmentActivity,nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,offset:140,splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisLine:{show:!0,lineStyle:{color:o[2]}},axisLabel:{color:"#ccc"}}],series:[{name:p.ksmPrice,data:t.kusama,itemStyle:{color:o[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:p.dotPrice,data:t.polkadot,itemStyle:{color:o[1]},type:"line",smooth:!0,showSymbol:!1,yAxisIndex:1,emphasis:{focus:"series"}},{name:p.developmentActivity,data:t.dev,areaStyle:{color:new g.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(0, 145, 255,0.5)"},{offset:1,color:"rgba(7, 14, 48,0)"}])},itemStyle:{color:o[2]},type:"line",smooth:!0,showSymbol:!1,yAxisIndex:2,emphasis:{focus:"series"}}]},l=S();return d.extend(!0,o,l),o}(e);break;case"active-devs-commits":m=function(e){for(var a=e.length,t={active_devs:[],code_commits:[]},o=["#66E1B6","#004BFF"],i=0;i<a;i++)t.active_devs.push([e[i].date,e[i].active_devs]),t.code_commits.push([e[i].date,e[i].code_commits]);var o={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{left:"25px",right:"25px",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!1,lineStyle:{type:[4,4],color:["#262626"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#262626"}},axisPointer:A,axisLabel:{margin:12,formatter:x,color:"#ccc"}},yAxis:[{type:"value",name:p.activeDevelopers,nameGap:35,nameTextStyle:{color:"#fff"},alignTicks:!0,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#020722",backgroundColor:o[0]}},axisLabel:{color:"#ccc"}},{type:"value",name:p.codeCommits,nameGap:35,nameTextStyle:{color:"#fff"},position:"right",alignTicks:!0,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#fff",backgroundColor:o[1]}},axisLabel:{color:"#ccc"}}],series:[{name:p.activeDevelopers,data:t.active_devs,type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:p.codeCommits,data:t.code_commits,type:"bar",smooth:!0,yAxisIndex:1,showSymbol:!1,emphasis:{focus:"series"}}]},l=S();return d.extend(!0,o,l),o}(e);break;case"dev-act-comparison":m=function(e){for(var a=e.length,t={near:[],eth:[],sol:[],dot:[],atom:[],ada:[]},o=["#4CFCFC","#8B93AF","#24F483","#E6007A","#8247E5","#004BFF"],i=0;i<a;i++)t.near.push([e[i].date,e[i].near]),t.eth.push([e[i].date,e[i].eth]),t.sol.push([e[i].date,e[i].sol]),t.dot.push([e[i].date,e[i].dot]),t.atom.push([e[i].date,e[i].atom]),t.ada.push([e[i].date,e[i].ada]);var o={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#262626"}},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{formatter:x,color:"#ccc"}},yAxis:{type:"value",position:"right",axisLine:{show:!0,lineStyle:{color:"#66E1B6"}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{color:"#ccc"}},series:[{name:"Near",data:t.near,itemStyle:{color:o[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Ethereum",data:t.eth,itemStyle:{color:o[1]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Solana",data:t.sol,itemStyle:{color:o[2]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Polkadot",data:t.dot,itemStyle:{color:o[3]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Cosmos",data:t.atom,itemStyle:{color:o[4]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Cardano",data:t.ada,itemStyle:{color:o[5]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},l=L();return d.extend(!0,o,l)}(e);break;case"nomination-pool-staking":m=function(e){for(var a=e.length,t={total_members:[],total_stake:[]},o=["#004BFF","#E6007A"],i=0;i<a;i++)t.total_members.push([e[i].date,e[i].total_members]),t.total_stake.push([e[i].date,e[i].total_stake]);var o={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{top:"3%",left:"40px",right:"40px",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisPointer:A,axisLabel:{margin:15,formatter:x,color:"#ccc"}},yAxis:[{type:"value",name:p.totalPoolsStake,nameTextStyle:{fontSize:0},offset:20,alignTicks:!0,axisLine:{show:!1},interval:25e4,splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#fff",backgroundColor:o[1]}},axisLabel:{color:"#ccc"}},{type:"value",name:p.totalPoolsMembers,nameTextStyle:{fontSize:0},position:"right",offset:20,alignTicks:!0,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#fff",backgroundColor:o[0]}},axisLabel:{color:"#ccc"}}],series:[{name:p.totalPoolsMembers,data:t.total_members,type:"bar",smooth:!0,yAxisIndex:1,showSymbol:!1,emphasis:{focus:"series"}},{name:p.totalPoolsStake,data:t.total_stake,type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},l=k();return d.extend(!0,o,l),o}(e);break;case"staking-ratio":m=function(e,a){a=P(a,[{name:"ratio",label:"Ratio",options:{lineStyle:{width:4}}}],["#E6007A"],null,null,{legend:{show:!1},grid:{bottom:"3%"},yAxis:{min:0,max:100,interval:25,axisLabel:{formatter:"{value}%"}},xAxis:{axisLine:{show:!1},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}}},tooltip:{valueFormatter:function(e){return e+"%"}}}),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"dot-active-and-new-acc":case"ksm-active-and-new-acc":m=function(e){for(var a=e.length,t={active:[],new:[]},o=0;o<a;o++)t.active.push([e[o].date,e[o].active]),t.new.push([e[o].date,e[o].new]);var i={color:["#004BFF","#E6007A"],textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{top:"3%",left:"3%",right:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#262626"}},axisPointer:A,axisLabel:{margin:12,formatter:x,color:"#ccc"}},yAxis:{type:"value",alignTicks:!0,axisLine:{show:!1},splitNumber:4,splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{color:"#ccc"}},series:[{name:p.activeAccount,data:t.active,type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:p.newAccount,data:t.new,type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},l=function(){var e={};767<window.innerWidth?e={yAxis:{axisLabel:{formatter:"{value}"}},xAxis:{splitNumber:3,axisLabel:{formatter:x}}}:(e={yAxis:{axisLabel:{formatter:function(e){return u.formatMoney(e)}}},xAxis:{splitNumber:3,axisLabel:{formatter:y}}},window.innerWidth<460&&d.extend(e,{xAxis:{splitNumber:2}}));return e}();return d.extend(!0,i,l),i}(e);break;case"total-dot-raised-parachain":case"total-ksm-raised-parachain":m=function(e){for(var a=e.length,t=[],o=[],i=0;i<a;i++)o.push(e[i].project),t.push(u.validate(e[i].funds_raised));var l={color:["#004BFF"],tooltip:v,textStyle:{fontFamily:h,fontWeight:500},grid:{left:"3%",right:"3%",top:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:o,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:[4,4],color:"#262626"}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{hideOverlap:!1,showMaxLabel:!0,overflow:"breakAll",rotate:45,align:"right",fontFamily:h,fontSize:10,fontWeight:500,color:"#ccc"}},yAxis:{type:"value",name:p.projectCount,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},splitNumber:3,axisPointer:A,axisLabel:{fontFamily:h,fontSize:12,fontWeight:500,color:"#ccc"}},series:[{type:"bar",data:t,name:"",label:{show:!1},barMaxWidth:15,itemStyle:{borderRadius:[2,2,0,0]}}]},n=F();return d.extend(!0,l,n)}(e);break;case"twitter-followers":r=f,s=e,c=[{name:"count",label:"Followers",options:{areaStyle:{color:new g.graphic.LinearGradient(.45,0,.5,1,[{offset:0,color:"rgba(28, 135, 236, 0.7)"},{offset:1,color:"rgba(28, 135, 236, 0)"}])}}}],s=P(s,c,["#1C87EC"],null,null,{legend:{show:!1},grid:{bottom:"3%"},xAxis:{splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}}},yAxis:{min:1e6,max:14e5}}),c=C(r),m=d.extend(!0,{},s,c);break;case"tvl-defi-parachain":r=f,s=e,c=[{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(216,19,86,0.7)"},{offset:1,color:"rgba(216,19,86,0.1)"}])},stack:"Total"},name:"acala",label:"Acala"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(34,191,254,0.7)"},{offset:1,color:"rgba(34,191,254,0.1)"}])},stack:"Total"},name:"parallel",label:"Parallel"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(76,203,201,0.7)"},{offset:1,color:"rgba(76,203,201,0.1)"}])},stack:"Total"},name:"moonbeam",label:"Moonbeam"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(27,106,224,0.7)"},{offset:1,color:"rgba(27,106,224,0.1)"}])},stack:"Total"},name:"astar",label:"Astar"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(255,168,0,0.7)"},{offset:1,color:"rgba(255,168,0,0.1)"}])},stack:"Total"},name:"moonriver",label:"Moonriver"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(218,69,32,0.7)"},{offset:1,color:"rgba(218,69,32,0.1)"}])},stack:"Total"},name:"karura",label:"Karura"},{options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(210,81,253,0.7)"},{offset:1,color:"rgba(210,81,253,0.1)"}])},stack:"Total"},name:"others",label:p.others}],s=P(s,c,["#D81356","#22BFFE","#4CCBC9","#1B6AE0","#FFA800","#DA4520","#D251FD"],null,null,{yAxis:{interval:25e7}}),c=C(r),m=d.extend(!0,{},s,c);break;case"tvl-dot-dex":m=function(e,a){a=P(a,[{name:"arthswap",label:"ArthSwap"},{name:"curve_moonbeam",label:"Curve on Moonbeam"},{name:"stellaswap",label:"StellaSwap"},{name:"zenlink_astar",label:"Zenlink on Astar"},{name:"zenlink_moonbeam",label:"Zenlink Moonbeam"},{name:"avault",label:"Avault"},{name:"beamswap",label:"Beamswap"},{name:"beefy_moonbeam",label:"Beefy on Moonbeam"},{name:"solarflare",label:"Solarflare"},{name:"parallel",label:"Parallel"},{name:"acala",label:"Acala"}],["#66E1B6","#C30D00","#774EED","#E4560A","#89C900","#D251FD","#22BFFE","#FFB800","#FF806C","#2A42F1","#D81356"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-ksm-dex":m=function(e,a){a=P(a,[{name:"solarbeam",label:"Solarbeam"},{name:"karura",label:"Karura"},{name:"zenlink_moonriver",label:"Zenlink on Moonriver"},{name:"beefy_moonriver",label:"Beefy on Moonriver"},{name:"polkaswap",label:"Polkaswap"},{name:"heiko",label:"Heiko"},{name:"bifrost",label:"Bifrost Kusama"}],["#FF806C","#C30D00","#E4A30D","#66E1B6","#22BFFE","#B1B1B1","#0049F1"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-dot-lending":m=function(e,a){a=P(a,[{name:"starlay",label:"Starlay"},{name:"acala",label:"Acala (aUSD)"},{name:"moonwell_artemis",label:"Moonwell Artemis"},{name:"astriddao",label:"AstridDAO (BAI)"},{name:"parallel",label:"Parallel"}],["#ED148B","#D81356","#B8E94A","#66E1B6","#2A42F1"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-ksm-lending":m=function(e,a){a=P(a,[{name:"moonwell_apollo",label:"Moonwell Apollo"},{name:"karura",label:"Karura (aUSD)"}],["#5C42FB","#C30D00"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-dot-liquid-staking":m=function(e,a){a=P(a,[{name:"lido_moonbeam",label:"Lido on Moonbeam"},{name:"acala",label:"Acala"},{name:"bifrost_dot",label:"Bifrost Polkadot"},{name:"parallel",label:"Parallel"},{name:"tapio",label:"Tapio"}],["#118AF5","#D81356","#FFB800","#2A42F1","#25DF96"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-ksm-liquid-staking":m=function(e,a){a=P(a,[{name:"lido_moonriver",label:"Lido on Moonriver"},{name:"karura",label:"Karura"},{name:"bifrost_ksm",label:"Bifrost Kusama"},{name:"heiko",label:"Heiko"},{name:"taiga",label:"Taiga"}],["#118AF5","#C30D00","#FFB800","#EA5474","#960DB9"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"tvl-liquid-crowdloan":m=function(e,a){a=P(a,[{name:"bifrost_dot",label:"Bifrost Polkadot"},{name:"bifrost_ksm",label:"Bifrost Kusama"},{name:"acala",label:"Acala"},{name:"parallel",label:"Parallel"}],["#E6007A","#0049F1","#F82613","#22BFFE"],null,null,{yAxis:{splitNumber:3}}),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"stablecoin-issuance":i=f,l=e,n=[{name:"karura_ausd",label:"Karura aUSD",options:{areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(0,75,255,0.7)"},{offset:1,color:"rgba(0,75,255,0)"}])}}},{name:"acala_ausd",label:"Acala aUSD",options:{z:9,areaStyle:{opacity:1,color:new g.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(195,13,0,1)"},{offset:.5,color:"rgba(195,13,0,0.3)"},{offset:1,color:"rgba(195,13,0,0)"}])}}},{name:"astriddao_bai",label:"AstridDAO BAI",options:{areaStyle:{opacity:1,color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(255,184,0,0.9)"},{offset:1,color:"rgba(255,184,0,0)"}])}}}],l=P(l,n,["#004BFF","#C30D00","#FFB800"]),n=C(i),m=d.extend(!0,{},l,n);break;case"total-bridge-tvl":i=f,l=e,n=[{name:"interlay",label:"Interlay",options:{z:9,opacity:1,areaStyle:{color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(0,75,255,0.5)"},{offset:1,color:"rgba(0,75,255,0)"}])}}},{name:"kintsugi",label:"Kintsugi",options:{areaStyle:{opacity:1,color:new g.graphic.LinearGradient(.5,0,.5,1,[{offset:0,color:"rgba(142,52,6,0.9)"},{offset:1,color:"rgba(255,184,0,0)"}])}}}],l=P(l,n,["#004BFF","#E4560A"],null,null,{yAxis:{splitNumber:3}}),n=C(i),m=d.extend(!0,{},l,n);break;case"nft-marketplace-daily-volume":m=function(t){var e=[{name:"raresama",label:"Raresama"},{name:"singular",label:"Singular"},{name:"nftrade_moonbeam",label:"NFTrade Moonbeam"},{name:"moonbeans_movr",label:"Moonbeans MOVR"},{name:"moonbeans_glmr",label:"MoonBeans GLMR"},{name:"tofu_sdn",label:"tofu SDN"},{name:"tofu_astr",label:"tofu ASTR"},{name:"tofu_movr",label:"tofu MOVR"},{name:"tofu_glmr",label:"tofu GLMR"}],o=["#6B49B5","#E6007A","#429DF4","#9EE542","#4CCBC9","#F0A08C","#FF6B00","#004BFF","#FFB800"],a=t.length,i=[],l=[];e.forEach(function(e){i[e.name]=[]});for(var n=0;n<a;n++)e.forEach(function(e){var a=t[n][e.name]?u.validate(t[n][e.name]):"";i[e.name].push([t[n].date,a])});e.forEach(function(e,a){a={name:e.label,data:i[e.name],itemStyle:{color:o[a]},type:"bar",emphasis:{focus:"series"}};e.hasOwnProperty("options")&&d.extend(!0,a,e.options),l.push(a)});var r={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisPointer:A,axisLabel:{margin:12,color:"#ccc",formatter:x}},yAxis:{type:"value",axisLine:{show:!1},splitNumber:4,splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{color:"#ccc"}},series:l},s=B();return d.extend(!0,{},r,s)}(e);break;case"mf-daily-active-user":m=function(e,a){a=P(a,[{name:"users",label:"Active users"}],["#FD2E9C"]),e=C(e);return d.extend(!0,{},a,e)}(f,e);break;case"total-plots-sale-skybreach":m=function(e){for(var a=e.length,t={cumulative_plot:[],cumulative_volume:[]},o=["#004BFF","#E6007A"],i=0;i<a;i++)t.cumulative_plot.push([e[i].date,e[i].cumulative_plot]),t.cumulative_volume.push([e[i].date,e[i].cumulative_volume]);var o={color:o,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{top:"3%",left:"25px",right:"25px",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!0,lineStyle:{type:[4,4],color:["#262626"]}},axisTick:{show:!1},axisLine:{show:!1},axisPointer:A,axisLabel:{formatter:x,color:"#ccc"}},yAxis:[{type:"value",position:"right",alignTicks:!0,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#fff",backgroundColor:o[0]}},axisLabel:{color:"#ccc"}},{type:"value",position:"left",alignTicks:!0,axisLine:{show:!1},interval:25e4,max:125e4,splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:{label:{color:"#fff",backgroundColor:o[1]}},axisLabel:{color:"#ccc"}}],series:[{name:p.cumulativePlotCount,data:t.cumulative_plot,type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:p.cumulativeVolume+" (xcRMRK)",data:t.cumulative_volume,type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},l=W();return d.extend(!0,o,l),o}(e);break;case"manta-trusted-setup-contributions":a=f,t=e,o=[{name:"contributed",label:p.contributed},{name:"contributed_in_queue",label:p.contributionsInQueue},{name:"current_record",label:p.currentRecord}],t=P(e,o,["#1A9FFF","#F82613","#FFB800"]),o=C(a),m=d.extend(!0,{},t,o)}b.hideLoading(),b.setOption(m)});else{var t={};switch(f){case"web3-foundation-grants":t=function(){var e=["#004BFF","#E6007A"],a=[["2019","2020","2021","2022"],[62,144,124,146],[62,206,330,476]],a={color:e,textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:w,grid:{top:"5%",left:"3%",right:"3%",containLabel:!0},xAxis:{type:"category",data:a[0],splitLine:{show:!1,lineStyle:{type:[4,4],color:["#262626"]}},axisTick:{show:!1},axisLine:{show:!1},axisPointer:A,axisLabel:{margin:12,color:"#ccc"}},yAxis:{type:"value",alignTicks:!0,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{color:"#ccc"}},series:[{name:p.grantsEachYear,data:a[1],type:"bar",label:{show:!0,fontFamily:h,fontWeight:700,fontSize:16,position:"insideTop",padding:[7,0,0,0]},barMaxWidth:102,itemStyle:{borderRadius:[8,8,0,0]}},{name:p.grantsCumulative,data:a[2],type:"line",label:{show:!0,fontFamily:h,fontWeight:700,fontSize:16,position:"top",color:e[1]},smooth:!1,showSymbol:!0,symbolSize:16,symbol:"image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgBpVMxS8NAGH13uTSgtkhrCwpqVXCyix100cFMSpzFSRdH166li0N/g4OTg2ulTl10EIdOnUTQ0kGhbVwqQtMm511ECdeisT744PLue++Sl+8IFDSQm9GgpzVg3gOPfrLEJoDN0KsmUewE+8nX4gHHRgyTqy7cDH6ABq2WAq0SFJxvAykeR8wCeAKhQOxpsJI0ofJRnhxeLMETTXhZ36qFXLQHto8RoAMl1ocunPjAZrx8sGuYS1ty3btr3LY3Ty/UHhFymgrpwKvHr4/2jO1lCxFtTJa+sWDGy4eW2tcHTdNh326sza4PcOaiqXJE/GaKf4JSkI5KOpXHisp1RQ5D5G1K4NVV2t45u+zePFXguO+yulf3pdchIRK4NpGjy8AsjAAG/ZzOofisgdfwR0hNCoU3P8QUIlU5nmHFruht+ZrAZeLIR5pwsmIz89vJUrwSvExBNJGfcIURB58SKfszQuF1+iB1Q1QSJy/B/g/pm3cqp4f8DgAAAABJRU5ErkJggg==",emphasis:{focus:"series"}}]},e=s();return d.extend(!0,{},a,e)}();break;case"xcm-transfers":t=function(){var e=[["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],[9060,6138,10528,13905,20645,17680,18577,17827,11276,14094,17159,12307],["","","","",23239,17298,21232,26912,14027,23220,20159,14621]],e={color:["#004BFF","#E6007A"],textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:d.extend(!0,{},w,{formatter:function(e){return p.transferOn+" "+e}}),grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"category",data:e[0],axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:[4,4],color:"#262626"}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{fontFamily:h,fontWeight:500,margin:12,color:"#ccc"}},yAxis:{type:"value",splitNumber:3,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{fontFamily:h,fontSize:12,fontWeight:500,color:"#ccc"}},series:[{type:"bar",data:e[1],name:"Kusama",barMaxWidth:8,itemStyle:{borderRadius:[5,5,0,0]}},{type:"bar",data:e[2],name:"Polkadot",barMaxWidth:8,itemStyle:{borderRadius:[5,5,0,0]}}]},a=l();return d.extend(!0,e,a)}();break;case"xcm-total-amount-received":t=function(){var e=[["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],[33512223,53943045,77477509,124099450,193957834,225645603,254666571,301123152,316118330,331628007,345425245,354319177],["","","","",209950885.1,271907681.4,336682142.2,426150086.3,463966505.9,519121685.8,578522490,605642350.7]],e={color:["#004BFF","#E6007A"],textStyle:{fontFamily:h,fontWeight:500},tooltip:v,legend:d.extend(!0,{},w,{formatter:function(e){return p.amountReceivedOn+" "+e}}),grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:e[0],axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:[4,4],color:"#262626"}},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{margin:12,color:"#ccc"}},yAxis:{type:"value",splitNumber:3,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{fontFamily:h,fontSize:12,fontWeight:500,color:"#ccc"}},series:[{type:"line",data:e[1],name:"Kusama",areaStyle:{color:new g.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(0, 75, 255,0.5)"},{offset:1,color:"rgba(0, 75, 255,0)"}])},smooth:!0,showSymbol:!1,connectNulls:!0,emphasis:{focus:"series"}},{type:"line",data:e[2],name:"Polkadot",areaStyle:{color:new g.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(230, 0, 122,0.5)"},{offset:1,color:"rgba(230, 0, 122,0)"}])},smooth:!0,showSymbol:!1,connectNulls:!0,emphasis:{focus:"series"}}]},a=n();return d.extend(!0,e,a)}();break;case"the-great-escape-users":t=function(){var e=[["October\n W1","October\n W2","October\n W3","October\n W4","November\n W1","November\n W2","November\n W3","November\n W4","December\n W1","December\n W2","December\n W3","December\n W4"],[1466,1304,1633,996,1806,1226,1897,1281,1943,1699,3782,2919]],e={color:["#004BFF"],textStyle:{fontFamily:h,fontWeight:500},grid:{left:"3%",right:"3%",top:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:e[0],axisTick:{show:!1},axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{lineHeight:16,margin:12,color:"#ccc"}},yAxis:{type:"value",splitNumber:3,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#262626"]}},axisPointer:A,axisLabel:{fontFamily:h,fontSize:12,fontWeight:500,color:"#ccc"}},series:{type:"bar",data:e[1],name:"Game Sessions Played",barMaxWidth:50,itemStyle:{borderRadius:[8,8,0,0]},label:{show:!0,fontFamily:h,fontSize:16,fontWeight:700,color:"#66E1B6",position:"top"}}},a=r();return d.extend(!0,e,a)}()}b.hideLoading(),b.setOption(t)}this.destroy()},{offset:"90%"}),(a=d("#table-of-contents")).on("click",".btn-close-panel",function(e){e.preventDefault(),e.stopPropagation(),a.removeClass("open")}),a.on("click",function(e){e.target===this&&a.removeClass("open")}),a.on("click","a",function(e){a.removeClass("open")}),d(document).on("click","#btn-open-panel",function(e){e.preventDefault(),e.stopPropagation(),a.addClass("open")});var a,e=d(".block-dao .description"),t=(new Readmore(e,{moreLink:'<a href="#" class="btn btn-flat btn-small">'+p.readMore+"</a>",lessLink:'<a href="#" class="btn btn-flat btn-small">'+p.readLess+"</a>"}),d(".block-bridge"));d(document.body).on("click",".bridge-list a",function(e){e.preventDefault();e=d(this);e.hasClass("current")||(e.siblings().removeClass("current"),e.addClass("current"),t.find(".bridge-item").hide().removeClass("animate"),t.find(".bridge--"+e.data("filter")).show(function(){d(this).addClass("animate")},0))})}),d(window).on("hresize_one",function(){i.each(function(){var e=d(this),a=g.getInstanceByDom(e.get(0)),t=e.data("chart-name");if(void 0!==a){a.resize({width:"auto",height:"auto"});var o=!1;switch(t){case"price-dev-act":o=S();break;case"dev-act-comparison":o=L();break;case"nomination-pool-staking":o=k();break;case"total-dot-raised-parachain":case"total-ksm-raised-parachain":o=F();break;case"xcm-transfers":o=l();break;case"xcm-total-amount-received":o=n();break;case"twitter-followers":case"tvl-defi-parachain":case"tvl-dot-dex":case"tvl-ksm-dex":case"tvl-dot-lending":case"tvl-ksm-lending":case"tvl-dot-liquid-staking":case"tvl-ksm-liquid-staking":case"tvl-liquid-crowdloan":case"stablecoin-issuance":case"total-bridge-tvl":case"mf-daily-active-user":o=C(t);break;case"nft-marketplace-daily-volume":o=B();break;case"web3-foundation-grants":o=s();break;case"total-plots-sale-skybreach":o=W();break;case"the-great-escape-users":o=r()}o&&a.setOption(o)}})})}(jQuery);