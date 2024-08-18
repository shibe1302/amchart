"use strict";(self.webpackChunk_am5=self.webpackChunk_am5||[]).push([[5783],{396:function(t,e,i){i.r(e),i.d(e,{Annotator:function(){return _},Exporting:function(){return c},ExportingMenu:function(){return g}});var n=i(7582),o=i(6331),s=i(1112),a=i(2855),r=i(7652),l=i(5071),d=i(256),h=i(5040);let p;class c extends o.JH{_afterNew(){super._afterNew(),this._setRawDefault("filePrefix","chart"),this._setRawDefault("charset","utf-8"),this._setRawDefault("numericFields",[]),this._setRawDefault("dateFields",[]),this._setRawDefault("durationFields",[]),this._setRawDefault("extraImages",[]),this._setRawDefault("pngOptions",{quality:1,maintainPixelRatio:!1}),this._setRawDefault("jpgOptions",{quality:.8,maintainPixelRatio:!1}),this._setRawDefault("printOptions",{quality:1,maintainPixelRatio:!1,delay:500,printMethod:"iframe",imageFormat:"png"}),this._setRawDefault("jsonOptions",{indent:2,renameFields:!0}),this._setRawDefault("csvOptions",{separator:",",addColumnNames:!0,emptyAs:"",addBOM:!0}),this._setRawDefault("htmlOptions",{emptyAs:"-",addColumnNames:!0}),this._setRawDefault("xlsxOptions",{emptyAs:"",addColumnNames:!0}),this._setRawDefault("pdfOptions",{fontSize:14,imageFormat:"png",align:"left",addURL:!0}),this._setRawDefault("pdfdataOptions",{emptyAs:"",addColumnNames:!0}),this._root.addDisposer(this)}_beforeChanged(){if(super._beforeChanged(),this.isDirty("menu")){const t=this.get("menu");t&&(t.set("exporting",this),this._disposers.push(t))}}_getFormatOptions(t,e){const i=d.copy(this.get(t+"Options",{}));return e&&d.each(e,((t,e)=>{i[t]=e})),i}download(t,e){return(0,n.mG)(this,void 0,void 0,(function*(){const i="pdfdata"==t?"pdf":t,n=this.get("filePrefix","chart")+"."+i,o=this._getFormatOptions(t,e);this.events.dispatch("downloadstarted",{type:"downloadstarted",format:t,options:o,fileName:n,target:this});const s=yield this.export(t,o);this.streamFile(s,n,o&&o.addBOM)}))}print(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("print",t);this.events.dispatch("printstarted",{type:"printstarted",format:"print",options:e,target:this});const i=yield this.export(e.imageFormat||"png",e);this.initiatePrint(i,e,this.get("title"))}))}export(t,e){return(0,n.mG)(this,void 0,void 0,(function*(){const i=this._getFormatOptions(t,e);this.events.dispatch("exportstarted",{type:"exportstarted",format:t,options:i,target:this});let n="";switch(t){case"png":case"jpg":this._root._runTickerNow(),n=this.exportImage(t,i);break;case"json":n=this.exportJSON(i);break;case"csv":n=this.exportCSV(i);break;case"html":n=this.exportHTML(i);break;case"xlsx":n=this.exportXLSX(i);break;case"pdf":this._root._runTickerNow(),n=this.exportPDF(i);break;case"pdfdata":n=this.exportPDFData(i)}return this.events.dispatch("exportfinished",{type:"exportfinished",format:t,options:i,target:this}),n}))}exportImage(t,e){return(0,n.mG)(this,void 0,void 0,(function*(){const i=this._getFormatOptions(t,e),n=yield this.getCanvas(i),o=n.toDataURL(this.getContentType(t),i.quality||1);return this.disposeCanvas(n),o}))}exportCanvas(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("canvas",t),i=yield this.getCanvas(e),n=i.toDataURL(this.getContentType("canvas"),e.quality||1);return this.disposeCanvas(i),n}))}getCanvas(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._root._renderer.getCanvas(this._root._rootContainer._display,t),i=this.get("extraImages",[]);let n=0,o=0,s=e.width,r=e.height,d=0,h=0;const p=[];l.each(i,(e=>{let i;i=e instanceof a.f?{source:e,position:"bottom"}:e,i.position=i.position||"bottom",i.marginTop=i.marginTop||0,i.marginRight=i.marginRight||0,i.marginBottom=i.marginBottom||0,i.marginLeft=i.marginLeft||0;const l=i.source._renderer.getCanvas(i.source._rootContainer._display,t),c=l.width+i.marginLeft+i.marginRight,m=l.height+i.marginTop+i.marginBottom;"top"==i.position?(s=i.crop?r:Math.max(s,c),o+=m):"right"==i.position?(r=i.crop?r:Math.max(r,m),d+=c):"left"==i.position?(r=i.crop?r:Math.max(r,m),n+=c):"bottom"===i.position&&(s=i.crop?r:Math.max(s,c),h+=m),p.push({canvas:l,position:i.position,left:i.marginLeft,top:i.marginTop,width:c,height:m})}));const c=this.getDisposableCanvas();c.width=n+s+d,c.height=o+r+h;const m=c.getContext("2d"),u=this.get("backgroundColor",this.findBackgroundColor(this._root.dom)),g=this.get("backgroundOpacity",1);u&&(m.fillStyle=u.toCSS(g),m.fillRect(0,0,c.width,c.height));let f=n,b=o,v=f+s,_=b+r;return l.each(p,(t=>{"top"==t.position?(b-=t.height,m.drawImage(t.canvas,n+t.left,b+t.top)):"right"==t.position?(m.drawImage(t.canvas,v+t.left,o+t.top),v+=t.width):"left"==t.position?(f-=t.width,m.drawImage(t.canvas,f+t.left,o+t.top)):"bottom"===t.position&&(m.drawImage(t.canvas,n+t.left,_+t.top),_+=t.height)})),m.drawImage(e,n,o),c}))}exportJSON(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("json")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getJSON(t))}))}getJSON(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("json",t);return JSON.stringify(this.getData("json",t,e.renameFields),((t,i)=>(h.isObject(i)&&d.each(i,((t,n)=>{i[t]=this.convertToSpecialFormat(t,n,e)})),i)),e.indent)}))}exportCSV(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("csv")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getCSV(t))}))}getCSV(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("csv",t);let i="",n="";const o=this.getData("csv",e),s=this.getDataFields(o);if(e.pivot){const t=this.get("dataFieldsOrder",[]);d.eachOrdered(s,((t,s)=>{let a=[];e.addColumnNames&&a.push(s);for(let i=o.length,n=0;n<i;n++){let i=o[n][t];a.push(this.convertToSpecialFormat(t,i,e,!0))}i+=n+this.getCSVRow(a,e,void 0,!0),n="\n"}),((e,i)=>{let n=t.indexOf(e),o=t.indexOf(i);return n>o?-1:n<o?1:0}))}else{for(let t=o.length,a=0;a<t;a++){let t=this.getCSVRow(o[a],e,s);e.reverse?i=t+n+i:i+=n+t,n="\n"}e.addColumnNames&&(i=this.getCSVRow(s,e,void 0,!0)+n+i)}return i}))}getCSVRow(t,e,i,n=!1){let o=e.separator||",",s=[];i||(i={},d.each(t,((t,e)=>{i[t]=e})));const a=this.get("dataFieldsOrder",[]);return d.eachOrdered(i,((i,a)=>{let r=this.convertEmptyValue(i,t[i],e),l=n?r:this.convertToSpecialFormat(i,r,e);l=""+l,l=l.replace(/"/g,'""'),(e.forceQuotes||l.search(new RegExp('"|\n|'+o,"g"))>=0)&&(l='"'+l+'"'),s.push(l)}),((t,e)=>{let i=a.indexOf(t),n=a.indexOf(e);return i>n?1:i<n?-1:0})),s.join(o)}exportHTML(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("html")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getHTML(t))}))}getHTML(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("html",t);let i="<table>";e.tableClass&&(i='<table class="'+e.tableClass+'">');const n=this.getData("html",e),o=this.getDataFields(n);if(e.pivot){const t=this.get("dataFieldsOrder",[]);i+="\n<tbody>",d.eachOrdered(o,((t,o)=>{let s=[];e.addColumnNames&&s.push(o);for(let i=n.length,o=0;o<i;o++){let i=n[o][t];s.push(this.convertToSpecialFormat(t,i,e,!0))}i+="\n"+this.getHTMLRow(s,e,void 0,!0)}),((e,i)=>{let n=t.indexOf(e),o=t.indexOf(i);return n>o?-1:n<o?1:0})),i+="\n</tbody>"}else{e.addColumnNames&&(i+="\n<thead>\n"+this.getHTMLRow(o,e,void 0,!0,!0)+"\n</thead>"),i+="\n<tbody>";for(let t=n.length,s=0;s<t;s++)i+="\n"+this.getHTMLRow(n[s],e,o);i+="\n</tbody>"}return i+="\n</table>",i}))}getHTMLRow(t,e,i,n=!1,o=!1){let s="\t<tr>";e.rowClass&&(s='\t<tr class="'+e.rowClass+'">'),i||(i=t);const a=this.get("dataFieldsOrder",[]),r=o?"th":"td";let l=!0;return d.eachOrdered(i,((i,o)=>{let a=this.convertEmptyValue(i,t[i],e),d=n?a:this.convertToSpecialFormat(i,a,e);d=""+d,d=d.replace(/[\u00A0-\u9999<>\&]/gim,(function(t){return"&#"+t.charCodeAt(0)+";"}));let h=r;e.pivot&&l&&(h="th"),e.cellClass?s+="\n\t\t<"+h+' class="'+e.cellClass+'">'+d+"</"+h+">":s+="\n\t\t<"+h+">"+d+"</"+h+">",l=!1}),((t,e)=>{let i=a.indexOf(t),n=a.indexOf(e);return i>n?1:i<n?-1:0})),s+="\n\t</tr>",s}exportXLSX(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("xlsx")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getXLSX(t))}))}getXLSX(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("xlsx",t);let i=yield this.getXLSXLib(),n={bookType:"xlsx",bookSST:!1,type:"base64"},o=this._normalizeExcelSheetName(this.get("title",this._t("Data"))),s={SheetNames:[o],Sheets:{}},a=[];const r=this.getData("html",e),l=this.getDataFields(r);if(e.pivot){const t=this.get("dataFieldsOrder",[]);d.eachOrdered(l,((t,i)=>{let n=[];e.addColumnNames&&n.push(i);for(let i=r.length,o=0;o<i;o++){let i=r[o][t];n.push(this.convertToSpecialFormat(t,i,e,!0))}a.push(this.getXLSXRow(n,e,void 0,!0))}),((e,i)=>{let n=t.indexOf(e),o=t.indexOf(i);return n>o?1:n<o?-1:0}))}else{e.addColumnNames&&a.push(this.getXLSXRow(l,e,void 0,!0));for(let t=r.length,i=0;i<t;i++)a.push(this.getXLSXRow(r[i],e,l))}return s.Sheets[o]=i.utils.aoa_to_sheet(a),this.events.dispatch("workbookready",{type:"workbookready",format:"xlsx",options:e,workbook:s,workbookOptions:n,xlsx:i,target:this}),i.write(s,n)}))}_normalizeExcelSheetName(t){return(t=t.replace(/([:\\\/?*\[\]]+)/g," ")).length>30?t.substr(0,30)+"...":t}getXLSXRow(t,e,i,n=!1){let o=[];i||(i=t);const s=this.get("dataFieldsOrder",[]);return d.eachOrdered(i,((i,s)=>{let a=this.convertEmptyValue(i,t[i],e),r=n?a:this.convertToSpecialFormat(i,a,e,!0);o.push(r)}),((t,e)=>{let i=s.indexOf(t),n=s.indexOf(e);return i>n?1:i<n?-1:0})),o}_xlsx(){return(0,n.mG)(this,void 0,void 0,(function*(){return yield i.e(4297).then(i.bind(i,7289))}))}getXLSXLib(){return this._xlsx()}exportPDF(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("pdf")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getPDF(t,!0))}))}exportPDFData(t){return(0,n.mG)(this,void 0,void 0,(function*(){return"data:"+this.getContentType("pdf")+";"+this.get("charset","utf-8")+","+encodeURIComponent(yield this.getPDF(t,!1,!0))}))}getPDF(t,e=!0,i=!1){return(0,n.mG)(this,void 0,void 0,(function*(){const n=this._getFormatOptions("pdf",t),o=this._getFormatOptions("pdfdata",t),s=n.pageOrientation||"portrait";let a;const r={width:0,height:0};if(e){const t=n.imageFormat||"png",e=this._getFormatOptions(t,n),i=yield this.getCanvas(e);r.width=i.clientWidth,r.height=i.clientHeight,a=i.toDataURL(this.getContentType(t),n.quality||1),this.disposeCanvas(i)}const d=yield this.getPdfmake();let h={pageSize:n.pageSize||"A4",pageOrientation:s,pageMargins:n.pageMargins||[30,30,30,30],defaultStyle:{font:n.font?n.font.name:void 0},content:[]};const p=this.get("title");let c=0;if(p&&(h.content.push({text:p,fontSize:n.fontSize||14,bold:!0,margin:[0,0,0,15]}),c+=50),n.addURL&&(h.content.push({text:this._t("Saved from")+": "+document.location.href,fontSize:n.fontSize,margin:[0,0,0,15]}),c+=50),e&&a){const t=this.getPageSizeFit(h.pageSize,h.pageMargins,c,s);r.width>t[0]||r.height>t[1]?h.content.push({image:a,alignment:n.align||"left",fit:t}):h.content.push({image:a,alignment:n.align||"left"})}(i||n.includeData)&&this.hasData()&&h.content.push({table:yield this.getPDFData(o),fontSize:n.fontSize||14});let m=null,u=null;function g(t){const e={};e.normal=t.normal.path,u[t.normal.path]=t.normal.bytes,t.bold?(e.bold=t.bold.path,u[t.bold.path]=t.bold.bytes):e.bold=t.normal.path,t.italics?(e.italics=t.italics.path,u[t.italics.path]=t.italics.bytes):e.italics=t.normal.path,t.bolditalics?(e.bolditalics=t.bolditalics.path,u[t.bolditalics.path]=t.bolditalics.bytes):e.bolditalics=t.normal.path,m[t.name]=e}return n.font&&(m={},u={},g(n.font),n.extraFonts&&l.each(n.extraFonts,g)),this.events.dispatch("pdfdocready",{type:"pdfdocready",format:"pdf",options:n,doc:h,target:this}),new Promise(((t,e)=>{d.createPdf(h,null,m,u).getBase64((e=>{t(e)}))}))}))}getPDFData(t){return(0,n.mG)(this,void 0,void 0,(function*(){const e=this._getFormatOptions("pdfdata",t);let i={body:[]};const n=this.getData("html",e),o=this.getDataFields(n);if(e.pivot){const t=this.get("dataFieldsOrder",[]);d.eachOrdered(o,((t,o)=>{let s=[];e.addColumnNames&&s.push(o);for(let i=n.length,o=0;o<i;o++){let i=n[o][t];s.push(this.convertToSpecialFormat(t,i,e,!0))}i.body.push(this.getPDFDataRow(s,e,void 0,!0))}),((e,i)=>{let n=t.indexOf(e),o=t.indexOf(i);return n>o?1:n<o?-1:0}))}else{e.addColumnNames&&(i.body.push(this.getPDFDataRow(o,e,void 0,!0)),i.headerRows=1);for(let t=n.length,s=0;s<t;s++)i.body.push(this.getPDFDataRow(n[s],e,o))}return i}))}getPDFDataRow(t,e,i,n=!1){let o=[];i||(i=t);const s=this.get("dataFieldsOrder",[]);return d.eachOrdered(i,((i,s)=>{let a=this.convertEmptyValue(i,t[i],e),r=n?a:this.convertToSpecialFormat(i,a,e);r=""+r,o.push(r)}),((t,e)=>{let i=s.indexOf(t),n=s.indexOf(e);return i>n?1:i<n?-1:0})),o}getPdfmake(){return void 0===p&&(p=function(){return(0,n.mG)(this,void 0,void 0,(function*(){let t=yield Promise.all([i.e(643).then(i.t.bind(i,777,23)),i.e(643).then(i.bind(i,6886))]),e=t[0].default,n=t[1].default;const o=window;return o.pdfMake=o.pdfMake||{},o.pdfMake.vfs=n,e.vfs=n,e}))}()),p}getPageSizeFit(t,e,i=0,n="portrait"){let o=[0,0,0,0];h.isNumber(e)?o=[e,e,e,e]:2==e.length?o=[e[0],e[1],e[0],e[1]]:4==e.length&&(o=e);let s={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]}[t];return"landscape"==n&&s.reverse(),s[0]-=o[0]+o[2],s[1]-=o[1]+o[3]+i,s}hasData(){const t=this.get("dataSource");return!(!h.isArray(t)||!t.length)}getData(t,e,i=!1){const n=this._getFormatOptions(t,e),o=this.get("dataSource",[]);let s=o;const a=this.get("dataFields");a&&h.isArray(o)&&(s=[],l.each(o,(t=>{if(h.isObject(t)){const e={};d.each(a,((o,s)=>{null!=a[o]&&(e[i?s:o]=this.convertToSpecialFormat(o,t[o],n))})),s.push(e)}})));const r={type:"dataprocessed",format:t,options:n,data:s,target:this};return this.events.dispatch("dataprocessed",r),r.data}getDataFields(t){let e=this.get("dataFields");return e||(e={},h.isArray(t)&&t.length&&l.each(t,(t=>{d.each(t,((t,i)=>{null==e[t]&&(e[t]=t)}))}))),e}convertEmptyValue(t,e,i){return null!=e?e:i.emptyAs}convertToSpecialFormat(t,e,i,n){if("number"==typeof e)if(this.isDateField(t))e=new Date(e);else{if(this.isNumericField(t)&&this.get("numberFormat"))return this._root.numberFormatter.format(e,this.get("numberFormat"));if(this.isDurationField(t))return this._root.durationFormatter.format(e,this.get("durationFormat"),this.get("durationUnit"))}return e instanceof Date&&(i.useTimestamps?e=e.getTime():i.useLocale?n||(e=e.toLocaleString()):e=this._root.dateFormatter.format(e,this.get("dateFormat"))),e}isDateField(t){return-1!==this.get("dateFields").indexOf(t)}isNumericField(t){return-1!==this.get("numericFields").indexOf(t)}isDurationField(t){return-1!==this.get("durationFields").indexOf(t)}getContentType(t){let e="";switch(t){case"png":e="image/"+t;break;case"jpg":e="image/jpeg";break;case"csv":e="text/csv";break;case"json":e="application/json";break;case"html":e="text/html";break;case"pdf":case"pdfdata":e="application/pdf";break;case"xlsx":e="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";break;default:e="application/octet-stream"}return e}getDisposableCanvas(){let t=document.createElement("canvas");return t.style.position="fixed",t.style.top="-10000px",this._root.dom.appendChild(t),t}disposeCanvas(t){this._root.dom.removeChild(t)}findBackgroundColor(t){let e=1,i=getComputedStyle(t,"background-color").getPropertyValue("background-color");if((i.match(/[^,]*,[^,]*,[^,]*,[ ]?0/)||"transparent"==i)&&(e=0),0==e){let e=t.parentElement;return e?this.findBackgroundColor(e):s.Il.fromHex(16777215)}return s.Il.fromCSS(i)}streamFile(t,e,i=!1){if(this.blobDownloadSupport()){let n=document.createElement("a");n.download=e,document.body.appendChild(n);let o=t.split(";"),s=o.shift().replace(/data:/,"");if(t=decodeURIComponent(o.join(";").replace(/^[^,]*,/,"")),-1!=["image/svg+xml","application/json","text/csv","text/html"].indexOf(s)){i&&(t="\ufeff"+t);let o=new Blob([t],{type:s}),a=window.URL.createObjectURL(o);return n.href=a,n.download=e,n.click(),setTimeout((()=>{document.body.removeChild(n),window.URL.revokeObjectURL(a)}),100),!0}try{t=atob(t)}catch(t){return!1}let a=new Array(t.length);for(let e=0;e<t.length;++e){let i=t.charCodeAt(e);a[e]=i}i&&(a=[239,187,191].concat(a));let r=new Blob([new Uint8Array(a)],{type:s}),l=window.URL.createObjectURL(r);n.href=l,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout((()=>{window.URL.revokeObjectURL(l)}),100)}else if(this.linkDownloadSupport()){let i=document.createElement("a");i.download=e,i.href=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}else window.location.href=t;return!0}downloadSupport(){return this.linkDownloadSupport()}linkDownloadSupport(){return void 0!==document.createElement("a").download}blobDownloadSupport(){return null!=window.Blob}initiatePrint(t,e,i){const n=this._getFormatOptions("print",e);"css"==n.printMethod?this._printViaCSS(t,n,i):this._printViaIframe(t,n,i)}_printViaCSS(t,e,i){let n,o=this._getFormatOptions("print",e).delay||500,s=document.documentElement.scrollTop||document.body.scrollTop,a=new r.StyleRule(r.getShadowRoot(this._root.dom),"body > *",{display:"none",position:"fixed",visibility:"hidden",opacity:"0",clipPath:"polygon(0px 0px,0px 0px,0px 0px,0px 0px);"},this._root.nonce),l=new r.StyleRule(r.getShadowRoot(this._root.dom),"body",{padding:"0",margin:"0"},this._root.nonce);i&&document&&document.title&&(n=document.title,document.title=i);let d=new Image;d.src=t,d.style.maxWidth="100%",d.style.display="block",d.style.position="relative",d.style.visibility="visible",d.style.opacity="1",d.style.clipPath="none",document.body.appendChild(d),this.setTimeout((()=>{window.print()}),50),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&o<1e3?o=1e3:o<100&&(o=100),this.setTimeout((()=>{document.body.removeChild(d),a.dispose(),l.dispose(),n&&(document.title=document.title),document.documentElement.scrollTop=document.body.scrollTop=s}),o||500)}_printViaIframe(t,e,i){let n=this._getFormatOptions("print",e).delay||500;const o=document.createElement("iframe");o.style.visibility="hidden",document.body.appendChild(o),o.contentWindow.document.open(),o.contentWindow.document.close();let s=new Image;s.src=t,s.style.maxWidth="100%",s.style.height="auto",i&&(o.contentWindow.document.title=i),o.contentWindow.document.body.appendChild(s),o.load=function(){o.contentWindow.document.body.appendChild(s)},this.setTimeout((()=>{try{o.contentWindow.document.execCommand("print",!1,null)||o.contentWindow.print()}catch(t){o.contentWindow.print()}}),n||50),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&n<1e3?n=1e3:n<100&&(n=100),this.setTimeout((()=>{document.body.removeChild(o)}),n+50||100)}supportedFormats(){const t=[],e=this.hasData(),i=this.downloadSupport();return l.each(["png","jpg","canvas","pdf","xlsx","csv","json","html","pdfdata","print"],(n=>{!0!==this._getFormatOptions(n).disabled&&(-1==["xlsx","csv","json","html","pdfdata"].indexOf(n)||e&&i)&&t.push(n)})),t}supportedExportTypes(){const t=["image","print"];return this.downloadSupport()&&this.hasData()&&t.push("data"),t}}Object.defineProperty(c,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Exporting"}),Object.defineProperty(c,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:o.JH.classNames.concat([c.className])});var m=i(7449);let u;class g extends o.JH{constructor(){super(...arguments),Object.defineProperty(this,"_menuElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_iconElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_listElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_itemElements",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_itemDisposers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_cssDisposer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_activeItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isOpen",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_isOver",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){super._afterNew(),this._setRawDefault("container",this._root._inner),this._setRawDefault("align","right"),this._setRawDefault("valign","top"),this._setRawDefault("useDefaultCSS",!0),this._setRawDefault("autoClose",!0),this._setRawDefault("deactivateRoot",!0),this._setRawDefault("items",[{type:"separator",label:this._t("Export")},{type:"format",format:"png",exportType:"image",label:this._t("PNG"),sublabel:this._t("Image")},{type:"format",format:"jpg",exportType:"image",label:this._t("JPG"),sublabel:this._t("Image")},{type:"format",format:"pdf",exportType:"image",label:this._t("PDF"),sublabel:this._t("Image")},{type:"separator",exportType:"data"},{type:"format",format:"json",exportType:"data",label:this._t("JSON"),sublabel:this._t("Data")},{type:"format",format:"csv",exportType:"data",label:this._t("CSV"),sublabel:this._t("Data")},{type:"format",format:"xlsx",exportType:"data",label:this._t("XLSX"),sublabel:this._t("Data")},{type:"format",format:"pdfdata",exportType:"data",label:this._t("PDF"),sublabel:this._t("Data")},{type:"format",format:"html",exportType:"data",label:this._t("HTML"),sublabel:this._t("Data")},{type:"separator"},{type:"format",format:"print",exportType:"print",label:this._t("Print")}]);const t=document.createElement("div");this._menuElement=t,this.setPrivate("menuElement",this._menuElement);const e=document.createElement("a");this._iconElement=e,this._listElement=document.createElement("ul"),this._listElement.setAttribute("role","menu"),this.setPrivate("listElement",this._listElement),this._applyClassNames(),e.innerHTML='<svg fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/></svg>',e.setAttribute("tabindex",this._root.tabindex.toString()),e.setAttribute("aria-label",this._t("Export")+"; "+this._t("Press ENTER to open")),e.setAttribute("role","button"),r.supports("keyboardevents")&&this._disposers.push(r.addEventListener(document,"keydown",(t=>{const e=r.getEventKey(t);if(document.activeElement==this._iconElement||this.isOpen)if("Escape"==e)this.close();else if("Enter"==e)this._activeItem?this._handleClick(this._activeItem):this.toggle();else if("ArrowUp"==e||"ArrowDown"==e){const t=this.get("items",[]);let i=t.indexOf(this._activeItem);"top"==this.get("valign")&&-1==i&&(i=t.length);const n="ArrowUp"==e?-1:1;let o,s=i+n;do{s<0?s=t.length-1:s>t.length-1&&(s=0),"separator"==t[s].type?s+=n:o=t[s]}while(!o);o&&this._handleItemFocus(o)}}))),this._disposers.push(r.addEventListener(e,"click",(t=>{t.stopImmediatePropagation(),this.toggle()}))),t.appendChild(this._iconElement),t.appendChild(this._listElement);const i=this.get("container",this._root._inner);i.appendChild(this._menuElement),this._disposers.push(r.addEventListener(t,r.getRendererEvent("pointerover"),(t=>{this._isOver=!0,this.get("deactivateRoot")&&(this._root._renderer.interactionsEnabled=!1)}))),this._disposers.push(r.addEventListener(t,r.getRendererEvent("pointerout"),(t=>{this.get("deactivateRoot")&&(this.isOpen||this._isOver)&&(this._root._renderer.interactionsEnabled=!0),this._isOver=!1}))),this._disposers.push(new m.ku((()=>{this._menuElement&&i.removeChild(this._menuElement)}))),this._disposers.push(r.addEventListener(document,"click",(t=>{this.isOpen&&!this._isOver&&this.close()}))),this.loadDefaultCSS(),this._root.addDisposer(this),this.events.dispatch("menucreated",{type:"menucreated",target:this})}_afterChanged(){if(super._afterChanged(),0==this._itemElements.length&&this.createItems(),this.isDirty("useDefaultCSS")&&(this.get("useDefaultCSS")?this.loadDefaultCSS():this._cssDisposer&&this._cssDisposer.dispose()),this.isDirty("exporting")&&this.get("exporting")&&this.createItems(),(this.isDirty("align")||this.isDirty("valign"))&&this._applyClassNames(),this.isDirty("container")){const t=this.get("container");t&&t.appendChild(this._menuElement)}}_dispose(){super._dispose(),l.each(this._itemDisposers,(t=>{t.dispose()}))}_applyClassNames(){const t=this.get("align","right"),e=this.get("valign","top"),i=this.isOpen?"am5exporting-menu-open":"am5exporting-menu-closed";this._menuElement.className="am5exporting am5exporting-menu am5exporting-align-"+t+" am5exporting-valign-"+e+" "+i,this._iconElement.className="am5exporting am5exporting-icon am5exporting-align-"+t+" am5exporting-valign-"+e,this._listElement.className="am5exporting am5exporting-list am5exporting-align-"+t+" am5exporting-valign-"+e}createItems(){const t=this.get("exporting");if(!t)return;this._listElement.innerHTML="",this._itemElements=[];const e=this.get("items",[]),i=t.supportedFormats(),n=t.supportedExportTypes();l.each(this._itemDisposers,(t=>{t.dispose()})),this._itemDisposers.length=0,l.each(e,(e=>{if(e.format&&-1==i.indexOf(e.format))return;if(e.exportType&&-1==n.indexOf(e.exportType))return;const o=document.createElement("li");o.setAttribute("role","menuitem"),o.className="am5exporting am5exporting-item am5exporting-type-"+e.type,e.format&&(o.className+=" am5exporting-format-"+e.format);const s=document.createElement("a");let a=this._t("Export");e.label&&(s.innerHTML=e.label,a+=" "+e.label),e.sublabel&&(s.innerHTML+=' <span class="am5exporting-label-alt">'+e.sublabel+"</span>",a+=" ("+e.sublabel+")"),e.callback?(this._itemDisposers.push(r.addEventListener(s,"click",(t=>{e.callback.call(e.callbackTarget||this)}))),s.setAttribute("tabindex",this._root.tabindex.toString())):e.format&&t&&(this._itemDisposers.push(r.addEventListener(s,"click",(t=>{this._handleClick(e)}))),this._itemDisposers.push(r.addEventListener(s,"focus",(t=>{this._handleItemFocus(e)}))),this._itemDisposers.push(r.addEventListener(s,"blur",(t=>{this._handleItemBlur(e)}))),s.setAttribute("tabindex",this._root.tabindex.toString()),s.setAttribute("aria-label",a)),e.element=s,o.appendChild(s),this._listElement.appendChild(o),this._itemElements.push(o)}))}_handleClick(t){const e=this.get("exporting");this.get("autoClose")&&this.close(),"print"==t.format?e.print():e.download(t.format)}_handleItemFocus(t){t!=this._activeItem&&(this._activeItem&&(this._activeItem.element.className=""),this._activeItem=t,t.element.className="am5exporting-item-active",t.element.focus())}_handleItemBlur(t){t.element.className="",t==this._activeItem&&(this._activeItem=void 0),this.setTimeout((()=>{document.activeElement&&r.contains(this.get("container"),document.activeElement)||this.close()}),10)}loadDefaultCSS(){const t=function(t,e,i){const n=e.interfaceColors;if(!u){const i=new m.FV([new r.StyleRule(t,".am5exporting-menu",{color:n.get("secondaryButtonText").toCSS(),"font-size":"0.8em"},e.nonce),new r.StyleRule(t,".am5exporting-menu *",{"box-sizing":"border-box",transition:"all 100ms ease-in-out"},e.nonce),new r.StyleRule(t,".am5exporting-menu a",{display:"block",cursor:"pointer"},e.nonce),new r.StyleRule(t,".am5exporting-type-separator",{color:n.get("disabled").toCSS(),"border-bottom":"1px solid "+n.get("secondaryButtonDown").toCSS()},e.nonce),new r.StyleRule(t,".am5exporting-label-alt",{color:n.get("disabled").toCSS(),"font-size":"0.8em"},e.nonce),new r.StyleRule(t,".am5exporting-menu .am5exporting-type-separator a",{cursor:"default"},e.nonce),new r.StyleRule(t,".am5exporting-menu .am5exporting-type-separator a:hover",{background:"initial"},e.nonce),new r.StyleRule(t,".am5exporting-menu",{position:"absolute","z-index":"10"},e.nonce),new r.StyleRule(t,".am5exporting-icon",{width:"30px",height:"26px",position:"absolute",margin:"5px",padding:"3px 5px","border-radius":"3px",opacity:"0.5",background:"rgba(255, 255, 255, 0.001)","background-opacity":"0"},e.nonce),new r.StyleRule(t,".am5exporting-icon:focus, .am5exporting-icon:hover, .am5exporting-menu-open .am5exporting-icon",{background:n.get("secondaryButtonHover").toCSS(),opacity:"1"},e.nonce),new r.StyleRule(t,".am5exporting-menu path",{fill:n.get("secondaryButtonText").toCSS()},e.nonce),new r.StyleRule(t,".am5exporting-list",{display:"none","list-style":"none","list-style-type":"none",margin:"5px",background:n.get("secondaryButton").toCSS(),padding:"5px 0",border:"1px solid "+n.get("secondaryButtonStroke").toCSS(),"border-radius":"3px"},e.nonce),new r.StyleRule(t,".am5exporting-menu-open .am5exporting-list",{display:"block"},e.nonce),new r.StyleRule(t,".am5exporting-item",{},e.nonce),new r.StyleRule(t,".am5exporting-item a",{padding:"3px 15px"},e.nonce),new r.StyleRule(t,".am5exporting-item a:hover, .am5exporting-item a.am5exporting-item-active",{background:n.get("secondaryButtonHover").toCSS()},e.nonce),new r.StyleRule(t,".am5exporting-menu.am5exporting-align-left, .am5exporting-icon.am5exporting-align-left, .am5exporting-list.am5exporting-align-left",{left:"0"},e.nonce),new r.StyleRule(t,".am5exporting-menu.am5exporting-align-right, .am5exporting-icon.am5exporting-align-right, .am5exporting-list.am5exporting-align-right",{right:"0"},e.nonce),new r.StyleRule(t,".am5exporting-menu.am5exporting-valign-top, .am5exporting-icon.am5exporting-valign-top, .am5exporting-list.am5exporting-align-top",{top:"0"},e.nonce),new r.StyleRule(t,".am5exporting-menu.am5exporting-valign-bottom, .am5exporting-icon.am5exporting-valign-bottom, .am5exporting-list.am5exporting-align-bottom",{bottom:"0"},e.nonce),new r.StyleRule(t,".am5exporting-list.am5exporting-align-left",{"margin-left":"40px"},e.nonce),new r.StyleRule(t,".am5exporting-list.am5exporting-align-right",{"margin-right":"40px"},e.nonce)]);u=new m.DM((()=>{u=void 0,i.dispose()}))}return u.increment()}(r.getShadowRoot(this._root.dom),this._root);this._disposers.push(t),this._cssDisposer=t}open(){this.setTimeout((()=>{this.isOpen=!0,this.get("deactivateRoot")&&(this._root._renderer.interactionsEnabled=!1),this._applyClassNames(),this.events.dispatch("menuopened",{type:"menuopened",target:this})}),1)}close(){this.isOpen=!1,this.get("deactivateRoot")&&(this._root._renderer.interactionsEnabled=!0),r.blur(),this._applyClassNames(),this.events.dispatch("menuclosed",{type:"menuclosed",target:this})}toggle(){this.isOpen?this.close():this.open()}}Object.defineProperty(g,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ExportingMenu"}),Object.defineProperty(g,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:o.JH.classNames.concat([g.className])});var f=i(8777),b=i(5021),v=i(6245);class _ extends o.JH{constructor(){super(...arguments),Object.defineProperty(this,"_container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_picture",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_markerArea",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_skipRender",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){super._afterNew(),this._setRawDefault("layer",1e3),this._root.addDisposer(this)}_beforeChanged(){super._beforeChanged(),this.isDirty("markerState")&&this._renderState()}open(){return(0,n.mG)(this,void 0,void 0,(function*(){this.setTimeout((()=>{this._root._renderer.interactionsEnabled=!1}),100);const t=yield this.getMarkerArea();t.show(),this._picture.hide(0),this.get("markerState")&&t.restoreState(this.get("markerState"))}))}_renderState(){return(0,n.mG)(this,void 0,void 0,(function*(){const t=yield this.getMarkerArea();this.get("markerState")&&(this._skipRender=!0,t.renderState(this.get("markerState")))}))}close(){return(0,n.mG)(this,void 0,void 0,(function*(){(yield this.getMarkerArea()).close(),this._markerArea=void 0}))}cancel(){return(0,n.mG)(this,void 0,void 0,(function*(){this._root._renderer.interactionsEnabled=!0;const t=yield this.getMarkerArea();this._picture.show(0),t.close(),this._markerArea=void 0}))}clear(){this.set("markerState",void 0),this._picture&&this._picture.set("src","")}toggle(){return(0,n.mG)(this,void 0,void 0,(function*(){(yield this.getMarkerArea()).isOpen?this.close():this.open()}))}dispose(){super.dispose(),this._markerArea&&this._markerArea.isOpen&&this._markerArea.close()}_maybeInit(){return(0,n.mG)(this,void 0,void 0,(function*(){if(this._container||(this._container=this._root.container.children.push(f.W.new(this._root,{width:v.AQ,height:v.AQ,layer:this.get("layer"),interactiveChildren:!1})),this._picture=this._container.children.push(b.t.new(this._root,{width:v.AQ,height:v.AQ}))),!this._markerArea){const t=yield this._getMarkerJS(),e=this._container._display.getCanvas(),i=new t.MarkerArea(e);i.uiStyleSettings.logoPosition="right",i.uiStyleSettings.zIndex=20,i.targetRoot=e.parentElement;const n=this.get("markerSettings",{});d.each(n,((t,e)=>{i.settings[t]=e}));const o=this.get("markerStyleSettings",{});d.each(o,((t,e)=>{i.uiStyleSettings[t]=e})),this._disposers.push(r.addEventListener(i,"close",(()=>{this._root._renderer.interactionsEnabled=!0,this._picture.show(0),this._markerArea=void 0}))),this._disposers.push(r.addEventListener(i,"render",(t=>{this._picture.set("src",t.dataUrl),this._skipRender||this.set("markerState",t.state),this._skipRender=!1}))),this._markerArea=i}}))}_getMarkerJS(){return(0,n.mG)(this,void 0,void 0,(function*(){return yield i.e(4384).then(i.bind(i,8768))}))}getMarkerArea(){return(0,n.mG)(this,void 0,void 0,(function*(){return yield this._maybeInit(),this._markerArea}))}}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Annotator"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:o.JH.classNames.concat([_.className])})},1803:function(t,e,i){i.r(e),i.d(e,{am5plugins_exporting:function(){return n}});const n=i(396)}},function(t){var e=(1803,t(t.s=1803)),i=window;for(var n in e)i[n]=e[n];e.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})}]);
//# sourceMappingURL=exporting.js.map