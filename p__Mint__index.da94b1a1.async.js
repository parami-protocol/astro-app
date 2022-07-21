"use strict";(self.webpackChunkmeta_astro=self.webpackChunkmeta_astro||[]).push([[968],{46011:function(pe,E,t){var W=t(80164),v=t.n(W),N=t(67294),a=t(87205),L=t(95952),l=t(71577),U=t(83509),n=t(32869),s=t(85893),u=function(m){var h=m.lat,d=m.lng,k=m.utcOffset,Y=m.breed,ae=m.setStep,$=m.setLat,z=m.setLng,e=m.setUTCOffset,G=(0,N.useState)(!1),B=v()(G,2),se=B[0],_e=B[1],je=(0,N.useState)("Please select your city"),Ae=v()(je,2),Ze=Ae[0],be=Ae[1],Me=(0,L.useIntl)();return(0,s.jsxs)("div",{className:a.Z.nftWrapper,children:[(0,s.jsx)("div",{className:a.Z.nftTitle,children:Y?Me.formatMessage({id:"astro.inputCity",defaultMessage:"1/3, Where were you born, dear god's candidate?"}):Me.formatMessage({id:"astro.inputCity",defaultMessage:"1/4, Where were you born, dear god's candidate?"})}),(0,s.jsxs)("div",{className:a.Z.inputContainer,children:[(0,s.jsx)("div",{className:a.Z.prefix,children:Me.formatMessage({id:"astro.city.prefix",defaultMessage:"I was born in"})}),(0,s.jsx)(U.Z,{onSuggestSelect:function(ne){ne!=null&&ne.location&&($(ne.location.lat),z(ne.location.lng),e(ne.gmaps.utc_offset_minutes/60)),_e(!1)},placeholder:Ze,onFocus:function(){be("")},onBlur:function(){be("Please select your city")},inputClassName:a.Z.geoInput,className:a.Z.geoSuggest,suggestsClassName:a.Z.geoSuggestWrapper,suggestItemClassName:a.Z.geoSuggestWrapperItem,suggestsHiddenClassName:se?a.Z.geoSuggestWrapperShow:a.Z.geoSuggestWrapperHidden,maxFixtures:5,types:["(cities)"],ignoreTab:!0,ignoreEnter:!0}),(0,s.jsx)(n.Z,{})]}),(0,s.jsx)("div",{className:a.Z.buttons,children:(0,s.jsx)(l.Z,{size:"large",shape:"round",type:"primary",className:a.Z.button,disabled:!h||!d||!k,onClick:function(){ae(2)},children:Me.formatMessage({id:"astro.nextStep",defaultMessage:"Next Step"})})})]})};E.Z=u},55062:function(pe,E,t){var W=t(80164),v=t.n(W),N=t(67294),a=t(87205),L=t(95952),l=t(68351),U=t(71577),n=t(32869),s=t(85893),u=function(m){var h=m.timeOfBirth,d=m.breed,k=m.setStep,Y=m.setTimeOfBirth,ae=(0,N.useState)("Please select your time of birth"),$=v()(ae,2),z=$[0],e=$[1],G=(0,L.useIntl)();return(0,s.jsxs)("div",{className:a.Z.nftWrapper,children:[(0,s.jsx)("div",{className:a.Z.nftTitle,children:d?G.formatMessage({id:"astro.inputYear",defaultMessage:"3/3, Submit more info to generate your MetaAstro."}):G.formatMessage({id:"astro.inputYear",defaultMessage:"4/4, Submit more info to generate your MetaAstro."})}),(0,s.jsxs)("div",{className:a.Z.inputContainer,children:[(0,s.jsx)("div",{className:a.Z.prefix,children:G.formatMessage({id:"astro.time.prefix",defaultMessage:"My birth time is"})}),(0,s.jsx)(l.Z,{inputReadOnly:!0,className:a.Z.input,allowClear:!1,suffixIcon:void 0,format:["HH:mm:ss"],placeholder:z,onChange:function(se,_e){Y(_e.split(":"))},onFocus:function(){e("")},onBlur:function(){e("Please select your time of birth")},renderExtraFooter:function(){return(0,s.jsxs)("div",{className:a.Z.timePickerFooter,children:[(0,s.jsx)("span",{children:"Hour"}),(0,s.jsx)("span",{children:"Minute"}),(0,s.jsx)("span",{children:"Second"})]})}}),(0,s.jsx)(n.Z,{})]}),(0,s.jsx)("div",{className:a.Z.buttons,children:(0,s.jsx)(U.Z,{size:"large",shape:"round",type:"primary",className:a.Z.button,disabled:!h.length,onClick:function(){k(d?4:5)},children:G.formatMessage({id:"astro.nextStep",defaultMessage:"Next Step"})})})]})};E.Z=u},68720:function(pe,E,t){var W=t(80164),v=t.n(W),N=t(67294),a=t(87205),L=t(95952),l=t(94500),U=t(71577),n=t(30381),s=t.n(n),u=t(85893),T=function(h){var d=h.yearOfBirth,k=h.breed,Y=h.setStep,ae=h.setYearOfBirth,$=(0,N.useState)("Please select your year of birth"),z=v()($,2),e=z[0],G=z[1],B=(0,L.useIntl)();return(0,N.useEffect)(function(){ae(1990)},[]),(0,u.jsxs)("div",{className:a.Z.nftWrapper,children:[(0,u.jsx)("div",{className:a.Z.nftTitle,children:k?B.formatMessage({id:"astro.inputYear",defaultMessage:"2/3, What is your birth year?"}):B.formatMessage({id:"astro.inputYear",defaultMessage:"2/4, What is your birth year?"})}),(0,u.jsxs)("div",{className:a.Z.inputContainer,children:[(0,u.jsx)("div",{className:a.Z.prefix,children:B.formatMessage({id:"astro.year.prefix",defaultMessage:"I was born in"})}),(0,u.jsx)(l.Z,{className:a.Z.input,allowClear:!1,suffixIcon:void 0,picker:"year",format:["YYYY","YY"],onChange:function(_e,je){ae(Number(je))},defaultValue:s()("1990","YYYY"),placeholder:d?.toString()||e,onClick:function(){G("")},onBlur:function(){G("Please select your year of birth")}})]}),(0,u.jsx)("div",{className:a.Z.buttons,children:(0,u.jsx)(U.Z,{size:"large",shape:"round",type:"primary",className:a.Z.button,disabled:!d,onClick:function(){Y(3)},children:B.formatMessage({id:"astro.nextStep",defaultMessage:"Next Step"})})})]})};E.Z=T},8020:function(pe,E,t){t.r(E),t.d(E,{default:function(){return Ot}});var W=t(55559),v=t.n(W),N=t(80164),a=t.n(N),L=t(45223),l=t.n(L),U=t(38755),n=t(67294),s=t(87205),u=t(95952),T=t(36725),m=t(1635),h=t(11382),d=t(71577),k=t(26853),Y=t(99507),ae=t(94184),$=t.n(ae),z=t(86504),e=t(85893),G=function(i){var p=i.yearOfBirth,A=i.monthOfBirth,w=i.dayOfBirth,re=i.setStep,r=i.setMonthOfBirth,ie=i.setDayOfBirth,oe=(0,u.useModel)("astroContracts"),O=oe.PrimeContract,Q=(0,u.useModel)("web3"),J=Q.Account,le=(0,n.useState)([]),X=a()(le,2),b=X[0],ue=X[1],de=(0,n.useState)(!0),j=a()(de,2),ce=j[0],Se=j[1],q=new Date().getDate(),ve=(0,u.useIntl)(),ge=function(){var ee=v()(l().mark(function M(){var I,x,_,f,P,me,R;return l().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:for(I=new Date().getDate(),x=[],_=0;_<12;_++)f=O?.getTokenIdByMonthAndDay(_+1,I),x.push(f);return P=[],D.next=6,Promise.all(x);case 6:for(me=D.sent,R=0;R<me.length;R++)me[R].toNumber()===0&&P.push(R);ue(P),Se(!1);case 10:case"end":return D.stop()}},M)}));return function(){return ee.apply(this,arguments)}}();return(0,n.useEffect)(function(){!!p&&!!O&&!!J&&ge()},[p,J,O]),(0,e.jsxs)("div",{className:s.Z.nftWrapper,children:[(0,e.jsx)("div",{className:s.Z.nftTitle,children:ve.formatMessage({id:"astro.inputMonthAndDay",defaultMessage:"3/4, Select an available date."})}),!!p&&!ce?(0,e.jsx)(T.Z,{gutter:[32,32],style:{width:"100%"},children:b.map(function(ee){var M=ee+1;return!(0,k.Eg)(Number(p))&&M===2&&q>28||q>30&&!Y.m6[M]?null:(0,e.jsx)(m.Z,{xs:12,sm:12,md:8,lg:6,xl:4,onClick:function(){r(M),ie(q)},children:(0,e.jsxs)("div",{className:$()(s.Z.nftItem,A===M?s.Z.active:""),onClick:function(){return r(M)},children:[M,"/",q]})},M)})}):(0,e.jsx)(h.Z,{indicator:(0,e.jsx)(z.Z,{style:{fontSize:24,color:"#fff"},spin:!0}),tip:(0,e.jsx)("span",{style:{color:"#fff"},children:"Querying available months..."})}),(0,e.jsx)("div",{className:s.Z.buttons,children:(0,e.jsx)(d.Z,{size:"large",shape:"round",type:"primary",className:s.Z.button,disabled:!p||!A||!w,onClick:function(){re(4)},children:ve.formatMessage({id:"astro.nextStep",defaultMessage:"Next Step"})})})]})},B=G,se=function(i){var p=i.yearOfBirth,A=i.monthOfBirth,w=i.dayOfBirth,re=i.setStep,r=i.setMonthOfBirth,ie=i.setDayOfBirth,oe=(0,u.useModel)("astroContracts"),O=oe.PrimeContract,Q=(0,u.useModel)("web3"),J=Q.Account,le=(0,n.useState)(0),X=a()(le,2),b=X[0],ue=X[1],de=(0,n.useState)([]),j=a()(de,2),ce=j[0],Se=j[1],q=(0,n.useState)(!0),ve=a()(q,2),ge=ve[0],ee=ve[1],M=(0,u.useIntl)(),I=function(){var x=v()(l().mark(function _(){var f,P,me,R,Ce,D;return l().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:ee(!0),Se([]),f=[],P=0;case 4:if(!(P<31)){K.next=12;break}return K.next=7,O?.getTokenIdByMonthAndDay(b+1,P+1);case 7:me=K.sent,f.push(me);case 9:P++,K.next=4;break;case 12:return R=[],K.next=15,Promise.all(f);case 15:for(Ce=K.sent,D=0;D<31;D++)Ce[D].toNumber()===0&&R.push(D);Se(R),ee(!1);case 19:case"end":return K.stop()}},_)}));return function(){return x.apply(this,arguments)}}();return(0,n.useEffect)(function(){!!p&&!!O&&!!J&&I()},[p,J,O]),(0,e.jsxs)("div",{className:s.Z.nftWrapper,children:[(0,e.jsx)("div",{className:s.Z.nftTitle,children:M.formatMessage({id:"astro.inputMonthAndDay",defaultMessage:"3/4, Select an available date."})}),(0,e.jsx)("div",{className:s.Z.buttons,style:{marginBottom:"2rem"},children:(0,e.jsxs)(T.Z,{gutter:[8,8],style:{width:"100%"},children:[(0,e.jsx)(m.Z,{span:12,children:(0,e.jsx)(d.Z,{block:!0,size:"large",shape:"round",type:"primary",onClick:v()(l().mark(function x(){return l().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return ue(b-1),f.next=3,I();case 3:case"end":return f.stop()}},x)})),disabled:b<=0,children:M.formatMessage({id:"astro.previousMonth",defaultMessage:"Previous"})})}),(0,e.jsx)(m.Z,{span:12,children:(0,e.jsx)(d.Z,{block:!0,size:"large",shape:"round",type:"primary",onClick:v()(l().mark(function x(){return l().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return ue(b+1),f.next=3,I();case 3:case"end":return f.stop()}},x)})),disabled:b>=11,children:M.formatMessage({id:"astro.nextMonth",defaultMessage:"Next"})})})]})}),!!p&&!ge?(0,e.jsx)(T.Z,{gutter:[32,32],style:{width:"100%"},children:ce.map(function(x){var _=b+1,f=x+1;return!(0,k.Eg)(Number(p))&&_===2&&f>28||f>30&&!Y.m6[_]?null:(0,e.jsx)(m.Z,{xs:12,sm:12,md:8,lg:6,xl:4,onClick:function(){r(_),ie(f)},children:(0,e.jsxs)("div",{className:$()(s.Z.nftItem,A===_?s.Z.active:""),onClick:function(){return r(_)},children:[_,"-",f]})},_)})}):(0,e.jsx)(h.Z,{indicator:(0,e.jsx)(z.Z,{style:{fontSize:24,color:"#fff"},spin:!0}),tip:(0,e.jsx)("span",{style:{color:"#fff"},children:"Querying available days..."})}),(0,e.jsx)("div",{className:s.Z.buttons,children:(0,e.jsx)(d.Z,{size:"middle",shape:"round",type:"primary",className:s.Z.button,disabled:!p||!A||!w,onClick:function(){re(4)},children:M.formatMessage({id:"astro.nextStep",defaultMessage:"Next Step"})})})]})},_e=se,je=t(48782),Ae=t(46011),Ze=t(55062),be=t(68720),Me=t(89795),De=t(90208),ne=t(24374),ft=t(68443),Ie=t(38648),ht=t(59466),vt=t(55026),gt=t(20640),pt=t.n(gt),ye=t(2593),_t=t(64594),Mt=t(59544),We=t(77616),C={countdown:"countdown___trF4Q",priceContainer:"priceContainer___Oz5M0",totalContainer:"totalContainer___eB_07",currentPrice:"currentPrice___NlWun",currentTotal:"currentTotal___sYgjU",ethIcon:"ethIcon___WJljZ",auctionDetailContainer:"auctionDetailContainer___U65My",auctionDetailWrapper:"auctionDetailWrapper___YYjs2",auctionDetailTitle:"auctionDetailTitle___p_yCx",generating:"generating___JU9ZV"},yt=function(i){var p=i.endTime,A=i.currentPrice,w=i.currentFee,re=i.loadSVG,r=i.loading,ie=i.astroSVG,oe=i.lat,O=i.lng,Q=i.utcOffset,J=i.yearOfBirth,le=i.monthOfBirth,X=i.dayOfBirth,b=i.timeOfBirth,ue=i.setModal,de=i.handleSubmit,j=(0,u.useIntl)();return(0,e.jsxs)("div",{className:s.Z.nftWrapper,style:{backgroundImage:"none"},children:[(0,e.jsxs)("h1",{className:C.countdown,children:["Dutch Auction Count:"," ",(0,e.jsx)(Mt.Z,{value:p,format:"HH:mm:ss",style:{display:"inline-block"},onFinish:function(){window.location.reload()}})]}),(0,e.jsxs)("div",{className:C.priceContainer,children:[(0,e.jsx)("div",{className:C.currentPrice,children:A?We.dF(ye.O$.from(A)):"--"}),(0,e.jsxs)("div",{className:C.ethIcon,children:[(0,e.jsx)("img",{src:"/images/crypto/ethereum-eth-logo.svg",alt:"eth"}),(0,e.jsx)("span",{children:"ETH"})]})]}),(0,e.jsx)("div",{className:C.totalContainer,children:(0,e.jsx)("div",{className:C.currentTotal,children:j.formatMessage({id:"astro.total",defaultMessage:"Total cost {total} ETH (Oracle Fee: {fee} ETH)"},{total:A&&w?Math.floor(Number(We.dF(ye.O$.from(A).add(ye.O$.from(w))))*100)/100:"--",fee:w?Math.floor(Number(We.dF(ye.O$.from(w)))*100)/100:"--"})})}),(0,e.jsxs)("div",{className:C.auctionDetailContainer,children:[(0,e.jsxs)("div",{className:C.auctionDetailWrapper,children:[(0,e.jsx)("div",{className:C.auctionDetailTitle,children:j.formatMessage({id:"astro.ceilingPrice",defaultMessage:"Ceiling Price"})}),(0,e.jsx)("div",{className:C.auctionDetailContent,children:"10 ETH"})]}),(0,e.jsxs)("div",{className:C.auctionDetailWrapper,children:[(0,e.jsx)("div",{className:C.auctionDetailTitle,children:j.formatMessage({id:"astro.restingPrice",defaultMessage:"Resting Price"})}),(0,e.jsx)("div",{className:C.auctionDetailContent,children:"1 ETH"})]})]}),re&&(0,e.jsx)(h.Z,{size:"large",className:C.generating,indicator:(0,e.jsx)(z.Z,{style:{color:"#fff",marginLeft:"10px",marginRight:"10px"},spin:!0}),tip:(0,e.jsx)("div",{style:{color:"#fff"},children:j.formatMessage({id:"astro.generating",defaultMessage:"Waiting for oracle..."})})}),(0,e.jsxs)("div",{className:s.Z.buttons,children:[!re&&!ie&&(0,e.jsx)(d.Z,{size:"large",shape:"round",type:"primary",className:s.Z.button,disabled:!oe||!O||!Q||!J||!le||!X||!b.length,loading:r,onClick:function(){de()},children:j.formatMessage({id:"astro.getURChart",defaultMessage:"Genesis god auction now"})}),ie&&(0,e.jsx)(d.Z,{size:"large",shape:"round",type:"primary",className:C.button,onClick:function(){ue(!0)},children:j.formatMessage({id:"astro.viewMyChart",defaultMessage:"View Your MetaAstro"})})]})]})},St=yt,c={getchartContainer:"getchartContainer___xU5bb",topContainer:"topContainer___iRWG4",currentPhase:"currentPhase___reQ46",colon:"colon___yHRpx",contentContainer:"contentContainer___WANC0",mainTitleContainer:"mainTitleContainer___YmbCh",beTheMetaAstroGod:"beTheMetaAstroGod___ZpN0_",monthAndDay:"monthAndDay___IqszM",monthCount:"monthCount___io4BN",monthCountItem:"monthCountItem___C_Bqh",monthCountStatic:"monthCountStatic___AUe0W",mintYourSoulNFT:"mintYourSoulNFT___T3kEz",nftContainer:"nftContainer___CWv9j",mintCount:"mintCount___rjWbB",modalContainer:"modalContainer___rB5Qs",background:"background___XKP8C",tipContainer:"tipContainer___wywkl",chartContainer:"chartContainer___O9W0Y",chart:"chart___Vexc_",copyBreedLink:"copyBreedLink___nASmF",openSeaLink:"openSeaLink___eGbLL"},Le=t(48764).Buffer,Ct=function(){var i=(0,u.useModel)("web3"),p=i.Account,A=i.ChainId,w=i.connect,re=(0,u.useModel)("astroContracts"),r=re.PrimeContract,ie=(0,n.useState)(!1),oe=a()(ie,2),O=oe[0],Q=oe[1],J=(0,n.useState)(!1),le=a()(J,2),X=le[0],b=le[1],ue=(0,n.useState)(!1),de=a()(ue,2),j=de[0],ce=de[1],Se=(0,n.useState)(!1),q=a()(Se,2),ve=q[0],ge=q[1],ee=(0,n.useState)(0),M=a()(ee,2),I=M[0],x=M[1],_=(0,n.useState)(0),f=a()(_,2),P=f[0],me=f[1],R=(0,n.useState)(0),Ce=a()(R,2),D=Ce[0],Fe=Ce[1],K=(0,n.useState)(),Ye=a()(K,2),Ee=Ye[0],jt=Ye[1],Dt=(0,n.useState)(),ze=a()(Dt,2),Z=ze[0],we=ze[1],Et=(0,n.useState)(),Ve=a()(Et,2),Be=Ve[0],He=Ve[1],Bt=(0,n.useState)([]),$e=a()(Bt,2),xe=$e[0],xt=$e[1],Pt=(0,n.useState)(),Qe=a()(Pt,2),Nt=Qe[0],Tt=Qe[1],At=(0,n.useState)(),Je=a()(At,2),bt=Je[0],It=Je[1],Zt=(0,n.useState)(),Xe=a()(Zt,2),ke=Xe[0],Wt=Xe[1],Lt=(0,n.useState)(),qe=a()(Lt,2),Oe=qe[0],Ut=qe[1],kt=(0,n.useState)(),et=a()(kt,2),tt=et[0],Gt=et[1],Rt=(0,n.useState)(1),at=a()(Rt,2),fe=at[0],Pe=at[1],Kt=(0,n.useState)(0),st=a()(Kt,2),Ft=st[0],Yt=st[1],he=(0,u.useIntl)(),nt=new Date().getDate(),zt=function(){var y=v()(l().mark(function S(){var V,F,te,H;return l().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,r?.getSalesTimes();case 2:V=g.sent,F=new Date,te=F.getTime()/1e3,H=Date.UTC(F.getUTCFullYear(),F.getUTCMonth(),F.getUTCDate())/1e3,Yt((V[1].toNumber()+H)*1e3),(te<=V[0].toNumber()+H||te>=V[1].toNumber()+H)&&(Ie.Z.error({message:"Not in sales time",description:"Please wait for the next sales time",duration:null}),u.history.push("/"));case 8:case"end":return g.stop()}},S)}));return function(){return y.apply(this,arguments)}}(),rt=function(){var y=v()(l().mark(function S(){var V,F,te,H;return l().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,r?.getPrice();case 2:return V=g.sent,g.next=5,r?.getOracleGasFee();case 5:return F=g.sent,g.next=8,r?.totalSupply();case 8:return te=g.sent,g.next=11,r?.isNoDateLimitMintBegan();case 11:H=g.sent,Tt(V),It(F),Wt(te),ce(H);case 16:case"end":return g.stop()}},S)}));return function(){return y.apply(this,arguments)}}(),wt=function(){var y=v()(l().mark(function S(){var V,F,te,H,Ne,g,Ge,Re;return l().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return Q(!0),o.prev=1,o.next=4,r?.getPrice();case 4:return V=o.sent,o.next=7,r?.getOracleGasFee();case 7:return F=o.sent,o.next=10,(0,ft.k)("".concat(Ee,",").concat(Number(xe[0]),",").concat(Number(xe[1]),",").concat(Number(xe[2]),",").concat(Math.round(P*100),",").concat(Math.round(I*100),",").concat(Math.round(D*100)));case 10:return te=o.sent,o.next=13,r?.initialMint(_t.Kn(p),[Z,Be],encodeURIComponent(te),{value:ye.O$.from(V).add(ye.O$.from(F))});case 13:return H=o.sent,o.next=16,(0,ne.x)(H);case 16:Ne=o.sent,Ut(Ne),b(!0),g=setInterval(v()(l().mark(function Vt(){var ot,lt,ut,dt,Ke,ct,mt;return l().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,r?.tokenURI(Ne);case 2:ot=Te.sent,lt=ot.substring(29),ut=Le.from(lt,"base64").toString("binary"),dt=JSON.parse(ut),Ke=Le.from(dt.image.substring(26),"base64").toString("utf8"),Ke.indexOf("generating")===-1&&(ct=Ke.replace(/\<g\>.*\<path.*?\<\/g\>/,"").replace(/\<rect.*?stroke=\"#b49d5d\".*?\/>/,"").replace(/\<radialGradient id=\"darkLight\"\>.*?\<\/radialGradient\>/,'<radialGradient id="darkLight"><stop offset="0%" stop-color="#707070" /><stop offset="3%" stop-color="#1b1b1b" /><stop offset="8%" stop-color="#000000" /></radialGradient>'),mt=Le.from(ct).toString("base64"),Gt("data:image/svg+xml;base64,"+mt),b(!1),clearInterval(g),ge(!0));case 8:case"end":return Te.stop()}},Vt)})),3e3),Q(!1),o.next=28;break;case 23:o.prev=23,o.t0=o.catch(1),console.log((o.t0===null||o.t0===void 0||(Ge=o.t0.error)===null||Ge===void 0?void 0:Ge.message)||(o.t0===null||o.t0===void 0?void 0:o.t0.message)||o.t0),Ie.Z.error({key:"unknowError",message:(o.t0===null||o.t0===void 0||(Re=o.t0.error)===null||Re===void 0?void 0:Re.message)||(o.t0===null||o.t0===void 0?void 0:o.t0.message)||o.t0,duration:null}),Q(!1);case 28:case"end":return o.stop()}},S,null,[[1,23]])}));return function(){return y.apply(this,arguments)}}();(0,n.useEffect)(function(){if(A!==4){Ie.Z.error({message:"Unsupported Chain",description:"This feature is only supported on Rinkeby",duration:null}),u.history.push("/");return}},[A]),(0,n.useEffect)(function(){!!r&&!!p&&(rt(),zt(),setInterval(function(){var y=new Date;y.getMinutes()%10===0&&rt()},1e3))},[p,r]),(0,n.useEffect)(function(){if(!p)try{w()}catch(S){var y;Ie.Z.error({message:(S==null||(y=S.error)===null||y===void 0?void 0:y.message)||S?.message||S})}},[p]);var it=(0,e.jsx)(ht.Z,{effect:"scrollx",dots:!1,className:c.monthCount,autoplay:!0,autoplaySpeed:1e3,dotPosition:"left",children:(0,k.DL)().map(function(y){return(0,e.jsx)("div",{className:c.monthCountItem,children:y},y)})});return(0,e.jsxs)(Me.Z,{children:[(0,e.jsxs)("div",{className:De.Z.mainContainer,children:[(0,e.jsx)(U.Z,{complex:!1}),(0,e.jsxs)("div",{className:c.getchartContainer,children:[(0,e.jsxs)("div",{className:c.topContainer,children:[(0,e.jsx)("div",{className:c.currentPhase,children:he.formatMessage({id:"astro.phase",defaultMessage:"MetaAstro Phase {phase}"},{phase:"I"})}),(0,e.jsx)("span",{className:c.colon,children:":"}),(0,e.jsx)("div",{className:c.genesisOfTheGod,children:he.formatMessage({id:"astro.genesis",defaultMessage:"Genesis of the God"})})]}),(0,e.jsxs)("div",{className:c.contentContainer,children:[(0,e.jsxs)("div",{className:c.mainTitleContainer,children:[(0,e.jsx)("div",{className:c.beTheMetaAstroGod,children:Z?he.formatMessage({id:"astro.youChooseToBeTheMetaAstroGod",defaultMessage:"You choose to be the MetaAstro God of {monthAndDay}"},{monthAndDay:(0,e.jsxs)("div",{className:c.monthAndDay,style:{color:Z?"#ff5b00":"inherit"},children:[Z?(0,e.jsx)("div",{className:c.monthCountStatic,children:(0,e.jsx)("div",{className:c.monthCountItem,children:(0,k.Nc)(Z)})}):it," ",nt]})}):he.formatMessage({id:"astro.beTheMetaAstroGod",defaultMessage:"Be the MetaAstro God of {monthAndDay}"},{monthAndDay:(0,e.jsxs)("div",{className:c.monthAndDay,style:{color:Z?"#ff5b00":"inherit"},children:[Z?(0,e.jsx)("div",{className:c.monthCountStatic,children:(0,e.jsx)("div",{className:c.monthCountItem,children:(0,k.Nc)(Z)})}):it," ",nt]})})}),(0,e.jsx)("div",{className:c.mintYourSoulNFT,children:he.formatMessage({id:"astro.mintYourSoulBoundNFTToday",defaultMessage:"Mint your soul-bound NFT today"})})]}),(0,e.jsxs)("div",{className:c.nftContainer,style:{backgroundColor:fe===5?"transparent":"rgba(255, 255, 255, 0.07)",border:fe===5?"unset":"1px solid rgba(255, 255, 255, 0.1)"},children:[fe===1&&(0,e.jsx)(Ae.Z,{lat:I,lng:P,utcOffset:D,setStep:Pe,setLat:x,setLng:me,setUTCOffset:Fe}),fe===2&&(0,e.jsx)(be.Z,{yearOfBirth:Ee,setStep:Pe,setYearOfBirth:jt}),fe===3&&!j&&(0,e.jsx)(B,{yearOfBirth:Ee,monthOfBirth:Z,dayOfBirth:Be,setStep:Pe,setMonthOfBirth:we,setDayOfBirth:He}),fe===3&&j&&(0,e.jsx)(_e,{yearOfBirth:Ee,monthOfBirth:Z,dayOfBirth:Be,setStep:Pe,setMonthOfBirth:we,setDayOfBirth:He}),fe===4&&(0,e.jsx)(Ze.Z,{timeOfBirth:xe,setStep:Pe,setTimeOfBirth:xt}),fe===5&&(0,e.jsx)(St,{endTime:Ft,currentPrice:Nt,currentFee:bt,loadSVG:X,loading:O,astroSVG:tt,lat:I,lng:P,utcOffset:D,yearOfBirth:Ee,monthOfBirth:Z,dayOfBirth:Be,timeOfBirth:xe,setModal:ge,handleSubmit:wt})]})]}),(0,e.jsx)("div",{className:c.mintCount,children:he.formatMessage({id:"astro.subTitle",defaultMessage:"Gen 0 MetaAstro already minted: {minted}/{total}"},{minted:ke?.toString(),total:"366"})})]})]}),(0,e.jsx)(je.Z,{visable:ve,title:void 0,content:(0,e.jsxs)("div",{className:c.modalContainer,children:[(0,e.jsxs)("div",{className:c.tipContainer,children:["Congratulations!",(0,e.jsx)("br",{}),"You are the god of",(0,e.jsx)("br",{}),(0,e.jsxs)("div",{className:c.monthAndDay,children:[Z,"/",Be]})]}),(0,e.jsx)("div",{className:c.chartContainer,children:(0,e.jsx)("div",{className:c.chart,children:(0,e.jsx)("img",{src:tt,alt:"Astro"})})}),(0,e.jsx)(d.Z,{block:!0,type:"link",size:"large",onClick:function(){pt()("".concat(window.location.origin,"/breed?tokenID=").concat(Oe?.toString())),vt.ZP.success("Copy Success!")},className:c.copyBreedLink,children:he.formatMessage({id:"astro.copyBreedLink",defaultMessage:"Copy Breed Link"})}),(0,e.jsx)(d.Z,{block:!0,type:"link",size:"large",onClick:function(){window.open("".concat(Y.cB.url,"/assets/").concat(Y.q7.prime[4],"/").concat(Oe?.toString()),"_blank")},className:c.openSeaLink,children:he.formatMessage({id:"astro.gotoOpenSea",defaultMessage:"Go to OpenSea"})})]}),footer:!1,bodyStyle:{backgroundColor:"#000",background:"url(/images/background/tarot.svg) #000",backgroundSize:"cover",backgroundPosition:"center",padding:0},close:function(){ge(!1)}})]})},Ot=Ct},24374:function(pe,E,t){t.d(E,{x:function(){return U}});var W=t(55559),v=t.n(W),N=t(45223),a=t.n(N);function L(s,u){return l.apply(this,arguments)}function l(){return l=v()(a().mark(function s(u,T){var m;return a().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,u.wait();case 2:if(m=d.sent.events,!(!m||!m[0].args)){d.next=5;break}return d.abrupt("return",void 0);case 5:return d.abrupt("return",T(m[0]));case 6:case"end":return d.stop()}},s)})),l.apply(this,arguments)}function U(s){return n.apply(this,arguments)}function n(){return n=v()(a().mark(function s(u){var T;return a().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,L(u,function(d){return d.args.tokenId});case 2:if(T=h.sent,T){h.next=5;break}throw new Error;case 5:return h.abrupt("return",T);case 6:case"end":return h.stop()}},s)})),n.apply(this,arguments)}},68443:function(pe,E,t){t.d(E,{k:function(){return N}});var W=t(86508),v="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDOPcw3rIferK9z0TeJrWj20yewihSc+OWa3/Uzmzqcr+SBvJvkx8Enblc1v4uqUFM9iNztGiiEqUElz2mjUIQ2TdxYC62rui0kb+VE6sykIt43DmQD0NQ9X/DqCl+mJJ9uG8Mj/h1OnCBhrrVadjprn/tfSnBHVZwh+y4dZerapQIDAQAB",N=function(L){var l=new W.X;l.setPublicKey(v);var U=l.encrypt(L);return U.toString()}},87205:function(pe,E){E.Z={nftWrapper:"nftWrapper___swXlh",nftTitle:"nftTitle____rrtg",inputContainer:"inputContainer___3Y2LA",prefix:"prefix___If8tf",input:"input___a6lYF",nftItem:"nftItem___Y8Kg6",active:"active___T5Wp1",buttons:"buttons___Z7Q5T",button:"button___WKSVF",geoSuggest:"geoSuggest___Rp2vc",geoInput:"geoInput___vS1C8",geoSuggestWrapper:"geoSuggestWrapper___tka9T",geoSuggestWrapperItem:"geoSuggestWrapperItem___SpXsz",geoSuggestWrapperShow:"geoSuggestWrapperShow___E4PFf",geoSuggestWrapperHidden:"geoSuggestWrapperHidden___rvgkq",timePickerFooter:"timePickerFooter___ESrMS"}}}]);
