(this.webpackJsonplabfisdas=this.webpackJsonplabfisdas||[]).push([[0],{24:function(e,a,n){e.exports=n.p+"static/media/fisdas-logo-min.e2467230.png"},27:function(e,a,n){e.exports=n(52)},32:function(e,a,n){},33:function(e,a,n){},34:function(e,a,n){},39:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){},45:function(e,a,n){},46:function(e,a,n){},47:function(e,a,n){},48:function(e,a,n){},49:function(e,a,n){},50:function(e,a,n){},51:function(e,a,n){},52:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(23),o=n.n(r),c=(n(32),n(2)),l=n(3),m=n(5),d=n(4),s=n(11),u=n(6),h=(n(33),n(34),n(24)),v=n.n(h),f=[{name:"Tata tertib",icon:"list-ol",link:"/code-of-conduct"},{name:"Modul",icon:"book",link:"/handout"},{name:"Video",icon:"play",link:"/practicum-video"},{name:"Asisten",icon:"users",link:"/assistants"},{name:"Jadwal",icon:"calendar-minus",link:"/schedule"},{name:"Organigram",icon:"sitemap",link:"/organigram"}],p=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=["Modul","Jadwal","Video"],a=f.filter((function(a){return e.includes(a.name)})).map((function(e){return i.a.createElement(s.b,{to:e.link,style:{textDecoration:"none",color:"black"}},i.a.createElement("span",null,e.name))}));return i.a.createElement("section",{className:"navbar"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"logo"},i.a.createElement(s.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement("img",{src:v.a,alt:"fisdas-logo"}))),i.a.createElement("div",{className:"navigation"},a)))}}]),n}(i.a.Component),y=(n(39),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"main-title"},"Laboratorium Fisika Dasar ",i.a.createElement("br",null)," Telkom University"))}}]),n}(i.a.Component)),E=(n(40),n(41),n(14)),b=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"menu-card"},i.a.createElement("div",{className:"icon"},i.a.createElement(E.a,{icon:this.props.data.icon})),i.a.createElement("div",{className:"menu-name"},this.props.data.name))}}]),n}(i.a.Component),A=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=f.map((function(e){return i.a.createElement(s.b,{to:e.link,style:{textDecoration:"none"}}," ",i.a.createElement(b,{data:e})," ")}));return i.a.createElement("section",{className:"menu"},i.a.createElement("div",{className:"container"},e))}}]),n}(i.a.Component),g=n(15),k=(n(45),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).state={videoFrameHeight:0},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,a=document.querySelector('iframe[title="'.concat(this.props.videoId,'"]'));this.setState({videoFrameHeight:.5625*a.offsetWidth}),window.addEventListener("resize",(function(){e.setState({videoFrameHeight:.5625*a.offsetWidth})}))}},{key:"render",value:function(){var e="https://www.youtube.com/embed/".concat(this.props.videoId);return i.a.createElement("iframe",{className:"practicum-video",title:this.props.videoId,width:"100%",height:"".concat(this.state.videoFrameHeight,"px"),src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"})}}]),n}(i.a.Component)),N=(n(46),[{name:"GLB/GLBB",videoId:"B_Hfmp-z7AE"},{name:"GMB",videoId:"FsjHqvpTRag"},{name:"GJB",videoId:"ZHHbpy91O2E"},{name:"RGB",videoId:"r2dXQrLwM1Q"},{name:"SGH",videoId:"nvFSxPjfXVc"},{name:"IM",videoId:"DfW-Tn231Sk"},{name:"PBL",videoId:"1_5n1EfcWyM"}]),O=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).handleChange=t.handleChange.bind(Object(g.a)(t)),t.state={videoId:e.video.videoId},t}return Object(l.a)(n,[{key:"handleChange",value:function(){this.props.onCurrentPlayingChange(this.state.videoId),window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"other-video-card",onClick:this.handleChange},i.a.createElement("div",{className:"icon"},i.a.createElement(E.a,{icon:"play"})),i.a.createElement("div",{className:"video-name"},this.props.video.name))}}]),n}(i.a.Component),I=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).changeCurrentPlaying=t.changeCurrentPlaying.bind(Object(g.a)(t)),t.state={currentPlayingId:N[0].videoId},t}return Object(l.a)(n,[{key:"changeCurrentPlaying",value:function(e){this.setState({currentPlayingId:e})}},{key:"render",value:function(){var e=this,a=N.map((function(a){return i.a.createElement(s.b,{style:{textDecoration:"none"}}," ",i.a.createElement(O,{onCurrentPlayingChange:e.changeCurrentPlaying,video:a}))}));return i.a.createElement("section",{className:"practicum-video"},i.a.createElement("div",{className:"player"},i.a.createElement(k,{videoId:this.state.currentPlayingId})),i.a.createElement("div",{className:"other-videos"},a))}}]),n}(i.a.Component),D=(n(47),[{name:"Adinda sekar Santia",code:"DND"},{name:"Ahdan Abdulfattah Rizqi",code:"AHD"},{name:"Alfarizi Wiranata",code:"ZIW"},{name:"Alfred Komuna",code:"AKM"},{name:"Aliya Mahmuda Putri",code:"AMP"},{name:"Andi Muhammad Fachri",code:"AMF"},{name:"Andre Prasetyo",code:"AND"},{name:"Andreas Alberto Sitorus",code:"AAL"},{name:"Andy Law Exaudy Simbolon",code:"LAW"},{name:"Anis Ratna Sari",code:"CRT"},{name:"Anita Rosdina Nasution",code:"CHO"},{name:"Annisa Ayu Lestari",code:"SEU"},{name:"Arsyad Dhiauddin",code:"ITB"},{name:"Aurellia Fieldza Sendyartha",code:"AFS"},{name:"Averina Fidelia Aqiilah Dizaramadhani",code:"VRN"},{name:"Awal Sholeh Subarkah",code:"AWL"},{name:"Ayu Sekar Safitri",code:"AYS"},{name:"Azizah Luthfiah",code:"FIA"},{name:"Bagas Wibisono",code:"BEW"},{name:"Baharuddin Nur Maulana",code:"LAN"},{name:"Bintang Kriesna Nugraha",code:"BIN"},{name:"Cahaya Irham Wirawan",code:"CCC"},{name:"Candra Budiman",code:"CAN"},{name:"Christian Halomoan Siregar",code:"CHR"},{name:"Cyla Rahmania",code:"CRA"},{name:"Delatifa Putri Sugandi",code:"DFA"},{name:"Denny Tri Sukmono",code:"DEY"},{name:"Deva Aulia Putri Oktavia",code:"DVA"},{name:"Dewi Iswaratika",code:"ARA"},{name:"Dhimas Chandra Bagaskara",code:"DAS"},{name:"Dyka Khairullah Zamhari",code:"DKZ"},{name:"Elsi Purbowati",code:"EPW"},{name:"Faisa Atharani Nugroho",code:"FAY"},{name:"Fajar Nur Raudhidarma",code:"RDM"},{name:"Fandi Achmad",code:"FAC"},{name:"Faradisya Heris",code:"DSY"},{name:"Farah Hanifah",code:"FAR"},{name:"Fariz Erawan",code:"FAZ"},{name:"Fath Muhammad Isham",code:"PED"},{name:"Felix",code:"LIX"},{name:"Fika Triana",code:"FIK"},{name:"Fildza Nadhilah Nursalam",code:"NAD"},{name:"Firda Aulya Syahrul",code:"FAS"},{name:"Gelar Gemilang Zulkarnain",code:"GGZ"},{name:"Hafid Ikhsan Arifin",code:"HAI"},{name:"Hafizhah Khaerani",code:"HKR"},{name:"Halvionita Puspitasari Dewi",code:"VIO"},{name:"I Deo Kelvin Aprianta",code:"LVN"},{name:"Iftikar Fadhlirohman S.",code:"IFR"},{name:"Ihsan Maulidin",code:"ENG"},{name:"Ilham Nadiyansyah Firdaus",code:"IND"},{name:"Indah Indriani",code:"DAH"},{name:"Ivan Satrio Pamungkas",code:"RIO"},{name:"Izzu Zantya Fawwas",code:"IZZ"},{name:"Jihan Salsabila",code:"JIH"},{name:"M. Fadel Mustamin",code:"DEE"},{name:"M. Hasyim Abdillah P.",code:"HYM"},{name:"Maria Emerald Nainggolan",code:"EMA"},{name:"Maulana Fauzan Athalla Halinda",code:"ATA"},{name:"Melinda Saleha",code:"MEL"},{name:"Melodiva Madao",code:"MNM"},{name:"Mikail Rizkyena",code:"MKC"},{name:"Mohammad Ikhwan Mahbuby",code:"BOB"},{name:"Monalisa Pratiwi",code:"MPR"},{name:"Muhammad Diponegoro St Ropawiro",code:"MDS"},{name:"Muhammad Fikri Reynaldi",code:"LDI"},{name:"Muhammad Fuad Wirahilmi",code:"WRA"},{name:"Muhammad Ilham Firdaus",code:"HAM"},{name:"Muhammad Iqbal",code:"IBG"},{name:"Muhammad Zaki",code:"MZH"},{name:"Nadhilah Rahmatia Kautsari",code:"NDL"},{name:"Namira Fasya Rahim",code:"MIA"},{name:"Nathaniel Syalomta",code:"ABE"},{name:"Novia Walrahmadani",code:"NOV"},{name:"Nur Yudha Kurnia Ramadhan",code:"YDH"},{name:"Nurul Amelia",code:"ELL"},{name:"Pratiwi Novayanti",code:"PNY"},{name:"Putri Indra Wahyuningsih",code:"PUT"},{name:"Putu Dicky Marthree Sapodu Merta",code:"DKY"},{name:"Qualita Imani Pradharona",code:"RON"},{name:"Raden Satria Daffa Fareza",code:"FRZ"},{name:"Rahma Sabilla Ashar",code:"BLA"},{name:"Raisa Afifah",code:"RAF"},{name:"Raissa Nur Andiva",code:"RNA"},{name:"Rayhan Erdyarahman",code:"REY"},{name:"Rianta Athallah Dharmmesta",code:"NTA"},{name:"Richardo Praystihan Sitepu",code:"RCO"},{name:"Rindha Ayu Kusumaningputri",code:"RIN"},{name:"Ryan Vianatha",code:"AGV"},{name:"Saddam Adri Perdana",code:"DAM"},{name:"Sang Ayu Ketut Devi Saraswati",code:"SRS"},{name:"Selly Lastanila",code:"SYL"},{name:"Siti Ashila Farikha Mayundri",code:"CIA"},{name:"Sitti Amalia Suhandini",code:"DIN"},{name:"Syafiq Fatih Basalamah",code:"TIH"},{name:"Syifa Rezki Fauziah",code:"CIP"},{name:"Tamma Hasya Gemilang",code:"TMA"},{name:"Tania Verasta",code:"TAN"},{name:"Thalita Dewi Rahmaniar",code:"THA"},{name:"Umi Nihayah",code:"AYA"},{name:"Viny Aulia Sabilla",code:"VAS"},{name:"Yonathan Verrel Lou Drie",code:"LOU"},{name:"Zalfa Aurellia",code:"ZAL"}]),j=function(e){return i.a.createElement("div",{className:"assistant-card"},i.a.createElement("div",{className:"assitants-name"},e.data.name),i.a.createElement("div",{className:"assistant-code"},e.data.code))},M=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=D.map((function(e){return i.a.createElement(j,{data:e})}));return i.a.createElement("section",{className:"assistants"},i.a.createElement("div",{className:"container"},e))}}]),n}(i.a.Component),w=(n(48),n(49),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"handout-card"},i.a.createElement("div",{className:"handout-info"},i.a.createElement("p",{className:"title"},this.props.data.name," (",this.props.data.faculty,")"),i.a.createElement("p",{className:"lang"},"id"===this.props.data.lang?"Bahasa Indonesia":"English")))}}]),n}(i.a.Component)),F=[{name:"Modul Praktikum Fisika Dasar 1",faculty:"FTE",lang:"id",link:"https://drive.google.com/file/d/1taymjdaOq2sQIDWJwoayc42tMQko7bEp/view?usp=sharinghttps://drive.google.com/file/d/1taymjdaOq2sQIDWJwoayc42tMQko7bEp/view?usp=sharing"},{name:"Physics 1 Lab Works Handout",faculty:"FTE",lang:"en",link:"https://drive.google.com/file/d/1taymjdaOq2sQIDWJwoayc42tMQko7bEp/view?usp=sharing"},{name:"Modul Praktikum Fisika Dasar 1",faculty:"FRI",lang:"id",link:"https://drive.google.com/file/d/1taymjdaOq2sQIDWJwoayc42tMQko7bEp/view?usp=sharing"},{name:"Physics 1 Lab Works Handout",faculty:"FRI",lang:"en",link:"https://drive.google.com/file/d/1taymjdaOq2sQIDWJwoayc42tMQko7bEp/view?usp=sharing"}],S=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=F.map((function(e){return i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},i.a.createElement(w,{data:e}))}));return i.a.createElement("section",{className:"handouts"},i.a.createElement("div",{className:"container"},e))}}]),n}(i.a.Component),R=(n(50),[{name:"Instagram",icon:["fab","instagram"],link:"https://instagram.com/labfisdas_telu"},{name:"Line",icon:["fab","line"]},{name:"Website",icon:"globe",link:"https://labfisdas.netlify.app"}]),C=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=R.map((function(e){return i.a.createElement(E.a,{icon:e.icon})})),a=f.map((function(e){return i.a.createElement("p",null,i.a.createElement(s.b,{to:e.link,style:{textDecoration:"none",color:"#7a7a7a"}},e.name," "))}));return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section1"},i.a.createElement("div",{className:"title"},"Laboratorium Fisika Dasar",i.a.createElement("br",null),"Telkom University"),i.a.createElement("div",{className:"socmed"},e)),i.a.createElement("div",{className:"section2"},i.a.createElement("div",{className:"find-us"},i.a.createElement("p",{className:"title"},"Find us"),i.a.createElement("p",{className:"address"},"Gedung P (Deli) lantai 3, Telkom University, Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat.")),i.a.createElement("div",{className:"explore"},i.a.createElement("p",{className:"title"},"Explore"),i.a.createElement("div",{className:"footer-menu-list"},a))),i.a.createElement("div",{className:"credits"},"All rights reserved.")))}}]),n}(i.a.Component),P=(n(51),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("section",{className:"not-found"},i.a.createElement("div",{className:"error-message"},i.a.createElement("div",{className:"main-message"},"404"),i.a.createElement("div",null,"oops, page not found")))}}]),n}(i.a.Component)),H=n(16),L=n(26),T=n(12);H.b.add(L.a,T.c,T.g,T.a,T.h,T.j,T.b,T.i,T.f,T.e,T.d);var B=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement(u.b,{path:"/",render:function(){return i.a.createElement(p,null)}}),i.a.createElement(u.d,null,i.a.createElement(u.b,{exact:!0,path:"/"},i.a.createElement(y,null),i.a.createElement(A,null)),i.a.createElement(u.b,{path:"/practicum-video",render:function(){return i.a.createElement(I,null)}}),i.a.createElement(u.b,{path:"/assistants",render:function(){return i.a.createElement(M,null)}}),i.a.createElement(u.b,{path:"/handout",render:function(){return i.a.createElement(S,null)}}),i.a.createElement(u.b,{path:"/404",render:function(){return i.a.createElement(P,null)}}),i.a.createElement(u.a,{to:"/404"})),i.a.createElement(u.b,{path:"/",render:function(){return i.a.createElement(C,null)}})))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.78b4ab6e.chunk.js.map