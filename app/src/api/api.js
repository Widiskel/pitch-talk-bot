const a1_0x59ea6b=a1_0x62e1;(function(_0x5debb0,_0x17cb56){const _0x1570b3=a1_0x62e1,_0x40245=_0x5debb0();while(!![]){try{const _0x43ec45=parseInt(_0x1570b3(0xf8))/0x1*(-parseInt(_0x1570b3(0xd3))/0x2)+parseInt(_0x1570b3(0xe8))/0x3+parseInt(_0x1570b3(0xf0))/0x4*(parseInt(_0x1570b3(0xdb))/0x5)+parseInt(_0x1570b3(0xda))/0x6+parseInt(_0x1570b3(0xf6))/0x7+parseInt(_0x1570b3(0xe3))/0x8+parseInt(_0x1570b3(0xee))/0x9*(-parseInt(_0x1570b3(0xd2))/0xa);if(_0x43ec45===_0x17cb56)break;else _0x40245['push'](_0x40245['shift']());}catch(_0xa03d8e){_0x40245['push'](_0x40245['shift']());}}}(a1_0x30c6,0x97174));import{HttpsProxyAgent}from'https-proxy-agent';function a1_0x62e1(_0x36f52e,_0xdb761c){const _0x30c60e=a1_0x30c6();return a1_0x62e1=function(_0x62e164,_0x102d76){_0x62e164=_0x62e164-0xd1;let _0xb1d616=_0x30c60e[_0x62e164];return _0xb1d616;},a1_0x62e1(_0x36f52e,_0xdb761c);}import{Helper}from'../utils/helper.js';import a1_0x59ade7 from'../utils/logger.js';import a1_0x534918 from'https';export class API{constructor(_0x4b9763,_0x36eb00,_0x1b537e,_0x11515d,_0x41af10,_0x22ef31,_0x11429a){const _0x4bd3c6=a1_0x62e1;this[_0x4bd3c6(0xe6)]=_0x11515d,this[_0x4bd3c6(0xd1)]=_0x36eb00,this[_0x4bd3c6(0xf4)]=_0x41af10,this['origin']=_0x22ef31,this[_0x4bd3c6(0xe0)]=_0x11429a,this['ua']=Helper[_0x4bd3c6(0xe7)](),this['query']=_0x4b9763,this[_0x4bd3c6(0xd4)]=_0x1b537e;}async[a1_0x59ea6b(0xd5)](_0x2bf15b=undefined){const _0x3dc375=a1_0x59ea6b,_0x3ec544={'Accept':_0x3dc375(0xe9),'Content-Type':_0x3dc375(0xf7),'User-Agent':this['ua'],'Host':this['host'],'Origin':this[_0x3dc375(0xe2)],'Connection':_0x3dc375(0xf1),'Priority':_0x3dc375(0xea),'Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':_0x3dc375(0xdf),'Sec-Fetch-Site':'same-site'};return _0x2bf15b&&(_0x3ec544['Authorization']=_0x3dc375(0xeb)+_0x2bf15b),_0x3ec544;}async[a1_0x59ea6b(0xec)](_0x131463,_0x50a1ba=a1_0x59ea6b(0xe1),_0x185325,_0x3132bc={},_0xc083e9={}){const _0xa890dc=a1_0x59ea6b;try{const _0x5e7819=''+this[_0xa890dc(0xe6)]+_0x131463,_0x3c5204={..._0xc083e9,...await this['generateHeaders'](_0x185325)},_0x5d8bbe={'method':_0x50a1ba,'headers':_0x3c5204,'body':_0x50a1ba!==_0xa890dc(0xe1)?JSON[_0xa890dc(0xe5)](_0x3132bc):undefined,'referer':this[_0xa890dc(0xe0)]};this[_0xa890dc(0xd4)]&&(_0x5d8bbe[_0xa890dc(0xd6)]=new HttpsProxyAgent(this[_0xa890dc(0xd4)],{'rejectUnauthorized':![]}));a1_0x59ade7[_0xa890dc(0xf9)](_0x50a1ba+_0xa890dc(0xf2)+_0x5e7819+'\x20'+(this['proxy']?this[_0xa890dc(0xd4)]:'')),a1_0x59ade7['info'](_0xa890dc(0xdc)+JSON['stringify'](_0x3c5204)),a1_0x59ade7[_0xa890dc(0xf9)]('Request\x20Body\x20:\x20'+JSON['stringify'](_0x3132bc));const _0x417e6a=await fetch(_0x5e7819,_0x5d8bbe),_0x34efe5=_0x417e6a[_0xa890dc(0xef)][_0xa890dc(0xd7)](_0xa890dc(0xed));let _0xcc0039;_0x34efe5&&_0x34efe5['includes'](_0xa890dc(0xf7))?_0xcc0039=await _0x417e6a[_0xa890dc(0xdd)]():_0xcc0039=await _0x417e6a['text']();const _0x32f143={'rc':_0x417e6a['ok']?0xc8:_0x417e6a[_0xa890dc(0xd9)],..._0xcc0039};return a1_0x59ade7[_0xa890dc(0xf9)](_0xa890dc(0xfa)+_0x417e6a[_0xa890dc(0xd9)]+'\x20'+_0x417e6a['statusText']),a1_0x59ade7[_0xa890dc(0xf9)](_0xa890dc(0xf3)+JSON[_0xa890dc(0xe5)](_0xcc0039)[_0xa890dc(0xd8)](0x0,0x96)+_0xa890dc(0xe4)),_0x32f143;}catch(_0x26d987){a1_0x59ade7['error']('Error\x20:\x20'+_0x26d987[_0xa890dc(0xf5)]);if(_0x26d987[_0xa890dc(0xde)]&&_0x26d987['response']['status']===0x190){const _0x1083bd={'rc':_0x26d987['response'][_0xa890dc(0xd9)],...await _0x26d987[_0xa890dc(0xde)][_0xa890dc(0xdd)]()};return _0x1083bd;}else throw _0x26d987;}}}function a1_0x30c6(){const _0x3ccaa7=['1152rhXBHa','headers','12JrCTYy','keep-alive','\x20:\x20','Response\x20Data\x20:\x20','host','message','3067694GZBglg','application/json','2107pIipvk','info','Response\x20:\x20','queryObj','200640obbnJL','614JOpwEL','proxy','generateHeaders','agent','get','substring','status','6626142uTWURy','1626115KxtYvi','Request\x20Header\x20:\x20','json','response','cors','referer','GET','origin','6632392vUacLg','...','stringify','url','randomUserAgent','1459776oJzuPF','application/json,\x20text/plain,\x20*/*','u=3,\x20i','Bearer\x20','fetch','Content-Type'];a1_0x30c6=function(){return _0x3ccaa7;};return a1_0x30c6();}