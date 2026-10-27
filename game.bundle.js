(()=>{var ph="170",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,su=1,np=2;var wa=1,Sa=2,Ti=3,Qi=0,sn=1,Ne=2,Zi=0,Ji=1,Jn=2,ru=3,ou=4,ip=5,gs=100,sp=101,rp=102,op=103,ap=104,lp=200,cp=201,hp=202,up=203,Wl=204,Xl=205,dp=206,fp=207,pp=208,mp=209,gp=210,yp=211,_p=212,xp=213,vp=214,ql=0,Yl=1,$l=2,tr=3,Zl=4,Jl=5,Kl=6,jl=7,_d=0,Mp=1,bp=2,Ki=0,Ep=1,wp=2,Sp=3,mh=4,Tp=5,Ap=6,Rp=7;var xd=300,er=301,nr=302,Ql=303,tc=304,Ta=306,ts=1e3,xs=1001,ec=1002,kn=1003,Cp=1004;var xo=1005;var oi=1006,ul=1007;var vs=1008;var Ci=1009,vd=1010,Md=1011,zr=1012,gh=1013,Ms=1014,ai=1015,ss=1016,yh=1017,_h=1018,ir=1020,bd=35902,Ed=1021,wd=1022,Zn=1023,Sd=1024,Td=1025,Ks=1026,sr=1027,xh=1028,vh=1029,Ad=1030,Mh=1031;var bh=1033,Yo=33776,$o=33777,Zo=33778,Jo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,yc=37816,_c=37817,xc=37818,vc=37819,Mc=37820,bc=37821,Ko=36492,Ec=36494,wc=36495,Rd=36283,Sc=36284,Tc=36285,Ac=36286;var jo=2300,Rc=2301,dl=2302,au=2400,lu=2401,cu=2402;var Pp=3200,Ip=3201;var Cd=0,Lp=1,$i="",Pe="srgb",dr="srgb-linear",Aa="linear",Ee="srgb";var Ds=7680;var hu=519,Dp=512,Up=513,kp=514,Pd=515,Np=516,Fp=517,Op=518,Bp=519,uu=35044,Ra=35048;var du="300 es",Ai=2e3,Qo=2001,Pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,Nr=Math.PI/180,Gr=180/Math.PI;function As(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Eh(i,t){return(i%t+t)%t}function Hp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zp(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function Gp(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function Vp(i,t=1){return t-Math.abs(Eh(i,t*2)-t)}function Wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yp(i,t){return i+Math.random()*(t-i)}function $p(i){return i*(.5-Math.random())}function Zp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jp(i){return i*Nr}function Kp(i){return i*Gr}function jp(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function em(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fr={DEG2RAD:Nr,RAD2DEG:Gr,generateUUID:As,clamp:Ye,euclideanModulo:Eh,mapLinear:Hp,inverseLerp:zp,lerp:Fr,damp:Gp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:Zp,degToRad:Jp,radToDeg:Kp,isPowerOfTwo:jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:tm,setQuaternionFromProperEuler:em,normalize:yn,denormalize:$s},V=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],_=s[1],v=s[4],x=s[7],P=s[2],S=s[5],T=s[8];return r[0]=o*y+a*_+l*P,r[3]=o*m+a*v+l*S,r[6]=o*p+a*x+l*T,r[1]=c*y+h*_+u*P,r[4]=c*m+h*v+u*S,r[7]=c*p+h*x+u*T,r[2]=d*y+f*_+g*P,r[5]=d*m+f*v+g*S,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fl.makeScale(t,e)),this}rotate(t){return this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fl=new le;function Id(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nm(){let i=ta("canvas");return i.style.display="block",i}var pu={};function Ur(i){i in pu||(pu[i]=!0,console.warn(i))}function im(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sm(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rm(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],yu=[.3127,.329],_u=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[dr]:{primaries:mu,whitePoint:yu,transfer:Aa,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:mu,whitePoint:yu,transfer:Ee,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var Us,Cc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=ta("canvas")),Us.width=t.width,Us.height=t.height;let n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var am=0,En=class i extends Pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xs,s=xs,r=oi,o=vs,a=Zn,l=Ci,c=i.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=As(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=xd;En.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,P=(p+1)/2,S=(h+d)/4,T=(u+y)/4,C=(g+m)/4;return v>x&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=C/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},na=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*y,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),S=Math.atan2(P,p*_);m=Math.sin(m*S)/P,a=Math.sin(a*S)/P}let x=a*_;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+y*x,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new R,vu=new Fn,Ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Mo.subVectors(this.max,Ar),ks.subVectors(t.a,Ar),Ns.subVectors(t.b,Ar),Fs.subVectors(t.c,Ar),Gi.subVectors(Ns,ks),Vi.subVectors(Fs,Ns),cs.subVectors(ks,Fs);let e=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-cs.z,cs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,cs.z,0,-cs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-cs.y,cs.x,0];return!gl(e,ks,Ns,Fs,Mo)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,ks,Ns,Fs,Mo))?!1:(bo.crossVectors(Gi,Vi),e=[bo.x,bo.y,bo.z],gl(e,ks,Ns,Fs,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new R,new R,new R,new R,new R,new R,new R,new R],qn=new R,vo=new Ii,ks=new R,Ns=new R,Fs=new R,Gi=new R,Vi=new R,cs=new R,Ar=new R,Mo=new R,bo=new R,hs=new R;function gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var lm=new Ii,Rr=new R,yl=new R,li=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(yl)),this.expandByPoint(Rr.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new R,_l=new R,Eo=new R,Wi=new R,xl=new R,wo=new R,vl=new R,bs=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_l.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Wi.dot(this.direction),l=-Wi.dot(Eo),c=Wi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_l).addScaledVector(Eo,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){xl.subVectors(e,t),wo.subVectors(n,t),vl.crossVectors(xl,wo);let o=this.direction.dot(vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);let l=a*this.direction.dot(wo.crossVectors(Wi,wo));if(l<0)return null;let c=a*this.direction.dot(xl.cross(Wi));if(c<0||l+c>o)return null;let h=-a*Wi.dot(vl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(n,Ln),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(n,Ln)),Xi.normalize(),So.crossVectors(Ln,Xi),s[0]=Xi.x,s[4]=So.x,s[8]=Ln.x,s[1]=Xi.y,s[5]=So.y,s[9]=Ln.y,s[2]=Xi.z,s[6]=So.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],v=n[7],x=n[11],P=n[15],S=s[0],T=s[4],C=s[8],E=s[12],M=s[1],D=s[5],z=s[9],B=s[13],H=s[2],G=s[6],$=s[10],at=s[14],Z=s[3],ct=s[7],_t=s[11],wt=s[15];return r[0]=o*S+a*M+l*H+c*Z,r[4]=o*T+a*D+l*G+c*ct,r[8]=o*C+a*z+l*$+c*_t,r[12]=o*E+a*B+l*at+c*wt,r[1]=h*S+u*M+d*H+f*Z,r[5]=h*T+u*D+d*G+f*ct,r[9]=h*C+u*z+d*$+f*_t,r[13]=h*E+u*B+d*at+f*wt,r[2]=g*S+y*M+m*H+p*Z,r[6]=g*T+y*D+m*G+p*ct,r[10]=g*C+y*z+m*$+p*_t,r[14]=g*E+y*B+m*at+p*wt,r[3]=_*S+v*M+x*H+P*Z,r[7]=_*T+v*D+x*G+P*ct,r[11]=_*C+v*z+x*$+P*_t,r[15]=_*E+v*B+x*at+P*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],_=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*y*c-g*u*c+g*a*f-o*y*f-h*a*p+o*u*p,P=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,S=e*_+n*v+s*x+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=_*T,t[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=x*T,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*p-e*u*p)*T,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,_=l*c,v=l*h,x=l*u,P=n.x,S=n.y,T=n.z;return s[0]=(1-(y+p))*P,s[1]=(f+x)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+v)*T,s[9]=(m-_)*T,s[10]=(1-(d+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);let c=1/r,h=1/o,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ai){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Ai)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ai){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,y;if(a===Ai)g=(o+r)*u,y=-2*u;else if(a===Qo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new R,Yn=new _e,cm=new R(0,0,0),hm=new R(1,1,1),Xi=new R,So=new R,Ln=new R,Mu=new _e,bu=new Fn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,Eu=new R,Bs=new Fn,Ei=new _e,To=new R,Cr=new R,dm=new R,fm=new Fn,wu=new R(1,0,0),Su=new R(0,1,0),Tu=new R(0,0,1),Au={type:"added"},pm={type:"removed"},Hs={type:"childadded",child:null},Ml={type:"childremoved",child:null},Ae=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ci,n=new Fn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new le}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Cr,To,this.up):Ei.lookAt(To,Cr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new R,wi=new R,bl=new R,Si=new R,zs=new R,Gs=new R,Ru=new R,El=new R,wl=new R,Sl=new R,Tl=new we,Al=new we,Rl=new we,ys=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),wi.subVectors(n,e),bl.subVectors(t,e);let o=$n.dot($n),a=$n.dot(wi),l=$n.dot(bl),c=wi.dot(wi),h=wi.dot(bl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Tl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),Tl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,n),Rl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Tl,r.x),o.addScaledVector(Al,r.y),o.addScaledVector(Rl,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),wi.subVectors(t,e),$n.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),Gs.subVectors(r,n),El.subVectors(t,n);let l=zs.dot(El),c=Gs.dot(El);if(l<=0&&c<=0)return e.copy(n);wl.subVectors(t,s);let h=zs.dot(wl),u=Gs.dot(wl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zs,o);Sl.subVectors(t,r);let f=zs.dot(Sl),g=Gs.dot(Sl);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ru.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ru,a);let p=1/(m+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(zs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Eh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return me.fromWorkingColorSpace(hn.copy(this),t),Math.round(Ye(hn.r*255,0,255))*65536+Math.round(Ye(hn.g*255,0,255))*256+Math.round(Ye(hn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Pe){me.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Ao);let n=Fr(qi.h,Ao.h,e),s=Fr(qi.s,Ao.s,e),r=Fr(qi.l,Ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new St;St.NAMES=Ld;var mm=0,es=class extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=As(),this.name="",this.blending=Ji,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},he=class extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new R,Ro=new V,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}};var ia=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sa=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},gm=0,Hn=new _e,Pl=new Ae,Vs=new R,Dn=new Ii,Pr=new Ii,nn=new R,Le=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?sa:ia)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Dn.min,Pr.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,Pr.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(Pr.min),Dn.expandByPoint(Pr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),nn.add(Vs)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;let c=new R,h=new R,u=new R,d=new V,f=new V,g=new V,y=new R,m=new R;function p(C,E,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(y),a[E].add(y),a[M].add(y),l[C].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,E=_.length;C<E;++C){let M=_[C],D=M.start,z=M.count;for(let B=D,H=D+z;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new R,x=new R,P=new R,S=new R;function T(C){P.fromBufferAttribute(s,C),S.copy(P);let E=a[C];v.copy(E),v.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(S,E);let D=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,E=_.length;C<E;++C){let M=_[C],D=M.start,z=M.count;for(let B=D,H=D+z;B<H;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new _e,us=new bs,Co=new li,Pu=new R,Po=new R,Io=new R,Lo=new R,Il=new R,Do=new R,Iu=new R,Uo=new R,vt=class extends Ae{constructor(t=new Le,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Il.fromBufferAttribute(u,t),o?Do.addScaledVector(Il,h):Do.addScaledVector(Il.sub(e),h))}e.add(Do)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Co.containsPoint(us.origin)===!1&&(us.intersectSphere(Co,Pu)===null||us.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),us.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=v;x<P;x+=3){let S=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);s=ko(this,p,t,n,c,h,u,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=ko(this,o,t,n,c,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=v;x<P;x+=3){let S=x,T=x+1,C=x+2;s=ko(this,p,t,n,c,h,u,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=m,v=m+1,x=m+2;s=ko(this,o,t,n,c,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ym(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:i}}function ko(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Po),i.getVertexPosition(l,Io),i.getVertexPosition(c,Lo);let h=ym(i,t,e,n,Po,Io,Lo,Iu);if(h){let u=new R;ys.getBarycoord(Iu,Po,Io,Lo,u),s&&(h.uv=ys.getInterpolatedAttribute(s,a,l,c,u,new V)),r&&(h.uv1=ys.getInterpolatedAttribute(r,a,l,c,u,new V)),o&&(h.normal=ys.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};ys.getNormal(Po,Io,Lo,d.normal),h.face=d,h.barycoord=u}return h}var ge=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(y,m,p,_,v,x,P,S,T,C,E){let M=x/T,D=P/C,z=x/2,B=P/2,H=S/2,G=T+1,$=C+1,at=0,Z=0,ct=new R;for(let _t=0;_t<$;_t++){let wt=_t*D-B;for(let Xt=0;Xt<G;Xt++){let Kt=Xt*M-z;ct[y]=Kt*_,ct[m]=wt*v,ct[p]=H,c.push(ct.x,ct.y,ct.z),ct[y]=0,ct[m]=0,ct[p]=S>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Xt/T),u.push(1-_t/C),at+=1}}for(let _t=0;_t<C;_t++)for(let wt=0;wt<T;wt++){let Xt=d+wt+G*_t,Kt=d+wt+G*(_t+1),O=d+(wt+1)+G*(_t+1),Q=d+(wt+1)+G*_t;l.push(Xt,Kt,Q),l.push(Kt,O,Q),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function _n(i){let t={};for(let e=0;e<i.length;e++){let n=rr(i[e]);for(let s in n)t[s]=n[s]}return t}function _m(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var xm={clone:rr,merge:_n},vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ra=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new R,Lu=new V,Du=new V,un=class extends ra{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ws=-90,Xs=1,Lc=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new un(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let o=new un(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let a=new un(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let l=new un(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new un(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oa=class extends En{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Zi});r.uniforms.tEquirect.value=e;let o=new vt(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=oi),new Lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ll=new R,bm=new R,Em=new le,Un=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ll.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Em.getNormalMatrix(t),s=this.coplanarPoint(Ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new li,No=new R,Wr=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+_).normalize(),n[3].setComponents(l-o,d-h,m-g,x-_).normalize(),n[4].setComponents(l-a,d-u,m-y,x-v).normalize(),e===Ai)n[5].setComponents(l+a,d+u,m+y,x+v).normalize();else if(e===Qo)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(No.x=s.normal.x>0?t.max.x:t.min.x,No.y=s.normal.y>0?t.max.y:t.min.y,No.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,x=_+c*(p+1),P=_+1+c*(p+1),S=_+1+c*p;f.push(v,x,S),f.push(x,P,S)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Sm,alphahash_pars_fragment:Tm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Um,begin_vertex:km,beginnormal_vertex:Nm,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:Bm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:$m,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:y0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:f0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:_0,lights_toon_pars_fragment:x0,lights_phong_fragment:v0,lights_phong_pars_fragment:M0,lights_physical_fragment:b0,lights_physical_pars_fragment:E0,lights_fragment_begin:w0,lights_fragment_maps:S0,lights_fragment_end:T0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:U0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:N0,morphinstance_vertex:F0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:H0,morphtarget_vertex:z0,normal_fragment_begin:G0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:og,shadowmap_pars_vertex:ag,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:yg,transmission_fragment:_g,transmission_pars_fragment:xg,uv_pars_fragment:vg,uv_pars_vertex:Mg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:wg,background_frag:Sg,backgroundCube_vert:Tg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Pg,depth_frag:Ig,distanceRGBA_vert:Lg,distanceRGBA_frag:Dg,equirect_vert:Ug,equirect_frag:kg,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:Hg,meshlambert_frag:zg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:Kg,points_vert:jg,points_frag:Qg,shadow_vert:ty,shadow_frag:ey,sprite_vert:ny,sprite_frag:iy},At={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ri={basic:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:_n([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:_n([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:_n([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:_n([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:_n([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:_n([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:_n([At.common,At.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:_n([At.lights,At.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ri.physical={uniforms:_n([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Fo={r:0,b:0,g:0},fs=new ci,sy=new _e;function ry(i,t,e,n,s,r,o){let a=new St(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function y(_){let v=!1,x=g(_);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Ta)?(h===void 0&&(h=new vt(new ge(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:rr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(v.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(fs)),h.material.toneMapped=me.getTransfer(x.colorSpace)!==Ee,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new vt(new dn(2,2),new wn({name:"BackgroundMaterial",uniforms:rr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=me.getTransfer(x.colorSpace)!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Fo,Dd(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:y,addToRenderList:m}}function oy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,D,z,B,H){let G=!1,$=u(B,z,D);r!==$&&(r=$,c(r.object)),G=f(M,B,z,H),G&&g(M,B,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(M,D,z,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,z){let B=z.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let G=H[D.id];G===void 0&&(G={},H[D.id]=G);let $=G[B];return $===void 0&&($=d(l()),G[B]=$),$}function d(M){let D=[],z=[],B=[];for(let H=0;H<e;H++)D[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,z,B){let H=r.attributes,G=D.attributes,$=0,at=z.getAttributes();for(let Z in at)if(at[Z].location>=0){let _t=H[Z],wt=G[Z];if(wt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),_t===void 0||_t.attribute!==wt||wt&&_t.data!==wt.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(M,D,z,B){let H={},G=D.attributes,$=0,at=z.getAttributes();for(let Z in at)if(at[Z].location>=0){let _t=G[Z];_t===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let wt={};wt.attribute=_t,_t&&_t.data&&(wt.data=_t.data),H[Z]=wt,$++}r.attributes=H,r.attributesNum=$,r.index=B}function y(){let M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){let z=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;z[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),H[M]!==D&&(i.vertexAttribDivisor(M,D),H[M]=D)}function _(){let M=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==M[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function v(M,D,z,B,H,G,$){$===!0?i.vertexAttribIPointer(M,D,z,H,G):i.vertexAttribPointer(M,D,z,B,H,G)}function x(M,D,z,B){y();let H=B.attributes,G=z.getAttributes(),$=D.defaultAttributeValues;for(let at in G){let Z=G[at];if(Z.location>=0){let ct=H[at];if(ct===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let _t=ct.normalized,wt=ct.itemSize,Xt=t.get(ct);if(Xt===void 0)continue;let Kt=Xt.buffer,O=Xt.type,Q=Xt.bytesPerElement,dt=O===i.INT||O===i.UNSIGNED_INT||ct.gpuType===gh;if(ct.isInterleavedBufferAttribute){let lt=ct.data,pt=lt.stride,Lt=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<Z.locationSize;kt++)p(Z.location+kt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<Z.locationSize;kt++)m(Z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let kt=0;kt<Z.locationSize;kt++)v(Z.location+kt,wt/Z.locationSize,O,_t,pt*Q,(Lt+wt/Z.locationSize*kt)*Q,dt)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<Z.locationSize;lt++)p(Z.location+lt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<Z.locationSize;lt++)m(Z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let lt=0;lt<Z.locationSize;lt++)v(Z.location+lt,wt/Z.locationSize,O,_t,wt*Q,wt/Z.locationSize*lt*Q,dt)}}else if($!==void 0){let _t=$[at];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Z.location,_t);break;case 3:i.vertexAttrib3fv(Z.location,_t);break;case 4:i.vertexAttrib4fv(Z.location,_t);break;default:i.vertexAttrib1fv(Z.location,_t)}}}}_()}function P(){C();for(let M in n){let D=n[M];for(let z in D){let B=D[z];for(let H in B)h(B[H].object),delete B[H];delete D[z]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let z in D){let B=D[z];for(let H in B)h(B[H].object),delete B[H];delete D[z]}delete n[M.id]}function T(M){for(let D in n){let z=n[D];if(z[M.id]===void 0)continue;let B=z[M.id];for(let H in B)h(B[H].object),delete B[H];delete z[M.id]}}function C(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function ay(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ly(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ai&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:S}}function cy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let P=0;P!==v;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==y;++v,x+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function hy(i){let t=new WeakMap;function e(o,a){return a===Ql?o.mapping=er:a===tc&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ql||a===tc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Dc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var or=class extends ra{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zs=4,Uu=[.125,.215,.35,.446,.526,.582],_s=20,Dl=new or,ku=new St,Ul=null,kl=0,Nl=0,Fl=!1,ms=(1+Math.sqrt(5))/2,qs=1/ms,Nu=[new R(-ms,qs,0),new R(ms,qs,0),new R(-qs,0,ms),new R(qs,0,ms),new R(0,ms,-qs),new R(0,ms,qs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,kl,Nl),this._renderer.xr.enabled=Fl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:ss,format:Zn,colorSpace:dr,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=dy(r,t,e)}return s}_compileMaterial(t){let e=new vt(this._lodPlanes[0],t);this._renderer.compile(e,Dl)}_sceneToCubeUV(t,e,n,s){let a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ku),h.toneMapping=Ki,h.autoClear=!1;let f=new he({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new vt(new ge,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(ku),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Oo(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===er||t.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_s-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],_=0;for(let T=0;T<_s;++T){let C=T/y,E=Math.exp(-C*C/2);p.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[s],P=3*x*(s>v-Zs?s-v+Zs:0),S=4*(this._cubeSize-x);Oo(e,P,S,3*x,2*x),l.setRenderTarget(e),l.render(u,Dl)}};function uy(i){let t=[],e=[],n=[],s=i,r=i-Zs+1+Uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Zs?l=Uu[o-i+Zs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,C=S>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(E,y*g*S),v.set(d,m*g*S);let M=[S,S,S,S,S,S];x.set(M,p*g*S)}let P=new Le;P.setAttribute("position",new Ie(_,y)),P.setAttribute("uv",new Ie(v,m)),P.setAttribute("faceIndex",new Ie(x,p)),t.push(P),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dy(i,t,e){let n=new Float32Array(_s),s=new R(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ou(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Bu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ql||l===tc,h=l===er||l===nr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ar(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ar(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function py(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function my(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let v=0,x=_.length;v<x;v+=3){let P=_[v+0],S=_[v+1],T=_[v+2];d.push(P,S,S,T,T,P)}}else if(g!==void 0){let _=g.array;y=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let P=v+0,S=v+1,T=v+2;d.push(P,S,S,T,T,P)}}else return;let m=new(Id(d)?sa:ia)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gy(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*y[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _y(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*P*4*u),T=new na(S,x,P,u);T.type=ai,T.needsUpdate=!0;let C=v*4;for(let M=0;M<u;M++){let D=m[M],z=p[M],B=_[M],H=x*P*4*M;for(let G=0;G<D.count;G++){let $=G*C;f===!0&&(s.fromBufferAttribute(D,G),S[H+$+0]=s.x,S[H+$+1]=s.y,S[H+$+2]=s.z,S[H+$+3]=0),g===!0&&(s.fromBufferAttribute(z,G),S[H+$+4]=s.x,S[H+$+5]=s.y,S[H+$+6]=s.z,S[H+$+7]=0),y===!0&&(s.fromBufferAttribute(B,G),S[H+$+8]=s.x,S[H+$+9]=s.y,S[H+$+10]=s.z,S[H+$+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new V(x,P)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xy(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var aa=class extends En{constructor(t,e,n,s,r,o,a,l,c,h=Ks){if(h!==Ks&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ks&&(n=Ms),n===void 0&&h===sr&&(n=ir),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kd=new En,Hu=new aa(1,1),Nd=new na,Fd=new Ic,Od=new oa,zu=[],Gu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function My(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function wy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),je(e,n)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),je(e,n)}}function Ty(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),je(e,n)}}function Ay(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function Iy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=Pd,r=Hu):r=kd,e.setTexture2D(t||r,s)}function Ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fd,s)}function Fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Od,s)}function Oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nd,s)}function By(i){switch(i){case 5126:return vy;case 35664:return My;case 35665:return by;case 35666:return Ey;case 35674:return wy;case 35675:return Sy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function Hy(i,t){i.uniform1fv(this.addr,t)}function zy(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function Gy(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function Vy(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function Wy(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xy(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qy(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yy(i,t){i.uniform1iv(this.addr,t)}function $y(i,t){i.uniform2iv(this.addr,t)}function Zy(i,t){i.uniform3iv(this.addr,t)}function Jy(i,t){i.uniform4iv(this.addr,t)}function Ky(i,t){i.uniform1uiv(this.addr,t)}function jy(i,t){i.uniform2uiv(this.addr,t)}function Qy(i,t){i.uniform3uiv(this.addr,t)}function t_(i,t){i.uniform4uiv(this.addr,t)}function e_(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kd,r[o])}function n_(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fd,r[o])}function i_(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Od,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nd,r[o])}function r_(i){switch(i){case 5126:return Hy;case 35664:return zy;case 35665:return Gy;case 35666:return Vy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Ky;case 36294:return jy;case 36295:return Qy;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=By(e.type)}},kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function qu(i,t){i.seq.push(t),i.map[t.id]=t}function o_(i,t,e){let n=i.name,s=n.length;for(Ol.lastIndex=0;;){let r=Ol.exec(n),o=Ol.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qu(e,c===void 0?new Uc(a,i,t):new kc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Nc(a),qu(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);o_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a_=37297,l_=0;function c_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $u=new le;function h_(i){me._getMatrix($u,me.workingColorSpace,i);let t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+c_(i.getShaderSource(t),o)}else return s}function u_(i,t){let e=h_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d_(i,t){let e;switch(t){case Ep:e="Linear";break;case wp:e="Reinhard";break;case Sp:e="Cineon";break;case mh:e="ACESFilmic";break;case Ap:e="AgX";break;case Rp:e="Neutral";break;case Tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bo=new R;function f_(){me.getLuminanceCoefficients(Bo);let i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function m_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function kr(i){return i!==""}function Ju(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(y_,x_)}var __=new Map;function x_(i,t){let e=ce[t];if(e===void 0){let n=__.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(v_,M_)}function M_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function E_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function S_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case Mp:t="ENVMAP_BLENDING_MIX";break;case bp:t="ENVMAP_BLENDING_ADD";break}return t}function T_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=b_(e),c=E_(e),h=w_(e),u=S_(e),d=T_(e),f=p_(e),g=m_(r),y=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?ce.tonemapping_pars_fragment:"",e.toneMapping!==Ki?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),o=Fc(o),o=Ju(o,e),o=Ku(o,e),a=Fc(a),a=Ju(a,e),a=Ku(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+o,x=_+p+a,P=Yu(s,s.VERTEX_SHADER,v),S=Yu(s,s.FRAGMENT_SHADER,x);s.attachShader(y,P),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(S).trim(),G=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,S);else{let at=Zu(s,P,"vertex"),Z=Zu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+at+`
`+Z)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&($=!1);$&&(D.diagnostics={runnable:G,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(S),C=new Qs(s,y),E=g_(s,y)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,a_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=S,this}var R_=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}};function C_(i,t,e,n,s,r,o){let a=new Vr,l=new Oc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,z,B){let H=z.fog,G=B.geometry,$=E.isMeshStandardMaterial?z.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),Z=at&&at.mapping===Ta?at.image.height:null,ct=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=_t!==void 0?_t.length:0,Xt=0;G.morphAttributes.position!==void 0&&(Xt=1),G.morphAttributes.normal!==void 0&&(Xt=2),G.morphAttributes.color!==void 0&&(Xt=3);let Kt,O,Q,dt;if(ct){let pe=ri[ct];Kt=pe.vertexShader,O=pe.fragmentShader}else Kt=E.vertexShader,O=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),dt=l.getFragmentShaderID(E);let lt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Zt=!!E.map,tt=!!E.matcap,et=!!at,I=!!E.aoMap,Dt=!!E.lightMap,st=!!E.bumpMap,gt=!!E.normalMap,ht=!!E.displacementMap,Ft=!!E.emissiveMap,Mt=!!E.metalnessMap,A=!!E.roughnessMap,b=E.anisotropy>0,U=E.clearcoat>0,W=E.dispersion>0,K=E.iridescence>0,L=E.sheen>0,q=E.transmission>0,j=b&&!!E.anisotropyMap,nt=U&&!!E.clearcoatMap,Nt=U&&!!E.clearcoatNormalMap,ot=U&&!!E.clearcoatRoughnessMap,yt=K&&!!E.iridescenceMap,Ut=K&&!!E.iridescenceThicknessMap,Jt=L&&!!E.sheenColorMap,Rt=L&&!!E.sheenRoughnessMap,oe=!!E.specularMap,ne=!!E.specularColorMap,xe=!!E.specularIntensityMap,k=q&&!!E.transmissionMap,Tt=q&&!!E.thicknessMap,J=!!E.gradientMap,rt=!!E.alphaMap,bt=E.alphaTest>0,Et=!!E.alphaHash,te=!!E.extensions,ve=Ki;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ve=i.toneMapping);let Je={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:O,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:dr,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:tt,envMap:et,envMapMode:et&&at.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Dt,bumpMap:st,normalMap:gt,displacementMap:d&&ht,emissiveMap:Ft,normalMapObjectSpace:gt&&E.normalMapType===Lp,normalMapTangentSpace:gt&&E.normalMapType===Cd,metalnessMap:Mt,roughnessMap:A,anisotropy:b,anisotropyMap:j,clearcoat:U,clearcoatMap:nt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:ot,dispersion:W,iridescence:K,iridescenceMap:yt,iridescenceThicknessMap:Ut,sheen:L,sheenColorMap:Jt,sheenRoughnessMap:Rt,specularMap:oe,specularColorMap:ne,specularIntensityMap:xe,transmission:q,transmissionMap:k,thicknessMap:Tt,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ji&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:Et,combine:E.combine,mapUv:Zt&&y(E.map.channel),aoMapUv:I&&y(E.aoMap.channel),lightMapUv:Dt&&y(E.lightMap.channel),bumpMapUv:st&&y(E.bumpMap.channel),normalMapUv:gt&&y(E.normalMap.channel),displacementMapUv:ht&&y(E.displacementMap.channel),emissiveMapUv:Ft&&y(E.emissiveMap.channel),metalnessMapUv:Mt&&y(E.metalnessMap.channel),roughnessMapUv:A&&y(E.roughnessMap.channel),anisotropyMapUv:j&&y(E.anisotropyMap.channel),clearcoatMapUv:nt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&y(E.sheenRoughnessMap.channel),specularMapUv:oe&&y(E.specularMap.channel),specularColorMapUv:ne&&y(E.specularColorMap.channel),specularIntensityMapUv:xe&&y(E.specularIntensityMap.channel),transmissionMapUv:k&&y(E.transmissionMap.channel),thicknessMapUv:Tt&&y(E.thicknessMap.channel),alphaMapUv:rt&&y(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(gt||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Zt||rt),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&me.getTransfer(E.map.colorSpace)===Ee,decodeVideoTextureEmissive:Ft&&E.emissiveMap.isVideoTexture===!0&&me.getTransfer(E.emissiveMap.colorSpace)===Ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ne,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:te&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let M=g[E.type],D;if(M){let z=ri[M];D=xm.clone(z.uniforms)}else D=E.uniforms;return D}function P(E,M){let D;for(let z=0,B=h.length;z<B;z++){let H=h[z];if(H.cacheKey===M){D=H,++D.usedTimes;break}}return D===void 0&&(D=new A_(i,M,E,r),h.push(D)),D}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function P_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ed(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||I_),n.length>1&&n.sort(d||td),s.length>1&&s.sort(d||td)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function L_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ed,i.set(n,[o])):s>=r.length?(o=new ed,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function D_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new St};break;case"SpotLight":e={position:new R,direction:new R,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k_=0;function N_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i){let t=new D_,e=U_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new _e,o=new _e;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,_=0,v=0,x=0,P=0,S=0,T=0;c.sort(N_);for(let E=0,M=c.length;E<M;E++){let D=c[E],z=D.color,B=D.intensity,H=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],B);T++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let at=D.shadow,Z=e.get(D);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=$,f++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(z).multiplyScalar(B),$.distance=H,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[y]=$;let at=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,at.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[y]=at.matrix,D.castShadow){let Z=e.get(D);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=G,x++}y++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(z).multiplyScalar(B),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let at=D.shadow,Z=e.get(D);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=$,g++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(B),$.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=T,n.version=k_++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function nd(i){let t=new F_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function O_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nd(i),t.set(s,[a])):r>=o.length?(a=new nd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hc=class extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z_(i,t,e){let n=new Wr,s=new V,r=new V,o=new we,a=new Hc({depthPacking:Ip}),l=new zc,c={},h=e.maxTextureSize,u={[Qi]:sn,[sn]:Qi,[Ne]:Ne},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:B_,fragmentShader:H_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Zi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=p!==Ti&&this.type===Ti,H=p===Ti&&this.type!==Ti;for(let G=0,$=S.length;G<$;G++){let at=S[G],Z=at.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ct=Z.getFrameExtents();if(s.multiply(ct),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||H===!0){let wt=this.type!==Ti?{minFilter:kn,magFilter:kn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Nn(s.x,s.y,wt),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let _t=Z.getViewportCount();for(let wt=0;wt<_t;wt++){let Xt=Z.getViewport(wt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),z.viewport(o),Z.updateMatrices(at,wt),n=Z.getFrustum(),x(T,C,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===Ti&&_(Z,C),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,D)};function _(S,T){let C=t.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,C,f,y,null)}function v(S,T,C,E){let M=null,D=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=M.uuid,B=T.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let G=H[B];G===void 0&&(G=M.clone(),H[B]=G,T.addEventListener("dispose",P)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Ti?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=C}return M}function x(S,T,C,E,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ti)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let G=B.groups;for(let $=0,at=G.length;$<at;$++){let Z=G[$],ct=H[Z.materialIndex];if(ct&&ct.visible){let _t=v(S,ct,E,M);S.onBeforeShadow(i,S,T,C,B,_t,Z),i.renderBufferDirect(C,null,B,_t,S,Z),S.onAfterShadow(i,S,T,C,B,_t,Z)}}}else if(H.visible){let G=v(S,H,E,M);S.onBeforeShadow(i,S,T,C,B,G,null),i.renderBufferDirect(C,null,B,G,S,null),S.onAfterShadow(i,S,T,C,B,G,null)}}let z=S.children;for(let B=0,H=z.length;B<H;B++)x(z[B],T,C,E,M)}function P(S){S.target.removeEventListener("dispose",P);for(let C in c){let E=c[C],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var G_={[ql]:Yl,[$l]:Kl,[Zl]:jl,[tr]:Jl,[Yl]:ql,[Kl]:$l,[jl]:Zl,[Jl]:tr};function V_(i,t){function e(){let k=!1,Tt=new we,J=null,rt=new we(0,0,0,0);return{setMask:function(bt){J!==bt&&!k&&(i.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){k=bt},setClear:function(bt,Et,te,ve,Je){Je===!0&&(bt*=ve,Et*=ve,te*=ve),Tt.set(bt,Et,te,ve),rt.equals(Tt)===!1&&(i.clearColor(bt,Et,te,ve),rt.copy(Tt))},reset:function(){k=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let k=!1,Tt=!1,J=null,rt=null,bt=null;return{setReversed:function(Et){if(Tt!==Et){let te=t.get("EXT_clip_control");Tt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);let ve=bt;bt=null,this.setClear(ve)}Tt=Et},getReversed:function(){return Tt},setTest:function(Et){Et?lt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Et){J!==Et&&!k&&(i.depthMask(Et),J=Et)},setFunc:function(Et){if(Tt&&(Et=G_[Et]),rt!==Et){switch(Et){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){bt!==Et&&(Tt&&(Et=1-Et),i.clearDepth(Et),bt=Et)},reset:function(){k=!1,J=null,rt=null,bt=null,Tt=!1}}}function s(){let k=!1,Tt=null,J=null,rt=null,bt=null,Et=null,te=null,ve=null,Je=null;return{setTest:function(pe){k||(pe?lt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(pe){Tt!==pe&&!k&&(i.stencilMask(pe),Tt=pe)},setFunc:function(pe,He,Pn){(J!==pe||rt!==He||bt!==Pn)&&(i.stencilFunc(pe,He,Pn),J=pe,rt=He,bt=Pn)},setOp:function(pe,He,Pn){(Et!==pe||te!==He||ve!==Pn)&&(i.stencilOp(pe,He,Pn),Et=pe,te=He,ve=Pn)},setLocked:function(pe){k=pe},setClear:function(pe){Je!==pe&&(i.clearStencil(pe),Je=pe)},reset:function(){k=!1,Tt=null,J=null,rt=null,bt=null,Et=null,te=null,ve=null,Je=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,_=null,v=null,x=null,P=null,S=null,T=new St(0,0,0),C=0,E=!1,M=null,D=null,z=null,B=null,H=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,at=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=at>=2);let ct=null,_t={},wt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),Kt=new we().fromArray(wt),O=new we().fromArray(Xt);function Q(k,Tt,J,rt){let bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(k,Et),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<J;te++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Tt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}let dt={};dt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(tr),st(!1),gt(su),lt(i.CULL_FACE),I(Zi);function lt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function pt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Lt(k,Tt){return u[k]!==Tt?(i.bindFramebuffer(k,Tt),u[k]=Tt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(k,Tt){let J=f,rt=!1;if(k){J=d.get(Tt),J===void 0&&(J=[],d.set(Tt,J));let bt=k.textures;if(J.length!==bt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,te=bt.length;Et<te;Et++)J[Et]=i.COLOR_ATTACHMENT0+Et;J.length=bt.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function Zt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let tt={[gs]:i.FUNC_ADD,[sp]:i.FUNC_SUBTRACT,[rp]:i.FUNC_REVERSE_SUBTRACT};tt[op]=i.MIN,tt[ap]=i.MAX;let et={[lp]:i.ZERO,[cp]:i.ONE,[hp]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[pp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[fp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[_p]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[vp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(k,Tt,J,rt,bt,Et,te,ve,Je,pe){if(k===Zi){y===!0&&(pt(i.BLEND),y=!1);return}if(y===!1&&(lt(i.BLEND),y=!0),k!==ip){if(k!==m||pe!==E){if((p!==gs||x!==gs)&&(i.blendEquation(i.FUNC_ADD),p=gs,x=gs),pe)switch(k){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,v=null,P=null,S=null,T.set(0,0,0),C=0,m=k,E=pe}return}bt=bt||Tt,Et=Et||J,te=te||rt,(Tt!==p||bt!==x)&&(i.blendEquationSeparate(tt[Tt],tt[bt]),p=Tt,x=bt),(J!==_||rt!==v||Et!==P||te!==S)&&(i.blendFuncSeparate(et[J],et[rt],et[Et],et[te]),_=J,v=rt,P=Et,S=te),(ve.equals(T)===!1||Je!==C)&&(i.blendColor(ve.r,ve.g,ve.b,Je),T.copy(ve),C=Je),m=k,E=!1}function Dt(k,Tt){k.side===Ne?pt(i.CULL_FACE):lt(i.CULL_FACE);let J=k.side===sn;Tt&&(J=!J),st(J),k.blending===Ji&&k.transparent===!1?I(Zi):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let rt=k.stencilWrite;a.setTest(rt),rt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function gt(k){k!==ep?(lt(i.CULL_FACE),k!==D&&(k===su?i.cullFace(i.BACK):k===np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=k}function ht(k){k!==z&&($&&i.lineWidth(k),z=k)}function Ft(k,Tt,J){k?(lt(i.POLYGON_OFFSET_FILL),(B!==Tt||H!==J)&&(i.polygonOffset(Tt,J),B=Tt,H=J)):pt(i.POLYGON_OFFSET_FILL)}function Mt(k){k?lt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+G-1),ct!==k&&(i.activeTexture(k),ct=k)}function b(k,Tt,J){J===void 0&&(ct===null?J=i.TEXTURE0+G-1:J=ct);let rt=_t[J];rt===void 0&&(rt={type:void 0,texture:void 0},_t[J]=rt),(rt.type!==k||rt.texture!==Tt)&&(ct!==J&&(i.activeTexture(J),ct=J),i.bindTexture(k,Tt||dt[k]),rt.type=k,rt.texture=Tt)}function U(){let k=_t[ct];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(k){Kt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Kt.copy(k))}function Rt(k){O.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),O.copy(k))}function oe(k,Tt){let J=c.get(Tt);J===void 0&&(J=new WeakMap,c.set(Tt,J));let rt=J.get(k);rt===void 0&&(rt=i.getUniformBlockIndex(Tt,k.name),J.set(k,rt))}function ne(k,Tt){let rt=c.get(Tt).get(k);l.get(Tt)!==rt&&(i.uniformBlockBinding(Tt,rt,k.__bindingPointIndex),l.set(Tt,rt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,_t={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,_=null,v=null,x=null,P=null,S=null,T=new St(0,0,0),C=0,E=!1,M=null,D=null,z=null,B=null,H=null,Kt.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:pt,bindFramebuffer:Lt,drawBuffers:kt,useProgram:Zt,setBlending:I,setMaterial:Dt,setFlipSided:st,setCullFace:gt,setLineWidth:ht,setPolygonOffset:Ft,setScissorTest:Mt,activeTexture:A,bindTexture:b,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:yt,texImage3D:Ut,updateUBOMapping:oe,uniformBlockBinding:ne,texStorage2D:Nt,texStorage3D:ot,texSubImage2D:L,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:nt,scissor:Jt,viewport:Rt,reset:xe}}function id(i,t,e,n){let s=W_(n);switch(e){case Ed:return i*t;case Sd:return i*t;case Td:return i*t*2;case xh:return i*t/s.components*s.byteLength;case vh:return i*t/s.components*s.byteLength;case Ad:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case wd:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case Yo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Ec:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rd:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W_(i){switch(i){case Ci:case vd:return{byteLength:1,components:1};case zr:case Md:case ss:return{byteLength:2,components:1};case yh:case _h:return{byteLength:2,components:4};case Ms:case gh:case ai:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new V,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):ta("canvas")}function y(A,b,U){let W=1,K=Mt(A);if((K.width>U||K.height>U)&&(W=U/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let L=Math.floor(W*K.width),q=Math.floor(W*K.height);u===void 0&&(u=g(L,q));let j=b?g(L,q):u;return j.width=L,j.height=q,j.getContext("2d").drawImage(A,0,0,L,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+L+"x"+q+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,b,U,W,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=b;if(b===i.RED&&(U===i.FLOAT&&(L=i.R32F),U===i.HALF_FLOAT&&(L=i.R16F),U===i.UNSIGNED_BYTE&&(L=i.R8)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.R8UI),U===i.UNSIGNED_SHORT&&(L=i.R16UI),U===i.UNSIGNED_INT&&(L=i.R32UI),U===i.BYTE&&(L=i.R8I),U===i.SHORT&&(L=i.R16I),U===i.INT&&(L=i.R32I)),b===i.RG&&(U===i.FLOAT&&(L=i.RG32F),U===i.HALF_FLOAT&&(L=i.RG16F),U===i.UNSIGNED_BYTE&&(L=i.RG8)),b===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RG8UI),U===i.UNSIGNED_SHORT&&(L=i.RG16UI),U===i.UNSIGNED_INT&&(L=i.RG32UI),U===i.BYTE&&(L=i.RG8I),U===i.SHORT&&(L=i.RG16I),U===i.INT&&(L=i.RG32I)),b===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RGB8UI),U===i.UNSIGNED_SHORT&&(L=i.RGB16UI),U===i.UNSIGNED_INT&&(L=i.RGB32UI),U===i.BYTE&&(L=i.RGB8I),U===i.SHORT&&(L=i.RGB16I),U===i.INT&&(L=i.RGB32I)),b===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),U===i.UNSIGNED_INT&&(L=i.RGBA32UI),U===i.BYTE&&(L=i.RGBA8I),U===i.SHORT&&(L=i.RGBA16I),U===i.INT&&(L=i.RGBA32I)),b===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),b===i.RGBA){let q=K?Aa:me.getTransfer(W);U===i.FLOAT&&(L=i.RGBA32F),U===i.HALF_FLOAT&&(L=i.RGBA16F),U===i.UNSIGNED_BYTE&&(L=q===Ee?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function x(A,b){let U;return A?b===null||b===Ms||b===ir?U=i.DEPTH24_STENCIL8:b===ai?U=i.DEPTH32F_STENCIL8:b===zr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ms||b===ir?U=i.DEPTH_COMPONENT24:b===ai?U=i.DEPTH_COMPONENT32F:b===zr&&(U=i.DEPTH_COMPONENT16),U}function P(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==kn&&A.minFilter!==oi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function S(A){let b=A.target;b.removeEventListener("dispose",S),C(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),M(b)}function C(A){let b=n.get(A);if(b.__webglInit===void 0)return;let U=A.source,W=d.get(U);if(W){let K=W[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(A),Object.keys(W).length===0&&d.delete(U)}n.remove(A)}function E(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let U=A.source,W=d.get(U);delete W[b.__cacheKey],o.memory.textures--}function M(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let K=0;K<b.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[W][K]);else i.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)i.deleteFramebuffer(b.__webglFramebuffer[W]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let U=A.textures;for(let W=0,K=U.length;W<K;W++){let L=n.get(U[W]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),o.memory.textures--),n.remove(U[W])}n.remove(A)}let D=0;function z(){D=0}function B(){let A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function H(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){let U=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){let W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(U,A,b);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function $(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){O(U,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function at(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){O(U,A,b);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function Z(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){Q(U,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}let ct={[ts]:i.REPEAT,[xs]:i.CLAMP_TO_EDGE,[ec]:i.MIRRORED_REPEAT},_t={[kn]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},wt={[Dp]:i.NEVER,[Bp]:i.ALWAYS,[Up]:i.LESS,[Pd]:i.LEQUAL,[kp]:i.EQUAL,[Op]:i.GEQUAL,[Np]:i.GREATER,[Fp]:i.NOTEQUAL};function Xt(A,b){if(b.type===ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===oi||b.magFilter===ul||b.magFilter===xo||b.magFilter===vs||b.minFilter===oi||b.minFilter===ul||b.minFilter===xo||b.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ct[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ct[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ct[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_t[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==xo&&b.minFilter!==vs||b.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(A,b){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",S));let W=b.source,K=d.get(W);K===void 0&&(K={},d.set(W,K));let L=H(b);if(L!==A.__cacheKey){K[L]===void 0&&(K[L]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[L].usedTimes++;let q=K[A.__cacheKey];q!==void 0&&(K[A.__cacheKey].usedTimes--,q.usedTimes===0&&E(b)),A.__cacheKey=L,A.__webglTexture=K[L].texture}return U}function O(A,b,U){let W=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=i.TEXTURE_3D);let K=Kt(A,b),L=b.source;e.bindTexture(W,A.__webglTexture,i.TEXTURE0+U);let q=n.get(L);if(L.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+U);let j=me.getPrimaries(me.workingColorSpace),nt=b.colorSpace===$i?null:me.getPrimaries(b.colorSpace),Nt=b.colorSpace===$i||j===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ot=y(b.image,!1,s.maxTextureSize);ot=Ft(b,ot);let yt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),Jt=v(b.internalFormat,yt,Ut,b.colorSpace,b.isVideoTexture);Xt(W,b);let Rt,oe=b.mipmaps,ne=b.isVideoTexture!==!0,xe=q.__version===void 0||K===!0,k=L.dataReady,Tt=P(b,ot);if(b.isDepthTexture)Jt=x(b.format===sr,b.type),xe&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Jt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Jt,ot.width,ot.height,0,yt,Ut,null));else if(b.isDataTexture)if(oe.length>0){ne&&xe&&e.texStorage2D(i.TEXTURE_2D,Tt,Jt,oe[0].width,oe[0].height);for(let J=0,rt=oe.length;J<rt;J++)Rt=oe[J],ne?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,yt,Ut,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Jt,Rt.width,Rt.height,0,yt,Ut,Rt.data);b.generateMipmaps=!1}else ne?(xe&&e.texStorage2D(i.TEXTURE_2D,Tt,Jt,ot.width,ot.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,Ut,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,ot.width,ot.height,0,yt,Ut,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Jt,oe[0].width,oe[0].height,ot.depth);for(let J=0,rt=oe.length;J<rt;J++)if(Rt=oe[J],b.format!==Zn)if(yt!==null)if(ne){if(k)if(b.layerUpdates.size>0){let bt=id(Rt.width,Rt.height,b.format,b.type);for(let Et of b.layerUpdates){let te=Rt.data.subarray(Et*bt/Rt.data.BYTES_PER_ELEMENT,(Et+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Et,Rt.width,Rt.height,1,yt,te)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,ot.depth,yt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Jt,Rt.width,Rt.height,ot.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,ot.depth,yt,Ut,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Jt,Rt.width,Rt.height,ot.depth,0,yt,Ut,Rt.data)}else{ne&&xe&&e.texStorage2D(i.TEXTURE_2D,Tt,Jt,oe[0].width,oe[0].height);for(let J=0,rt=oe.length;J<rt;J++)Rt=oe[J],b.format!==Zn?yt!==null?ne?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,yt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,yt,Ut,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Jt,Rt.width,Rt.height,0,yt,Ut,Rt.data)}else if(b.isDataArrayTexture)if(ne){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Jt,ot.width,ot.height,ot.depth),k)if(b.layerUpdates.size>0){let J=id(ot.width,ot.height,b.format,b.type);for(let rt of b.layerUpdates){let bt=ot.data.subarray(rt*J/ot.data.BYTES_PER_ELEMENT,(rt+1)*J/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ot.width,ot.height,1,yt,Ut,bt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Ut,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,ot.width,ot.height,ot.depth,0,yt,Ut,ot.data);else if(b.isData3DTexture)ne?(xe&&e.texStorage3D(i.TEXTURE_3D,Tt,Jt,ot.width,ot.height,ot.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Ut,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,ot.width,ot.height,ot.depth,0,yt,Ut,ot.data);else if(b.isFramebufferTexture){if(xe)if(ne)e.texStorage2D(i.TEXTURE_2D,Tt,Jt,ot.width,ot.height);else{let J=ot.width,rt=ot.height;for(let bt=0;bt<Tt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Jt,J,rt,0,yt,Ut,null),J>>=1,rt>>=1}}else if(oe.length>0){if(ne&&xe){let J=Mt(oe[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Jt,J.width,J.height)}for(let J=0,rt=oe.length;J<rt;J++)Rt=oe[J],ne?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,yt,Ut,Rt):e.texImage2D(i.TEXTURE_2D,J,Jt,yt,Ut,Rt);b.generateMipmaps=!1}else if(ne){if(xe){let J=Mt(ot);e.texStorage2D(i.TEXTURE_2D,Tt,Jt,J.width,J.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,ot)}else e.texImage2D(i.TEXTURE_2D,0,Jt,yt,Ut,ot);m(b)&&p(W),q.__version=L.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,U){if(b.image.length!==6)return;let W=Kt(A,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let L=n.get(K);if(K.version!==L.__version||W===!0){e.activeTexture(i.TEXTURE0+U);let q=me.getPrimaries(me.workingColorSpace),j=b.colorSpace===$i?null:me.getPrimaries(b.colorSpace),nt=b.colorSpace===$i||q===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Nt=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!Nt&&!ot?yt[rt]=y(b.image[rt],!0,s.maxCubemapSize):yt[rt]=ot?b.image[rt].image:b.image[rt],yt[rt]=Ft(b,yt[rt]);let Ut=yt[0],Jt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),oe=v(b.internalFormat,Jt,Rt,b.colorSpace),ne=b.isVideoTexture!==!0,xe=L.__version===void 0||W===!0,k=K.dataReady,Tt=P(b,Ut);Xt(i.TEXTURE_CUBE_MAP,b);let J;if(Nt){ne&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,oe,Ut.width,Ut.height);for(let rt=0;rt<6;rt++){J=yt[rt].mipmaps;for(let bt=0;bt<J.length;bt++){let Et=J[bt];b.format!==Zn?Jt!==null?ne?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Et.width,Et.height,Jt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,oe,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Et.width,Et.height,Jt,Rt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,oe,Et.width,Et.height,0,Jt,Rt,Et.data)}}}else{if(J=b.mipmaps,ne&&xe){J.length>0&&Tt++;let rt=Mt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,oe,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ot){ne?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Jt,Rt,yt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,yt[rt].width,yt[rt].height,0,Jt,Rt,yt[rt].data);for(let bt=0;bt<J.length;bt++){let te=J[bt].image[rt].image;ne?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,te.width,te.height,Jt,Rt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,oe,te.width,te.height,0,Jt,Rt,te.data)}}else{ne?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Jt,Rt,yt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,Jt,Rt,yt[rt]);for(let bt=0;bt<J.length;bt++){let Et=J[bt];ne?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Jt,Rt,Et.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,oe,Jt,Rt,Et.image[rt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),L.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function dt(A,b,U,W,K,L){let q=r.convert(U.format,U.colorSpace),j=r.convert(U.type),nt=v(U.internalFormat,q,j,U.colorSpace),Nt=n.get(b),ot=n.get(U);if(ot.__renderTarget=b,!Nt.__hasExternalTextures){let yt=Math.max(1,b.width>>L),Ut=Math.max(1,b.height>>L);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,L,nt,yt,Ut,b.depth,0,q,j,null):e.texImage2D(K,L,nt,yt,Ut,0,q,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,ot.__webglTexture,0,st(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,ot.__webglTexture,L),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let W=b.depthTexture,K=W&&W.isDepthTexture?W.type:null,L=x(b.stencilBuffer,K),q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=st(b);gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,L,b.width,b.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,L,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,L,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,A)}else{let W=b.textures;for(let K=0;K<W.length;K++){let L=W[K],q=r.convert(L.format,L.colorSpace),j=r.convert(L.type),nt=v(L.internalFormat,q,j,L.colorSpace),Nt=st(b);U&&gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,nt,b.width,b.height):gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,nt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,nt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(b.depthTexture);W.__renderTarget=b,(!W.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let K=W.__webglTexture,L=st(b);if(b.depthTexture.format===Ks)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===sr)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(A){let b=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=W}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");pt(b.__webglFramebuffer,A)}else if(U){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[W],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,L)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,A,!1);else{let W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,b,U){let W=n.get(A);b!==void 0&&dt(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Lt(A)}function Zt(A){let b=A.texture,U=n.get(A),W=n.get(b);A.addEventListener("dispose",T);let K=A.textures,L=A.isWebGLCubeRenderTarget===!0,q=K.length>1;if(q||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=b.version,o.memory.textures++),L){U.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[j]=[];for(let nt=0;nt<b.mipmaps.length;nt++)U.__webglFramebuffer[j][nt]=i.createFramebuffer()}else U.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)U.__webglFramebuffer[j]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(q)for(let j=0,nt=K.length;j<nt;j++){let Nt=n.get(K[j]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&gt(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let nt=K[j];U.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[j]);let Nt=r.convert(nt.format,nt.colorSpace),ot=r.convert(nt.type),yt=v(nt.internalFormat,Nt,ot,nt.colorSpace,A.isXRRenderTarget===!0),Ut=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,U.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(U.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)dt(U.__webglFramebuffer[j][nt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else dt(U.__webglFramebuffer[j],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let j=0,nt=K.length;j<nt;j++){let Nt=K[j],ot=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Xt(i.TEXTURE_2D,Nt),dt(U.__webglFramebuffer,A,Nt,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),m(Nt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,W.__webglTexture),Xt(j,b),b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)dt(U.__webglFramebuffer[nt],A,b,i.COLOR_ATTACHMENT0,j,nt);else dt(U.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,j,0);m(b)&&p(j),e.unbindTexture()}A.depthBuffer&&Lt(A)}function tt(A){let b=A.textures;for(let U=0,W=b.length;U<W;U++){let K=b[U];if(m(K)){let L=_(A),q=n.get(K).__webglTexture;e.bindTexture(L,q),p(L),e.unbindTexture()}}}let et=[],I=[];function Dt(A){if(A.samples>0){if(gt(A)===!1){let b=A.textures,U=A.width,W=A.height,K=i.COLOR_BUFFER_BIT,L=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(A),j=b.length>1;if(j)for(let nt=0;nt<b.length;nt++)e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let Nt=n.get(b[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,K,i.NEAREST),l===!0&&(et.length=0,I.length=0,et.push(i.COLOR_ATTACHMENT0+nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push(L),I.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let nt=0;nt<b.length;nt++){e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let Nt=n.get(b[nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function gt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ft(A,b){let U=A.colorSpace,W=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==dr&&U!==$i&&(me.getTransfer(U)===Ee?(W!==Zn||K!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=kt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=gt}function q_(i,t){function e(n,s=$i){let r,o=me.getTransfer(s);if(n===Ci)return i.UNSIGNED_BYTE;if(n===yh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vd)return i.BYTE;if(n===Md)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===gh)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===wd)return i.RGB;if(n===Zn)return i.RGBA;if(n===Sd)return i.LUMINANCE;if(n===Td)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===vh)return i.RED_INTEGER;if(n===Ad)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===Yo||n===$o||n===Zo||n===Jo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===yc||n===_c||n===xc||n===vc||n===Mc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Ec||n===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rd||n===Sc||n===Tc||n===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Gc=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xt=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y_={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new En,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:$_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vt(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new Vc,m=e.getContextAttributes(),p=null,_=null,v=[],x=[],P=new V,S=null,T=new un;T.viewport=new we;let C=new un;C.viewport=new we;let E=[T,C],M=new Gc,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Q=v[O];return Q===void 0&&(Q=new Or,v[O]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(O){let Q=v[O];return Q===void 0&&(Q=new Or,v[O]=Q),Q.getGripSpace()},this.getHand=function(O){let Q=v[O];return Q===void 0&&(Q=new Or,v[O]=Q),Q.getHandSpace()};function B(O){let Q=x.indexOf(O.inputSource);if(Q===-1)return;let dt=v[Q];dt!==void 0&&(dt.update(O.inputSource,O.frame,c||o),dt.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let O=0;O<v.length;O++){let Q=x[O];Q!==null&&(x[O]=null,v[O].disconnect(Q))}D=null,z=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?sr:Ks,dt=m.stencil?ir:Ms);let pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Nn(d.textureWidth,d.textureHeight,{format:Zn,type:Ci,depthTexture:new aa(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(O){for(let Q=0;Q<O.removed.length;Q++){let dt=O.removed[Q],lt=x.indexOf(dt);lt>=0&&(x[lt]=null,v[lt].disconnect(dt))}for(let Q=0;Q<O.added.length;Q++){let dt=O.added[Q],lt=x.indexOf(dt);if(lt===-1){for(let Lt=0;Lt<v.length;Lt++)if(Lt>=x.length){x.push(dt),lt=Lt;break}else if(x[Lt]===null){x[Lt]=dt,lt=Lt;break}if(lt===-1)break}let pt=v[lt];pt&&pt.connect(dt)}}let $=new R,at=new R;function Z(O,Q,dt){$.setFromMatrixPosition(Q.matrixWorld),at.setFromMatrixPosition(dt.matrixWorld);let lt=$.distanceTo(at),pt=Q.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,kt=pt[14]/(pt[10]-1),Zt=pt[14]/(pt[10]+1),tt=(pt[9]+1)/pt[5],et=(pt[9]-1)/pt[5],I=(pt[8]-1)/pt[0],Dt=(Lt[8]+1)/Lt[0],st=kt*I,gt=kt*Dt,ht=lt/(-I+Dt),Ft=ht*-I;if(Q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ft),O.translateZ(ht),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),pt[10]===-1)O.projectionMatrix.copy(Q.projectionMatrix),O.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Mt=kt+ht,A=Zt+ht,b=st-Ft,U=gt+(lt-Ft),W=tt*Zt/A*Mt,K=et*Zt/A*Mt;O.projectionMatrix.makePerspective(b,U,W,K,Mt,A),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ct(O,Q){Q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Q=O.near,dt=O.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),M.near=C.near=T.near=Q,M.far=C.far=T.far=dt,(D!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),T.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;let lt=O.parent,pt=M.cameras;ct(M,lt);for(let Lt=0;Lt<pt.length;Lt++)ct(pt[Lt],lt);pt.length===2?Z(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),_t(O,M,lt)};function _t(O,Q,dt){dt===null?O.matrix.copy(Q.matrixWorld):(O.matrix.copy(dt.matrixWorld),O.matrix.invert(),O.matrix.multiply(Q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Q.projectionMatrix),O.projectionMatrixInverse.copy(Q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Gr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let wt=null;function Xt(O,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let lt=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Lt=0;Lt<dt.length;Lt++){let kt=dt[Lt],Zt=null;if(f!==null)Zt=f.getViewport(kt);else{let et=u.getViewSubImage(d,kt);Zt=et.viewport,Lt===0&&(t.setRenderTargetTextures(_,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(_))}let tt=E[Lt];tt===void 0&&(tt=new un,tt.layers.enable(Lt),tt.viewport=new we,E[Lt]=tt),tt.matrix.fromArray(kt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(kt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Lt===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(tt)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let Lt=u.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(t,Lt,s.renderState)}}for(let dt=0;dt<v.length;dt++){let lt=x[dt],pt=v[dt];lt!==null&&pt!==void 0&&pt.update(lt,Q,c||o)}wt&&wt(O,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Kt=new Ud;Kt.setAnimationLoop(Xt),this.setAnimationLoop=function(O){wt=O},this.dispose=function(){}}},ps=new ci,J_=new _e;function K_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,ps.copy(x),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(ps)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function c(_,v){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(_,P);let S=t.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let v=u();_.__bindingPointIndex=v;let x=i.createBuffer(),P=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],x=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=x.length;S<T;S++){let C=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,M=C.length;E<M;E++){let D=C[E];if(f(D,S,E,P)===!0){let z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],H=0;for(let G=0;G<B.length;G++){let $=B[G],at=y($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,z+H,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,H),H+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,x,P){let S=_.value,T=v+"_"+x;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{let C=P[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return P[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(_){let v=_.uniforms,x=0,P=16;for(let T=0,C=v.length;T<C;T++){let E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,D=E.length;M<D;M++){let z=E[M],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,G=B.length;H<G;H++){let $=B[H],at=y($),Z=x%P,ct=Z%at.boundary,_t=Z+ct;x+=ct,_t!==0&&P-_t<at.storage&&(x+=P-_t),z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=at.storage}}}let S=x%P;return S>0&&(x+=P-S),_.__size=x,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var la=class{constructor(t={}){let{canvas:e=nm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ki,this.toneMappingExposure=1;let x=this,P=!1,S=0,T=0,C=null,E=-1,M=null,D=new we,z=new we,B=null,H=new St(0),G=0,$=e.width,at=e.height,Z=1,ct=null,_t=null,wt=new we(0,0,$,at),Xt=new we(0,0,$,at),Kt=!1,O=new Wr,Q=!1,dt=!1,lt=new _e,pt=new _e,Lt=new R,kt=new we,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function et(){return C===null?Z:1}let I=n;function Dt(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),I===null){let N="webgl2";if(I=Dt(N,w),I===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,gt,ht,Ft,Mt,A,b,U,W,K,L,q,j,nt,Nt,ot,yt,Ut,Jt,Rt,oe,ne,xe,k;function Tt(){st=new py(I),st.init(),ne=new q_(I,st),gt=new ly(I,st,t,ne),ht=new V_(I,st),gt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Ft=new yy(I),Mt=new P_,A=new X_(I,st,ht,Mt,gt,ne,Ft),b=new hy(x),U=new fy(x),W=new wm(I),xe=new oy(I,W),K=new my(I,W,Ft,xe),L=new xy(I,K,W,Ft),Jt=new _y(I,gt,A),ot=new cy(Mt),q=new C_(x,b,U,st,gt,xe,ot),j=new K_(x,Mt),nt=new L_,Nt=new O_(st),Ut=new ry(x,b,U,ht,L,f,l),yt=new z_(x,L,gt),k=new j_(I,Ft,gt,ht),Rt=new ay(I,st,Ft),oe=new gy(I,st,Ft),Ft.programs=q.programs,x.capabilities=gt,x.extensions=st,x.properties=Mt,x.renderLists=nt,x.shadowMap=yt,x.state=ht,x.info=Ft}Tt();let J=new Wc(x,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize($,at,!1))},this.getSize=function(w){return w.set($,at)},this.setSize=function(w,N,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,at=N,e.width=Math.floor(w*Z),e.height=Math.floor(N*Z),X===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*Z,at*Z).floor()},this.setDrawingBufferSize=function(w,N,X){$=w,at=N,Z=X,e.width=Math.floor(w*X),e.height=Math.floor(N*X),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,N,X,Y){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,N,X,Y),ht.viewport(D.copy(wt).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,N,X,Y){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,N,X,Y),ht.scissor(z.copy(Xt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){ht.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,N=!0,X=!0){let Y=0;if(w){let F=!1;if(C!==null){let mt=C.texture.format;F=mt===bh||mt===Mh||mt===vh}if(F){let mt=C.texture.type,Pt=mt===Ci||mt===Ms||mt===zr||mt===ir||mt===yh||mt===_h,Gt=Ut.getClearColor(),Vt=Ut.getClearAlpha(),ie=Gt.r,ae=Gt.g,Wt=Gt.b;Pt?(g[0]=ie,g[1]=ae,g[2]=Wt,g[3]=Vt,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=ie,y[1]=ae,y[2]=Wt,y[3]=Vt,I.clearBufferiv(I.COLOR,0,y))}else Y|=I.COLOR_BUFFER_BIT}N&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),nt.dispose(),Nt.dispose(),Mt.dispose(),b.dispose(),U.dispose(),L.dispose(),xe.dispose(),k.dispose(),q.dispose(),J.dispose(),J.removeEventListener("sessionstart",Is),J.removeEventListener("sessionend",Bi),ni.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=Ft.autoReset,N=yt.enabled,X=yt.autoUpdate,Y=yt.needsUpdate,F=yt.type;Tt(),Ft.autoReset=w,yt.enabled=N,yt.autoUpdate=X,yt.needsUpdate=Y,yt.type=F}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){let N=w.target;N.removeEventListener("dispose",te),ve(N)}function ve(w){Je(w),Mt.remove(w)}function Je(w){let N=Mt.get(w).programs;N!==void 0&&(N.forEach(function(X){q.releaseProgram(X)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,X,Y,F,mt){N===null&&(N=Zt);let Pt=F.isMesh&&F.matrixWorld.determinant()<0,Gt=On(w,N,X,Y,F);ht.setMaterial(Y,Pt);let Vt=X.index,ie=1;if(Y.wireframe===!0){if(Vt=K.getWireframeAttribute(X),Vt===void 0)return;ie=2}let ae=X.drawRange,Wt=X.attributes.position,ye=ae.start*ie,Ce=(ae.start+ae.count)*ie;mt!==null&&(ye=Math.max(ye,mt.start*ie),Ce=Math.min(Ce,(mt.start+mt.count)*ie)),Vt!==null?(ye=Math.max(ye,0),Ce=Math.min(Ce,Vt.count)):Wt!=null&&(ye=Math.max(ye,0),Ce=Math.min(Ce,Wt.count));let Ue=Ce-ye;if(Ue<0||Ue===1/0)return;xe.setup(F,Y,Gt,X,Vt);let bn,Me=Rt;if(Vt!==null&&(bn=W.get(Vt),Me=oe,Me.setIndex(bn)),F.isMesh)Y.wireframe===!0?(ht.setLineWidth(Y.wireframeLinewidth*et()),Me.setMode(I.LINES)):Me.setMode(I.TRIANGLES);else if(F.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),ht.setLineWidth(Yt*et()),F.isLineSegments?Me.setMode(I.LINES):F.isLineLoop?Me.setMode(I.LINE_LOOP):Me.setMode(I.LINE_STRIP)}else F.isPoints?Me.setMode(I.POINTS):F.isSprite&&Me.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Me.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Yt=F._multiDrawStarts,vi=F._multiDrawCounts,be=F._multiDrawCount,Xn=Vt?W.get(Vt).bytesPerElement:1,Ls=Mt.get(Y).currentProgram.getUniforms();for(let In=0;In<be;In++)Ls.setValue(I,"_gl_DrawID",In),Me.render(Yt[In]/Xn,vi[In])}else if(F.isInstancedMesh)Me.renderInstances(ye,Ue,F.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vi=Math.min(X.instanceCount,Yt);Me.renderInstances(ye,Ue,vi)}else Me.render(ye,Ue)};function pe(w,N,X){w.transparent===!0&&w.side===Ne&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,ze(w,N,X),w.side=Qi,w.needsUpdate=!0,ze(w,N,X),w.side=Ne):ze(w,N,X)}this.compile=function(w,N,X=null){X===null&&(X=w),p=Nt.get(X),p.init(N),v.push(p),X.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==X&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let Y=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let mt=F.material;if(mt)if(Array.isArray(mt))for(let Pt=0;Pt<mt.length;Pt++){let Gt=mt[Pt];pe(Gt,X,F),Y.add(Gt)}else pe(mt,X,F),Y.add(mt)}),v.pop(),p=null,Y},this.compileAsync=function(w,N,X=null){let Y=this.compile(w,N,X);return new Promise(F=>{function mt(){if(Y.forEach(function(Pt){Mt.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){F(w);return}setTimeout(mt,10)}st.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let He=null;function Pn(w){He&&He(w)}function Is(){ni.stop()}function Bi(){ni.start()}let ni=new Ud;ni.setAnimationLoop(Pn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){He=w,J.setAnimationLoop(w),w===null?ni.stop():ni.start()},J.addEventListener("sessionstart",Is),J.addEventListener("sessionend",Bi),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),p=Nt.get(w,v.length),p.init(N),v.push(p),pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),O.setFromProjectionMatrix(pt),dt=this.localClippingEnabled,Q=ot.init(this.clippingPlanes,dt),m=nt.get(w,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){let mt=x.xr.getDepthSensingMesh();mt!==null&&wr(mt,N,-1/0,x.sortObjects)}wr(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,_t),tt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,tt&&Ut.addToRenderList(m,w),this.info.render.frame++,Q===!0&&ot.beginShadows();let X=p.state.shadowsArray;yt.render(X,w,N),Q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let mt=N.cameras;if(F.length>0)for(let Pt=0,Gt=mt.length;Pt<Gt;Pt++){let Vt=mt[Pt];Ot(Y,F,w,Vt)}tt&&Ut.render(w);for(let Pt=0,Gt=mt.length;Pt<Gt;Pt++){let Vt=mt[Pt];it(m,w,Vt,Vt.viewport)}}else F.length>0&&Ot(Y,F,w,N),tt&&Ut.render(w),it(m,w,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),xe.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function wr(w,N,X,Y){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||O.intersectsSprite(w)){Y&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);let Pt=L.update(w),Gt=w.material;Gt.visible&&m.push(w,Pt,Gt,X,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||O.intersectsObject(w))){let Pt=L.update(w),Gt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),kt.copy(Pt.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(Gt)){let Vt=Pt.groups;for(let ie=0,ae=Vt.length;ie<ae;ie++){let Wt=Vt[ie],ye=Gt[Wt.materialIndex];ye&&ye.visible&&m.push(w,Pt,ye,X,kt.z,Wt)}}else Gt.visible&&m.push(w,Pt,Gt,X,kt.z,null)}}let mt=w.children;for(let Pt=0,Gt=mt.length;Pt<Gt;Pt++)wr(mt[Pt],N,X,Y)}function it(w,N,X,Y){let F=w.opaque,mt=w.transmissive,Pt=w.transparent;p.setupLightsView(X),Q===!0&&ot.setGlobalState(x.clippingPlanes,X),Y&&ht.viewport(D.copy(Y)),F.length>0&&Bt(F,N,X),mt.length>0&&Bt(mt,N,X),Pt.length>0&&Bt(Pt,N,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Ot(w,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Nn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ss:Ci,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let mt=p.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||D;mt.setSize(Pt.z,Pt.w);let Gt=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(H),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Ut.render(X);let Vt=x.toneMapping;x.toneMapping=Ki;let ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&ot.setGlobalState(x.clippingPlanes,Y),Bt(w,X,Y),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),st.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Wt=0,ye=N.length;Wt<ye;Wt++){let Ce=N[Wt],Ue=Ce.object,bn=Ce.geometry,Me=Ce.material,Yt=Ce.group;if(Me.side===Ne&&Ue.layers.test(Y.layers)){let vi=Me.side;Me.side=sn,Me.needsUpdate=!0,De(Ue,X,Y,bn,Me,Yt),Me.side=vi,Me.needsUpdate=!0,ae=!0}}ae===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}x.setRenderTarget(Gt),x.setClearColor(H,G),ie!==void 0&&(Y.viewport=ie),x.toneMapping=Vt}function Bt(w,N,X){let Y=N.isScene===!0?N.overrideMaterial:null;for(let F=0,mt=w.length;F<mt;F++){let Pt=w[F],Gt=Pt.object,Vt=Pt.geometry,ie=Y===null?Pt.material:Y,ae=Pt.group;Gt.layers.test(X.layers)&&De(Gt,N,X,Vt,ie,ae)}}function De(w,N,X,Y,F,mt){w.onBeforeRender(x,N,X,Y,F,mt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,X,Y,w,mt),F.transparent===!0&&F.side===Ne&&F.forceSinglePass===!1?(F.side=sn,F.needsUpdate=!0,x.renderBufferDirect(X,N,Y,F,w,mt),F.side=Qi,F.needsUpdate=!0,x.renderBufferDirect(X,N,Y,F,w,mt),F.side=Ne):x.renderBufferDirect(X,N,Y,F,w,mt),w.onAfterRender(x,N,X,Y,F,mt)}function ze(w,N,X){N.isScene!==!0&&(N=Zt);let Y=Mt.get(w),F=p.state.lights,mt=p.state.shadowsArray,Pt=F.state.version,Gt=q.getParameters(w,F.state,mt,N,X),Vt=q.getProgramCacheKey(Gt),ie=Y.programs;Y.environment=w.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(w.isMeshStandardMaterial?U:b).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",te),ie=new Map,Y.programs=ie);let ae=ie.get(Vt);if(ae!==void 0){if(Y.currentProgram===ae&&Y.lightsStateVersion===Pt)return Wn(w,Gt),ae}else Gt.uniforms=q.getUniforms(w),w.onBeforeCompile(Gt,x),ae=q.acquireProgram(Gt,Vt),ie.set(Vt,ae),Y.uniforms=Gt.uniforms;let Wt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=ot.uniform),Wn(w,Gt),Y.needsLights=ii(w),Y.lightsStateVersion=Pt,Y.needsLights&&(Wt.ambientLightColor.value=F.state.ambient,Wt.lightProbe.value=F.state.probe,Wt.directionalLights.value=F.state.directional,Wt.directionalLightShadows.value=F.state.directionalShadow,Wt.spotLights.value=F.state.spot,Wt.spotLightShadows.value=F.state.spotShadow,Wt.rectAreaLights.value=F.state.rectArea,Wt.ltc_1.value=F.state.rectAreaLTC1,Wt.ltc_2.value=F.state.rectAreaLTC2,Wt.pointLights.value=F.state.point,Wt.pointLightShadows.value=F.state.pointShadow,Wt.hemisphereLights.value=F.state.hemi,Wt.directionalShadowMap.value=F.state.directionalShadowMap,Wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Wt.spotShadowMap.value=F.state.spotShadowMap,Wt.spotLightMatrix.value=F.state.spotLightMatrix,Wt.spotLightMap.value=F.state.spotLightMap,Wt.pointShadowMap.value=F.state.pointShadowMap,Wt.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=ae,Y.uniformsList=null,ae}function Fe(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Qs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Wn(w,N){let X=Mt.get(w);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function On(w,N,X,Y,F){N.isScene!==!0&&(N=Zt),A.resetTextureUnits();let mt=N.fog,Pt=Y.isMeshStandardMaterial?N.environment:null,Gt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:dr,Vt=(Y.isMeshStandardMaterial?U:b).get(Y.envMap||Pt),ie=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Wt=!!X.morphAttributes.position,ye=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color,Ue=Ki;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ue=x.toneMapping);let bn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=bn!==void 0?bn.length:0,Yt=Mt.get(Y),vi=p.state.lights;if(Q===!0&&(dt===!0||w!==M)){let Bn=w===M&&Y.id===E;ot.setState(Y,w,Bn)}let be=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==vi.state.version||Yt.outputColorSpace!==Gt||F.isBatchedMesh&&Yt.batching===!1||!F.isBatchedMesh&&Yt.batching===!0||F.isBatchedMesh&&Yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Yt.instancing===!1||!F.isInstancedMesh&&Yt.instancing===!0||F.isSkinnedMesh&&Yt.skinning===!1||!F.isSkinnedMesh&&Yt.skinning===!0||F.isInstancedMesh&&Yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Yt.instancingMorph===!1&&F.morphTexture!==null||Yt.envMap!==Vt||Y.fog===!0&&Yt.fog!==mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==ot.numPlanes||Yt.numIntersection!==ot.numIntersection)||Yt.vertexAlphas!==ie||Yt.vertexTangents!==ae||Yt.morphTargets!==Wt||Yt.morphNormals!==ye||Yt.morphColors!==Ce||Yt.toneMapping!==Ue||Yt.morphTargetsCount!==Me)&&(be=!0):(be=!0,Yt.__version=Y.version);let Xn=Yt.currentProgram;be===!0&&(Xn=ze(Y,N,F));let Ls=!1,In=!1,Sr=!1,ke=Xn.getUniforms(),si=Yt.uniforms;if(ht.useProgram(Xn.program)&&(Ls=!0,In=!0,Sr=!0),Y.id!==E&&(E=Y.id,In=!0),Ls||M!==w){ht.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),sm(lt),rm(lt),ke.setValue(I,"projectionMatrix",lt)):ke.setValue(I,"projectionMatrix",w.projectionMatrix),ke.setValue(I,"viewMatrix",w.matrixWorldInverse);let Hi=ke.map.cameraPosition;Hi!==void 0&&Hi.setValue(I,Lt.setFromMatrixPosition(w.matrixWorld)),gt.logarithmicDepthBuffer&&ke.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ke.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,In=!0,Sr=!0)}if(F.isSkinnedMesh){ke.setOptional(I,F,"bindMatrix"),ke.setOptional(I,F,"bindMatrixInverse");let Bn=F.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),ke.setValue(I,"boneTexture",Bn.boneTexture,A))}F.isBatchedMesh&&(ke.setOptional(I,F,"batchingTexture"),ke.setValue(I,"batchingTexture",F._matricesTexture,A),ke.setOptional(I,F,"batchingIdTexture"),ke.setValue(I,"batchingIdTexture",F._indirectTexture,A),ke.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&ke.setValue(I,"batchingColorTexture",F._colorsTexture,A));let Tr=X.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Jt.update(F,X,Xn),(In||Yt.receiveShadow!==F.receiveShadow)&&(Yt.receiveShadow=F.receiveShadow,ke.setValue(I,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(si.envMap.value=Vt,si.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(si.envMapIntensity.value=N.environmentIntensity),In&&(ke.setValue(I,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&xi(si,Sr),mt&&Y.fog===!0&&j.refreshFogUniforms(si,mt),j.refreshMaterialUniforms(si,Y,Z,at,p.state.transmissionRenderTarget[w.id]),Qs.upload(I,Fe(Yt),si,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qs.upload(I,Fe(Yt),si,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ke.setValue(I,"center",F.center),ke.setValue(I,"modelViewMatrix",F.modelViewMatrix),ke.setValue(I,"normalMatrix",F.normalMatrix),ke.setValue(I,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Bn=Y.uniformsGroups;for(let Hi=0,zi=Bn.length;Hi<zi;Hi++){let iu=Bn[Hi];k.update(iu,Xn),k.bind(iu,Xn)}}return Xn}function xi(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function ii(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,X){Mt.get(w.texture).__webglTexture=N,Mt.get(w.depthTexture).__webglTexture=X;let Y=Mt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let X=Mt.get(w);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,X=0){C=w,S=N,T=X;let Y=!0,F=null,mt=!1,Pt=!1;if(w){let Vt=Mt.get(w);if(Vt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Vt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Vt.__hasExternalTextures)A.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Wt=w.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&Mt.has(Wt)&&(w.width!==Wt.image.width||w.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Pt=!0);let ae=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ae[N])?F=ae[N][X]:F=ae[N],mt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(ae)?F=ae[X]:F=ae,D.copy(w.viewport),z.copy(w.scissor),B=w.scissorTest}else D.copy(wt).multiplyScalar(Z).floor(),z.copy(Xt).multiplyScalar(Z).floor(),B=Kt;if(ht.bindFramebuffer(I.FRAMEBUFFER,F)&&Y&&ht.drawBuffers(w,F),ht.viewport(D),ht.scissor(z),ht.setScissorTest(B),mt){let Vt=Mt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Vt.__webglTexture,X)}else if(Pt){let Vt=Mt.get(w.texture),ie=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,X||0,ie)}E=-1},this.readRenderTargetPixels=function(w,N,X,Y,F,mt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Gt=Gt[Pt]),Gt){ht.bindFramebuffer(I.FRAMEBUFFER,Gt);try{let Vt=w.texture,ie=Vt.format,ae=Vt.type;if(!gt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-Y&&X>=0&&X<=w.height-F&&I.readPixels(N,X,Y,F,ne.convert(ie),ne.convert(ae),mt)}finally{let Vt=C!==null?Mt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,N,X,Y,F,mt,Pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Gt=Gt[Pt]),Gt){let Vt=w.texture,ie=Vt.format,ae=Vt.type;if(!gt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-Y&&X>=0&&X<=w.height-F){ht.bindFramebuffer(I.FRAMEBUFFER,Gt);let Wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(N,X,Y,F,ne.convert(ie),ne.convert(ae),0);let ye=C!==null?Mt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,ye);let Ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await im(I,Ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.deleteBuffer(Wt),I.deleteSync(Ce),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,X=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-X),F=Math.floor(w.image.width*Y),mt=Math.floor(w.image.height*Y),Pt=N!==null?N.x:0,Gt=N!==null?N.y:0;A.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Pt,Gt,F,mt),ht.unbindTexture()},this.copyTextureToTexture=function(w,N,X=null,Y=null,F=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,X=null);let mt,Pt,Gt,Vt,ie,ae,Wt,ye,Ce,Ue=w.isCompressedTexture?w.mipmaps[F]:w.image;X!==null?(mt=X.max.x-X.min.x,Pt=X.max.y-X.min.y,Gt=X.isBox3?X.max.z-X.min.z:1,Vt=X.min.x,ie=X.min.y,ae=X.isBox3?X.min.z:0):(mt=Ue.width,Pt=Ue.height,Gt=Ue.depth||1,Vt=0,ie=0,ae=0),Y!==null?(Wt=Y.x,ye=Y.y,Ce=Y.z):(Wt=0,ye=0,Ce=0);let bn=ne.convert(N.format),Me=ne.convert(N.type),Yt;N.isData3DTexture?(A.setTexture3D(N,0),Yt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Yt=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let vi=I.getParameter(I.UNPACK_ROW_LENGTH),be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ls=I.getParameter(I.UNPACK_SKIP_ROWS),In=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ae);let Sr=w.isDataArrayTexture||w.isData3DTexture,ke=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let si=Mt.get(w),Tr=Mt.get(N),Bn=Mt.get(si.__renderTarget),Hi=Mt.get(Tr.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let zi=0;zi<Gt;zi++)Sr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(w).__webglTexture,F,ae+zi),w.isDepthTexture?(ke&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,F,Ce+zi),I.blitFramebuffer(Vt,ie,mt,Pt,Wt,ye,mt,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ke?I.copyTexSubImage3D(Yt,F,Wt,ye,Ce+zi,Vt,ie,mt,Pt):I.copyTexSubImage2D(Yt,F,Wt,ye,Ce+zi,Vt,ie,mt,Pt);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ke?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Yt,F,Wt,ye,Ce,mt,Pt,Gt,bn,Me,Ue.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Yt,F,Wt,ye,Ce,mt,Pt,Gt,bn,Ue.data):I.texSubImage3D(Yt,F,Wt,ye,Ce,mt,Pt,Gt,bn,Me,Ue):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Wt,ye,mt,Pt,bn,Me,Ue.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Wt,ye,Ue.width,Ue.height,bn,Ue.data):I.texSubImage2D(I.TEXTURE_2D,F,Wt,ye,mt,Pt,bn,Me,Ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,vi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ls),I.pixelStorei(I.UNPACK_SKIP_IMAGES,In),F===0&&N.generateMipmaps&&I.generateMipmap(Yt),ht.unbindTexture()},this.copyTextureToTexture3D=function(w,N,X=null,Y=null,F=0){return w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,X,Y,F)},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ht.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,ht.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var ca=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Xc=class extends En{constructor(t=null,e=1,n=1,s,r,o,a,l,c=kn,h=kn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new _e,sd=new _e,Ho=[],rd=new Ii,Q_=new _e,Ir=new vt,Lr=new li,fn=class extends vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),rd.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(rd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Lr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),sd.multiplyMatrices(n,Ys),Ir.matrixWorld=sd,Ir.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){let l=Ho[o];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xc(new Float32Array(s*this.count),s,this.count,xh,ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qc=class extends es{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},od=new _e,Yc=new bs,zo=new li,Go=new R,ua=class extends Ae{constructor(t=new Le,e=new qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;od.copy(s).invert(),Yc.copy(t.ray).applyMatrix4(od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);Go.fromBufferAttribute(u,m),ad(Go,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)Go.fromBufferAttribute(u,g),ad(Go,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ad(i,t,e,n,s,r,o){let a=Yc.distanceSqToPoint(i);if(a<e){let l=new R;Yc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Sn=class extends En{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new V:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xr=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new V){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$c=class extends Xr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Vo=new R,Bl=new Sh,Hl=new Sh,zl=new Sh,Li=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vo.subVectors(s[0],s[1]).add(s[0]),c=Vo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),zl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bl.calc(l),Hl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ld(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function tx(i,t){let e=1-i;return e*e*t}function ex(i,t){return 2*(1-i)*i*t}function nx(i,t){return i*i*t}function Br(i,t,e,n){return tx(i,t)+ex(i,e)+nx(i,n)}function ix(i,t){let e=1-i;return e*e*e*t}function sx(i,t){let e=1-i;return 3*e*e*i*t}function rx(i,t){return 3*(1-i)*i*i*t}function ox(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return ix(i,t)+sx(i,e)+rx(i,n)+ox(i,s)}var da=class extends zn{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends zn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y),Hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends zn{constructor(t=new V,e=new V){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends zn{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends zn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new V){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ld(a,l.x,c.x,h.x,u.x),ld(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:Li,CubicBezierCurve:da,CubicBezierCurve3:Zc,EllipseCurve:Xr,LineCurve:fa,LineCurve3:Jc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),Kc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}},Di=class extends Kc{constructor(t){super(),this.type="Path",this.currentPoint=new V,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fa(this.currentPoint.clone(),new V(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pa(this.currentPoint.clone(),new V(t,e),new V(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new da(this.currentPoint.clone(),new V(t,e),new V(n,s),new V(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Xr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Re=class i extends Le{constructor(t=[new V(0,-.5),new V(.5,0),new V(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new V,f=new R,g=new R,y=new R,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=e;_++){let v=n+_*h*s,x=Math.sin(v),P=Math.cos(v);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*x,u.y=t[S].y,u.z=t[S].x*P,o.push(u.x,u.y,u.z),d.x=_/e,d.y=S/(t.length-1),a.push(d.x,d.y);let T=l[3*S+0]*x,C=l[3*S+1],E=l[3*S+0]*P;c.push(T,C,E)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let x=v+_*t.length,P=x,S=x+t.length,T=x+t.length+1,C=x+1;r.push(P,S,C),r.push(T,C,S)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},hi=class i extends Re{constructor(t=1,e=1,n=4,s=8){let r=new Di;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ln=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new V;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},se=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function _(){let x=new R,P=new R,S=0,T=(e-t)/n;for(let C=0;C<=r;C++){let E=[],M=C/r,D=M*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,H=B*l+a,G=Math.sin(H),$=Math.cos(H);P.x=D*G,P.y=-M*n+m,P.z=D*$,u.push(P.x,P.y,P.z),x.set(G,T,$).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-M),E.push(g++)}y.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){let M=y[E][C],D=y[E+1][C],z=y[E+1][C+1],B=y[E][C+1];(t>0||E!==0)&&(h.push(M,D,B),S+=3),(e>0||E!==r-1)&&(h.push(D,z,B),S+=3)}c.addGroup(p,S,0),p+=S}function v(x){let P=g,S=new V,T=new R,C=0,E=x===!0?t:e,M=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let H=z/s*l+a,G=Math.cos(H),$=Math.sin(H);T.x=E*$,T.y=m*M,T.z=E*G,u.push(T.x,T.y,T.z),d.push(0,M,0),S.x=G*.5+.5,S.y=$*.5*M+.5,f.push(S.x,S.y),g++}for(let z=0;z<s;z++){let B=P+z,H=D+z;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pn=class i extends se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jc=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new R,x=new R,P=new R;for(let S=0;S<e.length;S+=3)f(e[S+0],v),f(e[S+1],x),f(e[S+2],P),l(v,x,P,_)}function l(_,v,x,P){let S=P+1,T=[];for(let C=0;C<=S;C++){T[C]=[];let E=_.clone().lerp(x,C/S),M=v.clone().lerp(x,C/S),D=S-C;for(let z=0;z<=D;z++)z===0&&C===S?T[C][z]=E:T[C][z]=E.clone().lerp(M,z/D)}for(let C=0;C<S;C++)for(let E=0;E<2*(S-C)-1;E++){let M=Math.floor(E/2);E%2===0?(d(T[C][M+1]),d(T[C+1][M]),d(T[C][M])):(d(T[C][M+1]),d(T[C+1][M+1]),d(T[C+1][M]))}}function c(_){let v=new R;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(_),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let _=new R;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let x=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(x,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],x=o[_+2],P=o[_+4],S=Math.max(v,x,P),T=Math.min(v,x,P);S>.9&&T<.1&&(v<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let x=_*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let _=new R,v=new R,x=new R,P=new R,S=new V,T=new V,C=new V;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),S.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(_).add(v).add(x).divideScalar(3);let D=m(P);y(S,M+0,_,D),y(T,M+2,v,D),y(C,M+4,x,D)}}function y(_,v,x,P){P<0&&_.x===1&&(o[v]=_.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ve=class extends Di{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Di().fromJSON(s))}return this}},ax={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=dx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return qr(r,o,e,a,l,f,0),o}};function Bd(i,t,e,n,s){let r,o;if(s===Ex(i,t,e,n)>0)for(r=t;r<e;r+=n)o=cd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=cd(r,i[r],i[r+1],o);return o&&Pa(o,o.next)&&($r(o),o=o.next),o}function Es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pa(e,e.next)||Ge(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?cx(i,n,s,r):lx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),$r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hx(Es(i),t,e),qr(i,t,e,n,s,r,2)):o===2&&ux(i,t,e,n,s,r):qr(Es(i),t,e,n,s,r,1);break}}}function lx(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Js(s,a,r,l,o,c,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Qc(f,g,t,e,n),_=Qc(y,m,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Js(a,h,l,u,c,d,v.x,v.y)&&Ge(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Js(a,h,l,u,c,d,x.x,x.y)&&Ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Js(a,h,l,u,c,d,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Js(a,h,l,u,c,d,x.x,x.y)&&Ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Pa(s,r)&&Hd(s,n,n.next,r)&&Yr(s,r)&&Yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$r(n),$r(n.next),n=i=r),n=n.next}while(n!==i);return Es(n)}function ux(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let l=zd(o,a);o=Es(o,o.next),l=Es(l,l.next),qr(o,t,e,n,s,r,0),qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(xx(c));for(s.sort(fx),r=0;r<s.length;r++)e=px(s[r],e);return e}function fx(i,t){return i.x-t.x}function px(i,t){let e=mx(i,t);if(!e)return t;let n=zd(e,i);return Es(n,n.next),Es(e,e.next)}function mx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Js(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&gx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function gx(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function yx(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_x(s)}function _x(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Js(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mx(i,t)&&(Yr(i,t)&&Yr(t,i)&&bx(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||Pa(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pa(i,t){return i.x===t.x&&i.y===t.y}function Hd(i,t,e,n){let s=Xo(Ge(i,t,e)),r=Xo(Ge(i,t,n)),o=Xo(Ge(e,n,i)),a=Xo(Ge(e,n,t));return!!(s!==r&&o!==a||s===0&&Wo(i,e,t)||r===0&&Wo(i,n,t)||o===0&&Wo(e,i,n)||a===0&&Wo(e,t,n))}function Wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xo(i){return i>0?1:i<0?-1:0}function Mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zd(i,t){let e=new th(i.i,i.x,i.y),n=new th(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cd(i,t,e,n){let s=new th(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function th(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ex(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hd(t),ud(n,t);let o=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ud(n,e[l]);let a=ax.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ud(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Kn=class i extends Le{constructor(t=new Ve([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:wx,v,x=!1,P,S,T,C;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),S=new R,T=new R,C=new R),d||(m=0,f=0,g=0,y=0);let E=a.extractPoints(c),M=E.shape,D=E.holes;if(!ji.isClockWise(M)){M=M.reverse();for(let tt=0,et=D.length;tt<et;tt++){let I=D[tt];ji.isClockWise(I)&&(D[tt]=I.reverse())}}let B=ji.triangulateShape(M,D),H=M;for(let tt=0,et=D.length;tt<et;tt++){let I=D[tt];M=M.concat(I)}function G(tt,et,I){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(et,I)}let $=M.length,at=B.length;function Z(tt,et,I){let Dt,st,gt,ht=tt.x-et.x,Ft=tt.y-et.y,Mt=I.x-tt.x,A=I.y-tt.y,b=ht*ht+Ft*Ft,U=ht*A-Ft*Mt;if(Math.abs(U)>Number.EPSILON){let W=Math.sqrt(b),K=Math.sqrt(Mt*Mt+A*A),L=et.x-Ft/W,q=et.y+ht/W,j=I.x-A/K,nt=I.y+Mt/K,Nt=((j-L)*A-(nt-q)*Mt)/(ht*A-Ft*Mt);Dt=L+ht*Nt-tt.x,st=q+Ft*Nt-tt.y;let ot=Dt*Dt+st*st;if(ot<=2)return new V(Dt,st);gt=Math.sqrt(ot/2)}else{let W=!1;ht>Number.EPSILON?Mt>Number.EPSILON&&(W=!0):ht<-Number.EPSILON?Mt<-Number.EPSILON&&(W=!0):Math.sign(Ft)===Math.sign(A)&&(W=!0),W?(Dt=-Ft,st=ht,gt=Math.sqrt(b)):(Dt=ht,st=Ft,gt=Math.sqrt(b/2))}return new V(Dt/gt,st/gt)}let ct=[];for(let tt=0,et=H.length,I=et-1,Dt=tt+1;tt<et;tt++,I++,Dt++)I===et&&(I=0),Dt===et&&(Dt=0),ct[tt]=Z(H[tt],H[I],H[Dt]);let _t=[],wt,Xt=ct.concat();for(let tt=0,et=D.length;tt<et;tt++){let I=D[tt];wt=[];for(let Dt=0,st=I.length,gt=st-1,ht=Dt+1;Dt<st;Dt++,gt++,ht++)gt===st&&(gt=0),ht===st&&(ht=0),wt[Dt]=Z(I[Dt],I[gt],I[ht]);_t.push(wt),Xt=Xt.concat(wt)}for(let tt=0;tt<m;tt++){let et=tt/m,I=f*Math.cos(et*Math.PI/2),Dt=g*Math.sin(et*Math.PI/2)+y;for(let st=0,gt=H.length;st<gt;st++){let ht=G(H[st],ct[st],Dt);lt(ht.x,ht.y,-I)}for(let st=0,gt=D.length;st<gt;st++){let ht=D[st];wt=_t[st];for(let Ft=0,Mt=ht.length;Ft<Mt;Ft++){let A=G(ht[Ft],wt[Ft],Dt);lt(A.x,A.y,-I)}}}let Kt=g+y;for(let tt=0;tt<$;tt++){let et=d?G(M[tt],Xt[tt],Kt):M[tt];x?(T.copy(P.normals[0]).multiplyScalar(et.x),S.copy(P.binormals[0]).multiplyScalar(et.y),C.copy(v[0]).add(T).add(S),lt(C.x,C.y,C.z)):lt(et.x,et.y,0)}for(let tt=1;tt<=h;tt++)for(let et=0;et<$;et++){let I=d?G(M[et],Xt[et],Kt):M[et];x?(T.copy(P.normals[tt]).multiplyScalar(I.x),S.copy(P.binormals[tt]).multiplyScalar(I.y),C.copy(v[tt]).add(T).add(S),lt(C.x,C.y,C.z)):lt(I.x,I.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){let et=tt/m,I=f*Math.cos(et*Math.PI/2),Dt=g*Math.sin(et*Math.PI/2)+y;for(let st=0,gt=H.length;st<gt;st++){let ht=G(H[st],ct[st],Dt);lt(ht.x,ht.y,u+I)}for(let st=0,gt=D.length;st<gt;st++){let ht=D[st];wt=_t[st];for(let Ft=0,Mt=ht.length;Ft<Mt;Ft++){let A=G(ht[Ft],wt[Ft],Dt);x?lt(A.x,A.y+v[h-1].y,v[h-1].x+I):lt(A.x,A.y,u+I)}}}O(),Q();function O(){let tt=s.length/3;if(d){let et=0,I=$*et;for(let Dt=0;Dt<at;Dt++){let st=B[Dt];pt(st[2]+I,st[1]+I,st[0]+I)}et=h+m*2,I=$*et;for(let Dt=0;Dt<at;Dt++){let st=B[Dt];pt(st[0]+I,st[1]+I,st[2]+I)}}else{for(let et=0;et<at;et++){let I=B[et];pt(I[2],I[1],I[0])}for(let et=0;et<at;et++){let I=B[et];pt(I[0]+$*h,I[1]+$*h,I[2]+$*h)}}n.addGroup(tt,s.length/3-tt,0)}function Q(){let tt=s.length/3,et=0;dt(H,et),et+=H.length;for(let I=0,Dt=D.length;I<Dt;I++){let st=D[I];dt(st,et),et+=st.length}n.addGroup(tt,s.length/3-tt,1)}function dt(tt,et){let I=tt.length;for(;--I>=0;){let Dt=I,st=I-1;st<0&&(st=tt.length-1);for(let gt=0,ht=h+m*2;gt<ht;gt++){let Ft=$*gt,Mt=$*(gt+1),A=et+Dt+Ft,b=et+st+Ft,U=et+st+Mt,W=et+Dt+Mt;Lt(A,b,U,W)}}}function lt(tt,et,I){l.push(tt),l.push(et),l.push(I)}function pt(tt,et,I){kt(tt),kt(et),kt(I);let Dt=s.length/3,st=_.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);Zt(st[0]),Zt(st[1]),Zt(st[2])}function Lt(tt,et,I,Dt){kt(tt),kt(et),kt(Dt),kt(et),kt(I),kt(Dt);let st=s.length/3,gt=_.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Zt(gt[0]),Zt(gt[1]),Zt(gt[3]),Zt(gt[1]),Zt(gt[2]),Zt(gt[3])}function kt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Zt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new i(n,t.options)}},wx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new V(r,o),new V(a,l),new V(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new V(o,1-l),new V(c,1-u),new V(d,1-g),new V(y,1-p)]:[new V(a,1-l),new V(h,1-u),new V(f,1-g),new V(m,1-p)]}};function Sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ns=class i extends jc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var cr=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new R,g=new V;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let _=p+m,v=_,x=_+n+1,P=_+n+2,S=_+1;a.push(v,x,S),a.push(x,P,S)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xn=class i extends Le{constructor(t=new Ve([new V(0,.5),new V(-.5,-.5),new V(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ji.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ji.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=ji.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=y.length;m<p;m++){let _=y[m],v=_[0]+u,x=_[1]+u,P=_[2]+u;n.push(v,x,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Qt=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let S=P/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(S+x,1-v),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],x=h[p][_],P=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&f.push(v,x,S),(p!==n-1||l<Math.PI)&&f.push(x,P,S)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(y,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xe=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(y,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var is=class i extends Le{constructor(t=new ma(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new V,h=new R,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],P=o.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,C=Math.sin(T),E=-Math.cos(T);l.x=E*x.x+C*P.x,l.y=E*x.y+C*P.y,l.z=E*x.z+C*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let P=(s+1)*(v-1)+(x-1),S=(s+1)*v+(x-1),T=(s+1)*v+x,C=(s+1)*(v-1)+x;g.push(P,S,C),g.push(S,T,C)}}function _(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ue=class extends es{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qt=class extends ue{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function qo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends hr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lu:r=t,a=2*e-n;break;case cu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:o=t,l=2*n-e;break;case cu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+_*o[c+P]+v*o[l+P]+x*o[u+P];return r}},nh=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ih=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jo:e=this.InterpolantFactoryMethodDiscrete;break;case Rc:e=this.InterpolantFactoryMethodLinear;break;case dl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return Rc;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ax(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Rc;var ws=class extends jn{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=jo;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends jn{};sh.prototype.ValueTypeName="color";var rh=class extends jn{};rh.prototype.ValueTypeName="number";var oh=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_a=class extends jn{InterpolantFactoryMethodLinear(t){return new oh(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends jn{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=jo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends jn{};ah.prototype.ValueTypeName="vector";var lh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Rx=new lh,ch=class{constructor(t){this.manager=t!==void 0?t:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xa=class extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Gl=new _e,dd=new R,fd=new R,va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var pd=new _e,Dr=new R,Vl=new R,hh=class extends va{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),Vl.copy(n.position),Vl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vl),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}},ui=class extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},uh=class extends va{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ma=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=md();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function md(){return performance.now()}var Th="\\[\\]\\.:\\/",Cx=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",Px="[^"+Th.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Lx=/(WCOD+)?/.source.replace("WCOD",Px),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),kx=new RegExp("^"+Ix+Lx+Dx+Ux+"$"),Nx=["material","materials","bones","map"],dh=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(t){let e=kx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=dh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kv=new Float32Array(1);var gd=new _e,ba=class{constructor(t,e,n=0,s=1/0){this.ray=new bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(t,e=!0,n=[]){return fh(t,this,n,e),n.sort(yd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fh(t[s],this,n,e);return n.sort(yd),n}};function yd(i,t){return i.distance-t.distance}function fh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)fh(r[o],t,e,!0)}}var Jr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ea=class extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);var Gd={type:"change"},Ch={type:"start"},Wd={type:"end"},Ia=new bs,Vd=new Un,Fx=Math.cos(70*fr.DEG2RAD),Qe=new R,Tn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6,La=class extends Ea{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Fn,this._lastTargetPosition=new R,this._quat=new Fn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jr,this._sphericalDelta=new Jr,this._scale=1,this._panOffset=new R,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new R,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=Vx.bind(this),this._onKeyDown=Wx.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Gx.bind(this),this._interceptControlDown=$x.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gd),this.update(),this.state=Se.NONE}update(t=null){let e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Tn:n>Math.PI&&(n-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ia.origin.copy(this.object.position),Ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ia.direction))<Fx?this.object.lookAt(this.target):(Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ia.intersectPlane(Vd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Tn/60*this.autoRotateSpeed*t:Tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qe.copy(s).sub(this.target);let r=Qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new V,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ox(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wd),this.state=Se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case Ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case Ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ch)}function Gx(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wd))}function Wx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Xx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ch)}function qx(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function Yx(i){this.enabled!==!1&&i.preventDefault()}function $x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Da=class extends lr{constructor(){super();let t=new ge;t.deleteAttribute("uv");let e=new ue({side:sn}),n=new ue,s=new ui(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new vt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new vt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new vt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new vt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new vt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new vt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new vt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new vt(t,mr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new vt(t,mr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new vt(t,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new vt(t,mr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new vt(t,mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new vt(t,mr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function mr(i){let t=new he;return t.color.setScalar(i),t}function fi(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new Sn(r);return o.wrapS=o.wrapT=ts,o.repeat.set(n[0],n[1]),o.anisotropy=4,s&&(o.colorSpace=Pe),o}function Ua(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function qd(i,t,e,n="#fbf3ea",s=["#f6b8c4","#9fd8c8","#ffd98a","#b9c8f0","#e9cdb8","#ffffff"]){let r=Ua(7);i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<900;o++){i.fillStyle=s[r()*s.length|0],i.globalAlpha=.55+r()*.45;let a=r()*t,l=r()*e,c=1.5+r()*r()*9;i.beginPath();let h=5+(r()*3|0);for(let u=0;u<h;u++){let d=u/h*Math.PI*2,f=c*(.6+r()*.5);i.lineTo(a+Math.cos(d)*f,l+Math.sin(d)*f)}i.fill()}i.globalAlpha=1}function Ph(i,t,e,n,s=[214,240,229],r="#cfe9df"){let l=e/8,c=t/4;i.fillStyle=n?"#000":r,i.fillRect(0,0,t,e);let h=Ua(3);for(let u=0;u<8;u++)for(let d=-1;d<5;d++){let f=u%2*c*.5,g=d*c+f+3,y=u*l+3,m=c-6,p=l-6;if(n){let _=i.createLinearGradient(0,y,0,y+p);_.addColorStop(0,"#ddd"),_.addColorStop(.15,"#fff"),_.addColorStop(.85,"#fff"),_.addColorStop(1,"#bbb"),i.fillStyle=_}else{let _=.94+h()*.08;i.fillStyle=`rgb(${Math.min(255,s[0]*_)|0},${Math.min(255,s[1]*_)|0},${Math.min(255,s[2]*_)|0})`}Ih(i,g,y,m,p,10),i.fill(),n||(i.fillStyle="rgba(255,255,255,.35)",Ih(i,g+8,y+6,m*.5,6,3),i.fill())}}function Ih(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Xd(i,t,e,n="#d9a066",s="#b97d45"){i.fillStyle=n,i.fillRect(0,0,t,e);let r=Ua(11);for(let o=0;o<60;o++){i.strokeStyle=s,i.globalAlpha=.12+r()*.22,i.lineWidth=.6+r()*2.4,i.beginPath();let a=r()*e;for(let l=0;l<=t;l+=8)i.lineTo(l,a+Math.sin(l*.02+o)*4+Math.sin(l*.07)*1.5);i.stroke()}i.globalAlpha=1}function Jx(i,t,e){i.fillStyle="#fff6ea",i.fillRect(0,0,t,e),i.fillStyle="#ff8a7a",i.font="bold 54px Fredoka, ui-rounded, sans-serif",i.textAlign="center",i.fillText("FARM",t/2,e*.45),i.fillStyle="#7fbfae",i.font="bold 40px Fredoka, ui-rounded, sans-serif",i.fillText("fresh eggs",t/2,e*.8),i.strokeStyle="#ffb59a",i.lineWidth=6,Ih(i,8,8,t-16,e-16,18),i.stroke()}function Kx(i,t,e){let n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)}function jx(i,t,e){i.fillStyle="#808080",i.fillRect(0,0,t,e);let n=Ua(5);for(let s=0;s<400;s++){let r=n()*t*.5;i.strokeStyle=n()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",i.lineWidth=1,i.beginPath(),i.arc(t/2,e/2,r,0,Math.PI*2),i.stroke()}}function Yd(i,t){return fi(512,512,(e,n,s)=>Ph(e,n,s,!1,i,t),{repeat:[6,3]})}function $d(i,t){return fi(1024,1024,(e,n,s)=>qd(e,n,s,i,t),{repeat:[3,1.5]})}function Zd(){let i={terrazzo:fi(1024,1024,qd,{repeat:[3,1.5]}),tiles:fi(512,512,(s,r,o)=>Ph(s,r,o,!1),{repeat:[6,3]}),tilesBump:fi(512,512,(s,r,o)=>Ph(s,r,o,!0),{repeat:[6,3],srgb:!1}),wood:fi(512,256,(s,r,o)=>Xd(s,r,o)),walnut:fi(512,256,(s,r,o)=>Xd(s,r,o,"#7a4e36","#4a2c1c")),label:fi(256,128,Jx),dot:fi(64,64,Kx),brushed:fi(256,256,jx,{srgb:!1})},t=s=>new qt(s),e=s=>new ue(s);return{tex:i,counter:t({map:i.terrazzo,roughness:.35,clearcoat:.6,clearcoatRoughness:.25}),counterEdge:e({color:"#f4e6d8",roughness:.5}),cabinet:e({color:"#9fd8c8",roughness:.55}),cabinetDark:e({color:"#86c6b4",roughness:.6}),brass:e({color:"#e8c27a",metalness:1,roughness:.3}),wall:e({color:"#ffe3d1",roughness:.95}),tile:e({map:i.tiles,bumpMap:i.tilesBump,bumpScale:1.5,roughness:.25,metalness:0}),floor:e({color:"#e9c9b2",roughness:.8}),cooktop:t({color:"#3d4256",roughness:.28,clearcoat:1,clearcoatRoughness:.12,metalness:.1}),cooktopTrim:e({color:"#d4d9e2",metalness:1,roughness:.25}),castIron:e({color:"#26272d",roughness:.55,metalness:.4}),burnerCap:e({color:"#1e1f24",roughness:.4,metalness:.6}),burnerRing:e({color:"#b9a37b",roughness:.35,metalness:.9}),knob:t({color:"#fffaf3",roughness:.3,clearcoat:.8}),knobMark:e({color:"#ff8a7a",roughness:.4}),steel:e({color:"#dfe4ea",metalness:1,roughness:.22,roughnessMap:i.brushed}),chrome:e({color:"#f2f4f7",metalness:1,roughness:.12}),panOuter:t({color:"#86cfc6",roughness:.32,clearcoat:1,clearcoatRoughness:.15}),panInner:t({color:"#3b3d45",roughness:.42,metalness:.25,clearcoat:.5,clearcoatRoughness:.35}),panBase:e({color:"#c6ccd4",metalness:1,roughness:.3,roughnessMap:i.brushed}),wood:e({map:i.wood,roughness:.55}),walnut:e({map:i.walnut,roughness:.45}),ceramic:t({color:"#fffdf8",roughness:.2,clearcoat:1,clearcoatRoughness:.08}),ceramicPink:t({color:"#f6b8c4",roughness:.25,clearcoat:1,clearcoatRoughness:.1}),ceramicBlue:t({color:"#bfd6f3",roughness:.25,clearcoat:1,clearcoatRoughness:.1}),ceramicMint:t({color:"#a9e0cf",roughness:.3,clearcoat:1,clearcoatRoughness:.1}),terracotta:e({color:"#e59a7a",roughness:.85}),leaf:e({color:"#7cc28a",roughness:.6,side:Ne}),leafDark:e({color:"#5aa56f",roughness:.6,side:Ne}),carton:e({color:"#ecd6b3",roughness:.95}),cartonDark:e({color:"#d9bf98",roughness:.95}),label:e({map:i.label,roughness:.9}),eggShell:t({color:"#fff1df",roughness:.55,sheen:.3,sheenColor:new St("#ffffff")}),eggShellBrown:t({color:"#e7b58a",roughness:.6,sheen:.3,sheenColor:new St("#ffe6cc")}),eggShellInner:e({color:"#fbf7ef",roughness:.7,side:sn}),butter:t({color:"#ffe08a",roughness:.35,clearcoat:.4,clearcoatRoughness:.3,sheen:.4,sheenColor:new St("#fff4c4")}),glass:t({color:"#ffffff",roughness:.05,transparent:!0,opacity:.32,clearcoat:1,depthWrite:!1,side:Ne}),salt:e({color:"#ffffff",roughness:1}),peppercorns:e({color:"#3a2c26",roughness:1}),spatulaHandle:t({color:"#7fd1b9",roughness:.35,clearcoat:.7}),shadowBlob:new he({color:"#7a4a35",transparent:!0,opacity:.2,depthWrite:!1,map:i.dot}),windowSky:new he({color:"#cfeeff"}),windowFrame:e({color:"#fffaf4",roughness:.5}),cloud:new he({color:"#ffffff",transparent:!0,opacity:.95}),jar:t({color:"#ffffff",roughness:.05,transparent:!0,opacity:.35,clearcoat:1,depthWrite:!1}),lid:e({color:"#ff8a7a",roughness:.5}),pasta:e({color:"#f6d58a",roughness:.8}),beans:e({color:"#c96b52",roughness:.7})}}var Kr=new R;function Gn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Kr.copy(t),Kr[n]=0,Kr.normalize();let c=.5*o/(o+a),h=1-Kr.angleTo(i)/l;return Math.sign(Kr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var fe=class extends ge{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Gn(g,l,"z","y",r,n),d[p+1]=1-Gn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Gn(g,l,"z","y",r,n),d[p+1]=1-Gn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Gn(g,l,"x","z",r,t),d[p+1]=Gn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Gn(g,l,"x","z",r,t),d[p+1]=1-Gn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Gn(g,l,"x","y",r,t),d[p+1]=1-Gn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Gn(g,l,"x","y",r,t),d[p+1]=1-Gn(g,l,"y","x",r,e);break}}};var tn={x:-.6,z:.1},We={x0:-3,x1:1.8,z0:-1.6,z1:1.9,top:.045},jr=.24,ka={x0:-7.6,x1:7.6,z0:-3.3,z1:3.4},Qr={x:1.25,z:1.45},$e={pan:{x:tn.x,z:tn.z},plate:{x:3.25,z:.55},carton:{x:-4.55,z:-.75},butter:{x:-4.4,z:1.75},salt:{x:2.75,z:-2.15},pepper:{x:3.7,z:-2.2},spatula:{x:4.55,z:2.15}},en={floorY:.06,innerR:1,rimR:1.24,height:.34,snap:.8},pi={r:1.15,foodY:.075},to=22;var Jd=i=>to+i*22.8;function Ui(i,t){return i>We.x0&&i<We.x1&&t>We.z0&&t<We.z1?We.top:0}var gr=i=>(i.x=Math.min(ka.x1-.6,Math.max(ka.x0+.6,i.x)),i.z=Math.min(ka.z1-.4,Math.max(ka.z0+.5,i.z)),i),eo={sunny:{runny:{label:"Runny yolk",y:[0,.45]},jammy:{label:"Jammy yolk",y:[.45,.75]}},over:{easy:{label:"Over easy",y:[0,.45]},medium:{label:"Over medium",y:[.45,.75]},hard:{label:"Over hard",y:[.75,1.01]}},scrambled:{soft:{label:"Soft & creamy",w:[.5,.78]},medium:{label:"Medium curds",w:[.78,.92]},well:{label:"Well done",w:[.92,1.01]}},omelette:{soft:{label:"Soft & creamy",w:[.5,.78]},medium:{label:"Medium",w:[.78,.92]},well:{label:"Well done",w:[.92,1.01]}},friedrice:{fluffy:{label:"Fluffy",c:[.45,.8]},crispy:{label:"Crispy & golden",c:[.85,1.2]}}},no={sunny:"Sunny-side up",over:"Over-easy (flipped)",scrambled:"Scrambled eggs",omelette:"Omelette",friedrice:"Egg fried rice",sheet:"Flat omelette"},Kd={sunny:"\u{1F373}",over:"\u{1F95A}",scrambled:"\u{1F9C0}",omelette:"\u{1F319}",friedrice:"\u{1F35A}",sheet:"\u{1F95A}"};var Lh=new _e,jd=new _e,Qd=i=>[i.type,i.roughness,i.metalness,i.clearcoat??"",i.clearcoatRoughness??"",i.sheen??"",i.transmission??"",i.transparent,i.opacity,i.side,i.depthWrite,i.blending,i.map?i.map.uuid:"",i.emissive?i.emissive.getHex():""].join(","),Dh=new Map;function An(i,t=()=>!1,e=[],n=()=>!1){i.updateMatrixWorld(!0),jd.copy(i.matrixWorld).invert();let s=new Map,r=[],o=l=>{if(!(l!==i&&t(l))&&l.visible){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&!Array.isArray(l.material)&&l.material.visible!==!1&&!l.material.vertexColors&&(!l.userData.interact||e.includes(l.userData.interact))&&l.renderOrder===0){let c=l.geometry;if(c.attributes.position&&c.attributes.normal&&!c.morphAttributes.position){let h=!l.material.map&&n(l.material),u=`${h?"bake:"+Qd(l.material):l.material.uuid}|${l.castShadow?1:0}${l.receiveShadow?1:0}`;s.has(u)||s.set(u,{mat:l.material,cast:l.castShadow,receive:l.receiveShadow,baked:h,list:[]}),s.get(u).list.push(l),r.push(l)}}for(let c of l.children)o(c)}};o(i);let a=0;for(let l of s.values()){if(l.list.length<2)continue;let c=l.list.map(f=>{let g=f.geometry.clone();for(let y of Object.keys(g.attributes))y!=="position"&&y!=="normal"&&y!=="uv"&&g.deleteAttribute(y);if(g.attributes.uv||g.setAttribute("uv",new ee(new Float32Array(g.attributes.position.count*2),2)),!g.index){let y=g.attributes.position.count,m=new(y>65535?Uint32Array:Uint16Array)(y);for(let p=0;p<y;p++)m[p]=p;g.setIndex(new Ie(m,1))}if(Lh.multiplyMatrices(jd,f.matrixWorld),g.applyMatrix4(Lh),Lh.determinant()<0){let y=g.index.array;for(let m=0;m<y.length;m+=3){let p=y[m];y[m]=y[m+2],y[m+2]=p}}return l.baked&&(g.userData.rgb=f.material.color),g}),h=Qx(c,l.baked),u=l.mat;if(l.baked){let f=Qd(l.mat);if(!Dh.has(f)){let g=l.mat.clone();g.vertexColors=!0,g.color.set(16777215),Dh.set(f,g)}u=Dh.get(f)}let d=new vt(h,u);d.castShadow=l.cast,d.receiveShadow=l.receive,d.name="merged",i.userData.interact&&(d.userData={...i.userData}),i.add(d);for(let f of l.list)if(f.parent){for(;f.children.length;)f.parent.attach(f.children[0]);f.parent.remove(f)}c.forEach(f=>f.dispose()),a+=l.list.length}return a}function Qx(i,t=!1){let e=0,n=0;for(let d of i)e+=d.attributes.position.count,n+=d.index.count;let s=new Float32Array(e*3),r=new Float32Array(e*3),o=new Float32Array(e*2),a=new(e>65535?Uint32Array:Uint16Array)(n),l=t?new Float32Array(e*3):null,c=0,h=0;for(let d of i){let f=d.attributes.position,g=d.attributes.normal,y=d.attributes.uv,m=d.index.array;for(let p=0;p<f.count;p++)s[(c+p)*3]=f.getX(p),s[(c+p)*3+1]=f.getY(p),s[(c+p)*3+2]=f.getZ(p),r[(c+p)*3]=g.getX(p),r[(c+p)*3+1]=g.getY(p),r[(c+p)*3+2]=g.getZ(p),o[(c+p)*2]=y.getX(p),o[(c+p)*2+1]=y.getY(p);if(l){let p=d.userData.rgb;for(let _=0;_<f.count;_++)l[(c+_)*3]=p.r,l[(c+_)*3+1]=p.g,l[(c+_)*3+2]=p.b}for(let p=0;p<m.length;p++)a[h+p]=m[p]+c;c+=f.count,h+=m.length}let u=new Le;return u.setAttribute("position",new Ie(s,3)),u.setAttribute("normal",new Ie(r,3)),u.setAttribute("uv",new Ie(o,2)),l&&u.setAttribute("color",new Ie(l,3)),u.setIndex(new Ie(a,1)),u.computeBoundingSphere(),u.computeBoundingBox(),u}var re=(i,t,{cast:e=!1,receive:n=!1}={})=>{let s=new vt(i,t);return s.castShadow=e,s.receiveShadow=n,s},tv=["#bfe3ff","#ffc35c","#ff8a7a"].map(i=>new he({color:i}));function nf(i,t,e){let n=new xt;i.add(n);let s=re(new dn(40,30),t.floor,{receive:!1});s.rotation.x=-Math.PI/2,s.position.y=-4.2,n.add(s);let r=re(new dn(40,16),t.wall);r.position.set(0,4,-3.75),n.add(r);for(let U of[-1,1]){let W=re(new dn(20,16),t.wall);W.position.set(U*9.5,4,4),W.rotation.y=-U*Math.PI/2,n.add(W)}let o=re(new dn(19,3.6),t.tile,{receive:!0});o.position.set(0,1.8,-3.72),n.add(o);let a=re(new fe(19,.14,.12,2,.05),t.counterEdge);a.position.set(0,3.62,-3.68),n.add(a);let l=re(new fe(17,.42,7.5,4,.12),t.counter,{receive:!0});l.position.set(0,-.21,-.05),n.add(l);let c=re(new ge(16.6,3.8,7),t.cabinetDark);c.position.set(0,-2.32,-.3),n.add(c);for(let U=0;U<6;U++){let W=re(new fe(2.6,3.3,.16,3,.07),t.cabinet);W.position.set(-6.9+U*2.76,-2.3,3.24),n.add(W);let K=re(new hi(.05,.55,4,8),t.brass);K.position.set(-6.9+U*2.76+(U%2?-1:1)*.95,-1.4,3.37),n.add(K)}let h=re(new ge(16.6,.3,.2),t.counterEdge);h.position.set(0,-4.05,3),n.add(h);let u=new xt;u.position.set(-1.2,5.6,-3.7),n.add(u);let d=re(new dn(5.2,3.2),new he({map:ev()}));d.position.z=-.05,u.add(d);let f=[[5.6,.22,0,1.7],[5.6,.22,0,-1.7],[.22,3.6,-2.7,0],[.22,3.6,2.7,0],[.12,3.2,0,0],[5.2,.12,0,0]];for(let[U,W,K,L]of f){let q=re(new fe(U,W,.2,2,.05),t.windowFrame);q.position.set(K,L,.05),u.add(q)}let g=re(new fe(6.2,.16,.6,3,.06),t.windowFrame,{cast:!0});g.position.set(0,-1.85,.25),u.add(g);for(let U=0;U<3;U++)u.add(sf(t,-1.8+U*1.8,-1.77,.3,.42+U%2*.1,U));let y=new xt;y.position.set(-.6,10.6,-.8),n.add(y);let m=re(new se(.02,.02,2.5,6),t.castIron);m.position.y=1.25,y.add(m);let p=[];for(let U=0;U<=12;U++){let W=U/12;p.push(new V(.15+Math.pow(W,1.6)*1.1,-W*.9))}let _=new ue({color:"#ffb59a",roughness:.5,side:Ne}),v=re(new Re(p,32),_);y.add(v);let x=re(new Qt(.22,16,12),new he({color:new St(2.2,1.9,1.4)}));x.position.y=-.7,y.add(x);let P=new xt;P.position.set(4.6,4.6,-3.45),n.add(P);let S=re(new fe(4.2,.16,.7,3,.05),t.wood,{cast:!0,receive:!0});P.add(S);for(let U of[-1.6,1.6]){let W=re(new ge(.1,.5,.5),t.brass);W.position.set(U,-.3,-.05),P.add(W)}let T=[t.pasta,t.beans,t.salt];for(let U=0;U<3;U++)P.add(sv(t,-1.3+U*1.25,.08,.05,.38+(U===1?.1:0),.95-U*.12,T[U]));let C=We.x1-We.x0,E=We.z1-We.z0,M=(We.x0+We.x1)/2,D=(We.z0+We.z1)/2,z=re(new fe(C,.12,E,4,.05),t.cooktop,{receive:!0});z.position.set(M,We.top-.06,D),n.add(z);let B=re(new fe(C+.12,.08,E+.12,3,.04),t.cooktopTrim);B.position.set(M,We.top-.09,D),n.add(B);let H=new xt;H.position.set(tn.x,We.top,tn.z),n.add(H);let G=re(new se(.72,.8,.05,48),t.cooktopTrim,{receive:!0});G.position.y=.02,H.add(G);let $=re(new se(.5,.52,.09,40),t.burnerRing);$.position.y=.08,H.add($);let at=re(new se(.42,.48,.05,40),t.burnerCap);at.position.y=.145,H.add(at);let Z=re(new Qt(.42,32,8,0,Math.PI*2,0,.35),t.burnerCap);Z.position.y=-.2,Z.scale.y=.9,H.add(Z);let ct=e.mobile?22:30,_t=new pn(.05,.28,8,1,!0);_t.translate(0,.14,0);let wt=new he({color:"#5aa8ff",transparent:!0,opacity:.55,blending:Jn,depthWrite:!1}),Xt=new he({color:"#c8e4ff",transparent:!0,opacity:.7,blending:Jn,depthWrite:!1}),Kt=new fn(_t,wt,ct),O=new fn(_t,Xt,ct);H.add(Kt,O);let Q=re(new cr(.35,.95,48),new he({color:"#4d8dff",transparent:!0,opacity:0,blending:Jn,depthWrite:!1,map:t.tex.dot}));Q.rotation.x=-Math.PI/2,Q.position.y=.13,H.add(Q);let dt=new ui("#7ab0ff",0,3.5,2);dt.position.y=.3,H.add(dt);let lt=new xt;lt.position.set(tn.x,0,tn.z),n.add(lt);let pt=jr-.04,Lt=new Ve;tf(Lt,-1.25,-1.25,2.5,2.5,.35);let kt=new Di;tf(kt,-1.12,-1.12,2.24,2.24,.28),Lt.holes.push(kt);let Zt=new Kn(Lt,{depth:.07,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:6});Zt.rotateX(-Math.PI/2);let tt=re(Zt,t.castIron,{cast:!0});tt.position.y=pt-.1,lt.add(tt);for(let U=0;U<4;U++){let W=U*Math.PI/2+Math.PI/4,K=re(new fe(.8,.09,.09,2,.035),t.castIron,{cast:!0}),L=1.12;K.position.set(Math.cos(W)*(L-.38),jr-.047,Math.sin(W)*(L-.38)),K.rotation.y=-W,lt.add(K);let q=re(new se(.06,.07,pt-We.top+.02,10),t.castIron);q.position.set(Math.cos(W)*1.18,(pt+We.top)/2,Math.sin(W)*1.18),lt.add(q)}let et=H.clone(!0);et.position.set(tn.x-1.75,We.top,tn.z-1.05),et.scale.setScalar(.55),et.traverse(U=>{(U.isInstancedMesh||U.isPointLight||U.material&&U.material.blending===Jn)&&(U.visible=!1)}),n.add(et);let I=ef(t);I.position.set(Qr.x,We.top,Qr.z),n.add(I);let Dt=ef(t);Dt.position.set(Qr.x,We.top,Qr.z-1),Dt.scale.setScalar(.8),n.add(Dt),Dt.traverse(U=>{U.userData={}});let st=new xt;st.position.copy(I.position),st.position.y+=.005,n.add(st);for(let U=0;U<=10;U++){let W=(-135+U*27)*Math.PI/180,K=re(new ln(U%5===0?.035:.022,10),tv[U>6?2:U>3?1:0]);K.rotation.x=-Math.PI/2,K.position.set(Math.sin(W)*.45,0,-Math.cos(W)*.45),st.add(K)}n.add(rv(t,-6.45,-1.15)),n.add(iv(t,6.4,-2.5));let gt=re(new fe(2.4,3,.14,4,.06),t.wood,{cast:!0});gt.position.set(-3.6,1.45,-3.45),gt.rotation.x=-.12,n.add(gt);let ht=re(new Xe(.16,.035,8,20),t.counterEdge);ht.position.set(-3.6,2.7,-3.36),ht.rotation.x=-.12,n.add(ht);let Ft=new Ae,Mt=Array.from({length:ct},()=>Math.random()*10);function A(U,W){let K=U/10,L=U>.05;if(Kt.visible=O.visible=L,dt.intensity=L?.6+K*2.4:0,Q.material.opacity=L?.15+K*.35:0,!!L){for(let q=0;q<ct;q++){let j=q/ct*Math.PI*2,nt=.85+Math.sin(W*18+Mt[q]*3)*.1+Math.sin(W*31+Mt[q])*.06,Nt=(.6+K*1)*nt,ot=.9+K*.45;Ft.position.set(Math.cos(j)*.5,.1,Math.sin(j)*.5),Ft.rotation.set(0,-j,0),Ft.rotateZ(-ot),Ft.scale.set(1+K*.3,Nt,1+K*.3),Ft.updateMatrix(),Kt.setMatrixAt(q,Ft.matrix),Ft.scale.set(.55,Nt*.55,.55),Ft.updateMatrix(),O.setMatrixAt(q,Ft.matrix)}Kt.instanceMatrix.needsUpdate=O.instanceMatrix.needsUpdate=!0}}let b=new Set([t.wall,t.floor,t.cabinet,t.cabinetDark,t.counterEdge,t.windowFrame,t.tile,t.counter,_,d.material]);return An(n,U=>U===I,[],U=>!b.has(U)),{root:n,knob:I,updateFlames:A,sky:d,shadeMat:_,pickables:[]}}function tf(i,t,e,n,s,r){i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e)}function ef(i){let t=new xt,e=re(new se(.34,.36,.05,40),i.cooktopTrim);e.position.y=.025,t.add(e);let n=[new V(0,0),new V(.3,0),new V(.31,.04),new V(.29,.2),new V(.27,.23),new V(0,.24)],s=re(new Re(n,40),i.knob,{cast:!0});s.position.y=.04;let r=new xt;r.position.y=0,t.add(r),r.add(s);let o=re(new fe(.12,.16,.5,3,.05),i.knob,{cast:!0});o.position.set(0,.34,0),r.add(o);let a=re(new fe(.06,.03,.16,2,.012),i.knobMark);a.position.set(0,.425,-.15),r.add(a);let l=new vt(new se(.6,.6,.6,16),new he({visible:!1}));return l.position.y=.3,t.add(l),t.traverse(c=>{c.userData.interact="knob"}),t.userData.turn=r,t}function ev(){let i=document.createElement("canvas");i.width=256,i.height=160;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,160);e.addColorStop(0,"#9fd6ff"),e.addColorStop(.7,"#d9f0ff"),e.addColorStop(1,"#ffe9d6"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,.95)";for(let[s,r,o]of[[60,50,1],[180,35,.8],[140,95,.6]])for(let[a,l,c]of[[0,0,18],[18,-6,14],[-16,3,12],[32,4,11]])t.beginPath(),t.arc(s+a*o,r+l*o,c*o,0,7),t.fill();t.fillStyle="#b9e3b0",t.beginPath(),t.moveTo(0,160);for(let s=0;s<=256;s+=8)t.lineTo(s,128+Math.sin(s*.03)*10);t.lineTo(256,160),t.fill(),t.fillStyle="#9fd39a",t.beginPath(),t.moveTo(0,160);for(let s=0;s<=256;s+=8)t.lineTo(s,142+Math.sin(s*.05+2)*7);t.lineTo(256,160),t.fill();let n=new Sn(i);return n.colorSpace=Pe,n}function sf(i,t,e,n,s,r){let o=new xt;o.position.set(t,e,n),o.scale.setScalar(s);let a=[new V(0,0),new V(.42,0),new V(.5,.7),new V(.56,.72),new V(.56,.85),new V(.48,.85),new V(.46,.75),new V(0,.75)];o.add(re(new Re(a,24),r%2?i.ceramicPink:i.terracotta,{cast:!0}));let l=nv();for(let c=0;c<9;c++){let h=re(l,c%2?i.leaf:i.leafDark,{cast:!0}),u=c*2.4+r;h.position.set(Math.cos(u)*.12,.75,Math.sin(u)*.12),h.rotation.set(0,-u,.5+c%3*.25),h.scale.setScalar(.7+c%4*.12),o.add(h)}return o}var yr;function nv(){if(yr)return yr;let i=new Ve;i.moveTo(0,0),i.quadraticCurveTo(.25,.35,0,.9),i.quadraticCurveTo(-.25,.35,0,0),yr=new xn(i,6);let t=yr.attributes.position;for(let e=0;e<t.count;e++){let n=t.getY(e);t.setZ(e,Math.sin(n*2.4)*.12+Math.abs(t.getX(e))*.3)}return yr.computeVertexNormals(),yr}function iv(i,t,e){let n=sf(i,t,0,e,1.25,1);return n.children[0].material=i.ceramicMint,n}function sv(i,t,e,n,s,r,o){let a=new xt;a.position.set(t,e,n);let l=re(new se(s,s,r,24,1,!0),i.jar);l.position.y=r/2,l.renderOrder=2;let c=re(new se(s*.9,s*.9,r*.68,20),o);c.position.y=r*.34+.01;let h=re(new fe(s*2.1,.14,s*2.1,2,.06),i.lid);return h.position.y=r+.05,h.geometry=new se(s*1.05,s*1.05,.14,24),a.add(c,l,h),a}function rv(i,t,e){let n=new xt;n.position.set(t,0,e);let s=[new V(0,0),new V(.5,0),new V(.55,.1),new V(.52,1.1),new V(.56,1.2),new V(.48,1.2),new V(.44,.2),new V(0,.2)];n.add(re(new Re(s,28),i.ceramicBlue,{cast:!0,receive:!0}));for(let r=0;r<3;r++){let o=new xt,a=re(new se(.04,.05,2,8),i.wood,{cast:!0});a.position.y=1,o.add(a);let l=re(new Qt(.2,14,10),i.wood,{cast:!0});l.scale.set(1,1.4,.35),l.position.y=2.1,o.add(l),o.position.set((r-1)*.16,.1,r%2*.1),o.rotation.set((r-1)*.08,r,(r-1)*.2),n.add(o)}return n}var It=(i,t,e=!0,n=!1)=>{let s=new vt(i,t);return s.castShadow=e,s.receiveShadow=n,s},mn=(i,t,e={})=>(i.traverse(n=>{n.userData.interact=t,Object.assign(n.userData,e)}),i),Ct=(i,t)=>new V(i,t);function of(i=.26,t=24){let e=i*1.32,n=[];for(let s=0;s<=t;s++){let r=-1+2*s/t,o=i*Math.sqrt(Math.max(0,1-r*r))*(1-.13*r);n.push(Ct(Math.max(o,1e-4),r*e))}return n[0].x=1e-4,n[t].x=1e-4,n}var rf;function ov(){return rf||(rf=new Re(of(),28))}function Na(i,t=!1){return It(ov(),t?i.eggShellBrown:i.eggShell)}function af(i,t=!1){let e=of(.26,24),n=o=>{let a=new xt,l=It(new Re(e,16,o,Math.PI),t?i.eggShellBrown:i.eggShell),c=It(new Re(e.map(h=>Ct(h.x*.95,h.y*.97)),16,o,Math.PI),i.eggShellInner,!1);return a.add(l,c),a},s=n(0);return{left:n(Math.PI),right:s}}function av(i){let t=new xt;t.name="pan";let{innerR:e,rimR:n,height:s,floorY:r}=en,o=[Ct(0,0),Ct(e-.02,0),Ct(e+.06,.015),Ct(e+.1,.06)];for(let T=1;T<=10;T++){let C=T/10;o.push(Ct(e+.1+(n-e-.06)*Math.pow(C,.85),.06+C*(s-.08)))}o.push(Ct(n+.035,s+.005),Ct(n+.03,s+.03),Ct(n-.01,s+.035));let a=It(new Re(o,72),i.panOuter,!0,!1);t.add(a);let l=It(new ln(e-.079,72),i.panInner,!1,!0);l.rotation.x=-Math.PI/2,l.position.y=r,t.add(l),mn(l,"panFloor");let c=[];for(let T=0;T<=6;T++)c.push(Ct(e-.08+Math.sin(T/6*Math.PI/2)*.08,r+(1-Math.cos(T/6*Math.PI/2))*.08));for(let T=1;T<=8;T++){let C=T/8;c.push(Ct(e+(n-.05-e)*Math.pow(C,.85),r+.08+C*(s-r-.06)))}c.push(Ct(n-.01,s+.035));let h=It(new Re(c,72),i.panInner,!1,!0);i.panInner.side=Ne,t.add(h);let u=It(new se(e-.12,e-.12,.012,48),i.panBase,!1);u.position.y=-.004,t.add(u);let d=new xt;t.add(d);let f=new R(-.86,0,.5).normalize();d.position.set(f.x*(n-.04),s*.62,f.z*(n-.04)),d.rotation.y=Math.atan2(-f.z,f.x);let g=new Li([Rs(-.05,-.05,0),Rs(.25,.04,0),Rs(.55,.12,0)]),y=It(new is(g,12,.055,10),i.steel);d.add(y);for(let T of[-.07,.07]){let C=It(new Qt(.035,10,8),i.steel);C.position.set(-.02,0,T),C.scale.set(.5,1,1),d.add(C)}let m=[Ct(1e-4,0),Ct(.085,0),Ct(.1,.05),Ct(.105,.4),Ct(.115,1.05),Ct(.11,1.12),Ct(.08,1.16),Ct(1e-4,1.17)],p=It(new Re(m,20),i.wood);p.rotation.z=-Math.PI/2+.24,p.position.set(.5,.11,0),p.scale.set(1,1,.85),d.add(p);let _=It(new se(.1,.095,.12,20),i.steel);_.rotation.z=-Math.PI/2+.24,_.position.set(.52,.115,0),d.add(_);let v=It(new Xe(.045,.02,8,16),i.steel);v.position.set(1.55,.38,0),v.rotation.y=Math.PI/2,d.add(v);let x=new vt(new ge(1.6,.6,.6),new he({visible:!1}));x.position.set(.85,.2,0),d.add(x),mn(d,"panHandle"),mn(a,"panRim");let P=new vt(new se(n,e,.3,32),new he({visible:!1}));P.position.y=r+.12,t.add(P),mn(P,"panFloor"),mn(h,"panFloor");let S=new xt;return S.position.y=r,t.add(S),t.userData.foodAnchor=S,t}var Rs=(i,t,e)=>new R(i,t,e);function lv(i){let t=new xt;t.name="plate";let e=pi.r,n=[Ct(1e-4,.03),Ct(e*.55,.03),Ct(e*.6,.005),Ct(e*.66,0),Ct(e*.7,.03),Ct(e*.72,.06),Ct(e*.9,.11),Ct(e*.99,.13),Ct(e*1,.145),Ct(e*.98,.155),Ct(e*.88,.135),Ct(e*.72,.09),Ct(e*.64,.075),Ct(1e-4,.075)],s=It(new Re(n,64),i.ceramic,!0,!0);t.add(s);let r=It(new Xe(e*.9,.018,8,64),i.ceramicPink,!1);r.rotation.x=-Math.PI/2,r.position.y=.122,t.add(r);let o=It(new Xe(e*.985,.012,6,64),i.ceramicPink,!1);o.rotation.x=-Math.PI/2,o.position.y=.148,t.add(o);let a=new vt(new se(e+.1,e+.1,.4,24),new he({visible:!1}));a.position.y=.15,t.add(a),mn(t,"plate");let l=new xt;return l.position.y=pi.foodY,t.add(l),t.userData.foodAnchor=l,t}function cv(i){let t=new xt;t.name="carton";let e=It(new fe(1.75,.34,1.2,4,.1),i.carton,!0,!0);e.position.y=.17,t.add(e);let n=[],s=new Set([1,4]);for(let c=0;c<6;c++){let h=-.56+c%3*.56,u=-.27+Math.floor(c/3)*.54,d=It(new se(.25,.18,.1,18,1,!0),i.cartonDark,!1,!0);d.position.set(h,.31,u),t.add(d);let f=Na(i,s.has(c));f.position.set(h,.52,u),f.rotation.set((Math.random()-.5)*.15,Math.random()*3,(Math.random()-.5)*.15),f.userData.home=f.position.clone(),f.userData.brown=s.has(c),mn(f,"cartonEgg",{eggIndex:c}),t.add(f),n.push(f)}for(let c=0;c<2;c++){let h=It(new pn(.08,.35,8),i.carton);h.position.set(-.28+c*.56,.45,0),t.add(h)}let r=new xt;r.position.set(0,.34,-.6),r.rotation.x=-1.95,t.add(r);let o=It(new fe(1.75,.3,1.2,4,.1),i.carton);o.position.set(0,-.12,.6),r.add(o);let a=It(new dn(1.2,.6),i.label,!1);a.position.set(0,-.275,.6),a.rotation.x=Math.PI/2,a.rotation.z=Math.PI,r.add(a);for(let c of[e,r])mn(c,"carton");let l=new vt(new ge(1.9,.4,1.3),new he({visible:!1}));return l.position.y=.2,t.add(l),mn(l,"carton"),t.userData.eggs=n,t}function hv(i){let t=new xt;t.name="butterDish";let e=It(new fe(1.5,.1,.95,4,.045),i.ceramicBlue,!0,!0);e.position.y=.05,t.add(e);let n=It(new fe(1.36,.06,.82,3,.03),i.ceramicBlue);n.position.y=.11,n.scale.set(1,1,1),t.add(n);let s=It(new fe(.95,.34,.5,4,.06),i.butter,!0,!0);s.position.set(-.1,.27,0),t.add(s);let r=xr(i);r.position.set(.5,.17,.05),r.rotation.y=.2,t.add(r);let o=new xt;o.position.set(.1,.16,.36),o.rotation.y=-.15,t.add(o);let a=It(new fe(.75,.02,.14,2,.008),i.chrome);a.position.x=.15,o.add(a);let l=It(new hi(.05,.5,4,10),i.ceramicPink);return l.rotation.z=Math.PI/2,l.position.x=-.5,o.add(l),mn(t,"butterDish"),mn(s,"butterBlock"),mn(r,"butterBlock"),t.userData.block=s,t}function xr(i){return It(new fe(.34,.16,.3,3,.045),i.butter)}function uv(i){let t=new xt;t.name="salt";let e=[Ct(1e-4,0),Ct(.27,0),Ct(.3,.04),Ct(.3,.12),Ct(.24,.45),Ct(.22,.62),Ct(.23,.7),Ct(1e-4,.7)],n=It(new Re(e,32),i.glass,!1);n.renderOrder=3,t.add(n);let s=It(new Re(e.slice(0,5).map(l=>Ct(l.x*.88,l.y*.95+.02)).concat([Ct(1e-4,.42)]),24),i.salt);t.add(s);let r=[Ct(1e-4,.68),Ct(.235,.68),Ct(.245,.74),Ct(.23,.86),Ct(.15,.95),Ct(1e-4,.97)];t.add(It(new Re(r,32),i.chrome));let o=new fn(new ln(.018,6),new he({color:"#555b66"}),7),a=new Ae;for(let l=0;l<7;l++){let c=l/6*Math.PI*2,h=l===6?0:.07;a.position.set(Math.cos(c)*h,.972,Math.sin(c)*h),a.rotation.set(-Math.PI/2,0,0),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}return t.add(o),lf(t,i,.38),mn(t,"salt"),t}function dv(i){let t=new xt;t.name="pepper";let e=[Ct(1e-4,0),Ct(.26,0),Ct(.28,.05),Ct(.24,.3),Ct(.19,.55),Ct(.22,.75),Ct(.25,.85),Ct(.25,.9),Ct(1e-4,.9)];t.add(It(new Re(e,32),i.walnut));let n=It(new Xe(.255,.018,8,32),i.chrome);n.rotation.x=Math.PI/2,n.position.y=.88,t.add(n);let s=[Ct(1e-4,.9),Ct(.23,.9),Ct(.24,.98),Ct(.19,1.08),Ct(1e-4,1.12)];t.add(It(new Re(s,32),i.walnut));let r=It(new Qt(.07,14,10),i.chrome);return r.position.y=1.15,t.add(r),lf(t,i,.36),mn(t,"pepper"),t}function fv(i){let t=new xt;t.name="spatula";let e=new Ve,n=.62,s=.78,r=.1;e.moveTo(-n/2+r,-s/2),e.lineTo(n/2-r,-s/2),e.quadraticCurveTo(n/2,-s/2,n/2,-s/2+r),e.lineTo(n/2-.04,s/2-.12),e.quadraticCurveTo(.12,s/2+.02,.06,s/2+.05),e.lineTo(-.06,s/2+.05),e.quadraticCurveTo(-.12,s/2+.02,-n/2+.04,s/2-.12),e.lineTo(-n/2,-s/2+r),e.quadraticCurveTo(-n/2,-s/2,-n/2+r,-s/2);for(let f=0;f<4;f++){let g=new Di,y=-.18+f*.12;g.moveTo(y-.025,-.24),g.lineTo(y+.025,-.24),g.lineTo(y+.025,.18),g.lineTo(y-.025,.18),g.closePath(),e.holes.push(g)}let o=new Kn(e,{depth:.018,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:1,curveSegments:6});o.rotateX(Math.PI/2);let a=It(o,i.steel);a.position.y=.02,t.add(a);let l=new Li([Rs(0,.03,.42),Rs(0,.08,.58),Rs(0,.28,.82),Rs(0,.38,.98)]);t.add(It(new is(l,16,.032,8),i.steel));let c=[Ct(1e-4,0),Ct(.07,0),Ct(.085,.08),Ct(.085,.9),Ct(.075,.98),Ct(1e-4,1)],h=It(new Re(c,18),i.spatulaHandle);h.position.set(0,.36,.95),h.rotation.x=Math.PI/2-.42,h.scale.set(1,1,.7),t.add(h);let u=It(new Xe(.05,.016,6,14),i.chrome);u.position.set(0,.78,1.82),u.rotation.y=Math.PI/2,t.add(u);let d=new vt(new ge(.9,.6,2.2),new he({visible:!1}));return d.position.set(0,.3,.6),t.add(d),mn(t,"spatula"),t}function lf(i,t,e){let n=new vt(new dn(e*3,e*3),t.shadowBlob);n.rotation.x=-Math.PI/2,n.position.y=.004,n.renderOrder=-1,n.userData.blob=!0,i.add(n)}function _r(i,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new Sn(n);return s.colorSpace=Pe,s.anisotropy=4,s}var pv=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function mv(i){let t=new xt;t.name="fridge";let e=2.05,n=2.55,s=1.2,r=.1,o=new qt({color:"#b3e4d2",roughness:.26,clearcoat:1,clearcoatRoughness:.1}),a=new qt({color:"#f8fdfb",roughness:.5,clearcoat:.2}),l=new ue({color:"#2b2f36",roughness:.7}),c=new qt({color:"#d6f1ee",roughness:.06,transparent:!0,opacity:.5,clearcoat:1,depthWrite:!1}),h=i.chrome,u=(L,q,j,nt,Nt,ot,yt,Ut,Jt=t,Rt=!0)=>{let oe=It(new fe(L,q,j,3,nt),Nt,Rt,!0);return oe.position.set(ot,yt,Ut),Jt.add(oe),oe};u(e,n,r,.03,a,0,n/2,-s/2+r/2),u(r,n,s,.045,o,-e/2+r/2,n/2,0),u(r,n,s,.045,o,e/2-r/2,n/2,0),u(e,r,s,.06,o,0,n-r/2,0),u(e,.16,s,.05,o,0,.08,0),u(.02,n-.3,s-.12,.01,a,-e/2+r+.01,n/2,.02,t,!1),u(.02,n-.3,s-.12,.01,a,e/2-r-.01,n/2,.02,t,!1);for(let L=-3;L<=3;L++)u(.025,n-.35,.03,.01,new ue({color:"#e6f3ef",roughness:.6}),L*.26,n/2,-s/2+r+.015,t,!1);let d=L=>u(e,.045,.05,.015,h,0,L,s/2-.01,t,!1);d(.17),d(n-.02);for(let L of[-e/2+.02,e/2-.02])u(.045,n-.2,.05,.015,h,L,n/2+.03,s/2-.01,t,!1);u(e-.2,.025,.03,.01,l,0,.2,s/2-.05,t,!1),u(e-.2,.025,.03,.01,l,0,n-.1,s/2-.05,t,!1);let f=new vt(new fe(e-.5,.04,.09,2,.015),new he({color:"#fffbe6"}));f.position.set(0,n-r-.03,.3),t.add(f);let g=new ui("#fff4dc",7,4,2);g.position.set(0,n-.35,.35),t.add(g);let y=It(new se(.07,.07,.04,20),h,!1);y.rotation.z=Math.PI/2,y.position.set(e/2-r-.03,n-.4,-.2),t.add(y);let m=It(new ge(.03,.012,.03),new he({color:"#ff6b6b"}),!1);m.position.set(e/2-r-.055,n-.4,-.2),t.add(m);let p=[.62,1.32,2.02];for(let L of p){u(e-2*r-.04,.03,s-.14,.012,c,0,L,.02,t,!1);let q=It(new se(.016,.016,e-2*r-.04,10),h,!1);q.rotation.z=Math.PI/2,q.position.set(0,L+.02,s/2-.1),t.add(q)}for(let L of[-.8,.8]){let q=It(new se(.09,.11,.07,12),l,!1);q.position.set(L,-.03,-.3),t.add(q)}let _=new xt;_.position.set(-e/2,0,s/2),_.rotation.y=-2.85,t.add(_),u(e,n,.11,.05,o,e/2,n/2,.055,_),u(e-.14,n-.14,.04,.03,a,e/2,n/2,-.03,_,!1),u(e-.06,.04,.06,.015,l,e/2,n-.06,-.03,_,!1),u(e-.06,.04,.06,.015,l,e/2,.07,-.03,_,!1);let v=It(new se(.036,.036,1,14),h);v.position.set(e-.16,n*.6,.2),_.add(v);for(let L of[-.4,.4]){let q=It(new se(.026,.026,.14,8),h);q.rotation.x=Math.PI/2,q.position.set(e-.16,n*.6+L,.13),_.add(q)}let x=_r((L,q,j)=>{L.fillStyle="#dfe6ea",L.fillRect(0,0,q,j),L.fillStyle="#c0392b",L.font="italic bold 52px serif",L.textAlign="center",L.fillText("Eggy",q/2,82)}),P=It(new fe(.42,.14,.02,2,.01),new ue({map:x,metalness:.6,roughness:.3}),!1);P.position.set(e/2,n-.34,.12),_.add(P);let S=[.72,1.32,1.92];for(let L of S)u(e-.28,.035,.2,.012,c,e/2,L,-.16,_,!1),u(e-.28,.12,.02,.01,c,e/2,L+.075,-.26,_,!1);let T=_r((L,q,j)=>{L.fillStyle="#ffffff",L.fillRect(0,0,q,j),L.fillStyle="#7ec8e3",L.fillRect(0,36,q,52),L.fillStyle="#fff",L.font="bold 30px sans-serif",L.textAlign="center",L.fillText("MILK",q/2,72)}),C=(L,q,j,nt,Nt,ot,yt)=>{let Ut=new xt;Ut.add(It(new se(j,j*1.03,nt,20),yt?new qt({map:yt,roughness:.3,clearcoat:.6}):new qt({color:Nt,roughness:.12,clearcoat:1,transparent:!0,opacity:.82}),!0,!1));let Jt=It(new se(j*.45,j*.8,nt*.2,16),yt?new qt({color:"#ffffff",roughness:.3}):new qt({color:Nt,roughness:.12,clearcoat:1,transparent:!0,opacity:.82}),!0,!1);Jt.position.y=nt*.6,Ut.add(Jt);let Rt=It(new se(j*.48,j*.48,nt*.08,16),new ue({color:ot,roughness:.4}),!0,!1);Rt.position.y=nt*.74,Ut.add(Rt),Ut.position.set(L,q+nt/2+.02,-.16),_.add(Ut)};C(.4,S[2],.1,.42,"#fff","#4aa3d9",T),C(.75,S[2],.085,.3,"#d8434a","#ffd23a"),C(1.1,S[2],.1,.34,"#f4c24a","#5b4636"),C(1.45,S[2],.09,.4,"#7bc96f","#ffffff"),C(.5,S[1],.12,.24,"#c9507a","#ffffff"),C(.95,S[1],.12,.24,"#e8a03c","#8e5a2b"),C(1.4,S[1],.12,.24,"#b0e06e","#ffffff");let E=[],M=(L,q,j,nt,Nt,ot=.9)=>{q.position.set(j,nt,Nt);let yt=new vt(new ge(ot,.75,.8),new he({visible:!1}));yt.position.y=.3,q.add(yt),mn(q,"fridgeItem",{kind:L}),t.add(q),E.push(q)},D=new xt,z=new Ve;z.moveTo(0,0),z.absarc(0,0,.44,-.55,.55,!1),z.lineTo(0,0);let B=new Kn(z,{depth:.26,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:18});B.rotateX(-Math.PI/2),B.translate(-.2,.014,.1);let H=It(B,[new qt({color:"#ffcb3f",roughness:.3,clearcoat:.6}),new qt({color:"#f5b72e",roughness:.35,clearcoat:.5})]);D.add(H);let G=It(new se(.458,.458,.2,24,1,!0,-.55,1.1),new ue({color:"#e0572f",roughness:.6,side:Ne}));G.position.set(-.2,.135,.1),G.rotation.y=Math.PI,D.add(G);let $=new ue({color:"#d99a1a",roughness:.7});[[.1,.05,.05],[.2,-.06,.04],[.06,-.08,.035],[.15,.12,.03]].forEach(([L,q,j])=>{let nt=It(new Qt(j,10,8),$,!1);nt.position.set(L-.2+.1,.268,q+.1),nt.scale.y=.35,D.add(nt)}),M("cheese",D,-.5,p[2]+.025,-.05,.9);let at=new xt,Z=_r((L,q,j)=>{L.fillStyle="#c9a56b",L.fillRect(0,0,q,j);for(let nt=0;nt<q;nt+=4)L.fillStyle=`rgba(110,70,30,${.12+pv(nt)*.12})`,L.fillRect(nt,0,2,j),L.fillRect(0,nt,q,2);L.fillStyle="#c0392b",L.fillRect(0,46,q,30),L.fillStyle="#fff",L.font="bold 26px sans-serif",L.textAlign="center",L.fillText("RICE",q/2,69)});Z.wrapS=Z.wrapT=ts;let ct=new Re([[.001,0],[.24,0],[.3,.06],[.32,.22],[.27,.42],[.15,.55],[.085,.62],[.1,.68],[.15,.78],[.07,.83]].map(L=>new V(L[0],L[1])),28);at.add(It(ct,new ue({map:Z,roughness:.95,side:Ne})));let _t=It(new Xe(.095,.02,8,18),new ue({color:"#7a4a24",roughness:.8}),!1);_t.rotation.x=Math.PI/2,_t.position.y=.63,at.add(_t);let wt=It(new fe(.16,.2,.012,2,.006),new ue({color:"#fff7e0",roughness:.6}),!1);wt.position.set(.13,.58,.1),wt.rotation.z=-.3,at.add(wt),at.scale.setScalar(.74),M("rice",at,-.58,p[0]+.025,0,.7);let Xt=new xt,Kt=new ue({color:"#ffffff",roughness:.4});Xt.add(u(.8,.05,.5,.02,Kt,0,.03,0,Xt));let O=_r((L,q,j)=>{L.fillStyle="#d95b5b",L.fillRect(0,0,q,j);for(let nt=0;nt<6;nt++)L.fillStyle=nt%2?"#fde9e4":"#c94646",L.fillRect(0,6+nt*20,q,14)}),Q=new qt({map:O,roughness:.35,clearcoat:.7});[[-.17,0],[.04,.03],[.22,-.02]].forEach(([L,q],j)=>{let nt=new ge(.7,.026,.15,24,1,2),Nt=nt.attributes.position;for(let yt=0;yt<Nt.count;yt++)Nt.setY(yt,Nt.getY(yt)+Math.sin(Nt.getX(yt)*9+j*2)*.014);nt.computeVertexNormals();let ot=It(nt,Q,!0,!1);ot.position.set(0,.075,L),ot.rotation.y=q,Xt.add(ot)});let dt=new vt(new fe(.82,.12,.52,3,.05),new qt({color:"#ffffff",roughness:.05,transparent:!0,opacity:.18,clearcoat:1,depthWrite:!1}));dt.position.y=.09,Xt.add(dt);let lt=_r((L,q,j)=>{L.fillStyle="#c0392b",L.fillRect(0,0,q,j),L.fillStyle="#fff3d6",L.font="bold 42px sans-serif",L.textAlign="center",L.fillText("BACON",q/2,70),L.font="30px serif",L.fillText("\u{1F953}",q/2,108)}),pt=It(new fe(.28,.15,.54,3,.03),[0,1,2,3,4,5].map(L=>new ue({map:L===2?lt:null,color:L===2?"#ffffff":"#c0392b",roughness:.5})),!1);pt.position.set(-.08,.1,0),Xt.add(pt),M("bacon",Xt,-.5,p[1]+.025,.02,.9);let Lt=new xt,kt=_r((L,q,j)=>{L.fillStyle="#f2a0a6",L.fillRect(0,0,q,j);let nt=L.createRadialGradient(q*.4,j*.35,4,q/2,j/2,q*.7);nt.addColorStop(0,"rgba(255,255,255,0.28)"),nt.addColorStop(1,"rgba(120,30,40,0.25)"),L.fillStyle=nt,L.fillRect(0,0,q,j),L.strokeStyle="rgba(255,248,235,0.85)",L.lineWidth=3;for(let Nt=-j;Nt<q+j;Nt+=22)L.beginPath(),L.moveTo(Nt,0),L.lineTo(Nt+j,j),L.stroke(),L.beginPath(),L.moveTo(Nt+j,0),L.lineTo(Nt,j),L.stroke()});kt.wrapS=kt.wrapT=ts,kt.repeat.set(2,1);let Zt=It(new Qt(.3,40,28),new qt({map:kt,roughness:.4,clearcoat:.5}));Zt.scale.set(1.25,.82,.9),Zt.position.y=.25,Lt.add(Zt);for(let L of[-.14,.14]){let q=It(new Xe(.255,.012,8,30),new ue({color:"#e9d9b6",roughness:.8}),!1);q.rotation.y=Math.PI/2,q.position.set(L*1.4,.25,0),q.scale.set(1,.85,.92),Lt.add(q)}let tt=It(new se(.2,.2,.025,28),new ue({color:"#f7b9bd",roughness:.45}),!1);tt.rotation.z=Math.PI/2,tt.position.set(.37,.24,0),tt.scale.set(1,1,.8),Lt.add(tt),Lt.scale.setScalar(.78),M("ham",Lt,.5,p[2]+.025,.02,.9);let et=new xt;et.add(u(1,.07,.56,.03,Kt,0,.04,0,et));let I=new qt({color:"#e58f7b",roughness:.3,clearcoat:.8}),Dt=new hi(.075,.2,8,16).rotateZ(Math.PI/2);[-.3,-.1,.1,.3].forEach((L,q)=>{let j=It(Dt,I);j.position.set(L,.15,Math.sin(q*1.3)*.04),j.rotation.y=Math.sin(q)*.12,et.add(j)}),[-.2,0,.2].forEach(L=>{let q=It(new Xe(.05,.011,6,12),new ue({color:"#b86a52",roughness:.6}),!1);q.rotation.y=Math.PI/2,q.position.set(L,.15,0),et.add(q)});let st=new vt(new fe(1.02,.18,.58,3,.07),new qt({color:"#ffffff",roughness:.05,transparent:!0,opacity:.14,clearcoat:1,depthWrite:!1}));st.position.y=.14,et.add(st),et.scale.setScalar(.85),M("sausage",et,.5,p[1]+.025,.03,1);let gt=new xt,ht=new qt({color:"#c98a45",roughness:.6,clearcoat:.3}),Ft=It(new fe(.5,.22,.34,4,.08),ht);Ft.position.y=.11,gt.add(Ft);let Mt=It(new se(.17,.17,.5,24,1,!1,0,Math.PI),ht);Mt.rotation.z=Math.PI/2,Mt.rotation.y=Math.PI/2,Mt.position.y=.2,Mt.scale.set(1,1,.9),gt.add(Mt);for(let L of[-.12,0,.12]){let q=It(new ge(.03,.02,.3),new ue({color:"#e7b87a",roughness:.7}),!1);q.position.set(L,.36,0),q.rotation.z=.5,gt.add(q)}let A=It(new fe(.06,.34,.3,2,.03),new ue({color:"#fbeccd",roughness:.85}),!1);A.position.set(.25,.18,0),gt.add(A),M("bread",gt,.06,p[0]+.025,0,.7);let b=new xt,U=new qt({color:"#e63b2e",roughness:.2,clearcoat:1,clearcoatRoughness:.1}),W=new ue({color:"#3f8f3a",roughness:.6});[[-.13,.03,.15],[.12,-.04,.14],[0,.1,.12]].forEach(([L,q,j])=>{let nt=It(new Qt(j,24,18),U);nt.scale.y=.85,nt.position.set(L,j*.85,q),b.add(nt);let Nt=It(new pn(j*.45,.03,5),W,!1);Nt.position.set(L,j*1.7,q),b.add(Nt)});let K=It(new Xe(.16,.012,6,20,Math.PI),W,!1);return K.position.set(0,.3,.04),b.add(K),M("tomato",b,.62,p[0]+.025,0,.6),t.userData.items=E,t}function cf(i,t){let e=av(t);e.position.set($e.pan.x,0,$e.pan.z),i.add(e);let n=lv(t);n.position.set($e.plate.x,0,$e.plate.z),i.add(n);let s=cv(t);s.position.set($e.carton.x,0,$e.carton.z),s.rotation.y=.25,i.add(s);let r=hv(t);r.position.set($e.butter.x,0,$e.butter.z),r.rotation.y=-.2,i.add(r);let o=uv(t);o.position.set($e.salt.x,0,$e.salt.z),i.add(o);let a=dv(t);a.position.set($e.pepper.x,0,$e.pepper.z),i.add(a);let l=fv(t);l.position.set($e.spatula.x,0,$e.spatula.z),l.rotation.y=.5,i.add(l);let c=mv(t);c.position.set(1,0,-2.6),c.scale.setScalar(1.3),i.add(c);let h=()=>!0;An(c,d=>d.userData.interact==="fridgeItem",["fridge"],h);let u=[];c.traverse(d=>{d.userData.interact==="fridgeItem"&&d.parent&&d.parent.userData.interact!=="fridgeItem"&&(!d.isMesh||d.children.length)&&u.push(d)});for(let d of u){let f=d;d.isMesh&&(f=new xt,f.userData={...d.userData},d.parent.add(f),f.position.copy(d.position),f.quaternion.copy(d.quaternion),f.scale.copy(d.scale),f.attach(d)),An(f,()=>!1,["fridgeItem"],h)}for(let[d,f]of[[s,["carton"]],[r,["butterDish"]],[o,["salt"]],[a,["pepper"]]])An(d,g=>g.userData.interact==="cartonEgg"||g.userData.interact==="butterBlock",f,h);return{pan:e,plate:n,carton:s,butterDish:r,salt:o,pepper:a,spatula:l,fridge:c}}var hf={steam:{color:"#ffffff",size:[.35,1.5],life:2.4,alpha:.2,rise:.75,drag:.6,curl:.55},wisp:{color:"#ffffff",size:[.18,.7],life:2.6,alpha:.16,rise:.45,drag:.8,curl:.35},smoke:{color:"#776d68",size:[.4,1.9],life:2.8,alpha:.42,rise:.85,drag:.5,curl:.4},spatter:{color:"#fff3c4",size:[.06,.03],life:.45,alpha:.95,rise:0,gravity:-9},salt:{color:"#ffffff",size:[.05,.05],life:1.2,alpha:1,gravity:-7},pepper:{color:"#2e2420",size:[.05,.05],life:1.2,alpha:1,gravity:-7},bubble:{color:"#fff7d6",size:[.03,.12],life:.35,alpha:.85,rise:0},sparkle:{color:"#fff1a8",size:[.25,.05],life:.9,alpha:1,rise:.6,gravity:-1.5,add:!0},glint:{color:"#ffd6f2",size:[.05,.18],life:.5,alpha:.9,rise:.4,add:!0},heart:{color:"#ff8fc8",size:[.22,.34],life:1.4,alpha:1,rise:.8,drag:1,curl:.4,add:!0},shell:{color:"#fff1df",size:[.06,.06],life:.7,alpha:1,gravity:-9},rain:{color:"#cfd8ff",size:[.05,.05],life:1.1,alpha:.55,gravity:-14},snow:{color:"#ffffff",size:[.08,.08],life:4,alpha:.9,rise:-.5,drag:1,curl:.5}},gv=`
  attribute float size; attribute vec4 tint;
  varying vec4 vTint;
  uniform float scale;
  void main() {
    vTint = tint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * scale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`,yv=`
  uniform sampler2D map;
  varying vec4 vTint;
  void main() {
    vec4 t = texture2D(map, gl_PointCoord);
    gl_FragColor = vec4(vTint.rgb, vTint.a * t.a);
    if (gl_FragColor.a < 0.004) discard;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,io=class{constructor(t,e,n,s){this.max=n,this.n=0;let r=new Le;this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.tint=new Float32Array(n*4),r.setAttribute("position",new Ie(this.pos,3).setUsage(Ra)),r.setAttribute("size",new Ie(this.size,1).setUsage(Ra)),r.setAttribute("tint",new Ie(this.tint,4).setUsage(Ra)),r.boundingSphere=new li(new R,1e4),this.mat=new wn({uniforms:{map:{value:e},scale:{value:400}},vertexShader:gv,fragmentShader:yv,transparent:!0,depthWrite:!1,blending:s?Jn:Ji}),this.points=new ua(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.geo=r}flush(){this.geo.setDrawRange(0,this.n);for(let t of["position","size","tint"]){let e=this.geo.attributes[t];e.needsUpdate=!0,e.clearUpdateRanges(),e.addUpdateRange(0,this.n*e.itemSize)}}},Fa=new St,Oa=class{constructor(t,e,n=600){this.max=n,this.parts=[],this.free=[],this.normal=new io(t,e,n,!1),this.add=new io(t,e,n,!0),this.heartTex=_v(),this.hearts=new io(t,this.heartTex,64,!0)}setViewport(t,e,n){let s=t*n/(2*Math.tan(fr.degToRad(e)/2));this.normal.mat.uniforms.scale.value=this.add.mat.uniforms.scale.value=this.hearts.mat.uniforms.scale.value=s}emit(t,e,{vel:n=null,spread:s=.2,count:r=1,floorY:o=-10,color:a=null,life:l=null}={}){let c=hf[t];for(let h=0;h<r;h++){if(this.parts.length>=this.max)return;let u=this.free.pop()||{x:0,y:0,z:0,vx:0,vy:0,vz:0,r:1,g:1,b:1};u.type=t,u.t=0,u.life=(l||c.life)*(.75+Math.random()*.5),u.floorY=o,u.spin=Math.random(),u.x=e.x+(Math.random()-.5)*s,u.y=e.y,u.z=e.z+(Math.random()-.5)*s,n?(u.vx=n.x,u.vy=n.y,u.vz=n.z):u.vx=u.vy=u.vz=0,t==="spatter"?(u.vx=(Math.random()-.5)*3,u.vy=2+Math.random()*2.5,u.vz=(Math.random()-.5)*3):t==="shell"?(u.vx=(Math.random()-.5)*2,u.vy=1+Math.random()*1.5,u.vz=(Math.random()-.5)*2):t==="sparkle"?(u.vx=(Math.random()-.5)*2.5,u.vy=1+Math.random()*2,u.vz=(Math.random()-.5)*2.5):t==="heart"?(u.vx=(Math.random()-.5)*.8,u.vy=.6,u.vz=(Math.random()-.5)*.4):(t==="salt"||t==="pepper")&&(u.vx+=(Math.random()-.5)*.5,u.vy+=-.5-Math.random(),u.vz+=(Math.random()-.5)*.5),Fa.set(a||c.color),u.r=Fa.r,u.g=Fa.g,u.b=Fa.b,this.parts.push(u)}}update(t){let e=this.normal,n=this.add,s=this.hearts;e.n=n.n=s.n=0;for(let r=this.parts.length-1;r>=0;r--){let o=this.parts[r],a=hf[o.type];o.t+=t;let l=o.t/o.life;if(l>=1||o.y<o.floorY){this.parts[r]=this.parts[this.parts.length-1],this.parts.pop(),this.free.push(o);continue}if(a.gravity&&(o.vy+=a.gravity*t),a.rise!==void 0&&a.rise!==0&&(o.vy+=(a.rise-o.vy)*Math.min(1,t*2)),a.drag&&(o.vx*=1-a.drag*t,o.vz*=1-a.drag*t,a.curl)){let d=o.t*1.7+o.spin*20;o.vx+=Math.sin(d)*a.curl*t,o.vz+=Math.cos(d*.8)*a.curl*.6*t}o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t;let c=o.type==="steam"||o.type==="smoke"||o.type==="wisp"?Math.sin(Math.PI*Math.min(1,l*1.1)):1-l*l,h=o.type==="heart"?s:a.add?n:e;if(h.n>=h.max)continue;let u=h.n++;h.pos[u*3]=o.x,h.pos[u*3+1]=o.y,h.pos[u*3+2]=o.z,h.size[u]=a.size[0]+(a.size[1]-a.size[0])*l,h.tint[u*4]=o.r,h.tint[u*4+1]=o.g,h.tint[u*4+2]=o.b,h.tint[u*4+3]=a.alpha*c}e.flush(),n.flush(),s.flush()}get count(){return this.parts.length}clear(){for(;this.parts.length;)this.free.push(this.parts.pop())}};function _v(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#fff",t.shadowColor="#fff",t.shadowBlur=6,t.beginPath(),t.moveTo(32,54),t.bezierCurveTo(4,36,8,10,24,12),t.bezierCurveTo(30,13,32,18,32,22),t.bezierCurveTo(32,18,34,13,40,12),t.bezierCurveTo(56,10,60,36,32,54),t.fill();let e=new Sn(i);return e.colorSpace=Pe,e}var Ba=i=>i[Math.random()*i.length|0];var Ha=[{id:"velvet",avatar:"\u{1F987}",name:"Velvet",fav:"omelette",blurb:"A sleepy bat who only eats at midnight.",hi:["Is it breakfast or dinner? Both, I hope.","Something warm, please\u2026 the night is chilly."],happy:["Batty-good! \u{1F987}\u{1F49C}","This is my new favourite midnight snack."],meh:["Hmm, close enough for 3 a.m.","A little sad, like a cloudy moon."],note:"Dear chef, your kitchen is the coziest light on my night flights. Thank you for every warm plate. ~ Velvet \u{1F987}"},{id:"boo",avatar:"\u{1F47B}",name:"Boo",fav:"scrambled",blurb:"A shy ghost who loves soft, fluffy things.",hi:["B-boo\u2026 may I have something fluffy?","Oh! Hello\u2026 I didn't mean to startle you."],happy:["So fluffy I could float away! \u{1F47B}","Boo-tiful!"],meh:["It's\u2026 a little spooky.","I'll eat it\u2026 quietly."],note:"I used to be too shy to order. Now this is my favourite place to haunt. Boo-tiful job, chef. ~ Boo \u{1F47B}"},{id:"bruno",avatar:"\u{1F43B}",name:"Bruno",fav:"baconeggs",blurb:"Big appetite, bigger hugs.",hi:["Hungry as a bear! Literally.","Morning, chef! Something hearty?"],happy:["Now THAT is a breakfast!","Bear-y delicious!"],meh:["I've had better honey.","Still hungry\u2026"],note:"Best breakfasts this side of the forest. Save me a seat by the window! ~ Bruno \u{1F43B}"},{id:"pip",avatar:"\u{1F430}",name:"Pip",fav:"hamtoast",blurb:"Always in a hurry, always polite.",hi:["Quick quick, I'm late!","Hi hi! Something on toast?"],happy:["Hop-tastic!","Worth being late for!"],meh:["Um\u2026 it'll do!","I'll eat it on the run."],note:"I'm always running late, but I always make time for your food. ~ Pip \u{1F430}"},{id:"miso",avatar:"\u{1F431}",name:"Miso",fav:"sunny",blurb:"Particular about runny yolks.",hi:["Mrrp. The yolk must be runny.","I have very high standards. Meow."],happy:["Purr-fect. I approve.","A chef worthy of my presence."],meh:["I suppose I'll nibble it.","Hiss\u2026 the yolk."],note:"I have tasted many eggs. Yours are the only ones I purr for. ~ Miso \u{1F431}"},{id:"fern",avatar:"\u{1F98A}",name:"Fern",fav:"friedrice",blurb:"Clever, curious and loves crispy bits.",hi:["What's cooking, clever chef?","I smell something crispy\u2026"],happy:["Foxy fine cooking!","Crispy perfection!"],meh:["Clever try!","Hmm, not quite crispy."],note:"You've outfoxed every kitchen in town. Keep the crispy bits coming! ~ Fern \u{1F98A}"},{id:"bao",avatar:"\u{1F43C}",name:"Bao",fav:"baconrice",blurb:"Eats slowly and savours everything.",hi:["Take your time\u2026 no rush.","Something with rice, please?"],happy:["Mmm\u2026 happy panda.","I'm going to nap now. Happily."],meh:["It's okay. I'm still sleepy.","Bamboo might have been better."],note:"Your kitchen is calm like a bamboo forest. Thank you for every slow, happy meal. ~ Bao \u{1F43C}"},{id:"hoot",avatar:"\u{1F989}",name:"Hoot",fav:"over",blurb:"A wise owl who reads cookbooks for fun.",hi:["Who? Me! Hungry, that is.","I've read about your eggs. Let's see."],happy:["A textbook egg! Wise work.","Hoot hoot hooray!"],meh:["Page 42 says otherwise\u2026","Interesting technique."],note:"I have read 1,000 cookbooks and none of them taste like your kitchen. ~ Hoot \u{1F989}"},{id:"ribbit",avatar:"\u{1F438}",name:"Ribbit",fav:"cheesy",blurb:"Loves rainy days and cheesy eggs.",hi:["What a lovely rainy day!","Ribbit! Something cheesy?"],happy:["Toad-ally amazing!","Cheesy and dreamy!"],meh:["A bit soggy, like me.","Ribb\u2026 it's fine."],note:"Every rainy day I hop over here. Thank you for the cheesiest smiles. ~ Ribbit \u{1F438}"},{id:"truffle",avatar:"\u{1F437}",name:"Truffle",fav:"fullbreakfast",blurb:"A food critic in a tiny bow tie.",hi:["I shall review your breakfast.","Impress me, chef."],happy:["Five oinks out of five!","I must write about this!"],meh:["I've seen better plating.","Two oinks. Maybe."],note:"My review: the coziest kitchen in the land. Five oinks, forever. ~ Truffle \u{1F437}"}],za=i=>Ha.find(t=>t.id===i);function uf(i,t={}){let e=Ha.map(n=>({r:n,w:1+Math.min(10,t[n.id]||0)*.08+Math.random()}));return e.sort((n,s)=>s.w-n.w),e.slice(0,i).map(n=>n.r)}var df=i=>Ba(i.hi),ff=(i,t)=>t>=3?Ba(i.happy):t>=2?Ba(["Tasty, thank you!","Pretty good, chef!","Yum! Almost perfect.","Nice! I\u2019ll be back."]):Ba(i.meh),pf=(i,t,e)=>(t>=3?2:t>=2?1:0)*(e===i.fav?2:1);var Rn=i=>new St(i),xv=Rn("#e4ebe4"),Uh=Rn("#fffcf4"),mf=Rn("#f2c066"),kh=Rn("#a9622a"),vv=Rn("#2a1c15"),gf=Rn("#ff9f12"),yf=Rn("#ffbf2e"),Mv=Rn("#f6d670"),so=Rn("#f2a227"),ro=Rn("#ffd44a"),_f=Rn("#f7df86"),Be=new St,mi=new St,lo=i=>Math.max(0,Math.min(1,i)),Ga=(i,t,e)=>{let n=lo((e-i)/(t-i));return n*n*(3-2*n)};function oo(i,t){return i<.4?t.copy(mf):i<.75?t.copy(mf).lerp(kh,(i-.4)/.35):t.copy(kh).lerp(vv,Math.min(1,(i-.75)/.25))}var Va=12,rs=56,ao,Wa,Xa;function bv(){let i=[];for(let t=0;t<5;t++){let e=new ns(.13,3),n=e.attributes.position,s=new R,r=Math.random()*10,o=Math.random()*10;for(let a=0;a<n.count;a++){s.fromBufferAttribute(n,a);let l=Math.sin(s.x*21+r)*Math.sin(s.y*17+o)*Math.sin(s.z*19+r*o)*.35+Math.sin(s.x*47+o)*Math.sin(s.z*43+r)*.08;s.multiplyScalar(1+l),s.y<0&&(s.y*=.35),n.setXYZ(a,s.x,s.y,s.z)}e.computeVertexNormals(),i.push(e)}return i}var co=class{constructor(t={}){this.group=new xt,this.group.name="food",this.heart=!!t.heart,this.w=0,this.y=0,this.brown=[0,0],this.down=0,this.flips=0,this.yolkBroken=!1,this.torn=!1,this.scrambled=!1,this.mixed=!1,this.folded=!1,this.fills=[],this.liftOrigin=null,this.stirTotal=0,this.lastStir=-99,this.age=0,this.buttered=!!t.buttered,this.stuck=!1,this.salt=0,this.pepper=0,this.loc="pan",this.eggs=1,this.spread=0,this.radius=.68,this.seed=Math.random()*100,this._build(),this.refresh(!0)}_build(){let t=this.seed;this.R=this.heart?Ev:h=>.68*(1+.075*Math.sin(3*h+t)+.05*Math.sin(5*h+t*1.7)+.03*Math.sin(9*h+t*2.3));let e=[],n=[],s=[],r=[];e.push(0,0,0),n.push(0),s.push(0),r.push(Math.random());for(let h=1;h<=Va+1;h++)for(let u=0;u<rs;u++){let d=u/rs*Math.PI*2;e.push(0,0,0),n.push(h>Va?1.0001:h/Va),s.push(d),r.push(Math.random())}let o=[];for(let h=0;h<rs;h++)o.push(0,1+(h+1)%rs,1+h);for(let h=0;h<Va;h++){let u=1+h*rs,d=1+(h+1)*rs;for(let f=0;f<rs;f++){let g=(f+1)%rs;o.push(u+f,u+g,d+f,u+g,d+g,d+f)}}let a=new Le;a.setAttribute("position",new ee(e,3)),a.setAttribute("color",new ee(new Float32Array(e.length/3*4),4)),a.setIndex(o),this.wRn=n,this.wAng=s,this.wNoise=r,this.whiteMat=new qt({vertexColors:!0,transparent:!0,roughness:.2,clearcoat:.6,clearcoatRoughness:.2,side:Ne}),this.white=new vt(a,this.whiteMat),this.white.receiveShadow=!0,this.white.castShadow=!0,this.group.add(this.white),this.yolkOffset=new R(.07*Math.cos(t),0,.07*Math.sin(t)),this.yolkMat=new qt({color:gf,roughness:.1,clearcoat:1,clearcoatRoughness:.04,sheen:.2}),this.yolk=new vt(new Qt(.235,40,28),this.yolkMat),this.yolk.position.copy(this.yolkOffset).setY(.06),this.yolk.scale.set(1,.74,1),this.group.add(this.yolk);let l=new Ve;for(let h=0;h<=40;h++){let u=h/40*Math.PI*2,d=.3*(1+.25*Math.sin(3*u+t)+.15*Math.sin(7*u));h?l.lineTo(Math.cos(u)*d*1.3,Math.sin(u)*d):l.moveTo(Math.cos(u)*d*1.3,Math.sin(u)*d)}this.smear=new vt(new xn(l,6),this.yolkMat),this.smear.rotation.x=-Math.PI/2,this.smear.position.copy(this.yolkOffset).setY(.062),this.smear.visible=!1,this.group.add(this.smear),this.domeMat=new qt({color:Uh,roughness:.55,clearcoat:.3}),this.dome=new vt(new Qt(.28,32,20),this.domeMat),this.dome.position.copy(this.yolkOffset).setY(.05),this.dome.scale.set(1,.45,1),this.dome.visible=!1,this.group.add(this.dome),this.foldMat=new qt({color:ro,roughness:.3,clearcoat:.5,sheen:.4,sheenColor:Rn("#fff3c0")}),this.fold=new vt(new Qt(.6,40,20,0,Math.PI*2,0,Math.PI/2),this.foldMat),this.fold.scale.set(1.08,.7,.6),this.fold.position.set(0,.012,-.1),this.fold.visible=!1,this.fold.castShadow=!0,this.fold.receiveShadow=!0,this.group.add(this.fold),ao=ao||bv(),this.curdMat=new qt({color:so,roughness:.5,clearcoat:.4,sheen:.6,sheenRoughness:.6,sheenColor:Rn("#fff3c0")}),this.curds=new xt,this.curds.visible=!1,this.group.add(this.curds),this.curdData=[];for(let h=0;h<44;h++){let u=new vt(ao[h%ao.length],this.curdMat);u.castShadow=!0,u.receiveShadow=!0;let d=.08+Math.sqrt(Math.random())*.6,f=Math.random()*Math.PI*2,g={r:d,a:f,s:.55+Math.random()*.6,sq:.5+Math.random()*.3,spin:Math.random()*6,bob:Math.random()*6};this.curdData.push(g),this.curds.add(u)}this.liquidMat=new qt({color:so,roughness:.1,clearcoat:1,transparent:!0,opacity:.95});let c=new Ve;for(let h=0;h<=48;h++){let u=h/48*Math.PI*2,d=this.R(u)*1.08;h?c.lineTo(Math.cos(u)*d,Math.sin(u)*d):c.moveTo(Math.cos(u)*d,Math.sin(u)*d)}this.liquid=new vt(new xn(c,8),this.liquidMat),this.liquid.rotation.x=-Math.PI/2,this.liquid.position.y=.012,this.liquid.visible=!1,this.liquid.receiveShadow=!0,this.group.add(this.liquid),Wa=Wa||new ge(.018,.012,.018),Xa=Xa||new ns(.014,0),this.saltFlecks=new fn(Wa,new ue({color:"#ffffff",roughness:.3}),80),this.pepperFlecks=new fn(Xa,new ue({color:"#2b211c",roughness:.9}),80),this.saltFlecks.count=0,this.pepperFlecks.count=0,this.group.add(this.saltFlecks,this.pepperFlecks)}surfaceY(t,e){if(this.scrambled)return .12+Math.random()*.06;if(this.mixed)return this.folded?.2:.03;let n=Math.hypot(t-this.yolkOffset.x,e-this.yolkOffset.z);if(n<.24&&!this.yolkBroken)return .055+Math.sqrt(Math.max(0,.235*.235-n*n))*(this.flips%2?.45:.66)+.01;let s=Math.hypot(t,e)/.68;return .06*(1-Math.min(1,s)**2.2)+.015}update(t,e,n){this.age+=t;let r=n.time-this.lastStir<1.5,o=Math.max(0,e-65)/70*.05,a=Math.max(0,e-70)/70*.017;this.scrambled||this.mixed?(this.w=lo(this.w+o*t*(r?1.3:.9)),this.y=this.w):(this.w=lo(this.w+o*t*(this.flips?1.2:1)),this.y=lo(this.y+a*t*(this.flips%2?2.4:1)*(this.yolkBroken?1.6:1)));let l=Math.max(0,e-118)/130*.034+Math.max(0,e-185)/55*.06;n.buttered||(l*=1.35),l*=n.burn??1,this.scrambled&&r&&(l*=.3),this.brown[this.down]=lo(this.brown[this.down]+l*t),!n.buttered&&e>110&&this.w>.25&&(this.stuck=!0)}get maxBrown(){return Math.max(this.brown[0],this.brown[1])}get recipe(){return this.scrambled?"scrambled":this.folded?"omelette":this.mixed?"sheet":this.flips>0?"over":"sunny"}get burnt(){return this.maxBrown>.75}flip(t){if(this.scrambled)return this.stir(1.2,0),{tossed:!0};if(this.folded)return{tossed:!0};if(this.mixed)return this.fold_(),{folded:!0,torn:this.torn};let e={},n=this.stuck?.62:.45;return this.w<n?(this.torn=!0,e.torn=!0,this.y<.5&&(this.yolkBroken=!0,e.yolk=!0)):!this.yolkBroken&&this.y<.3&&(t>3200||Math.random()<.08)&&(this.yolkBroken=!0,e.yolk=!0),this.flips++,this.down=1-this.down,this.refresh(!0),e}mix(){this.mixed||(this.mixed=!0,this.yolkBroken=!0,this.refresh(!0))}fold_(){this.folded||(this.w<.45&&(this.torn=!0),this.folded=!0,this.down=1-this.down,this.refresh(!0))}setEggs(t){this.eggs=t;let e=1+.2*(t-1);this.group.scale.set(e,1,e)}absorb(t){let e=this.eggs+t.eggs;this.w=(this.w*this.eggs+t.w*t.eggs)/e,this.y=(this.y*this.eggs+t.y*t.eggs)/e,this.brown=[Math.max(this.brown[0],t.brown[0]),Math.max(this.brown[1],t.brown[1])],this.salt+=t.salt,this.pepper+=t.pepper,this.buttered=this.buttered||t.buttered,this.fills.push(...t.fills.filter(n=>!this.fills.includes(n))),this.yolkBroken=!0,this.stuck=this.stuck||t.stuck,this.setEggs(e),this.refresh(!0)}breakYolk(){this.yolkBroken||(this.yolkBroken=!0,this.refresh(!0))}scramble(){this.scrambled||(this.scrambled=!0,this.yolkBroken=!0,this.w=this.w*.8,this.refresh(!0))}stir(t,e){this.stirTotal+=t,this.lastStir=e;for(let n of this.curdData)n.a+=t*(.6+n.r)*.9,n.r=Math.max(.05,Math.min(.66,n.r+(Math.random()-.5)*.08*t))}addSeasoning(t,e=6){let n=t==="salt"?this.saltFlecks:this.pepperFlecks;t==="salt"?this.salt++:this.pepper++;let s=new Ae;for(let r=0;r<e&&n.count<80;r++){let o=Math.sqrt(Math.random())*.55,a=Math.random()*Math.PI*2,l=Math.cos(a)*o,c=Math.sin(a)*o;s.position.set(l,this.surfaceY(l,c)+.006,c),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),s.scale.setScalar(.7+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(n.count,s.matrix),n.count++}n.instanceMatrix.needsUpdate=!0}refresh(t=!1){let e=this.scrambled,n=this.mixed&&!e,s=n&&this.folded;this.white.visible=!e&&!n,this.curds.visible=e,this.liquid.visible=e||n&&!s,this.fold.visible=s;let r=this.flips%2===1,o=!e&&!n;if(this.yolk.visible=o&&!r&&!this.yolkBroken,this.smear.visible=o&&!r&&this.yolkBroken,this.dome.visible=o&&r&&!this.torn,e)return this._refreshScrambled();if(n)return this._refreshSheet();let a=this.white.geometry.attributes.position,l=this.white.geometry.attributes.color,c=.45+.55*(1-Math.pow(1-this.spread,3)),h=1-this.down,u=this.brown[this.down],d=this.brown[h],f=this.seed%(Math.PI*2);for(let m=0;m<a.count;m++){let p=this.wRn[m],_=this.wAng[m],v=this.wNoise[m],x=this.R(_)*c;if(this.torn){let H=Math.abs((_-f+Math.PI*3)%(Math.PI*2)-Math.PI);H<.45&&(x*=.45+H)}let P=Math.min(p,1)*x,S=p>1,T=1+this.w*.35,C=S?.002:(.058*(1-Math.pow(Math.min(p,1),2.2))+.012)*T*(.6+.4*c)+(p>.85?(v-.5)*.01*this.w:0);a.setXYZ(m,Math.cos(_)*P*(S?1.01:1),C,Math.sin(_)*P*(S?1.01:1));let E=Ga(0,1,this.w*1.35-(1-Math.min(p,1))*.38+(v-.5)*.06);Be.copy(xv).lerp(Uh,E);let M=.5+.5*E,D=Ga(.7,1,Math.min(p,1))*Math.min(1,u*1.7)*(.75+v*.5),z=d*(.7+.3*p)*(.7+v*.6),B=Math.max(D,z);B>.01&&(oo(Math.max(u,d)*(.8+v*.4),mi),Be.lerp(mi,Math.min(1,B*1.5))),l.setXYZW(m,Be.r,Be.g,Be.b,S?Math.max(M,.9):M)}a.needsUpdate=l.needsUpdate=!0,(t||this._nTick++%6===0)&&this.white.geometry.computeVertexNormals(),this.whiteMat.roughness=.15+this.w*.45,this.whiteMat.clearcoat=.7*(1-this.w*.7);let g=this.y;g<.5?Be.copy(gf).lerp(yf,g/.5):Be.copy(yf).lerp(Mv,(g-.5)/.5),this.flips%2===0&&u>.8&&Be.lerp(kh,(u-.8)*1.5),this.yolkMat.color.copy(Be),this.yolkMat.roughness=.08+g*.7,this.yolkMat.clearcoat=1-g*.9;let y=.66-g*.08;this.yolk.scale.set(c*.95+.05,y,c*.95+.05),this.smear.scale.setScalar(c),Be.copy(Rn("#f6dc92")).lerp(Uh,.55+this.w*.35),d>.02&&(oo(d,mi),Be.lerp(mi,Math.min(1,d*1.4))),this.domeMat.color.copy(Be)}_refreshSheet(){let t=this.w,e=this.maxBrown;Be.copy(so).lerp(ro,Math.min(1,t*1.1)),t>.8&&Be.lerp(_f,(t-.8)*1.5),e>.05&&(oo(e,mi),Be.lerp(mi,Math.min(1,e*1.3)));let n=.5+.5*(1-Math.pow(1-this.spread,3));this.liquidMat.color.copy(Be),this.liquidMat.opacity=.97,this.liquidMat.roughness=.1+t*.4,this.liquid.scale.setScalar(.55+.45*n),this.liquid.position.y=.02+Math.min(.03,t*.03),this.foldMat.color.copy(Be),this.foldMat.roughness=.25+t*.4}_refreshScrambled(){let t=this.w,e=this.maxBrown;t<.6?Be.copy(so).lerp(ro,t/.6):Be.copy(ro).lerp(_f,(t-.6)/.4),e>.05&&(oo(e,mi),Be.lerp(mi,Math.min(1,e*1.2))),this.curdMat.color.copy(Be),this.curdMat.roughness=.25+t*.5,this.curdMat.clearcoat=.6*(1-t);let n=Math.min(1,this.stirTotal/(3+t*6)),s=Ga(.08,.65,t),r=this._t=(this._t||0)+.016;this.curds.children.forEach((a,l)=>{let c=this.curdData[l],h=c.s*(.3+.7*s)*(1.2-n*.3);a.position.set(Math.cos(c.a)*c.r,.03+h*.08+Math.sin(r*2+c.bob)*.003*(1-t),Math.sin(c.a)*c.r),a.scale.set(h,h*c.sq*(.7+n*.5),h*.9),a.rotation.set(c.spin,c.spin*.7+c.a,0)});let o=1-Ga(.25,.85,t)*(.4+n*.6);this.liquid.visible=o>.03,Be.copy(so).lerp(ro,t*.8),e>.05&&(oo(e,mi),Be.lerp(mi,Math.min(1,e))),this.liquidMat.color.copy(Be),this.liquidMat.opacity=.35+.6*o,this.liquidMat.roughness=.08+t*.5,this.liquid.scale.setScalar(.7+.3*o)}dispose(){this.group.traverse(t=>{t.isMesh&&!ao.includes(t.geometry)&&t.geometry!==Wa&&t.geometry!==Xa&&t.geometry.dispose()}),[this.whiteMat,this.yolkMat,this.domeMat,this.curdMat,this.liquidMat,this.foldMat,this.saltFlecks.material,this.pepperFlecks.material].forEach(t=>t.dispose())}};co.prototype._nTick=0;var qa=(()=>{let t=new Float32Array(360),e=[];for(let s=0;s<720;s++){let r=s/720*Math.PI*2,o=16*Math.sin(r)**3,a=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r)+3;e.push([o,-a])}for(let[s,r]of e){let o=Math.round((Math.atan2(r,s)+Math.PI*2)%(Math.PI*2)/(Math.PI*2)*360)%360;t[o]=Math.max(t[o],Math.hypot(s,r))}for(let s=0;s<360;s++)t[s]||(t[s]=t[(s+360-1)%360]);let n=Math.max(...t);for(let s=0;s<360;s++)t[s]=t[s]/n*.8;return t})();function Ev(i){let t=qa.length,e=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2)*t,n=Math.floor(e)%t;return qa[n]+(qa[(n+1)%t]-qa[n])*(e-Math.floor(e))}var gn=i=>new St(i),xf=gn("#f2c066"),vr=gn("#a9622a"),Qa=gn("#2a1c15"),rn=new St,vf=new St,Mf=new St,Te=i=>Math.max(0,Math.min(1,i)),bf=(i,t,e)=>{let n=Te((e-i)/(t-i));return n*n*(3-2*n)},Ze=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Nh(i,t){return i<.4?t.copy(xf):i<.75?t.copy(xf).lerp(vr,(i-.4)/.35):t.copy(vr).lerp(Qa,Math.min(1,(i-.75)/.25))}var ho=i=>"#"+i.getHexString(),de={bacon:{name:"Bacon",icon:"\u{1F953}",R:.62,rate:1,brown:1.15,levels:{chewy:{label:"chewy",w:[.5,.78]},crisp:{label:"crispy",w:[.8,1.1]}}},ham:{name:"Ham",icon:"\u{1F356}",R:.5,rate:.8,brown:.9,levels:{warm:{label:"warmed",w:[.4,.65]},seared:{label:"seared",w:[.7,1]}}},sausage:{name:"Sausage",icon:"\u{1F32D}",R:.55,rate:.55,brown:.9,levels:{browned:{label:"browned",w:[.75,1.05]}}},cheese:{name:"Cheese",icon:"\u{1F9C0}",R:.42,rate:1,brown:.4,levels:{melted:{label:"melted",w:[.7,1.1]}}},rice:{name:"Rice",icon:"\u{1F35A}",R:.62,rate:.7,brown:.7,levels:{}},bread:{name:"Toast",icon:"\u{1F35E}",R:.5,rate:1.1,brown:1.7,levels:{toasted:{label:"golden",w:[.55,.95]}}},tomato:{name:"Tomato",icon:"\u{1F345}",R:.48,rate:.85,brown:1,levels:{grilled:{label:"grilled",w:[.5,.95]}}}};var Ya,$a,Za,Ja,Ka,ja;function wv(i,t,e){let n=new ge(i,.036,t,46,1,8);return n.userData.base=n.attributes.position.array.slice(),n.userData.seed=e,n.userData.len=i,n.userData.wid=t,n}function Sv(i,t){let e=i.attributes.position,n=i.userData.base,s=i.userData.seed,r=i.userData.len/2,o=i.userData.wid/2;for(let a=0;a<e.count;a++){let l=n[a*3],c=n[a*3+1],h=n[a*3+2],u=l/r,d=h/o,f=Math.sin(l*7.4+s)*.026*(.55+.45*Math.abs(d))+Math.sin(l*14+s*2.1)*.009,g=t*.085*d*d*(.35+.65*Math.abs(u));e.setXYZ(a,l*(1-.14*t),c+.034+f+g,h+Math.sin(l*9+s*1.3)*.016*(1+t))}e.needsUpdate=!0,i.computeVertexNormals()}function Tv(i,t,e,n){let s=new Ve;for(let r=0;r<=t;r++){let o=r/t*Math.PI*2,a=i*(1+e*Math.sin(3*o+n)+e*.6*Math.sin(5*o+n*2.1)+e*.3*Math.sin(9*o+n));r?s.lineTo(Math.cos(o)*a,Math.sin(o)*a):s.moveTo(Math.cos(o)*a,Math.sin(o)*a)}return s}var Mr=class{constructor(t,e={}){this.kind=t,this.spec=de[t],this.R=this.spec.R,this.group=new xt,this.group.name="ing-"+t,this.inner=new xt,this.group.add(this.inner),this.c=[0,0],this.brown=[0,0],this.top=0,this.flips=0,this.melt=0,this.toss=0,this.lastToss=-99,this.egg=!1,this.eggRaw=0,this.salt=0,this.pepper=0,this.buttered=!!e.buttered,this.loc="hand",this.yaw=(Math.random()-.5)*.7,this.dirty=!0,this._rt=0,this._lastK=-1,this._build(),this.refresh(!0)}_tex(t,e){let n=document.createElement("canvas");n.width=t,n.height=e,this.ctx=n.getContext("2d"),this.tex=new Sn(n),this.tex.colorSpace=Pe,this.tex.anisotropy=4}_build(){let t=this.kind;t==="bacon"?this._buildBacon():t==="ham"?this._buildHam():t==="sausage"?this._buildSausage():t==="cheese"?this._buildCheese():t==="bread"?this._buildBread():t==="tomato"?this._buildTomato():this._buildRice(),Ya=Ya||new ge(.018,.012,.018),$a=$a||new ns(.014,0),this.saltFlecks=new fn(Ya,new ue({color:"#ffffff",roughness:.3}),60),this.pepperFlecks=new fn($a,new ue({color:"#2b211c",roughness:.9}),60),this.saltFlecks.count=0,this.pepperFlecks.count=0,this.group.add(this.saltFlecks,this.pepperFlecks)}_buildBacon(){this._tex(128,64),this.bands=[];let t=0,e=!1;for(;t<64;){let n=e?4+Ze(t)*7:8+Ze(t+3)*9;this.bands.push({y:t,h:n,fat:e,ph:Ze(t*7)*6}),t+=n,e=!e}this.mat=new qt({map:this.tex,roughness:.34,clearcoat:.65,clearcoatRoughness:.25}),this.strips=[],[[-.22,.07,.2,.27],[.03,-.06,1.9,.29],[.28,.09,3.4,.26]].forEach(([n,s,r,o])=>{let a=wv(1.08-Math.abs(n)*.2,o,r),l=new vt(a,this.mat);l.position.set(Ze(r)*.06-.03,0,n),l.rotation.y=s,l.castShadow=!0,l.receiveShadow=!0,this.inner.add(l),this.strips.push(l)})}_buildHam(){this._tex(128,128);let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");for(let o=0;o<260;o++){e.strokeStyle=Ze(o)>.5?"rgba(255,230,230,0.35)":"rgba(150,60,70,0.22)",e.lineWidth=1+Ze(o+9)*1.4,e.beginPath();let a=Ze(o+2)*128,l=Ze(o+5)*128,c=.5+Ze(o+7)*.3;e.moveTo(a,l),e.lineTo(a+Math.cos(c)*(8+Ze(o+1)*14),l+Math.sin(c)*(8+Ze(o+1)*14)),e.stroke()}this.grainCanvas=t,this.mat=new qt({map:this.tex,roughness:.42,clearcoat:.45,clearcoatRoughness:.3});let n=new qt({color:"#f0b3b3",roughness:.5}),s=new vt(new se(.43,.43,.07,48),[n,this.mat,n]);s.position.y=.045,s.castShadow=!0,s.receiveShadow=!0,this.inner.add(s),this.rimMat=new qt({color:"#fbe4e0",roughness:.35,clearcoat:.6});let r=new vt(new Xe(.43,.04,10,56),this.rimMat);r.rotation.x=Math.PI/2,r.position.y=.045,r.castShadow=!0,this.inner.add(r)}_buildSausage(){this.mat=new qt({vertexColors:!0,roughness:.36,clearcoat:.85,clearcoatRoughness:.18}),this.links=[],[[-.2,.05,1],[.2,-.07,-1]].forEach(([t,e,n])=>{let s=new hi(.11,.66,10,22).rotateZ(Math.PI/2),r=s.attributes.position;for(let a=0;a<r.count;a++){let l=r.getX(a);r.setY(a,r.getY(a)+n*.05*(1-Math.pow(l/.44,2)))}s.computeVertexNormals(),s.setAttribute("color",new Ie(new Float32Array(r.count*3),3));let o=new vt(s,this.mat);o.position.set(0,.115,t),o.rotation.y=e,o.castShadow=!0,o.receiveShadow=!0,this.inner.add(o),this.links.push(o)})}_buildCheese(){this.mat=new qt({color:"#ffc83d",roughness:.28,clearcoat:.7}),this.slice=new vt(new fe(.74,.05,.74,3,.022),this.mat),this.slice.position.y=.03,this.slice.rotation.y=.3,this.slice.castShadow=!0,this.slice.receiveShadow=!0,this.inner.add(this.slice),this.poolMat=new qt({color:"#ffd24a",roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:0});let t=new xn(Tv(.5,40,.06,1.3),6);t.rotateX(-Math.PI/2),this.pool=new vt(t,this.poolMat),this.pool.position.y=.012,this.pool.scale.setScalar(.4),this.pool.receiveShadow=!0,this.inner.add(this.pool)}_buildBread(){this._tex(128,128);let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");for(let l=0;l<420;l++)e.fillStyle=`rgba(150,110,60,${.12+Ze(l)*.22})`,e.beginPath(),e.ellipse(Ze(l+1)*128,Ze(l+2)*128,1+Ze(l+3)*2.6,.8+Ze(l+4)*1.8,Ze(l+5)*3,0,6.3),e.fill();this.poreCanvas=t;let n=new Ve;n.moveTo(-.32,-.3),n.lineTo(.32,-.3),n.lineTo(.32,.12),n.bezierCurveTo(.34,.3,.2,.34,.1,.3),n.bezierCurveTo(.03,.36,-.03,.36,-.1,.3),n.bezierCurveTo(-.2,.34,-.34,.3,-.32,.12),n.lineTo(-.32,-.3);let s=new Kn(n,{depth:.07,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,curveSegments:14}),r=s.attributes.position,o=s.attributes.uv;for(let l=0;l<r.count;l++)o.setXY(l,(r.getX(l)+.36)/.72,(r.getY(l)+.34)/.72);s.rotateX(-Math.PI/2),s.translate(0,.02,0),this.mat=new qt({map:this.tex,roughness:.75,sheen:.4,sheenColor:gn("#fff1d0")}),this.crustMat=new qt({color:"#c88a46",roughness:.7});let a=new vt(s,[this.mat,this.crustMat]);a.castShadow=!0,a.receiveShadow=!0,this.inner.add(a)}_buildTomato(){this._tex(128,128),this.skinMat=new qt({color:"#e63b2e",roughness:.22,clearcoat:1,clearcoatRoughness:.12}),this.mat=new qt({map:this.tex,roughness:.35,clearcoat:.6}),this.halves=[];let t=new Qt(.2,28,14,0,Math.PI*2,Math.PI/2,Math.PI/2),e=new ln(.2,28);e.rotateX(-Math.PI/2),[[-.2,.06],[.21,-.07]].forEach(([n,s])=>{let r=new xt;r.position.set(n,0,s);let o=new vt(t,this.skinMat);o.scale.set(1,.8,1),o.position.y=.17,o.castShadow=!0,r.add(o);let a=new vt(e,this.mat);a.position.y=.171,a.receiveShadow=!0,r.add(a),this.inner.add(r),this.halves.push(r)}),this.top=1}_buildRice(){Za=Za||new hi(.022,.085,3,6).rotateZ(Math.PI/2),Ja=Ja||new ns(.06,0),Ka=Ka||new Qt(.04,8,6),ja=ja||new ge(.06,.04,.06),this.riceMat=new qt({color:"#fffdf6",roughness:.42,clearcoat:.35,clearcoatRoughness:.3}),this.bitMat=new qt({color:"#ffd23a",roughness:.35,clearcoat:.3}),this.peaMat=new qt({color:"#79c56a",roughness:.4,clearcoat:.4}),this.carMat=new qt({color:"#f08a3c",roughness:.45}),this.riceN=380,this.bitN=34,this.peaN=16,this.carN=12;let t=(s,r,o,a=!0)=>{let l=new fn(s,r,o);return l.castShadow=a,l.frustumCulled=!1,l};this.grains=t(Za,this.riceMat,this.riceN),this.bits=t(Ja,this.bitMat,this.bitN),this.peas=t(Ka,this.peaMat,this.peaN),this.carrots=t(ja,this.carMat,this.carN),this.bits.visible=this.peas.visible=this.carrots.visible=!1;let e=new St;this.rseed=Array.from({length:this.riceN},(s,r)=>{let o={a:Math.random()*6.283,r:.62*Math.sqrt(Math.random()),rot:Math.random()*6.28,tilt:(Math.random()-.5)*.9,y:Math.random()};return e.setScalar(.9+Math.random()*.1),this.grains.setColorAt(r,e),o});let n=(s,r)=>Array.from({length:s},()=>({a:Math.random()*6.283,r:r*Math.sqrt(Math.random()),rot:Math.random()*6.28,y:Math.random()}));this.bseed=n(this.bitN,.55),this.pseed=n(this.peaN,.5),this.cseed=n(this.carN,.5),this.inner.add(this.grains,this.bits,this.peas,this.carrots),this.specks=null}get done(){return this.kind==="cheese"?this.melt:this.kind==="rice"?this.c[0]:(this.c[0]+this.c[1])/2}get maxBrown(){return Math.max(this.brown[0],this.brown[1])}update(t,e,n){let s=Math.max(0,e-65)/70*.05*this.spec.rate,r=(Math.max(0,e-118)/130*.034+Math.max(0,e-185)/55*.06)*this.spec.brown;if((n.buttered||this.kind==="bacon"||this.kind==="sausage")&&(r*=.7),r*=n.burn??1,this.kind==="cheese")this.melt=Math.min(1.3,this.melt+Math.max(0,e-55)/70*.06*t),this.brown[0]=Te(this.brown[0]+r*.4*t);else if(this.kind==="rice"){let o=n.time-this.lastToss<1.5;this.c[0]=Math.min(1.4,this.c[0]+s*t),this.brown[0]=Te(this.brown[0]+r*(o?.3:1.1)*t),this.egg&&(this.eggRaw=Math.min(1,this.eggRaw+s*1.5*t))}else{let o=1-this.top;this.c[o]=Math.min(1.4,this.c[o]+s*t),this.c[this.top]=Math.min(1.4,this.c[this.top]+s*.28*t),this.brown[o]=Te(this.brown[o]+r*t),this.brown[this.top]=Te(this.brown[this.top]+r*.04*t)}this.dirty=!0}flip(){this.top=1-this.top,this.flips++,this.dirty=!0,this._lastK=-1,this.refresh(!0)}mergeEgg(t){this.egg=!0,this.eggRaw=Te(t),this.dirty=!0,this.refresh(!0)}addSeasoning(t,e=5){let n=t==="salt"?this.saltFlecks:this.pepperFlecks;t==="salt"?this.salt++:this.pepper++;let s=new Ae,r=Math.min(.5,this.R*.85);for(let o=0;o<e&&n.count<60;o++){let a=Math.sqrt(Math.random())*r,l=Math.random()*Math.PI*2;s.position.set(Math.cos(l)*a,this.kind==="rice"?.2:.09,Math.sin(l)*a),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),s.scale.setScalar(.7+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(n.count,s.matrix),n.count++}n.instanceMatrix.needsUpdate=!0}refresh(t=!1){if(!t){if(!this.dirty)return;let o=performance.now();if(o-this._rt<110)return;this._rt=o}this.dirty=!1;let e=this.top,n=Te(this.c[e]),s=this.brown[e],r=this.kind;r==="bacon"?this._refreshBacon(n,s):r==="ham"?this._refreshHam(n,s):r==="sausage"?this._refreshSausage():r==="cheese"?this._refreshCheese():r==="bread"?this._refreshBread(n,s):r==="tomato"?this._refreshTomato():this._refreshRice()}_refreshBacon(t,e){let n=this.ctx,s=gn("#d24f52").lerp(gn("#a2452a"),t).lerp(gn("#4a2818"),Te((e-.35)/.8)),r=gn("#fbe9e2").lerp(gn("#efb866"),t).lerp(gn("#6a3f1f"),Te((e-.25)/.8));n.fillStyle=ho(s),n.fillRect(0,0,128,64);for(let o of this.bands)if(o.fat){n.fillStyle=ho(r),n.beginPath(),n.moveTo(0,o.y);for(let a=0;a<=128;a+=8)n.lineTo(a,o.y+Math.sin(a*.11+o.ph)*1.8);for(let a=128;a>=0;a-=8)n.lineTo(a,o.y+o.h+Math.sin(a*.09+o.ph*1.7)*1.8);n.closePath(),n.fill()}if(t>.6){n.fillStyle=`rgba(255,210,120,${(t-.6)*.5})`;for(let o=0;o<40;o++)n.fillRect(Ze(o)*128,Ze(o+40)*64,2,1.5)}this.tex.needsUpdate=!0,Math.abs(t-this._lastK)>.02&&(this._lastK=t,this.strips.forEach(o=>Sv(o.geometry,t))),this.mat.roughness=.34+t*.2}_refreshHam(t,e){let n=this.ctx;if(n.fillStyle=ho(gn("#f4a3a8").lerp(gn("#d6787d"),t)),n.fillRect(0,0,128,128),n.globalAlpha=.9,n.drawImage(this.grainCanvas,0,0),n.globalAlpha=1,e>.05){n.save(),n.translate(64,64),n.rotate(.7),n.strokeStyle=`rgba(70,30,20,${Te(e*1.6)*.75})`,n.lineWidth=7;for(let o=-3;o<=3;o++)n.beginPath(),n.moveTo(-70,o*20),n.lineTo(70,o*20),n.stroke();n.restore()}let s=n.createRadialGradient(64,64,20,64,64,66),r=o=>(Nh(o,rn),`rgba(${rn.r*255|0},${rn.g*255|0},${rn.b*255|0},${Te(o/.45)*.85})`);s.addColorStop(0,r(e*.2)),s.addColorStop(.75,r(e*.7)),s.addColorStop(1,r(e*1.3)),n.fillStyle=s,n.fillRect(0,0,128,128),this.tex.needsUpdate=!0,this.rimMat.color.set("#fbe4e0").lerp(vf.set("#efc183"),t).lerp(vr,Te(e*.9))}_refreshSausage(){let t=1-this.top;this.links.forEach((e,n)=>{let s=e.geometry,r=s.attributes.position,o=s.attributes.normal,a=s.attributes.color;for(let l=0;l<r.count;l++){let c=o.getY(l),h=bf(.35,-.55,c),u=Te(this.c[this.top]*(1-h)+this.c[t]*h),d=this.brown[this.top]*(1-h)+this.brown[t]*h,f=.75+Ze(l*.37+n*91)*.5;rn.set("#ee9d89").lerp(vf.set("#c4704a"),u),d>.02&&(Nh(Math.min(1.2,d*f*1.15),Mf),rn.lerp(Mf,Te(d*1.8))),Math.sin(r.getX(l)*26)>.94&&c>.3&&rn.multiplyScalar(.84),a.setXYZ(l,rn.r,rn.g,rn.b)}a.needsUpdate=!0})}_refreshCheese(){let t=Te(this.melt);this.slice.scale.set(1+t*.5,1-t*.7,1+t*.5),this.slice.position.y=.03-t*.012,this.mat.color.set("#ffc83d").lerp(rn.set("#ffd864"),t).lerp(vr,Te(this.brown[0]*.8)),this.poolMat.opacity=bf(.05,.5,t)*.95,this.pool.scale.setScalar(.45+.75*t),this.poolMat.color.copy(this.mat.color)}_refreshRice(){let t=Te(this.c[0]*.5+this.brown[0]*.9);this.riceMat.color.set("#fffdf6").lerp(rn.set("#eac07a"),t).lerp(Qa,Te((this.brown[0]-.7)/.5)),this.riceMat.roughness=.42+this.c[0]*.15;let e=this.egg;this.bits.visible=this.peas.visible=this.carrots.visible=e,this.bitMat.color.set("#ffb21e").lerp(rn.set("#ffdc4a"),Te(this.eggRaw)).lerp(vr,Te(this.brown[0]*.6)),this._layoutRice()}_layoutRice(){let t=this._d||(this._d=new Ae),e=.62;this.rseed.forEach((s,r)=>{let o=s.a+this.toss*.25,a=1-s.r*s.r/(e*e);t.position.set(Math.cos(o)*s.r,.045+a*.13+s.y*.04,Math.sin(o)*s.r),t.rotation.set(s.tilt,s.rot,s.tilt*.6),t.scale.setScalar(1),t.updateMatrix(),this.grains.setMatrixAt(r,t.matrix)});let n=(s,r,o,a)=>{r.forEach((l,c)=>{let h=l.a+this.toss*.25,u=1-l.r*l.r/(e*e);t.position.set(Math.cos(h)*l.r,o+u*.12,Math.sin(h)*l.r),t.rotation.set(l.rot,l.rot*2,l.rot*.5),t.scale.set(a,a*(.7+l.y*.5),a*(.8+l.y*.4)),t.updateMatrix(),s.setMatrixAt(c,t.matrix)}),s.instanceMatrix.needsUpdate=!0};n(this.bits,this.bseed,.2,1.3),n(this.peas,this.pseed,.19,1),n(this.carrots,this.cseed,.19,1),this.grains.instanceMatrix.needsUpdate=!0,this.grains.instanceColor&&(this.grains.instanceColor.needsUpdate=!0)}_refreshBread(t,e){let n=this.ctx;if(n.fillStyle=ho(gn("#fbefd2").lerp(gn("#efcf8e"),t)),n.fillRect(0,0,128,128),n.globalAlpha=.9,n.drawImage(this.poreCanvas,0,0),n.globalAlpha=1,e>.02){let s=n.createRadialGradient(64,60,6,64,64,80),r=o=>(Nh(o,rn),`rgba(${rn.r*255|0},${rn.g*255|0},${rn.b*255|0},${Te(o/.4)*.92})`);s.addColorStop(0,r(e*1.05)),s.addColorStop(.7,r(e*.95)),s.addColorStop(1,r(e*.8)),n.fillStyle=s,n.fillRect(0,0,128,128)}this.tex.needsUpdate=!0,this.crustMat.color.set("#c88a46").lerp(vr,Te(this.maxBrown*.8)).lerp(Qa,Te((this.maxBrown-.75)*2))}_refreshTomato(){let t=this.ctx,e=this.brown[0],n=this.brown[1],s=Te(this.c[0]);t.fillStyle=ho(gn("#ef4a3a").lerp(gn("#c9372a"),s)),t.fillRect(0,0,128,128),t.fillStyle="rgba(255,190,170,0.55)",t.beginPath(),t.arc(64,64,16,0,6.3),t.fill();for(let o=0;o<4;o++){let a=o*Math.PI/2+.4,l=64+Math.cos(a)*34,c=64+Math.sin(a)*34;t.fillStyle="rgba(255,120,90,0.7)",t.beginPath(),t.ellipse(l,c,17,11,a,0,6.3),t.fill(),t.fillStyle="rgba(255,236,170,0.9)";for(let h=0;h<5;h++)t.beginPath(),t.ellipse(l+Math.cos(a+h)*7,c+Math.sin(a+h)*5,2.4,1.5,a,0,6.3),t.fill()}if(e>.02){let o=t.createRadialGradient(64,64,10,64,64,66);o.addColorStop(0,`rgba(120,50,20,${Te(e*1.1)*.6})`),o.addColorStop(1,`rgba(60,25,10,${Te(e*1.4)*.9})`),t.fillStyle=o,t.fillRect(0,0,128,128)}this.tex.needsUpdate=!0,this.skinMat.color.set("#e63b2e").lerp(rn.set("#b5281c"),Te(n*1.3)).lerp(Qa,Te((n-.6)*1.5)),this.skinMat.roughness=.22+n*.4;let r=this.top===0;this.halves.forEach(o=>{o.rotation.x=r?0:Math.PI,o.position.y=r?0:.34})}dispose(){this.group.parent&&this.group.parent.remove(this.group);let t=[Ya,$a,Za,Ja,Ka,ja];this.group.traverse(e=>{e.isMesh&&e.geometry&&!t.includes(e.geometry)&&e.geometry.dispose()}),[this.mat,this.crustMat,this.skinMat,this.riceMat,this.bitMat,this.peaMat,this.carMat,this.rimMat,this.poolMat,this.saltFlecks.material,this.pepperFlecks.material].forEach(e=>e&&e.dispose()),this.tex&&this.tex.dispose()}};var Fh=[["all","All"],["eggs","Eggs"],["omelette","Omelettes"],["rice","Rice"],["breakfast","Breakfasts"]],Ht={butter:["Butter","Drag a pat of \u{1F9C8} butter into the pan (or tap Butter)."],heat:i=>["Heat",`Turn the heat dial to about ${i} and let the butter melt and foam.`],crack:["Crack","Drag an \u{1F95A} egg over the pan, tap to crack it, then pull the shell apart gently \u2194."],crackN:i=>["Crack",`Crack ${i} eggs into the pan, one after another \u2014 each lands in its own spot.`],plate:["Plate","Touch the egg with the spatula and drag it onto the plate \u{1F37D}\uFE0F."],season:(i,t)=>["Season",`Shake on ${[i&&"\u{1F9C2} salt",t&&"a little pepper"].filter(Boolean).join(" and ")||"nothing \u2014 keep it plain"}, then tap \u{1F6CE}\uFE0F Serve.`]},Mn=(i,t)=>{let e={bacon:["Bacon","Tap \u{1F953} Bacon in the fridge. Lift it with the spatula and flick UP to flip once the underside is done."],ham:["Ham","Add \u{1F356} Ham and sear it on both sides \u2014 flip when the chip says \u201CFlip it!\u201D."],sausage:["Sausage","Add \u{1F32D} Sausages early \u2014 they take the longest. Turn them once so both sides brown."],bread:["Toast","Add \u{1F35E} Bread to the pan and toast both sides golden (flip it halfway)."],tomato:["Tomato","Add \u{1F345} Tomato halves cut-side down until caramelised, then flip."]}[i];return[e[0],`${e[1]}${t?` Aim for ${t}.`:""}`]};var Qn=[{id:"sunny",title:"Sunny-Side Up",icon:"\u{1F373}",cat:"eggs",recipe:"sunny",levels:["runny","jammy"],eggs:1,extras:[],fill:[],salt:!0,pepper:!1,diff:1,time:"2 min",blurb:"One egg fried gently so the white sets while the yolk stays bright and glossy.",steps:[Ht.butter,Ht.heat(5),Ht.crack,["Wait","Cook until the white is fully opaque. Don\u2019t flip it!"],Ht.plate,Ht.season(!0,!1)],tip:"Lower heat gives you more time before the edges brown. Pull it as soon as the guide says Ready."},{id:"eggs2",title:"Eggs for Two",icon:"\u{1F373}",cat:"eggs",recipe:"sunny",levels:["runny","jammy"],eggs:2,extras:[],fill:[],salt:!0,pepper:!0,diff:2,time:"3 min",blurb:"Two sunny eggs side by side in one pan \u2014 keep an eye on both!",steps:[Ht.butter,Ht.heat(5),Ht.crackN(2),["Watch","Each egg gets its own progress chip. The first one in will be ready first."],["Plate","Lift each egg onto the plate with the spatula \u2014 they sit side by side."],Ht.season(!0,!0)],tip:"Crack the second egg quickly so both finish together."},{id:"over",title:"Over-Easy",icon:"\u{1F95A}",cat:"eggs",recipe:"over",levels:["easy","medium","hard"],eggs:1,extras:[],fill:[],salt:!0,pepper:!0,diff:1,time:"3 min",blurb:"Fried, flipped, and kissed on the other side. The yolk tells you how long.",steps:[Ht.butter,Ht.heat(5),Ht.crack,["Set","Wait until the white is set at the edges (chip turns blue: \u201CFlip it!\u201D)."],["Flip","Lift it with the spatula and flick UP \u2014 or tap the blue \u21BB Flip button."],["Finish","Over-easy: a few seconds. Medium: a little longer. Hard: until the yolk is firm."],Ht.plate,Ht.season(!0,!0)],tip:"Flipping before the white is set tears the egg and can break the yolk."},{id:"scrambled",title:"Soft Scrambled Eggs",icon:"\u{1F963}",cat:"eggs",recipe:"scrambled",levels:["soft","medium","well"],eggs:2,extras:[],fill:[],salt:!0,pepper:!0,diff:2,time:"3 min",blurb:"Two eggs stirred slowly into soft, creamy curds.",steps:[Ht.butter,Ht.heat(4),Ht.crackN(2),["Stir","Drag the spatula in slow circles without letting go. The eggs beat together, then turn into curds."],["Keep moving","Keep stirring so nothing catches on the bottom."],["Scoop","While still glossy, drag the spatula out over the pan rim to scoop them up, then onto the plate."],Ht.season(!0,!0)],tip:"Medium-low heat and constant stirring make the creamiest curds."},{id:"cheesy",title:"Cheesy Scramble on Toast",icon:"\u{1F9C0}",cat:"breakfast",recipe:"scrambled",levels:["soft","medium"],eggs:2,extras:[{kind:"bread",level:"toasted"}],fill:["cheese"],salt:!0,pepper:!1,diff:2,time:"4 min",blurb:"Creamy scrambled eggs with melted cheese stirred through, on golden toast.",steps:[Mn("bread","golden"),Ht.butter,Ht.crackN(2),["Stir","Stir in circles until the eggs start to curd."],["Cheese","Add \u{1F9C0} Cheese to the pan and keep stirring \u2014 it melts right in."],["Plate","Plate the toast, then scoop the eggs out over the rim onto the plate."],Ht.season(!0,!1)],tip:"Toast the bread first, then lift it out while the eggs cook."},{id:"omelette",title:"Cheese Omelette",icon:"\u{1F319}",cat:"omelette",recipe:"omelette",levels:["soft","medium"],eggs:2,extras:[],fill:["cheese"],salt:!0,pepper:!1,diff:2,time:"4 min",blurb:"Two beaten eggs set into a smooth sheet, filled with cheese and folded into a half moon.",steps:[Ht.butter,Ht.heat(5),Ht.crackN(2),["Beat","Stir ONE slow circle, then let go \u2014 the eggs merge into a smooth yellow sheet. The ring by the pan shows \u{1F95A} when it\u2019s beaten."],["Fill","While it sets, add \u{1F9C0} Cheese on top."],["Fold","When the chip says \u201CFold it!\u201D, lift with the spatula and flick UP (or tap \u21BB Flip)."],Ht.plate,Ht.season(!0,!1)],tip:"Once it\u2019s beaten, that stroke stops mixing \u2014 only a second, separate stir turns it into scrambled eggs."},{id:"hamcheese",title:"Ham & Cheese Omelette",icon:"\u{1F319}",cat:"omelette",recipe:"omelette",levels:["soft","medium"],eggs:3,extras:[],fill:["ham","cheese"],salt:!0,pepper:!0,diff:3,time:"5 min",blurb:"A generous three-egg omelette folded around seared ham and melted cheese.",steps:[Ht.butter,Ht.heat(5),Ht.crackN(3),["Beat","Stir one slow circle, then let go \u2014 all three eggs beat into one sheet."],["Fill","Add \u{1F356} Ham and \u{1F9C0} Cheese on top while it sets."],["Fold","Lift and flick UP to fold everything inside."],Ht.plate,Ht.season(!0,!0)],tip:"Add the fillings early so they warm through before you fold."},{id:"friedrice",title:"Egg Fried Rice",icon:"\u{1F35A}",cat:"rice",recipe:"friedrice",levels:["fluffy","crispy"],eggs:1,extras:[],fill:[],salt:!1,pepper:!0,diff:2,time:"4 min",blurb:"Rice tossed hot with an egg until golden \u2014 with peas and carrot bits.",steps:[Ht.heat(6),["Rice","Tap \u{1F35A} Rice in the fridge \u2014 it drops into the pan."],Ht.crack,["Toss","Stir in circles over the rice until the egg disappears into it."],["Fry","Keep tossing until golden. Fluffy: soon. Crispy: a bit longer."],["Scoop","Drag the spatula out over the pan rim to scoop the rice, then onto the plate."],Ht.season(!1,!0)],tip:"Rice that sits still catches and burns \u2014 keep it moving."},{id:"baconrice",title:"Bacon Fried Rice",icon:"\u{1F35A}",cat:"rice",recipe:"friedrice",levels:["fluffy","crispy"],eggs:1,extras:[{kind:"bacon",level:"crisp"}],fill:[],salt:!1,pepper:!0,diff:3,time:"5 min",blurb:"Egg fried rice served with crispy bacon on the side.",steps:[Mn("bacon","crispy"),["Rice","Add \u{1F35A} Rice next to the bacon."],Ht.crack,["Toss","Toss the egg into the rice in circles."],["Plate","Plate the bacon, then scoop the rice over the rim."],Ht.season(!1,!0)],tip:"Start the bacon first: it takes the longest."},{id:"baconeggs",title:"Bacon & Eggs",icon:"\u{1F953}",cat:"breakfast",recipe:"sunny",levels:["runny","jammy"],eggs:2,extras:[{kind:"bacon",level:"crisp"}],fill:[],salt:!0,pepper:!1,diff:2,time:"4 min",blurb:"The classic: two sunny eggs with crispy bacon.",steps:[Mn("bacon","crispy"),Ht.butter,Ht.crackN(2),["Flip bacon","Flip the bacon when its chip turns blue."],["Plate","Plate both eggs and the bacon."],Ht.season(!0,!1)],tip:"Put the bacon in first, then crack the eggs around it."},{id:"hamtoast",title:"Ham & Egg on Toast",icon:"\u{1F35E}",cat:"breakfast",recipe:"sunny",levels:["runny","jammy"],eggs:1,extras:[{kind:"ham",level:"seared"},{kind:"bread",level:"toasted"}],fill:[],salt:!1,pepper:!0,diff:2,time:"4 min",blurb:"Golden toast, seared ham and a sunny egg.",steps:[Mn("bread","golden"),Mn("ham","seared"),Ht.butter,Ht.crack,["Plate","Plate the toast, ham and egg."],Ht.season(!1,!0)],tip:"Three things in one pan \u2014 use the progress chips to know which is ready."},{id:"fullbreakfast",title:"Full Breakfast",icon:"\u{1F37D}\uFE0F",cat:"breakfast",recipe:"over",levels:["easy","medium"],eggs:2,extras:[{kind:"bacon",level:"crisp"},{kind:"sausage",level:"browned"},{kind:"tomato",level:"grilled"},{kind:"bread",level:"toasted"}],fill:[],salt:!0,pepper:!0,diff:3,time:"7 min",blurb:"Two over-easy eggs with bacon, sausages, grilled tomato and toast. The big one!",steps:[Mn("sausage"),Mn("bacon"),Mn("tomato"),["Plate sides","As each side is ready, lift it onto the plate to make room."],Mn("bread"),Ht.crackN(2),["Flip","Flip each egg when its chip says \u201CFlip it!\u201D."],Ht.plate,Ht.season(!0,!0)],tip:"Sausages first, toast last. The pan is busy: plate things as soon as they are ready."},{id:"tomatoscramble",title:"Tomato & Egg Scramble",icon:"\u{1F345}",cat:"eggs",recipe:"scrambled",levels:["soft","medium"],eggs:2,extras:[{kind:"tomato",level:"grilled"}],fill:[],salt:!0,pepper:!1,diff:2,time:"4 min",blurb:"Soft scrambled eggs with sweet, caramelised tomato halves on the side.",steps:[Mn("tomato","grilled"),Ht.butter,Ht.crackN(2),["Stir","Stir slow circles without letting go until the eggs turn into curds."],["Plate","Plate the tomato, then scoop the eggs out over the rim."],Ht.season(!0,!1)],tip:"Start the tomato first and push it to the edge, so the eggs have room in the middle."},{id:"sunnytomato",title:"Sunny Eggs & Blistered Tomatoes",icon:"\u{1F31E}",cat:"eggs",recipe:"sunny",levels:["runny","jammy"],eggs:2,extras:[{kind:"tomato",level:"grilled"}],fill:[],salt:!0,pepper:!0,diff:2,time:"4 min",blurb:"Two glossy sunny eggs next to jammy, blistered tomatoes. Bright and cheerful.",steps:[Mn("tomato","grilled"),Ht.butter,Ht.crackN(2),["Watch","Each egg has its own chip \u2014 pull each one when it says Ready."],["Plate","Lift the tomatoes and both eggs onto the plate."],Ht.season(!0,!0)],tip:"Dip toast into the yolk\u2026 in your imagination. In the game, just keep the yolks runny!"},{id:"moonbreakfast",title:"Midnight Breakfast",icon:"\u{1F319}",cat:"breakfast",recipe:"over",levels:["easy","medium"],eggs:1,extras:[{kind:"sausage",level:"browned"},{kind:"bread",level:"toasted"}],fill:[],salt:!0,pepper:!1,diff:2,time:"5 min",blurb:"A late-night plate for night owls (and bats): an over-easy egg, a sausage and golden toast.",steps:[Mn("sausage"),Mn("bread","golden"),Ht.butter,Ht.crack,["Flip","Flip the egg when its chip says \u201CFlip it!\u201D."],["Plate","Plate the toast, sausage and egg."],Ht.season(!0,!1)],tip:"Sausages take the longest \u2014 start them first, then the toast, then the egg."},{id:"sausagerice",title:"Sausage Fried Rice",icon:"\u{1F32D}",cat:"rice",recipe:"friedrice",levels:["fluffy","crispy"],eggs:1,extras:[{kind:"sausage",level:"browned"}],fill:[],salt:!1,pepper:!0,diff:3,time:"6 min",blurb:"Egg fried rice with a browned sausage on the side. Hearty and toasty.",steps:[Mn("sausage"),["Rice","Add \u{1F35A} Rice next to the sausage."],Ht.crack,["Toss","Stir circles over the rice until the egg disappears into it."],["Plate","Plate the sausage, then scoop the rice out over the rim."],Ht.season(!1,!0)],tip:"Turn the sausage while the rice warms up."},{id:"cheesytoastomelette",title:"Cheese Omelette on Toast",icon:"\u{1F9C7}",cat:"omelette",recipe:"omelette",levels:["soft","medium"],eggs:2,extras:[{kind:"bread",level:"toasted"}],fill:["cheese"],salt:!0,pepper:!0,diff:3,time:"6 min",blurb:"A folded cheese omelette served with golden toast. Cozy weekend food.",steps:[Mn("bread","golden"),["Plate toast","Put the toast on the plate as soon as it is golden to free up the pan."],Ht.butter,Ht.crackN(2),["Beat","Stir ONE slow circle, then let go \u2014 the eggs become one sheet."],["Fill","Add \u{1F9C0} Cheese on top while it sets."],["Fold","Lift and flick UP (or tap \u21BB Flip) to fold."],Ht.plate,Ht.season(!0,!0)],tip:"Toast first, omelette second \u2014 the omelette needs the whole pan."}],gi=i=>Qn.find(t=>t.id===i);var Ef=i=>i[Math.random()*i.length|0],Av=i=>{i=i.slice();for(let t=i.length-1;t>0;t--){let e=Math.random()*(t+1)|0;[i[t],i[e]]=[i[e],i[t]]}return i};function uo(i,t,e={}){let n=e.level||Ef(i.levels),s=i.extras.length+i.fill.length;return{id:i.id,title:i.title,icon:i.icon,recipe:i.recipe,level:n,eggs:i.eggs,salt:i.salt,pepper:i.pepper,extras:i.extras.map(r=>({...r})),fill:i.fill.slice(),patience:e.patience||140+s*30+(i.eggs-1)*20+(i.diff-1)*15,avatar:t.avatar||t[0],name:t.name||t[1],custId:t.id||null,greet:t.hi?df(t):""}}function wf(i={}){let t=uf(5,i),e=c=>Av(Qn.filter(h=>h.diff===c)),n=e(1),s=e(2),r=e(3),o=new Set,a=(...c)=>{for(let h of c)for(let u of h)if(!o.has(u.id))return o.add(u.id),u;return Qn[0]};return[[1,()=>a(n)],[2,()=>a(n,s)],[2,()=>a(s)],[2,()=>a(s)],[3,()=>a(r,s)]].map(([c,h],u)=>{let d=gi(t[u].fav);return d&&!o.has(d.id)&&d.diff<=c&&Math.random()<.4?(o.add(d.id),uo(d,t[u])):uo(h(),t[u])})}var Sf=()=>uo(gi("sunny"),["\u{1F423}","Chick"],{level:"runny",patience:9999}),Bh=i=>eo[i.recipe][i.level].label;var Hh=i=>`${de[i.kind].icon} ${de[i.kind].levels[i.level].label} ${de[i.kind].name.toLowerCase()}`,zh=(i,t)=>`${de[i].icon} ${de[i].name} ${t==="omelette"?"inside":t==="scrambled"?"stirred in":"on top"}`,tl=i=>i.title||no[i.recipe],Rv=i=>i.y||i.w||i.c;function Tf(i,t){return t==="scrambled"||t==="omelette"?i.w:i.y}function Gh(i,t){return Rv(eo[i][t])}var Oh={sunny:.85,over:.9,scrambled:0,omelette:0};function Cv(i){return i>=85?3:i>=60?2:i>=30?1:0}var Vh=(i,[t,e])=>i<t?t-i:i>e?i-e:0;function Wh(i,t){let e=0,n=[],s=(r,o,a,l)=>{o?r>=1&&r<=6?(e+=a,n.push(`${l} \u2713`)):r>6?(e+=a/2,n.push(`too much ${l}`)):n.push(`no ${l}`):r===0?e+=a:(e+=1,n.push(`didn't want ${l}`))};return s(i.salt,t.salt,4,"salt"),s(i.pepper,t.pepper,3,"pepper"),i.buttered?(e+=3,n.push("buttery")):n.push("no butter"),[Math.round(e),n.join(", ")]}function Pv(i,t){let e=t.recipe,n=i.recipe,s=y=>y==="sunny"||y==="over",r,o;n===e?(r=30,o=no[e]):n==="sheet"&&e==="omelette"?(r=20,o="Forgot to fold the omelette"):s(n)&&s(e)?(r=10,o=`Made ${no[n].toLowerCase()} instead`):(r=0,o=`Made ${no[n].toLowerCase()} instead`);let a=Gh(e,t.level),l=Tf(i,e),c=Vh(l,a),h=40*Math.max(0,1-c/.3),u=c===0?"Perfect!":l<a[0]?"A little underdone":"A bit overcooked";c>.2&&(u=l<a[0]?"Undercooked":"Overcooked");let d=Oh[e];!i.scrambled&&!i.mixed&&d&&i.w<d&&(h*=Math.max(0,Math.min(1,(i.w-.4)/(d-.4))),u="Egg white still runny"),n!==e&&(h*=.5);let f=20,g=[];return i.yolkBroken&&s(n)&&s(e)&&(f-=10,g.push("broken yolk")),i.torn&&(f-=6,g.push(i.folded?"spilled when folding":"torn")),i.maxBrown>.75?(f-=14,g.push("burnt")):i.maxBrown>.5&&(f-=6,g.push("very brown")),i.stuck&&(f-=4,g.push("stuck to pan")),i.scrambled&&i.stirTotal<3+i.w*6&&(f-=6,g.push("lumpy curds")),{rec:[r,o],don:[Math.round(h),u],cond:[Math.max(0,f),g.length?g.join(", "):"Beautiful"],sea:Wh(i,t)}}function Iv(i,t){let e=i.egg?i.toss>=Math.PI*3?30:22:10,n=i.egg?"Proper egg fried rice!":"Plain rice \u2014 no egg tossed in",s=Gh("friedrice",t.level),r=Vh(i.c[0],s),o=40*Math.max(0,1-r/.3),a=r===0?"Perfect!":i.c[0]<s[0]?"Too soft":"A bit over-fried";i.egg&&i.eggRaw<.9&&(o*=.7,a+=", egg still raw");let l=20,c=[];return i.maxBrown>.75?(l-=14,c.push("burnt")):i.maxBrown>.5&&(l-=6,c.push("very brown")),i.toss<Math.PI*1.5&&(l-=5,c.push("not tossed")),{rec:[e,n],don:[Math.round(o),a],cond:[Math.max(0,l),c.length?c.join(", "):"Beautiful"],sea:Wh(i,t)}}var Lv=i=>[...new Set(i.filter(Boolean))];function Xh(i,t,{late:e=!1,ings:n=[]}={}){Array.isArray(i)||(i=i?[i]:[]);let s=n.find(_=>_.kind==="rice"),r=t.eggs||1,o;if(t.recipe==="friedrice")o=s?Iv(s,t):{rec:[i.length?4:0,i.length?"Served eggs instead of fried rice":"No fried rice on the plate!"],don:[0,"\u2014"],cond:[0,"\u2014"],sea:[0,"\u2014"]};else if(i.length){let _=i.map(T=>Pv(T,t)),v=T=>Math.round(_.reduce((C,E)=>C+E[T][0],0)/_.length),x=T=>Lv(_.map(C=>C[T][1])).join(" \xB7 "),P={salt:Math.max(...i.map(T=>T.salt)),pepper:Math.max(...i.map(T=>T.pepper)),buttered:i.some(T=>T.buttered)};o={rec:[v("rec"),x("rec")],don:[v("don"),x("don")],cond:[v("cond"),x("cond")||"Beautiful"],sea:Wh(P,t)};let S=i.reduce((T,C)=>T+(C.eggs||1),0);S!==r?(o.rec[0]=Math.max(0,o.rec[0]-9*Math.abs(S-r)),o.rec[1]+=` \xB7 ${S} of ${r} egg${r>1?"s":""}`):r>1&&(o.rec[1]+=` \xB7 all ${r} eggs \u2713`)}else o={rec:[0,"No egg on the plate!"],don:[0,"\u2014"],cond:[0,"\u2014"],sea:[0,"\u2014"]};let[a,l]=o.rec,[c,h]=o.don,[u,d]=o.cond,f=t.extras||[],g=t.fill||[],y=f.length+g.length;if(y){let _=T=>n.some(C=>C.kind===T)||i.some(C=>C.fills&&C.fills.includes(T)),v=0,x=0,P=0,S=[];for(let T of f){let C=n.find(z=>z.kind===T.kind),E=de[T.kind].name;if(!C){S.push(`missing ${E.toLowerCase()}`);continue}v++;let M=de[T.kind].levels[T.level].w,D=Vh(C.done,M);x+=Math.max(0,1-D/.3),C.maxBrown>.75?(P+=6,S.push(`${E} burnt`)):S.push(`${E} ${D===0?"just right \u2713":C.done<M[0]?"undercooked":"overdone"}`),T.kind!=="cheese"&&Math.abs(C.c[0]-C.c[1])>.55&&(P+=3,S.push("uneven"))}for(let T of g)_(T)?(v++,S.push(`${de[T].name} \u2713`)):S.push(`missing ${de[T].name.toLowerCase()}`);a=Math.round(a*20/30+10*v/y),f.length&&(c=Math.round(c*28/40+12*x/f.length)),u=Math.max(0,u-P),h+=" \xB7 "+S.join(", ")}let m=[{label:"Recipe",max:30,pts:a,note:l},{label:"Doneness",max:40,pts:c,note:h},{label:"Condition",max:20,pts:u,note:d},{label:"Seasoning",max:10,pts:o.sea[0],note:o.sea[1]}],p=m.reduce((_,v)=>_+v.pts,0);return e&&(p=Math.max(0,p-5),m.push({label:"Late",max:0,pts:-5,note:"The customer waited too long"})),{total:p,stars:Cv(p),lines:m}}function Af(i){return Ef([["Hmm\u2026 is this even an egg?","I think I'll just have toast.","Well\u2026 I'm sure you tried!"],["It's\u2026 edible!","Not bad, keep practicing!","Close, but not quite."],["Yum, pretty good!","Tasty! Thank you!","Nice job, chef!"],["PERFECTION! \u{1F929}","Best breakfast in town!","Chef's kiss! \u{1F48B}","I could cry, it's so good!"]][i])}function Dv(i){let t=i.recipe,e=i.eggs>1?`${i.eggs}-egg `:"",n;t==="scrambled"?n=(i.w<.5?"Runny":i.w<.78?"Soft, creamy":i.w<.92?"Fluffy":"Well-done")+` ${e}scrambled eggs`+(i.fills.length?` with ${i.fills.map(r=>de[r].name.toLowerCase()).join(" & ")}`:""):t==="omelette"?n=(i.fills.length?`A ${e}${i.fills.map(r=>de[r].name.toLowerCase()).join(" & ")} omelette`:`A plain ${e}omelette`)+(i.w<.5?", still runny":i.w<.8?", soft inside":", cooked through"):t==="sheet"?n="A flat, unfolded omelette":t==="over"?n=i.y<.4?"An over-easy egg":i.y<.7?"An over-medium egg":"An over-hard egg":n=i.y<.35?"A sunny-side up egg with a runny yolk":i.y<.7?"A sunny egg with a jammy yolk":"A sunny egg with a firm yolk";let s=[];return i.maxBrown>.75?s.push("burnt to a crisp"):i.maxBrown>.45?s.push("crispy brown edges"):i.maxBrown>.2&&s.push("golden lacy edges"),t==="sunny"&&i.w<.8&&s.push("a little runny on top"),i.yolkBroken&&(t==="sunny"||t==="over")&&s.push("a broken yolk"),n+(s.length?" ("+s.join(", ")+")":"")}function qh(i,t=[]){Array.isArray(i)||(i=i?[i]:[]);let e=t.find(o=>o.kind==="rice"),n=[];e&&n.push(e.egg?"Egg fried rice":"Plain rice");let s=new Map;for(let o of i){let a=Dv(o);s.set(a,(s.get(a)||0)+1)}for(let[o,a]of s)n.push(a>1?`${a}\xD7 ${o}`:o);let r=t.filter(o=>o.kind!=="rice").map(o=>`${o.maxBrown>.75?"burnt":o.done>.85?"crispy":o.done>.45?"nicely cooked":"lightly cooked"} ${o.spec.name.toLowerCase()}`);return r.length&&n.push("with "+r.join(" & ")),(i.some(o=>o.salt)||e&&e.salt)&&n.push("\u2014 salted"),(n.join(", ").replace(", with"," with").replace(", \u2014"," \u2014")||"An empty plate")+"."}function el(i,t){if(!i)return null;let{recipe:e,level:n}=t;if(i.maxBrown>.55)return{cls:"burning",label:"Burning!",p:1};if(e==="friedrice")return{cls:i.w<.15?"raw":"cooking",label:i.w<.15?"Raw":"Toss it into the rice",p:Math.max(.15,i.w)};let[s,r]=Gh(e,n),o=Tf(i,e),a=e==="scrambled"||e==="omelette",l=i.scrambled||i.mixed||i.w>=(Oh[e]||0);if(i.w<.15)return{cls:"raw",label:"Raw",p:i.w/.15*.15};if(o>=s&&o<=r&&l)return{cls:"ready",label:"Ready!",p:1};if(o>r&&l)return{cls:"burning",label:"Overdone",p:1};let c=Math.min(a?o/Math.max(s,.01):Math.min(i.w/(Oh[e]||1),s>0?o/s:1),1);return{cls:"cooking",label:"Cooking",p:Math.max(.15,c*.95)}}function Yh(i,t){if(i.maxBrown>.55)return{cls:"burning",label:`${de[i.kind].icon} Burning!`,p:1};let e=i.done,n=de[i.kind],s=t&&n.levels[t]?n.levels[t].w:i.kind==="rice"?[.45,.8]:Object.values(n.levels)[0].w;return e<.1?{cls:"raw",label:`${n.icon} Raw`,p:.1}:e>=s[0]&&e<=s[1]?{cls:"ready",label:`${n.icon} Ready!`,p:1}:e>s[1]?{cls:"burning",label:`${n.icon} Overdone`,p:1}:{cls:"cooking",label:`${n.icon} Cooking`,p:Math.max(.12,e/s[0]*.95)}}var fo=[{text:"Drag the butter \u{1F9C8} into the pan (or just tap Butter).",tool:"butter",done:i=>i.butter.amount>0},{text:"Turn the heat dial up to about 5.",done:i=>i.heat>=4},{text:"Wait for the butter to melt and foam.",done:i=>i.butter.melt>.55},{text:"Drag an egg \u{1F95A} over the pan.",tool:"egg",done:i=>!!i.crack||i.foods.length>0},{text:"Tap the egg to crack the shell.",done:i=>i.crack&&i.crack.stage!=="hover"||i.foods.length>0},{text:"Drag the shell halves apart \u2194 \u2014 gently!",done:i=>i.foods.length>0},{text:"Cook until the white is opaque. Watch the guide above the egg.",done:i=>i.foods.some(t=>t.w>=.85)},{text:"Touch the egg with the spatula and drag it onto the plate \u{1F37D}\uFE0F.",tool:"spatula",done:i=>i.foodsAt("plate").length>0},{text:"Shake on some salt \u{1F9C2} (drag the shaker & wiggle, or tap Salt).",tool:"salt",done:i=>i.foodsAt("plate").some(t=>t.salt>0)},{text:"Tap Serve \u{1F6CE}\uFE0F!",tool:"serve",done:i=>i.servedCount>0}];var jt=null,po,Cs,Ps,il,ki=null,$h=0,os=null,ls=0,go=0,as=0,Zh=null,nl={music:.45,sfx:.8};function kv(){let i=jt.sampleRate*2,t=jt.createBuffer(1,i,jt.sampleRate),e=t.getChannelData(0);for(let n=0;n<i;n++)e[n]=Math.random()*2-1;return t}function Df(i,t,e,n,s){i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n,t+e),i.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function an({freq:i=2e3,q:t=1,type:e="bandpass",peak:n=.5,attack:s=.002,decay:r=.08,when:o=0,rate:a=1}){if(!jt)return;let l=jt.currentTime+o,c=jt.createBufferSource();c.buffer=il,c.playbackRate.value=a;let h=jt.createBiquadFilter();h.type=e,h.frequency.value=i,h.Q.value=t;let u=jt.createGain();c.connect(h),h.connect(u),u.connect(Cs),Df(u,l,s,n,r),c.start(l,Math.random()*1.5),c.stop(l+s+r+.05)}function on({freq:i=440,type:t="sine",peak:e=.3,attack:n=.005,decay:s=.3,when:r=0,slide:o=0,bus:a=null}){if(!jt)return;let l=jt.currentTime+r,c=jt.createOscillator();c.type=t,c.frequency.setValueAtTime(i,l),o&&c.frequency.exponentialRampToValueAtTime(Math.max(30,i*o),l+n+s);let h=jt.createGain();c.connect(h),h.connect(a||Cs),Df(h,l,n,e,s),c.start(l),c.stop(l+n+s+.05)}var ft={get ready(){return!!jt},init(){if(jt)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;jt=new i,po=jt.createGain(),po.gain.value=1;let t=jt.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,po.connect(t),t.connect(jt.destination),Cs=jt.createGain(),Cs.gain.value=nl.sfx,Cs.connect(po),Ps=jt.createGain(),Ps.gain.value=nl.music*.5,Ps.connect(po),il=kv();let e=jt.createBufferSource();e.buffer=il,e.loop=!0;let n=jt.createBiquadFilter();n.type="highpass",n.frequency.value=2500;let s=jt.createBiquadFilter();s.type="bandpass",s.frequency.value=5200,s.Q.value=.6;let r=jt.createGain();r.gain.value=0,e.connect(n),n.connect(s),s.connect(r),r.connect(Cs),e.start(),ki={g:r,bp:s,level:0,butter:0}},resume(){jt&&jt.state!=="running"&&jt.resume()},suspend(){jt&&jt.state==="running"&&jt.suspend()},setVolumes(i,t){nl.music=i,nl.sfx=t,jt&&(Cs.gain.setTargetAtTime(t,jt.currentTime,.05),Ps.gain.setTargetAtTime(i*.5,jt.currentTime,.05))},setSizzle(i,t,e){if(!ki)return;ki.level=i,ki.butter=t;let n=jt.currentTime;ki.g.gain.setTargetAtTime(Math.min(.32,i*.3),n,.25),ki.bp.frequency.setTargetAtTime(3800+i*3500,n,.3),i>.05&&Math.random()<i*e*22&&an({freq:3e3+Math.random()*5e3,q:2,peak:.08+i*.25,decay:.012+Math.random()*.02}),$h-=e,t>.05&&$h<=0&&($h=.03+Math.random()*(.25/(t+.2)),on({freq:500+Math.random()*700,type:"sine",peak:.04*t,attack:.002,decay:.05,slide:1.8}))},crack(){an({freq:1800,q:1.5,peak:.9,decay:.05}),an({freq:3500,q:3,peak:.6,decay:.03,when:.025}),an({freq:900,q:2,peak:.5,decay:.07,when:.05}),on({freq:220,type:"triangle",peak:.25,decay:.08,slide:.5})},shellPull(){an({freq:2400,q:4,peak:.25,decay:.12})},plop(){on({freq:380,type:"sine",peak:.45,attack:.003,decay:.16,slide:.45}),an({freq:1200,q:.8,peak:.35,decay:.15,when:.02}),ki&&ki.level>.15&&an({freq:6e3,type:"highpass",peak:.35*ki.level,decay:.7,attack:.02})},butterDrop(){on({freq:260,type:"sine",peak:.3,decay:.12,slide:.6})},scrape(i){Math.random()<.5&&an({freq:1400+Math.random()*1600,q:6,peak:.12*i,decay:.05})},clink(){on({freq:2350,type:"sine",peak:.22,decay:.5}),on({freq:3510,type:"sine",peak:.12,decay:.35}),on({freq:5120,type:"sine",peak:.05,decay:.2})},thud(){on({freq:140,type:"sine",peak:.4,decay:.12,slide:.6}),an({freq:500,q:1,peak:.2,decay:.05})},shake(){for(let i=0;i<4;i++)an({freq:6500+Math.random()*2e3,q:1.5,peak:.18,decay:.03,when:i*.018})},flipWhoosh(){an({freq:700,q:.7,peak:.35,attack:.08,decay:.2,rate:.6})},knob(){an({freq:3e3,q:8,peak:.12,decay:.015})},purr(){for(let i=0;i<6;i++)an({freq:180,q:2,type:"lowpass",peak:.25,attack:.04,decay:.12,when:i*.13,rate:.5});on({freq:880,type:"sine",peak:.08,decay:.3,when:.1,slide:1.3})},pop(){on({freq:660,type:"sine",peak:.22,decay:.09,slide:1.6})},pick(){on({freq:520,type:"triangle",peak:.12,decay:.07,slide:1.3})},ding(){[1046.5,1318.5,1568].forEach((i,t)=>on({freq:i,type:"sine",peak:.22,decay:.7,when:t*.09}))},fail(){on({freq:330,type:"triangle",peak:.2,decay:.25,slide:.7}),on({freq:247,type:"triangle",peak:.2,decay:.35,when:.18,slide:.7})},trash(){an({freq:800,q:.7,peak:.4,decay:.25}),on({freq:160,type:"sine",peak:.3,decay:.2,when:.1,slide:.6})},tear(){an({freq:1200,q:3,peak:.4,decay:.15,rate:.7})},startMusic(){!jt||os||(ls=0,go=jt.currentTime+.1,os=setInterval(Lf,60))},stopMusic(){clearInterval(os),os=null,Rf(0)},setStation(i){return as=(i%Ni.length+Ni.length)%Ni.length,jt&&(an({freq:3e3,q:.5,peak:.12,decay:.25}),Rf(Ni[as].rain),Ni[as].off?(clearInterval(os),os=null):os||(ls=0,go=jt.currentTime+.1,os=setInterval(Lf,60))),Ni[as].name},get station(){return as},stationName(i=as){return Ni[i].name},chime(){[783.99,987.77,1174.66,1567.98].forEach((i,t)=>{on({freq:i,type:"sine",peak:.16,decay:1.1,when:t*.07}),on({freq:i*2,type:"sine",peak:.04,decay:.6,when:t*.07+.01})})},stamp(){on({freq:120,type:"sine",peak:.45,decay:.16,slide:.5}),an({freq:400,q:.8,peak:.25,decay:.07})}},Ni=[{name:"\u{1F4FB} Lo-fi Kitchen",bpm:84,wave:"triangle",oct:1,rain:0,crackle:.5},{name:"\u{1F380} Music Box",bpm:96,wave:"sine",oct:2,rain:0,crackle:0},{name:"\u{1F327}\uFE0F Rainy Jazz",bpm:70,wave:"triangle",oct:1,rain:1,crackle:.8,swing:!0},{name:"\u{1F507} Radio off",off:!0,rain:0}];function Rf(i){if(jt){if(!Zh){let t=jt.createBufferSource();t.buffer=il,t.loop=!0;let e=jt.createBiquadFilter();e.type="lowpass",e.frequency.value=1400;let n=jt.createGain();n.gain.value=0,t.connect(e),e.connect(n),n.connect(Ps),t.start(),Zh=n}Zh.gain.setTargetAtTime(i?.22:0,jt.currentTime,.6)}}var Jh=84,mo=60/Jh/2,Cf=[[261.63,329.63,392,493.88],[220,261.63,329.63,392],[174.61,220,261.63,329.63],[196,246.94,293.66,349.23]],Pf=[523.25,587.33,659.25,783.99,880,1046.5];function If(i,t,e,n="triangle"){let s=jt.createOscillator();s.type=n,s.frequency.value=i;let r=jt.createOscillator();r.type="sine",r.frequency.value=i*2;let o=jt.createGain(),a=jt.createGain();a.gain.value=.3,s.connect(o),r.connect(a),a.connect(o),o.connect(Ps),o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(e,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+.9),s.start(t),r.start(t),s.stop(t+1),r.stop(t+1)}function Nv(i,t,e){for(let n of i){let s=jt.createOscillator();s.type="sine",s.frequency.value=n/2,s.detune.value=(Math.random()-.5)*8;let r=jt.createGain();s.connect(r),r.connect(Ps),r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.035,t+.6),r.gain.linearRampToValueAtTime(1e-4,t+e),s.start(t),s.stop(t+e+.1)}}function Lf(){let i=Ni[as];if(!i.off)for(Jh=i.bpm,mo=60/Jh/2;go<jt.currentTime+.25;){let t=go+(i.swing&&ls%2?mo*.25:0);i.crackle&&Math.random()<.18*i.crackle&&an({freq:5e3,q:2,peak:.02,decay:.01,when:Math.random()*mo});let e=Math.floor(ls/8)%4,n=ls%8;n===0&&Nv(Cf[e],t,mo*8+.4),(n===0||n===4)&&If(Cf[e][0]/2,t,.09);let s=(ls*7+e*3)%11;if(n%2===0&&s<6||n%2===1&&s<2){let r=Pf[(ls*5+e*2+s%3)%Pf.length];If(r*(i.oct===2?2:1),t+(n%2?.02:0),i.oct===2?.05:.07,i.wave)}ls++,go+=mo}}var $t=new R,ti=new R,Fv=new Fn,Vn=i=>1-Math.pow(1-i,3),Ov=i=>Math.atan2(Math.sin(i),Math.cos(i)),Kh=3,sl=class{constructor(t){Object.assign(this,t),this.listeners={},this.anims=[],this.mode="menu",this.paused=!1,this.time=0,this.heat=0,this.panTemp=to,this.butter={amount:0,melt:0,browned:0,pats:[]},this.foods=[],this.crack=null,this.servedLock=!1,this.pendingSpots=[],this.flying=new Set,this.ings=[],this.carry=null,this.settings={guide:!0,hints:!0},this.order=null,this.orders=[],this.orderIdx=0,this.roundScore=0,this.results=[],this.orderTime=0,this.servedCount=0,this.tutStep=0,this.camAz=0,this.spat={cooldown:0,stirAngle:0,lastA:null,lastScrape:0,wasInPan:!1,mode:"free"},this.shk={lastY:null,dir:0,extreme:0,cooldown:0},this.fxClock={steam:0,bubble:0,smoke:0,spatter:0},this._buildButterPool()}on(t,e){var n;((n=this.listeners)[t]||(n[t]=[])).push(e)}emit(t,e){(this.listeners[t]||[]).forEach(n=>n(e))}toast(t,e=""){this.emit("toast",{text:t,kind:e})}get panAnchor(){return this.props.pan.userData.foodAnchor}get plateAnchor(){return this.props.plate.userData.foodAnchor}get panOnBurner(){let t=this.props.pan.position;return Math.hypot(t.x-tn.x,t.z-tn.z)<.05}get busy(){return this.mode==="menu"||this.paused}foodsAt(t){return this.foods.filter(e=>e.loc===t)}get carryFood(){return this.foods.find(t=>t.loc==="spatula")||null}get food(){let t=this.foods;return t.find(e=>e.loc==="spatula")||t.find(e=>e.loc==="pan")||t.find(e=>e.loc==="plate")||t[0]||null}get foodLoc(){if(this.servedLock)return"served";let t=this.food;return t?t.loc:null}eggCount(){return this.foods.reduce((t,e)=>t+e.eggs,0)+this.ings.reduce((t,e)=>t+(e.kind==="rice"&&e.egg?e.eggCount||1:0),0)}_removeFood(t,e=!1){this.foods=this.foods.filter(s=>s!==t);let n=t.group;if(!e){n.parent&&n.parent.remove(n),t.dispose();return}this.anim(.35,s=>n.scale.setScalar(Math.max(.001,1-Vn(s))),()=>{n.parent&&n.parent.remove(n),t.dispose()})}_buildButterPool(){let t=new Ve;for(let e=0;e<=48;e++){let n=e/48*Math.PI*2,s=1+.07*Math.sin(5*n)+.04*Math.sin(11*n+1);e?t.lineTo(Math.cos(n)*s,Math.sin(n)*s):t.moveTo(Math.cos(n)*s,Math.sin(n)*s)}this.poolMat=new qt({color:"#ffd65c",roughness:.05,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:0,depthWrite:!1}),this.pool=new vt(new xn(t,4),this.poolMat),this.pool.rotation.x=-Math.PI/2,this.pool.position.y=.004,this.pool.scale.setScalar(.01),this.pool.renderOrder=1,this.panAnchor.add(this.pool)}start(t){this.cozy=t==="cozy",this.cozy&&(t="orders"),this.mode=t,this.paused=!1,this.freeGoal=null,this.resetKitchen(),this.results=[],this.roundScore=0,this.servedCount=0,this.tutStep=0,t==="orders"?(this.orders=wf(this.settings&&this.settings.hearts),this.setOrder(0)):t==="tutorial"?(this.orders=[Sf()],this.setOrder(0)):(this.orders=[],this.order=null),this.emit("mode",t),this.emit("changed")}setOrder(t){this.orderIdx=t,this.order=this.orders[t],this.orderTime=0,this.emit("order",this.order)}resetKitchen(){this.clearFood(!0),this.clearButter(),this.clearIngs(!0),this.setHeat(0,!0),this.panTemp=to,this.fx.clear();for(let[t,e]of Object.entries(this.props)){let n=$e[t==="butterDish"?"butter":t];n&&this.flyTo(e,n.x,n.z,.5)}}clearFood(t=!1){for(let e of this.foods.slice())this._removeFood(e,!t);if(this.crack){let e=this.crack.group;t?e.parent&&e.parent.remove(e):this.anim(.35,n=>e.scale.setScalar(Math.max(.001,1-Vn(n))),()=>e.parent&&e.parent.remove(e))}this.foods=[],this.crack=null,this.servedLock=!1}clearButter(){for(let t of this.butter.pats)t.mesh.parent&&t.mesh.parent.remove(t.mesh);this.butter={amount:0,melt:0,browned:0,pats:[]},this.poolMat.opacity=0,this.pool.scale.setScalar(.01),this.poolMat.color.set("#ffd65c")}clearIngs(t=!1){let e=this.ings;this.ings=[],this.carry=null,this.pendingSpots=[];for(let n of this.flying)n.dispose();this.flying.clear();for(let n of e){if(t){n.dispose();continue}let s=n.group;this.scene.attach(s),this.anim(.35,r=>s.scale.setScalar(Math.max(.001,1-Vn(r))),()=>n.dispose())}}setHeat(t,e=!1){t=Math.max(0,Math.min(10,Math.round(t*10)/10)),Math.floor(t)!==Math.floor(this.heat)&&!e&&ft.knob(),this.heat=t,this.emit("heat",t)}anim(t,e,n){this.anims.push({t:0,dur:t,step:e,done:n})}flyTo(t,e,n,s=.45,r=.6,o){let a=t.position.clone(),l=this.restY(t,e,n);this.anim(s,c=>{let h=Vn(c);t.position.set(a.x+(e-a.x)*h,a.y+(l-a.y)*h+Math.sin(Math.PI*c)*r,a.z+(n-a.z)*h),t.userData.restRot!==void 0&&(t.rotation.x*=.8)},()=>{t.position.set(e,l,n),o&&o()})}restY(t,e,n){return t===this.props.pan?Math.hypot(e-tn.x,n-tn.z)<.05?jr:Ui(e,n):Ui(e,n)}addButter(t=0,e=0){if(this.butter.amount>=3)return this.toast("That's plenty of butter! \u{1F9C8}"),!1;let n=xr(this.mats),s=Math.hypot(t,e);s>.55&&(t*=.55/s,e*=.55/s),n.position.set(t,.08,e),n.rotation.y=Math.random()*3,this.panAnchor.add(n),this.butter.pats.push({mesh:n,melt:0}),this.butter.amount++;for(let r of this.foodsAt("pan"))r.buttered=!0;for(let r of this.ings)r.loc==="pan"&&(r.buttered=!0);return ft.butterDrop(),this.emit("changed"),!0}autoButter(){if(this.busy)return;if(this.butter.amount>=3)return this.toast("That's plenty of butter! \u{1F9C8}");let t=xr(this.mats);this.props.butterDish.getWorldPosition($t),t.position.copy($t).setY(.4),this.scene.add(t),this.panAnchor.getWorldPosition(ti);let e=t.position.clone(),n=ti.clone().setY(ti.y+.1);ft.pick(),this.anim(.55,s=>{t.position.lerpVectors(e,n,Vn(s)),t.position.y+=Math.sin(Math.PI*s)*1.6,t.rotation.z=s*3},()=>{this.scene.remove(t),this.addButter((Math.random()-.5)*.4,(Math.random()-.5)*.4)})}canStartEgg(){return this.crack?(this.toast("Finish cracking this egg first \u{1F95A}"),!1):this.foodsAt("pan").length+this.foodsAt("air").length>=Kh?(this.toast(`The pan is full \u2014 ${Kh} eggs at most!`),!1):!0}beginCrack(t=!1){if(!this.canStartEgg())return!1;let e=new xt,{left:n,right:s}=af(this.mats,t),r=new xt,o=new xt;r.add(n),o.add(s),e.add(r,o);let a=new xt,l=new vt(new Qt(.17,16,12),new qt({color:"#eef3ec",transparent:!0,opacity:.6,roughness:.05,clearcoat:1}));l.scale.set(1,1.4,1);let c=new vt(new Qt(.11,16,12),new qt({color:"#ffa21a",roughness:.08,clearcoat:1}));c.position.y=-.05,a.add(l,c),a.scale.setScalar(.01),e.add(a),e.traverse(u=>{u.userData.interact="crackEgg",u.castShadow=!0}),this.scene.add(e);let h=this._eggSpot();return this.crack={group:e,pivotL:r,pivotR:o,drip:a,stage:"hover",sep:0,rough:!1,brown:t,t:0,spot:h},this._placeCrack(0),ft.pick(),this.emit("changed"),!0}_eggSpot(){let t=[[0,0],[-.36,.24],[.38,-.2],[.04,-.44],[-.24,-.34],[.3,.34],[-.42,-.05]],e=this.foods.filter(r=>r.loc==="pan"||r.loc==="air").map(r=>r.group.position).concat(this.ings.filter(r=>r.loc==="pan").map(r=>r.group.position),this.pendingSpots.map(r=>({x:r[0],z:r[1]})));if(!e.length)return{x:0,z:0};let n=t[0],s=-1;for(let[r,o]of t){let a=Math.min(...e.map(l=>Math.hypot(l.x-r,l.z-o)));a>s&&(s=a,n=[r,o])}return{x:n[0],z:n[1]}}_placeCrack(t){let e=this.crack;e&&(e.t+=t,this.panAnchor.localToWorld($t.set(e.spot.x,0,e.spot.z)),e.group.position.set($t.x,$t.y+1.05+(e.stage==="hover"?Math.sin(e.t*2.5)*.05:0),$t.z),e.group.rotation.set(0,this.camAz,e.stage==="hover"?Math.sin(e.t*1.7)*.08:0))}crackTap(){let t=this.crack;!t||t.stage!=="hover"||(t.stage="cracked",ft.crack(),t.group.getWorldPosition($t),this.fx.emit("shell",$t,{count:5,spread:.2,floorY:$t.y-1.2,color:t.brown?"#e7b58a":"#fff1df"}),t.pivotL.position.x=-.012,t.pivotR.position.x=.012,t.pivotL.rotation.z=.05,t.pivotR.rotation.z=-.05,this.emit("changed"))}pullApart(t,e){let n=this.crack;if(!n||n.stage==="hover"||n.stage==="released")return;n.stage==="cracked"&&ft.shellPull(),n.stage="pulling",n.sep=Math.max(0,Math.min(1,t)),e>8&&n.sep>.15&&(n.rough=!0);let s=n.sep;n.pivotL.position.x=-.012-s*.32,n.pivotR.position.x=.012+s*.32,n.pivotL.rotation.z=.05+s*1.1,n.pivotR.rotation.z=-.05-s*1.1,n.pivotL.position.y=n.pivotR.position.y=s*.12;let r=Math.max(.01,(s-.12)*1.6);n.drip.scale.set(Math.min(1,r),Math.min(1.3,r*1.2),Math.min(1,r)),n.drip.position.y=-s*.25,n.sep>.6&&this.releaseEgg()}releaseEgg(){let t=this.crack;if(!t||t.stage==="released")return;t.stage="released";let e=new co({buttered:this.butter.amount>0,heart:!!(this.settings&&this.settings.equip&&this.settings.equip.ring==="ring-heart")});e.spread=0,e.loc="pan",t.rough&&(e.yolkBroken=!0,this.toast("Too rough \u2014 the yolk broke! \u{1F494}","bad"));let n=t.spot.x+(Math.random()-.5)*.08,s=t.spot.z+(Math.random()-.5)*.08;e.group.position.set(n,.95,s),e.refresh(!0),this.panAnchor.add(e.group),this.foods.push(e),this.crack=null;let r=0,o={t:0,dur:9,step:null};o.step=(h,u)=>{if(e.loc!=="pan"){o.t=o.dur;return}r-=14*u,e.group.position.y=Math.max(0,e.group.position.y+r*u),e.group.position.y<=0&&(o.t=o.dur,e.landed=!0,this._landFood())},e.landed=!1,this.anims.push(o);let a=t.group,l=t.pivotL,c=t.pivotR;a.remove(t.drip),this.anim(.7,h=>{l.position.x-=.04,c.position.x+=.04,l.position.y+=.03,c.position.y+=.03,l.rotation.z+=.08,c.rotation.z-=.08,a.scale.setScalar(1-h*.6)},()=>{this.scene.remove(a)}),this.emit("changed")}_landFood(){ft.plop(),this.panTemp>120&&(this.panAnchor.getWorldPosition($t),this.fx.emit("spatter",$t.setY($t.y+.1),{count:8,spread:.8})),this.emit("changed")}spatulaStart(t){let e=this.spat;e.mode=t,e.lastA=null,e.px=e.pz=e.sx=e.sz=null,e.wasInPan=!1,e.stirAngle=0,e.beatLock=!1,e.askedScramble=!1}_foodNear(t,e,n=1.15){let s=null;for(let r of this.foods){if(r.loc!=="pan"||!r.landed)continue;let o=Math.hypot(t-r.group.position.x,e-r.group.position.z);o<n&&(!s||o<s.d)&&(s={f:r,d:o})}return s}spatulaMove(t,e,n,s){let r=this.props.spatula,o=this.props.pan,a=this.props.plate,l=t-o.position.x,c=e-o.position.z,h=Math.hypot(l,c),u=h<en.innerR+.08,d=Math.hypot(t-a.position.x,e-a.position.z)<pi.r,f=this.carryFood,g=!!f||!!this.carry,y=u?o.position.y+en.floorY+.01:d?a.position.y+.1:Ui(t,e)+.02;!u&&h<en.rimR+.2&&(y=o.position.y+en.height+.04),g&&(y+=.12),r.position.x=t,r.position.z=e,r.position.y+=(y-r.position.y)*Math.min(1,s*18),r.rotation.set(g?-.08:0,this.camAz,0),this.spat.cooldown-=s;let m=n.y<-650&&Math.abs(n.y)>1.2*Math.abs(n.x)&&this.spat.cooldown<=0;if(this.carry){m&&this.flipIng(-n.y);return}if(f){m&&this.flipFood(f,-n.y);return}let p=this._foodNear(l,c),_=p?p.f:null,v=p?p.d:99,x=this.spat.mode==="lift"||this.spat.mode==="free";if(m&&u){let P=this._ingNear(l,c,.25);if(P&&P.ing.kind!=="rice"&&P.ing.kind!=="cheese"&&P.d<v)return this._flipLand={x:P.ing.group.position.x,z:P.ing.group.position.z},this.liftIng(P.ing),this.flipIng(-n.y);if(_&&v<.65&&!_.scrambled&&!_.folded)return this._flipLand={x:_.group.position.x,z:_.group.position.z},this.liftFood(_),this.flipFood(_,-n.y)}if(u&&this.spat.cooldown<=0&&x){let P=this._ingNear(l,c);if(P&&P.ing.kind!=="rice"&&P.d<v)return this.liftIng(P.ing)}if(this.spat.wasInPan&&h>en.rimR+.1){let P=this.foods.find(T=>T.loc==="pan"&&T.landed&&T.scrambled),S=this.ings.find(T=>T.kind==="rice"&&T.loc==="pan");if(P){if(P.w>.2)return this.liftFood(P);this.toast("Let them set a little first!"),this.spat.wasInPan=!1}else if(S){if(S.c[0]>.2)return this.liftIng(S);this.toast("Let the rice warm up first!"),this.spat.wasInPan=!1}}if(u&&this._pushItems(l,c),_&&this.spat.cooldown<=0&&u){if(!_.scrambled&&v<.5&&x)return this.liftFood(_);if(_.scrambled&&this.spat.mode==="lift"&&v<.75)return this.liftFood(_)}this._stirTrack(l,c,h,u,_,s)}_pushItems(t,e){let n=this.spat;if(n.px==null)return;let s=t-n.px,r=e-n.pz;if(!(Math.hypot(s,r)<.004))for(let o of this.ings){if(o.loc!=="pan"||o.kind==="rice")continue;let a=o.group.position;if(Math.hypot(t-a.x,e-a.z)<o.R*.75+.1){a.x+=s*.85,a.z+=r*.85;let l=Math.hypot(a.x,a.z);l>.62&&(a.x*=.62/l,a.z*=.62/l)}}}_stirTrack(t,e,n,s,r,o){let a=this.spat;if(!s){a.lastA=null,a.px=a.pz=a.sx=a.sz=null;return}if(a.wasInPan=!0,a.px!=null){let y=Math.hypot(t-a.px,e-a.pz);y>.01&&this.time-a.lastScrape>.07&&(ft.scrape(Math.min(1,y*8)),a.lastScrape=this.time)}if(a.px=t,a.pz=e,a.sx==null){a.sx=t,a.sz=e;return}let l=a.sx,c=a.sz;a.sx+=(t-a.sx)*.5,a.sz+=(e-a.sz)*.5;let h=a.sx,u=a.sz,d=Math.hypot(h-l,u-c);if(d<.002)return;let f=(y,m)=>{let p=l-y,_=c-m,v=h-y,x=u-m;if(Math.hypot(p,_)<.08||Math.hypot(v,x)<.08)return 0;let P=Ov(Math.atan2(x,v)-Math.atan2(_,p));return Math.abs(P)>1.6?0:P},g=f(0,0);if(r){let y=r.group.position.x,m=r.group.position.z,p=f(y,m);Math.abs(p)>Math.abs(g)&&(g=p)}if(r&&!r.scrambled&&!r.folded){let y=this.order||this.freeGoal?this.target().recipe:null,m=Math.PI*.8,p=y==="scrambled"?Math.PI*1.6:y?Math.PI*2.5:Math.PI*2;a.beatLock||(a.stirAngle+=g);let _=Math.abs(a.stirAngle);r.mixed?a.beatLock?this.stirInfo={obj:r.group,p:.5,t:this.time,lock:!0,pulse:this.stirInfo&&this.stirInfo.pulse}:(this.stirInfo={obj:r.group,p:.5+.5*Math.min(1,_/p),t:this.time,lock:!1,pulse:this.stirInfo&&this.stirInfo.pulse},y&&y!=="scrambled"&&_>p*.35&&!a.askedScramble&&(a.askedScramble=!0,this.toast("Stir on to scramble it instead? \u{1F963}")),_>p&&(r.scramble(),this._mergeEggs(r),ft.pop(),this.stirInfo.pulse=this.time,this.toast("Scrambling! \u{1F944}","good"),this.emit("changed"))):(this.stirInfo={obj:r.group,p:.5*Math.min(1,_/m),t:this.time,lock:!1},_>m&&(r.mix(),this._mergeEggs(r),ft.pop(),y!=="scrambled"&&(a.beatLock=!0,this.toast(r.eggs>1?`${r.eggs} eggs beaten together! Let go for an omelette \u{1F95A}`:"Beaten smooth! Let go for an omelette \u{1F95A}","good")),this.stirInfo.pulse=this.time,this.emit("changed")))}else if(r&&r.scrambled){a.stirAngle+=g,r.stir(d*1.6,this.time),g&&this._mergeEggs(r);for(let y=this.ings.length-1;y>=0;y--){let m=this.ings[y];m.loc!=="pan"||m.kind!=="cheese"&&m.kind!=="ham"||Math.hypot(m.group.position.x-r.group.position.x,m.group.position.z-r.group.position.z)<.95&&g&&(r.fills.includes(m.kind)||r.fills.push(m.kind),m.dispose(),this.ings.splice(y,1),this.toast(`${de[m.kind].icon} ${de[m.kind].name} stirred in!`,"good"),this.emit("changed"))}}t=h,e=u;for(let y of this.ings){if(y.kind!=="rice"||y.loc!=="pan")continue;let m=y.group.position.x,p=y.group.position.z;if(Math.hypot(t-m,e-p)<y.R+.5){let _=Math.max(Math.abs(f(m,p)),Math.abs(g));_>0&&(y.toss+=_,y.lastToss=this.time,y.dirty=!0)}}}_mergeEggs(t){for(let e of this.foods.slice())e===t||e.loc!=="pan"||!e.landed||e.folded||e.flips>0&&!e.mixed||Math.hypot(e.group.position.x-t.group.position.x,e.group.position.z-t.group.position.z)>1.35||(t.absorb(e),t.scrambled&&t.refresh(!0),this._removeFood(e,!1),ft.plop())}_ingNear(t,e,n=0){let s=null;for(let r of this.ings){if(r.loc!=="pan")continue;let o=Math.hypot(t-r.group.position.x,e-r.group.position.z);o<r.R*.85+.1+n&&(!s||o<s.d)&&(s={ing:r,d:o})}return s}_freeSpot(){let t=[[.42,.5],[-.42,.5],[.42,-.5],[-.42,-.5],[0,.64],[0,-.64],[.62,.05],[-.62,.05]],e=this.ings.filter(r=>r.loc==="pan").map(r=>r.group.position).concat(this.foodsAt("pan").map(r=>r.group.position),this.pendingSpots.map(r=>({x:r[0],z:r[1]})));if(!e.length)return t[0];let n=t[0],s=-1;for(let[r,o]of t){let a=Math.min(...e.map(l=>Math.hypot(l.x-r,l.z-o)));a>s&&(s=a,n=[r,o])}return n}canAddIng(t,e){return!this.ings.some(n=>n.kind===t&&n.loc===e)}placeIngredient(t,e,n=0,s=0){if(t.loc=e,e==="pan"){let r=Math.hypot(n,s);r>.62&&(n*=.62/r,s*=.62/r),t.buttered=this.butter.amount>0,this.panAnchor.add(t.group),t.group.position.set(n,.01,s),ft.plop()}else{let r=kf[t.kind]||[0,0];this.plateAnchor.add(t.group),t.group.position.set(r[0],0,r[1]),ft.clink(),t.group.rotation.set(0,t.yaw,0),t.group.scale.setScalar(.8),t.dirty=!0,t.refresh(!0),this.ings.includes(t)||this.ings.push(t),this.emit("changed");return}t.group.rotation.set(0,t.yaw,0),t.group.scale.setScalar(1),this.ings.includes(t)||this.ings.push(t),t.dirty=!0,t.refresh(!0),this.emit("changed")}autoIngredient(t){if(this.busy)return;if(!this.canAddIng(t,"pan"))return this.toast(`${de[t].name} is already in the pan`);let e=new Mr(t,{buttered:this.butter.amount>0});e.loc="air",this.scene.add(e.group);let n=this._freeSpot();this.pendingSpots.push(n),this.flying.add(e),this.panAnchor.getWorldPosition(ti);let s=ti.clone().add(new R(.6,1.4,3.2)),r=this.panAnchor.localToWorld(new R(n[0],.08,n[1]));ft.pick(),this.anim(.55,o=>{e.group.position.lerpVectors(s,r,Vn(o)),e.group.position.y+=Math.sin(Math.PI*o)*1.1,e.group.rotation.set(0,o*3,0)},()=>{this.pendingSpots=this.pendingSpots.filter(o=>o!==n),this.flying.delete(e)&&(this.scene.remove(e.group),this.placeIngredient(e,"pan",n[0],n[1]))})}liftIng(t){this.carry={ing:t},t.loc="spatula",this.props.spatula.add(t.group),t.group.position.set(0,.05,-.02),t.group.rotation.set(0,0,0),t.group.scale.setScalar(.62),ft.scrape(1),this.emit("changed")}flipIng(t){let e=this.carry&&this.carry.ing;if(!e)return;let n=e.group,s=this.props.pan,r=this.props.spatula.position;this.carry=null,e.loc="air",this.scene.attach(n),n.scale.setScalar(1);let o=n.position.clone(),a=this._flipLand;this._flipLand=null;let l=a?a.x:r.x-s.position.x,c=a?a.z:r.z-s.position.z,h=Math.hypot(l,c);h>.55&&(l*=.55/h,c*=.55/h);let u=new R(Math.cos(this.camAz),0,-Math.sin(this.camAz)),d=!1;ft.flipWhoosh(),this.anim(.58,f=>{this.panAnchor.getWorldPosition($t),$t.x+=l,$t.z+=c,n.position.lerpVectors(o,$t,f),n.position.y+=Math.sin(Math.PI*f)*1,!d&&f>=.5&&(d=!0,e.flip()),n.quaternion.setFromAxisAngle(u,d?Math.PI*f-Math.PI:Math.PI*f)},()=>{d||e.flip(),this.ings.includes(e)&&(this.panAnchor.add(n),n.position.set(l,.01,c),n.rotation.set(0,e.yaw,0),e.loc="pan",this.spat.cooldown=.7,this.spat.mode="stir",ft.plop(),e.flips===1&&this.toast(`Nice flip! ${de[e.kind].icon}`,"good"),this.emit("changed"))})}plateIng(){let t=this.carry&&this.carry.ing;if(!t)return;this.carry=null,t.loc="air";let e=t.group;this.scene.attach(e),e.scale.setScalar(1);let n=e.position.clone(),s=kf[t.kind]||[0,0];this.anim(.4,r=>{this.plateAnchor.localToWorld($t.set(s[0],.05,s[1])),e.position.lerpVectors(n,$t,Vn(r)),e.position.y+=Math.sin(Math.PI*r)*.5},()=>{this.ings.includes(t)&&this.placeIngredient(t,"plate")})}dropIngToPan(){let t=this.carry&&this.carry.ing;if(!t)return;let e=this.props.pan,n=this.props.spatula.position,s=n.x-e.position.x,r=n.z-e.position.z,o=Math.hypot(s,r);o>.55&&(s*=.55/o,r*=.55/o),this.carry=null,t.loc="air";let a=t.group;this.scene.attach(a),a.scale.setScalar(1);let l=a.position.clone();this.anim(.3,c=>{this.panAnchor.getWorldPosition($t),$t.x+=s,$t.z+=r,a.position.lerpVectors(l,$t,Vn(c))},()=>{this.ings.includes(t)&&this.placeIngredient(t,"pan",s,r)})}_mergeRice(){let t=this.ings.find(e=>e.kind==="rice"&&e.loc==="pan");if(!(!t||t.toss<Math.PI*1.4))for(let e of this.foodsAt("pan")){if(!e.landed||Math.hypot(t.group.position.x-e.group.position.x,t.group.position.z-e.group.position.z)>(t.R+.68)*.95)continue;let n=(e.w+e.y)/2;t.egg?(t.eggRaw=Math.min(t.eggRaw,n),t.eggCount=(t.eggCount||1)+e.eggs):(t.mergeEgg(n),t.eggCount=e.eggs),this._removeFood(e,!1),ft.plop(),this.toast("Egg tossed into the rice! \u{1F35A}","good"),this.emit("changed")}}_absorbFillings(t){let e=t.liftOrigin||new R;for(let n=this.ings.length-1;n>=0;n--){let s=this.ings[n];s.loc!=="pan"||s.kind!=="cheese"&&s.kind!=="ham"||Math.hypot(s.group.position.x-e.x,s.group.position.z-e.z)<.85+.15*(t.eggs-1)&&(t.fills.includes(s.kind)||t.fills.push(s.kind),s.dispose(),this.ings.splice(n,1))}}_flipCandidates(){let t=[],e=this.target().recipe;for(let n of this.foodsAt("pan"))!n.landed||n.scrambled||n.folded||t.push({type:"food",obj:n,x:n.group.position.x,z:n.group.position.z,need:n.mixed?n.w>.5?1:0:e==="over"&&!n.flips?n.w:0});for(let n of this.ings)n.loc==="pan"&&n.kind!=="rice"&&n.kind!=="cheese"&&t.push({type:"ing",obj:n,x:n.group.position.x,z:n.group.position.z,need:n.c[1-n.top]-n.c[n.top]});return t}canFlip(){return this.busy||this.crack||this.servedLock?!1:!!this.carry||!!this.carryFood||this._flipCandidates().length>0}autoFlip(){if(this.busy)return;if(this.carry)return this.flipIng(700);let t=this.carryFood;if(t)return this.flipFood(t,700);let e=this._flipCandidates();if(!e.length)return;let n=e.filter(r=>r.need>.3),s=(n.length?n:e).sort((r,o)=>o.need-r.need)[0];this._flipLand={x:s.x,z:s.z},s.type==="ing"?(this.carry={ing:s.obj},s.obj.loc="spatula",this.flipIng(700)):(s.obj.liftOrigin=s.obj.group.position.clone(),s.obj.loc="spatula",this.flipFood(s.obj,700))}guideList(){let t=this.target(),e=[],n=this.foods.filter(r=>r.loc==="pan"||r.loc==="spatula");n.forEach((r,o)=>{let a=el(r,t),{cls:l,label:c}=a;l!=="burning"&&(t.recipe==="over"&&!r.flips&&r.w>.5&&!r.scrambled&&!r.mixed?(l="flip",c="Flip it!"):t.recipe==="omelette"&&r.mixed&&!r.folded&&!r.scrambled&&r.w>.5&&(l="flip",c="Fold it!"));let h=r.scrambled?"\u{1F963}":r.folded?"\u{1F319}":r.mixed?"\u{1F95A}":"\u{1F373}",u=n.length>1&&!r.mixed&&!r.scrambled?`#${o+1} `:r.eggs>1?`\xD7${r.eggs} `:"";e.push({key:"egg"+o,cls:l,label:`${h} ${u}${c}`,p:a.p,obj:r.group})});let s=this.foodsAt("pan").length>0;for(let r of this.ings){if(r.loc!=="pan"&&r.loc!=="spatula")continue;let o=(t.extras||[]).find(u=>u.kind===r.kind),a=Yh(r,o&&o.level),{cls:l,label:c,p:h}=a;l!=="burning"&&r.kind!=="rice"&&r.kind!=="cheese"&&r.flips===0&&r.c[1-r.top]>.5&&(l="flip",c=`${de[r.kind].icon} Flip it!`),r.kind==="rice"&&s&&l!=="burning"&&(l="cooking",c="\u{1F35A} Toss in the egg",h=Math.min(1,r.toss/(Math.PI*1.4))),e.push({key:r.kind,cls:l,label:c,p:h,obj:r.group})}return e}platedIngs(){return this.ings.filter(t=>t.loc==="plate")}plateHas(t){return this.platedIngs().some(e=>e.kind===t)||this.foodsAt("plate").some(e=>e.fills.includes(t))}canServe(){return this.busy||this.crack||this.carry||this.carryFood||this.servedLock?!1:this.foodsAt("plate").length>0||this.platedIngs().length>0}liftFood(t){t.liftOrigin=t.group.position.clone(),this.props.spatula.add(t.group),t.group.position.set(0,.045,-.02),t.group.rotation.set(0,0,0),t.loc="spatula",ft.scrape(1),this.emit("changed")}flipFood(t,e){let n=t.group;this.scene.attach(n);let s=n.position.clone(),r=this.props.pan,o=this._flipLand;this._flipLand=null;let a=o?o.x:this.props.spatula.position.x-r.position.x,l=o?o.z:this.props.spatula.position.z-r.position.z,c=Math.hypot(a,l);!o&&c>.45&&(a*=.45/c,l*=.45/c);let h=new R(Math.cos(this.camAz),0,-Math.sin(this.camAz)),u=!1,d={};t.loc="air",ft.flipWhoosh(),this.anim(.62,f=>{this.panAnchor.getWorldPosition($t),$t.x+=a,$t.z+=l,n.position.lerpVectors(s,$t,f),n.position.y+=Math.sin(Math.PI*f)*1.15,!u&&f>=.5&&(u=!0,d=t.flip(e)),n.quaternion.setFromAxisAngle(h,u?Math.PI*f-Math.PI:Math.PI*f)},()=>{u||(d=t.flip(e)),this.foods.includes(t)&&(this.panAnchor.add(n),n.position.set(a,0,l),n.rotation.set(0,0,0),t.loc="pan",this.spat.cooldown=.7,this.spat.mode="stir",ft.plop(),d.folded?(this._absorbFillings(t),ft.plop(),d.torn?(ft.tear(),this.toast("Too runny \u2014 it spilled while folding! \u{1F62C}","bad")):this.toast(t.fills.length?`Folded with ${t.fills.map(f=>de[f].icon).join("")} inside! \u{1F319}`:"Folded! \u{1F319}","good")):d.torn?(ft.tear(),this.toast("Flipped too early \u2014 it tore! \u{1F62C}","bad")):d.yolk?this.toast("Oops, the yolk broke!","bad"):d.tossed||this.toast("Nice flip! \u2728","good"),this.emit("changed"))})}spatulaRelease(){let t=this.props.spatula,e=this.props.pan,n=this.props.plate,s=Math.hypot(t.position.x-n.position.x,t.position.z-n.position.z),r=Math.hypot(t.position.x-e.position.x,t.position.z-e.position.z),o=s<pi.r+.5||s<r&&r>en.rimR;this.carry&&(o?this.plateIng():this.dropIngToPan());let a=this.carryFood;a&&(o?this.plateFood(a):this.dropToPan(a)),r<en.rimR+.4||s<pi.r+.3?this.flyTo(t,$e.spatula.x,$e.spatula.z,.5,.5,()=>t.rotation.set(0,.5,0)):(t.position.y=Ui(t.position.x,t.position.z),t.rotation.x=0)}_layoutPlate(){let t=this.foodsAt("plate"),e={1:[[0,0]],2:[[-.3,.05],[.3,-.05]],3:[[-.36,.14],[.36,.12],[0,-.34]]}[Math.min(3,t.length)]||[[0,0]];t.forEach((n,s)=>{let[r,o]=e[Math.min(s,e.length-1)];n.group.position.set(r,s*.008,o);let a=(1+.2*(n.eggs-1))*(t.length>1?.78:1);n.group.scale.set(a,1,a)})}plateFood(t){let e=t.group;this.scene.attach(e);let n=e.position.clone(),s=e.quaternion.clone();t.loc="air",this.anim(.4,r=>{this.plateAnchor.getWorldPosition($t),e.position.lerpVectors(n,$t,Vn(r)),e.position.y+=Math.sin(Math.PI*r)*.5,e.quaternion.slerpQuaternions(s,Fv.identity(),r)},()=>{this.foods.includes(t)&&(this.plateAnchor.add(e),e.rotation.set(0,Math.random()*.5,0),t.loc="plate",this._layoutPlate(),ft.clink(),this.emit("changed"))})}dropToPan(t){let e=t.group,n=this.props.pan,s=this.props.spatula,r=s.position.x-n.position.x,o=s.position.z-n.position.z,a=Math.hypot(r,o);a>.45&&(r*=.45/a,o*=.45/a),this.scene.attach(e);let l=e.position.clone();t.loc="air",this.anim(.3,c=>{this.panAnchor.getWorldPosition($t),$t.x+=r,$t.z+=o,e.position.lerpVectors(l,$t,Vn(c))},()=>{this.foods.includes(t)&&(this.panAnchor.add(e),e.position.set(r,0,o),e.rotation.set(0,0,0),t.loc="pan",ft.plop(),this.emit("changed"))})}shakerMove(t,e,n,s,r){let o=this.props[t];o.position.set(e,Ui(e,n)+1.55,n),o.rotation.set(0,this.camAz,0),o.rotateX(2.55);let a=this.shk;if(a.cooldown-=r,a.lastY===null){a.lastY=s,a.extreme=s;return}let l=Math.sign(s-a.lastY);l!==0&&l!==a.dir&&(Math.abs(a.lastY-a.extreme)>12&&a.cooldown<=0&&(this.shakeOnce(t),a.cooldown=.12),a.extreme=a.lastY,a.dir=l),a.lastY=s}shakerEnd(t){this.shk.lastY=null;let e=this.props[t],n=$e[t];this._seasonTarget(e.position.x,e.position.z)||Math.hypot(e.position.x-this.props.pan.position.x,e.position.z-this.props.pan.position.z)<en.rimR+.3?this.flyTo(e,n.x,n.z,.5,.3,()=>e.rotation.set(0,0,0)):this.anim(.2,r=>{e.rotation.x*=.6,e.position.y+=(Ui(e.position.x,e.position.z)-e.position.y)*r},()=>e.rotation.set(0,0,0))}_seasonSubject(){for(let t of["plate","pan"]){let e=this.foodsAt(t).concat(this.ings.filter(n=>n.kind==="rice"&&n.loc===t));if(e.length)return{list:e,loc:t}}return null}_seasonTarget(t,e){let n=this._seasonSubject();if(!n)return null;let s=n.loc==="plate"?this.props.plate:this.props.pan,r=n.loc==="plate"?pi.r+.15:en.innerR;return Math.hypot(t-s.position.x,e-s.position.z)<r?n.list:null}shakeOnce(t){let e=this.props[t];ft.shake(),$t.set(0,.95,0),e.localToWorld($t);let n=this._seasonTarget(e.position.x,e.position.z),s=n?n[0].group.getWorldPosition(ti).y+.1:Ui(e.position.x,e.position.z);this.fx.emit(t,$t,{count:9,spread:.12,floorY:s}),n&&setTimeout(()=>{let r=!1;for(let o of n)(this.foods.includes(o)||this.ings.includes(o))&&(o.addSeasoning(t,5),r=!0);r&&this.emit("changed")},260)}autoSeason(t){if(this.busy)return;let e=this._seasonSubject();if(!e)return this.toast("Nothing to season yet!");let n=this.props[t],s=e.loc==="plate"?this.props.plate:this.props.pan,r=n.position.clone(),o=s.position.x+.1,a=s.position.z,l=Ui(o,a)+1.55;ft.pick(),this.anim(.4,c=>{n.position.lerpVectors(r,$t.set(o,l,a),Vn(c)),n.rotation.set(0,this.camAz,0),n.rotateX(2.55*Vn(c))},()=>{let c=0,h=()=>{if(c>=3){this.flyTo(n,r.x,r.z,.45,.3,()=>n.rotation.set(0,0,0));return}c++,n.position.y=l+.15,this.shakeOnce(t),this.anim(.22,u=>{n.position.y=l+.15*(1-u)},h)};h()})}toss(){if(this.busy)return;let t=!!(this.foods.length||this.crack||this.ings.length||this.flying.size);if(!t&&this.butter.amount===0)return this.toast("Nothing to toss.");ft.trash(),this.clearFood(!1),this.clearIngs(!1),this.clearButter(),this.toast(t?"Tossed \u2014 pan wiped clean \u2728":"Pan wiped clean \u2728","good"),this.emit("changed")}serve(){if(!this.canServe())return;let t=this.foodsAt("plate"),e=this.platedIngs();this.servedLock=!0,this.servedCount++,ft.ding(),this.plateAnchor.getWorldPosition($t),this.fx.emit("sparkle",$t.setY($t.y+.3),{count:16,spread:1});let n=this.props.plate,s=n.position.y;if(this.anim(.5,a=>{n.position.y=s+Math.sin(Math.PI*a)*.35,n.rotation.y=Math.sin(Math.PI*a)*.3},()=>{n.position.y=s,n.rotation.y=0}),this.mode==="free"&&!this.freeGoal){this.emit("served",{free:!0,text:qh(t,e),food:t[0]});return}if(this.mode==="free"){let a=Xh(t,this.freeGoal,{ings:e});this.emit("served",{result:a,order:this.freeGoal,quote:qh(t,e),food:t[0]});return}let r=this.mode==="orders"&&!this.cozy&&this.orderTime>this.order.patience,o=Xh(t,this.order,{late:r,ings:e});this.results.push({order:this.order,result:o}),this.roundScore+=o.total,this.emit("served",{result:o,order:this.order,quote:this.order.custId?ff(za(this.order.custId),o.stars):Af(o.stars),food:t[0]})}afterServe(){this.clearFood(!1),this.clearButter(),this.clearIngs(!1),this.mode==="orders"?this.orderIdx+1>=this.orders.length?(this.emit("roundOver",{total:this.roundScore,results:this.results}),this.mode="results"):this.setOrder(this.orderIdx+1):this.mode==="tutorial"&&this.emit("tutorialDone"),this.emit("changed")}target(){if(this.order)return this.order;if(this.freeGoal)return this.freeGoal;let t=this.ings.find(n=>n.kind==="rice");if(!this.foods.length&&t)return{recipe:"friedrice",level:"fluffy",eggs:1,salt:!0,pepper:!1,extras:[],fill:[]};let e=this.food?this.food.recipe:"sunny";return e==="sheet"&&(e="omelette"),{recipe:e,level:e==="sunny"?"runny":e==="over"?"easy":"soft",eggs:1,salt:!0,pepper:!1,extras:[],fill:[]}}guide(){let t=this.target(),e=this.carryFood||this.foodsAt("pan")[0];if(e)return el(e,t);let n=this.ings.find(s=>s.loc==="pan"&&s.kind!=="cheese")||this.ings.find(s=>s.loc==="pan");if(n){let s=(t.extras||[]).find(r=>r.kind===n.kind);return Yh(n,s&&s.level)}return null}_missing(t){return(t.extras||[]).map(n=>n.kind).concat(t.fill||[]).filter(n=>!this.plateHas(n)).map(n=>({kind:n,name:de[n].name.toLowerCase(),inPan:this.ings.some(s=>s.kind===n&&s.loc==="pan")}))}hint(){let t=this.target(),e=t.recipe,n=t.eggs||1;if(this.mode==="tutorial"){let v=fo[this.tutStep];return v?{text:v.text,tool:v.tool}:null}if(this.servedLock)return null;if(!this.panOnBurner)return{text:"Put the pan back on the burner to heat it \u{1F525}"};let s=this.ings.filter(v=>v.loc==="pan"),r=s.find(v=>v.kind==="rice"),o=this.foodsAt("pan").filter(v=>v.landed),a=this.foodsAt("plate"),l=this.carryFood;if(o.find(v=>v.maxBrown>.55))return{text:"An egg is burning! Lower the heat or get it out \u{1F525}",tool:"spatula"};let h=s.find(v=>v.maxBrown>.55);if(this.butter.browned>.75&&!o.length&&!s.length)return{text:"The butter burnt \u2014 tap Toss \u{1F5D1}\uFE0F to wipe the pan",tool:"toss"};if(h)return{text:`The ${de[h.kind].name.toLowerCase()} is burning! Lift it out or lower the heat \u{1F525}`,tool:"spatula"};if(this.carry)return{text:"Drag onto the plate \u{1F37D}\uFE0F \u2014 or swipe UP to flip \u2191"};if(l)return{text:l.scrambled||l.folded?"Drag onto the plate \u{1F37D}\uFE0F":l.mixed?"Swipe UP to fold it \u2191 \u2014 or drag onto the plate \u{1F37D}\uFE0F":"Swipe UP to flip \u2191 \u2014 or drag onto the plate \u{1F37D}\uFE0F"};if(this.crack)return this.crack.stage==="hover"?{text:"Tap the egg to crack it \u{1F95A}"}:{text:"Drag sideways to pull the shell apart \u2194"};let u=this.eggCount(),d=e!=="friedrice"&&u<n,f=n>1?` (${Math.min(u+1,n)} of ${n})`:"",g=this._missing(t);if(!o.length&&(a.length||this.platedIngs().length&&!s.length)){if(d)return{text:`This order needs ${n} eggs \u2014 crack another \u{1F95A} (${u}/${n})`,tool:"egg"};let v=a[0]||this.platedIngs().find(x=>x.kind==="rice");if(v){if(t.salt&&!v.salt)return{text:"Shake on some salt \u{1F9C2}",tool:"salt"};if(t.pepper&&!v.pepper)return{text:"Add a little pepper",tool:"pepper"}}if(g.length){let x=g[0];return x.inPan?{text:`Wait for the ${x.name}, then lift it onto the plate \u{1F37D}\uFE0F`,tool:"spatula"}:{text:`Still needs ${x.name} \u2014 add it from the fridge`,tool:x.kind}}return{text:"Looks great \u2014 tap Serve! \u{1F6CE}\uFE0F",tool:"serve"}}if(!o.length){if(r)return r.egg?{text:"Keep tossing; scoop the rice out over the rim onto the plate \u{1F35A}",tool:"spatula"}:{text:"Now crack an egg \u{1F95A} into the pan",tool:"egg"};let v=s.find(P=>P.kind!=="cheese"&&P.flips===0&&P.c[1-P.top]>.55);if(v)return{text:`Flip the ${de[v.kind].name.toLowerCase()}: lift it with the spatula and swipe UP (or tap \u21BB Flip)`,tool:"flip"};if(this.butter.amount===0&&e!=="friedrice")return{text:"Drag butter \u{1F9C8} into the pan",tool:"butter"};if(this.heat<1)return{text:"Turn up the heat with the dial \u2192"};if(e!=="friedrice"&&this.butter.melt<.4&&this.panTemp<90)return{text:"Let the butter melt\u2026"};if(e==="friedrice")return{text:"Add rice \u{1F35A} from the fridge (tap or drag it in)",tool:"rice"};let x=g.find(P=>!P.inPan&&(t.extras||[]).some(S=>S.kind===P.kind));if(s.length&&!d){let P=this.guide();if(P&&P.cls==="ready")return{text:"Ready! Lift it onto the plate with the spatula \u{1F37D}\uFE0F",tool:"spatula"}}return x?{text:`Crack an egg \u{1F95A}${f} \u2014 and add ${x.name} from the fridge too`,tool:"egg"}:{text:`Drag an egg \u{1F95A} over the pan${f}`,tool:"egg"}}let y=e==="scrambled"||e==="omelette";if(d&&o.length<Kh&&!(y&&o.some(v=>v.mixed||v.scrambled)))return{text:`Crack the next egg \u{1F95A}${f}`,tool:"egg"};if(e==="friedrice")return r?{text:"Stir in circles to toss the egg into the rice \u{1F300}",tool:"spatula"}:{text:"Add rice \u{1F35A} from the fridge",tool:"rice"};let m=o.find(v=>e==="over"&&!v.flips)||o[0];if(e==="omelette"){if(!m.mixed)return{text:o.length>1?"Stir one slow circle, then let go \u2014 the eggs beat into one sheet \u{1F300}":"Stir one slow circle in the pan, then let go \u{1F300}",tool:"spatula"};if(!m.folded){let v=(t.fill||[]).find(x=>!this.ings.some(P=>P.kind===x&&P.loc==="pan"));return m.w<.5?v?{text:`Let it set\u2026 then add ${de[v].name.toLowerCase()} on top`,tool:v}:{text:"Let the omelette set a little\u2026"}:v?{text:`Add ${de[v].name.toLowerCase()} on top, then fold it`,tool:v}:{text:"Set! Tap \u21BB Flip (or lift and swipe UP) to fold it \u{1F319}",tool:"flip"}}}if(e==="scrambled"&&!m.scrambled)return{text:o.length>1?"Stir in circles \u2014 the eggs scramble together \u{1F300}":"Stir in circles inside the pan to scramble \u{1F300}",tool:"spatula"};if(e==="scrambled"&&m.scrambled){let v=(t.fill||[]).find(x=>!m.fills.includes(x)&&!this.ings.some(P=>P.kind===x&&P.loc==="pan"));if(v)return{text:`Add ${de[v].name.toLowerCase()} and stir it in`,tool:v}}if(e==="over"&&!m.flips)return m.w>.5?{text:"Flip it: tap \u21BB Flip, or touch the egg and swipe UP",tool:"flip"}:{text:"Let the bottom set before flipping\u2026"};if(m.scrambled&&this.time-m.lastStir>5&&m.w<.9)return{text:"Keep stirring for soft curds \u{1F300}",tool:"spatula"};let p=s.find(v=>v.kind!=="cheese"&&v.kind!=="rice"&&v.flips===0&&v.c[1-v.top]>.55);return p?{text:`Flip the ${de[p.kind].name.toLowerCase()}: tap \u21BB Flip, or lift it and swipe UP`,tool:"flip"}:o.find(v=>el(v,t).cls==="ready")?{text:o.length>1?"An egg is ready! Move it to the plate with the spatula \u{1F37D}\uFE0F":"Ready! Move it to the plate with the spatula \u{1F37D}\uFE0F",tool:"spatula"}:this.heat>7.5&&m.w<.5?{text:"High heat cooks fast \u2014 watch the edges!"}:{text:"Cooking\u2026 watch the guide"}}update(t){if(this.paused)return;this.time+=t;for(let m=this.anims.length-1;m>=0;m--){let p=this.anims[m];p.t+=t;let _=Math.min(1,p.t/p.dur);p.step&&p.step(_,t),_>=1&&(this.anims.splice(m,1),p.done&&p.done())}this.fx.update(t),this.kitchen.updateFlames(this.heat,this.time);let e=this.kitchen.knob.userData.turn;if(e.rotation.y+=(-(-135+this.heat*27)*Math.PI/180-e.rotation.y)*Math.min(1,t*14),this._placeCrack(t),this.mode==="menu"){ft.setSizzle(0,0,t);return}let n=this.panOnBurner?Jd(this.heat):to,s=n>this.panTemp?.2:.11;this.panTemp+=(n-this.panTemp)*(1-Math.exp(-s*t));let r=this.butter,o=0;for(let m=r.pats.length-1;m>=0;m--){let p=r.pats[m];this.panTemp>32&&(p.melt=Math.min(1,p.melt+(this.panTemp-32)/80*.32*t)),p.mesh.scale.set(1+p.melt*.7,Math.max(.02,1-p.melt),1+p.melt*.7),p.mesh.position.y=.08*(1-p.melt),p.mesh.visible=p.melt<.98,o+=p.melt}if(r.melt=r.amount?o/r.amount:0,r.amount){let m=.35+.65*Math.min(1,o*.9);this.pool.scale.setScalar(m*.98),this.poolMat.opacity=Math.min(.55,o*.6),this.panTemp>165&&o>.3&&(r.browned=Math.min(1,r.browned+(this.panTemp-165)/80*.05*t));let p=this.poolMat.color.set("#ffd65c");r.browned>0&&p.lerp(Uf.set("#c98a3a"),Math.min(1,r.browned*1.6)),r.browned>.6&&p.lerp(Uf.set("#4a2f1e"),(r.browned-.6)*2.5)}for(let m of this.ings)m.loc==="pan"&&m.update(t,this.panTemp,{time:this.time,buttered:r.amount>0,burn:this.cozy?.55:1}),m.refresh();this._mergeRice();let a=0,l=!1;for(let m of this.foods)m.loc==="pan"&&m.landed?(m.update(t,this.panTemp,{time:this.time,buttered:r.amount>0,burn:this.cozy?.55:1}),m.refresh(),a=Math.max(a,1-m.w*.55),m.maxBrown>.6&&(l=!0)):(m.loc==="plate"||m.loc==="spatula")&&m.scrambled&&m.refresh(),m.landed&&m.spread<1&&(m.spread=Math.min(1,m.spread+t*2.4),m.loc!=="pan"&&m.refresh());let c=this.panTemp,h=Math.max(0,Math.min(1,(c-90)/140)),u=this.ings.some(m=>m.loc==="pan"&&m.kind!=="cheese")?.75:0,d=Math.max(a,u),f=r.amount&&r.melt>.2?Math.max(0,1-r.browned)*(c>100&&c<210?1:.3):0;ft.setSizzle(h*Math.max(d,f*.65),f*h,t),this.panAnchor.getWorldPosition($t);let g=this.fxClock;if(h>.05&&(d>0||f>0)&&(g.steam-=t)<0&&(g.steam=.6/(.3+h*(d+.3)),this.fx.emit("steam",ti.set($t.x+(Math.random()-.5)*1.2,$t.y+.15,$t.z+(Math.random()-.5)*1.2),{spread:.3}),this.fx.emit("wisp",ti.set($t.x+(Math.random()-.5)*1,$t.y+.25,$t.z+(Math.random()-.5)*1),{spread:.2,count:h>.5?2:1})),f>0&&r.melt>.3&&c>100&&c<215&&(g.bubble-=t)<0){g.bubble=.05/Math.max(.2,h);let m=Math.random()*6.28,p=Math.sqrt(Math.random())*this.pool.scale.x*.95;this.fx.emit("bubble",ti.set($t.x+Math.cos(m)*p,$t.y+.02,$t.z+Math.sin(m)*p),{spread:0})}if((l||r.browned>.7||this.ings.some(m=>m.loc==="pan"&&m.maxBrown>.6))&&c>150&&(g.smoke-=t)<0&&(g.smoke=.18,this.fx.emit("smoke",ti.set($t.x,$t.y+.2,$t.z),{spread:.9})),c>175&&(d>.2||f>.2)&&(g.spatter-=t)<0&&(g.spatter=.35-h*.2,this.fx.emit("spatter",ti.set($t.x,$t.y+.08,$t.z),{count:2,spread:1.2})),this.mode==="orders"&&this.order&&(this.orderTime+=t),this.mode==="tutorial"){let m=fo[this.tutStep];m&&m.done(this)&&(this.tutStep++,ft.pop(),this.emit("tutorial",this.tutStep))}}},Uf=new St,kf={bacon:[.5,.44],ham:[-.52,-.42],sausage:[.46,-.48],cheese:[-.1,.6],rice:[0,0],bread:[-.55,.36],tomato:[.66,-.02]};var jh={pan:1.35,plate:1.2,carton:1.05,butterDish:.85,salt:.35,pepper:.35,spatula:.45,fridge:1.5},Fi=new R,Nf=new Un,Ff=new V,rl=class{constructor({canvas:t,camera:e,game:n,kitchen:s,onOrbitBlock:r}){this.canvas=t,this.camera=e,this.game=n,this.kitchen=s,this.ray=new ba,this.drag=null,this.pending=null,this.orbiting=!1,this.samples=[],t.addEventListener("pointerdown",o=>this.onDown(o)),window.addEventListener("pointermove",o=>this.onMove(o),{passive:!1}),window.addEventListener("pointerup",o=>this.onUp(o)),window.addEventListener("pointercancel",o=>this.onUp(o,!0)),t.addEventListener("pointermove",o=>this.onHover(o))}get props(){return this.game.props}setRay(t){let e=this.canvas.getBoundingClientRect();Ff.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.ray.setFromCamera(Ff,this.camera)}pick(t){this.setRay(t);let e=this.props,n=[e.pan,e.plate,e.carton,e.butterDish,e.salt,e.pepper,e.spatula,e.fridge,this.kitchen.knob,...this.kitchen.pickables||[]];this.game.crack&&n.unshift(this.game.crack.group);let s=this.ray.intersectObjects(n,!0);for(let r of s)if(r.object.userData.interact&&r.object.visible!==!1&&Bv(r.object))return{kind:r.object.userData.interact,object:r.object,point:r.point};return null}planePoint(t,e){this.setRay(t),Nf.set(new R(0,1,0),-e);let n=new R;return this.ray.ray.intersectPlane(Nf,n)?n:null}track(t){let e=performance.now();for(this.samples.push({x:t.clientX,y:t.clientY,t:e});this.samples.length>2&&e-this.samples[0].t>90;)this.samples.shift()}velocity(){let t=this.samples;if(t.length<2)return{x:0,y:0};let e=t[0],n=t[t.length-1],s=Math.max(.008,(n.t-e.t)/1e3);return{x:(n.x-e.x)/s,y:(n.y-e.y)/s}}onDown(t){if(ft.init(),ft.resume(),this.game.busy)return;if(this.drag||this.pending){t.stopImmediatePropagation();return}if(this.orbiting)return;let e=this.pick(t);e&&(t.stopImmediatePropagation(),t.preventDefault(),this.samples=[],this.track(t),this.begin(e,t))}begin(t,e){let n=this.game,s=this.props,r={id:e.pointerId,kind:t.kind,x0:e.clientX,y0:e.clientY,moved:!1,t0:performance.now(),last:performance.now()};switch(t.kind){case"fridgeItem":this.trayDown(t.object.userData.kind,e);return;case"pet":{let o=t.object;for(;o&&!o.userData.onTap;)o=o.parent;o&&o.userData.onTap();return}case"knob":r.heat0=n.heat;break;case"crackEgg":n.crack.stage==="hover"&&n.crackTap(),r.sep0=n.crack.sep,r.lastSep=n.crack.sep;break;case"panFloor":{let o="stir",a=n.panAnchor.worldToLocal(t.point.clone()),l=n._foodNear(a.x,a.z,.75),c=n._ingNear(a.x,a.z);return l&&!l.f.scrambled&&(o="lift"),c&&c.ing.kind!=="rice"&&(o="lift"),this.beginSpatula(e,o,r)}case"spatula":return this.beginSpatula(e,"free",r);case"salt":case"pepper":return this.beginShaker(t.kind,e,r);case"cartonEgg":return this.beginHeld("egg",e,r,t.object);case"butterBlock":return this.beginHeld("butter",e,r);case"panHandle":case"panRim":return this.beginMove(s.pan,"pan",e,r,t.point);case"plate":return this.beginMove(s.plate,"plate",e,r,t.point);case"carton":return this.beginMove(s.carton,"carton",e,r,t.point);case"butterDish":return this.beginMove(s.butterDish,"butterDish",e,r,t.point);default:return}this.drag=r}beginSpatula(t,e,n){n.kind="spatula",n.mode=e,this.game.spatulaStart(e),ft.pick(),this.drag=n,this.moveSpatula(t,.016,!0)}beginShaker(t,e,n){n.kind="shaker",n.type=t,this.drag=n,ft.pick()}beginHeld(t,e,n,s=null){n.kind="held",n.type=t;let r=t.startsWith("ing:");r&&(n.ing=new Mr(t.slice(4),{buttered:this.game.butter.amount>0}));let o=r?n.ing.group:t==="egg"?Na(this.game.mats,s?s.userData.brown:Math.random()<.3):xr(this.game.mats);if(o.castShadow=!0,r){o.scale.setScalar(.75);let a=this.planePoint(e,1.1);a&&o.position.copy(a)}n.brown=t==="egg"&&o.material===this.game.mats.eggShellBrown,s?(s.visible=!1,n.cartonEgg=s,s.getWorldPosition(o.position)):t==="butter"?this.props.butterDish.getWorldPosition(o.position).setY(.4):r||this.props.carton.getWorldPosition(o.position).setY(.6),this.game.scene.add(o),n.mesh=o,this.drag=n,ft.pick(),this.moveHeld(e,1)}beginMove(t,e,n,s,r){s.kind="move",s.obj=t,s.name=e,s.planeY=t.position.y+.5;let o=this.planePoint(n,s.planeY)||r;s.offset=new R(t.position.x-o.x,0,t.position.z-o.z),this.drag=s,ft.pick()}trayDown(t,e){ft.init(),ft.resume(),!(this.game.busy||this.drag)&&(this.pending={tool:t,id:e.pointerId,x0:e.clientX,y0:e.clientY},this.samples=[],this.track(e))}trayPromote(t){let{tool:e}=this.pending;if(this.pending=null,e==="flip"||e==="toss")return this.trayTap(e);let n={id:t.pointerId,x0:t.clientX,y0:t.clientY,moved:!0,t0:performance.now(),last:performance.now(),fromTray:!0};if(e==="butter")this.beginHeld("butter",t,n);else if(e==="egg"){let s=this.props.carton.userData.eggs.filter(r=>r.visible);this.beginHeld("egg",t,n,s[s.length-1]||null)}else e==="spatula"?this.beginSpatula(t,"free",n):de[e]?this.beginHeld("ing:"+e,t,n):(e==="salt"||e==="pepper")&&(this.beginShaker(e,t,n),n.moved=!0,this.moveShaker(t,.016))}trayTap(t){let e=this.game;t==="butter"?e.autoButter():t==="egg"?this.autoEgg():t==="spatula"?e.toast("Drag the spatula into the pan \u2014 touch the egg to lift it"):de[t]?e.autoIngredient(t):t==="salt"||t==="pepper"?e.autoSeason(t):t==="toss"?e.toss():t==="flip"&&e.autoFlip()}autoEgg(){let t=this.game;if(!t.canStartEgg())return;let e=this.props.carton.userData.eggs.filter(a=>a.visible),n=e[e.length-1],s=Na(t.mats,n?n.userData.brown:!1);(n||this.props.carton).getWorldPosition(s.position),n&&(n.visible=!1,this.restoreCartonEgg(n)),t.scene.add(s);let r=s.position.clone();t.panAnchor.getWorldPosition(Fi);let o=Fi.clone().setY(Fi.y+1.05);ft.pick(),t.anim(.55,a=>{let l=1-Math.pow(1-a,3);s.position.lerpVectors(r,o,l),s.position.y+=Math.sin(Math.PI*a)*1.2,s.rotation.z=a*6.28},()=>{t.scene.remove(s),t.beginCrack(n?n.userData.brown:!1)})}restoreCartonEgg(t){setTimeout(()=>{t.visible=!0,t.scale.setScalar(.01),this.game.anim(.35,e=>t.scale.setScalar(Math.max(.01,1+Math.sin(e*Math.PI)*.2-(1-e)*.99)),()=>t.scale.setScalar(1))},1200)}onMove(t){if(this.pending&&t.pointerId===this.pending.id){this.track(t),Math.hypot(t.clientX-this.pending.x0,t.clientY-this.pending.y0)>14&&this.trayPromote(t);return}let e=this.drag;if(!e||t.pointerId!==e.id)return;t.preventDefault(),this.track(t);let n=performance.now(),s=Math.min(.05,(n-(e.last||n))/1e3)||.016;e.last=n,!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)>8&&(e.moved=!0);let r=this.game;switch(e.kind){case"knob":r.setHeat(e.heat0+(t.clientX-e.x0-(t.clientY-e.y0))/22);break;case"crackEgg":{if(!r.crack){this.drag=null;return}r.crack.stage==="hover"&&r.crackTap();let o=e.sep0+Math.abs(t.clientX-e.x0)/170+Math.max(0,-(t.clientY-e.y0))/400,a=Math.abs(o-e.lastSep)/s;e.lastSep=o,r.pullApart(o,a),r.crack||(this.drag=null);break}case"spatula":this.moveSpatula(t,s);break;case"shaker":e.moved&&this.moveShaker(t,s);break;case"held":this.moveHeld(t,s);break;case"move":this.moveProp(t,s);break}}moveSpatula(t,e,n=!1){let s=this.game,o=this.props.pan.position.y+en.floorY,a=this.planePoint(t,o);a&&(gr(a),n&&(this.props.spatula.position.x=a.x,this.props.spatula.position.z=a.z),s.spatulaMove(a.x,a.z,this.velocity(),e))}moveShaker(t,e){let n=this.planePoint(t,1.55);n&&(gr(n),this.game.shakerMove(this.drag.type,n.x,n.z,t.clientY,e))}moveHeld(t,e){let n=this.drag,s=this.planePoint(t,1.1);if(!s)return;gr(s),n.target=s.clone();let r=n.mesh,o=Math.min(1,e*20);r.position.x+=(s.x-r.position.x)*o,r.position.z+=(s.z-r.position.z)*o,r.position.y+=(s.y-r.position.y)*o;let a=this.velocity();r.rotation.z=Math.max(-.6,Math.min(.6,-a.x/2500)),r.rotation.x=Math.max(-.6,Math.min(.6,a.y/2500));let l=this.props.pan;Math.hypot(r.position.x-l.position.x,r.position.z-l.position.z)<en.rimR*.6&&(r.position.x+=(l.position.x-r.position.x)*.15,r.position.z+=(l.position.z-r.position.z)*.15)}moveProp(t,e){let n=this.drag,s=this.planePoint(t,n.planeY);if(!s)return;let r=n.obj,o=s.x+n.offset.x,a=s.z+n.offset.z;Fi.set(o,0,a),gr(Fi),n.target=Fi.clone();let l=Math.min(1,e*22);r.position.x+=(Fi.x-r.position.x)*l,r.position.z+=(Fi.z-r.position.z)*l,r.position.y+=(this.game.restY(r,r.position.x,r.position.z)+.45-r.position.y)*l;let c=this.velocity();r.rotation.z=Math.max(-.15,Math.min(.15,-c.x/9e3)),r.rotation.x=Math.max(-.15,Math.min(.15,c.y/9e3))}onUp(t,e=!1){if(this.pending&&t.pointerId===this.pending.id){let o=this.pending.tool;this.pending=null,e||this.trayTap(o);return}let n=this.drag;if(!n||t.pointerId!==n.id)return;this.drag=null;let s=this.game,r=this.props.pan;switch(n.kind){case"spatula":{let o=this.velocity(),a=o.y<-650&&Math.abs(o.y)>1.2*Math.abs(o.x);s.carryFood&&a?s.flipFood(s.carryFood,-o.y):s.carry&&a&&s.flipIng(-o.y),s.spatulaRelease();break}case"shaker":n.moved?s.shakerEnd(n.type):s.autoSeason(n.type);break;case"held":{let o=n.mesh;n.target&&(o.position.x=n.target.x,o.position.z=n.target.z);let a=Math.hypot(o.position.x-r.position.x,o.position.z-r.position.z);if(n.cartonEgg&&this.restoreCartonEgg(n.cartonEgg),!n.moved&&!n.fromTray){s.scene.remove(o),n.type==="egg"?(n.cartonEgg&&(n.cartonEgg.visible=!1),this.autoEgg()):s.autoButter();break}if(n.ing){let l=this.props.plate,c=Math.hypot(o.position.x-l.position.x,o.position.z-l.position.z),h=n.ing.kind,u=a<en.rimR+.35&&a<=c?"pan":c<pi.r+.35?"plate":null;if(u&&s.canAddIng(h,u))s.scene.remove(o),s.placeIngredient(n.ing,u,o.position.x-r.position.x,o.position.z-r.position.z);else{u&&s.toast(`${de[h].name} is already there`);let d=n.ing;s.anim(.35,f=>o.scale.setScalar(Math.max(.01,.75*(1-f))),()=>{s.scene.remove(o),d.dispose()})}break}if(n.type==="egg"&&a<en.rimR+.8&&s.canStartEgg())s.scene.remove(o),s.beginCrack(n.brown);else if(n.type==="butter"&&a<en.rimR+.5)s.scene.remove(o),s.addButter(o.position.x-r.position.x,o.position.z-r.position.z);else{let l=n.type==="egg"?this.props.carton.position:this.props.butterDish.position,c=o.position.clone();s.anim(.4,h=>{o.position.lerpVectors(c,Fi.set(l.x,.5,l.z),h),o.scale.setScalar(1-h*.9)},()=>s.scene.remove(o))}break}case"move":n.target&&(n.obj.position.x=n.target.x,n.obj.position.z=n.target.z),this.dropProp(n.obj,n.name);break}}dropProp(t,e){let n=this.game,s=this.props,r=new R(t.position.x,0,t.position.z);if(e==="pan"&&Math.hypot(r.x-tn.x,r.z-tn.z)<en.snap)r.set(tn.x,0,tn.z);else for(let o=0;o<8;o++){for(let[a,l]of Object.entries(s)){if(l===t||!jh[a])continue;let c=r.x-l.position.x,h=r.z-l.position.z,u=Math.hypot(c,h)||.001,d=(jh[e]+jh[a])*.85;u<d&&(r.x+=c/u*(d-u),r.z+=h/u*(d-u))}gr(r)}n.flyTo(t,r.x,r.z,.25,.05,()=>{t.rotation.x=0,t.rotation.z=0,ft.thud()})}onHover(t){if(t.pointerType!=="mouse"||this.drag||this.game.busy)return;let e=performance.now();if(e-(this._hoverT||0)<60)return;this._hoverT=e;let n=this.pick(t);this.canvas.style.cursor=n?n.kind==="crackEgg"||n.kind==="salt"||n.kind==="pepper"?"pointer":"grab":"default"}};function Bv(i){for(;i;){if(i.visible===!1)return!1;i=i.parent}return!0}var Bf=[["plum","\u{1F319} Midnight Plum"],["morning","\u2600\uFE0F Morning"],["golden","\u{1F307} Golden Hour"],["night","\u2728 Cozy Night"]],Hf=[["clear","\u2601\uFE0F Clear"],["rain","\u{1F327}\uFE0F Rain"],["snow","\u2744\uFE0F Snow"]],Qh={wall:"#ffe3d1",floor:"#e9c9b2",cabinet:"#9fd8c8",cabinetDark:"#86c6b4",counterEdge:"#f4e6d8",windowFrame:"#fffaf4",shade:"#ffb59a",tiles:{tc:[214,240,229],grout:"#cfe9df"},terrazzo:{base:"#fbf3ea",chips:["#f6b8c4","#9fd8c8","#ffd98a","#b9c8f0","#e9cdb8","#ffffff"]}},Hv={wall:"#4a3366",floor:"#2e2040",cabinet:"#7a5aa8",cabinetDark:"#5b3f86",counterEdge:"#dccdf0",windowFrame:"#c9b6e4",shade:"#ff9fd0",tiles:{tc:[206,186,236],grout:"#9d86c4"},terrazzo:{base:"#f3ecfa",chips:["#ff8fc8","#b48cff","#6b4c9a","#2a1b3d","#ffd6ec","#ffffff"]}},Of={morning:{bg:"#ffe6d5",fogNear:32,hemi:["#fff6ec","#f1c9b4",.85],key:["#fff0dc",2.3],fill:["#cfe8ff",.55],lamp:["#ffd9a8",28],rim:["#ffd0e0",.35],exposure:1.05,env:.55,sky:"day",fairy:0,candle:0,bloom:.25,threshold:1.1,vignette:.18,grade:"#fff8f0",mats:Qh},golden:{bg:"#ffd2b0",fogNear:30,hemi:["#ffe2c4","#d99a7a",.72],key:["#ffbf7a",2.5],fill:["#ffd9b8",.4],lamp:["#ffcf98",30],rim:["#ff9f8a",.6],exposure:1.02,env:.5,sky:"sunset",fairy:.45,candle:.6,bloom:.45,threshold:1,vignette:.28,grade:"#fff0dc",mats:Qh},night:{bg:"#1c2036",fogNear:26,hemi:["#8a94c8","#3a2c3a",.5],key:["#a9b8ff",.75],fill:["#7f9cff",.3],lamp:["#ffc98a",46],rim:["#ffb38a",.35],exposure:1.12,env:.32,sky:"night",fairy:1,candle:1,bloom:.75,threshold:.95,vignette:.4,grade:"#ffeedd",mats:Qh},plum:{bg:"#2a1b3d",fogNear:26,hemi:["#d2bdf5","#4a2d5a",.75],key:["#f2e4ff",1.75],fill:["#a07cff",.45],lamp:["#ffc6a0",36],rim:["#ff8fc8",.7],exposure:1.1,env:.5,sky:"plum",fairy:1,candle:1,bloom:.7,threshold:.95,vignette:.38,grade:"#f6eaff",mats:Hv}},ol=class{constructor({scene:t,renderer:e,lights:n,mats:s,kitchen:r,decor:o,fx:a}){Object.assign(this,{scene:t,renderer:e,lights:n,mats:s,kitchen:r,decor:o,fx:a}),this.cur=null,this.from=null,this.to=null,this.t=1,this.texCache={},this.post=null,this.weather="clear",this.wT=0}_tex(t){let e=JSON.stringify(t.mats.tiles)+t.mats.terrazzo.base;return this.texCache[e]||(this.texCache[e]={tiles:Yd(t.mats.tiles.tc,t.mats.tiles.grout),terrazzo:$d(t.mats.terrazzo.base,t.mats.terrazzo.chips)}),this.texCache[e]}_sky(t){var e;return(e=this.skyCache||(this.skyCache={}))[t]||(e[t]=zv(t))}_snap(t){let e=n=>new St(n);return{bg:e(t.bg),fogNear:t.fogNear,hemiS:e(t.hemi[0]),hemiG:e(t.hemi[1]),hemiI:t.hemi[2],keyC:e(t.key[0]),keyI:t.key[1],fillC:e(t.fill[0]),fillI:t.fill[1],lampC:e(t.lamp[0]),lampI:t.lamp[1],rimC:e(t.rim[0]),rimI:t.rim[1],exposure:t.exposure,env:t.env,fairy:t.fairy,candle:t.candle,bloom:t.bloom,threshold:t.threshold,vignette:t.vignette,grade:e(t.grade),wall:e(t.mats.wall),floor:e(t.mats.floor),cabinet:e(t.mats.cabinet),cabinetDark:e(t.mats.cabinetDark),counterEdge:e(t.mats.counterEdge),windowFrame:e(t.mats.windowFrame),shade:e(t.mats.shade)}}set(t,e=!1){let n=Of[t]||Of.plum;if(this.name=t,this.preset=n,this.to=this._snap(n),!this.cur||e){this.cur=this._snap(n),this.from=null,this.t=1,this._swapTex(n),this._apply();return}this.from=this._clone(this.cur),this.t=0,this._swapped=!1}_clone(t){let e={};for(let[n,s]of Object.entries(t))e[n]=s&&s.isColor?s.clone():s;return e}_swapTex(t){let e=this._tex(t);this.mats.tile.map=e.tiles,this.mats.counter.map=e.terrazzo,this.mats.tile.needsUpdate=this.mats.counter.needsUpdate=!0,this.kitchen.sky&&(this.kitchen.sky.material.map=this._sky(t.sky),this.kitchen.sky.material.needsUpdate=!0),this._lastPreset=t}setWeather(t){this.weather=t}update(t){if(this.t<1&&this.from){this.t=Math.min(1,this.t+t/2);let e=this.t*this.t*(3-2*this.t);for(let[n,s]of Object.entries(this.to)){let r=this.from[n];s.isColor?this.cur[n].copy(r).lerp(s,e):this.cur[n]=r+(s-r)*e}!this._swapped&&this.t>.5&&(this._swapped=!0,this._swapTex(this.preset)),this._apply()}if(this.weather!=="clear"&&this.fx){this.wT-=t;let e=this.weather==="rain"?.012:.05;for(;this.wT<0;){this.wT+=e;let n=-1.2+(Math.random()-.5)*5;this.weather==="rain"?this.fx.emit("rain",{x:n,y:7.3,z:-3.7},{spread:0,floorY:4,vel:{x:-.6,y:-6,z:0}}):this.fx.emit("snow",{x:n,y:7.3,z:-3.7},{spread:0,floorY:4,vel:{x:0,y:-.5,z:0}})}}}_apply(){let t=this.cur,e=this.lights,n=this.mats,s=this.scene;s.background.copy(t.bg),s.fog.color.copy(t.bg),s.fog.near=t.fogNear,s.fog.far=t.fogNear+38,e.hemi.color.copy(t.hemiS),e.hemi.groundColor.copy(t.hemiG),e.hemi.intensity=t.hemiI,e.key.color.copy(t.keyC),e.key.intensity=t.keyI,e.fill.color.copy(t.fillC),e.fill.intensity=t.fillI,e.lamp.color.copy(t.lampC),e.lamp.intensity=t.lampI,e.rim.color.copy(t.rimC),e.rim.intensity=t.rimI,this.renderer.toneMappingExposure=t.exposure,s.environmentIntensity=t.env;for(let r of["wall","floor","cabinet","cabinetDark","counterEdge","windowFrame"])n[r].color.copy(t[r]);this.kitchen.shadeMat&&this.kitchen.shadeMat.color.copy(t.shade),this.decor&&(this.decor.setFairy(t.fairy),this.decor.setCandle(t.candle)),this.post&&this.post.set({bloom:t.bloom,threshold:t.threshold,vignette:t.vignette,grade:t.grade,exposure:t.exposure})}};function zv(i){let n=document.createElement("canvas");n.width=512,n.height=320;let s=n.getContext("2d"),r={day:["#9fd6ff","#d9f0ff","#ffe9d6"],sunset:["#6f78c9","#ff9e7a","#ffd59a"],night:["#0e1430","#1f2a55","#3a3a6a"],plum:["#1a1030","#3d2463","#8a4f9e"]}[i],o=s.createLinearGradient(0,0,0,320);o.addColorStop(0,r[0]),o.addColorStop(.65,r[1]),o.addColorStop(1,r[2]),s.fillStyle=o,s.fillRect(0,0,512,320);let a=i==="night"||i==="plum";if(a){for(let g=0;g<140;g++){let y=Math.random()*512,m=Math.random()*320*.75,p=Math.random()*1.4+.3;s.fillStyle=`rgba(255,${i==="plum"?235:250},255,${.4+Math.random()*.6})`,s.beginPath(),s.arc(y,m,p,0,7),s.fill()}s.fillStyle="#fff6ff";for(let[g,y,m]of[[90,60,9],[400,40,7],[300,110,6]])s.beginPath(),s.moveTo(g,y-m),s.quadraticCurveTo(g,y,g+m,y),s.quadraticCurveTo(g,y,g,y+m),s.quadraticCurveTo(g,y,g-m,y),s.quadraticCurveTo(g,y,g,y-m),s.fill();let h=360,u=105,d=46,f=s.createRadialGradient(h,u,d*.6,h,u,d*2.6);if(f.addColorStop(0,i==="plum"?"rgba(255,200,240,.45)":"rgba(255,245,210,.4)"),f.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=f,s.fillRect(0,0,512,320),s.fillStyle=i==="plum"?"#fff0fb":"#fff8e2",s.beginPath(),s.arc(h,u,d,0,7),s.fill(),s.globalCompositeOperation="destination-out",s.beginPath(),s.arc(h+22,u-12,d*.88,0,7),s.fill(),s.globalCompositeOperation="source-over",s.globalCompositeOperation="destination-over",s.fillStyle=o,s.fillRect(0,0,512,320),s.globalCompositeOperation="source-over",i==="plum"){s.fillStyle="#1a1030";for(let[g,y,m]of[[150,80,1],[190,60,.7],[470,150,.8]])s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g-8*m,y-8*m,g-16*m,y-2*m),s.quadraticCurveTo(g-10*m,y,g-8*m,y+4*m),s.quadraticCurveTo(g-4*m,y+1*m,g,y+4*m),s.quadraticCurveTo(g+4*m,y+1*m,g+8*m,y+4*m),s.quadraticCurveTo(g+10*m,y,g+16*m,y-2*m),s.quadraticCurveTo(g+8*m,y-8*m,g,y),s.fill()}}else{if(i==="sunset"){let h=s.createRadialGradient(150,250,10,150,250,120);h.addColorStop(0,"rgba(255,240,180,1)"),h.addColorStop(.25,"rgba(255,200,120,.8)"),h.addColorStop(1,"rgba(255,160,120,0)"),s.fillStyle=h,s.fillRect(0,0,512,320)}s.fillStyle=i==="sunset"?"rgba(255,214,200,.9)":"rgba(255,255,255,.95)";for(let[h,u,d]of[[120,100,2],[360,70,1.6],[280,190,1.2]])for(let[f,g,y]of[[0,0,18],[18,-6,14],[-16,3,12],[32,4,11]])s.beginPath(),s.arc(h+f*d,u+g*d,y*d,0,7),s.fill()}let l={day:["#b9e3b0","#9fd39a"],sunset:["#c98a8a","#a86f7f"],night:["#26304f","#1a2240"],plum:["#3b2358","#291842"]}[i];s.fillStyle=l[0],s.beginPath(),s.moveTo(0,320);for(let h=0;h<=512;h+=8)s.lineTo(h,320*.8+Math.sin(h*.015)*20);s.lineTo(512,320),s.fill(),s.fillStyle=l[1],s.beginPath(),s.moveTo(0,320);for(let h=0;h<=512;h+=8)s.lineTo(h,320*.89+Math.sin(h*.025+2)*14);if(s.lineTo(512,320),s.fill(),a)for(let[h,u]of[[80,320*.86],[330,320*.9],[450,320*.84]])s.fillStyle="#ffd27a",s.fillRect(h,u,6,5);let c=new Sn(n);return c.colorSpace=Pe,c}var Cn=i=>document.getElementById(i),br=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),zf=Object.fromEntries(Fh),Gf=i=>`<span class="diff" aria-label="Difficulty ${i} of 3">${[1,2,3].map(t=>`<i class="${t<=i?"on":""}"></i>`).join("")}</span>`,Gv=["","Easy","Medium","Chef"],al=class{constructor({onCook:t,onClose:e,progress:n=()=>({}),daily:s=()=>null}){this.onCook=t,this.onClose=e,this.progress=n,this.daily=s,this.cat="all",this.sel="sunny",this.canCook=!0,Cn("book-close").addEventListener("click",()=>this.close()),Cn("screen-book").addEventListener("click",r=>{r.target.id==="screen-book"&&this.close()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&this.isOpen&&this.close()}),Cn("book-tabs").addEventListener("click",r=>{let o=r.target.closest("[data-cat]");o&&(this.cat=o.dataset.cat,this.render())}),Cn("book-list").addEventListener("click",r=>{let o=r.target.closest("[data-id]");o&&(this.sel=o.dataset.id,this.render(),Cn("book-page").scrollTop=0)}),Cn("book-page").addEventListener("click",r=>{if(r.target.closest("#bp-cook")){let o=this.sel;this.close(),this.onCook(o)}})}get isOpen(){return!Cn("screen-book").classList.contains("hidden")}open(t,{canCook:e=!0}={}){t&&gi(t)&&(this.sel=t,this.cat="all"),this.canCook=e,Cn("screen-book").classList.remove("hidden"),this.render(),Cn("book-page").scrollTop=0}close(){this.isOpen&&(Cn("screen-book").classList.add("hidden"),this.onClose&&this.onClose())}render(){Cn("book-tabs").innerHTML=Fh.map(([n,s])=>`<button class="book-tab${n===this.cat?" on":""}" data-cat="${n}">${s}<small>${n==="all"?Qn.length:Qn.filter(r=>r.cat===n).length}</small></button>`).join("");let t=Qn.filter(n=>this.cat==="all"||n.cat===this.cat);t.some(n=>n.id===this.sel)||(this.sel=t[0].id),Cn("book-list").innerHTML=t.map(n=>`
      <li class="book-item${n.id===this.sel?" on":""}" data-id="${n.id}" role="button" tabindex="0">
        <span class="bi-ico">${n.icon}</span>
        <span class="bi-txt"><b>${br(n.title)}${n.id===this.daily()?' <em class="bi-special">\u2728 special</em>':""}</b><small>${zf[n.cat]} \xB7 ${n.eggs} egg${n.eggs>1?"s":""} \xB7 ${n.time}${this._best(n.id)?" \xB7 "+"\u2B50".repeat(this._best(n.id)):""}</small></span>${this._best(n.id)>=3?'<span class="bi-sticker" title="Mastered">\u{1F3C5}</span>':""}
        ${Gf(n.diff)}
      </li>`).join("");let e=Cn("book-list").querySelector(".on");e&&e.scrollIntoView({block:"nearest",inline:"nearest"}),Cn("book-page").innerHTML=this.page(gi(this.sel))}_best(t){let e=this.progress()[t];return e?e.best:0}page(t){let e=this.progress()[t.id]||{best:0,count:0},n=[];t.recipe!=="friedrice"&&n.push(["\u{1F9C8}","Butter"]),n.push(["\u{1F95A}",`${t.eggs} egg${t.eggs>1?"s":""}`]),t.recipe==="friedrice"&&n.push(["\u{1F35A}","Rice"]);for(let r of t.extras)n.push([de[r.kind].icon,`${de[r.kind].name} <em>${de[r.kind].levels[r.level].label}</em>`]);for(let r of t.fill)n.push([de[r].icon,`${de[r].name} <em>${t.recipe==="omelette"?"inside":t.recipe==="scrambled"?"stirred in":"on top"}</em>`]);t.salt&&n.push(["\u{1F9C2}","Salt"]),t.pepper&&n.push(["\u26AB","Pepper"]);let s=t.levels.map(r=>eo[t.recipe][r].label);return`
      <div class="bp-hero">
        <div class="bp-icon">${t.icon}${e.best>=3?'<span class="bp-sticker">\u{1F3C5}<small>Mastered</small></span>':""}</div>
        <div class="bp-head">
          <div class="bp-cat">${zf[t.cat]}</div>
          <h3>${br(t.title)}</h3>
          <p class="bp-blurb">${br(t.blurb)}</p>
        </div>
      </div>
      <div class="bp-facts">
        <div class="fact"><span>Difficulty</span><b>${Gf(t.diff)} ${Gv[t.diff]}</b></div>
        <div class="fact"><span>Time</span><b>\u23F1 ${t.time}</b></div>
        <div class="fact"><span>Eggs</span><b>${"\u{1F95A}".repeat(t.eggs)}</b></div>
        <div class="fact"><span>Ordered as</span><b>${s.join(" \xB7 ")}</b></div>
        <div class="fact"><span>Your best</span><b>${e.count?"\u2B50".repeat(e.best)||"\u2014":"Not cooked yet"}${e.count?` <small>\xB7 cooked ${e.count}\xD7</small>`:""}</b></div>
      </div>
      <h4>You\u2019ll need</h4>
      <div class="bp-needs">${n.map(([r,o])=>`<span class="need"><i>${r}</i>${o}</span>`).join("")}</div>
      <h4>How to make it</h4>
      <ol class="bp-steps">${t.steps.map(([r,o],a)=>`<li><span class="num">${a+1}</span><div><b>${br(r)}</b><p>${br(o)}</p></div></li>`).join("")}</ol>
      <div class="bp-tip"><span>\u{1F4A1}</span><div><b>Chef\u2019s tip</b><p>${br(t.tip)}</p></div></div>
      ${this.canCook?'<button id="bp-cook" class="big-btn primary bp-cook">\u{1F373} Practice this in Free Cook</button>':""}
    `}};var qf=[["pan","\u{1F373} Pans"],["plate","\u{1F37D}\uFE0F Plates"],["spat","\u{1F944} Spatulas"],["hat","\u{1F987} Noxie outfits"],["ring","\u{1F497} Egg rings"],["cushion","\u{1F6CB}\uFE0F Cozy extras"]],tu=[{id:"pan-mint",cat:"pan",name:"Mint enamel pan",icon:"\u{1FA75}",price:0,desc:"The trusty original."},{id:"pan-plum",cat:"pan",name:"Midnight plum pan",icon:"\u{1F49C}",price:120,desc:"Purple enamel with a pink skull-bow charm."},{id:"pan-pastel",cat:"pan",name:"Strawberry milk pan",icon:"\u{1FA77}",price:80,desc:"Soft pink and very sweet."},{id:"pan-copper",cat:"pan",name:"Copper pan",icon:"\u{1F9E1}",price:90,desc:"Shiny, warm and fancy."},{id:"pan-iron",cat:"pan",name:"Cast-iron pan",icon:"\u{1F5A4}",price:60,desc:"Heavy, dark and classic."},{id:"plate-pink",cat:"plate",name:"Pink-band plate",icon:"\u{1F37D}\uFE0F",price:0,desc:"Cream china with pink rings."},{id:"plate-lavender",cat:"plate",name:"Lavender plate",icon:"\u{1F490}",price:40,desc:"Lilac rings on cream china."},{id:"plate-night",cat:"plate",name:"Starry night plate",icon:"\u{1F30C}",price:60,desc:"Deep plum glaze with a pink rim."},{id:"plate-gold",cat:"plate",name:"Golden rim plate",icon:"\u2728",price:70,desc:"For very important eggs."},{id:"spat-mint",cat:"spat",name:"Mint spatula",icon:"\u{1F944}",price:0,desc:"Does the job."},{id:"spat-pink",cat:"spat",name:"Bubblegum spatula",icon:"\u{1F36C}",price:30,desc:"Pink and cheerful."},{id:"spat-bat",cat:"spat",name:"Bat-wing spatula",icon:"\u{1F987}",price:50,desc:"Purple, with tiny bat wings."},{id:"hat-none",cat:"hat",name:"Just Noxie",icon:"\u{1F408}\u200D\u2B1B",price:0,desc:"Cute as is."},{id:"hat-chef",cat:"hat",name:"Chef hat",icon:"\u{1F468}\u200D\u{1F373}",price:40,desc:"Noxie, head chef."},{id:"hat-witch",cat:"hat",name:"Witch hat",icon:"\u{1F9D9}",price:60,desc:"A pointy plum hat with a pink band."},{id:"hat-crown",cat:"hat",name:"Tiny crown",icon:"\u{1F451}",price:80,desc:"Royalty of the kitchen."},{id:"ring-none",cat:"ring",name:"Round eggs",icon:"\u{1F373}",price:0,desc:"Eggs spread naturally."},{id:"ring-heart",cat:"ring",name:"Heart egg ring",icon:"\u{1F497}",price:100,desc:"Fried eggs come out heart-shaped."},{id:"cushion-none",cat:"cushion",name:"No cushion",icon:"\u25AB\uFE0F",price:0,desc:"Noxie sits on the counter."},{id:"cushion-pink",cat:"cushion",name:"Noxie's cushion",icon:"\u{1F6CF}\uFE0F",price:40,desc:"A puffy pink cushion for naps."}],ll={pan:"pan-mint",plate:"plate-pink",spat:"spat-mint",hat:"hat-none",ring:"ring-none",cushion:"cushion-none"},Yf=i=>tu.find(t=>t.id===i),Vf={"pan-mint":{color:"#86cfc6",metal:0,rough:.32,handle:null},"pan-plum":{color:"#5b3f86",metal:0,rough:.28,handle:"#ff8fc8",charm:!0},"pan-pastel":{color:"#f7b6cf",metal:0,rough:.3,handle:"#fff4e6"},"pan-copper":{color:"#d08a5a",metal:1,rough:.28,handle:null},"pan-iron":{color:"#2c2c33",metal:.5,rough:.6,handle:"#3a2a22"}},Wf={"plate-pink":{body:null,band:"#f6b8c4"},"plate-lavender":{body:null,band:"#b48cff"},"plate-night":{body:"#3d2463",band:"#ff8fc8"},"plate-gold":{body:null,band:"#e8c27a",metal:!0}},Xf={"spat-mint":"#7fd1b9","spat-pink":"#ff8fc8","spat-bat":"#6b4c9a"};function eu(i,t){var d,f;let e={...ll,...t},{mats:n,props:s,decor:r}=i,o=Vf[e.pan]||Vf["pan-mint"];n.panOuter.color.set(o.color),n.panOuter.metalness=o.metal,n.panOuter.roughness=o.rough;let a=s.pan;a.userData.grip||a.traverse(g=>{g.isMesh&&g.material===n.wood&&(a.userData.grip=g)});let l=a.userData.grip;l&&((d=l.userData).woodMat||(d.woodMat=l.material),l.material=o.handle?(f=a.userData).handleMat||(f.handleMat=new qt({roughness:.3,clearcoat:1})):l.userData.woodMat,o.handle&&l.material.color.set(o.handle),a.userData.charm||(a.userData.charm=Vv(l.parent)),a.userData.charm.visible=!!o.charm);let c=Wf[e.plate]||Wf["plate-pink"],h=s.plate;h.userData.styled||(h.userData.styled=!0,h.userData.bandMat=new qt({roughness:.25,clearcoat:1}),h.userData.bodyMat=new qt({roughness:.2,clearcoat:1,clearcoatRoughness:.08}),h.children.forEach(g=>{g.isMesh&&g.geometry.type==="TorusGeometry"&&(g.material=h.userData.bandMat),g.isMesh&&g.geometry.type==="LatheGeometry"&&(h.userData.body=g)})),h.userData.bandMat.color.set(c.band),h.userData.bandMat.metalness=c.metal?1:0,h.userData.bandMat.roughness=c.metal?.25:.3,h.userData.body&&(h.userData.body.material=c.body?h.userData.bodyMat:n.ceramic,c.body&&h.userData.bodyMat.color.set(c.body)),n.spatulaHandle.color.set(Xf[e.spat]||Xf["spat-mint"]);let u=s.spatula;u.userData.wings||(u.userData.wings=Wv(u)),u.userData.wings.visible=e.spat==="spat-bat",r&&(r.setHat(e.hat),r.setCushion(e.cushion==="cushion-pink"))}function Vv(i){let t=new xt;t.position.set(1.25,.33,0),i.add(t);let e=new qt({color:"#fff4e6",roughness:.4,clearcoat:.5}),n=new qt({color:"#ff8fc8",roughness:.35,clearcoat:.8}),s=new ue({color:"#241a2e"}),r=new vt(new Qt(.09,16,12),e);r.castShadow=!0,t.add(r);let o=new vt(new ge(.1,.045,.08),e);o.position.set(0,-.07,0),t.add(o);for(let a of[-1,1]){let l=new vt(new Qt(.024,8,6),s);l.position.set(.075,0,a*.035),t.add(l);let c=new vt(new pn(.045,.08,10),n);c.rotation.x=a*Math.PI/2,c.position.set(-.02,.08,a*.045),t.add(c)}return t.add(Object.assign(new vt(new Qt(.022,8,6),n),{}).translateY(.08).translateX(-.02)),t}function Wv(i){let t=new xt;i.add(t);let e=new Ve;e.moveTo(0,0),e.quadraticCurveTo(.12,.14,.26,.15),e.quadraticCurveTo(.22,.08,.26,.03),e.quadraticCurveTo(.18,.03,.17,-.03),e.quadraticCurveTo(.1,0,.08,-.05),e.quadraticCurveTo(.05,-.01,0,0);let n=new xn(e,8),s=new qt({color:"#6b4c9a",roughness:.4,sheen:.6,sheenColor:new St("#ff8fc8"),side:Ne});for(let r of[-1,1]){let o=new vt(n,s);o.scale.set(r*1.2,1.2,1),o.position.set(r*.07,.62,1.48),o.rotation.set(-.42,0,0),o.castShadow=!0,t.add(o)}return t}function _o(i=new Date){let t=i.getFullYear()*400+i.getMonth()*32+i.getDate();return t=Math.imul(t>>>16^t,73244475),t=Math.imul(t>>>16^t,73244475),t=t>>>16^t,Qn[Math.abs(t)%Qn.length].id}var ut=i=>document.getElementById(i),Zf="cracksizzle.v1",Oi=new R;function Jf(){let i={music:.45,sfx:.8,guide:!0,hints:!0,quality:/iPad/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1?"high":"auto",atmos:"plum",weather:"rain",smooth:"120",radio:0,best:0,tutorialDone:!1,coins:30,owned:[],equip:{},hearts:{},notes:[],dishes:{}};try{return Object.assign(i,JSON.parse(localStorage.getItem(Zf)||"{}"))}catch{return i}}function yi(i){try{localStorage.setItem(Zf,JSON.stringify(i))}catch{}}var cl=class{constructor({game:t,interactor:e,settings:n,onResetCamera:s,onQuality:r,onAtmos:o,onWeather:a,perf:l,decor:c,onEquip:h,onPhoto:u}){this.onEquip=h,this.onPhoto=u,this.game=t,this.ix=e,this.s=n,this.onResetCamera=s,this.onQuality=r,this.onAtmos=o,this.onWeather=a,this.perf=l,this.decor=c,this.hintT=0,this.lastHint="",this.screens=["title","pause","settings","dish","results","loading","nogl","shop","regulars"],this.book=new al({onCook:d=>this.practice(d),onClose:()=>this._afterBook(),progress:()=>this.s.dishes,daily:_o}),this._bindMenus(),this._bindDial(),this._bindTray(),this._bindGame(),this._applySettings(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause(!0)}),["gesturestart","gesturechange"].forEach(d=>document.addEventListener(d,f=>f.preventDefault())),document.addEventListener("dblclick",d=>d.preventDefault())}show(t){for(let e of this.screens)ut("screen-"+e).classList.toggle("hidden",e!==t)}hideScreens(){for(let t of this.screens)ut("screen-"+t).classList.add("hidden")}_bindMenus(){let t=this.game,e=(n,s)=>ut(n).addEventListener("click",()=>{ft.init(),ft.resume(),ft.pop(),s()});e("btn-play",()=>this.startMode("orders")),e("btn-free",()=>this.startMode("free")),e("btn-cozy",()=>this.startMode("cozy")),e("btn-shop",()=>this.openShop()),e("btn-res-shop",()=>this.openShop()),e("btn-regulars",()=>this.openRegulars()),e("shop-close",()=>this.show(this._backTo||"title")),e("reg-close",()=>this.show("title")),e("daily",()=>this.practice(_o())),e("btn-photo",()=>this.snapPhoto()),ut("shop-list").addEventListener("click",n=>{let s=n.target.closest("[data-item]");s&&this.shopAction(s.dataset.item)}),e("btn-tutorial",()=>this.startMode("tutorial")),e("btn-recipes",()=>this.openBook()),e("btn-book",()=>this.openBook()),e("btn-order-book",()=>{let n=this.game.order||this.game.freeGoal;this.openBook(n&&n.id)}),e("btn-pause",()=>this.pause()),e("btn-resume",()=>this.resume()),e("btn-restart",()=>this.startMode(t.cozy?"cozy":t.mode==="results"?"orders":t.mode)),e("btn-menu",()=>this.toMenu()),e("btn-sound",()=>{this.pause(!0,!1),this.show("settings"),this._hzTip()}),e("btn-settings-close",()=>{yi(this.s),this.game.mode==="menu"?this.show("title"):this.resume()}),e("btn-camera",()=>this.onResetCamera()),e("btn-next",()=>{this.hideScreens(),this.game.paused=!1,this.game.afterServe()}),e("btn-again",()=>this.startMode("orders")),e("btn-res-free",()=>this.startMode("free")),e("btn-res-menu",()=>this.toMenu()),e("tut-skip",()=>this.finishTutorial()),ut("vol-music").addEventListener("input",n=>{this.s.music=+n.target.value,ft.setVolumes(this.s.music,this.s.sfx)}),ut("vol-sfx").addEventListener("input",n=>{this.s.sfx=+n.target.value,ft.setVolumes(this.s.music,this.s.sfx),ft.pop()}),ut("opt-guide").addEventListener("change",n=>{this.s.guide=n.target.checked}),ut("opt-hints").addEventListener("change",n=>{this.s.hints=n.target.checked}),ut("opt-quality").addEventListener("change",n=>{this.s.quality=n.target.value,this.onQuality(this.s.quality)}),ut("opt-radio").innerHTML=[0,1,2,3].map(n=>`<option value="${n}">${ft.stationName(n)}</option>`).join(""),ut("opt-radio").addEventListener("change",n=>this.setRadio(+n.target.value)),ut("opt-smooth").addEventListener("change",n=>{this.s.smooth=n.target.value,this.onQuality(this.s.quality)}),ut("opt-atmos").innerHTML=Bf.map(([n,s])=>`<option value="${n}">${s}</option>`).join(""),ut("opt-weather").innerHTML=Hf.map(([n,s])=>`<option value="${n}">${s}</option>`).join(""),ut("opt-atmos").addEventListener("change",n=>{this.s.atmos=n.target.value,this.onAtmos&&this.onAtmos(this.s.atmos),this._applyTheme()}),ut("opt-weather").addEventListener("change",n=>{this.s.weather=n.target.value,this.onWeather&&this.onWeather(this.s.weather)})}_applySettings(){ut("vol-music").value=this.s.music,ut("vol-sfx").value=this.s.sfx,ut("opt-guide").checked=this.s.guide,ut("opt-hints").checked=this.s.hints,ut("opt-quality").value=this.s.quality,ut("opt-atmos").value=this.s.atmos,ut("opt-weather").value=this.s.weather,ut("opt-smooth").value=this.s.smooth,ut("opt-radio").value=this.s.radio||0,this._applyTheme(),ft.setVolumes(this.s.music,this.s.sfx),this._updateBest()}setRadio(t){ft.init(),ft.resume();let e=ft.setStation(t);this.s.radio=ft.station,yi(this.s),this.decor&&(this.decor.radio.station=ft.station),ut("opt-radio").value=ft.station,this.toast(e)}_applyTheme(){document.documentElement.dataset.theme=this.s.atmos==="morning"||this.s.atmos==="golden"?"cream":"plum"}_hzTip(){let t=this.perf,e=ut("hz-tip"),n=/iPad/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1;if(!t||!n||t.hz>60){e.classList.add("hidden");return}e.innerHTML="\u{1F49C} Running at 60 fps. On an iPad Pro you can unlock 120 fps: <b>Settings \u203A Apps \u203A Safari \u203A Advanced \u203A Feature Flags</b> and turn off <b>\u201CPrefer Page Rendering Updates near 60fps\u201D</b>, then reload.",e.classList.remove("hidden")}_updateBest(){ut("best-score").textContent=this.s.best?`\u{1F3C6} Best round: ${this.s.best} / 500`:"";let t=gi(_o());ut("daily").innerHTML=`<span class="d-kicker">\u2728 Today\u2019s special</span><span class="d-dish">${t.icon} ${t.title}</span><span class="d-bonus">+\u{1FA99}10 bonus \xB7 tap to cook</span>`,this._updateCoins()}_updateCoins(){let t=this.s.coins|0;ut("coin-val").textContent=t,ut("coin-title").textContent=`\u{1FA99}${t}`,ut("shop-coins").textContent=t}openShop(){this._backTo=this.game.mode==="results"?"results":"title",this.renderShop(),this.show("shop")}renderShop(){let t=this.s,e={...ll,...t.equip};ut("shop-list").innerHTML=qf.map(([n,s])=>`
      <section class="shop-cat"><h3>${s}</h3><div class="shop-grid">${tu.filter(r=>r.cat===n).map(r=>{let o=r.price===0||t.owned.includes(r.id),a=e[n]===r.id,l=t.coins>=r.price,c=a?'<span class="sh-on">\u2713 Using</span>':o?'<span class="sh-use">Use</span>':`<span class="sh-buy${l?"":" poor"}">\u{1FA99} ${r.price}</span>`;return`<button class="shop-item${a?" on":""}${!o&&!l?" locked":""}" data-item="${r.id}"><span class="sh-ico">${r.icon}</span><b>${r.name}</b><small>${r.desc}</small>${c}</button>`}).join("")}</div></section>`).join(""),this._updateCoins()}shopAction(t){let e=Yf(t),n=this.s;if(!e)return;if(e.price===0||n.owned.includes(t))ft.pop();else{if(n.coins<e.price){ft.fail(),this.toast(`Need \u{1FA99}${e.price-n.coins} more in tips`,"bad");return}n.coins-=e.price,n.owned.push(t),ft.chime(),this.toast(`Bought ${e.icon} ${e.name}!`,"good")}n.equip={...ll,...n.equip,[e.cat]:t},yi(n),this.onEquip&&this.onEquip(n.equip),this.renderShop()}openRegulars(){let t=this.s;ut("reg-list").innerHTML=Ha.map(e=>{let n=Math.min(10,t.hearts[e.id]||0),s=gi(e.fav),r=t.notes.includes(e.id)?`<p class="reg-note">\u{1F48C} ${e.note}</p>`:"";return`<li class="reg"><span class="reg-ava">${e.avatar}</span><div><b>${e.name}</b><small>${e.blurb} Favourite: ${s?s.icon+" "+s.title:"\u2014"}</small>
        <div class="hearts">${Array.from({length:10},(o,a)=>`<i>${a<n?"\u{1F497}":"\u{1F90D}"}</i>`).join("")}</div>${r}</div></li>`}).join(""),this.show("regulars")}_reward(t){let e=this.s,n=this.game,s=t.result,r=t.order,o=[];if(!s||!r||n.mode==="tutorial")return"";let a=s.stars*5+(s.stars>=3?5:0);n.mode==="free"&&(a=Math.ceil(a/2));let l=r.id===_o()&&s.stars>=2;if(l&&(a+=10),a&&(e.coins=(e.coins|0)+a,o.push(`<span class="rw coin">+\u{1FA99}${a}${l?" <small>special!</small>":""}</span>`)),r.id){let h=e.dishes[r.id]||{best:0,count:0},u=s.stars>=3&&h.best<3;h.best=Math.max(h.best,s.stars),h.count++,e.dishes[r.id]=h,u&&o.push('<span class="rw sticker">\u{1F3C5} New sticker in the Recipe Book!</span>')}let c=r.custId&&za(r.custId);if(c){let h=pf(c,s.stars,r.id),u=Math.min(10,(e.hearts[c.id]||0)+h);e.hearts[c.id]=u,h&&o.push(`<span class="rw heart">${c.avatar} +${"\u{1F497}".repeat(h)} <small>${u}/${10}</small></span>`),u>=10&&!e.notes.includes(c.id)&&(e.notes.push(c.id),o.push(`<span class="rw note">\u{1F48C} ${c.name} left you a thank-you note! (Regulars)</span>`))}return yi(e),this._updateCoins(),o.join("")}async snapPhoto(){if(!this.onPhoto)return;ft.pop();let t=this.onPhoto(this._lastDish||{}),e=ut("dish-photo");e.src=t,e.classList.remove("hidden");try{let s=await(await fetch(t)).blob(),r=new File([s],"crack-and-sizzle.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[r]})){await navigator.share({files:[r],title:"My dish"});return}}catch{}let n=document.createElement("a");n.href=t,n.download="crack-and-sizzle.png",document.body.appendChild(n),n.click(),n.remove()}openBook(t){let e=this.game;this._bookFrom=e.mode==="menu"?"title":"game",this._bookWasPaused=e.paused,this._bookFrom==="game"&&(e.paused=!0),this._bookFrom==="title"&&ut("screen-title").classList.add("hidden");let n=e.order||e.freeGoal;this.book.open(t||n&&n.id,{canCook:e.mode!=="orders"&&e.mode!=="tutorial"})}_afterBook(){this._bookFrom==="title"&&this.game.mode==="menu"?this.show("title"):this._bookFrom==="game"&&!this._bookWasPaused&&(this.game.paused=!1)}practice(t){let e=gi(t);e&&(this.startMode("free"),this.game.freeGoal=uo(e,["\u{1F469}\u200D\u{1F373}","Practice"],{level:e.levels[0],patience:9999}),ut("order-card").classList.remove("hidden"),this._renderOrder(this.game.freeGoal),this.toast(`Practice: ${e.title} ${e.icon}`,"good"))}startMode(t){ft.init(),ft.resume(),ft.setVolumes(this.s.music,this.s.sfx),ft.startMusic(),ft.setStation(this.s.radio||0),this.decor&&(this.decor.radio.station=ft.station),this.hideScreens(),ut("hud").classList.remove("hidden"),this.game.start(t);let e=t==="free";ut("order-card").classList.toggle("hidden",e),ut("score-pill").classList.toggle("hidden",t!=="orders"||this.game.cozy),ut("tutorial-panel").classList.toggle("hidden",t!=="tutorial"),ut("score-val").textContent="0",t==="tutorial"&&this._renderTutorial(),e?this.toast("Free Cook \u2014 experiment with heat & methods! \u{1F373}","good"):t==="cozy"?this.toast("Cozy Mode \u2014 no timers, no rush \u{1F319}","good"):t==="orders"&&this.toast("Tip: drag empty space to look around \xB7 pinch to zoom","")}toMenu(){this.game.mode="menu",this.game.paused=!1,this.game.resetKitchen(),ut("hud").classList.add("hidden"),this._updateBest(),this.show("title"),ft.resume()}pause(t=!1,e=!0){let n=this.game;n.mode==="menu"||n.mode==="results"||n.paused||(n.paused=!0,e&&this.show("pause"),t&&ft.suspend())}resume(){this.hideScreens(),this.game.paused=!1,ft.resume()}finishTutorial(){this.s.tutorialDone=!0,yi(this.s),this.toMenu(),setTimeout(()=>this.toast("You're ready, chef! Try Order Mode \u{1F469}\u200D\u{1F373}","good"),300)}_bindDial(){let t=ut("dial"),e=(o,a)=>{let l=f=>[60+Math.sin(f)*50,60-Math.cos(f)*50],[c,h]=l(o),[u,d]=l(a);return`M${c.toFixed(1)} ${h.toFixed(1)} A50 50 0 ${a-o>Math.PI?1:0} 1 ${u.toFixed(1)} ${d.toFixed(1)}`};this._arc=e,ut("dial-arc-bg").setAttribute("d",e(-.75*Math.PI,.75*Math.PI));let n=null,s=o=>{let a=t.getBoundingClientRect(),c=Math.atan2(o.clientX-(a.left+a.width/2),-(o.clientY-(a.top+a.height/2)))*180/Math.PI;c=Math.max(-135,Math.min(135,c)),!(Math.abs(c-(this.game.heat*27-135))>200)&&this.game.setHeat((c+135)/27)};t.addEventListener("pointerdown",o=>{ft.init(),ft.resume(),n=o.pointerId,t.setPointerCapture(o.pointerId),s(o),o.preventDefault()}),t.addEventListener("pointermove",o=>{o.pointerId===n&&s(o)});let r=o=>{o.pointerId===n&&(n=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("keydown",o=>{(o.key==="ArrowRight"||o.key==="ArrowUp")&&this.game.setHeat(this.game.heat+.5),(o.key==="ArrowLeft"||o.key==="ArrowDown")&&this.game.setHeat(this.game.heat-.5)}),this._renderDial(0)}_renderDial(t){let e=-135+t*27;ut("dial-knob").style.transform=`rotate(${e}deg)`,ut("dial-arc").setAttribute("d",t>.05?this._arc(-.75*Math.PI,e*Math.PI/180):""),ut("dial-label").textContent=t<.05?"Off":t<3.5?`Low ${t.toFixed(1)}`:t<7?`Med ${t.toFixed(1)}`:`High ${t.toFixed(1)}`,ut("dial").setAttribute("aria-valuenow",t.toFixed(1))}_bindTray(){document.querySelectorAll("#tray .tool, #tray2 .tool").forEach(t=>{let e=t.dataset.tool;t.addEventListener("pointerdown",n=>{if(n.preventDefault(),t.classList.add("active"),setTimeout(()=>t.classList.remove("active"),160),e==="toss"){ft.init(),this.game.toss();return}this.ix.trayDown(e,n)})}),ut("btn-serve").addEventListener("click",()=>this.game.serve())}_bindGame(){let t=this.game;t.on("heat",e=>this._renderDial(e)),t.on("toast",({text:e,kind:n})=>this.toast(e,n)),t.on("order",e=>this._renderOrder(e)),t.on("changed",()=>{this.hintT=0}),t.on("tutorial",()=>this._renderTutorial()),t.on("tutorialDone",()=>this.finishTutorial()),t.on("served",e=>{let n=this._serveId=(this._serveId||0)+1;setTimeout(()=>{n===this._serveId&&t.foodLoc==="served"&&this._showDish(e)},650)}),t.on("roundOver",({total:e,results:n})=>this._showResults(e,n))}_renderOrder(t){if(!t)return;ut("cust-avatar").textContent=t.avatar;let e=this.game.mode;ut("order-num").textContent=e==="tutorial"?`Tutorial \xB7 ${t.name}`:e==="free"?"Practice \xB7 Free Cook":`${this.game.cozy?"\u{1F319} ":""}Order ${this.game.orderIdx+1} / ${this.game.orders.length} \xB7 ${t.name}`;let n=ut("order-greet");n.textContent=t.greet?`\u201C${t.greet}\u201D`:"",n.classList.toggle("hidden",!t.greet),ut("order-card").classList.toggle("special",t.id===_o()),ut("order-recipe").textContent=`${t.icon||Kd[t.recipe]} ${tl(t)}`,ut("order-doneness").textContent=Bh(t)+((t.eggs||1)>1?` \xB7 \u{1F95A}\xD7${t.eggs}`:""),this._renderExtras();let s=ut("order-card");s.classList.add("pop"),setTimeout(()=>s.classList.remove("pop"),350)}_renderExtras(){let t=this.game.order||this.game.freeGoal;if(!t)return;let e=this.game,n=e.food||e.ings.find(a=>a.kind==="rice")||null,s=[],r=(a,l,c)=>`<span class="chip${l?" done":""}${c?" no":""}">${a}</span>`;s.push(r("\u{1F9C8} Butter",e.butter.amount>0)),(t.extras||[]).forEach(a=>s.push(r(Hh(a),e.plateHas(a.kind)))),(t.fill||[]).forEach(a=>s.push(r(zh(a,t.recipe),e.plateHas(a)))),s.push(t.salt?r("\u{1F9C2} Salt",n&&n.salt>0):r("No salt",!1,!0)),s.push(t.pepper?r("\u25CF Pepper",n&&n.pepper>0):r("No pepper",!1,!0));let o=s.join("");o!==this._extrasHTML&&(ut("order-extras").innerHTML=o,this._extrasHTML=o)}_renderTutorial(){let t=ut("tut-steps"),e=this.game.tutStep;t.innerHTML=fo.map((s,r)=>`<li class="${r<e?"ok":r===e?"cur":""}">${s.text}</li>`).join("");let n=t.children[e];n&&n.scrollIntoView({block:"nearest"})}_showDish(t){let e=this.game;if(e.paused=!0,this._lastDish={title:t.free?"Free Cook":tl(t.order),stars:t.free?0:t.result.stars},ut("dish-photo").classList.add("hidden"),ut("dish-rewards").innerHTML="",t.free)ut("dish-stars").innerHTML="\u{1F373}",ut("dish-title").textContent="Bon app\xE9tit!",ut("dish-score").textContent="",ut("dish-breakdown").innerHTML="",ut("dish-quote").textContent=t.text,ut("btn-next").textContent="Cook another";else{let n=t.result;ut("dish-stars").innerHTML=$f(n.stars),ut("dish-title").textContent=["Oh no\u2026","Not bad","Delicious!","Perfect!"][n.stars],ut("dish-score").textContent=n.total,ut("dish-breakdown").innerHTML=n.lines.map(r=>`<li><span>${r.label}<small>${r.note}</small></span><b>${r.pts}${r.max?" / "+r.max:""}</b></li>`).join(""),ut("dish-quote").textContent=`${t.order.avatar} \u201C${t.quote}\u201D`,ut("dish-rewards").innerHTML=this._reward(t);let s=e.mode==="orders"&&e.orderIdx+1>=e.orders.length;if(ut("btn-next").textContent=e.mode==="tutorial"?"Finish tutorial":e.mode==="free"?"Cook it again":s?"See results":"Next order",e.mode==="orders"){ut("score-val").textContent=e.roundScore;let r=ut("score-pill");r.classList.remove("bump"),r.offsetWidth,r.classList.add("bump")}n.stars>=3?ft.chime():n.stars>=2?ft.ding():ft.fail();for(let r=0;r<n.stars;r++)setTimeout(()=>ft.stamp(),260+r*150)}this.show("dish")}_showResults(t,e){let n=e.reduce((o,a)=>o+a.result.stars,0),s=Math.round(n/e.length);ut("res-stars").innerHTML=$f(s),ut("res-total").textContent=`${t} pts`;let r=t>this.s.best;r&&(this.s.best=t,yi(this.s)),ut("res-best").textContent=r?"\u{1F3C6} New best score!":`Best: ${this.s.best} \xB7 \u2B50 ${n} / 15 stars`,ut("res-list").innerHTML=e.map(({order:o,result:a})=>`<li><span>${o.avatar} ${tl(o)}<small>${[Bh(o)].concat((o.extras||[]).map(Hh),(o.fill||[]).map(l=>zh(l,o.recipe))).join(" \xB7 ")}</small></span><b>${"\u2B50".repeat(a.stars)||"\u2014"} ${a.total}</b></li>`).join(""),this.show("results"),ft.ding()}toast(t,e=""){let n=ut("toast");n.className="toast "+e,n.textContent=t,clearTimeout(this._toastT),n.offsetWidth,this._toastT=setTimeout(()=>n.classList.add("hidden"),2200)}update(t,e){let n=this.game;if(n.mode==="menu")return;if(this.hintT-=t,this.hintT<=0){this.hintT=.25;let d=this.s.hints||n.mode==="tutorial"?n.hint():null,f=d?d.text:"",g=ut("hint");f!==this.lastHint&&(g.textContent=f,g.classList.remove("flash"),g.offsetWidth,f&&g.classList.add("flash"),this.lastHint=f),document.querySelectorAll("#tray .tool, #tray2 .tool").forEach(y=>y.classList.toggle("suggest",!!d&&d.tool===y.dataset.tool)),ut("btn-serve").disabled=!n.canServe(),this._renderExtras()}if(n.mode==="orders"&&n.order&&!n.cozy){let d=Math.max(0,1-n.orderTime/n.order.patience),f=ut("patience-bar");f.style.width=(d*100).toFixed(1)+"%",f.classList.toggle("low",d<.25)}else ut("patience-bar").style.width="100%";ut("thermo-fill").style.width=Math.min(100,(n.panTemp-20)/230*100).toFixed(1)+"%",ut("temp-readout").textContent=`${Math.round(n.panTemp)}\xB0C pan${n.panOnBurner?"":" (off burner)"}`,ut("guide-chip").classList.add("hidden");let s=this.s.guide?n.guideList():[],r=ut("guide-chips"),o=this._chips||(this._chips=[]);for(r.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden";o.length<s.length;){let d=document.createElement("div");d.className="mini-chip",d.style.position="absolute",d.style.pointerEvents="none",d.innerHTML='<span class="tx"></span><div class="meter"><i></i></div>',r.appendChild(d),o.push(d)}let a=window.innerWidth,l=window.innerHeight,c=[];s.forEach((d,f)=>{let g=o[f];d.obj.getWorldPosition(Oi),Oi.y+=.45,Oi.project(e);let y=(Oi.x*.5+.5)*a,m=(-Oi.y*.5+.5)*l;for(let p=0;p<6&&c.some(_=>Math.abs(_.x-y)<96&&Math.abs(_.y-m)<27);p++)m-=28;c.push({x:y,y:m}),g.style.display="",g.className="mini-chip "+d.cls,g.style.transform="translate(-50%, -100%)",g.firstChild.textContent=d.label,g.lastChild.firstChild.style.width=Math.round(d.p*100)+"%",g.style.left=y.toFixed(0)+"px",g.style.top=Math.max(64,m).toFixed(0)+"px"});for(let d=s.length;d<o.length;d++)o[d].style.display="none";let h=this._ring;h||(h=this._ring=document.createElement("div"),h.className="stir-ring",h.innerHTML='<div class="sr-track"></div><span class="sr-notch beat">\u{1F95A}</span><span class="sr-notch scr">\u{1F963}</span><span class="sr-txt"></span>',r.appendChild(h));let u=n.stirInfo;u&&n.time-u.t<.9&&!n.paused?(u.obj.getWorldPosition(Oi),Oi.project(e),h.style.left=((Oi.x*.5+.5)*a).toFixed(0)+"px",h.style.top=((-Oi.y*.5+.5)*l).toFixed(0)+"px",h.style.setProperty("--p",(u.p*360).toFixed(1)+"deg"),h.classList.toggle("lock",u.lock),h.classList.toggle("beaten",u.p>=.5),h.classList.toggle("show",!0),h.classList.toggle("pulse",u.pulse!=null&&n.time-u.pulse<.35),h.lastChild.textContent=u.lock?"Beaten! Let go":u.p>=.5?"Scrambling\u2026":"Beating\u2026"):h.classList.remove("show"),ut("btn-flip").classList.toggle("hidden",!n.canFlip())}};function $f(i){return[0,1,2].map(t=>`<span class="${t<i?"":"off"}" style="animation-delay:${t*.15}s">\u2B50</span>`).join("")}var Xv="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",qv=`
  uniform sampler2D tex; uniform float threshold; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tex, vUv).rgb;
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float soft = clamp(l - threshold + 0.35, 0.0, 0.7); soft = soft * soft / 2.8;
    float w = max(soft, l - threshold) / max(l, 1e-4);
    gl_FragColor = vec4(min(c * w, vec3(12.0)), 1.0);
  }`,Yv=`
  uniform sampler2D tex; uniform vec2 dir; varying vec2 vUv;
  void main() {
    vec2 o1 = dir * 1.3846153846, o2 = dir * 3.2307692308;
    vec3 c = texture2D(tex, vUv).rgb * 0.2270270270;
    c += texture2D(tex, vUv + o1).rgb * 0.3162162162; c += texture2D(tex, vUv - o1).rgb * 0.3162162162;
    c += texture2D(tex, vUv + o2).rgb * 0.0702702703; c += texture2D(tex, vUv - o2).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`,$v=`
  uniform sampler2D tScene, tB0, tB1, tB2; uniform float bloom, vignette; uniform vec3 grade; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tScene, vUv).rgb;
    vec3 b = texture2D(tB0, vUv).rgb * 0.55 + texture2D(tB1, vUv).rgb * 0.4 + texture2D(tB2, vUv).rgb * 0.35;
    c = (c + b * bloom) * grade;
    float d = length((vUv - 0.5) * vec2(1.15, 1.0));
    c *= mix(1.0, smoothstep(0.92, 0.28, d), vignette);
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,hl=class{constructor(t){this.r=t;let e={type:ss,depthBuffer:!1};this.scene=new Nn(1,1,{type:ss,samples:4}),this.levels=[0,1,2].map(()=>[new Nn(1,1,e),new Nn(1,1,e)]);let n=(r,o,a=!1)=>new wn({vertexShader:Xv,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1,toneMapped:a});this.bright=n(qv,{tex:{value:null},threshold:{value:1}}),this.blur=n(Yv,{tex:{value:null},dir:{value:new V}}),this.comp=n($v,{tScene:{value:this.scene.texture},tB0:{value:this.levels[0][0].texture},tB1:{value:this.levels[1][0].texture},tB2:{value:this.levels[2][0].texture},bloom:{value:.5},vignette:{value:.3},grade:{value:new St(1,1,1)}},!0);let s=new Le;s.setAttribute("position",new ee([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new ee([0,0,2,0,0,2],2)),this.quad=new vt(s,this.bright),this.quad.frustumCulled=!1,this.cam=new or(-1,1,1,-1,0,1),this.size=new V}set({bloom:t,threshold:e,vignette:n,grade:s}){let r=this.comp.uniforms;t!==void 0&&(r.bloom.value=t),n!==void 0&&(r.vignette.value=n),s&&r.grade.value.copy(s),e!==void 0&&(this.bright.uniforms.threshold.value=e)}setSize(){this.r.getDrawingBufferSize(this.size);let t=Math.max(1,this.size.x),e=Math.max(1,this.size.y);this.scene.setSize(t,e),this.levels.forEach((n,s)=>{let r=2<<s;n.forEach(o=>o.setSize(Math.max(1,Math.round(t/r)),Math.max(1,Math.round(e/r))))})}_pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.quad,this.cam)}render(t,e){let n=this.r;n.getDrawingBufferSize(this.size),(this.size.x!==this.scene.width||this.size.y!==this.scene.height)&&this.setSize(),n.setRenderTarget(this.scene),n.render(t,e),this.bright.uniforms.tex.value=this.scene.texture,this._pass(this.bright,this.levels[0][0]);let s=this.levels[0][0];for(let r=0;r<3;r++){let[o,a]=this.levels[r],l=this.blur.uniforms;l.tex.value=s.texture,l.dir.value.set(1/s.width,0),this._pass(this.blur,a),l.tex.value=a.texture,l.dir.value.set(0,1/a.height),this._pass(this.blur,o),s=o}this.quad.material=this.comp,n.setRenderTarget(null),n.render(this.quad,this.cam)}dispose(){this.scene.dispose(),this.levels.flat().forEach(t=>t.dispose())}};var zt=(i,t,e=!0)=>{let n=new vt(i,t);return n.castShadow=e,n.receiveShadow=!0,n},_i=i=>new qt(i),Kf=i=>new ue(i),jf=(i,t)=>{i.traverse(e=>{e.userData.interact="pet"}),i.userData.onTap=t};function Qf(i,t,e){let n=new xt;i.add(n);let s={fur:_i({color:"#1d1426",roughness:.55,sheen:1,sheenColor:new St("#8a5fd1"),sheenRoughness:.4,clearcoat:.25}),wing:_i({color:"#6b4c9a",roughness:.45,sheen:.6,sheenColor:new St("#ff8fc8"),side:Ne}),pink:_i({color:"#ff8fc8",roughness:.35,clearcoat:.8}),eyeW:_i({color:"#fff7fb",roughness:.15,clearcoat:1}),eyeP:_i({color:"#3a1d5c",roughness:.1,clearcoat:1}),shine:new he({color:"#ffffff"}),lavender:_i({color:"#c9b6e4",roughness:.3,clearcoat:1,clearcoatRoughness:.1}),plum:_i({color:"#7a52b3",roughness:.3,clearcoat:1,clearcoatRoughness:.1}),bone:_i({color:"#fff4e6",roughness:.4,clearcoat:.5}),dark:Kf({color:"#241a2e",roughness:.6}),wire:Kf({color:"#2b2233",roughness:.7}),wax:_i({color:"#fff0de",roughness:.5,transmission:0,sheen:.4}),flame:new he({color:new St(4,2.2,.8),transparent:!0,opacity:.95,depthWrite:!1}),coffee:_i({color:"#5b3a28",roughness:.15,clearcoat:1})},r=[],o=new xt;o.position.set(4.85,0,-1.3),o.rotation.y=-.35,o.scale.setScalar(1.2),n.add(o);let a=new xt;o.add(a);let l=zt(new Qt(.42,32,24),s.fur);l.scale.set(1,.88,.92),l.position.y=.37,a.add(l);let c=zt(new Qt(.25,24,16),s.lavender,!1);c.scale.set(1,.9,.5),c.position.set(0,.33,.29),a.add(c);for(let it of[-1,1]){let Ot=zt(new Qt(.11,16,12),s.fur);Ot.scale.set(1,.7,1.2),Ot.position.set(it*.18,.07,.3),a.add(Ot)}let h=new xt;h.position.y=.92,a.add(h);let u=zt(new Qt(.38,32,24),s.fur);u.scale.set(1.08,.94,.95),h.add(u);let d=[];for(let it of[-1,1]){let Ot=new xt;Ot.position.set(it*.22,.25,-.02),Ot.rotation.z=-it*.38,h.add(Ot);let Bt=zt(new pn(.14,.32,16),s.fur);Bt.position.y=.12,Ot.add(Bt);let De=zt(new pn(.08,.2,12),s.pink,!1);De.position.set(0,.1,.06),Ot.add(De),d.push(Ot)}let f=new xt;f.position.set(.3,.3,.08),f.rotation.z=-.4,h.add(f);for(let it of[-1,1]){let Ot=zt(new pn(.09,.16,12),s.pink);Ot.rotation.z=it*Math.PI/2,Ot.position.x=it*.08,f.add(Ot)}f.add(zt(new Qt(.045,12,8),s.pink));let g=new xt;h.add(g);for(let it of[-1,1]){let Ot=new xt;Ot.position.set(it*.15,.02,.31),g.add(Ot);let Bt=zt(new Qt(.1,20,16),s.eyeW,!1);Bt.scale.set(1,1.15,.5),Ot.add(Bt);let De=zt(new Qt(.072,20,16),s.eyeP,!1);De.scale.set(1,1.15,.5),De.position.z=.025,Ot.add(De);let ze=zt(new Qt(.022,8,6),s.shine,!1);ze.position.set(-.025,.04,.06),Ot.add(ze);let Fe=zt(new Qt(.011,6,4),s.shine,!1);Fe.position.set(.025,-.025,.06),Ot.add(Fe)}for(let it of[-1,1]){let Ot=zt(new ln(.05,16),new he({color:"#ff8fc8",transparent:!0,opacity:.55}),!1);Ot.position.set(it*.25,-.1,.33),Ot.rotation.y=it*.5,h.add(Ot)}let y=zt(new Xe(.05,.012,6,16,Math.PI),s.pink,!1);y.rotation.z=Math.PI,y.position.set(0,-.08,.355),h.add(y);let m=zt(new pn(.012,.03,6),s.bone,!1);m.rotation.z=Math.PI,m.position.set(.03,-.135,.35),h.add(m);let p=new Ve;p.moveTo(0,0),p.quadraticCurveTo(.25,.32,.55,.36),p.quadraticCurveTo(.5,.22,.56,.1),p.quadraticCurveTo(.42,.08,.4,-.04),p.quadraticCurveTo(.28,0,.22,-.1),p.quadraticCurveTo(.12,-.02,0,0);let _=new xn(p,10),v=[];for(let it of[-1,1]){let Ot=new xt;Ot.position.set(it*.22,.55,-.26),a.add(Ot);let Bt=zt(_,s.wing);Bt.scale.set(it,1,1),Ot.add(Bt),v.push(Ot)}let x=new Li([new R(0,.15,-.36),new R(.12,.2,-.6),new R(.28,.45,-.62),new R(.24,.66,-.48)]),P=zt(new is(x,20,.04,8),s.fur);a.add(P);let S=zt(new Qt(.07,12,8),s.pink);S.position.set(.24,.7,-.46),S.scale.set(1,.8,.6),a.add(S);let T={};{let it=new xt;it.position.set(-.04,.3,-.02),it.rotation.z=.12;let Ot=zt(new se(.2,.22,.14,24),s.bone);Ot.position.y=.05,it.add(Ot);for(let[ii,w,N,X]of[[0,.2,0,.17],[-.12,.17,.04,.12],[.12,.17,.03,.12],[.02,.18,-.11,.12]]){let Y=zt(new Qt(X,16,12),s.bone);Y.position.set(ii,w,N),it.add(Y)}T["hat-chef"]=it;let Bt=new xt;Bt.position.set(-.03,.3,-.02),Bt.rotation.z=.15;let De=zt(new se(.36,.36,.025,32),s.plum);Bt.add(De);let ze=zt(new pn(.2,.52,24),s.plum);ze.position.y=.27,ze.rotation.z=.12,Bt.add(ze);let Fe=zt(new Xe(.19,.025,8,24),s.pink);Fe.rotation.x=Math.PI/2,Fe.position.y=.06,Bt.add(Fe);let Wn=zt(new Qt(.04,8,6),new he({color:new St(2,1.6,.6)}),!1);Wn.position.set(.03,.33,.17),Bt.add(Wn),T["hat-witch"]=Bt;let On=new xt;On.position.set(-.02,.33,0);let xi=new ue({color:"#f2c45a",metalness:1,roughness:.25});On.add(zt(new se(.15,.15,.09,24,1,!0),xi));for(let ii=0;ii<5;ii++){let w=ii/5*Math.PI*2,N=zt(new pn(.035,.09,8),xi);N.position.set(Math.cos(w)*.15,.08,Math.sin(w)*.15),On.add(N);let X=zt(new Qt(.018,8,6),s.pink,!1);X.position.set(Math.cos(w)*.155,0,Math.sin(w)*.155),On.add(X)}T["hat-crown"]=On;for(let ii of Object.values(T))ii.visible=!1,h.add(ii)}let C=zt(new Qt(.62,28,14),s.pink);C.scale.set(1,.22,1),C.position.y=.08,C.visible=!1,o.add(C);let E=new vt(new Qt(.75,10,8),new he({visible:!1}));E.position.y=.7,o.add(E);let M={hop:0,flop:0,blink:2,twitch:3,hearts:0,mood:0};jf(o,()=>{M.hop=1,M.hearts=.9,ft.purr&&ft.purr()}),r.push(o);let z=[],B=[-8,-5.2,-2.6,0,2.6,5.2,8],H=[];for(let it=0;it<B.length-1;it++){let Ot=B[it],Bt=B[it+1];for(let De=0;De<12;De++){let ze=De/12,Fe=Ot+(Bt-Ot)*ze;H.push(new R(Fe,3.5-Math.sin(Math.PI*ze)*.45,-3.6))}}H.push(new R(8,3.5,-3.6));let G=new Li(H);n.add(zt(new is(G,160,.012,4),s.wire,!1));let $=34,at=new Qt(.075,10,8);at.scale(1,1.3,1);let Z=new he({color:"#ffffff"}),ct=new fn(at,Z,$);ct.castShadow=!1;let _t=["#ff8fc8","#b48cff","#ffd27a","#8fd0ff"].map(it=>new St(it)),wt=new Ae;for(let it=0;it<$;it++)G.getPointAt((it+.5)/$,wt.position),wt.position.y-=.08,wt.updateMatrix(),ct.setMatrixAt(it,wt.matrix),z.push({c:_t[it%4],seed:Math.random()*10}),ct.setColorAt(it,_t[it%4]);n.add(ct);let Xt=1,Kt=new xt;Kt.position.set(-6.2,0,.55),Kt.rotation.y=.6,n.add(Kt);let O=[new V(0,0),new V(.3,0),new V(.33,.04),new V(.34,.62),new V(.3,.62),new V(.29,.06),new V(0,.06)];Kt.add(zt(new Re(O,28),s.lavender));let Q=zt(new Xe(.15,.04,8,18,Math.PI*1.3),s.lavender);Q.position.set(.36,.33,0),Q.rotation.z=-Math.PI*.65,Kt.add(Q);let dt=zt(new ln(.29,24),s.coffee,!1);dt.rotation.x=-Math.PI/2,dt.position.y=.52,Kt.add(dt);let lt=zt(new ln(.07,3),s.pink,!1);lt.position.set(0,.34,.345),lt.rotation.z=-Math.PI/2,Kt.add(lt);let pt=new xt;pt.position.set(-5.75,0,-2.6),pt.rotation.y=.35,n.add(pt);let Lt=zt(new fe(1.25,.72,.5,4,.12),s.plum);Lt.position.y=.38,pt.add(Lt);let kt=zt(new ln(.24,28),s.dark,!1);kt.position.set(-.27,.38,.252),pt.add(kt);for(let it=0;it<4;it++){let Ot=zt(new cr(.05+it*.05,.065+it*.05,28),s.lavender,!1);Ot.position.set(-.27,.38,.254),pt.add(Ot)}let Zt=zt(new dn(.42,.2),new he({color:new St(1.6,1.2,.8)}),!1);Zt.position.set(.28,.48,.252),pt.add(Zt);let tt=zt(new ge(.012,.16,.005),new he({color:"#ff4f9a"}),!1);tt.position.set(.2,.48,.256),pt.add(tt);for(let it of[.16,.4]){let Ot=zt(new se(.06,.06,.06,16),s.bone);Ot.rotation.x=Math.PI/2,Ot.position.set(it,.24,.27),pt.add(Ot)}let et=zt(new se(.012,.012,.8,6),t.chrome);et.position.set(.45,.95,-.1),et.rotation.z=-.5,pt.add(et);let I=zt(new Qt(.035,8,6),s.pink);I.position.set(.65,1.3,-.1),pt.add(I);let Dt=new vt(new ge(1.5,1.1,.8),new he({visible:!1}));Dt.position.y=.45,pt.add(Dt);let st={bump:0,onTap:null};jf(pt,()=>{st.bump=1,st.onTap&&st.onTap()}),r.push(pt);let gt=new xt;gt.position.set(3.95,2.55,-3.62),n.add(gt);let ht=new Ve;for(let it=0;it<=10;it++){let Ot=Math.PI/2+it*Math.PI/5,Bt=it%2?.34:.68,De=Math.cos(Ot)*Bt,ze=Math.sin(Ot)*Bt;it?ht.lineTo(De,ze):ht.moveTo(De,ze)}let Ft=new Kn(ht,{depth:.08,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3});gt.add(zt(Ft,s.lavender,!1));let Mt=zt(new ln(.3,32),s.bone,!1);Mt.position.z=.13,gt.add(Mt);for(let it=0;it<12;it++){let Ot=zt(new ln(it%3?.012:.022,8),s.dark,!1),Bt=it*Math.PI/6;Ot.position.set(Math.sin(Bt)*.24,Math.cos(Bt)*.24,.135),gt.add(Ot)}let A=(it,Ot,Bt)=>{let De=new xt;De.position.z=.14;let ze=zt(new ge(Ot,it,.01),Bt,!1);return ze.position.y=it/2-.03,De.add(ze),gt.add(De),De},b=A(.15,.035,s.dark),U=A(.22,.022,s.dark),W=A(.24,.008,s.pink),K=zt(new ln(.025,12),s.pink,!1);K.position.z=.16,gt.add(K);let L=new xt;L.position.set(5.05,0,-2.6),n.add(L);let q=[new V(0,0),new V(.4,0),new V(.48,.15),new V(.5,.65),new V(.42,.8),new V(.3,.84)];L.add(zt(new Re(q,32),s.lavender));let j=zt(new se(.34,.36,.1,32),s.plum);j.position.y=.88,L.add(j);let nt=new xt;nt.position.y=1.08,nt.scale.setScalar(.85),L.add(nt);let Nt=zt(new Qt(.16,20,16),s.bone);Nt.scale.set(1,.95,.95),nt.add(Nt);let ot=zt(new fe(.18,.08,.14,2,.03),s.bone);ot.position.set(0,-.12,.03),nt.add(ot);for(let it of[-1,1]){let Ot=zt(new Qt(.042,10,8),s.dark,!1);Ot.scale.set(1,1.1,.5),Ot.position.set(it*.06,-.01,.135),nt.add(Ot)}let yt=f.clone();yt.position.set(-.11,.11,.04),yt.rotation.z=.5,yt.scale.setScalar(.9),nt.add(yt);let Ut=new xt;Ut.position.set(-6.3,0,2.35),Ut.rotation.y=.9,n.add(Ut);let Jt=[new V(0,0),new V(.3,0),new V(.5,.2),new V(.52,.45),new V(.4,.68),new V(.22,.75)];Ut.add(zt(new Re(Jt,32),s.plum));let Rt=zt(new Qt(.24,20,10,0,Math.PI*2,0,Math.PI/2),s.plum);Rt.position.y=.72,Rt.scale.y=.6,Ut.add(Rt);let oe=zt(new Qt(.06,10,8),s.pink);oe.position.y=.88,Ut.add(oe);let ne=zt(new se(.04,.08,.5,12),s.plum);ne.position.set(.58,.45,0),ne.rotation.z=-.9,Ut.add(ne);let xe=zt(new Xe(.2,.04,8,18,Math.PI*1.2),s.plum);xe.position.set(-.5,.4,0),xe.rotation.z=Math.PI*.4,Ut.add(xe);let k=new xt;k.position.set(5,0,.95),n.add(k);let Tt=zt(new se(.22,.26,.06,24),t.brass);Tt.position.y=.03,k.add(Tt);let J=zt(new se(.11,.11,.5,20),s.wax);J.position.y=.31,k.add(J);let rt=new Qt(.045,12,8);rt.scale(1,2.1,1);let bt=zt(rt,s.flame,!1);bt.position.y=.66,k.add(bt);let Et=zt(new dn(.6,.6),new he({map:t.tex.dot,color:new St(1.2,.7,.3),transparent:!0,opacity:.35,depthWrite:!1,blending:Jn}),!1);Et.position.y=.66,k.add(Et);let te=1,ve=()=>!0;An(n,it=>it===o||it===ct||it===pt||it===bt||it===Et||it===b||it===U||it===W,[],ve),An(pt,it=>it===tt,["pet"],ve);let Je=Object.values(T),pe=["pet"];An(g,void 0,pe,ve),An(h,it=>d.includes(it)||it===g||Je.includes(it)||it===f,pe,ve),An(a,it=>it===l||it===h||v.includes(it),pe,ve),Je.forEach(it=>An(it,void 0,pe,ve)),d.forEach(it=>An(it,void 0,pe,ve));let He=0,Pn=0,Is=0,Bi=new R,ni=new St;function wr(it,Ot){He+=it,Is++;let Bt=M,De=1+Math.sin(He*2.2)*.025;l.scale.y=.88*De,Bt.hop=Math.max(0,Bt.hop-it*1.6),Bt.flop=Math.max(0,Bt.flop-it*.5),a.position.y=(o.userData.lift||0)+Math.sin(Math.min(1,1-Bt.hop)*Math.PI)*.18*(Bt.hop>0?1:0),a.rotation.z=Bt.flop>0?Math.sin(Math.min(1,Bt.flop*3)*Math.PI/2)*.5:Math.sin(He*6)*.06*Bt.hop,h.rotation.z=Math.sin(He*.7)*.06+(Bt.hop>0?Math.sin(He*14)*.12*Bt.hop:0);let ze=Bt.hop>0?Math.sin(He*22)*.6*Bt.hop:Math.sin(He*1.8)*.12;if(v[0].rotation.y=.5+ze,v[1].rotation.y=-.5-ze,Bt.twitch-=it,Bt.twitch<0&&(Bt.twitch=2.5+Math.random()*5,Bt.tw=.25),Bt.tw>0?(Bt.tw-=it,d[1].rotation.x=Math.sin((.25-Bt.tw)*40)*.3):d[1].rotation.x=0,Bt.blink-=it,Bt.blink<0&&(Bt.blink=2+Math.random()*4,Bt.bl=.14),Bt.bl>0?(Bt.bl-=it,g.scale.y=.15):g.scale.y=Bt.mood<0?.5:1,Bt.hearts>0&&(Bt.hearts-=it,Math.random()<it*9&&(h.getWorldPosition(Bi),e.emit("heart",Bi.setY(Bi.y+.45),{spread:.4}))),Pn-=it,Pn<0&&(Pn=.32,Kt.getWorldPosition(Bi),e.emit("wisp",Bi.setY(.6),{spread:.18})),Is%2===0||it>1/70){for(let Fe=0;Fe<$;Fe++){let Wn=z[Fe],On=.75+.25*Math.sin(He*2.3+Wn.seed*7)+.1*Math.sin(He*7.1+Wn.seed),xi=Xt*On*2.6+.25;ni.copy(Wn.c).multiplyScalar(xi),ct.setColorAt(Fe,ni)}ct.instanceColor.needsUpdate=!0}if(bt.visible=Et.visible=te>.02,bt.visible){let Fe=1+Math.sin(He*13)*.06+Math.sin(He*29)*.04;bt.scale.set(1,Fe,1),Et.material.opacity=.3*te*Fe,bt.material.opacity=.95*te,Ot&&Et.quaternion.copy(Ot.quaternion)}if(st.bump=Math.max(0,st.bump-it*3),pt.scale.setScalar(1+Math.sin(st.bump*Math.PI)*.08),tt.position.x=.2+(st.station||0)%4*.055,Is%15===0){let Fe=new Date,Wn=Fe.getHours()%12,On=Fe.getMinutes(),xi=Fe.getSeconds()+Fe.getMilliseconds()/1e3;b.rotation.z=-((Wn+On/60)/12)*Math.PI*2,U.rotation.z=-((On+xi/60)/60)*Math.PI*2,W.rotation.z=-(xi/60)*Math.PI*2}}return{root:n,pickables:r,update:wr,setFairy(it){Xt=it,ct.visible=it>.01},setCandle(it){te=it},setHat(it){for(let[Ot,Bt]of Object.entries(T))Bt.visible=Ot===it;f.visible=it!=="hat-witch"&&it!=="hat-chef"},setCushion(it){C.visible=it,a.position.y=0,o.userData.lift=it?.12:0},radio:st,react(it){it>=3?(M.hop=1,M.hearts=1.4,M.mood=1):it>=2?(M.hop=.6,M.mood=0):(M.flop=1,M.mood=-1,setTimeout(()=>{M.mood=0},2500))}}}var Er=i=>document.getElementById(i),nu=Er("scene"),tp=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,bb=/iPad/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1,ei=Jf();function Zv(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}if(!Zv())Er("screen-loading").classList.add("hidden"),Er("screen-nogl").classList.remove("hidden");else try{Jv()}catch(i){console.error(i),Er("screen-loading").classList.add("hidden"),Er("screen-nogl").classList.remove("hidden")}function Jv(){let i=new la({canvas:nu,antialias:!0,powerPreference:"high-performance"});i.outputColorSpace=Pe,i.toneMapping=mh,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Sa;let t=new lr;t.background=new St("#ffe6d5"),t.fog=new ca("#ffe6d5",32,70);let e=new ar(i);t.environment=e.fromScene(new Da,.04).texture,t.environmentIntensity=.55;let n=new xa("#fff6ec","#f1c9b4",.85);t.add(n);let s=new ur("#fff0dc",2.3);s.position.set(-6,13,8),s.castShadow=!0,Object.assign(s.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:40}),s.shadow.bias=-4e-4,s.shadow.normalBias=.025,s.shadow.radius=4,t.add(s);let r=new ur("#cfe8ff",.55);r.position.set(1,9,-8),t.add(r);let o=new ui("#ffd9a8",28,18,2);o.position.set(-.6,9.5,-.8),t.add(o);let a=new ur("#ffd0e0",.35);a.position.set(8,5,-3),t.add(a);let l=Zd(),h=nf(t,l,{mobile:tp}),u=new un(38,1,.1,120),d=cf(t,l),f=new Oa(t,l.tex.dot,700),g=Qf(t,l,f);h.pickables.push(...g.pickables);let y=new ol({scene:t,renderer:i,lights:{hemi:n,key:s,fill:r,lamp:o,rim:a},mats:l,kitchen:h,decor:g,fx:f}),m=new sl({scene:t,camera:u,mats:l,props:d,kitchen:h,fx:f}),p=new rl({canvas:nu,camera:u,game:m,kitchen:h}),_=new La(u,nu);_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=5.5,_.maxDistance=28,_.minPolarAngle=.15,_.maxPolarAngle=1.36,_.minAzimuthAngle=-1.35,_.maxAzimuthAngle=1.35,_.screenSpacePanning=!1,_.panSpeed=.8,_.rotateSpeed=.7,_.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},_.addEventListener("start",()=>{p.orbiting=!0,v=!0}),_.addEventListener("end",()=>{p.orbiting=!1}),_.addEventListener("change",()=>{let O=_.target;O.x=Math.max(-6,Math.min(6,O.x)),O.z=Math.max(-3,Math.min(3,O.z)),O.y=Math.max(-.5,Math.min(2.5,O.y))});let v=!1,x=null;function P(){let O=window.innerWidth/window.innerHeight,Q=O>=1?6.4:5,dt=Math.tan(fr.degToRad(u.fov/2)),lt=Math.max(12.5,Q/(dt*O)*1.02),pt=O>=1?.86:.55,Lt=new R(.1,0,O>=1?.55:-.9);return{pos:new R().setFromSphericalCoords(lt,pt,0).add(Lt),target:Lt}}function S(O=!1){let{pos:Q,target:dt}=P();if(v=!1,O){u.position.copy(Q),_.target.copy(dt),_.update();return}x={t:0,fromP:u.position.clone(),fromT:_.target.clone(),pos:Q,target:dt}}let T=new hl(i),C=!0,E=1,M=1,D=2,z=()=>window.devicePixelRatio||1;function B(O){C=O!=="low",y.post=C?T:null,y.cur&&y._apply(),D=O==="low"?1:Math.min(z(),2),M=O==="low"?1:ei.smooth==="detail"?Math.min(D,1.5):1,E=O==="low"?1:Math.min(D,tp?1.6:2),E=Math.max(M,E),i.setPixelRatio(E);let Q=O==="low"?1024:2048;s.shadow.mapSize.x!==Q&&(s.shadow.mapSize.set(Q,Q),s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)),i.shadowMap.type=O==="low"?wa:Sa,i.setSize(window.innerWidth,window.innerHeight,!1),f.setViewport(window.innerHeight,u.fov,E)}function H(){i.setSize(window.innerWidth,window.innerHeight,!1),u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),f.setViewport(window.innerHeight,u.fov,E),v||S(!0)}y.set(ei.atmos,!0),y.setWeather(ei.weather),B(ei.quality),window.addEventListener("resize",H),window.addEventListener("orientationchange",()=>setTimeout(H,250)),H();let G={hz:60,budget:1e3/60,samples:[],acc:0,frames:0,slow:0,good:0,last:0,frame:0};window.__perf=G;let $=new URLSearchParams(location.search).has("fps")?Object.assign(document.body.appendChild(document.createElement("div")),{id:"fps-meter"}):null;function at(O){let Q=G.last?O-G.last:0;if(G.last=O,G.frame++,!(!Q||Q>250)){if(G.samples.length<90){if(G.samples.push(Q),G.samples.length===90){let dt=G.samples.slice().sort((pt,Lt)=>pt-Lt),lt=dt[45];G.hz=lt<10.5?120:lt<14?90:60,G.budget=1e3/G.hz,i.shadowMap.autoUpdate=G.hz<=60}return}if(G.acc+=Q,G.frames++,G.acc>=1e3){let dt=G.acc/G.frames;G.fps=1e3/dt,G.acc=0,G.frames=0,ei.quality!=="low"&&(dt>G.budget*1.12?(G.slow++,G.good=0):(G.good++,G.slow=0),G.slow>=2&&E>M?(E=Math.max(M,+(E-.15).toFixed(2)),G.slow=0,i.setPixelRatio(E),i.setSize(window.innerWidth,window.innerHeight,!1),f.setViewport(window.innerHeight,u.fov,E)):G.good>=4&&E<D&&(E=Math.min(D,+(E+.1).toFixed(2)),G.good=0,i.setPixelRatio(E),i.setSize(window.innerWidth,window.innerHeight,!1),f.setViewport(window.innerHeight,u.fov,E))),$&&($.textContent=`${G.fps.toFixed(0)} fps \xB7 ${G.hz} Hz \xB7 ${E.toFixed(2)}x \xB7 ${i.info.render.calls} calls \xB7 ${f.count} fx`)}}}let Z=new cl({game:m,interactor:p,settings:ei,onResetCamera:()=>S(!1),onQuality:O=>{B(O),yi(ei)},onAtmos:O=>{y.set(O),yi(ei)},onWeather:O=>{y.setWeather(O),yi(ei)},perf:G,decor:g,onEquip:O=>eu({mats:l,props:d,decor:g},O),onPhoto:O=>ct(O)});eu({mats:l,props:d,decor:g},ei.equip),g.radio.onTap=()=>Z.setRadio(ft.station+1),m.on("served",O=>{let Q=O&&O.result?O.result.stars:3;setTimeout(()=>g.react(Q),700)}),m.settings=ei;function ct({title:O="My dish",stars:Q=0}={}){let dt={p:u.position.clone(),q:u.quaternion.clone()},lt=d.plate.position.clone();lt.y+=.25,u.position.copy(lt).add(new R().setFromSphericalCoords(4.4,.72,_.getAzimuthalAngle()+.2)),u.lookAt(lt),u.updateMatrixWorld(),C?T.render(t,u):i.render(t,u);let pt=i.domElement,Lt=Math.min(pt.width,pt.height)*.9,kt=document.createElement("canvas"),Zt=1080,tt=1300;kt.width=Zt,kt.height=tt;let et=kt.getContext("2d"),I=document.documentElement.dataset.theme!=="cream";return et.fillStyle=I?"#2a1b3d":"#fff6ec",et.fillRect(0,0,Zt,tt),et.fillStyle=I?"#fff4e6":"#ffffff",et.fillRect(40,40,Zt-80,tt-80),et.drawImage(pt,(pt.width-Lt)/2,(pt.height-Lt)/2,Lt,Lt,80,80,Zt-160,Zt-160),et.textAlign="center",et.fillStyle="#3a2758",et.font="700 64px Fredoka, ui-rounded, system-ui, sans-serif",et.fillText(O,Zt/2,Zt+20),et.font="48px system-ui, sans-serif",et.fillText(Q?"\u2B50".repeat(Q):"\u{1F373}",Zt/2,Zt+90),et.font="600 30px Fredoka, ui-rounded, system-ui, sans-serif",et.fillStyle="#9d7fd0",et.fillText(`Crack & Sizzle \xB7 ${new Date().toLocaleDateString()} \xB7 \u{1F49C}`,Zt/2,tt-70),u.position.copy(dt.p),u.quaternion.copy(dt.q),u.updateMatrixWorld(),kt.toDataURL("image/png")}let _t=new Ma,wt=0;function Xt(O){if(x){x.t=Math.min(1,x.t+O/.7);let Q=1-Math.pow(1-x.t,3);u.position.lerpVectors(x.fromP,x.pos,Q),_.target.lerpVectors(x.fromT,x.target,Q),x.t>=1&&(x=null)}if(m.mode==="menu"&&!v){wt+=O;let{pos:Q,target:dt}=P();u.position.copy(Q).applyAxisAngle(new R(0,1,0),Math.sin(wt*.25)*.12),_.target.copy(dt)}_.update(),m.camAz=_.getAzimuthalAngle(),m.update(O),y.update(O),g.update(O,u),Z.update(O,u),i.shadowMap.autoUpdate||(i.shadowMap.needsUpdate=G.frame%2===0),C?T.render(t,u):i.render(t,u)}i.setAnimationLoop(O=>{at(O),Xt(Math.min(.05,_t.getDelta()))}),window.__step=(O,Q=1/30)=>{for(let dt=0;dt<O;dt+=Q)Xt(Q)};let Kt=()=>{ft.init(),ft.resume()};window.addEventListener("pointerdown",Kt,{once:!0}),window.addEventListener("touchend",Kt,{once:!0}),Er("screen-loading").classList.add("hidden"),Z.show("title"),window.__game=m,window.__controls=_,window.__ix=p,window.__three={renderer:i,scene:t,camera:u,post:T,atmos:y,decor:g}}})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
