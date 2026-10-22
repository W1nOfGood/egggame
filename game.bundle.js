(()=>{var Gc="170",ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,Ph=1,df=2;var oa=1,aa=2,si=3,Ci=0,We=1,Ie=2,Ti=0,sn=1,ai=2,Ih=3,Lh=4,ff=5,Gi=100,pf=101,mf=102,gf=103,_f=104,xf=200,yf=201,vf=202,Mf=203,yl=204,vl=205,bf=206,Ef=207,Sf=208,wf=209,Tf=210,Af=211,Rf=212,Cf=213,Pf=214,Ml=0,bl=1,El=2,Cs=3,Sl=4,wl=5,Tl=6,Al=7,Gu=0,If=1,Lf=2,Ai=0,Df=1,Uf=2,Nf=3,Wc=4,Of=5,Ff=6,Bf=7;var Wu=300,Ps=301,Is=302,Rl=303,Cl=304,la=306,Pi=1e3,Xi=1001,Pl=1002,_n=1003,kf=1004;var Jr=1005;var kn=1006,ka=1007;var qi=1008;var li=1009,Xu=1010,qu=1011,xr=1012,Xc=1013,Yi=1014,zn=1015,Pr=1016,qc=1017,Yc=1018,Ls=1020,Yu=35902,Zu=1021,$u=1022,In=1023,Ju=1024,Ku=1025,Ts=1026,Ds=1027,Zc=1028,$c=1029,ju=1030,Jc=1031;var Kc=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Il=35840,Ll=35841,Dl=35842,Ul=35843,Nl=36196,Ol=37492,Fl=37496,Bl=37808,kl=37809,zl=37810,Hl=37811,Vl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,$l=37819,Jl=37820,Kl=37821,Po=36492,jl=36494,Ql=36495,Qu=36283,tc=36284,ec=36285,nc=36286;var Io=2300,ic=2301,za=2302,Dh=2400,Uh=2401,Nh=2402;var zf=3200,Hf=3201;var td=0,Vf=1,Si="",Ce="srgb",Vs="srgb-linear",ca="linear",de="srgb";var rs=7680;var Oh=519,Gf=512,Wf=513,Xf=514,ed=515,qf=516,Yf=517,Zf=518,$f=519,sc=35044;var Fh="300 es",ri=2e3,Lo=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,fr=Math.PI/180,yr=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function Jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kf(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(Bh=i);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function op(i){return i*fr}function ap(i){return i*yr}function lp(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ha={DEG2RAD:fr,RAD2DEG:yr,generateUUID:Hn,clamp:Ue,euclideanModulo:jc,mapLinear:Jf,inverseLerp:Kf,lerp:pr,damp:jf,pingpong:Qf,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:op,radToDeg:ap,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:ue,denormalize:Pn},q=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],v=s[4],x=s[7],L=s[2],T=s[5],R=s[8];return r[0]=o*_+a*b+l*L,r[3]=o*m+a*v+l*T,r[6]=o*p+a*x+l*R,r[1]=c*_+h*b+u*L,r[4]=c*m+h*v+u*T,r[7]=c*p+h*x+u*R,r[2]=d*_+f*b+g*L,r[5]=d*m+f*v+g*T,r[8]=d*p+f*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new $t;function nd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=Do("canvas");return i.style.display="block",i}var kh={};function ur(i){i in kh||(kh[i]=!0,console.warn(i))}function fp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],Vh=[.3127,.329],Gh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Vs]:{primaries:zh,whitePoint:Vh,transfer:ca,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:zh,whitePoint:Vh,transfer:de,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var os,rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Do("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gp=0,Uo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _p=0,rn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=kn,o=qi,a=In,l=li,c=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Hn(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Wu;rn.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,L=(p+1)/2,T=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},No=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),T=Math.atan2(L,p*b);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let x=a*b;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new A,Xh=new on,ui=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),jr.subVectors(this.max,er),as.subVectors(t.a,er),ls.subVectors(t.b,er),cs.subVectors(t.c,er),xi.subVectors(ls,as),yi.subVectors(cs,ls),Oi.subVectors(as,cs);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!Wa(e,as,ls,cs,jr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,as,ls,cs,jr))?!1:(Qr.crossVectors(xi,yi),e=[Qr.x,Qr.y,Qr.z],Wa(e,as,ls,cs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,Kr=new ui,as=new A,ls=new A,cs=new A,xi=new A,yi=new A,Oi=new A,er=new A,jr=new A,Qr=new A,Fi=new A;function Wa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xp=new ui,nr=new A,Xa=new A,Zi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Xa)),this.expandByPoint(nr.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new A,qa=new A,to=new A,vi=new A,Ya=new A,eo=new A,Za=new A,Us=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(to),a=vi.dot(this.direction),l=-vi.dot(to),c=vi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(to,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){Ya.subVectors(e,t),eo.subVectors(n,t),Za.crossVectors(Ya,eo);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);let l=a*this.direction.dot(eo.crossVectors(vi,eo));if(l<0)return null;let c=a*this.direction.dot(Ya.cross(vi));if(c<0||l+c>o)return null;let h=-a*vi.dot(Za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,vp)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Mi.crossVectors(n,pn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Mi.crossVectors(n,pn)),Mi.normalize(),no.crossVectors(pn,Mi),s[0]=Mi.x,s[4]=no.x,s[8]=pn.x,s[1]=Mi.y,s[5]=no.y,s[9]=pn.y,s[2]=Mi.z,s[6]=no.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],v=n[7],x=n[11],L=n[15],T=s[0],R=s[4],P=s[8],S=s[12],M=s[1],I=s[5],H=s[9],D=s[13],k=s[2],Z=s[6],X=s[10],nt=s[14],W=s[3],ht=s[7],ft=s[11],vt=s[15];return r[0]=o*T+a*M+l*k+c*W,r[4]=o*R+a*I+l*Z+c*ht,r[8]=o*P+a*H+l*X+c*ft,r[12]=o*S+a*D+l*nt+c*vt,r[1]=h*T+u*M+d*k+f*W,r[5]=h*R+u*I+d*Z+f*ht,r[9]=h*P+u*H+d*X+f*ft,r[13]=h*S+u*D+d*nt+f*vt,r[2]=g*T+_*M+m*k+p*W,r[6]=g*R+_*I+m*Z+p*ht,r[10]=g*P+_*H+m*X+p*ft,r[14]=g*S+_*D+m*nt+p*vt,r[3]=b*T+v*M+x*k+L*W,r[7]=b*R+v*I+x*Z+L*ht,r[11]=b*P+v*H+x*X+L*ft,r[15]=b*S+v*D+x*nt+L*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*b+n*v+s*x+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=b*R,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,t[4]=v*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=x*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=L*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,v=l*h,x=l*u,L=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+x)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+v)*R,s[9]=(m-b)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let c=1/r,h=1/o,u=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ri){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===ri)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,_;if(a===ri)g=(o+r)*u,_=-2*u;else if(a===Lo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new A,Rn=new pe,yp=new A(0,0,0),vp=new A(1,1,1),Mi=new A,no=new A,pn=new A,qh=new pe,Yh=new on,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mp=0,Zh=new A,us=new on,ei=new pe,io=new A,ir=new A,bp=new A,Ep=new on,$h=new A(1,0,0),Jh=new A(0,1,0),Kh=new A(0,0,1),jh={type:"added"},Sp={type:"removed"},ds={type:"childadded",child:null},$a={type:"childremoved",child:null},Ee=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Vn,n=new on,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ir,io,this.up):ei.lookAt(io,ir,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new A(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new A,ni=new A,Ja=new A,ii=new A,fs=new A,ps=new A,Qh=new A,Ka=new A,ja=new A,Qa=new A,tl=new fe,el=new fe,nl=new fe,wi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ni.subVectors(n,e),Ja.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(ni),l=Cn.dot(Ja),c=ni.dot(ni),h=ni.dot(Ja),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(el,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ni.subVectors(t,e),Cn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ps.subVectors(r,n),Ka.subVectors(t,n);let l=fs.dot(Ka),c=ps.dot(Ka);if(l<=0&&c<=0)return e.copy(n);ja.subVectors(t,s);let h=fs.dot(ja),u=ps.dot(ja);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fs,o);Qa.subVectors(t,r);let f=fs.dot(Qa),g=ps.dot(Qa);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Qh,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},so={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=jc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ie.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ue(Ze.r*255,0,255))*65536+Math.round(Ue(Ze.g*255,0,255))*256+Math.round(Ue(Ze.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ce){ie.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(so);let n=pr(bi.h,so.h,e),s=pr(bi.s,so.s,e),r=pr(bi.l,so.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Ut;Ut.NAMES=id;var wp=0,Ii=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Hn(),this.name="",this.blending=sn,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=vl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sn&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==vl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},me=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new A,ro=new q,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}};var Oo=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fo=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tp=0,Mn=new pe,sl=new Ee,ms=new A,mn=new ui,sr=new ui,Ge=new A,Ne=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Fo:Oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(mn.min,sr.min),mn.expandByPoint(Ge),Ge.addVectors(mn.max,sr.max),mn.expandByPoint(Ge)):(mn.expandByPoint(sr.min),mn.expandByPoint(sr.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Ge.add(ms)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new A,l[P]=new A;let c=new A,h=new A,u=new A,d=new q,f=new q,g=new q,_=new A,m=new A;function p(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(_),a[S].add(_),a[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,S=b.length;P<S;++P){let M=b[P],I=M.start,H=M.count;for(let D=I,k=I+H;D<k;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new A,x=new A,L=new A,T=new A;function R(P){L.fromBufferAttribute(s,P),T.copy(L);let S=a[P];v.copy(S),v.sub(L.multiplyScalar(L.dot(S))).normalize(),x.crossVectors(T,S);let I=x.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,S=b.length;P<S;++P){let M=b[P],I=M.start,H=M.count;for(let D=I,k=I+H;D<k;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tu=new pe,Bi=new Us,oo=new Zi,eu=new A,ao=new A,lo=new A,co=new A,rl=new A,ho=new A,nu=new A,uo=new A,Rt=class extends Ee{constructor(t=new Ne,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,t),o?ho.addScaledVector(rl,h):ho.addScaledVector(rl.sub(e),h))}e.add(ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(oo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(oo,eu)===null||Bi.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,L=v;x<L;x+=3){let T=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=fo(this,p,t,n,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=fo(this,o,t,n,c,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,L=v;x<L;x+=3){let T=x,R=x+1,P=x+2;s=fo(this,p,t,n,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,v=m+1,x=m+2;s=fo(this,o,t,n,c,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ap(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ao),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=Ap(i,t,e,n,ao,lo,co,nu);if(h){let u=new A;wi.getBarycoord(nu,ao,lo,co,u),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,u,new q)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,u,new q)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};wi.getNormal(ao,lo,co,d.normal),h.face=d,h.barycoord=u}return h}var ve=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,m,p,b,v,x,L,T,R,P,S){let M=x/R,I=L/P,H=x/2,D=L/2,k=T/2,Z=R+1,X=P+1,nt=0,W=0,ht=new A;for(let ft=0;ft<X;ft++){let vt=ft*I-D;for(let Ft=0;Ft<Z;Ft++){let te=Ft*M-H;ht[_]=te*b,ht[m]=vt*v,ht[p]=k,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Ft/R),u.push(1-ft/P),nt+=1}}for(let ft=0;ft<P;ft++)for(let vt=0;vt<R;vt++){let Ft=d+vt+Z*ft,te=d+vt+Z*(ft+1),K=d+(vt+1)+Z*(ft+1),ot=d+(vt+1)+Z*ft;l.push(Ft,te,ot),l.push(te,K,ot),W+=6}a.addGroup(f,W,S),f+=W,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Cp={clone:Ns,merge:tn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Bo=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new A,iu=new q,su=new q,$e=class extends Bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,_s=1,lc=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(gs,_s,t,e);s.layers=this.layers,this.add(s);let r=new $e(gs,_s,t,e);r.layers=this.layers,this.add(r);let o=new $e(gs,_s,t,e);o.layers=this.layers,this.add(o);let a=new $e(gs,_s,t,e);a.layers=this.layers,this.add(a);let l=new $e(gs,_s,t,e);l.layers=this.layers,this.add(l);let c=new $e(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cc=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Ti});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=kn),new lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ol=new A,Lp=new A,Dp=new $t,gn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ol.subVectors(n,e).cross(Lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Zi,po=new A,Mr=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+b).normalize(),n[3].setComponents(l-o,d-h,m-g,x-b).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===ri)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===Lo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xn=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let v=b+c*p,x=b+c*(p+1),L=b+1+c*(p+1),T=b+1+c*p;f.push(v,x,T),f.push(x,L,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sm=`#define PI 3.141592653589793
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Dm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,$0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Np,alphahash_pars_fragment:Op,alphamap_fragment:Fp,alphamap_pars_fragment:Bp,alphatest_fragment:kp,alphatest_pars_fragment:zp,aomap_fragment:Hp,aomap_pars_fragment:Vp,batching_pars_vertex:Gp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Qp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:am,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:hm,colorspace_fragment:um,colorspace_pars_fragment:dm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:_m,fog_vertex:xm,fog_pars_vertex:ym,fog_fragment:vm,fog_pars_fragment:Mm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Em,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Im,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:zm,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:$m,morphtarget_pars_vertex:Jm,morphtarget_vertex:Km,normal_fragment_begin:jm,normal_fragment_maps:Qm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:x0,shadowmask_pars_fragment:y0,skinbase_vertex:v0,skinning_pars_vertex:M0,skinning_vertex:b0,skinnormal_vertex:E0,specularmap_fragment:S0,specularmap_pars_fragment:w0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:I0,uv_vertex:L0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:O0,backgroundCube_frag:F0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:H0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:$0,meshlambert_vert:J0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:tn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:tn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:tn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:tn([dt.points,dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:tn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:tn([dt.common,dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:tn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:tn([dt.sprite,dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:tn([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:tn([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var mo={r:0,b:0,g:0},zi=new Vn,pg=new pe;function mg(i,t,e,n,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1,x=g(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new Rt(new ve(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ns(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(zi)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Rt(new xn(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ns(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(mo,sd(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,I,H,D,k){let Z=!1,X=u(D,H,I);r!==X&&(r=X,c(r.object)),Z=f(M,D,H,k),Z&&g(M,D,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,I,H,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,H){let D=H.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[I.id];Z===void 0&&(Z={},k[I.id]=Z);let X=Z[D];return X===void 0&&(X=d(l()),Z[D]=X),X}function d(M){let I=[],H=[],D=[];for(let k=0;k<e;k++)I[k]=0,H[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,I,H,D){let k=r.attributes,Z=I.attributes,X=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let ft=k[W],vt=Z[W];if(vt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(M,I,H,D){let k={},Z=I.attributes,X=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let ft=Z[W];ft===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));let vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),k[W]=vt,X++}r.attributes=k,r.attributesNum=X,r.index=D}function _(){let M=r.newAttributes;for(let I=0,H=M.length;I<H;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let H=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;H[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),k[M]!==I&&(i.vertexAttribDivisor(M,I),k[M]=I)}function b(){let M=r.newAttributes,I=r.enabledAttributes;for(let H=0,D=I.length;H<D;H++)I[H]!==M[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function v(M,I,H,D,k,Z,X){X===!0?i.vertexAttribIPointer(M,I,H,k,Z):i.vertexAttribPointer(M,I,H,D,k,Z)}function x(M,I,H,D){_();let k=D.attributes,Z=H.getAttributes(),X=I.defaultAttributeValues;for(let nt in Z){let W=Z[nt];if(W.location>=0){let ht=k[nt];if(ht===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){let ft=ht.normalized,vt=ht.itemSize,Ft=t.get(ht);if(Ft===void 0)continue;let te=Ft.buffer,K=Ft.type,ot=Ft.bytesPerElement,xt=K===i.INT||K===i.UNSIGNED_INT||ht.gpuType===Xc;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Pt=lt.stride,Bt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot,lt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)m(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ot=0;Ot<W.locationSize;Ot++)v(W.location+Ot,vt/W.locationSize,K,ft,Pt*ot,(Bt+vt/W.locationSize*Ot)*ot,xt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let lt=0;lt<W.locationSize;lt++)v(W.location+lt,vt/W.locationSize,K,ft,vt*ot,vt/W.locationSize*lt*ot,xt)}}else if(X!==void 0){let ft=X[nt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}b()}function L(){P();for(let M in n){let I=n[M];for(let H in I){let D=I[H];for(let k in D)h(D[k].object),delete D[k];delete I[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let H in I){let D=I[H];for(let k in D)h(D[k].object),delete D[k];delete I[H]}delete n[M.id]}function R(M){for(let I in n){let H=n[I];if(H[M.id]===void 0)continue;let D=H[M.id];for(let k in D)h(D[k].object),delete D[k];delete H[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function _g(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==li&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:T}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,v=b*4,x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let L=0;L!==v;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vg(i){let t=new WeakMap;function e(o,a){return a===Rl?o.mapping=Ps:a===Cl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rl||a===Cl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zo=class extends Bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ss=4,ru=[.125,.215,.35,.446,.526,.582],Wi=20,al=new zo,ou=new Ut,ll=null,cl=0,hl=0,ul=!1,Vi=(1+Math.sqrt(5))/2,xs=1/Vi,au=[new A(-Vi,xs,0),new A(Vi,xs,0),new A(-xs,0,Vi),new A(xs,0,Vi),new A(0,Vi,-xs),new A(0,Vi,xs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Pr,format:In,colorSpace:Vs,depthBuffer:!1},s=lu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,al)}_sceneToCubeUV(t,e,n,s){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ou),h.toneMapping=Ai,h.autoClear=!1;let f=new me({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Rt(new ve,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ou),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;go(s,b*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ps||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=au[(s-r-1)%au.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);let p=[],b=0;for(let R=0;R<Wi;++R){let P=R/_,S=Math.exp(-P*P/2);p.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[s],L=3*x*(s>v-Ss?s-v+Ss:0),T=4*(this._cubeSize-x);go(e,L,T,3*x,2*x),l.setRenderTarget(e),l.render(u,al)}};function Mg(i){let t=[],e=[],n=[],s=i,r=i-Ss+1+ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ss?l=ru[o-i+Ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,P=T>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(S,_*g*T),v.set(d,m*g*T);let M=[T,T,T,T,T,T];x.set(M,p*g*T)}let L=new Ne;L.setAttribute("position",new Je(b,_)),L.setAttribute("uv",new Je(v,m)),L.setAttribute("faceIndex",new Je(x,p)),t.push(L),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lu(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){let n=new Float32Array(Wi),s=new A(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function cu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Eg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rl||l===Cl,h=l===Ps||l===Is;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Os(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Os(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let v=0,x=b.length;v<x;v+=3){let L=b[v+0],T=b[v+1],R=b[v+2];d.push(L,T,T,R,R,L)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){let L=v+0,T=v+1,R=v+2;d.push(L,T,T,R,R,L)}}else return;let m=new(nd(d)?Fo:Oo)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Tg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*L*4*u),R=new No(T,x,L,u);R.type=zn,R.needsUpdate=!0;let P=v*4;for(let M=0;M<u;M++){let I=m[M],H=p[M],D=b[M],k=x*L*4*M;for(let Z=0;Z<I.count;Z++){let X=Z*P;f===!0&&(s.fromBufferAttribute(I,Z),T[k+X+0]=s.x,T[k+X+1]=s.y,T[k+X+2]=s.z,T[k+X+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),T[k+X+4]=s.x,T[k+X+5]=s.y,T[k+X+6]=s.z,T[k+X+7]=0),_===!0&&(s.fromBufferAttribute(D,Z),T[k+X+8]=s.x,T[k+X+9]=s.y,T[k+X+10]=s.z,T[k+X+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new q(x,L)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ho=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h=Ts){if(h!==Ts&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Yi),n===void 0&&h===Ds&&(n=Ls),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},od=new rn,uu=new Ho(1,1),ad=new No,ld=new ac,cd=new ko,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=du[s];if(r===void 0&&(r=new Float32Array(s),du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),ze(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;mu.set(n),i.uniformMatrix3fv(this.addr,!1,mu),ze(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;pu.set(n),i.uniformMatrix4fv(this.addr,!1,pu),ze(e,n)}}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=ed,r=uu):r=od,e.setTexture2D(t||r,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cd,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ad,s)}function $g(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Qg(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function t_(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e_(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n_(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function r_(i,t){i.uniform3iv(this.addr,t)}function o_(i,t){i.uniform4iv(this.addr,t)}function a_(i,t){i.uniform1uiv(this.addr,t)}function l_(i,t){i.uniform2uiv(this.addr,t)}function c_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function u_(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||od,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ld,r[o])}function f_(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cd,r[o])}function p_(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ad,r[o])}function m_(i){switch(i){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}},dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},dl=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function g_(i,t,e){let n=i.name,s=n.length;for(dl.lastIndex=0;;){let r=dl.exec(n),o=dl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_u(e,c===void 0?new hc(a,i,t):new uc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new dc(a),_u(e,u)),e=u}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);g_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var __=37297,x_=0;function y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var yu=new $t;function v_(i){ie._getMatrix(yu,ie.workingColorSpace,i);let t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y_(i.getShaderSource(t),o)}else return s}function M_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,t){let e;switch(t){case Df:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case Wc:e="ACESFilmic";break;case Ff:e="AgX";break;case Bf:e="Neutral";break;case Of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _o=new A;function E_(){ie.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function w_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function Mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(A_,C_)}var R_=new Map;function C_(i,t){let e=Qt[t];if(e===void 0){let n=R_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fc(e)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(P_,I_)}function I_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Su(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function L_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===aa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function D_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function N_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case If:t="ENVMAP_BLENDING_MIX";break;case Lf:t="ENVMAP_BLENDING_ADD";break}return t}function O_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=L_(e),c=D_(e),h=U_(e),u=N_(e),d=O_(e),f=S_(e),g=w_(r),_=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=fc(o),o=Mu(o,e),o=bu(o,e),a=fc(a),a=Mu(a,e),a=bu(a,e),o=Eu(o),a=Eu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+o,x=b+p+a,L=xu(s,s.VERTEX_SHADER,v),T=xu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(T).trim(),Z=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{let nt=vu(s,L,"vertex"),W=vu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+nt+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||k==="")&&(X=!1);X&&(I.diagnostics={runnable:Z,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(L),s.deleteShader(T),P=new Rs(s,_),S=T_(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,__)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}var B_=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mc(t),e.set(t,n)),n}},mc=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function k_(i,t,e,n,s,r,o){let a=new vr,l=new pc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,H,D){let k=H.fog,Z=D.geometry,X=S.isMeshStandardMaterial?H.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),W=nt&&nt.mapping===la?nt.image.height:null,ht=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vt=ft!==void 0?ft.length:0,Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let te,K,ot,xt;if(ht){let he=Bn[ht];te=he.vertexShader,K=he.fragmentShader}else te=S.vertexShader,K=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);let lt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,Ot=D.isBatchedMesh===!0,Kt=!!S.map,Q=!!S.matcap,it=!!nt,C=!!S.aoMap,St=!!S.lightMap,st=!!S.bumpMap,B=!!S.normalMap,z=!!S.displacementMap,rt=!!S.emissiveMap,et=!!S.metalnessMap,E=!!S.roughnessMap,y=S.anisotropy>0,U=S.clearcoat>0,Y=S.dispersion>0,j=S.iridescence>0,J=S.sheen>0,Et=S.transmission>0,ut=y&&!!S.anisotropyMap,Mt=U&&!!S.clearcoatMap,ee=U&&!!S.clearcoatNormalMap,at=U&&!!S.clearcoatRoughnessMap,wt=j&&!!S.iridescenceMap,Ht=j&&!!S.iridescenceThicknessMap,Vt=J&&!!S.sheenColorMap,Tt=J&&!!S.sheenRoughnessMap,ne=!!S.specularMap,jt=!!S.specularColorMap,xe=!!S.specularIntensityMap,N=Et&&!!S.transmissionMap,pt=Et&&!!S.thicknessMap,$=!!S.gradientMap,tt=!!S.alphaMap,yt=S.alphaTest>0,gt=!!S.alphaHash,Yt=!!S.extensions,Re=Ai;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Re=i.toneMapping);let qe={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:K,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:Q,envMap:it,envMapMode:it&&nt.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:St,bumpMap:st,normalMap:B,displacementMap:d&&z,emissiveMap:rt,normalMapObjectSpace:B&&S.normalMapType===Vf,normalMapTangentSpace:B&&S.normalMapType===td,metalnessMap:et,roughnessMap:E,anisotropy:y,anisotropyMap:ut,clearcoat:U,clearcoatMap:Mt,clearcoatNormalMap:ee,clearcoatRoughnessMap:at,dispersion:Y,iridescence:j,iridescenceMap:wt,iridescenceThicknessMap:Ht,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:ne,specularColorMap:jt,specularIntensityMap:xe,transmission:Et,transmissionMap:N,thicknessMap:pt,gradientMap:$,opaque:S.transparent===!1&&S.blending===sn&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:gt,combine:S.combine,mapUv:Kt&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:St&&_(S.lightMap.channel),bumpMapUv:st&&_(S.bumpMap.channel),normalMapUv:B&&_(S.normalMap.channel),displacementMapUv:z&&_(S.displacementMap.channel),emissiveMapUv:rt&&_(S.emissiveMap.channel),metalnessMapUv:et&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ut&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(S.sheenRoughnessMap.channel),specularMapUv:ne&&_(S.specularMap.channel),specularColorMapUv:jt&&_(S.specularColorMap.channel),specularIntensityMapUv:xe&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(B||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Z.attributes.uv&&(Kt||tt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:D.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:rt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(b(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let M=g[S.type],I;if(M){let H=Bn[M];I=Cp.clone(H.uniforms)}else I=S.uniforms;return I}function L(S,M){let I;for(let H=0,D=h.length;H<D;H++){let k=h[H];if(k.cacheKey===M){I=k,++I.usedTimes;break}}return I===void 0&&(I=new F_(i,M,S,r),h.push(I)),I}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function z_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||H_),n.length>1&&n.sort(d||wu),s.length>1&&s.sort(d||wu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function V_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Tu,i.set(n,[o])):s>=r.length?(o=new Tu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function G_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ut};break;case"SpotLight":e={position:new A,direction:new A,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function W_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var X_=0;function q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y_(i){let t=new G_,e=W_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new pe,o=new pe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,v=0,x=0,L=0,T=0,R=0;c.sort(q_);for(let S=0,M=c.length;S<M;S++){let I=c[S],H=I.color,D=I.intensity,k=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*D,u+=H.g*D,d+=H.b*D;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],D);R++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=X,f++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(D),X.distance=k,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[_]=X;let nt=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,nt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Z,x++}_++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(H).multiplyScalar(D),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=X,m++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let nt=I.shadow,W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(D),X.groundColor.copy(I.groundColor).multiplyScalar(D),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=R,n.version=X_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Au(i){let t=new Y_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Z_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Au(i),t.set(s,[a])):r>=o.length?(a=new Au(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var gc=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function K_(i,t,e){let n=new Mr,s=new q,r=new q,o=new fe,a=new gc({depthPacking:Hf}),l=new _c,c={},h=e.maxTextureSize,u={[Ci]:We,[We]:Ci,[Ie]:Ie},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:$_,fragmentShader:J_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ne;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ti),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=p!==si&&this.type===si,k=p===si&&this.type!==si;for(let Z=0,X=T.length;Z<X;Z++){let nt=T[Z],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||D===!0||k===!0){let vt=this.type!==si?{minFilter:_n,magFilter:_n}:{};W.map!==null&&W.map.dispose(),W.map=new hi(s.x,s.y,vt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ft=W.getViewportCount();for(let vt=0;vt<ft;vt++){let Ft=W.getViewport(vt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(o),W.updateMatrices(nt,vt),n=W.getFrustum(),x(R,P,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===si&&b(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,I)};function b(T,R){let P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,f,_,null)}function v(T,R,P,S){let M=null,I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=M.uuid,D=R.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let Z=k[D];Z===void 0&&(Z=M.clone(),k[D]=Z,R.addEventListener("dispose",L)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,S===si?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=P}return M}function x(T,R,P,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let D=t.update(T),k=T.material;if(Array.isArray(k)){let Z=D.groups;for(let X=0,nt=Z.length;X<nt;X++){let W=Z[X],ht=k[W.materialIndex];if(ht&&ht.visible){let ft=v(T,ht,S,M);T.onBeforeShadow(i,T,R,P,D,ft,W),i.renderBufferDirect(P,null,D,ft,T,W),T.onAfterShadow(i,T,R,P,D,ft,W)}}}else if(k.visible){let Z=v(T,k,S,M);T.onBeforeShadow(i,T,R,P,D,Z,null),i.renderBufferDirect(P,null,D,Z,T,null),T.onAfterShadow(i,T,R,P,D,Z,null)}}let H=T.children;for(let D=0,k=H.length;D<k;D++)x(H[D],R,P,S,M)}function L(T){T.target.removeEventListener("dispose",L);for(let P in c){let S=c[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var j_={[Ml]:bl,[El]:Tl,[Sl]:Al,[Cs]:wl,[bl]:Ml,[Tl]:El,[Al]:Sl,[wl]:Cs};function Q_(i,t){function e(){let N=!1,pt=new fe,$=null,tt=new fe(0,0,0,0);return{setMask:function(yt){$!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){N=yt},setClear:function(yt,gt,Yt,Re,qe){qe===!0&&(yt*=Re,gt*=Re,Yt*=Re),pt.set(yt,gt,Yt,Re),tt.equals(pt)===!1&&(i.clearColor(yt,gt,Yt,Re),tt.copy(pt))},reset:function(){N=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,$=null,tt=null,yt=null;return{setReversed:function(gt){if(pt!==gt){let Yt=t.get("EXT_clip_control");pt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Re=yt;yt=null,this.setClear(Re)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(gt){$!==gt&&!N&&(i.depthMask(gt),$=gt)},setFunc:function(gt){if(pt&&(gt=j_[gt]),tt!==gt){switch(gt){case Ml:i.depthFunc(i.NEVER);break;case bl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=gt}},setLocked:function(gt){N=gt},setClear:function(gt){yt!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),yt=gt)},reset:function(){N=!1,$=null,tt=null,yt=null,pt=!1}}}function s(){let N=!1,pt=null,$=null,tt=null,yt=null,gt=null,Yt=null,Re=null,qe=null;return{setTest:function(he){N||(he?lt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(he){pt!==he&&!N&&(i.stencilMask(he),pt=he)},setFunc:function(he,wn,Kn){($!==he||tt!==wn||yt!==Kn)&&(i.stencilFunc(he,wn,Kn),$=he,tt=wn,yt=Kn)},setOp:function(he,wn,Kn){(gt!==he||Yt!==wn||Re!==Kn)&&(i.stencilOp(he,wn,Kn),gt=he,Yt=wn,Re=Kn)},setLocked:function(he){N=he},setClear:function(he){qe!==he&&(i.clearStencil(he),qe=he)},reset:function(){N=!1,pt=null,$=null,tt=null,yt=null,gt=null,Yt=null,Re=null,qe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,L=null,T=null,R=new Ut(0,0,0),P=0,S=!1,M=null,I=null,H=null,D=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=nt>=2);let ht=null,ft={},vt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),te=new fe().fromArray(vt),K=new fe().fromArray(Ft);function ot(N,pt,$,tt){let yt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<$;Yt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(pt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return gt}let xt={};xt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Cs),st(!1),B(Ph),lt(i.CULL_FACE),C(Ti);function lt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Pt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Bt(N,pt){return u[N]!==pt?(i.bindFramebuffer(N,pt),u[N]=pt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ot(N,pt){let $=f,tt=!1;if(N){$=d.get(pt),$===void 0&&($=[],d.set(pt,$));let yt=N.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Yt=yt.length;gt<Yt;gt++)$[gt]=i.COLOR_ATTACHMENT0+gt;$.length=yt.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function Kt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Q={[Gi]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};Q[gf]=i.MIN,Q[_f]=i.MAX;let it={[xf]:i.ZERO,[yf]:i.ONE,[vf]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,pt,$,tt,yt,gt,Yt,Re,qe,he){if(N===Ti){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),N!==ff){if(N!==m||he!==S){if((p!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,x=Gi),he)switch(N){case sn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,v=null,L=null,T=null,R.set(0,0,0),P=0,m=N,S=he}return}yt=yt||pt,gt=gt||$,Yt=Yt||tt,(pt!==p||yt!==x)&&(i.blendEquationSeparate(Q[pt],Q[yt]),p=pt,x=yt),($!==b||tt!==v||gt!==L||Yt!==T)&&(i.blendFuncSeparate(it[$],it[tt],it[gt],it[Yt]),b=$,v=tt,L=gt,T=Yt),(Re.equals(R)===!1||qe!==P)&&(i.blendColor(Re.r,Re.g,Re.b,qe),R.copy(Re),P=qe),m=N,S=!1}function St(N,pt){N.side===Ie?Pt(i.CULL_FACE):lt(i.CULL_FACE);let $=N.side===We;pt&&($=!$),st($),N.blending===sn&&N.transparent===!1?C(Ti):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function B(N){N!==uf?(lt(i.CULL_FACE),N!==I&&(N===Ph?i.cullFace(i.BACK):N===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),I=N}function z(N){N!==H&&(X&&i.lineWidth(N),H=N)}function rt(N,pt,$){N?(lt(i.POLYGON_OFFSET_FILL),(D!==pt||k!==$)&&(i.polygonOffset(pt,$),D=pt,k=$)):Pt(i.POLYGON_OFFSET_FILL)}function et(N){N?lt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function E(N){N===void 0&&(N=i.TEXTURE0+Z-1),ht!==N&&(i.activeTexture(N),ht=N)}function y(N,pt,$){$===void 0&&(ht===null?$=i.TEXTURE0+Z-1:$=ht);let tt=ft[$];tt===void 0&&(tt={type:void 0,texture:void 0},ft[$]=tt),(tt.type!==N||tt.texture!==pt)&&(ht!==$&&(i.activeTexture($),ht=$),i.bindTexture(N,pt||xt[N]),tt.type=N,tt.texture=pt)}function U(){let N=ft[ht];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){te.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function Tt(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function ne(N,pt){let $=c.get(pt);$===void 0&&($=new WeakMap,c.set(pt,$));let tt=$.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(pt,N.name),$.set(N,tt))}function jt(N,pt){let tt=c.get(pt).get(N);l.get(pt)!==tt&&(i.uniformBlockBinding(pt,tt,N.__bindingPointIndex),l.set(pt,tt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,ft={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,v=null,x=null,L=null,T=null,R=new Ut(0,0,0),P=0,S=!1,M=null,I=null,H=null,D=null,k=null,te.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Pt,bindFramebuffer:Bt,drawBuffers:Ot,useProgram:Kt,setBlending:C,setMaterial:St,setFlipSided:st,setCullFace:B,setLineWidth:z,setPolygonOffset:rt,setScissorTest:et,activeTexture:E,bindTexture:y,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:wt,texImage3D:Ht,updateUBOMapping:ne,uniformBlockBinding:jt,texStorage2D:ee,texStorage3D:at,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:Mt,scissor:Vt,viewport:Tt,reset:xe}}function Ru(i,t,e,n){let s=tx(n);switch(e){case Zu:return i*t;case Ju:return i*t;case Ku:return i*t*2;case Zc:return i*t/s.components*s.byteLength;case $c:return i*t/s.components*s.byteLength;case ju:return i*t*2/s.components*s.byteLength;case Jc:return i*t*2/s.components*s.byteLength;case $u:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Kc:return i*t*4/s.components*s.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Ul:return Math.max(i,16)*Math.max(t,8)/4;case Il:case Dl:return Math.max(i,8)*Math.max(t,8)/2;case Nl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Po:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qu:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tx(i){switch(i){case li:case Xu:return{byteLength:1,components:1};case xr:case qu:case Pr:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case Yi:case Xc:case zn:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ex(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Do("canvas")}function _(E,y,U){let Y=1,j=et(E);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let J=Math.floor(Y*j.width),Et=Math.floor(Y*j.height);u===void 0&&(u=g(J,Et));let ut=y?g(J,Et):u;return ut.width=J,ut.height=Et,ut.getContext("2d").drawImage(E,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+Et+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,y,U,Y,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=y;if(y===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),y===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RG8UI),U===i.UNSIGNED_SHORT&&(J=i.RG16UI),U===i.UNSIGNED_INT&&(J=i.RG32UI),U===i.BYTE&&(J=i.RG8I),U===i.SHORT&&(J=i.RG16I),U===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGB8UI),U===i.UNSIGNED_SHORT&&(J=i.RGB16UI),U===i.UNSIGNED_INT&&(J=i.RGB32UI),U===i.BYTE&&(J=i.RGB8I),U===i.SHORT&&(J=i.RGB16I),U===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),U===i.UNSIGNED_INT&&(J=i.RGBA32UI),U===i.BYTE&&(J=i.RGBA8I),U===i.SHORT&&(J=i.RGBA16I),U===i.INT&&(J=i.RGBA32I)),y===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){let Et=j?ca:ie.getTransfer(Y);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=Et===de?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(E,y){let U;return E?y===null||y===Yi||y===Ls?U=i.DEPTH24_STENCIL8:y===zn?U=i.DEPTH32F_STENCIL8:y===xr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===Ls?U=i.DEPTH_COMPONENT24:y===zn?U=i.DEPTH_COMPONENT32F:y===xr&&(U=i.DEPTH_COMPONENT16),U}function L(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==_n&&E.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){let y=E.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function R(E){let y=E.target;y.removeEventListener("dispose",R),M(y)}function P(E){let y=n.get(E);if(y.__webglInit===void 0)return;let U=E.source,Y=d.get(U);if(Y){let j=Y[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(E),Object.keys(Y).length===0&&d.delete(U)}n.remove(E)}function S(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let U=E.source,Y=d.get(U);delete Y[y.__cacheKey],o.memory.textures--}function M(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let j=0;j<y.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=E.textures;for(let Y=0,j=U.length;Y<j;Y++){let J=n.get(U[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(U[Y])}n.remove(E)}let I=0;function H(){I=0}function D(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function k(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Z(E,y){let U=n.get(E);if(E.isVideoTexture&&z(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,E,y);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+y)}function X(E,y){let U=n.get(E);if(E.version>0&&U.__version!==E.version){K(U,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+y)}function nt(E,y){let U=n.get(E);if(E.version>0&&U.__version!==E.version){K(U,E,y);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+y)}function W(E,y){let U=n.get(E);if(E.version>0&&U.__version!==E.version){ot(U,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+y)}let ht={[Pi]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Pl]:i.MIRRORED_REPEAT},ft={[_n]:i.NEAREST,[kf]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},vt={[Gf]:i.NEVER,[$f]:i.ALWAYS,[Wf]:i.LESS,[ed]:i.LEQUAL,[Xf]:i.EQUAL,[Zf]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function Ft(E,y){if(y.type===zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===ka||y.magFilter===Jr||y.magFilter===qi||y.minFilter===kn||y.minFilter===ka||y.minFilter===Jr||y.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ht[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ht[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ht[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==Jr&&y.minFilter!==qi||y.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function te(E,y){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));let Y=y.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let J=k(y);if(J!==E.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[J].usedTimes++;let Et=j[E.__cacheKey];Et!==void 0&&(j[E.__cacheKey].usedTimes--,Et.usedTimes===0&&S(y)),E.__cacheKey=J,E.__webglTexture=j[J].texture}return U}function K(E,y,U){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let j=te(E,y),J=y.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+U);let Et=n.get(J);if(J.version!==Et.__version||j===!0){e.activeTexture(i.TEXTURE0+U);let ut=ie.getPrimaries(ie.workingColorSpace),Mt=y.colorSpace===Si?null:ie.getPrimaries(y.colorSpace),ee=y.colorSpace===Si||ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let at=_(y.image,!1,s.maxTextureSize);at=rt(y,at);let wt=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type),Vt=v(y.internalFormat,wt,Ht,y.colorSpace,y.isVideoTexture);Ft(Y,y);let Tt,ne=y.mipmaps,jt=y.isVideoTexture!==!0,xe=Et.__version===void 0||j===!0,N=J.dataReady,pt=L(y,at);if(y.isDepthTexture)Vt=x(y.format===Ds,y.type),xe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Vt,at.width,at.height,0,wt,Ht,null));else if(y.isDataTexture)if(ne.length>0){jt&&xe&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,ne[0].width,ne[0].height);for(let $=0,tt=ne.length;$<tt;$++)Tt=ne[$],jt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,Ht,Tt.data):e.texImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,wt,Ht,Tt.data);y.generateMipmaps=!1}else jt?(xe&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,at.width,at.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,wt,Ht,at.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,at.width,at.height,0,wt,Ht,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){jt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,ne[0].width,ne[0].height,at.depth);for(let $=0,tt=ne.length;$<tt;$++)if(Tt=ne[$],y.format!==In)if(wt!==null)if(jt){if(N)if(y.layerUpdates.size>0){let yt=Ru(Tt.width,Tt.height,y.format,y.type);for(let gt of y.layerUpdates){let Yt=Tt.data.subarray(gt*yt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*yt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,gt,Tt.width,Tt.height,1,wt,Yt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,at.depth,wt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Vt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,at.depth,wt,Ht,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Vt,Tt.width,Tt.height,at.depth,0,wt,Ht,Tt.data)}else{jt&&xe&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,ne[0].width,ne[0].height);for(let $=0,tt=ne.length;$<tt;$++)Tt=ne[$],y.format!==In?wt!==null?jt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,Ht,Tt.data):e.texImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,wt,Ht,Tt.data)}else if(y.isDataArrayTexture)if(jt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,at.width,at.height,at.depth),N)if(y.layerUpdates.size>0){let $=Ru(at.width,at.height,y.format,y.type);for(let tt of y.layerUpdates){let yt=at.data.subarray(tt*$/at.data.BYTES_PER_ELEMENT,(tt+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,wt,Ht,yt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Ht,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,at.width,at.height,at.depth,0,wt,Ht,at.data);else if(y.isData3DTexture)jt?(xe&&e.texStorage3D(i.TEXTURE_3D,pt,Vt,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Ht,at.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,at.width,at.height,at.depth,0,wt,Ht,at.data);else if(y.isFramebufferTexture){if(xe)if(jt)e.texStorage2D(i.TEXTURE_2D,pt,Vt,at.width,at.height);else{let $=at.width,tt=at.height;for(let yt=0;yt<pt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Vt,$,tt,0,wt,Ht,null),$>>=1,tt>>=1}}else if(ne.length>0){if(jt&&xe){let $=et(ne[0]);e.texStorage2D(i.TEXTURE_2D,pt,Vt,$.width,$.height)}for(let $=0,tt=ne.length;$<tt;$++)Tt=ne[$],jt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Ht,Tt):e.texImage2D(i.TEXTURE_2D,$,Vt,wt,Ht,Tt);y.generateMipmaps=!1}else if(jt){if(xe){let $=et(at);e.texStorage2D(i.TEXTURE_2D,pt,Vt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,at)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,Ht,at);m(y)&&p(Y),Et.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ot(E,y,U){if(y.image.length!==6)return;let Y=te(E,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);let J=n.get(j);if(j.version!==J.__version||Y===!0){e.activeTexture(i.TEXTURE0+U);let Et=ie.getPrimaries(ie.workingColorSpace),ut=y.colorSpace===Si?null:ie.getPrimaries(y.colorSpace),Mt=y.colorSpace===Si||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ee=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let tt=0;tt<6;tt++)!ee&&!at?wt[tt]=_(y.image[tt],!0,s.maxCubemapSize):wt[tt]=at?y.image[tt].image:y.image[tt],wt[tt]=rt(y,wt[tt]);let Ht=wt[0],Vt=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),ne=v(y.internalFormat,Vt,Tt,y.colorSpace),jt=y.isVideoTexture!==!0,xe=J.__version===void 0||Y===!0,N=j.dataReady,pt=L(y,Ht);Ft(i.TEXTURE_CUBE_MAP,y);let $;if(ee){jt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ne,Ht.width,Ht.height);for(let tt=0;tt<6;tt++){$=wt[tt].mipmaps;for(let yt=0;yt<$.length;yt++){let gt=$[yt];y.format!==In?Vt!==null?jt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,gt.width,gt.height,Vt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ne,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,gt.width,gt.height,Vt,Tt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ne,gt.width,gt.height,0,Vt,Tt,gt.data)}}}else{if($=y.mipmaps,jt&&xe){$.length>0&&pt++;let tt=et(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ne,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt[tt].width,wt[tt].height,Vt,Tt,wt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,wt[tt].width,wt[tt].height,0,Vt,Tt,wt[tt].data);for(let yt=0;yt<$.length;yt++){let Yt=$[yt].image[tt].image;jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Yt.width,Yt.height,Vt,Tt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ne,Yt.width,Yt.height,0,Vt,Tt,Yt.data)}}else{jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Vt,Tt,wt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,Vt,Tt,wt[tt]);for(let yt=0;yt<$.length;yt++){let gt=$[yt];jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Vt,Tt,gt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ne,Vt,Tt,gt.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xt(E,y,U,Y,j,J){let Et=r.convert(U.format,U.colorSpace),ut=r.convert(U.type),Mt=v(U.internalFormat,Et,ut,U.colorSpace),ee=n.get(y),at=n.get(U);if(at.__renderTarget=y,!ee.__hasExternalTextures){let wt=Math.max(1,y.width>>J),Ht=Math.max(1,y.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,J,Mt,wt,Ht,y.depth,0,Et,ut,null):e.texImage2D(j,J,Mt,wt,Ht,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),B(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,at.__webglTexture,0,st(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,y,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let Y=y.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,J=x(y.stencilBuffer,j),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=st(y);B(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{let Y=y.textures;for(let j=0;j<Y.length;j++){let J=Y[j],Et=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),Mt=v(J.internalFormat,Et,ut,J.colorSpace),ee=st(y);U&&B(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Mt,y.width,y.height):B(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let j=Y.__webglTexture,J=st(y);if(y.depthTexture.format===Ts)B(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===Ds)B(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Bt(E){let y=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Y}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Pt(y.__webglFramebuffer,E)}else if(U){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[Y],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(E,y,U){let Y=n.get(E);y!==void 0&&xt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Bt(E)}function Kt(E){let y=E.texture,U=n.get(E),Y=n.get(y);E.addEventListener("dispose",R);let j=E.textures,J=E.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),J){U.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ut]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)U.__webglFramebuffer[ut][Mt]=i.createFramebuffer()}else U.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)U.__webglFramebuffer[ut]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,Mt=j.length;ut<Mt;ut++){let ee=n.get(j[ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&B(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){let Mt=j[ut];U.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ut]);let ee=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),wt=v(Mt.internalFormat,ee,at,Mt.colorSpace,E.isXRRenderTarget===!0),Ht=st(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,U.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)xt(U.__webglFramebuffer[ut][Mt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt);else xt(U.__webglFramebuffer[ut],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,Mt=j.length;ut<Mt;ut++){let ee=j[ut],at=n.get(ee);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Ft(i.TEXTURE_2D,ee),xt(U.__webglFramebuffer,E,ee,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),Ft(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)xt(U.__webglFramebuffer[Mt],E,y,i.COLOR_ATTACHMENT0,ut,Mt);else xt(U.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}E.depthBuffer&&Bt(E)}function Q(E){let y=E.textures;for(let U=0,Y=y.length;U<Y;U++){let j=y[U];if(m(j)){let J=b(E),Et=n.get(j).__webglTexture;e.bindTexture(J,Et),p(J),e.unbindTexture()}}}let it=[],C=[];function St(E){if(E.samples>0){if(B(E)===!1){let y=E.textures,U=E.width,Y=E.height,j=i.COLOR_BUFFER_BIT,J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),ut=y.length>1;if(ut)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let ee=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,i.NEAREST),l===!0&&(it.length=0,C.length=0,it.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(it.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let ee=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function st(E){return Math.min(s.maxSamples,E.samples)}function B(E){let y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function rt(E,y){let U=E.colorSpace,Y=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Vs&&U!==Si&&(ie.getTransfer(U)===de?(Y!==In||j!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=B}function nx(i,t){function e(n,s=Si){let r,o=ie.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.BYTE;if(n===qu)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===$u)return i.RGB;if(n===In)return i.RGBA;if(n===Ju)return i.LUMINANCE;if(n===Ku)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===ju)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Kc)return i.RGBA_INTEGER;if(n===To||n===Ao||n===Ro||n===Co)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ll||n===Dl||n===Ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ol||n===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Ol)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===jl||n===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===tc||n===ec||n===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},kt=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Gn({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new yc,m=e.getContextAttributes(),p=null,b=null,v=[],x=[],L=new q,T=null,R=new $e;R.viewport=new fe;let P=new $e;P.viewport=new fe;let S=[R,P],M=new xc,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=v[K];return ot===void 0&&(ot=new mr,v[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=v[K];return ot===void 0&&(ot=new mr,v[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=v[K];return ot===void 0&&(ot=new mr,v[K]=ot),ot.getHandSpace()};function D(K){let ot=x.indexOf(K.inputSource);if(ot===-1)return;let xt=v[ot];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<v.length;K++){let ot=x[K];ot!==null&&(x[K]=null,v[K].disconnect(ot))}I=null,H=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new hi(f.framebufferWidth,f.framebufferHeight,{format:In,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ds:Ts,xt=m.stencil?Ls:Yi);let Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new hi(d.textureWidth,d.textureHeight,{format:In,type:li,depthTexture:new Ho(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let ot=0;ot<K.removed.length;ot++){let xt=K.removed[ot],lt=x.indexOf(xt);lt>=0&&(x[lt]=null,v[lt].disconnect(xt))}for(let ot=0;ot<K.added.length;ot++){let xt=K.added[ot],lt=x.indexOf(xt);if(lt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=x.length){x.push(xt),lt=Bt;break}else if(x[Bt]===null){x[Bt]=xt,lt=Bt;break}if(lt===-1)break}let Pt=v[lt];Pt&&Pt.connect(xt)}}let X=new A,nt=new A;function W(K,ot,xt){X.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let lt=X.distanceTo(nt),Pt=ot.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,Ot=Pt[14]/(Pt[10]-1),Kt=Pt[14]/(Pt[10]+1),Q=(Pt[9]+1)/Pt[5],it=(Pt[9]-1)/Pt[5],C=(Pt[8]-1)/Pt[0],St=(Bt[8]+1)/Bt[0],st=Ot*C,B=Ot*St,z=lt/(-C+St),rt=z*-C;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(z),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let et=Ot+z,E=Kt+z,y=st-rt,U=B+(lt-rt),Y=Q*Kt/E*et,j=it*Kt/E*et;K.projectionMatrix.makePerspective(y,U,Y,j,et,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,xt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=P.near=R.near=ot,M.far=P.far=R.far=xt,(I!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,H=M.far),R.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let lt=K.parent,Pt=M.cameras;ht(M,lt);for(let Bt=0;Bt<Pt.length;Bt++)ht(Pt[Bt],lt);Pt.length===2?W(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),ft(K,M,lt)};function ft(K,ot,xt){xt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let vt=null;function Ft(K,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let lt=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Bt=0;Bt<xt.length;Bt++){let Ot=xt[Bt],Kt=null;if(f!==null)Kt=f.getViewport(Ot);else{let it=u.getViewSubImage(d,Ot);Kt=it.viewport,Bt===0&&(t.setRenderTargetTextures(b,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(b))}let Q=S[Bt];Q===void 0&&(Q=new $e,Q.layers.enable(Bt),Q.viewport=new fe,S[Bt]=Q),Q.matrix.fromArray(Ot.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ot.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Bt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Q)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Bt=u.getDepthInformation(xt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let xt=0;xt<v.length;xt++){let lt=x[xt],Pt=v[xt];lt!==null&&Pt!==void 0&&Pt.update(lt,ot,c||o)}vt&&vt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let te=new rd;te.setAnimationLoop(Ft),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}},Hi=new Vn,ox=new pe;function ax(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Hi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let L=v.program;n.updateUBOMapping(b,L);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let v=u();b.__bindingPointIndex=v;let x=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],x=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,R=x.length;T<R;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=P.length;S<M;S++){let I=P[S];if(f(I,T,S,L)===!0){let H=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],k=0;for(let Z=0;Z<D.length;Z++){let X=D[Z],nt=_(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+k,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,x,L){let T=b.value,R=v+"_"+x;if(L[R]===void 0)return typeof T=="number"||typeof T=="boolean"?L[R]=T:L[R]=T.clone(),!0;{let P=L[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){let v=b.uniforms,x=0,L=16;for(let R=0,P=v.length;R<P;R++){let S=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,I=S.length;M<I;M++){let H=S[M],D=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Z=D.length;k<Z;k++){let X=D[k],nt=_(X),W=x%L,ht=W%nt.boundary,ft=W+ht;x+=ht,ft!==0&&L-ft<nt.storage&&(x+=L-ft),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=nt.storage}}}let T=x%L;return T>0&&(x+=L-T),b.__size=x,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Vo=class{constructor(t={}){let{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Ai,this.toneMappingExposure=1;let x=this,L=!1,T=0,R=0,P=null,S=-1,M=null,I=new fe,H=new fe,D=null,k=new Ut(0),Z=0,X=e.width,nt=e.height,W=1,ht=null,ft=null,vt=new fe(0,0,X,nt),Ft=new fe(0,0,X,nt),te=!1,K=new Mr,ot=!1,xt=!1,lt=new pe,Pt=new pe,Bt=new A,Ot=new fe,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function it(){return P===null?W:1}let C=n;function St(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),C===null){let O="webgl2";if(C=St(O,w),C===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,B,z,rt,et,E,y,U,Y,j,J,Et,ut,Mt,ee,at,wt,Ht,Vt,Tt,ne,jt,xe,N;function pt(){st=new Sg(C),st.init(),jt=new nx(C,st),B=new xg(C,st,t,jt),z=new Q_(C,st),B.reverseDepthBuffer&&d&&z.buffers.depth.setReversed(!0),rt=new Ag(C),et=new z_,E=new ex(C,st,z,et,B,jt,rt),y=new vg(x),U=new Eg(x),Y=new Up(C),xe=new gg(C,Y),j=new wg(C,Y,rt,xe),J=new Cg(C,j,Y,rt),Vt=new Rg(C,B,E),at=new yg(et),Et=new k_(x,y,U,st,B,xe,at),ut=new ax(x,et),Mt=new V_,ee=new Z_(st),Ht=new mg(x,y,U,z,J,f,l),wt=new K_(x,J,B),N=new lx(C,rt,B,z),Tt=new _g(C,st,rt),ne=new Tg(C,st,rt),rt.programs=Et.programs,x.capabilities=B,x.extensions=st,x.properties=et,x.renderLists=Mt,x.shadowMap=wt,x.state=z,x.info=rt}pt();let $=new vc(x,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(X,nt,!1))},this.getSize=function(w){return w.set(X,nt)},this.setSize=function(w,O,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,nt=O,e.width=Math.floor(w*W),e.height=Math.floor(O*W),V===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*W,nt*W).floor()},this.setDrawingBufferSize=function(w,O,V){X=w,nt=O,W=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,O,V,G){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,O,V,G),z.viewport(I.copy(vt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,O,V,G){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,O,V,G),z.scissor(H.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){z.setScissorTest(te=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(w=!0,O=!0,V=!0){let G=0;if(w){let F=!1;if(P!==null){let ct=P.texture.format;F=ct===Kc||ct===Jc||ct===$c}if(F){let ct=P.texture.type,_t=ct===li||ct===Yi||ct===xr||ct===Ls||ct===qc||ct===Yc,It=Ht.getClearColor(),Lt=Ht.getClearAlpha(),Gt=It.r,Zt=It.g,Dt=It.b;_t?(g[0]=Gt,g[1]=Zt,g[2]=Dt,g[3]=Lt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Gt,_[1]=Zt,_[2]=Dt,_[3]=Lt,C.clearBufferiv(C.COLOR,0,_))}else G|=C.COLOR_BUFFER_BIT}O&&(G|=C.DEPTH_BUFFER_BIT),V&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),ee.dispose(),et.dispose(),y.dispose(),U.dispose(),J.dispose(),xe.dispose(),N.dispose(),Et.dispose(),$.dispose(),$.removeEventListener("sessionstart",bh),$.removeEventListener("sessionend",Eh),Ni.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let w=rt.autoReset,O=wt.enabled,V=wt.autoUpdate,G=wt.needsUpdate,F=wt.type;pt(),rt.autoReset=w,wt.enabled=O,wt.autoUpdate=V,wt.needsUpdate=G,wt.type=F}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){let O=w.target;O.removeEventListener("dispose",Yt),Re(O)}function Re(w){qe(w),et.remove(w)}function qe(w){let O=et.get(w).programs;O!==void 0&&(O.forEach(function(V){Et.releaseProgram(V)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,G,F,ct){O===null&&(O=Kt);let _t=F.isMesh&&F.matrixWorld.determinant()<0,It=lf(w,O,V,G,F);z.setMaterial(G,_t);let Lt=V.index,Gt=1;if(G.wireframe===!0){if(Lt=j.getWireframeAttribute(V),Lt===void 0)return;Gt=2}let Zt=V.drawRange,Dt=V.attributes.position,oe=Zt.start*Gt,ye=(Zt.start+Zt.count)*Gt;ct!==null&&(oe=Math.max(oe,ct.start*Gt),ye=Math.min(ye,(ct.start+ct.count)*Gt)),Lt!==null?(oe=Math.max(oe,0),ye=Math.min(ye,Lt.count)):Dt!=null&&(oe=Math.max(oe,0),ye=Math.min(ye,Dt.count));let Me=ye-oe;if(Me<0||Me===1/0)return;xe.setup(F,G,It,V,Lt);let nn,le=Tt;if(Lt!==null&&(nn=Y.get(Lt),le=ne,le.setIndex(nn)),F.isMesh)G.wireframe===!0?(z.setLineWidth(G.wireframeLinewidth*it()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(F.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),z.setLineWidth(Nt*it()),F.isLineSegments?le.setMode(C.LINES):F.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else F.isPoints?le.setMode(C.POINTS):F.isSprite&&le.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Nt=F._multiDrawStarts,jn=F._multiDrawCounts,ce=F._multiDrawCount,Tn=Lt?Y.get(Lt).bytesPerElement:1,ss=et.get(G).currentProgram.getUniforms();for(let fn=0;fn<ce;fn++)ss.setValue(C,"_gl_DrawID",fn),le.render(Nt[fn]/Tn,jn[fn])}else if(F.isInstancedMesh)le.renderInstances(oe,Me,F.count);else if(V.isInstancedBufferGeometry){let Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jn=Math.min(V.instanceCount,Nt);le.renderInstances(oe,Me,jn)}else le.render(oe,Me)};function he(w,O,V){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,$r(w,O,V),w.side=Ci,w.needsUpdate=!0,$r(w,O,V),w.side=Ie):$r(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),p=ee.get(V),p.init(O),v.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let It=ct[_t];he(It,V,F),G.add(It)}else he(ct,V,F),G.add(ct)}),v.pop(),p=null,G},this.compileAsync=function(w,O,V=null){let G=this.compile(w,O,V);return new Promise(F=>{function ct(){if(G.forEach(function(_t){et.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){F(w);return}setTimeout(ct,10)}st.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let wn=null;function Kn(w){wn&&wn(w)}function bh(){Ni.stop()}function Eh(){Ni.start()}let Ni=new rd;Ni.setAnimationLoop(Kn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){wn=w,$.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},$.addEventListener("sessionstart",bh),$.addEventListener("sessionend",Eh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,P),p=ee.get(w,v.length),p.init(O),v.push(p),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Pt),xt=this.localClippingEnabled,ot=at.init(this.clippingPlanes,xt),m=Mt.get(w,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){let ct=x.xr.getDepthSensingMesh();ct!==null&&Ba(ct,O,-1/0,x.sortObjects)}Ba(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,ft),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Ht.addToRenderList(m,w),this.info.render.frame++,ot===!0&&at.beginShadows();let V=p.state.shadowsArray;wt.render(V,w,O),ot===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ct=O.cameras;if(F.length>0)for(let _t=0,It=ct.length;_t<It;_t++){let Lt=ct[_t];wh(G,F,w,Lt)}Q&&Ht.render(w);for(let _t=0,It=ct.length;_t<It;_t++){let Lt=ct[_t];Sh(m,w,Lt,Lt.viewport)}}else F.length>0&&wh(G,F,w,O),Q&&Ht.render(w),Sh(m,w,O);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,O),xe.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ot===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ba(w,O,V,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){G&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let _t=J.update(w),It=w.material;It.visible&&m.push(w,_t,It,V,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let _t=J.update(w),It=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(It)){let Lt=_t.groups;for(let Gt=0,Zt=Lt.length;Gt<Zt;Gt++){let Dt=Lt[Gt],oe=It[Dt.materialIndex];oe&&oe.visible&&m.push(w,_t,oe,V,Ot.z,Dt)}}else It.visible&&m.push(w,_t,It,V,Ot.z,null)}}let ct=w.children;for(let _t=0,It=ct.length;_t<It;_t++)Ba(ct[_t],O,V,G)}function Sh(w,O,V,G){let F=w.opaque,ct=w.transmissive,_t=w.transparent;p.setupLightsView(V),ot===!0&&at.setGlobalState(x.clippingPlanes,V),G&&z.viewport(I.copy(G)),F.length>0&&Zr(F,O,V),ct.length>0&&Zr(ct,O,V),_t.length>0&&Zr(_t,O,V),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function wh(w,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Pr:li,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ct=p.state.transmissionRenderTarget[G.id],_t=G.viewport||I;ct.setSize(_t.z,_t.w);let It=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(k),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ht.render(V);let Lt=x.toneMapping;x.toneMapping=Ai;let Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ot===!0&&at.setGlobalState(x.clippingPlanes,G),Zr(w,V,G),E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct),st.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Dt=0,oe=O.length;Dt<oe;Dt++){let ye=O[Dt],Me=ye.object,nn=ye.geometry,le=ye.material,Nt=ye.group;if(le.side===Ie&&Me.layers.test(G.layers)){let jn=le.side;le.side=We,le.needsUpdate=!0,Th(Me,V,G,nn,le,Nt),le.side=jn,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct))}x.setRenderTarget(It),x.setClearColor(k,Z),Gt!==void 0&&(G.viewport=Gt),x.toneMapping=Lt}function Zr(w,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ct=w.length;F<ct;F++){let _t=w[F],It=_t.object,Lt=_t.geometry,Gt=G===null?_t.material:G,Zt=_t.group;It.layers.test(V.layers)&&Th(It,O,V,Lt,Gt,Zt)}}function Th(w,O,V,G,F,ct){w.onBeforeRender(x,O,V,G,F,ct),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,O,V,G,w,ct),F.transparent===!0&&F.side===Ie&&F.forceSinglePass===!1?(F.side=We,F.needsUpdate=!0,x.renderBufferDirect(V,O,G,F,w,ct),F.side=Ci,F.needsUpdate=!0,x.renderBufferDirect(V,O,G,F,w,ct),F.side=Ie):x.renderBufferDirect(V,O,G,F,w,ct),w.onAfterRender(x,O,V,G,F,ct)}function $r(w,O,V){O.isScene!==!0&&(O=Kt);let G=et.get(w),F=p.state.lights,ct=p.state.shadowsArray,_t=F.state.version,It=Et.getParameters(w,F.state,ct,O,V),Lt=Et.getProgramCacheKey(It),Gt=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?U:y).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Yt),Gt=new Map,G.programs=Gt);let Zt=Gt.get(Lt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===_t)return Rh(w,It),Zt}else It.uniforms=Et.getUniforms(w),w.onBeforeCompile(It,x),Zt=Et.acquireProgram(It,Lt),Gt.set(Lt,Zt),G.uniforms=It.uniforms;let Dt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=at.uniform),Rh(w,It),G.needsLights=hf(w),G.lightsStateVersion=_t,G.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Zt,G.uniformsList=null,Zt}function Ah(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Rh(w,O){let V=et.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function lf(w,O,V,G,F){O.isScene!==!0&&(O=Kt),E.resetTextureUnits();let ct=O.fog,_t=G.isMeshStandardMaterial?O.environment:null,It=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vs,Lt=(G.isMeshStandardMaterial?U:y).get(G.envMap||_t),Gt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!V.morphAttributes.position,oe=!!V.morphAttributes.normal,ye=!!V.morphAttributes.color,Me=Ai;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=x.toneMapping);let nn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=nn!==void 0?nn.length:0,Nt=et.get(G),jn=p.state.lights;if(ot===!0&&(xt===!0||w!==M)){let vn=w===M&&G.id===S;at.setState(G,w,vn)}let ce=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==jn.state.version||Nt.outputColorSpace!==It||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==Lt||G.fog===!0&&Nt.fog!==ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==at.numPlanes||Nt.numIntersection!==at.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Zt||Nt.morphTargets!==Dt||Nt.morphNormals!==oe||Nt.morphColors!==ye||Nt.toneMapping!==Me||Nt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Nt.__version=G.version);let Tn=Nt.currentProgram;ce===!0&&(Tn=$r(G,O,F));let ss=!1,fn=!1,Qs=!1,be=Tn.getUniforms(),Fn=Nt.uniforms;if(z.useProgram(Tn.program)&&(ss=!0,fn=!0,Qs=!0),G.id!==S&&(S=G.id,fn=!0),ss||M!==w){z.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),pp(lt),mp(lt),be.setValue(C,"projectionMatrix",lt)):be.setValue(C,"projectionMatrix",w.projectionMatrix),be.setValue(C,"viewMatrix",w.matrixWorldInverse);let gi=be.map.cameraPosition;gi!==void 0&&gi.setValue(C,Bt.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&be.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,fn=!0,Qs=!0)}if(F.isSkinnedMesh){be.setOptional(C,F,"bindMatrix"),be.setOptional(C,F,"bindMatrixInverse");let vn=F.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),be.setValue(C,"boneTexture",vn.boneTexture,E))}F.isBatchedMesh&&(be.setOptional(C,F,"batchingTexture"),be.setValue(C,"batchingTexture",F._matricesTexture,E),be.setOptional(C,F,"batchingIdTexture"),be.setValue(C,"batchingIdTexture",F._indirectTexture,E),be.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(C,"batchingColorTexture",F._colorsTexture,E));let tr=V.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Vt.update(F,V,Tn),(fn||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,be.setValue(C,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=Lt,Fn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Fn.envMapIntensity.value=O.environmentIntensity),fn&&(be.setValue(C,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&cf(Fn,Qs),ct&&G.fog===!0&&ut.refreshFogUniforms(Fn,ct),ut.refreshMaterialUniforms(Fn,G,W,nt,p.state.transmissionRenderTarget[w.id]),Rs.upload(C,Ah(Nt),Fn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rs.upload(C,Ah(Nt),Fn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(C,"center",F.center),be.setValue(C,"modelViewMatrix",F.modelViewMatrix),be.setValue(C,"normalMatrix",F.normalMatrix),be.setValue(C,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let vn=G.uniformsGroups;for(let gi=0,_i=vn.length;gi<_i;gi++){let Ch=vn[gi];N.update(Ch,Tn),N.bind(Ch,Tn)}}return Tn}function cf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function hf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,V){et.get(w.texture).__webglTexture=O,et.get(w.depthTexture).__webglTexture=V;let G=et.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let V=et.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){P=w,T=O,R=V;let G=!0,F=null,ct=!1,_t=!1;if(w){let Lt=et.get(w);if(Lt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(Lt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Lt.__hasExternalTextures)E.rebindTextures(w,et.get(w.texture).__webglTexture,et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Dt=w.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&et.has(Dt)&&(w.width!==Dt.image.width||w.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);let Zt=et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?F=Zt[O][V]:F=Zt[O],ct=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?F=et.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[V]:F=Zt,I.copy(w.viewport),H.copy(w.scissor),D=w.scissorTest}else I.copy(vt).multiplyScalar(W).floor(),H.copy(Ft).multiplyScalar(W).floor(),D=te;if(z.bindFramebuffer(C.FRAMEBUFFER,F)&&G&&z.drawBuffers(w,F),z.viewport(I),z.scissor(H),z.setScissorTest(D),ct){let Lt=et.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Lt.__webglTexture,V)}else if(_t){let Lt=et.get(w.texture),Gt=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,Gt)}S=-1},this.readRenderTargetPixels=function(w,O,V,G,F,ct,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(It=It[_t]),It){z.bindFramebuffer(C.FRAMEBUFFER,It);try{let Lt=w.texture,Gt=Lt.format,Zt=Lt.type;if(!B.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F&&C.readPixels(O,V,G,F,jt.convert(Gt),jt.convert(Zt),ct)}finally{let Lt=P!==null?et.get(P).__webglFramebuffer:null;z.bindFramebuffer(C.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,G,F,ct,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(It=It[_t]),It){let Lt=w.texture,Gt=Lt.format,Zt=Lt.type;if(!B.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F){z.bindFramebuffer(C.FRAMEBUFFER,It);let Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),C.readPixels(O,V,G,F,jt.convert(Gt),jt.convert(Zt),0);let oe=P!==null?et.get(P).__webglFramebuffer:null;z.bindFramebuffer(C.FRAMEBUFFER,oe);let ye=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await fp(C,ye,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(Dt),C.deleteSync(ye),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(w.image.width*G),ct=Math.floor(w.image.height*G),_t=O!==null?O.x:0,It=O!==null?O.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,_t,It,F,ct),z.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,G=null,F=0){w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let ct,_t,It,Lt,Gt,Zt,Dt,oe,ye,Me=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ct=V.max.x-V.min.x,_t=V.max.y-V.min.y,It=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Gt=V.min.y,Zt=V.isBox3?V.min.z:0):(ct=Me.width,_t=Me.height,It=Me.depth||1,Lt=0,Gt=0,Zt=0),G!==null?(Dt=G.x,oe=G.y,ye=G.z):(Dt=0,oe=0,ye=0);let nn=jt.convert(O.format),le=jt.convert(O.type),Nt;O.isData3DTexture?(E.setTexture3D(O,0),Nt=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Nt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Nt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let jn=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Tn=C.getParameter(C.UNPACK_SKIP_PIXELS),ss=C.getParameter(C.UNPACK_SKIP_ROWS),fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt);let Qs=w.isDataArrayTexture||w.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Fn=et.get(w),tr=et.get(O),vn=et.get(Fn.__renderTarget),gi=et.get(tr.__renderTarget);z.bindFramebuffer(C.READ_FRAMEBUFFER,vn.__webglFramebuffer),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<It;_i++)Qs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,et.get(w).__webglTexture,F,Zt+_i),w.isDepthTexture?(be&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,et.get(O).__webglTexture,F,ye+_i),C.blitFramebuffer(Lt,Gt,ct,_t,Dt,oe,ct,_t,C.DEPTH_BUFFER_BIT,C.NEAREST)):be?C.copyTexSubImage3D(Nt,F,Dt,oe,ye+_i,Lt,Gt,ct,_t):C.copyTexSubImage2D(Nt,F,Dt,oe,ye+_i,Lt,Gt,ct,_t);z.bindFramebuffer(C.READ_FRAMEBUFFER,null),z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else be?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Nt,F,Dt,oe,ye,ct,_t,It,nn,le,Me.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,F,Dt,oe,ye,ct,_t,It,nn,Me.data):C.texSubImage3D(Nt,F,Dt,oe,ye,ct,_t,It,nn,le,Me):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Dt,oe,ct,_t,nn,le,Me.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Dt,oe,Me.width,Me.height,nn,Me.data):C.texSubImage2D(C.TEXTURE_2D,F,Dt,oe,ct,_t,nn,le,Me);C.pixelStorei(C.UNPACK_ROW_LENGTH,jn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ss),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fn),F===0&&O.generateMipmaps&&C.generateMipmap(Nt),z.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,G=null,F=0){return w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,V,G,F)},this.initRenderTarget=function(w){et.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,z.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Go=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new A,Wo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,rr=new A,vs=new A,Ms=new A,bs=new q,or=new q,hd=new pe,xo=new A,ar=new A,yo=new A,Cu=new q,fl=new q,Pu=new q,Xo=class extends Ee{constructor(t=new br){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mc(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Wo(n,3,0,!1)),ys.setAttribute("uv",new Wo(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;vo(xo.set(-.5,-.5,0),Ms,o,vs,s,r),vo(ar.set(.5,-.5,0),Ms,o,vs,s,r),vo(yo.set(.5,.5,0),Ms,o,vs,s,r),Cu.set(0,0),fl.set(1,0),Pu.set(1,1);let a=t.ray.intersectTriangle(xo,ar,yo,!1,rr);if(a===null&&(vo(ar.set(-.5,.5,0),Ms,o,vs,s,r),fl.set(0,1),a=t.ray.intersectTriangle(xo,yo,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:wi.getInterpolation(rr,xo,ar,yo,Cu,fl,Pu,new q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vo(i,t,e,n,s,r){bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(or.x=r*bs.x-s*bs.y,or.y=s*bs.x+r*bs.y):or.copy(bs),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(hd)}var bc=class extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qo=class extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new pe,Iu=new pe,Mo=[],Lu=new ui,cx=new pe,lr=new Rt,cr=new Zi,an=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Lu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),cr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Iu.multiplyMatrices(n,Es),lr.matrixWorld=Iu,lr.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){let l=Mo[o];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bc(new Float32Array(s*this.count),s,this.count,Zc,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wn=class extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],o=[],a=new A,l=new pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new q){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ec=class extends Er{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var bo=new A,pl=new th,ml=new th,gl=new th,Bs=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ml.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),gl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ml.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),gl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(pl.calc(l),ml.calc(l),gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Du(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function hx(i,t){let e=1-i;return e*e*t}function ux(i,t){return 2*(1-i)*i*t}function dx(i,t){return i*i*t}function gr(i,t,e,n){return hx(i,t)+ux(i,e)+dx(i,n)}function fx(i,t){let e=1-i;return e*e*e*t}function px(i,t){let e=1-i;return 3*e*e*i*t}function mx(i,t){return 3*(1-i)*i*i*t}function gx(i,t){return i*i*i*t}function _r(i,t,e,n,s){return fx(i,t)+px(i,e)+mx(i,n)+gx(i,s)}var Yo=class extends bn{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sc=class extends bn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y),_r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends bn{constructor(t=new q,e=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends bn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends bn{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends bn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new q){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Du(a,l.x,c.x,h.x,u.x),Du(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new q().fromArray(s))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:Ec,CatmullRomCurve3:Bs,CubicBezierCurve:Yo,CubicBezierCurve3:Sc,EllipseCurve:Er,LineCurve:Zo,LineCurve3:wc,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Jo,SplineCurve:Ko}),Tc=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new jo[s.type]().fromJSON(s))}return this}},di=class extends Tc{constructor(t){super(),this.type="Path",this.currentPoint=new q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $o(this.currentPoint.clone(),new q(t,e),new q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new q(t,e),new q(n,s),new q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Er(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ae=class i extends Ne{constructor(t=[new q(0,-.5),new q(.5,0),new q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new q,f=new A,g=new A,_=new A,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){let v=n+b*h*s,x=Math.sin(v),L=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),d.x=b/e,d.y=T/(t.length-1),a.push(d.x,d.y);let R=l[3*T+0]*x,P=l[3*T+1],S=l[3*T+0]*L;c.push(R,P,S)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let x=v+b*t.length,L=x,T=x+t.length,R=x+t.length+1,P=x+1;r.push(L,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Xn=class i extends Ae{constructor(t=1,e=1,n=4,s=8){let r=new di;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},$i=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},se=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function b(){let x=new A,L=new A,T=0,R=(e-t)/n;for(let P=0;P<=r;P++){let S=[],M=P/r,I=M*(e-t)+t;for(let H=0;H<=s;H++){let D=H/s,k=D*l+a,Z=Math.sin(k),X=Math.cos(k);L.x=I*Z,L.y=-M*n+m,L.z=I*X,u.push(L.x,L.y,L.z),x.set(Z,R,X).normalize(),d.push(x.x,x.y,x.z),f.push(D,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let M=_[S][P],I=_[S+1][P],H=_[S+1][P+1],D=_[S][P+1];(t>0||S!==0)&&(h.push(M,I,D),T+=3),(e>0||S!==r-1)&&(h.push(I,H,D),T+=3)}c.addGroup(p,T,0),p+=T}function v(x){let L=g,T=new q,R=new A,P=0,S=x===!0?t:e,M=x===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let H=0;H<=s;H++){let k=H/s*l+a,Z=Math.cos(k),X=Math.sin(k);R.x=S*X,R.y=m*M,R.z=S*Z,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=Z*.5+.5,T.y=X*.5*M+.5,f.push(T.x,T.y),g++}for(let H=0;H<s;H++){let D=L+H,k=I+H;x===!0?h.push(k,k+1,D):h.push(k+1,k,D),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ac=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new A,x=new A,L=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],x),f(e[T+2],L),l(v,x,L,b)}function l(b,v,x,L){let T=L+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let S=b.clone().lerp(x,P/T),M=v.clone().lerp(x,P/T),I=T-P;for(let H=0;H<=I;H++)H===0&&P===T?R[P][H]=S:R[P][H]=S.clone().lerp(M,H/I)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){let M=Math.floor(S/2);S%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function c(b){let v=new A;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(b),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let b=new A;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let x=m(b)/2/Math.PI+.5,L=p(b)/Math.PI+.5;o.push(x,1-L)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let v=o[b+0],x=o[b+2],L=o[b+4],T=Math.max(v,x,L),R=Math.min(v,x,L);T>.9&&R<.1&&(v<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,v){let x=b*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let b=new A,v=new A,x=new A,L=new A,T=new q,R=new q,P=new q;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(b).add(v).add(x).divideScalar(3);let I=m(L);_(T,M+0,b,I),_(R,M+2,v,I),_(P,M+4,x,I)}}function _(b,v,x,L){L<0&&b.x===1&&(o[v]=b.x-1),x.x===0&&x.z===0&&(o[v]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xe=class extends di{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new di().fromJSON(s))}return this}},_x={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ud(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=bx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Sr(r,o,e,a,l,f,0),o}};function ud(i,t,e,n,s){let r,o;if(s===Dx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Uu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Uu(r,i[r],i[r+1],o);return o&&da(o,o.next)&&(Tr(o),o=o.next),o}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(da(e,e.next)||Te(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ax(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?yx(i,n,s,r):xx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vx(Ji(i),t,e),Sr(i,t,e,n,s,r,2)):o===2&&Mx(i,t,e,n,s,r):Sr(Ji(i),t,e,n,s,r,1);break}}}function xx(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ws(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Rc(f,g,t,e,n),b=Rc(_,m,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,h,l,u,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!da(s,r)&&dd(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return Ji(n)}function Mx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let l=fd(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Sr(o,t,e,n,s,r,0),Sr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ud(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cx(c));for(s.sort(Ex),r=0;r<s.length;r++)e=Sx(s[r],e);return e}function Ex(i,t){return i.x-t.x}function Sx(i,t){let e=wx(i,t);if(!e)return t;let n=fd(e,i);return Ji(n,n.next),Ji(e,e.next)}function wx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ws(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),wr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Tx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Tx(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Ax(i,t,e,n){let s=i;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rx(s)}function Rx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Px(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ix(i,t)&&(wr(i,t)&&wr(t,i)&&Lx(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||da(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function da(i,t){return i.x===t.x&&i.y===t.y}function dd(i,t,e,n){let s=So(Te(i,t,e)),r=So(Te(i,t,n)),o=So(Te(e,n,i)),a=So(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function So(i){return i>0?1:i<0?-1:0}function Ix(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Lx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fd(i,t){let e=new Cc(i.i,i.x,i.y),n=new Cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uu(i,t,e,n){let s=new Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nu(t),Ou(n,t);let o=t.length;e.forEach(Nu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ou(n,e[l]);let a=_x.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ou(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ki=class i extends Ne{constructor(t=new Xe([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ux,v,x=!1,L,T,R,P;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),T=new A,R=new A,P=new A),d||(m=0,f=0,g=0,_=0);let S=a.extractPoints(c),M=S.shape,I=S.holes;if(!Ri.isClockWise(M)){M=M.reverse();for(let Q=0,it=I.length;Q<it;Q++){let C=I[Q];Ri.isClockWise(C)&&(I[Q]=C.reverse())}}let D=Ri.triangulateShape(M,I),k=M;for(let Q=0,it=I.length;Q<it;Q++){let C=I[Q];M=M.concat(C)}function Z(Q,it,C){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(it,C)}let X=M.length,nt=D.length;function W(Q,it,C){let St,st,B,z=Q.x-it.x,rt=Q.y-it.y,et=C.x-Q.x,E=C.y-Q.y,y=z*z+rt*rt,U=z*E-rt*et;if(Math.abs(U)>Number.EPSILON){let Y=Math.sqrt(y),j=Math.sqrt(et*et+E*E),J=it.x-rt/Y,Et=it.y+z/Y,ut=C.x-E/j,Mt=C.y+et/j,ee=((ut-J)*E-(Mt-Et)*et)/(z*E-rt*et);St=J+z*ee-Q.x,st=Et+rt*ee-Q.y;let at=St*St+st*st;if(at<=2)return new q(St,st);B=Math.sqrt(at/2)}else{let Y=!1;z>Number.EPSILON?et>Number.EPSILON&&(Y=!0):z<-Number.EPSILON?et<-Number.EPSILON&&(Y=!0):Math.sign(rt)===Math.sign(E)&&(Y=!0),Y?(St=-rt,st=z,B=Math.sqrt(y)):(St=z,st=rt,B=Math.sqrt(y/2))}return new q(St/B,st/B)}let ht=[];for(let Q=0,it=k.length,C=it-1,St=Q+1;Q<it;Q++,C++,St++)C===it&&(C=0),St===it&&(St=0),ht[Q]=W(k[Q],k[C],k[St]);let ft=[],vt,Ft=ht.concat();for(let Q=0,it=I.length;Q<it;Q++){let C=I[Q];vt=[];for(let St=0,st=C.length,B=st-1,z=St+1;St<st;St++,B++,z++)B===st&&(B=0),z===st&&(z=0),vt[St]=W(C[St],C[B],C[z]);ft.push(vt),Ft=Ft.concat(vt)}for(let Q=0;Q<m;Q++){let it=Q/m,C=f*Math.cos(it*Math.PI/2),St=g*Math.sin(it*Math.PI/2)+_;for(let st=0,B=k.length;st<B;st++){let z=Z(k[st],ht[st],St);lt(z.x,z.y,-C)}for(let st=0,B=I.length;st<B;st++){let z=I[st];vt=ft[st];for(let rt=0,et=z.length;rt<et;rt++){let E=Z(z[rt],vt[rt],St);lt(E.x,E.y,-C)}}}let te=g+_;for(let Q=0;Q<X;Q++){let it=d?Z(M[Q],Ft[Q],te):M[Q];x?(R.copy(L.normals[0]).multiplyScalar(it.x),T.copy(L.binormals[0]).multiplyScalar(it.y),P.copy(v[0]).add(R).add(T),lt(P.x,P.y,P.z)):lt(it.x,it.y,0)}for(let Q=1;Q<=h;Q++)for(let it=0;it<X;it++){let C=d?Z(M[it],Ft[it],te):M[it];x?(R.copy(L.normals[Q]).multiplyScalar(C.x),T.copy(L.binormals[Q]).multiplyScalar(C.y),P.copy(v[Q]).add(R).add(T),lt(P.x,P.y,P.z)):lt(C.x,C.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let it=Q/m,C=f*Math.cos(it*Math.PI/2),St=g*Math.sin(it*Math.PI/2)+_;for(let st=0,B=k.length;st<B;st++){let z=Z(k[st],ht[st],St);lt(z.x,z.y,u+C)}for(let st=0,B=I.length;st<B;st++){let z=I[st];vt=ft[st];for(let rt=0,et=z.length;rt<et;rt++){let E=Z(z[rt],vt[rt],St);x?lt(E.x,E.y+v[h-1].y,v[h-1].x+C):lt(E.x,E.y,u+C)}}}K(),ot();function K(){let Q=s.length/3;if(d){let it=0,C=X*it;for(let St=0;St<nt;St++){let st=D[St];Pt(st[2]+C,st[1]+C,st[0]+C)}it=h+m*2,C=X*it;for(let St=0;St<nt;St++){let st=D[St];Pt(st[0]+C,st[1]+C,st[2]+C)}}else{for(let it=0;it<nt;it++){let C=D[it];Pt(C[2],C[1],C[0])}for(let it=0;it<nt;it++){let C=D[it];Pt(C[0]+X*h,C[1]+X*h,C[2]+X*h)}}n.addGroup(Q,s.length/3-Q,0)}function ot(){let Q=s.length/3,it=0;xt(k,it),it+=k.length;for(let C=0,St=I.length;C<St;C++){let st=I[C];xt(st,it),it+=st.length}n.addGroup(Q,s.length/3-Q,1)}function xt(Q,it){let C=Q.length;for(;--C>=0;){let St=C,st=C-1;st<0&&(st=Q.length-1);for(let B=0,z=h+m*2;B<z;B++){let rt=X*B,et=X*(B+1),E=it+St+rt,y=it+st+rt,U=it+st+et,Y=it+St+et;Bt(E,y,U,Y)}}}function lt(Q,it,C){l.push(Q),l.push(it),l.push(C)}function Pt(Q,it,C){Ot(Q),Ot(it),Ot(C);let St=s.length/3,st=b.generateTopUV(n,s,St-3,St-2,St-1);Kt(st[0]),Kt(st[1]),Kt(st[2])}function Bt(Q,it,C,St){Ot(Q),Ot(it),Ot(St),Ot(it),Ot(C),Ot(St);let st=s.length/3,B=b.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Kt(B[0]),Kt(B[1]),Kt(B[3]),Kt(B[1]),Kt(B[2]),Kt(B[3])}function Ot(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Kt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jo[s.type]().fromJSON(s)),new i(n,t.options)}},Ux={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new q(r,o),new q(a,l),new q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new q(o,1-l),new q(c,1-u),new q(d,1-g),new q(_,1-p)]:[new q(a,1-l),new q(h,1-u),new q(f,1-g),new q(m,1-p)]}};function Nx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class i extends Ac{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qo=class i extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new A,g=new q;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,v=b,x=b+n+1,L=b+n+2,T=b+1;a.push(v,x,T),a.push(x,L,T)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ln=class i extends Ne{constructor(t=new Xe([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Ri.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Ri.isClockWise(b)===!0&&(g[m]=b.reverse())}let _=Ri.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){let b=_[m],v=b[0]+u,x=b[1]+u,L=b[2]+u;n.push(v,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ox(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Ox(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Oe=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-v),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let v=h[p][b+1],x=h[p][b],L=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(v,x,T),(p!==n-1||l<Math.PI)&&f.push(x,L,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var en=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ar=class i extends Ne{constructor(t=new Jo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new q,h=new A,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),b(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],L=o.binormals[v];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,P=Math.sin(R),S=-Math.cos(R);l.x=S*x.x+P*L.x,l.y=S*x.y+P*L.y,l.z=S*x.z+P*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let L=(s+1)*(v-1)+(x-1),T=(s+1)*v+(x-1),R=(s+1)*v+x,P=(s+1)*(v-1)+x;g.push(L,T,P),g.push(T,R,P)}}function b(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ae=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qt=class extends ae{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function wo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=t,a=2*e-n;break;case Nh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:o=t,l=2*n-e;break;case Nh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+b*o[c+L]+v*o[l+L]+x*o[u+L];return r}},Ic=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Lc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case ic:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ic;var ji=class extends Dn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Io;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Dn{};Dc.prototype.ValueTypeName="color";var Uc=class extends Dn{};Uc.prototype.ValueTypeName="number";var Nc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},ta=class extends Dn{InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Io;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Dn{};Oc.prototype.ValueTypeName="vector";var Fc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Bx=new Fc,Bc=class{constructor(t){this.manager=t!==void 0?t:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ea=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_l=new pe,Fu=new A,Bu=new A,na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ku=new pe,hr=new A,xl=new A,kc=class extends na{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),xl.copy(n.position),xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xl),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}},qn=class extends Rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},zc=class extends na{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zu(){return performance.now()}var eh="\\[\\]\\.:\\/",kx=new RegExp("["+eh+"]","g"),nh="[^"+eh+"]",zx="[^"+eh.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",nh),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Xx=new RegExp("^"+Hx+Vx+Gx+Wx+"$"),qx=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(t){let e=Xx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Hc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yy=new Float32Array(1);var Hu=new pe,sa=class{constructor(t,e,n=0,s=1/0){this.ray=new Us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return Vc(t,this,n,e),n.sort(Vu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vc(t[s],this,n,e);return n.sort(Vu),n}};function Vu(i,t){return i.distance-t.distance}function Vc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Vc(r[o],t,e,!0)}}var Cr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ra=class extends ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);var pd={type:"change"},sh={type:"start"},gd={type:"end"},fa=new Us,md=new gn,Yx=Math.cos(70*ha.DEG2RAD),He=new A,ln=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ih=1e-6,pa=class extends ra{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new on,this._lastTargetPosition=new A,this._quat=new on().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new A,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new A,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=Zx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=iy.bind(this),this._onMouseWheel=Qx.bind(this),this._onKeyDown=ty.bind(this),this._onTouchStart=ey.bind(this),this._onTouchMove=ny.bind(this),this._onMouseDown=Kx.bind(this),this._onMouseMove=jx.bind(this),this._interceptControlDown=sy.bind(this),this._interceptControlUp=ry.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=ge.NONE}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=He.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fa.origin.copy(this.object.position),fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fa.direction))<Yx?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),fa.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ih||this._lastTargetPosition.distanceToSquared(this.target)>ih?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Zx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $x(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gd),this.state=ge.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(sh)}function jx(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Qx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gd))}function ty(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ey(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case Yn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Yn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(sh)}function ny(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function iy(i){this.enabled!==!1&&i.preventDefault()}function sy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ry(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ma=class extends Fs{constructor(){super();let t=new ve;t.deleteAttribute("uv");let e=new ae({side:We}),n=new ae,s=new qn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Rt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Rt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Rt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Rt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Rt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Rt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Rt(t,Ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Rt(t,Ws(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Rt(t,Ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Rt(t,Ws(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Rt(t,Ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Rt(t,Ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(i){let t=new me;return t.color.setScalar(i),t}function Di(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new Wn(r);return o.wrapS=o.wrapT=Pi,o.repeat.set(n[0],n[1]),o.anisotropy=4,s&&(o.colorSpace=Ce),o}function ga(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function oy(i,t,e){let n=ga(7);i.fillStyle="#fbf3ea",i.fillRect(0,0,t,e);let s=["#f6b8c4","#9fd8c8","#ffd98a","#b9c8f0","#e9cdb8","#ffffff"];for(let r=0;r<900;r++){i.fillStyle=s[n()*s.length|0],i.globalAlpha=.55+n()*.45;let o=n()*t,a=n()*e,l=1.5+n()*n()*9;i.beginPath();let c=5+(n()*3|0);for(let h=0;h<c;h++){let u=h/c*Math.PI*2,d=l*(.6+n()*.5);i.lineTo(o+Math.cos(u)*d,a+Math.sin(u)*d)}i.fill()}i.globalAlpha=1}function _d(i,t,e,n){let o=e/8,a=t/4;i.fillStyle=n?"#000":"#cfe9df",i.fillRect(0,0,t,e);let l=ga(3);for(let c=0;c<8;c++)for(let h=-1;h<5;h++){let u=c%2*a*.5,d=h*a+u+3,f=c*o+3,g=a-6,_=o-6;if(n){let m=i.createLinearGradient(0,f,0,f+_);m.addColorStop(0,"#ddd"),m.addColorStop(.15,"#fff"),m.addColorStop(.85,"#fff"),m.addColorStop(1,"#bbb"),i.fillStyle=m}else{let m=.94+l()*.08;i.fillStyle=`rgb(${214*m|0},${240*m|0},${229*m|0})`}rh(i,d,f,g,_,10),i.fill(),n||(i.fillStyle="rgba(255,255,255,.35)",rh(i,d+8,f+6,g*.5,6,3),i.fill())}}function rh(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function xd(i,t,e,n="#d9a066",s="#b97d45"){i.fillStyle=n,i.fillRect(0,0,t,e);let r=ga(11);for(let o=0;o<60;o++){i.strokeStyle=s,i.globalAlpha=.12+r()*.22,i.lineWidth=.6+r()*2.4,i.beginPath();let a=r()*e;for(let l=0;l<=t;l+=8)i.lineTo(l,a+Math.sin(l*.02+o)*4+Math.sin(l*.07)*1.5);i.stroke()}i.globalAlpha=1}function ay(i,t,e){i.fillStyle="#fff6ea",i.fillRect(0,0,t,e),i.fillStyle="#ff8a7a",i.font="bold 54px Fredoka, ui-rounded, sans-serif",i.textAlign="center",i.fillText("FARM",t/2,e*.45),i.fillStyle="#7fbfae",i.font="bold 40px Fredoka, ui-rounded, sans-serif",i.fillText("fresh eggs",t/2,e*.8),i.strokeStyle="#ffb59a",i.lineWidth=6,rh(i,8,8,t-16,e-16,18),i.stroke()}function ly(i,t,e){let n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)}function cy(i,t,e){i.fillStyle="#808080",i.fillRect(0,0,t,e);let n=ga(5);for(let s=0;s<400;s++){let r=n()*t*.5;i.strokeStyle=n()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",i.lineWidth=1,i.beginPath(),i.arc(t/2,e/2,r,0,Math.PI*2),i.stroke()}}function yd(){let i={terrazzo:Di(1024,1024,oy,{repeat:[3,1.5]}),tiles:Di(512,512,(s,r,o)=>_d(s,r,o,!1),{repeat:[6,3]}),tilesBump:Di(512,512,(s,r,o)=>_d(s,r,o,!0),{repeat:[6,3],srgb:!1}),wood:Di(512,256,(s,r,o)=>xd(s,r,o)),walnut:Di(512,256,(s,r,o)=>xd(s,r,o,"#7a4e36","#4a2c1c")),label:Di(256,128,ay),dot:Di(64,64,ly),brushed:Di(256,256,cy,{srgb:!1})},t=s=>new qt(s),e=s=>new ae(s);return{tex:i,counter:t({map:i.terrazzo,roughness:.35,clearcoat:.6,clearcoatRoughness:.25}),counterEdge:e({color:"#f4e6d8",roughness:.5}),cabinet:e({color:"#9fd8c8",roughness:.55}),cabinetDark:e({color:"#86c6b4",roughness:.6}),brass:e({color:"#e8c27a",metalness:1,roughness:.3}),wall:e({color:"#ffe3d1",roughness:.95}),tile:e({map:i.tiles,bumpMap:i.tilesBump,bumpScale:1.5,roughness:.25,metalness:0}),floor:e({color:"#e9c9b2",roughness:.8}),cooktop:t({color:"#3d4256",roughness:.28,clearcoat:1,clearcoatRoughness:.12,metalness:.1}),cooktopTrim:e({color:"#d4d9e2",metalness:1,roughness:.25}),castIron:e({color:"#26272d",roughness:.55,metalness:.4}),burnerCap:e({color:"#1e1f24",roughness:.4,metalness:.6}),burnerRing:e({color:"#b9a37b",roughness:.35,metalness:.9}),knob:t({color:"#fffaf3",roughness:.3,clearcoat:.8}),knobMark:e({color:"#ff8a7a",roughness:.4}),steel:e({color:"#dfe4ea",metalness:1,roughness:.22,roughnessMap:i.brushed}),chrome:e({color:"#f2f4f7",metalness:1,roughness:.12}),panOuter:t({color:"#86cfc6",roughness:.32,clearcoat:1,clearcoatRoughness:.15}),panInner:t({color:"#3b3d45",roughness:.42,metalness:.25,clearcoat:.5,clearcoatRoughness:.35}),panBase:e({color:"#c6ccd4",metalness:1,roughness:.3,roughnessMap:i.brushed}),wood:e({map:i.wood,roughness:.55}),walnut:e({map:i.walnut,roughness:.45}),ceramic:t({color:"#fffdf8",roughness:.2,clearcoat:1,clearcoatRoughness:.08}),ceramicPink:t({color:"#f6b8c4",roughness:.25,clearcoat:1,clearcoatRoughness:.1}),ceramicBlue:t({color:"#bfd6f3",roughness:.25,clearcoat:1,clearcoatRoughness:.1}),ceramicMint:t({color:"#a9e0cf",roughness:.3,clearcoat:1,clearcoatRoughness:.1}),terracotta:e({color:"#e59a7a",roughness:.85}),leaf:e({color:"#7cc28a",roughness:.6,side:Ie}),leafDark:e({color:"#5aa56f",roughness:.6,side:Ie}),carton:e({color:"#ecd6b3",roughness:.95}),cartonDark:e({color:"#d9bf98",roughness:.95}),label:e({map:i.label,roughness:.9}),eggShell:t({color:"#fff1df",roughness:.55,sheen:.3,sheenColor:new Ut("#ffffff")}),eggShellBrown:t({color:"#e7b58a",roughness:.6,sheen:.3,sheenColor:new Ut("#ffe6cc")}),eggShellInner:e({color:"#fbf7ef",roughness:.7,side:We}),butter:t({color:"#ffe08a",roughness:.35,clearcoat:.4,clearcoatRoughness:.3,sheen:.4,sheenColor:new Ut("#fff4c4")}),glass:t({color:"#ffffff",roughness:.05,transparent:!0,opacity:.32,clearcoat:1,depthWrite:!1,side:Ie}),salt:e({color:"#ffffff",roughness:1}),peppercorns:e({color:"#3a2c26",roughness:1}),spatulaHandle:t({color:"#7fd1b9",roughness:.35,clearcoat:.7}),shadowBlob:new me({color:"#7a4a35",transparent:!0,opacity:.2,depthWrite:!1,map:i.dot}),windowSky:new me({color:"#cfeeff"}),windowFrame:e({color:"#fffaf4",roughness:.5}),cloud:new me({color:"#ffffff",transparent:!0,opacity:.95}),jar:t({color:"#ffffff",roughness:.05,transparent:!0,opacity:.35,clearcoat:1,depthWrite:!1}),lid:e({color:"#ff8a7a",roughness:.5}),pasta:e({color:"#f6d58a",roughness:.8}),beans:e({color:"#c96b52",roughness:.7})}}var Ir=new A;function En(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ir.copy(t),Ir[n]=0,Ir.normalize();let c=.5*o/(o+a),h=1-Ir.angleTo(i)/l;return Math.sign(Ir[e])===1?h*c:a/(o+a)+c+c*(1-h)}var re=class extends ve{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=En(g,l,"z","y",r,n),d[p+1]=1-En(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-En(g,l,"z","y",r,n),d[p+1]=1-En(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-En(g,l,"x","z",r,t),d[p+1]=En(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-En(g,l,"x","z",r,t),d[p+1]=1-En(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-En(g,l,"x","y",r,t),d[p+1]=1-En(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=En(g,l,"x","y",r,t),d[p+1]=1-En(g,l,"y","x",r,e);break}}};var Ve={x:-.6,z:.1},Pe={x0:-3,x1:1.8,z0:-1.6,z1:1.9,top:.045},Lr=.24,_a={x0:-7.6,x1:7.6,z0:-3.3,z1:3.4},Dr={x:1.25,z:1.45},Fe={pan:{x:Ve.x,z:Ve.z},plate:{x:3.25,z:.55},carton:{x:-4.55,z:-.75},butter:{x:-4.4,z:1.75},salt:{x:2.75,z:-2.15},pepper:{x:3.7,z:-2.2},spatula:{x:4.55,z:2.15}},Le={floorY:.06,innerR:1,rimR:1.24,height:.34,snap:.8},Un={r:1.15,foodY:.075},Ur=22;var vd=i=>Ur+i*22.8;function fi(i,t){return i>Pe.x0&&i<Pe.x1&&t>Pe.z0&&t<Pe.z1?Pe.top:0}var Xs=i=>(i.x=Math.min(_a.x1-.6,Math.max(_a.x0+.6,i.x)),i.z=Math.min(_a.z1-.4,Math.max(_a.z0+.5,i.z)),i),oh={sunny:{runny:{label:"Runny yolk",y:[0,.45]},jammy:{label:"Jammy yolk",y:[.45,.75]}},over:{easy:{label:"Over easy",y:[0,.45]},medium:{label:"Over medium",y:[.45,.75]},hard:{label:"Over hard",y:[.75,1.01]}},scrambled:{soft:{label:"Soft & creamy",w:[.5,.78]},medium:{label:"Medium curds",w:[.78,.92]},well:{label:"Well done",w:[.92,1.01]}},omelette:{soft:{label:"Soft & creamy",w:[.5,.78]},medium:{label:"Medium",w:[.78,.92]},well:{label:"Well done",w:[.92,1.01]}},friedrice:{fluffy:{label:"Fluffy",c:[.45,.8]},crispy:{label:"Crispy & golden",c:[.85,1.2]}}},es={sunny:"Sunny-side up",over:"Over-easy (flipped)",scrambled:"Scrambled eggs",omelette:"Omelette",friedrice:"Egg fried rice",sheet:"Flat omelette"},Md={sunny:"\u{1F373}",over:"\u{1F95A}",scrambled:"\u{1F9C0}",omelette:"\u{1F319}",friedrice:"\u{1F35A}",sheet:"\u{1F95A}"};var Wt=(i,t,{cast:e=!1,receive:n=!1}={})=>{let s=new Rt(i,t);return s.castShadow=e,s.receiveShadow=n,s};function Sd(i,t,e){let n=new kt;i.add(n);let s=Wt(new xn(40,30),t.floor,{receive:!1});s.rotation.x=-Math.PI/2,s.position.y=-4.2,n.add(s);let r=Wt(new xn(40,16),t.wall);r.position.set(0,4,-3.75),n.add(r);for(let E of[-1,1]){let y=Wt(new xn(20,16),t.wall);y.position.set(E*9.5,4,4),y.rotation.y=-E*Math.PI/2,n.add(y)}let o=Wt(new xn(19,3.6),t.tile,{receive:!0});o.position.set(0,1.8,-3.72),n.add(o);let a=Wt(new re(19,.14,.12,2,.05),t.counterEdge);a.position.set(0,3.62,-3.68),n.add(a);let l=Wt(new re(17,.42,7.5,4,.12),t.counter,{receive:!0});l.position.set(0,-.21,-.05),n.add(l);let c=Wt(new ve(16.6,3.8,7),t.cabinetDark);c.position.set(0,-2.32,-.3),n.add(c);for(let E=0;E<6;E++){let y=Wt(new re(2.6,3.3,.16,3,.07),t.cabinet);y.position.set(-6.9+E*2.76,-2.3,3.24),n.add(y);let U=Wt(new Xn(.05,.55,4,8),t.brass);U.position.set(-6.9+E*2.76+(E%2?-1:1)*.95,-1.4,3.37),n.add(U)}let h=Wt(new ve(16.6,.3,.2),t.counterEdge);h.position.set(0,-4.05,3),n.add(h);let u=new kt;u.position.set(-1.2,5.6,-3.7),n.add(u);let d=Wt(new xn(5.2,3.2),new me({map:hy()}));d.position.z=-.05,u.add(d);let f=[[5.6,.22,0,1.7],[5.6,.22,0,-1.7],[.22,3.6,-2.7,0],[.22,3.6,2.7,0],[.12,3.2,0,0],[5.2,.12,0,0]];for(let[E,y,U,Y]of f){let j=Wt(new re(E,y,.2,2,.05),t.windowFrame);j.position.set(U,Y,.05),u.add(j)}let g=Wt(new re(6.2,.16,.6,3,.06),t.windowFrame,{cast:!0});g.position.set(0,-1.85,.25),u.add(g);for(let E=0;E<3;E++)u.add(wd(t,-1.8+E*1.8,-1.77,.3,.42+E%2*.1,E));let _=new kt;_.position.set(-.6,10.6,-.8),n.add(_);let m=Wt(new se(.02,.02,2.5,6),t.castIron);m.position.y=1.25,_.add(m);let p=[];for(let E=0;E<=12;E++){let y=E/12;p.push(new q(.15+Math.pow(y,1.6)*1.1,-y*.9))}let b=Wt(new Ae(p,32),new ae({color:"#ffb59a",roughness:.5,side:Ie}));_.add(b);let v=Wt(new Oe(.22,16,12),new me({color:"#fff4d6"}));v.position.y=-.7,_.add(v);let x=new kt;x.position.set(4.6,4.6,-3.45),n.add(x);let L=Wt(new re(4.2,.16,.7,3,.05),t.wood,{cast:!0,receive:!0});x.add(L);for(let E of[-1.6,1.6]){let y=Wt(new ve(.1,.5,.5),t.brass);y.position.set(E,-.3,-.05),x.add(y)}let T=[t.pasta,t.beans,t.salt];for(let E=0;E<3;E++)x.add(fy(t,-1.3+E*1.25,.08,.05,.38+(E===1?.1:0),.95-E*.12,T[E]));let R=Pe.x1-Pe.x0,P=Pe.z1-Pe.z0,S=(Pe.x0+Pe.x1)/2,M=(Pe.z0+Pe.z1)/2,I=Wt(new re(R,.12,P,4,.05),t.cooktop,{receive:!0});I.position.set(S,Pe.top-.06,M),n.add(I);let H=Wt(new re(R+.12,.08,P+.12,3,.04),t.cooktopTrim);H.position.set(S,Pe.top-.09,M),n.add(H);let D=new kt;D.position.set(Ve.x,Pe.top,Ve.z),n.add(D);let k=Wt(new se(.72,.8,.05,48),t.cooktopTrim,{receive:!0});k.position.y=.02,D.add(k);let Z=Wt(new se(.5,.52,.09,40),t.burnerRing);Z.position.y=.08,D.add(Z);let X=Wt(new se(.42,.48,.05,40),t.burnerCap);X.position.y=.145,D.add(X);let nt=Wt(new Oe(.42,32,8,0,Math.PI*2,0,.35),t.burnerCap);nt.position.y=-.2,nt.scale.y=.9,D.add(nt);let W=e.mobile?22:30,ht=new ks(.05,.28,8,1,!0);ht.translate(0,.14,0);let ft=new me({color:"#5aa8ff",transparent:!0,opacity:.55,blending:ai,depthWrite:!1}),vt=new me({color:"#c8e4ff",transparent:!0,opacity:.7,blending:ai,depthWrite:!1}),Ft=new an(ht,ft,W),te=new an(ht,vt,W);D.add(Ft,te);let K=Wt(new Qo(.35,.95,48),new me({color:"#4d8dff",transparent:!0,opacity:0,blending:ai,depthWrite:!1,map:t.tex.dot}));K.rotation.x=-Math.PI/2,K.position.y=.13,D.add(K);let ot=new qn("#7ab0ff",0,3.5,2);ot.position.y=.3,D.add(ot);let xt=new kt;xt.position.set(Ve.x,0,Ve.z),n.add(xt);let lt=Lr-.04,Pt=new Xe;bd(Pt,-1.25,-1.25,2.5,2.5,.35);let Bt=new di;bd(Bt,-1.12,-1.12,2.24,2.24,.28),Pt.holes.push(Bt);let Ot=new Ki(Pt,{depth:.07,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:6});Ot.rotateX(-Math.PI/2);let Kt=Wt(Ot,t.castIron,{cast:!0});Kt.position.y=lt-.1,xt.add(Kt);for(let E=0;E<4;E++){let y=E*Math.PI/2+Math.PI/4,U=Wt(new re(.8,.09,.09,2,.035),t.castIron,{cast:!0}),Y=1.12;U.position.set(Math.cos(y)*(Y-.38),Lr-.047,Math.sin(y)*(Y-.38)),U.rotation.y=-y,xt.add(U);let j=Wt(new se(.06,.07,lt-Pe.top+.02,10),t.castIron);j.position.set(Math.cos(y)*1.18,(lt+Pe.top)/2,Math.sin(y)*1.18),xt.add(j)}let Q=D.clone(!0);Q.position.set(Ve.x-1.75,Pe.top,Ve.z-1.05),Q.scale.setScalar(.55),Q.traverse(E=>{(E.isInstancedMesh||E.isPointLight||E.material&&E.material.blending===ai)&&(E.visible=!1)}),n.add(Q);let it=Ed(t);it.position.set(Dr.x,Pe.top,Dr.z),n.add(it);let C=Ed(t);C.position.set(Dr.x,Pe.top,Dr.z-1),C.scale.setScalar(.8),n.add(C),C.traverse(E=>{E.userData={}});let St=new kt;St.position.copy(it.position),St.position.y+=.005,n.add(St);for(let E=0;E<=10;E++){let y=(-135+E*27)*Math.PI/180,U=Wt(new $i(E%5===0?.035:.022,10),new me({color:E>6?"#ff8a7a":E>3?"#ffc35c":"#bfe3ff"}));U.rotation.x=-Math.PI/2,U.position.set(Math.sin(y)*.45,0,-Math.cos(y)*.45),St.add(U)}n.add(py(t,-5.9,-2.5)),n.add(dy(t,6.4,-2.5));let st=Wt(new re(2.4,3,.14,4,.06),t.wood,{cast:!0});st.position.set(-3.6,1.45,-3.45),st.rotation.x=-.12,n.add(st);let B=Wt(new en(.16,.035,8,20),t.counterEdge);B.position.set(-3.6,2.7,-3.36),B.rotation.x=-.12,n.add(B);let z=new Ee,rt=Array.from({length:W},()=>Math.random()*10);function et(E,y){let U=E/10,Y=E>.05;if(Ft.visible=te.visible=Y,ot.intensity=Y?.6+U*2.4:0,K.material.opacity=Y?.15+U*.35:0,!!Y){for(let j=0;j<W;j++){let J=j/W*Math.PI*2,Et=.85+Math.sin(y*18+rt[j]*3)*.1+Math.sin(y*31+rt[j])*.06,ut=(.6+U*1)*Et,Mt=.9+U*.45;z.position.set(Math.cos(J)*.5,.1,Math.sin(J)*.5),z.rotation.set(0,-J,0),z.rotateZ(-Mt),z.scale.set(1+U*.3,ut,1+U*.3),z.updateMatrix(),Ft.setMatrixAt(j,z.matrix),z.scale.set(.55,ut*.55,.55),z.updateMatrix(),te.setMatrixAt(j,z.matrix)}Ft.instanceMatrix.needsUpdate=te.instanceMatrix.needsUpdate=!0}}return{root:n,knob:it,updateFlames:et}}function bd(i,t,e,n,s,r){i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e)}function Ed(i){let t=new kt,e=Wt(new se(.34,.36,.05,40),i.cooktopTrim);e.position.y=.025,t.add(e);let n=[new q(0,0),new q(.3,0),new q(.31,.04),new q(.29,.2),new q(.27,.23),new q(0,.24)],s=Wt(new Ae(n,40),i.knob,{cast:!0});s.position.y=.04;let r=new kt;r.position.y=0,t.add(r),r.add(s);let o=Wt(new re(.12,.16,.5,3,.05),i.knob,{cast:!0});o.position.set(0,.34,0),r.add(o);let a=Wt(new re(.06,.03,.16,2,.012),i.knobMark);a.position.set(0,.425,-.15),r.add(a);let l=new Rt(new se(.6,.6,.6,16),new me({visible:!1}));return l.position.y=.3,t.add(l),t.traverse(c=>{c.userData.interact="knob"}),t.userData.turn=r,t}function hy(){let i=document.createElement("canvas");i.width=256,i.height=160;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,160);e.addColorStop(0,"#9fd6ff"),e.addColorStop(.7,"#d9f0ff"),e.addColorStop(1,"#ffe9d6"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,.95)";for(let[s,r,o]of[[60,50,1],[180,35,.8],[140,95,.6]])for(let[a,l,c]of[[0,0,18],[18,-6,14],[-16,3,12],[32,4,11]])t.beginPath(),t.arc(s+a*o,r+l*o,c*o,0,7),t.fill();t.fillStyle="#b9e3b0",t.beginPath(),t.moveTo(0,160);for(let s=0;s<=256;s+=8)t.lineTo(s,128+Math.sin(s*.03)*10);t.lineTo(256,160),t.fill(),t.fillStyle="#9fd39a",t.beginPath(),t.moveTo(0,160);for(let s=0;s<=256;s+=8)t.lineTo(s,142+Math.sin(s*.05+2)*7);t.lineTo(256,160),t.fill();let n=new Wn(i);return n.colorSpace=Ce,n}function wd(i,t,e,n,s,r){let o=new kt;o.position.set(t,e,n),o.scale.setScalar(s);let a=[new q(0,0),new q(.42,0),new q(.5,.7),new q(.56,.72),new q(.56,.85),new q(.48,.85),new q(.46,.75),new q(0,.75)];o.add(Wt(new Ae(a,24),r%2?i.ceramicPink:i.terracotta,{cast:!0}));let l=uy();for(let c=0;c<9;c++){let h=Wt(l,c%2?i.leaf:i.leafDark,{cast:!0}),u=c*2.4+r;h.position.set(Math.cos(u)*.12,.75,Math.sin(u)*.12),h.rotation.set(0,-u,.5+c%3*.25),h.scale.setScalar(.7+c%4*.12),o.add(h)}return o}var qs;function uy(){if(qs)return qs;let i=new Xe;i.moveTo(0,0),i.quadraticCurveTo(.25,.35,0,.9),i.quadraticCurveTo(-.25,.35,0,0),qs=new Ln(i,6);let t=qs.attributes.position;for(let e=0;e<t.count;e++){let n=t.getY(e);t.setZ(e,Math.sin(n*2.4)*.12+Math.abs(t.getX(e))*.3)}return qs.computeVertexNormals(),qs}function dy(i,t,e){let n=wd(i,t,0,e,1.25,1);return n.children[0].material=i.ceramicMint,n}function fy(i,t,e,n,s,r,o){let a=new kt;a.position.set(t,e,n);let l=Wt(new se(s,s,r,24,1,!0),i.jar);l.position.y=r/2,l.renderOrder=2;let c=Wt(new se(s*.9,s*.9,r*.68,20),o);c.position.y=r*.34+.01;let h=Wt(new re(s*2.1,.14,s*2.1,2,.06),i.lid);return h.position.y=r+.05,h.geometry=new se(s*1.05,s*1.05,.14,24),a.add(c,l,h),a}function py(i,t,e){let n=new kt;n.position.set(t,0,e);let s=[new q(0,0),new q(.5,0),new q(.55,.1),new q(.52,1.1),new q(.56,1.2),new q(.48,1.2),new q(.44,.2),new q(0,.2)];n.add(Wt(new Ae(s,28),i.ceramicBlue,{cast:!0,receive:!0}));for(let r=0;r<3;r++){let o=new kt,a=Wt(new se(.04,.05,2,8),i.wood,{cast:!0});a.position.y=1,o.add(a);let l=Wt(new Oe(.2,14,10),i.wood,{cast:!0});l.scale.set(1,1.4,.35),l.position.y=2.1,o.add(l),o.position.set((r-1)*.16,.1,r%2*.1),o.rotation.set((r-1)*.08,r,(r-1)*.2),n.add(o)}return n}var Ct=(i,t,e=!0,n=!1)=>{let s=new Rt(i,t);return s.castShadow=e,s.receiveShadow=n,s},Ke=(i,t,e={})=>(i.traverse(n=>{n.userData.interact=t,Object.assign(n.userData,e)}),i),mt=(i,t)=>new q(i,t);function Ad(i=.26,t=24){let e=i*1.32,n=[];for(let s=0;s<=t;s++){let r=-1+2*s/t,o=i*Math.sqrt(Math.max(0,1-r*r))*(1-.13*r);n.push(mt(Math.max(o,1e-4),r*e))}return n[0].x=1e-4,n[t].x=1e-4,n}var Td;function my(){return Td||(Td=new Ae(Ad(),28))}function xa(i,t=!1){return Ct(my(),t?i.eggShellBrown:i.eggShell)}function Rd(i,t=!1){let e=Ad(.26,24),n=o=>{let a=new kt,l=Ct(new Ae(e,16,o,Math.PI),t?i.eggShellBrown:i.eggShell),c=Ct(new Ae(e.map(h=>mt(h.x*.95,h.y*.97)),16,o,Math.PI),i.eggShellInner,!1);return a.add(l,c),a},s=n(0);return{left:n(Math.PI),right:s}}function gy(i){let t=new kt;t.name="pan";let{innerR:e,rimR:n,height:s,floorY:r}=Le,o=[mt(0,0),mt(e-.02,0),mt(e+.06,.015),mt(e+.1,.06)];for(let R=1;R<=10;R++){let P=R/10;o.push(mt(e+.1+(n-e-.06)*Math.pow(P,.85),.06+P*(s-.08)))}o.push(mt(n+.035,s+.005),mt(n+.03,s+.03),mt(n-.01,s+.035));let a=Ct(new Ae(o,72),i.panOuter,!0,!1);t.add(a);let l=Ct(new $i(e-.079,72),i.panInner,!1,!0);l.rotation.x=-Math.PI/2,l.position.y=r,t.add(l),Ke(l,"panFloor");let c=[];for(let R=0;R<=6;R++)c.push(mt(e-.08+Math.sin(R/6*Math.PI/2)*.08,r+(1-Math.cos(R/6*Math.PI/2))*.08));for(let R=1;R<=8;R++){let P=R/8;c.push(mt(e+(n-.05-e)*Math.pow(P,.85),r+.08+P*(s-r-.06)))}c.push(mt(n-.01,s+.035));let h=Ct(new Ae(c,72),i.panInner,!1,!0);i.panInner.side=Ie,t.add(h);let u=Ct(new se(e-.12,e-.12,.012,48),i.panBase,!1);u.position.y=-.004,t.add(u);let d=new kt;t.add(d);let f=new A(-.86,0,.5).normalize();d.position.set(f.x*(n-.04),s*.62,f.z*(n-.04)),d.rotation.y=Math.atan2(-f.z,f.x);let g=new Bs([ns(-.05,-.05,0),ns(.25,.04,0),ns(.55,.12,0)]),_=Ct(new Ar(g,12,.055,10),i.steel);d.add(_);for(let R of[-.07,.07]){let P=Ct(new Oe(.035,10,8),i.steel);P.position.set(-.02,0,R),P.scale.set(.5,1,1),d.add(P)}let m=[mt(1e-4,0),mt(.085,0),mt(.1,.05),mt(.105,.4),mt(.115,1.05),mt(.11,1.12),mt(.08,1.16),mt(1e-4,1.17)],p=Ct(new Ae(m,20),i.wood);p.rotation.z=-Math.PI/2+.24,p.position.set(.5,.11,0),p.scale.set(1,1,.85),d.add(p);let b=Ct(new se(.1,.095,.12,20),i.steel);b.rotation.z=-Math.PI/2+.24,b.position.set(.52,.115,0),d.add(b);let v=Ct(new en(.045,.02,8,16),i.steel);v.position.set(1.55,.38,0),v.rotation.y=Math.PI/2,d.add(v);let x=new Rt(new ve(1.6,.6,.6),new me({visible:!1}));x.position.set(.85,.2,0),d.add(x),Ke(d,"panHandle"),Ke(a,"panRim");let L=new Rt(new se(n,e,.3,32),new me({visible:!1}));L.position.y=r+.12,t.add(L),Ke(L,"panFloor"),Ke(h,"panFloor");let T=new kt;return T.position.y=r,t.add(T),t.userData.foodAnchor=T,t}var ns=(i,t,e)=>new A(i,t,e);function _y(i){let t=new kt;t.name="plate";let e=Un.r,n=[mt(1e-4,.03),mt(e*.55,.03),mt(e*.6,.005),mt(e*.66,0),mt(e*.7,.03),mt(e*.72,.06),mt(e*.9,.11),mt(e*.99,.13),mt(e*1,.145),mt(e*.98,.155),mt(e*.88,.135),mt(e*.72,.09),mt(e*.64,.075),mt(1e-4,.075)],s=Ct(new Ae(n,64),i.ceramic,!0,!0);t.add(s);let r=Ct(new en(e*.9,.018,8,64),i.ceramicPink,!1);r.rotation.x=-Math.PI/2,r.position.y=.122,t.add(r);let o=Ct(new en(e*.985,.012,6,64),i.ceramicPink,!1);o.rotation.x=-Math.PI/2,o.position.y=.148,t.add(o);let a=new Rt(new se(e+.1,e+.1,.4,24),new me({visible:!1}));a.position.y=.15,t.add(a),Ke(t,"plate");let l=new kt;return l.position.y=Un.foodY,t.add(l),t.userData.foodAnchor=l,t}function xy(i){let t=new kt;t.name="carton";let e=Ct(new re(1.75,.34,1.2,4,.1),i.carton,!0,!0);e.position.y=.17,t.add(e);let n=[],s=new Set([1,4]);for(let c=0;c<6;c++){let h=-.56+c%3*.56,u=-.27+Math.floor(c/3)*.54,d=Ct(new se(.25,.18,.1,18,1,!0),i.cartonDark,!1,!0);d.position.set(h,.31,u),t.add(d);let f=xa(i,s.has(c));f.position.set(h,.52,u),f.rotation.set((Math.random()-.5)*.15,Math.random()*3,(Math.random()-.5)*.15),f.userData.home=f.position.clone(),f.userData.brown=s.has(c),Ke(f,"cartonEgg",{eggIndex:c}),t.add(f),n.push(f)}for(let c=0;c<2;c++){let h=Ct(new ks(.08,.35,8),i.carton);h.position.set(-.28+c*.56,.45,0),t.add(h)}let r=new kt;r.position.set(0,.34,-.6),r.rotation.x=-1.95,t.add(r);let o=Ct(new re(1.75,.3,1.2,4,.1),i.carton);o.position.set(0,-.12,.6),r.add(o);let a=Ct(new xn(1.2,.6),i.label,!1);a.position.set(0,-.275,.6),a.rotation.x=Math.PI/2,a.rotation.z=Math.PI,r.add(a);for(let c of[e,r])Ke(c,"carton");let l=new Rt(new ve(1.9,.4,1.3),new me({visible:!1}));return l.position.y=.2,t.add(l),Ke(l,"carton"),t.userData.eggs=n,t}function yy(i){let t=new kt;t.name="butterDish";let e=Ct(new re(1.5,.1,.95,4,.045),i.ceramicBlue,!0,!0);e.position.y=.05,t.add(e);let n=Ct(new re(1.36,.06,.82,3,.03),i.ceramicBlue);n.position.y=.11,n.scale.set(1,1,1),t.add(n);let s=Ct(new re(.95,.34,.5,4,.06),i.butter,!0,!0);s.position.set(-.1,.27,0),t.add(s);let r=Zs(i);r.position.set(.5,.17,.05),r.rotation.y=.2,t.add(r);let o=new kt;o.position.set(.1,.16,.36),o.rotation.y=-.15,t.add(o);let a=Ct(new re(.75,.02,.14,2,.008),i.chrome);a.position.x=.15,o.add(a);let l=Ct(new Xn(.05,.5,4,10),i.ceramicPink);return l.rotation.z=Math.PI/2,l.position.x=-.5,o.add(l),Ke(t,"butterDish"),Ke(s,"butterBlock"),Ke(r,"butterBlock"),t.userData.block=s,t}function Zs(i){return Ct(new re(.34,.16,.3,3,.045),i.butter)}function vy(i){let t=new kt;t.name="salt";let e=[mt(1e-4,0),mt(.27,0),mt(.3,.04),mt(.3,.12),mt(.24,.45),mt(.22,.62),mt(.23,.7),mt(1e-4,.7)],n=Ct(new Ae(e,32),i.glass,!1);n.renderOrder=3,t.add(n);let s=Ct(new Ae(e.slice(0,5).map(l=>mt(l.x*.88,l.y*.95+.02)).concat([mt(1e-4,.42)]),24),i.salt);t.add(s);let r=[mt(1e-4,.68),mt(.235,.68),mt(.245,.74),mt(.23,.86),mt(.15,.95),mt(1e-4,.97)];t.add(Ct(new Ae(r,32),i.chrome));let o=new an(new $i(.018,6),new me({color:"#555b66"}),7),a=new Ee;for(let l=0;l<7;l++){let c=l/6*Math.PI*2,h=l===6?0:.07;a.position.set(Math.cos(c)*h,.972,Math.sin(c)*h),a.rotation.set(-Math.PI/2,0,0),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}return t.add(o),Cd(t,i,.38),Ke(t,"salt"),t}function My(i){let t=new kt;t.name="pepper";let e=[mt(1e-4,0),mt(.26,0),mt(.28,.05),mt(.24,.3),mt(.19,.55),mt(.22,.75),mt(.25,.85),mt(.25,.9),mt(1e-4,.9)];t.add(Ct(new Ae(e,32),i.walnut));let n=Ct(new en(.255,.018,8,32),i.chrome);n.rotation.x=Math.PI/2,n.position.y=.88,t.add(n);let s=[mt(1e-4,.9),mt(.23,.9),mt(.24,.98),mt(.19,1.08),mt(1e-4,1.12)];t.add(Ct(new Ae(s,32),i.walnut));let r=Ct(new Oe(.07,14,10),i.chrome);return r.position.y=1.15,t.add(r),Cd(t,i,.36),Ke(t,"pepper"),t}function by(i){let t=new kt;t.name="spatula";let e=new Xe,n=.62,s=.78,r=.1;e.moveTo(-n/2+r,-s/2),e.lineTo(n/2-r,-s/2),e.quadraticCurveTo(n/2,-s/2,n/2,-s/2+r),e.lineTo(n/2-.04,s/2-.12),e.quadraticCurveTo(.12,s/2+.02,.06,s/2+.05),e.lineTo(-.06,s/2+.05),e.quadraticCurveTo(-.12,s/2+.02,-n/2+.04,s/2-.12),e.lineTo(-n/2,-s/2+r),e.quadraticCurveTo(-n/2,-s/2,-n/2+r,-s/2);for(let f=0;f<4;f++){let g=new di,_=-.18+f*.12;g.moveTo(_-.025,-.24),g.lineTo(_+.025,-.24),g.lineTo(_+.025,.18),g.lineTo(_-.025,.18),g.closePath(),e.holes.push(g)}let o=new Ki(e,{depth:.018,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:1,curveSegments:6});o.rotateX(Math.PI/2);let a=Ct(o,i.steel);a.position.y=.02,t.add(a);let l=new Bs([ns(0,.03,.42),ns(0,.08,.58),ns(0,.28,.82),ns(0,.38,.98)]);t.add(Ct(new Ar(l,16,.032,8),i.steel));let c=[mt(1e-4,0),mt(.07,0),mt(.085,.08),mt(.085,.9),mt(.075,.98),mt(1e-4,1)],h=Ct(new Ae(c,18),i.spatulaHandle);h.position.set(0,.36,.95),h.rotation.x=Math.PI/2-.42,h.scale.set(1,1,.7),t.add(h);let u=Ct(new en(.05,.016,6,14),i.chrome);u.position.set(0,.78,1.82),u.rotation.y=Math.PI/2,t.add(u);let d=new Rt(new ve(.9,.6,2.2),new me({visible:!1}));return d.position.set(0,.3,.6),t.add(d),Ke(t,"spatula"),t}function Cd(i,t,e){let n=new Rt(new xn(e*3,e*3),t.shadowBlob);n.rotation.x=-Math.PI/2,n.position.y=.004,n.renderOrder=-1,n.userData.blob=!0,i.add(n)}function Ys(i,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new Wn(n);return s.colorSpace=Ce,s.anisotropy=4,s}var Ey=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Sy(i){let t=new kt;t.name="fridge";let e=2.05,n=2.55,s=1.2,r=.1,o=new qt({color:"#b3e4d2",roughness:.26,clearcoat:1,clearcoatRoughness:.1}),a=new qt({color:"#f8fdfb",roughness:.5,clearcoat:.2}),l=new ae({color:"#2b2f36",roughness:.7}),c=new qt({color:"#d6f1ee",roughness:.06,transparent:!0,opacity:.5,clearcoat:1,depthWrite:!1}),h=i.chrome,u=(B,z,rt,et,E,y,U,Y,j=t,J=!0)=>{let Et=Ct(new re(B,z,rt,3,et),E,J,!0);return Et.position.set(y,U,Y),j.add(Et),Et};u(e,n,r,.03,a,0,n/2,-s/2+r/2),u(r,n,s,.045,o,-e/2+r/2,n/2,0),u(r,n,s,.045,o,e/2-r/2,n/2,0),u(e,r,s,.06,o,0,n-r/2,0),u(e,.16,s,.05,o,0,.08,0),u(.02,n-.3,s-.12,.01,a,-e/2+r+.01,n/2,.02,t,!1),u(.02,n-.3,s-.12,.01,a,e/2-r-.01,n/2,.02,t,!1);for(let B=-3;B<=3;B++)u(.025,n-.35,.03,.01,new ae({color:"#e6f3ef",roughness:.6}),B*.26,n/2,-s/2+r+.015,t,!1);let d=B=>u(e,.045,.05,.015,h,0,B,s/2-.01,t,!1);d(.17),d(n-.02);for(let B of[-e/2+.02,e/2-.02])u(.045,n-.2,.05,.015,h,B,n/2+.03,s/2-.01,t,!1);u(e-.2,.025,.03,.01,l,0,.2,s/2-.05,t,!1),u(e-.2,.025,.03,.01,l,0,n-.1,s/2-.05,t,!1);let f=new Rt(new re(e-.5,.04,.09,2,.015),new me({color:"#fffbe6"}));f.position.set(0,n-r-.03,.3),t.add(f);let g=new qn("#fff4dc",7,4,2);g.position.set(0,n-.35,.35),t.add(g);let _=Ct(new se(.07,.07,.04,20),h,!1);_.rotation.z=Math.PI/2,_.position.set(e/2-r-.03,n-.4,-.2),t.add(_);let m=Ct(new ve(.03,.012,.03),new me({color:"#ff6b6b"}),!1);m.position.set(e/2-r-.055,n-.4,-.2),t.add(m);let p=[.62,1.32,2.02];for(let B of p){u(e-2*r-.04,.03,s-.14,.012,c,0,B,.02,t,!1);let z=Ct(new se(.016,.016,e-2*r-.04,10),h,!1);z.rotation.z=Math.PI/2,z.position.set(0,B+.02,s/2-.1),t.add(z)}for(let B of[-.8,.8]){let z=Ct(new se(.09,.11,.07,12),l,!1);z.position.set(B,-.03,-.3),t.add(z)}let b=new kt;b.position.set(-e/2,0,s/2),b.rotation.y=-2.85,t.add(b),u(e,n,.11,.05,o,e/2,n/2,.055,b),u(e-.14,n-.14,.04,.03,a,e/2,n/2,-.03,b,!1),u(e-.06,.04,.06,.015,l,e/2,n-.06,-.03,b,!1),u(e-.06,.04,.06,.015,l,e/2,.07,-.03,b,!1);let v=Ct(new se(.036,.036,1,14),h);v.position.set(e-.16,n*.6,.2),b.add(v);for(let B of[-.4,.4]){let z=Ct(new se(.026,.026,.14,8),h);z.rotation.x=Math.PI/2,z.position.set(e-.16,n*.6+B,.13),b.add(z)}let x=Ys((B,z,rt)=>{B.fillStyle="#dfe6ea",B.fillRect(0,0,z,rt),B.fillStyle="#c0392b",B.font="italic bold 52px serif",B.textAlign="center",B.fillText("Eggy",z/2,82)}),L=Ct(new re(.42,.14,.02,2,.01),new ae({map:x,metalness:.6,roughness:.3}),!1);L.position.set(e/2,n-.34,.12),b.add(L);let T=[.72,1.32,1.92];for(let B of T)u(e-.28,.035,.2,.012,c,e/2,B,-.16,b,!1),u(e-.28,.12,.02,.01,c,e/2,B+.075,-.26,b,!1);let R=Ys((B,z,rt)=>{B.fillStyle="#ffffff",B.fillRect(0,0,z,rt),B.fillStyle="#7ec8e3",B.fillRect(0,36,z,52),B.fillStyle="#fff",B.font="bold 30px sans-serif",B.textAlign="center",B.fillText("MILK",z/2,72)}),P=(B,z,rt,et,E,y,U)=>{let Y=new kt;Y.add(Ct(new se(rt,rt*1.03,et,20),U?new qt({map:U,roughness:.3,clearcoat:.6}):new qt({color:E,roughness:.12,clearcoat:1,transparent:!0,opacity:.82}),!0,!1));let j=Ct(new se(rt*.45,rt*.8,et*.2,16),U?new qt({color:"#ffffff",roughness:.3}):new qt({color:E,roughness:.12,clearcoat:1,transparent:!0,opacity:.82}),!0,!1);j.position.y=et*.6,Y.add(j);let J=Ct(new se(rt*.48,rt*.48,et*.08,16),new ae({color:y,roughness:.4}),!0,!1);J.position.y=et*.74,Y.add(J),Y.position.set(B,z+et/2+.02,-.16),b.add(Y)};P(.4,T[2],.1,.42,"#fff","#4aa3d9",R),P(.75,T[2],.085,.3,"#d8434a","#ffd23a"),P(1.1,T[2],.1,.34,"#f4c24a","#5b4636"),P(1.45,T[2],.09,.4,"#7bc96f","#ffffff"),P(.5,T[1],.12,.24,"#c9507a","#ffffff"),P(.95,T[1],.12,.24,"#e8a03c","#8e5a2b"),P(1.4,T[1],.12,.24,"#b0e06e","#ffffff");let S=[],M=(B,z,rt,et,E,y=.9)=>{z.position.set(rt,et,E);let U=new Rt(new ve(y,.75,.8),new me({visible:!1}));U.position.y=.3,z.add(U),Ke(z,"fridgeItem",{kind:B}),t.add(z),S.push(z)},I=new kt,H=new Xe;H.moveTo(0,0),H.absarc(0,0,.44,-.55,.55,!1),H.lineTo(0,0);let D=new Ki(H,{depth:.26,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:18});D.rotateX(-Math.PI/2),D.translate(-.2,.014,.1);let k=Ct(D,[new qt({color:"#ffcb3f",roughness:.3,clearcoat:.6}),new qt({color:"#f5b72e",roughness:.35,clearcoat:.5})]);I.add(k);let Z=Ct(new se(.458,.458,.2,24,1,!0,-.55,1.1),new ae({color:"#e0572f",roughness:.6,side:Ie}));Z.position.set(-.2,.135,.1),Z.rotation.y=Math.PI,I.add(Z);let X=new ae({color:"#d99a1a",roughness:.7});[[.1,.05,.05],[.2,-.06,.04],[.06,-.08,.035],[.15,.12,.03]].forEach(([B,z,rt])=>{let et=Ct(new Oe(rt,10,8),X,!1);et.position.set(B-.2+.1,.268,z+.1),et.scale.y=.35,I.add(et)}),M("cheese",I,-.5,p[2]+.025,-.05,.9);let nt=new kt,W=Ys((B,z,rt)=>{B.fillStyle="#c9a56b",B.fillRect(0,0,z,rt);for(let et=0;et<z;et+=4)B.fillStyle=`rgba(110,70,30,${.12+Ey(et)*.12})`,B.fillRect(et,0,2,rt),B.fillRect(0,et,z,2);B.fillStyle="#c0392b",B.fillRect(0,46,z,30),B.fillStyle="#fff",B.font="bold 26px sans-serif",B.textAlign="center",B.fillText("RICE",z/2,69)});W.wrapS=W.wrapT=Pi;let ht=new Ae([[.001,0],[.24,0],[.3,.06],[.32,.22],[.27,.42],[.15,.55],[.085,.62],[.1,.68],[.15,.78],[.07,.83]].map(B=>new q(B[0],B[1])),28);nt.add(Ct(ht,new ae({map:W,roughness:.95,side:Ie})));let ft=Ct(new en(.095,.02,8,18),new ae({color:"#7a4a24",roughness:.8}),!1);ft.rotation.x=Math.PI/2,ft.position.y=.63,nt.add(ft);let vt=Ct(new re(.16,.2,.012,2,.006),new ae({color:"#fff7e0",roughness:.6}),!1);vt.position.set(.13,.58,.1),vt.rotation.z=-.3,nt.add(vt),nt.scale.setScalar(.74),M("rice",nt,0,p[0]+.025,0,.8);let Ft=new kt,te=new ae({color:"#ffffff",roughness:.4});Ft.add(u(.8,.05,.5,.02,te,0,.03,0,Ft));let K=Ys((B,z,rt)=>{B.fillStyle="#d95b5b",B.fillRect(0,0,z,rt);for(let et=0;et<6;et++)B.fillStyle=et%2?"#fde9e4":"#c94646",B.fillRect(0,6+et*20,z,14)}),ot=new qt({map:K,roughness:.35,clearcoat:.7});[[-.17,0],[.04,.03],[.22,-.02]].forEach(([B,z],rt)=>{let et=new ve(.7,.026,.15,24,1,2),E=et.attributes.position;for(let U=0;U<E.count;U++)E.setY(U,E.getY(U)+Math.sin(E.getX(U)*9+rt*2)*.014);et.computeVertexNormals();let y=Ct(et,ot,!0,!1);y.position.set(0,.075,B),y.rotation.y=z,Ft.add(y)});let xt=new Rt(new re(.82,.12,.52,3,.05),new qt({color:"#ffffff",roughness:.05,transparent:!0,opacity:.18,clearcoat:1,depthWrite:!1}));xt.position.y=.09,Ft.add(xt);let lt=Ys((B,z,rt)=>{B.fillStyle="#c0392b",B.fillRect(0,0,z,rt),B.fillStyle="#fff3d6",B.font="bold 42px sans-serif",B.textAlign="center",B.fillText("BACON",z/2,70),B.font="30px serif",B.fillText("\u{1F953}",z/2,108)}),Pt=Ct(new re(.28,.15,.54,3,.03),[0,1,2,3,4,5].map(B=>new ae({map:B===2?lt:null,color:B===2?"#ffffff":"#c0392b",roughness:.5})),!1);Pt.position.set(-.08,.1,0),Ft.add(Pt),M("bacon",Ft,-.5,p[1]+.025,.02,.9);let Bt=new kt,Ot=Ys((B,z,rt)=>{B.fillStyle="#f2a0a6",B.fillRect(0,0,z,rt);let et=B.createRadialGradient(z*.4,rt*.35,4,z/2,rt/2,z*.7);et.addColorStop(0,"rgba(255,255,255,0.28)"),et.addColorStop(1,"rgba(120,30,40,0.25)"),B.fillStyle=et,B.fillRect(0,0,z,rt),B.strokeStyle="rgba(255,248,235,0.85)",B.lineWidth=3;for(let E=-rt;E<z+rt;E+=22)B.beginPath(),B.moveTo(E,0),B.lineTo(E+rt,rt),B.stroke(),B.beginPath(),B.moveTo(E+rt,0),B.lineTo(E,rt),B.stroke()});Ot.wrapS=Ot.wrapT=Pi,Ot.repeat.set(2,1);let Kt=Ct(new Oe(.3,40,28),new qt({map:Ot,roughness:.4,clearcoat:.5}));Kt.scale.set(1.25,.82,.9),Kt.position.y=.25,Bt.add(Kt);for(let B of[-.14,.14]){let z=Ct(new en(.255,.012,8,30),new ae({color:"#e9d9b6",roughness:.8}),!1);z.rotation.y=Math.PI/2,z.position.set(B*1.4,.25,0),z.scale.set(1,.85,.92),Bt.add(z)}let Q=Ct(new se(.2,.2,.025,28),new ae({color:"#f7b9bd",roughness:.45}),!1);Q.rotation.z=Math.PI/2,Q.position.set(.37,.24,0),Q.scale.set(1,1,.8),Bt.add(Q),Bt.scale.setScalar(.78),M("ham",Bt,.5,p[2]+.025,.02,.9);let it=new kt;it.add(u(1,.07,.56,.03,te,0,.04,0,it));let C=new qt({color:"#e58f7b",roughness:.3,clearcoat:.8}),St=new Xn(.075,.2,8,16).rotateZ(Math.PI/2);[-.3,-.1,.1,.3].forEach((B,z)=>{let rt=Ct(St,C);rt.position.set(B,.15,Math.sin(z*1.3)*.04),rt.rotation.y=Math.sin(z)*.12,it.add(rt)}),[-.2,0,.2].forEach(B=>{let z=Ct(new en(.05,.011,6,12),new ae({color:"#b86a52",roughness:.6}),!1);z.rotation.y=Math.PI/2,z.position.set(B,.15,0),it.add(z)});let st=new Rt(new re(1.02,.18,.58,3,.07),new qt({color:"#ffffff",roughness:.05,transparent:!0,opacity:.14,clearcoat:1,depthWrite:!1}));return st.position.y=.14,it.add(st),it.scale.setScalar(.85),M("sausage",it,.5,p[1]+.025,.03,1),t.userData.items=S,t}function Pd(i,t){let e=gy(t);e.position.set(Fe.pan.x,0,Fe.pan.z),i.add(e);let n=_y(t);n.position.set(Fe.plate.x,0,Fe.plate.z),i.add(n);let s=xy(t);s.position.set(Fe.carton.x,0,Fe.carton.z),s.rotation.y=.25,i.add(s);let r=yy(t);r.position.set(Fe.butter.x,0,Fe.butter.z),r.rotation.y=-.2,i.add(r);let o=vy(t);o.position.set(Fe.salt.x,0,Fe.salt.z),i.add(o);let a=My(t);a.position.set(Fe.pepper.x,0,Fe.pepper.z),i.add(a);let l=by(t);l.position.set(Fe.spatula.x,0,Fe.spatula.z),l.rotation.y=.5,i.add(l);let c=Sy(t);return c.position.set(1,0,-2.6),c.scale.setScalar(1.3),i.add(c),{pan:e,plate:n,carton:s,butterDish:r,salt:o,pepper:a,spatula:l,fridge:c}}var ya={steam:{color:"#ffffff",size:[.35,1.3],life:2.2,alpha:.22,rise:.7,drag:.6,blend:sn},smoke:{color:"#776d68",size:[.4,1.9],life:2.8,alpha:.42,rise:.85,drag:.5,blend:sn},spatter:{color:"#fff3c4",size:[.06,.03],life:.45,alpha:.95,rise:0,gravity:-9,blend:sn},salt:{color:"#ffffff",size:[.05,.05],life:1.2,alpha:1,gravity:-7,blend:sn},pepper:{color:"#2e2420",size:[.05,.05],life:1.2,alpha:1,gravity:-7,blend:sn},bubble:{color:"#fff7d6",size:[.03,.12],life:.35,alpha:.85,rise:0,blend:sn},sparkle:{color:"#fff1a8",size:[.25,.05],life:.9,alpha:1,rise:.6,gravity:-1.5,blend:ai},shell:{color:"#fff1df",size:[.06,.06],life:.7,alpha:1,gravity:-9,blend:sn}},va=class{constructor(t,e,n=220){this.scene=t,this.pool=[],this.live=[],this.max=n,this.mats={};for(let[s,r]of Object.entries(ya))this.mats[s]=r;this.dotTex=e}_get(t){let e=this.pool.pop();if(!e){if(this.live.length>=this.max)return null;e=new Xo(new br({map:this.dotTex,transparent:!0,depthWrite:!1})),e.renderOrder=5}let n=ya[t];return e.material.color.set(n.color),e.material.blending=n.blend,e.material.opacity=n.alpha,e.visible=!0,this.scene.add(e),e}emit(t,e,{vel:n=null,spread:s=.2,count:r=1,floorY:o=-10,color:a=null,life:l=null}={}){for(let c=0;c<r;c++){let h=this._get(t);if(!h)return;let u=ya[t];h.position.set(e.x+(Math.random()-.5)*s,e.y,e.z+(Math.random()-.5)*s),a&&h.material.color.set(a);let d=n?n.clone():new A(0,0,0);t==="spatter"&&d.set((Math.random()-.5)*3,2+Math.random()*2.5,(Math.random()-.5)*3),t==="shell"&&d.set((Math.random()-.5)*2,1+Math.random()*1.5,(Math.random()-.5)*2),t==="sparkle"&&d.set((Math.random()-.5)*2.5,1+Math.random()*2,(Math.random()-.5)*2.5),(t==="salt"||t==="pepper")&&d.add(new A((Math.random()-.5)*.5,-.5-Math.random(),(Math.random()-.5)*.5)),h.userData={type:t,t:0,life:(l||u.life)*(.75+Math.random()*.5),v:d,floorY:o,spin:Math.random()};let f=u.size[0];h.scale.set(f,f,f),this.live.push(h)}}update(t){for(let e=this.live.length-1;e>=0;e--){let n=this.live[e],s=n.userData,r=ya[s.type];s.t+=t;let o=s.t/s.life;if(o>=1||n.position.y<s.floorY){this._kill(e);continue}r.gravity&&(s.v.y+=r.gravity*t),r.rise&&(s.v.y+=(r.rise-s.v.y)*Math.min(1,t*2)),r.drag&&(s.v.x*=1-r.drag*t,s.v.z*=1-r.drag*t,s.v.x+=Math.sin(s.t*2+s.spin*9)*.25*t),n.position.addScaledVector(s.v,t);let a=r.size[0]+(r.size[1]-r.size[0])*o;n.scale.set(a,a,a);let l=s.type==="steam"||s.type==="smoke"?Math.sin(Math.PI*Math.min(1,o*1.1)):1-o*o;n.material.opacity=r.alpha*l}}_kill(t){let e=this.live[t];this.live.splice(t,1),e.visible=!1,this.scene.remove(e),this.pool.push(e)}clear(){for(;this.live.length;)this._kill(this.live.length-1)}};var cn=i=>new Ut(i),wy=cn("#e4ebe4"),ah=cn("#fffcf4"),Id=cn("#f2c066"),lh=cn("#a9622a"),Ty=cn("#2a1c15"),Ld=cn("#ff9f12"),Dd=cn("#ffbf2e"),Ay=cn("#f6d670"),Nr=cn("#f2a227"),Or=cn("#ffd44a"),Ud=cn("#f7df86"),we=new Ut,$n=new Ut,kr=i=>Math.max(0,Math.min(1,i)),Ma=(i,t,e)=>{let n=kr((e-i)/(t-i));return n*n*(3-2*n)};function Fr(i,t){return i<.4?t.copy(Id):i<.75?t.copy(Id).lerp(lh,(i-.4)/.35):t.copy(lh).lerp(Ty,Math.min(1,(i-.75)/.25))}var ba=12,Ui=56,Br,Ea,Sa;function Ry(){let i=[];for(let t=0;t<5;t++){let e=new Li(.13,3),n=e.attributes.position,s=new A,r=Math.random()*10,o=Math.random()*10;for(let a=0;a<n.count;a++){s.fromBufferAttribute(n,a);let l=Math.sin(s.x*21+r)*Math.sin(s.y*17+o)*Math.sin(s.z*19+r*o)*.35+Math.sin(s.x*47+o)*Math.sin(s.z*43+r)*.08;s.multiplyScalar(1+l),s.y<0&&(s.y*=.35),n.setXYZ(a,s.x,s.y,s.z)}e.computeVertexNormals(),i.push(e)}return i}var zr=class{constructor(t={}){this.group=new kt,this.group.name="food",this.w=0,this.y=0,this.brown=[0,0],this.down=0,this.flips=0,this.yolkBroken=!1,this.torn=!1,this.scrambled=!1,this.mixed=!1,this.folded=!1,this.fills=[],this.liftOrigin=null,this.stirTotal=0,this.lastStir=-99,this.age=0,this.buttered=!!t.buttered,this.stuck=!1,this.salt=0,this.pepper=0,this.spread=0,this.radius=.68,this.seed=Math.random()*100,this._build(),this.refresh(!0)}_build(){let t=this.seed;this.R=h=>.68*(1+.075*Math.sin(3*h+t)+.05*Math.sin(5*h+t*1.7)+.03*Math.sin(9*h+t*2.3));let e=[],n=[],s=[],r=[];e.push(0,0,0),n.push(0),s.push(0),r.push(Math.random());for(let h=1;h<=ba+1;h++)for(let u=0;u<Ui;u++){let d=u/Ui*Math.PI*2;e.push(0,0,0),n.push(h>ba?1.0001:h/ba),s.push(d),r.push(Math.random())}let o=[];for(let h=0;h<Ui;h++)o.push(0,1+(h+1)%Ui,1+h);for(let h=0;h<ba;h++){let u=1+h*Ui,d=1+(h+1)*Ui;for(let f=0;f<Ui;f++){let g=(f+1)%Ui;o.push(u+f,u+g,d+f,u+g,d+g,d+f)}}let a=new Ne;a.setAttribute("position",new Jt(e,3)),a.setAttribute("color",new Jt(new Float32Array(e.length/3*4),4)),a.setIndex(o),this.wRn=n,this.wAng=s,this.wNoise=r,this.whiteMat=new qt({vertexColors:!0,transparent:!0,roughness:.2,clearcoat:.6,clearcoatRoughness:.2,side:Ie}),this.white=new Rt(a,this.whiteMat),this.white.receiveShadow=!0,this.white.castShadow=!0,this.group.add(this.white),this.yolkOffset=new A(.07*Math.cos(t),0,.07*Math.sin(t)),this.yolkMat=new qt({color:Ld,roughness:.1,clearcoat:1,clearcoatRoughness:.04,sheen:.2}),this.yolk=new Rt(new Oe(.235,40,28),this.yolkMat),this.yolk.position.copy(this.yolkOffset).setY(.06),this.yolk.scale.set(1,.74,1),this.group.add(this.yolk);let l=new Xe;for(let h=0;h<=40;h++){let u=h/40*Math.PI*2,d=.3*(1+.25*Math.sin(3*u+t)+.15*Math.sin(7*u));h?l.lineTo(Math.cos(u)*d*1.3,Math.sin(u)*d):l.moveTo(Math.cos(u)*d*1.3,Math.sin(u)*d)}this.smear=new Rt(new Ln(l,6),this.yolkMat),this.smear.rotation.x=-Math.PI/2,this.smear.position.copy(this.yolkOffset).setY(.062),this.smear.visible=!1,this.group.add(this.smear),this.domeMat=new qt({color:ah,roughness:.55,clearcoat:.3}),this.dome=new Rt(new Oe(.28,32,20),this.domeMat),this.dome.position.copy(this.yolkOffset).setY(.05),this.dome.scale.set(1,.45,1),this.dome.visible=!1,this.group.add(this.dome),this.foldMat=new qt({color:Or,roughness:.3,clearcoat:.5,sheen:.4,sheenColor:cn("#fff3c0")}),this.fold=new Rt(new Oe(.6,40,20,0,Math.PI*2,0,Math.PI/2),this.foldMat),this.fold.scale.set(1.08,.7,.6),this.fold.position.set(0,.012,-.1),this.fold.visible=!1,this.fold.castShadow=!0,this.fold.receiveShadow=!0,this.group.add(this.fold),Br=Br||Ry(),this.curdMat=new qt({color:Nr,roughness:.5,clearcoat:.4,sheen:.6,sheenRoughness:.6,sheenColor:cn("#fff3c0")}),this.curds=new kt,this.curds.visible=!1,this.group.add(this.curds),this.curdData=[];for(let h=0;h<44;h++){let u=new Rt(Br[h%Br.length],this.curdMat);u.castShadow=!0,u.receiveShadow=!0;let d=.08+Math.sqrt(Math.random())*.6,f=Math.random()*Math.PI*2,g={r:d,a:f,s:.55+Math.random()*.6,sq:.5+Math.random()*.3,spin:Math.random()*6,bob:Math.random()*6};this.curdData.push(g),this.curds.add(u)}this.liquidMat=new qt({color:Nr,roughness:.1,clearcoat:1,transparent:!0,opacity:.95});let c=new Xe;for(let h=0;h<=48;h++){let u=h/48*Math.PI*2,d=this.R(u)*1.08;h?c.lineTo(Math.cos(u)*d,Math.sin(u)*d):c.moveTo(Math.cos(u)*d,Math.sin(u)*d)}this.liquid=new Rt(new Ln(c,8),this.liquidMat),this.liquid.rotation.x=-Math.PI/2,this.liquid.position.y=.012,this.liquid.visible=!1,this.liquid.receiveShadow=!0,this.group.add(this.liquid),Ea=Ea||new ve(.018,.012,.018),Sa=Sa||new Li(.014,0),this.saltFlecks=new an(Ea,new ae({color:"#ffffff",roughness:.3}),80),this.pepperFlecks=new an(Sa,new ae({color:"#2b211c",roughness:.9}),80),this.saltFlecks.count=0,this.pepperFlecks.count=0,this.group.add(this.saltFlecks,this.pepperFlecks)}surfaceY(t,e){if(this.scrambled)return .12+Math.random()*.06;if(this.mixed)return this.folded?.2:.03;let n=Math.hypot(t-this.yolkOffset.x,e-this.yolkOffset.z);if(n<.24&&!this.yolkBroken)return .055+Math.sqrt(Math.max(0,.235*.235-n*n))*(this.flips%2?.45:.66)+.01;let s=Math.hypot(t,e)/.68;return .06*(1-Math.min(1,s)**2.2)+.015}update(t,e,n){this.age+=t;let r=n.time-this.lastStir<1.5,o=Math.max(0,e-65)/70*.05,a=Math.max(0,e-70)/70*.017;this.scrambled||this.mixed?(this.w=kr(this.w+o*t*(r?1.3:.9)),this.y=this.w):(this.w=kr(this.w+o*t*(this.flips?1.2:1)),this.y=kr(this.y+a*t*(this.flips%2?2.4:1)*(this.yolkBroken?1.6:1)));let l=Math.max(0,e-118)/130*.034+Math.max(0,e-185)/55*.06;n.buttered||(l*=1.35),this.scrambled&&r&&(l*=.3),this.brown[this.down]=kr(this.brown[this.down]+l*t),!n.buttered&&e>110&&this.w>.25&&(this.stuck=!0)}get maxBrown(){return Math.max(this.brown[0],this.brown[1])}get recipe(){return this.scrambled?"scrambled":this.folded?"omelette":this.mixed?"sheet":this.flips>0?"over":"sunny"}get burnt(){return this.maxBrown>.75}flip(t){if(this.scrambled)return this.stir(1.2,0),{tossed:!0};if(this.folded)return{tossed:!0};if(this.mixed)return this.fold_(),{folded:!0,torn:this.torn};let e={},n=this.stuck?.62:.45;return this.w<n?(this.torn=!0,e.torn=!0,this.y<.5&&(this.yolkBroken=!0,e.yolk=!0)):!this.yolkBroken&&this.y<.3&&(t>3200||Math.random()<.08)&&(this.yolkBroken=!0,e.yolk=!0),this.flips++,this.down=1-this.down,this.refresh(!0),e}mix(){this.mixed||(this.mixed=!0,this.yolkBroken=!0,this.refresh(!0))}fold_(){this.folded||(this.w<.45&&(this.torn=!0),this.folded=!0,this.down=1-this.down,this.refresh(!0))}breakYolk(){this.yolkBroken||(this.yolkBroken=!0,this.refresh(!0))}scramble(){this.scrambled||(this.scrambled=!0,this.yolkBroken=!0,this.w=this.w*.8,this.refresh(!0))}stir(t,e){this.stirTotal+=t,this.lastStir=e;for(let n of this.curdData)n.a+=t*(.6+n.r)*.9,n.r=Math.max(.05,Math.min(.66,n.r+(Math.random()-.5)*.08*t))}addSeasoning(t,e=6){let n=t==="salt"?this.saltFlecks:this.pepperFlecks;t==="salt"?this.salt++:this.pepper++;let s=new Ee;for(let r=0;r<e&&n.count<80;r++){let o=Math.sqrt(Math.random())*.55,a=Math.random()*Math.PI*2,l=Math.cos(a)*o,c=Math.sin(a)*o;s.position.set(l,this.surfaceY(l,c)+.006,c),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),s.scale.setScalar(.7+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(n.count,s.matrix),n.count++}n.instanceMatrix.needsUpdate=!0}refresh(t=!1){let e=this.scrambled,n=this.mixed&&!e,s=n&&this.folded;this.white.visible=!e&&!n,this.curds.visible=e,this.liquid.visible=e||n&&!s,this.fold.visible=s;let r=this.flips%2===1,o=!e&&!n;if(this.yolk.visible=o&&!r&&!this.yolkBroken,this.smear.visible=o&&!r&&this.yolkBroken,this.dome.visible=o&&r&&!this.torn,e)return this._refreshScrambled();if(n)return this._refreshSheet();let a=this.white.geometry.attributes.position,l=this.white.geometry.attributes.color,c=.45+.55*(1-Math.pow(1-this.spread,3)),h=1-this.down,u=this.brown[this.down],d=this.brown[h],f=this.seed%(Math.PI*2);for(let m=0;m<a.count;m++){let p=this.wRn[m],b=this.wAng[m],v=this.wNoise[m],x=this.R(b)*c;if(this.torn){let k=Math.abs((b-f+Math.PI*3)%(Math.PI*2)-Math.PI);k<.45&&(x*=.45+k)}let L=Math.min(p,1)*x,T=p>1,R=1+this.w*.35,P=T?.002:(.058*(1-Math.pow(Math.min(p,1),2.2))+.012)*R*(.6+.4*c)+(p>.85?(v-.5)*.01*this.w:0);a.setXYZ(m,Math.cos(b)*L*(T?1.01:1),P,Math.sin(b)*L*(T?1.01:1));let S=Ma(0,1,this.w*1.35-(1-Math.min(p,1))*.38+(v-.5)*.06);we.copy(wy).lerp(ah,S);let M=.5+.5*S,I=Ma(.7,1,Math.min(p,1))*Math.min(1,u*1.7)*(.75+v*.5),H=d*(.7+.3*p)*(.7+v*.6),D=Math.max(I,H);D>.01&&(Fr(Math.max(u,d)*(.8+v*.4),$n),we.lerp($n,Math.min(1,D*1.5))),l.setXYZW(m,we.r,we.g,we.b,T?Math.max(M,.9):M)}a.needsUpdate=l.needsUpdate=!0,(t||this._nTick++%6===0)&&this.white.geometry.computeVertexNormals(),this.whiteMat.roughness=.15+this.w*.45,this.whiteMat.clearcoat=.7*(1-this.w*.7);let g=this.y;g<.5?we.copy(Ld).lerp(Dd,g/.5):we.copy(Dd).lerp(Ay,(g-.5)/.5),this.flips%2===0&&u>.8&&we.lerp(lh,(u-.8)*1.5),this.yolkMat.color.copy(we),this.yolkMat.roughness=.08+g*.7,this.yolkMat.clearcoat=1-g*.9;let _=.66-g*.08;this.yolk.scale.set(c*.95+.05,_,c*.95+.05),this.smear.scale.setScalar(c),we.copy(cn("#f6dc92")).lerp(ah,.55+this.w*.35),d>.02&&(Fr(d,$n),we.lerp($n,Math.min(1,d*1.4))),this.domeMat.color.copy(we)}_refreshSheet(){let t=this.w,e=this.maxBrown;we.copy(Nr).lerp(Or,Math.min(1,t*1.1)),t>.8&&we.lerp(Ud,(t-.8)*1.5),e>.05&&(Fr(e,$n),we.lerp($n,Math.min(1,e*1.3)));let n=.5+.5*(1-Math.pow(1-this.spread,3));this.liquidMat.color.copy(we),this.liquidMat.opacity=.97,this.liquidMat.roughness=.1+t*.4,this.liquid.scale.setScalar(.55+.45*n),this.liquid.position.y=.02+Math.min(.03,t*.03),this.foldMat.color.copy(we),this.foldMat.roughness=.25+t*.4}_refreshScrambled(){let t=this.w,e=this.maxBrown;t<.6?we.copy(Nr).lerp(Or,t/.6):we.copy(Or).lerp(Ud,(t-.6)/.4),e>.05&&(Fr(e,$n),we.lerp($n,Math.min(1,e*1.2))),this.curdMat.color.copy(we),this.curdMat.roughness=.25+t*.5,this.curdMat.clearcoat=.6*(1-t);let n=Math.min(1,this.stirTotal/(3+t*9)),s=Ma(.08,.65,t),r=this._t=(this._t||0)+.016;this.curds.children.forEach((a,l)=>{let c=this.curdData[l],h=c.s*(.3+.7*s)*(1.2-n*.3);a.position.set(Math.cos(c.a)*c.r,.03+h*.08+Math.sin(r*2+c.bob)*.003*(1-t),Math.sin(c.a)*c.r),a.scale.set(h,h*c.sq*(.7+n*.5),h*.9),a.rotation.set(c.spin,c.spin*.7+c.a,0)});let o=1-Ma(.25,.85,t)*(.4+n*.6);this.liquid.visible=o>.03,we.copy(Nr).lerp(Or,t*.8),e>.05&&(Fr(e,$n),we.lerp($n,Math.min(1,e))),this.liquidMat.color.copy(we),this.liquidMat.opacity=.35+.6*o,this.liquidMat.roughness=.08+t*.5,this.liquid.scale.setScalar(.7+.3*o)}dispose(){this.group.traverse(t=>{t.isMesh&&!Br.includes(t.geometry)&&t.geometry!==Ea&&t.geometry!==Sa&&t.geometry.dispose()}),[this.whiteMat,this.yolkMat,this.domeMat,this.curdMat,this.liquidMat,this.foldMat,this.saltFlecks.material,this.pepperFlecks.material].forEach(t=>t.dispose())}};zr.prototype._nTick=0;var Nn=i=>new Ut(i),Nd=Nn("#f2c066"),Hr=Nn("#a9622a"),zd=Nn("#2a1c15"),yn=new Ut,Od=new Ut,Fd=new Ut,Be=i=>Math.max(0,Math.min(1,i)),Bd=(i,t,e)=>{let n=Be((e-i)/(t-i));return n*n*(3-2*n)},hn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function kd(i,t){return i<.4?t.copy(Nd):i<.75?t.copy(Nd).lerp(Hr,(i-.4)/.35):t.copy(Hr).lerp(zd,Math.min(1,(i-.75)/.25))}var ch=i=>"#"+i.getHexString(),_e={bacon:{name:"Bacon",icon:"\u{1F953}",R:.62,rate:1,brown:1.15,levels:{chewy:{label:"chewy",w:[.5,.78]},crisp:{label:"crispy",w:[.8,1.1]}}},ham:{name:"Ham",icon:"\u{1F356}",R:.5,rate:.8,brown:.9,levels:{warm:{label:"warmed",w:[.4,.65]},seared:{label:"seared",w:[.7,1]}}},sausage:{name:"Sausage",icon:"\u{1F32D}",R:.55,rate:.55,brown:.9,levels:{browned:{label:"browned",w:[.75,1.05]}}},cheese:{name:"Cheese",icon:"\u{1F9C0}",R:.42,rate:1,brown:.4,levels:{melted:{label:"melted",w:[.7,1.1]}}},rice:{name:"Rice",icon:"\u{1F35A}",R:.62,rate:.7,brown:.7,levels:{}}};var wa,Ta,Aa,Ra,Ca,Pa;function Cy(i,t,e){let n=new ve(i,.036,t,46,1,8);return n.userData.base=n.attributes.position.array.slice(),n.userData.seed=e,n.userData.len=i,n.userData.wid=t,n}function Py(i,t){let e=i.attributes.position,n=i.userData.base,s=i.userData.seed,r=i.userData.len/2,o=i.userData.wid/2;for(let a=0;a<e.count;a++){let l=n[a*3],c=n[a*3+1],h=n[a*3+2],u=l/r,d=h/o,f=Math.sin(l*7.4+s)*.026*(.55+.45*Math.abs(d))+Math.sin(l*14+s*2.1)*.009,g=t*.085*d*d*(.35+.65*Math.abs(u));e.setXYZ(a,l*(1-.14*t),c+.034+f+g,h+Math.sin(l*9+s*1.3)*.016*(1+t))}e.needsUpdate=!0,i.computeVertexNormals()}function Iy(i,t,e,n){let s=new Xe;for(let r=0;r<=t;r++){let o=r/t*Math.PI*2,a=i*(1+e*Math.sin(3*o+n)+e*.6*Math.sin(5*o+n*2.1)+e*.3*Math.sin(9*o+n));r?s.lineTo(Math.cos(o)*a,Math.sin(o)*a):s.moveTo(Math.cos(o)*a,Math.sin(o)*a)}return s}var $s=class{constructor(t,e={}){this.kind=t,this.spec=_e[t],this.R=this.spec.R,this.group=new kt,this.group.name="ing-"+t,this.inner=new kt,this.group.add(this.inner),this.c=[0,0],this.brown=[0,0],this.top=0,this.flips=0,this.melt=0,this.toss=0,this.lastToss=-99,this.egg=!1,this.eggRaw=0,this.salt=0,this.pepper=0,this.buttered=!!e.buttered,this.loc="hand",this.yaw=(Math.random()-.5)*.7,this.dirty=!0,this._rt=0,this._lastK=-1,this._build(),this.refresh(!0)}_tex(t,e){let n=document.createElement("canvas");n.width=t,n.height=e,this.ctx=n.getContext("2d"),this.tex=new Wn(n),this.tex.colorSpace=Ce,this.tex.anisotropy=4}_build(){let t=this.kind;t==="bacon"?this._buildBacon():t==="ham"?this._buildHam():t==="sausage"?this._buildSausage():t==="cheese"?this._buildCheese():this._buildRice(),wa=wa||new ve(.018,.012,.018),Ta=Ta||new Li(.014,0),this.saltFlecks=new an(wa,new ae({color:"#ffffff",roughness:.3}),60),this.pepperFlecks=new an(Ta,new ae({color:"#2b211c",roughness:.9}),60),this.saltFlecks.count=0,this.pepperFlecks.count=0,this.group.add(this.saltFlecks,this.pepperFlecks)}_buildBacon(){this._tex(128,64),this.bands=[];let t=0,e=!1;for(;t<64;){let n=e?4+hn(t)*7:8+hn(t+3)*9;this.bands.push({y:t,h:n,fat:e,ph:hn(t*7)*6}),t+=n,e=!e}this.mat=new qt({map:this.tex,roughness:.34,clearcoat:.65,clearcoatRoughness:.25}),this.strips=[],[[-.22,.07,.2,.27],[.03,-.06,1.9,.29],[.28,.09,3.4,.26]].forEach(([n,s,r,o])=>{let a=Cy(1.08-Math.abs(n)*.2,o,r),l=new Rt(a,this.mat);l.position.set(hn(r)*.06-.03,0,n),l.rotation.y=s,l.castShadow=!0,l.receiveShadow=!0,this.inner.add(l),this.strips.push(l)})}_buildHam(){this._tex(128,128);let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");for(let o=0;o<260;o++){e.strokeStyle=hn(o)>.5?"rgba(255,230,230,0.35)":"rgba(150,60,70,0.22)",e.lineWidth=1+hn(o+9)*1.4,e.beginPath();let a=hn(o+2)*128,l=hn(o+5)*128,c=.5+hn(o+7)*.3;e.moveTo(a,l),e.lineTo(a+Math.cos(c)*(8+hn(o+1)*14),l+Math.sin(c)*(8+hn(o+1)*14)),e.stroke()}this.grainCanvas=t,this.mat=new qt({map:this.tex,roughness:.42,clearcoat:.45,clearcoatRoughness:.3});let n=new qt({color:"#f0b3b3",roughness:.5}),s=new Rt(new se(.43,.43,.07,48),[n,this.mat,n]);s.position.y=.045,s.castShadow=!0,s.receiveShadow=!0,this.inner.add(s),this.rimMat=new qt({color:"#fbe4e0",roughness:.35,clearcoat:.6});let r=new Rt(new en(.43,.04,10,56),this.rimMat);r.rotation.x=Math.PI/2,r.position.y=.045,r.castShadow=!0,this.inner.add(r)}_buildSausage(){this.mat=new qt({vertexColors:!0,roughness:.36,clearcoat:.85,clearcoatRoughness:.18}),this.links=[],[[-.2,.05,1],[.2,-.07,-1]].forEach(([t,e,n])=>{let s=new Xn(.11,.66,10,22).rotateZ(Math.PI/2),r=s.attributes.position;for(let a=0;a<r.count;a++){let l=r.getX(a);r.setY(a,r.getY(a)+n*.05*(1-Math.pow(l/.44,2)))}s.computeVertexNormals(),s.setAttribute("color",new Je(new Float32Array(r.count*3),3));let o=new Rt(s,this.mat);o.position.set(0,.115,t),o.rotation.y=e,o.castShadow=!0,o.receiveShadow=!0,this.inner.add(o),this.links.push(o)})}_buildCheese(){this.mat=new qt({color:"#ffc83d",roughness:.28,clearcoat:.7}),this.slice=new Rt(new re(.74,.05,.74,3,.022),this.mat),this.slice.position.y=.03,this.slice.rotation.y=.3,this.slice.castShadow=!0,this.slice.receiveShadow=!0,this.inner.add(this.slice),this.poolMat=new qt({color:"#ffd24a",roughness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:0});let t=new Ln(Iy(.5,40,.06,1.3),6);t.rotateX(-Math.PI/2),this.pool=new Rt(t,this.poolMat),this.pool.position.y=.012,this.pool.scale.setScalar(.4),this.pool.receiveShadow=!0,this.inner.add(this.pool)}_buildRice(){Aa=Aa||new Xn(.022,.085,3,6).rotateZ(Math.PI/2),Ra=Ra||new Li(.06,0),Ca=Ca||new Oe(.04,8,6),Pa=Pa||new ve(.06,.04,.06),this.riceMat=new qt({color:"#fffdf6",roughness:.42,clearcoat:.35,clearcoatRoughness:.3}),this.bitMat=new qt({color:"#ffd23a",roughness:.35,clearcoat:.3}),this.peaMat=new qt({color:"#79c56a",roughness:.4,clearcoat:.4}),this.carMat=new qt({color:"#f08a3c",roughness:.45}),this.riceN=380,this.bitN=34,this.peaN=16,this.carN=12;let t=(s,r,o,a=!0)=>{let l=new an(s,r,o);return l.castShadow=a,l.frustumCulled=!1,l};this.grains=t(Aa,this.riceMat,this.riceN),this.bits=t(Ra,this.bitMat,this.bitN),this.peas=t(Ca,this.peaMat,this.peaN),this.carrots=t(Pa,this.carMat,this.carN),this.bits.visible=this.peas.visible=this.carrots.visible=!1;let e=new Ut;this.rseed=Array.from({length:this.riceN},(s,r)=>{let o={a:Math.random()*6.283,r:.62*Math.sqrt(Math.random()),rot:Math.random()*6.28,tilt:(Math.random()-.5)*.9,y:Math.random()};return e.setScalar(.9+Math.random()*.1),this.grains.setColorAt(r,e),o});let n=(s,r)=>Array.from({length:s},()=>({a:Math.random()*6.283,r:r*Math.sqrt(Math.random()),rot:Math.random()*6.28,y:Math.random()}));this.bseed=n(this.bitN,.55),this.pseed=n(this.peaN,.5),this.cseed=n(this.carN,.5),this.inner.add(this.grains,this.bits,this.peas,this.carrots),this.specks=null}get done(){return this.kind==="cheese"?this.melt:this.kind==="rice"?this.c[0]:(this.c[0]+this.c[1])/2}get maxBrown(){return Math.max(this.brown[0],this.brown[1])}update(t,e,n){let s=Math.max(0,e-65)/70*.05*this.spec.rate,r=(Math.max(0,e-118)/130*.034+Math.max(0,e-185)/55*.06)*this.spec.brown;if((n.buttered||this.kind==="bacon"||this.kind==="sausage")&&(r*=.7),this.kind==="cheese")this.melt=Math.min(1.3,this.melt+Math.max(0,e-55)/70*.06*t),this.brown[0]=Be(this.brown[0]+r*.4*t);else if(this.kind==="rice"){let o=n.time-this.lastToss<1.5;this.c[0]=Math.min(1.4,this.c[0]+s*t),this.brown[0]=Be(this.brown[0]+r*(o?.3:1.1)*t),this.egg&&(this.eggRaw=Math.min(1,this.eggRaw+s*1.5*t))}else{let o=1-this.top;this.c[o]=Math.min(1.4,this.c[o]+s*t),this.c[this.top]=Math.min(1.4,this.c[this.top]+s*.28*t),this.brown[o]=Be(this.brown[o]+r*t),this.brown[this.top]=Be(this.brown[this.top]+r*.04*t)}this.dirty=!0}flip(){this.top=1-this.top,this.flips++,this.dirty=!0,this._lastK=-1,this.refresh(!0)}mergeEgg(t){this.egg=!0,this.eggRaw=Be(t),this.dirty=!0,this.refresh(!0)}addSeasoning(t,e=5){let n=t==="salt"?this.saltFlecks:this.pepperFlecks;t==="salt"?this.salt++:this.pepper++;let s=new Ee,r=Math.min(.5,this.R*.85);for(let o=0;o<e&&n.count<60;o++){let a=Math.sqrt(Math.random())*r,l=Math.random()*Math.PI*2;s.position.set(Math.cos(l)*a,this.kind==="rice"?.2:.09,Math.sin(l)*a),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),s.scale.setScalar(.7+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(n.count,s.matrix),n.count++}n.instanceMatrix.needsUpdate=!0}refresh(t=!1){if(!t){if(!this.dirty)return;let o=performance.now();if(o-this._rt<110)return;this._rt=o}this.dirty=!1;let e=this.top,n=Be(this.c[e]),s=this.brown[e],r=this.kind;r==="bacon"?this._refreshBacon(n,s):r==="ham"?this._refreshHam(n,s):r==="sausage"?this._refreshSausage():r==="cheese"?this._refreshCheese():this._refreshRice()}_refreshBacon(t,e){let n=this.ctx,s=Nn("#d24f52").lerp(Nn("#a2452a"),t).lerp(Nn("#4a2818"),Be((e-.35)/.8)),r=Nn("#fbe9e2").lerp(Nn("#efb866"),t).lerp(Nn("#6a3f1f"),Be((e-.25)/.8));n.fillStyle=ch(s),n.fillRect(0,0,128,64);for(let o of this.bands)if(o.fat){n.fillStyle=ch(r),n.beginPath(),n.moveTo(0,o.y);for(let a=0;a<=128;a+=8)n.lineTo(a,o.y+Math.sin(a*.11+o.ph)*1.8);for(let a=128;a>=0;a-=8)n.lineTo(a,o.y+o.h+Math.sin(a*.09+o.ph*1.7)*1.8);n.closePath(),n.fill()}if(t>.6){n.fillStyle=`rgba(255,210,120,${(t-.6)*.5})`;for(let o=0;o<40;o++)n.fillRect(hn(o)*128,hn(o+40)*64,2,1.5)}this.tex.needsUpdate=!0,Math.abs(t-this._lastK)>.02&&(this._lastK=t,this.strips.forEach(o=>Py(o.geometry,t))),this.mat.roughness=.34+t*.2}_refreshHam(t,e){let n=this.ctx;if(n.fillStyle=ch(Nn("#f4a3a8").lerp(Nn("#d6787d"),t)),n.fillRect(0,0,128,128),n.globalAlpha=.9,n.drawImage(this.grainCanvas,0,0),n.globalAlpha=1,e>.05){n.save(),n.translate(64,64),n.rotate(.7),n.strokeStyle=`rgba(70,30,20,${Be(e*1.6)*.75})`,n.lineWidth=7;for(let o=-3;o<=3;o++)n.beginPath(),n.moveTo(-70,o*20),n.lineTo(70,o*20),n.stroke();n.restore()}let s=n.createRadialGradient(64,64,20,64,64,66),r=o=>(kd(o,yn),`rgba(${yn.r*255|0},${yn.g*255|0},${yn.b*255|0},${Be(o/.45)*.85})`);s.addColorStop(0,r(e*.2)),s.addColorStop(.75,r(e*.7)),s.addColorStop(1,r(e*1.3)),n.fillStyle=s,n.fillRect(0,0,128,128),this.tex.needsUpdate=!0,this.rimMat.color.set("#fbe4e0").lerp(Od.set("#efc183"),t).lerp(Hr,Be(e*.9))}_refreshSausage(){let t=1-this.top;this.links.forEach((e,n)=>{let s=e.geometry,r=s.attributes.position,o=s.attributes.normal,a=s.attributes.color;for(let l=0;l<r.count;l++){let c=o.getY(l),h=Bd(.35,-.55,c),u=Be(this.c[this.top]*(1-h)+this.c[t]*h),d=this.brown[this.top]*(1-h)+this.brown[t]*h,f=.75+hn(l*.37+n*91)*.5;yn.set("#ee9d89").lerp(Od.set("#c4704a"),u),d>.02&&(kd(Math.min(1.2,d*f*1.15),Fd),yn.lerp(Fd,Be(d*1.8))),Math.sin(r.getX(l)*26)>.94&&c>.3&&yn.multiplyScalar(.84),a.setXYZ(l,yn.r,yn.g,yn.b)}a.needsUpdate=!0})}_refreshCheese(){let t=Be(this.melt);this.slice.scale.set(1+t*.5,1-t*.7,1+t*.5),this.slice.position.y=.03-t*.012,this.mat.color.set("#ffc83d").lerp(yn.set("#ffd864"),t).lerp(Hr,Be(this.brown[0]*.8)),this.poolMat.opacity=Bd(.05,.5,t)*.95,this.pool.scale.setScalar(.45+.75*t),this.poolMat.color.copy(this.mat.color)}_refreshRice(){let t=Be(this.c[0]*.5+this.brown[0]*.9);this.riceMat.color.set("#fffdf6").lerp(yn.set("#eac07a"),t).lerp(zd,Be((this.brown[0]-.7)/.5)),this.riceMat.roughness=.42+this.c[0]*.15;let e=this.egg;this.bits.visible=this.peas.visible=this.carrots.visible=e,this.bitMat.color.set("#ffb21e").lerp(yn.set("#ffdc4a"),Be(this.eggRaw)).lerp(Hr,Be(this.brown[0]*.6)),this._layoutRice()}_layoutRice(){let t=this._d||(this._d=new Ee),e=.62;this.rseed.forEach((s,r)=>{let o=s.a+this.toss*.25,a=1-s.r*s.r/(e*e);t.position.set(Math.cos(o)*s.r,.045+a*.13+s.y*.04,Math.sin(o)*s.r),t.rotation.set(s.tilt,s.rot,s.tilt*.6),t.scale.setScalar(1),t.updateMatrix(),this.grains.setMatrixAt(r,t.matrix)});let n=(s,r,o,a)=>{r.forEach((l,c)=>{let h=l.a+this.toss*.25,u=1-l.r*l.r/(e*e);t.position.set(Math.cos(h)*l.r,o+u*.12,Math.sin(h)*l.r),t.rotation.set(l.rot,l.rot*2,l.rot*.5),t.scale.set(a,a*(.7+l.y*.5),a*(.8+l.y*.4)),t.updateMatrix(),s.setMatrixAt(c,t.matrix)}),s.instanceMatrix.needsUpdate=!0};n(this.bits,this.bseed,.2,1.3),n(this.peas,this.pseed,.19,1),n(this.carrots,this.cseed,.19,1),this.grains.instanceMatrix.needsUpdate=!0,this.grains.instanceColor&&(this.grains.instanceColor.needsUpdate=!0)}dispose(){this.group.parent&&this.group.parent.remove(this.group);let t=[wa,Ta,Aa,Ra,Ca,Pa];this.group.traverse(e=>{e.isMesh&&e.geometry&&!t.includes(e.geometry)&&e.geometry.dispose()}),[this.mat,this.riceMat,this.bitMat,this.peaMat,this.carMat,this.rimMat,this.poolMat,this.saltFlecks.material,this.pepperFlecks.material].forEach(e=>e&&e.dispose()),this.tex&&this.tex.dispose()}};var Ly=[["\u{1F43B}","Bruno"],["\u{1F430}","Pip"],["\u{1F431}","Miso"],["\u{1F98A}","Fern"],["\u{1F43C}","Bao"],["\u{1F438}","Ribbit"],["\u{1F427}","Waddles"],["\u{1F428}","Kiki"],["\u{1F437}","Truffle"],["\u{1F989}","Hoot"]],Vr=i=>i[Math.random()*i.length|0],Dy=i=>{i=i.slice();for(let t=i.length-1;t>0;t--){let e=Math.random()*(t+1)|0;[i[t],i[e]]=[i[e],i[t]]}return i};function je(i,t,e,n,s,r,o=[],a=[]){return{recipe:i,level:t,salt:e,pepper:n,patience:s,avatar:r[0],name:r[1],extras:o,fill:a}}var pi=(i,t)=>({kind:i,level:t});function Hd(){let i=Dy(Ly);return[je("sunny","runny",!0,!1,150,i[0]),Vr([()=>je("scrambled","soft",!0,!0,150,i[1]),()=>je("sunny","runny",!0,!1,170,i[1],[pi("bacon","crisp")]),()=>je("scrambled","soft",!0,!1,170,i[1],[pi("sausage","browned")])])(),Vr([()=>je("over","easy",!0,!0,150,i[2]),()=>je("sunny","jammy",!1,!0,170,i[2],[pi("ham","seared")]),()=>je("over","easy",!0,!1,170,i[2],[pi("bacon","chewy")])])(),Vr([()=>je("omelette","soft",!0,!1,175,i[3],[],["cheese"]),()=>je("friedrice","fluffy",!1,!0,175,i[3]),()=>je("omelette","medium",!1,!0,175,i[3],[],["ham"]),()=>je("over","medium",!0,!1,160,i[3],[pi("bacon","crisp")])])(),Vr([()=>je("omelette","medium",!0,!0,200,i[4],[],["cheese","ham"]),()=>je("friedrice","crispy",!0,!0,200,i[4],[pi("sausage","browned")]),()=>je("scrambled","well",!0,!0,190,i[4],[pi("bacon","crisp")],["cheese"]),()=>je("over","hard",!0,!0,190,i[4],[pi("bacon","crisp"),pi("sausage","browned")])])()]}var Vd=()=>je("sunny","runny",!0,!1,9999,["\u{1F423}","Chick"]),uh=i=>oh[i.recipe][i.level].label;var dh=i=>`${_e[i.kind].icon} ${_e[i.kind].levels[i.level].label} ${_e[i.kind].name.toLowerCase()}`,fh=(i,t)=>`${_e[i].icon} ${_e[i].name} ${t==="omelette"?"inside":"on top"}`,Uy=i=>i.y||i.w||i.c;function Gd(i,t){return t==="scrambled"||t==="omelette"?i.w:i.y}function ph(i,t){return Uy(oh[i][t])}var hh={sunny:.85,over:.9,scrambled:0,omelette:0};function Ny(i){return i>=85?3:i>=60?2:i>=30?1:0}var mh=(i,[t,e])=>i<t?t-i:i>e?i-e:0;function Wd(i,t){let e=0,n=[],s=(r,o,a,l)=>{o?r>=1&&r<=6?(e+=a,n.push(`${l} \u2713`)):r>6?(e+=a/2,n.push(`too much ${l}`)):n.push(`no ${l}`):r===0?e+=a:(e+=1,n.push(`didn't want ${l}`))};return s(i.salt,t.salt,4,"salt"),s(i.pepper,t.pepper,3,"pepper"),i.buttered?(e+=3,n.push("buttery")):n.push("no butter"),[Math.round(e),n.join(", ")]}function Oy(i,t){let e=t.recipe,n=i.recipe,s=_=>_==="sunny"||_==="over",r,o;n===e?(r=30,o=es[e]):n==="sheet"&&e==="omelette"?(r=20,o="Forgot to fold the omelette"):s(n)&&s(e)?(r=10,o=`Made ${es[n].toLowerCase()} instead`):(r=0,o=`Made ${es[n].toLowerCase()} instead`);let a=ph(e,t.level),l=Gd(i,e),c=mh(l,a),h=40*Math.max(0,1-c/.3),u=c===0?"Perfect!":l<a[0]?"A little underdone":"A bit overcooked";c>.2&&(u=l<a[0]?"Undercooked":"Overcooked");let d=hh[e];!i.scrambled&&!i.mixed&&d&&i.w<d&&(h*=Math.max(0,Math.min(1,(i.w-.4)/(d-.4))),u="Egg white still runny"),n!==e&&(h*=.5);let f=20,g=[];return i.yolkBroken&&s(n)&&s(e)&&(f-=10,g.push("broken yolk")),i.torn&&(f-=6,g.push(i.folded?"spilled when folding":"torn")),i.maxBrown>.75?(f-=14,g.push("burnt")):i.maxBrown>.5&&(f-=6,g.push("very brown")),i.stuck&&(f-=4,g.push("stuck to pan")),i.scrambled&&i.stirTotal<3+i.w*6&&(f-=6,g.push("lumpy curds")),{rec:[r,o],don:[Math.round(h),u],cond:[Math.max(0,f),g.length?g.join(", "):"Beautiful"],sea:Wd(i,t)}}function Fy(i,t){let e=i.egg?i.toss>=Math.PI*3?30:22:10,n=i.egg?"Proper egg fried rice!":"Plain rice \u2014 no egg tossed in",s=ph("friedrice",t.level),r=mh(i.c[0],s),o=40*Math.max(0,1-r/.3),a=r===0?"Perfect!":i.c[0]<s[0]?"Too soft":"A bit over-fried";i.egg&&i.eggRaw<.9&&(o*=.7,a+=", egg still raw");let l=20,c=[];return i.maxBrown>.75?(l-=14,c.push("burnt")):i.maxBrown>.5&&(l-=6,c.push("very brown")),i.toss<Math.PI*1.5&&(l-=5,c.push("not tossed")),{rec:[e,n],don:[Math.round(o),a],cond:[Math.max(0,l),c.length?c.join(", "):"Beautiful"],sea:Wd(i,t)}}function Xd(i,t,{late:e=!1,ings:n=[]}={}){let s=n.find(p=>p.kind==="rice"),r;t.recipe==="friedrice"?r=s?Fy(s,t):{rec:[i?4:0,i?"Served egg instead of fried rice":"No fried rice on the plate!"],don:[0,"\u2014"],cond:[0,"\u2014"],sea:[0,"\u2014"]}:i?r=Oy(i,t):r={rec:[0,"No egg on the plate!"],don:[0,"\u2014"],cond:[0,"\u2014"],sea:[0,"\u2014"]};let[o,a]=r.rec,[l,c]=r.don,[h,u]=r.cond,d=t.extras||[],f=t.fill||[],g=d.length+f.length;if(g){let p=T=>n.some(R=>R.kind===T)||!!(i&&i.fills&&i.fills.includes(T)),b=0,v=0,x=0,L=[];for(let T of d){let R=n.find(I=>I.kind===T.kind),P=_e[T.kind].name;if(!R){L.push(`missing ${P.toLowerCase()}`);continue}b++;let S=_e[T.kind].levels[T.level].w,M=mh(R.done,S);v+=Math.max(0,1-M/.3),R.maxBrown>.75?(x+=6,L.push(`${P} burnt`)):L.push(`${P} ${M===0?"just right \u2713":R.done<S[0]?"undercooked":"overdone"}`),T.kind!=="cheese"&&Math.abs(R.c[0]-R.c[1])>.55&&(x+=3,L.push("uneven"))}for(let T of f)p(T)?(b++,L.push(`${_e[T].name} \u2713`)):L.push(`missing ${_e[T].name.toLowerCase()}`);o=Math.round(o*20/30+10*b/g),d.length&&(l=Math.round(l*28/40+12*v/d.length)),h=Math.max(0,h-x),c+=" \xB7 "+L.join(", ")}let _=[{label:"Recipe",max:30,pts:o,note:a},{label:"Doneness",max:40,pts:l,note:c},{label:"Condition",max:20,pts:h,note:u},{label:"Seasoning",max:10,pts:r.sea[0],note:r.sea[1]}],m=_.reduce((p,b)=>p+b.pts,0);return e&&(m=Math.max(0,m-5),_.push({label:"Late",max:0,pts:-5,note:"The customer waited too long"})),{total:m,stars:Ny(m),lines:_}}function qd(i){return Vr([["Hmm\u2026 is this even an egg?","I think I'll just have toast.","Well\u2026 I'm sure you tried!"],["It's\u2026 edible!","Not bad, keep practicing!","Close, but not quite."],["Yum, pretty good!","Tasty! Thank you!","Nice job, chef!"],["PERFECTION! \u{1F929}","Best egg in town!","Chef's kiss! \u{1F48B}","I could cry, it's so good!"]][i])}function Yd(i,t=[]){let e=t.find(r=>r.kind==="rice"),n=[];if(e&&n.push(e.egg?"Egg fried rice":"Plain rice"),i){let r=i.recipe,o;r==="scrambled"?o=i.w<.5?"Runny scrambled eggs":i.w<.78?"Soft, creamy scrambled eggs":i.w<.92?"Fluffy scrambled eggs":"Well-done scrambled eggs":r==="omelette"?o=(i.fills.length?`A ${i.fills.map(l=>_e[l].name.toLowerCase()).join(" & ")} omelette`:"A plain omelette")+(i.w<.5?", still runny":i.w<.8?", soft inside":", cooked through"):r==="sheet"?o="A flat, unfolded omelette":r==="over"?o=i.y<.4?"An over-easy egg":i.y<.7?"An over-medium egg":"An over-hard egg":o=i.y<.35?"A sunny-side up egg with a runny yolk":i.y<.7?"A sunny egg with a jammy yolk":"A sunny egg with a firm yolk";let a=[];i.maxBrown>.75?a.push("burnt to a crisp"):i.maxBrown>.45?a.push("crispy brown edges"):i.maxBrown>.2&&a.push("golden lacy edges"),r==="sunny"&&i.w<.8&&a.push("a little runny on top"),i.yolkBroken&&(r==="sunny"||r==="over")&&a.push("a broken yolk"),i.salt&&a.push("salted"),i.pepper&&a.push("peppered"),n.push(o+(a.length?", "+a.join(", "):""))}let s=t.filter(r=>r.kind!=="rice").map(r=>`${r.maxBrown>.75?"burnt":r.done>.85?"crispy":r.done>.45?"nicely cooked":"lightly cooked"} ${r.spec.name.toLowerCase()}`);return s.length&&n.push("with "+s.join(" & ")),(n.join(" ")||"An empty plate")+"."}function gh(i,t){if(!i)return null;let{recipe:e,level:n}=t;if(i.maxBrown>.55)return{cls:"burning",label:"Burning!",p:1};if(e==="friedrice")return{cls:i.w<.15?"raw":"cooking",label:i.w<.15?"Raw":"Toss it into the rice",p:Math.max(.15,i.w)};let[s,r]=ph(e,n),o=Gd(i,e),a=e==="scrambled"||e==="omelette",l=i.scrambled||i.mixed||i.w>=(hh[e]||0);if(i.w<.15)return{cls:"raw",label:"Raw",p:i.w/.15*.15};if(o>=s&&o<=r&&l)return{cls:"ready",label:"Ready!",p:1};if(o>r&&l)return{cls:"burning",label:"Overdone",p:1};let c=Math.min(a?o/Math.max(s,.01):Math.min(i.w/(hh[e]||1),s>0?o/s:1),1);return{cls:"cooking",label:"Cooking",p:Math.max(.15,c*.95)}}function _h(i,t){if(i.maxBrown>.55)return{cls:"burning",label:`${_e[i.kind].icon} Burning!`,p:1};let e=i.done,n=_e[i.kind],s=t&&n.levels[t]?n.levels[t].w:i.kind==="rice"?[.45,.8]:Object.values(n.levels)[0].w;return e<.1?{cls:"raw",label:`${n.icon} Raw`,p:.1}:e>=s[0]&&e<=s[1]?{cls:"ready",label:`${n.icon} Ready!`,p:1}:e>s[1]?{cls:"burning",label:`${n.icon} Overdone`,p:1}:{cls:"cooking",label:`${n.icon} Cooking`,p:Math.max(.12,e/s[0]*.95)}}var Gr=[{text:"Drag the butter \u{1F9C8} into the pan (or just tap Butter).",tool:"butter",done:i=>i.butter.amount>0},{text:"Turn the heat dial up to about 5.",done:i=>i.heat>=4},{text:"Wait for the butter to melt and foam.",done:i=>i.butter.melt>.55},{text:"Drag an egg \u{1F95A} over the pan.",tool:"egg",done:i=>!!i.crack||!!i.food},{text:"Tap the egg to crack the shell.",done:i=>i.crack&&i.crack.stage!=="hover"||!!i.food},{text:"Drag the shell halves apart \u2194 \u2014 gently!",done:i=>!!i.food},{text:"Cook until the white is opaque. Watch the guide above the pan.",done:i=>i.food&&i.food.w>=.85},{text:"Touch the egg with the spatula and drag it onto the plate \u{1F37D}\uFE0F.",tool:"spatula",done:i=>i.foodLoc==="plate"},{text:"Shake on some salt \u{1F9C2} (drag the shaker & wiggle, or tap Salt).",tool:"salt",done:i=>i.food&&i.food.salt>0},{text:"Tap Serve \u{1F6CE}\uFE0F!",tool:"serve",done:i=>i.servedCount>0}];var Xt=null,Wr,is,Ks,yh,mi=null,xh=0,Ia=null,Js=0,Da=0,La={music:.45,sfx:.8};function ky(){let i=Xt.sampleRate*2,t=Xt.createBuffer(1,i,Xt.sampleRate),e=t.getChannelData(0);for(let n=0;n<i;n++)e[n]=Math.random()*2-1;return t}function jd(i,t,e,n,s){i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n,t+e),i.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function un({freq:i=2e3,q:t=1,type:e="bandpass",peak:n=.5,attack:s=.002,decay:r=.08,when:o=0,rate:a=1}){if(!Xt)return;let l=Xt.currentTime+o,c=Xt.createBufferSource();c.buffer=yh,c.playbackRate.value=a;let h=Xt.createBiquadFilter();h.type=e,h.frequency.value=i,h.Q.value=t;let u=Xt.createGain();c.connect(h),h.connect(u),u.connect(is),jd(u,l,s,n,r),c.start(l,Math.random()*1.5),c.stop(l+s+r+.05)}function dn({freq:i=440,type:t="sine",peak:e=.3,attack:n=.005,decay:s=.3,when:r=0,slide:o=0,bus:a=null}){if(!Xt)return;let l=Xt.currentTime+r,c=Xt.createOscillator();c.type=t,c.frequency.setValueAtTime(i,l),o&&c.frequency.exponentialRampToValueAtTime(Math.max(30,i*o),l+n+s);let h=Xt.createGain();c.connect(h),h.connect(a||is),jd(h,l,n,e,s),c.start(l),c.stop(l+n+s+.05)}var bt={get ready(){return!!Xt},init(){if(Xt)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Xt=new i,Wr=Xt.createGain(),Wr.gain.value=1;let t=Xt.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,Wr.connect(t),t.connect(Xt.destination),is=Xt.createGain(),is.gain.value=La.sfx,is.connect(Wr),Ks=Xt.createGain(),Ks.gain.value=La.music*.5,Ks.connect(Wr),yh=ky();let e=Xt.createBufferSource();e.buffer=yh,e.loop=!0;let n=Xt.createBiquadFilter();n.type="highpass",n.frequency.value=2500;let s=Xt.createBiquadFilter();s.type="bandpass",s.frequency.value=5200,s.Q.value=.6;let r=Xt.createGain();r.gain.value=0,e.connect(n),n.connect(s),s.connect(r),r.connect(is),e.start(),mi={g:r,bp:s,level:0,butter:0}},resume(){Xt&&Xt.state!=="running"&&Xt.resume()},suspend(){Xt&&Xt.state==="running"&&Xt.suspend()},setVolumes(i,t){La.music=i,La.sfx=t,Xt&&(is.gain.setTargetAtTime(t,Xt.currentTime,.05),Ks.gain.setTargetAtTime(i*.5,Xt.currentTime,.05))},setSizzle(i,t,e){if(!mi)return;mi.level=i,mi.butter=t;let n=Xt.currentTime;mi.g.gain.setTargetAtTime(Math.min(.32,i*.3),n,.25),mi.bp.frequency.setTargetAtTime(3800+i*3500,n,.3),i>.05&&Math.random()<i*e*22&&un({freq:3e3+Math.random()*5e3,q:2,peak:.08+i*.25,decay:.012+Math.random()*.02}),xh-=e,t>.05&&xh<=0&&(xh=.03+Math.random()*(.25/(t+.2)),dn({freq:500+Math.random()*700,type:"sine",peak:.04*t,attack:.002,decay:.05,slide:1.8}))},crack(){un({freq:1800,q:1.5,peak:.9,decay:.05}),un({freq:3500,q:3,peak:.6,decay:.03,when:.025}),un({freq:900,q:2,peak:.5,decay:.07,when:.05}),dn({freq:220,type:"triangle",peak:.25,decay:.08,slide:.5})},shellPull(){un({freq:2400,q:4,peak:.25,decay:.12})},plop(){dn({freq:380,type:"sine",peak:.45,attack:.003,decay:.16,slide:.45}),un({freq:1200,q:.8,peak:.35,decay:.15,when:.02}),mi&&mi.level>.15&&un({freq:6e3,type:"highpass",peak:.35*mi.level,decay:.7,attack:.02})},butterDrop(){dn({freq:260,type:"sine",peak:.3,decay:.12,slide:.6})},scrape(i){Math.random()<.5&&un({freq:1400+Math.random()*1600,q:6,peak:.12*i,decay:.05})},clink(){dn({freq:2350,type:"sine",peak:.22,decay:.5}),dn({freq:3510,type:"sine",peak:.12,decay:.35}),dn({freq:5120,type:"sine",peak:.05,decay:.2})},thud(){dn({freq:140,type:"sine",peak:.4,decay:.12,slide:.6}),un({freq:500,q:1,peak:.2,decay:.05})},shake(){for(let i=0;i<4;i++)un({freq:6500+Math.random()*2e3,q:1.5,peak:.18,decay:.03,when:i*.018})},flipWhoosh(){un({freq:700,q:.7,peak:.35,attack:.08,decay:.2,rate:.6})},knob(){un({freq:3e3,q:8,peak:.12,decay:.015})},pop(){dn({freq:660,type:"sine",peak:.22,decay:.09,slide:1.6})},pick(){dn({freq:520,type:"triangle",peak:.12,decay:.07,slide:1.3})},ding(){[1046.5,1318.5,1568].forEach((i,t)=>dn({freq:i,type:"sine",peak:.22,decay:.7,when:t*.09}))},fail(){dn({freq:330,type:"triangle",peak:.2,decay:.25,slide:.7}),dn({freq:247,type:"triangle",peak:.2,decay:.35,when:.18,slide:.7})},trash(){un({freq:800,q:.7,peak:.4,decay:.25}),dn({freq:160,type:"sine",peak:.3,decay:.2,when:.1,slide:.6})},tear(){un({freq:1200,q:3,peak:.4,decay:.15,rate:.7})},startMusic(){!Xt||Ia||(Js=0,Da=Xt.currentTime+.1,Ia=setInterval(Vy,60))},stopMusic(){clearInterval(Ia),Ia=null}},zy=84,Zd=60/zy/2,$d=[[261.63,329.63,392,493.88],[220,261.63,329.63,392],[174.61,220,261.63,329.63],[196,246.94,293.66,349.23]],Jd=[523.25,587.33,659.25,783.99,880,1046.5];function Kd(i,t,e){let n=Xt.createOscillator();n.type="triangle",n.frequency.value=i;let s=Xt.createOscillator();s.type="sine",s.frequency.value=i*2;let r=Xt.createGain(),o=Xt.createGain();o.gain.value=.3,n.connect(r),s.connect(o),o.connect(r),r.connect(Ks),r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(e,t+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+.9),n.start(t),s.start(t),n.stop(t+1),s.stop(t+1)}function Hy(i,t,e){for(let n of i){let s=Xt.createOscillator();s.type="sine",s.frequency.value=n/2,s.detune.value=(Math.random()-.5)*8;let r=Xt.createGain();s.connect(r),r.connect(Ks),r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.035,t+.6),r.gain.linearRampToValueAtTime(1e-4,t+e),s.start(t),s.stop(t+e+.1)}}function Vy(){for(;Da<Xt.currentTime+.25;){let i=Da,t=Math.floor(Js/8)%4,e=Js%8;e===0&&Hy($d[t],i,Zd*8+.4),(e===0||e===4)&&Kd($d[t][0]/2,i,.09);let n=(Js*7+t*3)%11;if(e%2===0&&n<6||e%2===1&&n<2){let s=Jd[(Js*5+t*2+n%3)%Jd.length];Kd(s,i+(e%2?.02:0),.07)}Js++,Da+=Zd}}var zt=new A,Jn=new A,Qd=new on,On=i=>1-Math.pow(1-i,3),Gy=i=>Math.atan2(Math.sin(i),Math.cos(i)),Ua=class{constructor(t){Object.assign(this,t),this.listeners={},this.anims=[],this.mode="menu",this.paused=!1,this.time=0,this.heat=0,this.panTemp=Ur,this.butter={amount:0,melt:0,browned:0,pats:[]},this.food=null,this.foodLoc=null,this.crack=null,this.pendingSpots=[],this.flying=new Set,this.ings=[],this.carry=null,this.settings={guide:!0,hints:!0},this.order=null,this.orders=[],this.orderIdx=0,this.roundScore=0,this.results=[],this.orderTime=0,this.servedCount=0,this.tutStep=0,this.camAz=0,this.spat={cooldown:0,stirAngle:0,lastA:null,lastScrape:0,wasInPan:!1,mode:"free"},this.shk={lastY:null,dir:0,extreme:0,cooldown:0},this.fxClock={steam:0,bubble:0,smoke:0,spatter:0},this._buildButterPool()}on(t,e){var n;((n=this.listeners)[t]||(n[t]=[])).push(e)}emit(t,e){(this.listeners[t]||[]).forEach(n=>n(e))}toast(t,e=""){this.emit("toast",{text:t,kind:e})}get panAnchor(){return this.props.pan.userData.foodAnchor}get plateAnchor(){return this.props.plate.userData.foodAnchor}get panOnBurner(){let t=this.props.pan.position;return Math.hypot(t.x-Ve.x,t.z-Ve.z)<.05}get busy(){return this.mode==="menu"||this.paused}_buildButterPool(){let t=new Xe;for(let e=0;e<=48;e++){let n=e/48*Math.PI*2,s=1+.07*Math.sin(5*n)+.04*Math.sin(11*n+1);e?t.lineTo(Math.cos(n)*s,Math.sin(n)*s):t.moveTo(Math.cos(n)*s,Math.sin(n)*s)}this.poolMat=new qt({color:"#ffd65c",roughness:.05,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:0,depthWrite:!1}),this.pool=new Rt(new Ln(t,4),this.poolMat),this.pool.rotation.x=-Math.PI/2,this.pool.position.y=.004,this.pool.scale.setScalar(.01),this.pool.renderOrder=1,this.panAnchor.add(this.pool)}start(t){this.mode=t,this.paused=!1,this.resetKitchen(),this.results=[],this.roundScore=0,this.servedCount=0,this.tutStep=0,t==="orders"?(this.orders=Hd(),this.setOrder(0)):t==="tutorial"?(this.orders=[Vd()],this.setOrder(0)):(this.orders=[],this.order=null),this.emit("mode",t),this.emit("changed")}setOrder(t){this.orderIdx=t,this.order=this.orders[t],this.orderTime=0,this.emit("order",this.order)}resetKitchen(){this.clearFood(!0),this.clearButter(),this.clearIngs(!0),this.setHeat(0,!0),this.panTemp=Ur,this.fx.clear();for(let[t,e]of Object.entries(this.props)){let n=Fe[t==="butterDish"?"butter":t];n&&this.flyTo(e,n.x,n.z,.5)}}clearFood(t=!1){let e=(n,s)=>{if(t){n.parent&&n.parent.remove(n),s&&s();return}this.anim(.35,r=>n.scale.setScalar(Math.max(.001,1-On(r))),()=>{n.parent&&n.parent.remove(n),s&&s()})};if(this.food){let n=this.food;e(n.group,()=>n.dispose())}this.crack&&e(this.crack.group),this.food=null,this.foodLoc=null,this.crack=null}clearButter(){for(let t of this.butter.pats)t.mesh.parent&&t.mesh.parent.remove(t.mesh);this.butter={amount:0,melt:0,browned:0,pats:[]},this.poolMat.opacity=0,this.pool.scale.setScalar(.01),this.poolMat.color.set("#ffd65c")}clearIngs(t=!1){let e=this.ings;this.ings=[],this.carry=null,this.pendingSpots=[];for(let n of this.flying)n.dispose();this.flying.clear();for(let n of e){if(t){n.dispose();continue}let s=n.group;this.scene.attach(s),this.anim(.35,r=>s.scale.setScalar(Math.max(.001,1-On(r))),()=>n.dispose())}}setHeat(t,e=!1){t=Math.max(0,Math.min(10,Math.round(t*10)/10)),Math.floor(t)!==Math.floor(this.heat)&&!e&&bt.knob(),this.heat=t,this.emit("heat",t)}anim(t,e,n){this.anims.push({t:0,dur:t,step:e,done:n})}flyTo(t,e,n,s=.45,r=.6,o){let a=t.position.clone(),l=this.restY(t,e,n);this.anim(s,c=>{let h=On(c);t.position.set(a.x+(e-a.x)*h,a.y+(l-a.y)*h+Math.sin(Math.PI*c)*r,a.z+(n-a.z)*h),t.userData.restRot!==void 0&&(t.rotation.x*=.8)},()=>{t.position.set(e,l,n),o&&o()})}restY(t,e,n){return t===this.props.pan?Math.hypot(e-Ve.x,n-Ve.z)<.05?Lr:fi(e,n):fi(e,n)}addButter(t=0,e=0){if(this.butter.amount>=3)return this.toast("That's plenty of butter! \u{1F9C8}"),!1;let n=Zs(this.mats),s=Math.hypot(t,e);s>.55&&(t*=.55/s,e*=.55/s),n.position.set(t,.08,e),n.rotation.y=Math.random()*3,this.panAnchor.add(n),this.butter.pats.push({mesh:n,melt:0}),this.butter.amount++,this.food&&this.foodLoc==="pan"&&(this.food.buttered=!0);for(let r of this.ings)r.loc==="pan"&&(r.buttered=!0);return bt.butterDrop(),this.emit("changed"),!0}autoButter(){if(this.busy)return;if(this.butter.amount>=3)return this.toast("That's plenty of butter! \u{1F9C8}");let t=Zs(this.mats);this.props.butterDish.getWorldPosition(zt),t.position.copy(zt).setY(.4),this.scene.add(t),this.panAnchor.getWorldPosition(Jn);let e=t.position.clone(),n=Jn.clone().setY(Jn.y+.1);bt.pick(),this.anim(.55,s=>{t.position.lerpVectors(e,n,On(s)),t.position.y+=Math.sin(Math.PI*s)*1.6,t.rotation.z=s*3},()=>{this.scene.remove(t),this.addButter((Math.random()-.5)*.4,(Math.random()-.5)*.4)})}canStartEgg(){return this.food||this.crack?(this.toast("One egg at a time \u2014 serve or toss first!"),!1):!0}beginCrack(t=!1){if(!this.canStartEgg())return!1;let e=new kt,{left:n,right:s}=Rd(this.mats,t),r=new kt,o=new kt;r.add(n),o.add(s),e.add(r,o);let a=new kt,l=new Rt(new Oe(.17,16,12),new qt({color:"#eef3ec",transparent:!0,opacity:.6,roughness:.05,clearcoat:1}));l.scale.set(1,1.4,1);let c=new Rt(new Oe(.11,16,12),new qt({color:"#ffa21a",roughness:.08,clearcoat:1}));return c.position.y=-.05,a.add(l,c),a.scale.setScalar(.01),e.add(a),e.traverse(h=>{h.userData.interact="crackEgg",h.castShadow=!0}),this.scene.add(e),this.crack={group:e,pivotL:r,pivotR:o,drip:a,stage:"hover",sep:0,rough:!1,brown:t,t:0},this._placeCrack(0),bt.pick(),this.emit("changed"),!0}_placeCrack(t){let e=this.crack;e&&(e.t+=t,this.panAnchor.getWorldPosition(zt),e.group.position.set(zt.x,zt.y+1.05+(e.stage==="hover"?Math.sin(e.t*2.5)*.05:0),zt.z),e.group.rotation.set(0,this.camAz,e.stage==="hover"?Math.sin(e.t*1.7)*.08:0))}crackTap(){let t=this.crack;!t||t.stage!=="hover"||(t.stage="cracked",bt.crack(),t.group.getWorldPosition(zt),this.fx.emit("shell",zt,{count:5,spread:.2,floorY:zt.y-1.2,color:t.brown?"#e7b58a":"#fff1df"}),t.pivotL.position.x=-.012,t.pivotR.position.x=.012,t.pivotL.rotation.z=.05,t.pivotR.rotation.z=-.05,this.emit("changed"))}pullApart(t,e){let n=this.crack;if(!n||n.stage==="hover"||n.stage==="released")return;n.stage==="cracked"&&bt.shellPull(),n.stage="pulling",n.sep=Math.max(0,Math.min(1,t)),e>8&&n.sep>.15&&(n.rough=!0);let s=n.sep;n.pivotL.position.x=-.012-s*.32,n.pivotR.position.x=.012+s*.32,n.pivotL.rotation.z=.05+s*1.1,n.pivotR.rotation.z=-.05-s*1.1,n.pivotL.position.y=n.pivotR.position.y=s*.12;let r=Math.max(.01,(s-.12)*1.6);n.drip.scale.set(Math.min(1,r),Math.min(1.3,r*1.2),Math.min(1,r)),n.drip.position.y=-s*.25,n.sep>.6&&this.releaseEgg()}releaseEgg(){let t=this.crack;if(!t||t.stage==="released")return;t.stage="released";let e=new zr({buttered:this.butter.amount>0});e.spread=0,t.rough&&(e.yolkBroken=!0,this.toast("Too rough \u2014 the yolk broke! \u{1F494}","bad"));let n=(Math.random()-.5)*.25,s=(Math.random()-.5)*.25;e.group.position.set(n,.95,s),e.refresh(!0),this.panAnchor.add(e.group),this.food=e,this.foodLoc="pan",this.crack=null;let r=0,o={t:0,dur:9,step:null};o.step=(h,u)=>{r-=14*u,e.group.position.y=Math.max(0,e.group.position.y+r*u),e.group.position.y<=0&&(o.t=o.dur,e.landed=!0,this._landFood())},e.landed=!1,this.anims.push(o);let a=t.group,l=t.pivotL,c=t.pivotR;a.remove(t.drip),this.anim(.7,h=>{l.position.x-=.04,c.position.x+=.04,l.position.y+=.03,c.position.y+=.03,l.rotation.z+=.08,c.rotation.z-=.08,a.scale.setScalar(1-h*.6)},()=>{this.scene.remove(a)}),this.emit("changed")}_landFood(){bt.plop(),this.panTemp>120&&(this.panAnchor.getWorldPosition(zt),this.fx.emit("spatter",zt.setY(zt.y+.1),{count:8,spread:.8})),this.emit("changed")}spatulaStart(t){this.spat.mode=t,this.spat.lastA=null,this.spat.px=null,this.spat.pz=null,this.spat.wasInPan=!1,this.spat.stirAngle=0}spatulaMove(t,e,n,s){let r=this.props.spatula,o=this.props.pan,a=this.props.plate,l=t-o.position.x,c=e-o.position.z,h=Math.hypot(l,c),u=h<Le.innerR+.08,d=Math.hypot(t-a.position.x,e-a.position.z)<Un.r,f=this.foodLoc==="spatula"||!!this.carry,g=u?o.position.y+Le.floorY+.01:d?a.position.y+.1:fi(t,e)+.02;!u&&h<Le.rimR+.2&&(g=o.position.y+Le.height+.04),f&&(g+=.12),r.position.x=t,r.position.z=e,r.position.y+=(g-r.position.y)*Math.min(1,s*18),r.rotation.set(f?-.08:0,this.camAz,0);let _=this.food;this.spat.cooldown-=s;let m=n.y<-650&&Math.abs(n.y)>1.2*Math.abs(n.x)&&this.spat.cooldown<=0;if(this.carry){m&&this.flipIng(-n.y);return}if(_&&this.foodLoc==="spatula"){m&&this.flipFood(-n.y);return}let p=_&&this.foodLoc==="pan"&&_.landed,b=p?Math.hypot(l-_.group.position.x,c-_.group.position.z):99;if(m&&u){let x=this._ingNear(l,c,.25);if(x&&x.ing.kind!=="rice"&&x.ing.kind!=="cheese"&&x.d<b)return this._flipLand={x:x.ing.group.position.x,z:x.ing.group.position.z},this.liftIng(x.ing),this.flipIng(-n.y);if(p&&b<.65&&!_.scrambled&&!_.folded)return this._flipLand={x:_.group.position.x,z:_.group.position.z},this.liftFood(),this.flipFood(-n.y)}if(u&&this.spat.cooldown<=0&&(this.spat.mode==="lift"||this.spat.mode==="free")){let x=this._ingNear(l,c);if(x&&x.ing.kind!=="rice"&&x.d<b)return this.liftIng(x.ing)}if(this.spat.wasInPan&&h>Le.rimR+.1&&!(p&&_.scrambled)){let x=this.ings.find(L=>L.kind==="rice"&&L.loc==="pan");if(x){if(x.c[0]>.2)return this.liftIng(x);this.toast("Let the rice warm up first!"),this.spat.wasInPan=!1}}if(u&&this._pushItems(l,c),!p){this._stirTrack(l,c,h,u,null,s);return}let v=b;if(this.spat.cooldown<=0&&u){if(!_.scrambled&&v<.5&&(this.spat.mode==="lift"||this.spat.mode==="free"))return this.liftFood();if(_.scrambled&&this.spat.mode==="lift"&&v<.75)return this.liftFood()}if(_.scrambled&&this.spat.wasInPan&&h>Le.rimR+.1){if(_.w>.2)return this.liftFood();this.toast("Let them set a little first!"),this.spat.wasInPan=!1}this._stirTrack(l,c,h,u,_,s)}_pushItems(t,e){let n=this.spat;if(n.px==null)return;let s=t-n.px,r=e-n.pz;if(!(Math.hypot(s,r)<.004))for(let o of this.ings){if(o.loc!=="pan"||o.kind==="rice")continue;let a=o.group.position;if(Math.hypot(t-a.x,e-a.z)<o.R*.75+.1){a.x+=s*.85,a.z+=r*.85;let l=Math.hypot(a.x,a.z);l>.62&&(a.x*=.62/l,a.z*=.62/l)}}}_stirTrack(t,e,n,s,r,o){let a=this.spat;if(!s){a.lastA=null,a.px=a.pz=null;return}a.wasInPan=!0;let l=a.px,c=a.pz;if(a.px=t,a.pz=e,l==null)return;let h=Math.hypot(t-l,e-c);if(h<.002)return;let u=(f,g)=>{let _=l-f,m=c-g,p=t-f,b=e-g;if(Math.hypot(_,m)<.12||Math.hypot(p,b)<.12)return 0;let v=Gy(Math.atan2(b,p)-Math.atan2(m,_));return Math.abs(v)>1.2?0:v};h>.01&&this.time-a.lastScrape>.07&&(bt.scrape(Math.min(1,h*8)),a.lastScrape=this.time);let d=u(0,0);if(r){let f=r.group.position.x,g=r.group.position.z;if(Math.hypot(t-f,e-g)<1.15){let _=u(f,g);Math.abs(_)>Math.abs(d)&&(d=_)}}a.stirAngle+=d,r&&!r.scrambled?(Math.abs(a.stirAngle)>Math.PI*.8&&!r.mixed&&(r.mix(),this.toast("Beaten smooth! Stop for an omelette \u2014 keep stirring to scramble \u{1F944}","good"),this.emit("changed")),Math.abs(a.stirAngle)>Math.PI*3&&(r.scramble(),this.toast("Scrambling! \u{1F944}","good"),this.emit("changed"))):r&&r.scrambled&&r.stir(h*1.6,this.time);for(let f of this.ings){if(f.kind!=="rice"||f.loc!=="pan")continue;let g=f.group.position.x,_=f.group.position.z;if(Math.hypot(t-g,e-_)<f.R+.5){let m=Math.max(Math.abs(u(g,_)),Math.abs(d));m>0&&(f.toss+=m,f.lastToss=this.time,f.dirty=!0)}}}_ingNear(t,e,n=0){let s=null;for(let r of this.ings){if(r.loc!=="pan")continue;let o=Math.hypot(t-r.group.position.x,e-r.group.position.z);o<r.R*.85+.1+n&&(!s||o<s.d)&&(s={ing:r,d:o})}return s}_freeSpot(){let t=[[.42,.5],[-.42,.5],[.42,-.5],[-.42,-.5],[0,.64],[0,-.64]],e=this.ings.filter(n=>n.loc==="pan").map(n=>n.group.position).concat(this.food&&this.foodLoc==="pan"?[this.food.group.position]:[],this.pendingSpots.map(n=>({x:n[0],z:n[1]})));return t.find(([n,s])=>e.every(r=>Math.hypot(r.x-n,r.z-s)>.75))||t[0]}canAddIng(t,e){return!this.ings.some(n=>n.kind===t&&n.loc===e)}placeIngredient(t,e,n=0,s=0){if(t.loc=e,e==="pan"){let r=Math.hypot(n,s);r>.62&&(n*=.62/r,s*=.62/r),t.buttered=this.butter.amount>0,this.panAnchor.add(t.group),t.group.position.set(n,.01,s),bt.plop()}else{let r=ef[t.kind]||[0,0];this.plateAnchor.add(t.group),t.group.position.set(r[0],0,r[1]),bt.clink()}t.group.rotation.set(0,t.yaw,0),t.group.scale.setScalar(1),this.ings.includes(t)||this.ings.push(t),t.dirty=!0,t.refresh(!0),this.emit("changed")}autoIngredient(t){if(this.busy)return;if(!this.canAddIng(t,"pan"))return this.toast(`${_e[t].name} is already in the pan`);let e=new $s(t,{buttered:this.butter.amount>0});e.loc="air",this.scene.add(e.group);let n=this._freeSpot();this.pendingSpots.push(n),this.flying.add(e),this.panAnchor.getWorldPosition(Jn);let s=Jn.clone().add(new A(.6,1.4,3.2)),r=this.panAnchor.localToWorld(new A(n[0],.08,n[1]));bt.pick(),this.anim(.55,o=>{e.group.position.lerpVectors(s,r,On(o)),e.group.position.y+=Math.sin(Math.PI*o)*1.1,e.group.rotation.set(0,o*3,0)},()=>{this.pendingSpots=this.pendingSpots.filter(o=>o!==n),this.flying.delete(e)&&(this.scene.remove(e.group),this.placeIngredient(e,"pan",n[0],n[1]))})}liftIng(t){this.carry={ing:t},t.loc="spatula",this.props.spatula.add(t.group),t.group.position.set(0,.05,-.02),t.group.rotation.set(0,0,0),t.group.scale.setScalar(.62),bt.scrape(1),this.emit("changed")}flipIng(t){let e=this.carry&&this.carry.ing;if(!e)return;let n=e.group,s=this.props.pan,r=this.props.spatula.position;this.carry=null,e.loc="air",this.scene.attach(n),n.scale.setScalar(1);let o=n.position.clone(),a=this._flipLand;this._flipLand=null;let l=a?a.x:r.x-s.position.x,c=a?a.z:r.z-s.position.z,h=Math.hypot(l,c);h>.55&&(l*=.55/h,c*=.55/h);let u=new A(Math.cos(this.camAz),0,-Math.sin(this.camAz)),d=!1;bt.flipWhoosh(),this.anim(.58,f=>{this.panAnchor.getWorldPosition(zt),zt.x+=l,zt.z+=c,n.position.lerpVectors(o,zt,f),n.position.y+=Math.sin(Math.PI*f)*1,!d&&f>=.5&&(d=!0,e.flip()),n.quaternion.setFromAxisAngle(u,d?Math.PI*f-Math.PI:Math.PI*f)},()=>{d||e.flip(),this.panAnchor.add(n),n.position.set(l,.01,c),n.rotation.set(0,e.yaw,0),e.loc="pan",this.spat.cooldown=.7,this.spat.mode="stir",bt.plop(),e.flips===1&&this.toast(`Nice flip! ${_e[e.kind].icon}`,"good"),this.emit("changed")})}plateIng(){let t=this.carry&&this.carry.ing;if(!t)return;this.carry=null,t.loc="air";let e=t.group;this.scene.attach(e),e.scale.setScalar(1);let n=e.position.clone(),s=ef[t.kind]||[0,0];this.anim(.4,r=>{this.plateAnchor.localToWorld(zt.set(s[0],.05,s[1])),e.position.lerpVectors(n,zt,On(r)),e.position.y+=Math.sin(Math.PI*r)*.5},()=>this.placeIngredient(t,"plate"))}dropIngToPan(){let t=this.carry&&this.carry.ing;if(!t)return;let e=this.props.pan,n=this.props.spatula.position,s=n.x-e.position.x,r=n.z-e.position.z,o=Math.hypot(s,r);o>.55&&(s*=.55/o,r*=.55/o),this.carry=null,t.loc="air";let a=t.group;this.scene.attach(a),a.scale.setScalar(1);let l=a.position.clone();this.anim(.3,c=>{this.panAnchor.getWorldPosition(zt),zt.x+=s,zt.z+=r,a.position.lerpVectors(l,zt,On(c))},()=>this.placeIngredient(t,"pan",s,r))}_mergeRice(){let t=this.ings.find(n=>n.kind==="rice"&&n.loc==="pan"),e=this.food;!t||!e||t.egg||this.foodLoc!=="pan"||!e.landed||t.toss<Math.PI*1.4||Math.hypot(t.group.position.x-e.group.position.x,t.group.position.z-e.group.position.z)>(t.R+.68)*.95||(t.mergeEgg((e.w+e.y)/2),e.group.parent&&e.group.parent.remove(e.group),e.dispose(),this.food=null,this.foodLoc=null,bt.plop(),this.toast("Egg tossed into the rice! \u{1F35A}","good"),this.emit("changed"))}_absorbFillings(t){let e=t.liftOrigin||new A;for(let n=this.ings.length-1;n>=0;n--){let s=this.ings[n];s.loc!=="pan"||s.kind!=="cheese"&&s.kind!=="ham"||Math.hypot(s.group.position.x-e.x,s.group.position.z-e.z)<.85&&(t.fills.push(s.kind),s.dispose(),this.ings.splice(n,1))}}_flipCandidates(){let t=[],e=this.food;e&&this.foodLoc==="pan"&&e.landed&&!e.scrambled&&!e.folded&&t.push({type:"food",obj:e,x:e.group.position.x,z:e.group.position.z,need:e.mixed?e.w>.5?1:0:this.target().recipe==="over"&&!e.flips?e.w:0});for(let n of this.ings)n.loc==="pan"&&n.kind!=="rice"&&n.kind!=="cheese"&&t.push({type:"ing",obj:n,x:n.group.position.x,z:n.group.position.z,need:n.c[1-n.top]-n.c[n.top]});return t}canFlip(){return this.busy||this.crack||this.foodLoc==="served"?!1:!!this.carry||this.foodLoc==="spatula"||this._flipCandidates().length>0}autoFlip(){if(this.busy)return;if(this.carry)return this.flipIng(700);if(this.foodLoc==="spatula")return this.flipFood(700);let t=this._flipCandidates();if(!t.length)return;let e=t.filter(s=>s.need>.3),n=(e.length?e:t).sort((s,r)=>r.need-s.need)[0];this._flipLand={x:n.x,z:n.z},n.type==="ing"?(this.carry={ing:n.obj},n.obj.loc="spatula",this.flipIng(700)):(n.obj.liftOrigin=n.obj.group.position.clone(),this.foodLoc="spatula",this.flipFood(700))}guideList(){let t=this.target(),e=[],n=this.food;if(n&&(this.foodLoc==="pan"||this.foodLoc==="spatula")){let s=gh(n,t),{cls:r,label:o}=s;r!=="burning"&&(t.recipe==="over"&&!n.flips&&n.w>.5&&!n.scrambled?(r="flip",o="Flip it!"):t.recipe==="omelette"&&n.mixed&&!n.folded&&!n.scrambled&&n.w>.5&&(r="flip",o="Fold it!"));let a=n.scrambled?"\u{1F963}":n.folded?"\u{1F319}":n.mixed?"\u{1F95A}":"\u{1F373}";e.push({key:"egg",cls:r,label:`${a} ${o}`,p:s.p,obj:n.group})}for(let s of this.ings){if(s.loc!=="pan"&&s.loc!=="spatula")continue;let r=(t.extras||[]).find(h=>h.kind===s.kind),o=_h(s,r&&r.level),{cls:a,label:l,p:c}=o;a!=="burning"&&s.kind!=="rice"&&s.kind!=="cheese"&&s.flips===0&&s.c[1-s.top]>.5&&(a="flip",l=`${_e[s.kind].icon} Flip it!`),s.kind==="rice"&&!s.egg&&n&&this.foodLoc==="pan"&&a!=="burning"&&(a="cooking",l="\u{1F35A} Toss in the egg",c=Math.min(1,s.toss/(Math.PI*1.4))),e.push({key:s.kind,cls:a,label:l,p:c,obj:s.group})}return e}platedIngs(){return this.ings.filter(t=>t.loc==="plate")}plateHas(t){return this.platedIngs().some(e=>e.kind===t)||!!(this.food&&this.foodLoc==="plate"&&this.food.fills.includes(t))}canServe(){return this.busy||this.crack||this.carry?!1:this.foodLoc==="plate"?!0:!this.food&&this.platedIngs().length>0}liftFood(){let t=this.food;t.liftOrigin=t.group.position.clone(),this.props.spatula.add(t.group),t.group.position.set(0,.045,-.02),t.group.rotation.set(0,0,0),this.foodLoc="spatula",bt.scrape(1),this.emit("changed")}flipFood(t){let e=this.food,n=e.group;this.scene.attach(n);let s=n.position.clone(),r=this.props.pan,o=this._flipLand;this._flipLand=null;let a=o?o.x:this.props.spatula.position.x-r.position.x,l=o?o.z:this.props.spatula.position.z-r.position.z,c=Math.hypot(a,l);!o&&c>.3&&(a*=.3/c,l*=.3/c);let h=new A(Math.cos(this.camAz),0,-Math.sin(this.camAz)),u=new on().setFromAxisAngle(new A(0,1,0),0),d=!1,f={};this.foodLoc="air",bt.flipWhoosh(),this.anim(.62,g=>{this.panAnchor.getWorldPosition(zt),zt.x+=a,zt.z+=l,n.position.lerpVectors(s,zt,g),n.position.y+=Math.sin(Math.PI*g)*1.15,!d&&g>=.5&&(d=!0,f=e.flip(t));let _=d?Math.PI*g-Math.PI:Math.PI*g;n.quaternion.copy(u).premultiply(Qd.setFromAxisAngle(h,_))},()=>{d||(f=e.flip(t)),this.panAnchor.add(n),n.position.set(a,0,l),n.rotation.set(0,0,0),this.foodLoc="pan",this.spat.cooldown=.7,this.spat.mode="stir",bt.plop(),f.folded?(this._absorbFillings(e),bt.plop(),f.torn?(bt.tear(),this.toast("Too runny \u2014 it spilled while folding! \u{1F62C}","bad")):this.toast("Folded! \u{1F319}","good")):f.torn?(bt.tear(),this.toast("Flipped too early \u2014 it tore! \u{1F62C}","bad")):f.yolk?this.toast("Oops, the yolk broke!","bad"):f.tossed||this.toast("Nice flip! \u2728","good"),this.emit("changed")})}spatulaRelease(){let t=this.props.spatula,e=this.props.pan,n=this.props.plate,s=Math.hypot(t.position.x-n.position.x,t.position.z-n.position.z),r=Math.hypot(t.position.x-e.position.x,t.position.z-e.position.z);this.carry&&(s<Un.r+.5||s<r&&r>Le.rimR?this.plateIng():this.dropIngToPan()),this.foodLoc==="spatula"&&(s<Un.r+.5||s<r&&r>Le.rimR?this.plateFood():this.dropToPan()),r<Le.rimR+.4||s<Un.r+.3?this.flyTo(t,Fe.spatula.x,Fe.spatula.z,.5,.5,()=>t.rotation.set(0,.5,0)):(t.position.y=fi(t.position.x,t.position.z),t.rotation.x=0)}plateFood(){let t=this.food,e=t.group;if(this.foodLoc==="plate")return;this.scene.attach(e);let n=e.position.clone(),s=e.quaternion.clone();this.foodLoc="air",this.anim(.4,r=>{this.plateAnchor.getWorldPosition(zt),e.position.lerpVectors(n,zt,On(r)),e.position.y+=Math.sin(Math.PI*r)*.5,e.quaternion.slerpQuaternions(s,Qd.identity(),r)},()=>{this.plateAnchor.add(e),e.position.set(0,0,0),e.rotation.set(0,Math.random()*.5,0),this.foodLoc="plate",bt.clink(),this.emit("changed")})}dropToPan(){let t=this.food,e=t.group,n=this.props.pan,s=this.props.spatula,r=s.position.x-n.position.x,o=s.position.z-n.position.z,a=Math.hypot(r,o);a>.3&&(r*=.3/a,o*=.3/a),this.scene.attach(e);let l=e.position.clone();this.foodLoc="air",this.anim(.3,c=>{this.panAnchor.getWorldPosition(zt),zt.x+=r,zt.z+=o,e.position.lerpVectors(l,zt,On(c))},()=>{this.panAnchor.add(e),e.position.set(r,0,o),e.rotation.set(0,0,0),this.foodLoc="pan",bt.plop(),this.emit("changed")})}shakerMove(t,e,n,s,r){let o=this.props[t];o.position.set(e,fi(e,n)+1.55,n),o.rotation.set(0,this.camAz,0),o.rotateX(2.55);let a=this.shk;if(a.cooldown-=r,a.lastY===null){a.lastY=s,a.extreme=s;return}let l=Math.sign(s-a.lastY);l!==0&&l!==a.dir&&(Math.abs(a.lastY-a.extreme)>12&&a.cooldown<=0&&(this.shakeOnce(t),a.cooldown=.12),a.extreme=a.lastY,a.dir=l),a.lastY=s}shakerEnd(t){this.shk.lastY=null;let e=this.props[t],n=Fe[t];this._seasonTarget(e.position.x,e.position.z)||Math.hypot(e.position.x-this.props.pan.position.x,e.position.z-this.props.pan.position.z)<Le.rimR+.3?this.flyTo(e,n.x,n.z,.5,.3,()=>e.rotation.set(0,0,0)):this.anim(.2,r=>{e.rotation.x*=.6,e.position.y+=(fi(e.position.x,e.position.z)-e.position.y)*r},()=>e.rotation.set(0,0,0))}_seasonSubject(){if(this.food&&(this.foodLoc==="plate"||this.foodLoc==="pan"))return{subj:this.food,loc:this.foodLoc};let t=this.ings.find(e=>e.kind==="rice"&&(e.loc==="plate"||e.loc==="pan"));return t?{subj:t,loc:t.loc}:null}_seasonTarget(t,e){let n=this._seasonSubject();if(!n)return null;let s=n.loc==="plate"?this.props.plate:this.props.pan,r=n.loc==="plate"?Un.r+.15:Le.innerR;return Math.hypot(t-s.position.x,e-s.position.z)<r?n.subj:null}shakeOnce(t){let e=this.props[t];bt.shake(),zt.set(0,.95,0),e.localToWorld(zt);let n=this._seasonTarget(e.position.x,e.position.z),s=n?n.group.getWorldPosition(Jn).y+.1:fi(e.position.x,e.position.z);this.fx.emit(t,zt,{count:9,spread:.12,floorY:s}),n&&setTimeout(()=>{(this.food===n||this.ings.includes(n))&&(n.addSeasoning(t,5),this.emit("changed"))},260)}autoSeason(t){if(this.busy)return;let e=this._seasonSubject();if(!e)return this.toast("Nothing to season yet!");let n=this.props[t],s=e.loc==="plate"?this.props.plate:this.props.pan,r=n.position.clone(),o=s.position.x+.1,a=s.position.z,l=fi(o,a)+1.55;bt.pick(),this.anim(.4,c=>{n.position.lerpVectors(r,zt.set(o,l,a),On(c)),n.rotation.set(0,this.camAz,0),n.rotateX(2.55*On(c))},()=>{let c=0,h=()=>{if(c>=3){this.flyTo(n,r.x,r.z,.45,.3,()=>n.rotation.set(0,0,0));return}c++,n.position.y=l+.15,this.shakeOnce(t),this.anim(.22,u=>{n.position.y=l+.15*(1-u)},h)};h()})}toss(){if(this.busy)return;let t=!!(this.food||this.crack||this.ings.length||this.flying.size);if(!t&&this.butter.amount===0)return this.toast("Nothing to toss.");bt.trash(),this.clearFood(!1),this.clearIngs(!1),this.clearButter(),this.toast(t?"Tossed \u2014 pan wiped clean \u2728":"Pan wiped clean \u2728","good"),this.emit("changed")}serve(){if(!this.canServe())return;let t=this.foodLoc==="plate"?this.food:null,e=this.platedIngs();this.foodLoc="served",this.servedCount++,bt.ding(),this.plateAnchor.getWorldPosition(zt),this.fx.emit("sparkle",zt.setY(zt.y+.3),{count:16,spread:1});let n=this.props.plate,s=n.position.y;if(this.anim(.5,a=>{n.position.y=s+Math.sin(Math.PI*a)*.35,n.rotation.y=Math.sin(Math.PI*a)*.3},()=>{n.position.y=s,n.rotation.y=0}),this.mode==="free"){this.emit("served",{free:!0,text:Yd(t,e),food:t});return}let r=this.mode==="orders"&&this.orderTime>this.order.patience,o=Xd(t,this.order,{late:r,ings:e});this.results.push({order:this.order,result:o}),this.roundScore+=o.total,this.emit("served",{result:o,order:this.order,quote:qd(o.stars),food:t})}afterServe(){this.clearFood(!1),this.clearButter(),this.clearIngs(!1),this.mode==="orders"?this.orderIdx+1>=this.orders.length?(this.emit("roundOver",{total:this.roundScore,results:this.results}),this.mode="results"):this.setOrder(this.orderIdx+1):this.mode==="tutorial"&&this.emit("tutorialDone"),this.emit("changed")}target(){if(this.order)return this.order;let t=this.ings.find(n=>n.kind==="rice");if(!this.food&&t)return{recipe:"friedrice",level:"fluffy",salt:!0,pepper:!1,extras:[],fill:[]};let e=this.food?this.food.recipe:"sunny";return e==="sheet"&&(e="omelette"),{recipe:e,level:e==="sunny"?"runny":e==="over"?"easy":"soft",salt:!0,pepper:!1,extras:[],fill:[]}}guide(){let t=this.target();if(this.food&&(this.foodLoc==="pan"||this.foodLoc==="spatula"))return gh(this.food,t);let e=this.ings.find(n=>n.loc==="pan"&&n.kind!=="cheese")||this.ings.find(n=>n.loc==="pan");if(e){let n=(t.extras||[]).find(s=>s.kind===e.kind);return _h(e,n&&n.level)}return null}_missing(t){return(t.extras||[]).map(n=>n.kind).concat(t.fill||[]).filter(n=>!this.plateHas(n)).map(n=>({kind:n,name:_e[n].name.toLowerCase(),inPan:this.ings.some(s=>s.kind===n&&s.loc==="pan")}))}hint(){let t=this.food,e=this.target(),n=e.recipe,s=n==="scrambled";if(this.mode==="tutorial"){let h=Gr[this.tutStep];return h?{text:h.text,tool:h.tool}:null}if(this.foodLoc==="served")return null;if(!this.panOnBurner)return{text:"Put the pan back on the burner to heat it \u{1F525}"};let r=this.ings.filter(h=>h.loc==="pan"),o=r.find(h=>h.kind==="rice");if(t&&t.maxBrown>.55&&this.foodLoc==="pan")return{text:"It's burning! Lower the heat \u{1F525}",tool:null};let a=r.find(h=>h.maxBrown>.55);if(this.butter.browned>.75&&!t&&!r.length)return{text:"The butter burnt \u2014 tap Toss \u{1F5D1}\uFE0F to wipe the pan",tool:"toss"};if(a)return{text:`The ${_e[a.kind].name.toLowerCase()} is burning! Lift it out or lower the heat \u{1F525}`,tool:"spatula"};if(this.carry)return{text:"Drag onto the plate \u{1F37D}\uFE0F \u2014 or swipe UP to flip \u2191"};let l=this._missing(e);if(this.foodLoc==="plate"||!t&&!this.crack&&!r.length&&this.platedIngs().length){let h=this.foodLoc==="plate"?t:this.platedIngs().find(u=>u.kind==="rice");if(h){if(e.salt&&!h.salt)return{text:"Shake on some salt \u{1F9C2}",tool:"salt"};if(e.pepper&&!h.pepper)return{text:"Add a little pepper",tool:"pepper"}}if(l.length){let u=l[0];return u.inPan?{text:`Wait for the ${u.name}, then lift it onto the plate \u{1F37D}\uFE0F`,tool:"spatula"}:{text:`Still needs ${u.name} \u2014 add it from the shelf`,tool:u.kind}}return{text:"Looks great \u2014 tap Serve! \u{1F6CE}\uFE0F",tool:"serve"}}if(this.foodLoc==="spatula")return{text:t.scrambled||t.folded?"Drag onto the plate \u{1F37D}\uFE0F":t.mixed?"Swipe UP to fold it \u2191 \u2014 or drag onto the plate \u{1F37D}\uFE0F":"Swipe UP to flip \u2191 \u2014 or drag onto the plate \u{1F37D}\uFE0F"};if(this.crack)return this.crack.stage==="hover"?{text:"Tap the egg to crack it \u{1F95A}"}:{text:"Drag sideways to pull the shell apart \u2194"};if(!t){if(o)return o.egg?{text:"Keep tossing; scoop the rice out over the rim onto the plate \u{1F35A}",tool:"spatula"}:{text:"Now crack an egg \u{1F95A} into the pan",tool:"egg"};if(r.length){let u=r.find(f=>f.kind!=="cheese"&&f.flips===0&&f.c[1-f.top]>.55);if(u)return{text:`Lift the ${_e[u.kind].name.toLowerCase()} with the spatula and swipe UP to flip \u2191 (or tap Flip)`,tool:"spatula"};let d=this.guide();return d&&d.cls==="ready"?{text:"Ready! Lift it onto the plate with the spatula \u{1F37D}\uFE0F",tool:"spatula"}:{text:"Cooking\u2026 watch the guide"}}if(this.butter.amount===0&&n!=="friedrice")return{text:"Drag butter \u{1F9C8} into the pan",tool:"butter"};if(this.heat<1)return{text:"Turn up the heat with the dial \u2192"};if(n!=="friedrice"&&this.butter.melt<.4&&this.panTemp<90)return{text:"Let the butter melt\u2026"};if(n==="friedrice")return{text:"Add rice \u{1F35A} from the shelf (tap or drag it in)",tool:"rice"};let h=l.find(u=>!u.inPan&&(e.extras||[]).some(d=>d.kind===u.kind));return h?{text:`Drag an egg \u{1F95A} over the pan \u2014 and add ${h.name} from the shelf too`,tool:"egg"}:{text:"Drag an egg \u{1F95A} over the pan",tool:"egg"}}let c=this.guide();if(n==="friedrice")return o?{text:"Stir in circles to toss the egg into the rice \u{1F300}",tool:"spatula"}:{text:"Add rice \u{1F35A} from the shelf",tool:"rice"};if(n==="omelette"){if(!t.mixed)return{text:"Stir ONE slow circle in the pan to beat the egg \u{1F300}",tool:"spatula"};if(!t.folded){let h=(e.fill||[]).find(u=>!this.ings.some(d=>d.kind===u&&d.loc==="pan"));return t.w<.5?h?{text:`Let it set\u2026 then add ${_e[h].name.toLowerCase()} on top`,tool:h}:{text:"Let the omelette set a little\u2026"}:h?{text:`Add ${_e[h].name.toLowerCase()} on top, then fold it`,tool:h}:{text:"Set! Touch it with the spatula, then swipe UP to fold \u2191",tool:"spatula"}}}return s&&!t.scrambled?{text:"Stir in circles inside the pan to scramble \u{1F300}",tool:"spatula"}:n==="over"&&!t.flips?t.w>.5?{text:"Touch the egg, then swipe UP to flip \u2191",tool:"spatula"}:{text:"Let the bottom set before flipping\u2026"}:t.scrambled&&this.time-t.lastStir>3&&t.w<.9?{text:"Keep stirring for soft curds \u{1F300}",tool:"spatula"}:c&&c.cls==="ready"?{text:"Ready! Move it to the plate with the spatula \u{1F37D}\uFE0F",tool:"spatula"}:this.heat>7.5&&t.w<.5?{text:"High heat cooks fast \u2014 watch the edges!"}:{text:"Cooking\u2026 watch the guide"}}update(t){if(this.paused)return;this.time+=t;for(let _=this.anims.length-1;_>=0;_--){let m=this.anims[_];m.t+=t;let p=Math.min(1,m.t/m.dur);m.step&&m.step(p,t),p>=1&&(this.anims.splice(_,1),m.done&&m.done())}this.fx.update(t),this.kitchen.updateFlames(this.heat,this.time);let e=this.kitchen.knob.userData.turn;if(e.rotation.y+=(-(-135+this.heat*27)*Math.PI/180-e.rotation.y)*Math.min(1,t*14),this._placeCrack(t),this.mode==="menu"){bt.setSizzle(0,0,t);return}let n=this.panOnBurner?vd(this.heat):Ur,s=n>this.panTemp?.2:.11;this.panTemp+=(n-this.panTemp)*(1-Math.exp(-s*t));let r=this.butter,o=0;for(let _=r.pats.length-1;_>=0;_--){let m=r.pats[_];this.panTemp>32&&(m.melt=Math.min(1,m.melt+(this.panTemp-32)/80*.32*t)),m.mesh.scale.set(1+m.melt*.7,Math.max(.02,1-m.melt),1+m.melt*.7),m.mesh.position.y=.08*(1-m.melt),m.mesh.visible=m.melt<.98,o+=m.melt}if(r.melt=r.amount?o/r.amount:0,r.amount){let _=.35+.65*Math.min(1,o*.9);this.pool.scale.setScalar(_*.98),this.poolMat.opacity=Math.min(.55,o*.6),this.panTemp>165&&o>.3&&(r.browned=Math.min(1,r.browned+(this.panTemp-165)/80*.05*t));let m=this.poolMat.color.set("#ffd65c");r.browned>0&&m.lerp(tf.set("#c98a3a"),Math.min(1,r.browned*1.6)),r.browned>.6&&m.lerp(tf.set("#4a2f1e"),(r.browned-.6)*2.5)}for(let _ of this.ings)_.loc==="pan"&&_.update(t,this.panTemp,{time:this.time,buttered:r.amount>0}),_.refresh();this._mergeRice();let a=this.food;a&&this.foodLoc==="pan"&&a.landed?(a.update(t,this.panTemp,{time:this.time,buttered:r.amount>0}),a.refresh()):a&&(this.foodLoc==="plate"||this.foodLoc==="spatula")&&a.scrambled&&a.refresh(),a&&a.landed&&a.spread<1&&(a.spread=Math.min(1,a.spread+t*2.4),this.foodLoc!=="pan"&&a.refresh());let l=this.panTemp,c=Math.max(0,Math.min(1,(l-90)/140)),h=this.ings.some(_=>_.loc==="pan"&&_.kind!=="cheese")?.75:0,u=Math.max(a&&this.foodLoc==="pan"&&a.landed?1-a.w*.55:0,h),d=r.amount&&r.melt>.2?Math.max(0,1-r.browned)*(l>100&&l<210?1:.3):0;bt.setSizzle(c*Math.max(u,d*.65),d*c,t),this.panAnchor.getWorldPosition(zt);let f=this.fxClock;if(c>.05&&(u>0||d>0)&&(f.steam-=t)<0&&(f.steam=.6/(.3+c*(u+.3)),this.fx.emit("steam",Jn.set(zt.x+(Math.random()-.5)*1.2,zt.y+.15,zt.z+(Math.random()-.5)*1.2),{spread:.3})),d>0&&r.melt>.3&&l>100&&l<215&&(f.bubble-=t)<0){f.bubble=.05/Math.max(.2,c);let _=Math.random()*6.28,m=Math.sqrt(Math.random())*this.pool.scale.x*.95;this.fx.emit("bubble",Jn.set(zt.x+Math.cos(_)*m,zt.y+.02,zt.z+Math.sin(_)*m),{spread:0})}if((a&&this.foodLoc==="pan"&&a.maxBrown>.6||r.browned>.7||this.ings.some(_=>_.loc==="pan"&&_.maxBrown>.6))&&l>150&&(f.smoke-=t)<0&&(f.smoke=.18,this.fx.emit("smoke",Jn.set(zt.x,zt.y+.2,zt.z),{spread:.9})),l>175&&(u>.2||d>.2)&&(f.spatter-=t)<0&&(f.spatter=.35-c*.2,this.fx.emit("spatter",Jn.set(zt.x,zt.y+.08,zt.z),{count:2,spread:1.2})),this.mode==="orders"&&this.order&&(this.orderTime+=t),this.mode==="tutorial"){let _=Gr[this.tutStep];_&&_.done(this)&&(this.tutStep++,bt.pop(),this.emit("tutorial",this.tutStep))}}},tf=new Ut,ef={bacon:[.5,.42],ham:[-.52,-.4],sausage:[.45,-.46],cheese:[-.5,.42],rice:[0,0]};var vh={pan:1.35,plate:1.2,carton:1.05,butterDish:.85,salt:.35,pepper:.35,spatula:.45,fridge:1.5},Sn=new A,nf=new gn,sf=new q,Na=class{constructor({canvas:t,camera:e,game:n,kitchen:s,onOrbitBlock:r}){this.canvas=t,this.camera=e,this.game=n,this.kitchen=s,this.ray=new sa,this.drag=null,this.pending=null,this.orbiting=!1,this.samples=[],t.addEventListener("pointerdown",o=>this.onDown(o)),window.addEventListener("pointermove",o=>this.onMove(o),{passive:!1}),window.addEventListener("pointerup",o=>this.onUp(o)),window.addEventListener("pointercancel",o=>this.onUp(o,!0)),t.addEventListener("pointermove",o=>this.onHover(o))}get props(){return this.game.props}setRay(t){let e=this.canvas.getBoundingClientRect();sf.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.ray.setFromCamera(sf,this.camera)}pick(t){this.setRay(t);let e=this.props,n=[e.pan,e.plate,e.carton,e.butterDish,e.salt,e.pepper,e.spatula,e.fridge,this.kitchen.knob];this.game.crack&&n.unshift(this.game.crack.group);let s=this.ray.intersectObjects(n,!0);for(let r of s)if(r.object.userData.interact&&r.object.visible!==!1&&Wy(r.object))return{kind:r.object.userData.interact,object:r.object,point:r.point};return null}planePoint(t,e){this.setRay(t),nf.set(new A(0,1,0),-e);let n=new A;return this.ray.ray.intersectPlane(nf,n)?n:null}track(t){let e=performance.now();for(this.samples.push({x:t.clientX,y:t.clientY,t:e});this.samples.length>2&&e-this.samples[0].t>90;)this.samples.shift()}velocity(){let t=this.samples;if(t.length<2)return{x:0,y:0};let e=t[0],n=t[t.length-1],s=Math.max(.008,(n.t-e.t)/1e3);return{x:(n.x-e.x)/s,y:(n.y-e.y)/s}}onDown(t){if(bt.init(),bt.resume(),this.game.busy)return;if(this.drag||this.pending){t.stopImmediatePropagation();return}if(this.orbiting)return;let e=this.pick(t);e&&(t.stopImmediatePropagation(),t.preventDefault(),this.samples=[],this.track(t),this.begin(e,t))}begin(t,e){let n=this.game,s=this.props,r={id:e.pointerId,kind:t.kind,x0:e.clientX,y0:e.clientY,moved:!1,t0:performance.now(),last:performance.now()};switch(t.kind){case"fridgeItem":this.trayDown(t.object.userData.kind,e);return;case"knob":r.heat0=n.heat;break;case"crackEgg":n.crack.stage==="hover"&&n.crackTap(),r.sep0=n.crack.sep,r.lastSep=n.crack.sep;break;case"panFloor":{let o=n.food,a="stir";o&&n.foodLoc==="pan"&&o.landed&&(o.group.getWorldPosition(Sn),Math.hypot(t.point.x-Sn.x,t.point.z-Sn.z)<(o.scrambled?.55:.75)&&!o.scrambled&&(a="lift"));let l=n.panAnchor.worldToLocal(t.point.clone()),c=n._ingNear(l.x,l.z);return c&&c.ing.kind!=="rice"&&(a="lift"),this.beginSpatula(e,a,r)}case"spatula":return this.beginSpatula(e,"free",r);case"salt":case"pepper":return this.beginShaker(t.kind,e,r);case"cartonEgg":return this.beginHeld("egg",e,r,t.object);case"butterBlock":return this.beginHeld("butter",e,r);case"panHandle":case"panRim":return this.beginMove(s.pan,"pan",e,r,t.point);case"plate":return this.beginMove(s.plate,"plate",e,r,t.point);case"carton":return this.beginMove(s.carton,"carton",e,r,t.point);case"butterDish":return this.beginMove(s.butterDish,"butterDish",e,r,t.point);default:return}this.drag=r}beginSpatula(t,e,n){n.kind="spatula",n.mode=e,this.game.spatulaStart(e),bt.pick(),this.drag=n,this.moveSpatula(t,.016,!0)}beginShaker(t,e,n){n.kind="shaker",n.type=t,this.drag=n,bt.pick()}beginHeld(t,e,n,s=null){n.kind="held",n.type=t;let r=t.startsWith("ing:");r&&(n.ing=new $s(t.slice(4),{buttered:this.game.butter.amount>0}));let o=r?n.ing.group:t==="egg"?xa(this.game.mats,s?s.userData.brown:Math.random()<.3):Zs(this.game.mats);if(o.castShadow=!0,r){o.scale.setScalar(.75);let a=this.planePoint(e,1.1);a&&o.position.copy(a)}n.brown=t==="egg"&&o.material===this.game.mats.eggShellBrown,s?(s.visible=!1,n.cartonEgg=s,s.getWorldPosition(o.position)):t==="butter"?this.props.butterDish.getWorldPosition(o.position).setY(.4):r||this.props.carton.getWorldPosition(o.position).setY(.6),this.game.scene.add(o),n.mesh=o,this.drag=n,bt.pick(),this.moveHeld(e,1)}beginMove(t,e,n,s,r){s.kind="move",s.obj=t,s.name=e,s.planeY=t.position.y+.5;let o=this.planePoint(n,s.planeY)||r;s.offset=new A(t.position.x-o.x,0,t.position.z-o.z),this.drag=s,bt.pick()}trayDown(t,e){bt.init(),bt.resume(),!(this.game.busy||this.drag)&&(this.pending={tool:t,id:e.pointerId,x0:e.clientX,y0:e.clientY},this.samples=[],this.track(e))}trayPromote(t){let{tool:e}=this.pending;if(this.pending=null,e==="flip"||e==="toss")return this.trayTap(e);let n={id:t.pointerId,x0:t.clientX,y0:t.clientY,moved:!0,t0:performance.now(),last:performance.now(),fromTray:!0};if(e==="butter")this.beginHeld("butter",t,n);else if(e==="egg"){let s=this.props.carton.userData.eggs.filter(r=>r.visible);this.beginHeld("egg",t,n,s[s.length-1]||null)}else e==="spatula"?this.beginSpatula(t,"free",n):_e[e]?this.beginHeld("ing:"+e,t,n):(e==="salt"||e==="pepper")&&(this.beginShaker(e,t,n),n.moved=!0,this.moveShaker(t,.016))}trayTap(t){let e=this.game;t==="butter"?e.autoButter():t==="egg"?this.autoEgg():t==="spatula"?e.toast("Drag the spatula into the pan \u2014 touch the egg to lift it"):_e[t]?e.autoIngredient(t):t==="salt"||t==="pepper"?e.autoSeason(t):t==="toss"?e.toss():t==="flip"&&e.autoFlip()}autoEgg(){let t=this.game;if(!t.canStartEgg())return;let e=this.props.carton.userData.eggs.filter(a=>a.visible),n=e[e.length-1],s=xa(t.mats,n?n.userData.brown:!1);(n||this.props.carton).getWorldPosition(s.position),n&&(n.visible=!1,this.restoreCartonEgg(n)),t.scene.add(s);let r=s.position.clone();t.panAnchor.getWorldPosition(Sn);let o=Sn.clone().setY(Sn.y+1.05);bt.pick(),t.anim(.55,a=>{let l=1-Math.pow(1-a,3);s.position.lerpVectors(r,o,l),s.position.y+=Math.sin(Math.PI*a)*1.2,s.rotation.z=a*6.28},()=>{t.scene.remove(s),t.beginCrack(n?n.userData.brown:!1)})}restoreCartonEgg(t){setTimeout(()=>{t.visible=!0,t.scale.setScalar(.01),this.game.anim(.35,e=>t.scale.setScalar(Math.max(.01,1+Math.sin(e*Math.PI)*.2-(1-e)*.99)),()=>t.scale.setScalar(1))},1200)}onMove(t){if(this.pending&&t.pointerId===this.pending.id){this.track(t),Math.hypot(t.clientX-this.pending.x0,t.clientY-this.pending.y0)>14&&this.trayPromote(t);return}let e=this.drag;if(!e||t.pointerId!==e.id)return;t.preventDefault(),this.track(t);let n=performance.now(),s=Math.min(.05,(n-(e.last||n))/1e3)||.016;e.last=n,!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)>8&&(e.moved=!0);let r=this.game;switch(e.kind){case"knob":r.setHeat(e.heat0+(t.clientX-e.x0-(t.clientY-e.y0))/22);break;case"crackEgg":{if(!r.crack){this.drag=null;return}r.crack.stage==="hover"&&r.crackTap();let o=e.sep0+Math.abs(t.clientX-e.x0)/170+Math.max(0,-(t.clientY-e.y0))/400,a=Math.abs(o-e.lastSep)/s;e.lastSep=o,r.pullApart(o,a),r.crack||(this.drag=null);break}case"spatula":this.moveSpatula(t,s);break;case"shaker":e.moved&&this.moveShaker(t,s);break;case"held":this.moveHeld(t,s);break;case"move":this.moveProp(t,s);break}}moveSpatula(t,e,n=!1){let s=this.game,o=this.props.pan.position.y+Le.floorY,a=this.planePoint(t,o);a&&(Xs(a),n&&(this.props.spatula.position.x=a.x,this.props.spatula.position.z=a.z),s.spatulaMove(a.x,a.z,this.velocity(),e))}moveShaker(t,e){let n=this.planePoint(t,1.55);n&&(Xs(n),this.game.shakerMove(this.drag.type,n.x,n.z,t.clientY,e))}moveHeld(t,e){let n=this.drag,s=this.planePoint(t,1.1);if(!s)return;Xs(s),n.target=s.clone();let r=n.mesh,o=Math.min(1,e*20);r.position.x+=(s.x-r.position.x)*o,r.position.z+=(s.z-r.position.z)*o,r.position.y+=(s.y-r.position.y)*o;let a=this.velocity();r.rotation.z=Math.max(-.6,Math.min(.6,-a.x/2500)),r.rotation.x=Math.max(-.6,Math.min(.6,a.y/2500));let l=this.props.pan;Math.hypot(r.position.x-l.position.x,r.position.z-l.position.z)<Le.rimR*.6&&(r.position.x+=(l.position.x-r.position.x)*.15,r.position.z+=(l.position.z-r.position.z)*.15)}moveProp(t,e){let n=this.drag,s=this.planePoint(t,n.planeY);if(!s)return;let r=n.obj,o=s.x+n.offset.x,a=s.z+n.offset.z;Sn.set(o,0,a),Xs(Sn),n.target=Sn.clone();let l=Math.min(1,e*22);r.position.x+=(Sn.x-r.position.x)*l,r.position.z+=(Sn.z-r.position.z)*l,r.position.y+=(this.game.restY(r,r.position.x,r.position.z)+.45-r.position.y)*l;let c=this.velocity();r.rotation.z=Math.max(-.15,Math.min(.15,-c.x/9e3)),r.rotation.x=Math.max(-.15,Math.min(.15,c.y/9e3))}onUp(t,e=!1){if(this.pending&&t.pointerId===this.pending.id){let o=this.pending.tool;this.pending=null,e||this.trayTap(o);return}let n=this.drag;if(!n||t.pointerId!==n.id)return;this.drag=null;let s=this.game,r=this.props.pan;switch(n.kind){case"spatula":{let o=this.velocity(),a=o.y<-650&&Math.abs(o.y)>1.2*Math.abs(o.x);s.foodLoc==="spatula"&&a?s.flipFood(-o.y):s.carry&&a&&s.flipIng(-o.y),s.spatulaRelease();break}case"shaker":n.moved?s.shakerEnd(n.type):s.autoSeason(n.type);break;case"held":{let o=n.mesh;n.target&&(o.position.x=n.target.x,o.position.z=n.target.z);let a=Math.hypot(o.position.x-r.position.x,o.position.z-r.position.z);if(n.cartonEgg&&this.restoreCartonEgg(n.cartonEgg),!n.moved&&!n.fromTray){s.scene.remove(o),n.type==="egg"?(n.cartonEgg&&(n.cartonEgg.visible=!1),this.autoEgg()):s.autoButter();break}if(n.ing){let l=this.props.plate,c=Math.hypot(o.position.x-l.position.x,o.position.z-l.position.z),h=n.ing.kind,u=a<Le.rimR+.35&&a<=c?"pan":c<Un.r+.35?"plate":null;if(u&&s.canAddIng(h,u))s.scene.remove(o),s.placeIngredient(n.ing,u,o.position.x-r.position.x,o.position.z-r.position.z);else{u&&s.toast(`${_e[h].name} is already there`);let d=n.ing;s.anim(.35,f=>o.scale.setScalar(Math.max(.01,.75*(1-f))),()=>{s.scene.remove(o),d.dispose()})}break}if(n.type==="egg"&&a<Le.rimR+.8&&s.canStartEgg())s.scene.remove(o),s.beginCrack(n.brown);else if(n.type==="butter"&&a<Le.rimR+.5)s.scene.remove(o),s.addButter(o.position.x-r.position.x,o.position.z-r.position.z);else{let l=n.type==="egg"?this.props.carton.position:this.props.butterDish.position,c=o.position.clone();s.anim(.4,h=>{o.position.lerpVectors(c,Sn.set(l.x,.5,l.z),h),o.scale.setScalar(1-h*.9)},()=>s.scene.remove(o))}break}case"move":n.target&&(n.obj.position.x=n.target.x,n.obj.position.z=n.target.z),this.dropProp(n.obj,n.name);break}}dropProp(t,e){let n=this.game,s=this.props,r=new A(t.position.x,0,t.position.z);if(e==="pan"&&Math.hypot(r.x-Ve.x,r.z-Ve.z)<Le.snap)r.set(Ve.x,0,Ve.z);else for(let o=0;o<8;o++){for(let[a,l]of Object.entries(s)){if(l===t||!vh[a])continue;let c=r.x-l.position.x,h=r.z-l.position.z,u=Math.hypot(c,h)||.001,d=(vh[e]+vh[a])*.85;u<d&&(r.x+=c/u*(d-u),r.z+=h/u*(d-u))}Xs(r)}n.flyTo(t,r.x,r.z,.25,.05,()=>{t.rotation.x=0,t.rotation.z=0,bt.thud()})}onHover(t){if(t.pointerType!=="mouse"||this.drag||this.game.busy)return;let e=performance.now();if(e-(this._hoverT||0)<60)return;this._hoverT=e;let n=this.pick(t);this.canvas.style.cursor=n?n.kind==="crackEgg"||n.kind==="salt"||n.kind==="pepper"?"pointer":"grab":"default"}};function Wy(i){for(;i;){if(i.visible===!1)return!1;i=i.parent}return!0}var At=i=>document.getElementById(i),of="cracksizzle.v1",Xr=new A;function af(){let i={music:.45,sfx:.8,guide:!0,hints:!0,quality:"auto",best:0,tutorialDone:!1};try{return Object.assign(i,JSON.parse(localStorage.getItem(of)||"{}"))}catch{return i}}function qr(i){try{localStorage.setItem(of,JSON.stringify(i))}catch{}}var Oa=class{constructor({game:t,interactor:e,settings:n,onResetCamera:s,onQuality:r}){this.game=t,this.ix=e,this.s=n,this.onResetCamera=s,this.onQuality=r,this.hintT=0,this.lastHint="",this.screens=["title","pause","settings","dish","results","loading","nogl"],this._bindMenus(),this._bindDial(),this._bindTray(),this._bindGame(),this._applySettings(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause(!0)}),["gesturestart","gesturechange"].forEach(o=>document.addEventListener(o,a=>a.preventDefault())),document.addEventListener("dblclick",o=>o.preventDefault())}show(t){for(let e of this.screens)At("screen-"+e).classList.toggle("hidden",e!==t)}hideScreens(){for(let t of this.screens)At("screen-"+t).classList.add("hidden")}_bindMenus(){let t=this.game,e=(n,s)=>At(n).addEventListener("click",()=>{bt.init(),bt.resume(),bt.pop(),s()});e("btn-play",()=>this.startMode("orders")),e("btn-free",()=>this.startMode("free")),e("btn-tutorial",()=>this.startMode("tutorial")),e("btn-pause",()=>this.pause()),e("btn-resume",()=>this.resume()),e("btn-restart",()=>this.startMode(t.mode==="results"?"orders":t.mode)),e("btn-menu",()=>this.toMenu()),e("btn-sound",()=>{this.pause(!0,!1),this.show("settings")}),e("btn-settings-close",()=>{qr(this.s),this.game.mode==="menu"?this.show("title"):this.resume()}),e("btn-camera",()=>this.onResetCamera()),e("btn-next",()=>{this.hideScreens(),this.game.paused=!1,this.game.afterServe()}),e("btn-again",()=>this.startMode("orders")),e("btn-res-free",()=>this.startMode("free")),e("btn-res-menu",()=>this.toMenu()),e("tut-skip",()=>this.finishTutorial()),At("vol-music").addEventListener("input",n=>{this.s.music=+n.target.value,bt.setVolumes(this.s.music,this.s.sfx)}),At("vol-sfx").addEventListener("input",n=>{this.s.sfx=+n.target.value,bt.setVolumes(this.s.music,this.s.sfx),bt.pop()}),At("opt-guide").addEventListener("change",n=>{this.s.guide=n.target.checked}),At("opt-hints").addEventListener("change",n=>{this.s.hints=n.target.checked}),At("opt-quality").addEventListener("change",n=>{this.s.quality=n.target.value,this.onQuality(this.s.quality)})}_applySettings(){At("vol-music").value=this.s.music,At("vol-sfx").value=this.s.sfx,At("opt-guide").checked=this.s.guide,At("opt-hints").checked=this.s.hints,At("opt-quality").value=this.s.quality,bt.setVolumes(this.s.music,this.s.sfx),this._updateBest()}_updateBest(){At("best-score").textContent=this.s.best?`\u{1F3C6} Best round: ${this.s.best} / 500`:""}startMode(t){bt.init(),bt.resume(),bt.setVolumes(this.s.music,this.s.sfx),bt.startMusic(),this.hideScreens(),At("hud").classList.remove("hidden"),this.game.start(t);let e=t==="free";At("order-card").classList.toggle("hidden",e),At("score-pill").classList.toggle("hidden",t!=="orders"),At("tutorial-panel").classList.toggle("hidden",t!=="tutorial"),At("score-val").textContent="0",t==="tutorial"&&this._renderTutorial(),e?this.toast("Free Cook \u2014 experiment with heat & methods! \u{1F373}","good"):t==="orders"&&this.toast("Tip: drag empty space to look around \xB7 pinch to zoom","")}toMenu(){this.game.mode="menu",this.game.paused=!1,this.game.resetKitchen(),At("hud").classList.add("hidden"),this._updateBest(),this.show("title"),bt.resume()}pause(t=!1,e=!0){let n=this.game;n.mode==="menu"||n.mode==="results"||n.paused||(n.paused=!0,e&&this.show("pause"),t&&bt.suspend())}resume(){this.hideScreens(),this.game.paused=!1,bt.resume()}finishTutorial(){this.s.tutorialDone=!0,qr(this.s),this.toMenu(),setTimeout(()=>this.toast("You're ready, chef! Try Order Mode \u{1F469}\u200D\u{1F373}","good"),300)}_bindDial(){let t=At("dial"),e=(o,a)=>{let l=f=>[60+Math.sin(f)*50,60-Math.cos(f)*50],[c,h]=l(o),[u,d]=l(a);return`M${c.toFixed(1)} ${h.toFixed(1)} A50 50 0 ${a-o>Math.PI?1:0} 1 ${u.toFixed(1)} ${d.toFixed(1)}`};this._arc=e,At("dial-arc-bg").setAttribute("d",e(-.75*Math.PI,.75*Math.PI));let n=null,s=o=>{let a=t.getBoundingClientRect(),c=Math.atan2(o.clientX-(a.left+a.width/2),-(o.clientY-(a.top+a.height/2)))*180/Math.PI;c=Math.max(-135,Math.min(135,c)),!(Math.abs(c-(this.game.heat*27-135))>200)&&this.game.setHeat((c+135)/27)};t.addEventListener("pointerdown",o=>{bt.init(),bt.resume(),n=o.pointerId,t.setPointerCapture(o.pointerId),s(o),o.preventDefault()}),t.addEventListener("pointermove",o=>{o.pointerId===n&&s(o)});let r=o=>{o.pointerId===n&&(n=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("keydown",o=>{(o.key==="ArrowRight"||o.key==="ArrowUp")&&this.game.setHeat(this.game.heat+.5),(o.key==="ArrowLeft"||o.key==="ArrowDown")&&this.game.setHeat(this.game.heat-.5)}),this._renderDial(0)}_renderDial(t){let e=-135+t*27;At("dial-knob").style.transform=`rotate(${e}deg)`,At("dial-arc").setAttribute("d",t>.05?this._arc(-.75*Math.PI,e*Math.PI/180):""),At("dial-label").textContent=t<.05?"Off":t<3.5?`Low ${t.toFixed(1)}`:t<7?`Med ${t.toFixed(1)}`:`High ${t.toFixed(1)}`,At("dial").setAttribute("aria-valuenow",t.toFixed(1))}_bindTray(){document.querySelectorAll("#tray .tool, #tray2 .tool").forEach(t=>{let e=t.dataset.tool;t.addEventListener("pointerdown",n=>{if(n.preventDefault(),t.classList.add("active"),setTimeout(()=>t.classList.remove("active"),160),e==="toss"){bt.init(),this.game.toss();return}this.ix.trayDown(e,n)})}),At("btn-serve").addEventListener("click",()=>this.game.serve())}_bindGame(){let t=this.game;t.on("heat",e=>this._renderDial(e)),t.on("toast",({text:e,kind:n})=>this.toast(e,n)),t.on("order",e=>this._renderOrder(e)),t.on("changed",()=>{this.hintT=0}),t.on("tutorial",()=>this._renderTutorial()),t.on("tutorialDone",()=>this.finishTutorial()),t.on("served",e=>{let n=this._serveId=(this._serveId||0)+1;setTimeout(()=>{n===this._serveId&&t.foodLoc==="served"&&this._showDish(e)},650)}),t.on("roundOver",({total:e,results:n})=>this._showResults(e,n))}_renderOrder(t){if(!t)return;At("cust-avatar").textContent=t.avatar,At("order-num").textContent=this.game.mode==="tutorial"?`Tutorial \xB7 ${t.name}`:`Order ${this.game.orderIdx+1} / ${this.game.orders.length} \xB7 ${t.name}`,At("order-recipe").textContent=`${Md[t.recipe]} ${es[t.recipe]}`,At("order-doneness").textContent=uh(t),this._renderExtras();let e=At("order-card");e.classList.add("pop"),setTimeout(()=>e.classList.remove("pop"),350)}_renderExtras(){let t=this.game.order;if(!t)return;let e=this.game,n=e.food||e.ings.find(a=>a.kind==="rice")||null,s=[],r=(a,l,c)=>`<span class="chip${l?" done":""}${c?" no":""}">${a}</span>`;s.push(r("\u{1F9C8} Butter",e.butter.amount>0)),(t.extras||[]).forEach(a=>s.push(r(dh(a),e.plateHas(a.kind)))),(t.fill||[]).forEach(a=>s.push(r(fh(a,t.recipe),e.plateHas(a)))),s.push(t.salt?r("\u{1F9C2} Salt",n&&n.salt>0):r("No salt",!1,!0)),s.push(t.pepper?r("\u25CF Pepper",n&&n.pepper>0):r("No pepper",!1,!0));let o=s.join("");o!==this._extrasHTML&&(At("order-extras").innerHTML=o,this._extrasHTML=o)}_renderTutorial(){let t=At("tut-steps"),e=this.game.tutStep;t.innerHTML=Gr.map((s,r)=>`<li class="${r<e?"ok":r===e?"cur":""}">${s.text}</li>`).join("");let n=t.children[e];n&&n.scrollIntoView({block:"nearest"})}_showDish(t){let e=this.game;if(e.paused=!0,t.free)At("dish-stars").innerHTML="\u{1F373}",At("dish-title").textContent="Bon app\xE9tit!",At("dish-score").textContent="",At("dish-breakdown").innerHTML="",At("dish-quote").textContent=t.text,At("btn-next").textContent="Cook another";else{let n=t.result;At("dish-stars").innerHTML=rf(n.stars),At("dish-title").textContent=["Oh no\u2026","Not bad","Delicious!","Perfect!"][n.stars],At("dish-score").textContent=n.total,At("dish-breakdown").innerHTML=n.lines.map(r=>`<li><span>${r.label}<small>${r.note}</small></span><b>${r.pts}${r.max?" / "+r.max:""}</b></li>`).join(""),At("dish-quote").textContent=`${t.order.avatar} \u201C${t.quote}\u201D`;let s=e.mode==="orders"&&e.orderIdx+1>=e.orders.length;if(At("btn-next").textContent=e.mode==="tutorial"?"Finish tutorial":s?"See results":"Next order",e.mode==="orders"){At("score-val").textContent=e.roundScore;let r=At("score-pill");r.classList.remove("bump"),r.offsetWidth,r.classList.add("bump")}n.stars>=2?bt.ding():bt.fail()}this.show("dish")}_showResults(t,e){let n=e.reduce((o,a)=>o+a.result.stars,0),s=Math.round(n/e.length);At("res-stars").innerHTML=rf(s),At("res-total").textContent=`${t} pts`;let r=t>this.s.best;r&&(this.s.best=t,qr(this.s)),At("res-best").textContent=r?"\u{1F3C6} New best score!":`Best: ${this.s.best} \xB7 \u2B50 ${n} / 15 stars`,At("res-list").innerHTML=e.map(({order:o,result:a})=>`<li><span>${o.avatar} ${es[o.recipe]}<small>${[uh(o)].concat((o.extras||[]).map(dh),(o.fill||[]).map(l=>fh(l,o.recipe))).join(" \xB7 ")}</small></span><b>${"\u2B50".repeat(a.stars)||"\u2014"} ${a.total}</b></li>`).join(""),this.show("results"),bt.ding()}toast(t,e=""){let n=At("toast");n.className="toast "+e,n.textContent=t,clearTimeout(this._toastT),n.offsetWidth,this._toastT=setTimeout(()=>n.classList.add("hidden"),2200)}update(t,e){let n=this.game;if(n.mode==="menu")return;if(this.hintT-=t,this.hintT<=0){this.hintT=.25;let h=this.s.hints||n.mode==="tutorial"?n.hint():null,u=h?h.text:"",d=At("hint");u!==this.lastHint&&(d.textContent=u,d.classList.remove("flash"),d.offsetWidth,u&&d.classList.add("flash"),this.lastHint=u),document.querySelectorAll("#tray .tool, #tray2 .tool").forEach(f=>f.classList.toggle("suggest",!!h&&h.tool===f.dataset.tool)),At("btn-serve").disabled=!n.canServe(),this._renderExtras()}if(n.mode==="orders"&&n.order){let h=Math.max(0,1-n.orderTime/n.order.patience),u=At("patience-bar");u.style.width=(h*100).toFixed(1)+"%",u.classList.toggle("low",h<.25)}else At("patience-bar").style.width="100%";At("thermo-fill").style.width=Math.min(100,(n.panTemp-20)/230*100).toFixed(1)+"%",At("temp-readout").textContent=`${Math.round(n.panTemp)}\xB0C pan${n.panOnBurner?"":" (off burner)"}`,At("guide-chip").classList.add("hidden");let s=this.s.guide?n.guideList():[],r=At("guide-chips"),o=this._chips||(this._chips=[]);for(r.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden";o.length<s.length;){let h=document.createElement("div");h.className="mini-chip",h.style.position="absolute",h.style.pointerEvents="none",h.innerHTML='<span class="tx"></span><div class="meter"><i></i></div>',r.appendChild(h),o.push(h)}let a=window.innerWidth,l=window.innerHeight,c=[];s.forEach((h,u)=>{let d=o[u];h.obj.getWorldPosition(Xr),Xr.y+=.45,Xr.project(e);let f=(Xr.x*.5+.5)*a,g=(-Xr.y*.5+.5)*l;for(let _=0;_<6&&c.some(m=>Math.abs(m.x-f)<96&&Math.abs(m.y-g)<27);_++)g-=28;c.push({x:f,y:g}),d.style.display="",d.className="mini-chip "+h.cls,d.style.transform="translate(-50%, -100%)",d.firstChild.textContent=h.label,d.lastChild.firstChild.style.width=Math.round(h.p*100)+"%",d.style.left=f.toFixed(0)+"px",d.style.top=Math.max(64,g).toFixed(0)+"px"});for(let h=s.length;h<o.length;h++)o[h].style.display="none";At("btn-flip").classList.toggle("hidden",!n.canFlip())}};function rf(i){return[0,1,2].map(t=>`<span class="${t<i?"":"off"}" style="animation-delay:${t*.15}s">\u2B50</span>`).join("")}var js=i=>document.getElementById(i),Mh=js("scene"),Fa=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,Yr=af();function Xy(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}if(!Xy())js("screen-loading").classList.add("hidden"),js("screen-nogl").classList.remove("hidden");else try{qy()}catch(i){console.error(i),js("screen-loading").classList.add("hidden"),js("screen-nogl").classList.remove("hidden")}function qy(){let i=new Vo({canvas:Mh,antialias:!0,powerPreference:"high-performance"});i.outputColorSpace=Ce,i.toneMapping=Wc,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=aa;let t=new Fs;t.background=new Ut("#ffe6d5"),t.fog=new Go("#ffe6d5",32,70);let e=new Os(i);t.environment=e.fromScene(new ma,.04).texture,t.environmentIntensity=.55,t.add(new ea("#fff6ec","#f1c9b4",.85));let n=new Hs("#fff0dc",2.3);n.position.set(-6,13,8),n.castShadow=!0,Object.assign(n.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:1,far:40}),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=4,t.add(n);let s=new Hs("#cfe8ff",.55);s.position.set(1,9,-8),t.add(s);let r=new qn("#ffd9a8",28,18,2);r.position.set(-.6,9.5,-.8),t.add(r);let o=new Hs("#ffd0e0",.35);o.position.set(8,5,-3),t.add(o);let a=yd(),c=Sd(t,a,{mobile:Fa}),h=new $e(38,1,.1,120),u=Pd(t,a),d=new va(t,a.tex.dot,Fa?140:240),f=new Ua({scene:t,camera:h,mats:a,props:u,kitchen:c,fx:d}),g=new Na({canvas:Mh,camera:h,game:f,kitchen:c}),_=new pa(h,Mh);_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=5.5,_.maxDistance=28,_.minPolarAngle=.15,_.maxPolarAngle=1.36,_.minAzimuthAngle=-1.35,_.maxAzimuthAngle=1.35,_.screenSpacePanning=!1,_.panSpeed=.8,_.rotateSpeed=.7,_.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},_.addEventListener("start",()=>{g.orbiting=!0,m=!0}),_.addEventListener("end",()=>{g.orbiting=!1}),_.addEventListener("change",()=>{let D=_.target;D.x=Math.max(-6,Math.min(6,D.x)),D.z=Math.max(-3,Math.min(3,D.z)),D.y=Math.max(-.5,Math.min(2.5,D.y))});let m=!1,p=null;function b(){let D=window.innerWidth/window.innerHeight,k=D>=1?6.4:5,Z=Math.tan(ha.degToRad(h.fov/2)),X=Math.max(12.5,k/(Z*D)*1.02),nt=D>=1?.86:.55,W=new A(.1,0,D>=1?.55:-.9);return{pos:new A().setFromSphericalCoords(X,nt,0).add(W),target:W}}function v(D=!1){let{pos:k,target:Z}=b();if(m=!1,D){h.position.copy(k),_.target.copy(Z),_.update();return}p={t:0,fromP:h.position.clone(),fromT:_.target.clone(),pos:k,target:Z}}let x=1,L={acc:0,frames:0,t:0};function T(D){let k=window.devicePixelRatio||1;x=D==="high"?Math.min(k,2):D==="low"?1:Math.min(k,Fa?1.6:2),i.setPixelRatio(x);let Z=D==="low"?1024:D==="high"?2048:Fa?1536:2048;n.shadow.mapSize.x!==Z&&(n.shadow.mapSize.set(Z,Z),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null)),i.shadowMap.type=D==="low"?oa:aa,i.setSize(window.innerWidth,window.innerHeight,!1)}function R(){i.setSize(window.innerWidth,window.innerHeight,!1),h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m||v(!0)}T(Yr.quality),window.addEventListener("resize",R),window.addEventListener("orientationchange",()=>setTimeout(R,250)),R();let P=new Oa({game:f,interactor:g,settings:Yr,onResetCamera:()=>v(!1),onQuality:D=>{T(D),qr(Yr)}});f.settings=Yr;let S=new ia,M=0;function I(D){if(p){p.t=Math.min(1,p.t+D/.7);let k=1-Math.pow(1-p.t,3);h.position.lerpVectors(p.fromP,p.pos,k),_.target.lerpVectors(p.fromT,p.target,k),p.t>=1&&(p=null)}if(f.mode==="menu"&&!m){M+=D;let{pos:k,target:Z}=b();h.position.copy(k).applyAxisAngle(new A(0,1,0),Math.sin(M*.25)*.12),_.target.copy(Z)}if(_.update(),f.camAz=_.getAzimuthalAngle(),f.update(D),P.update(D,h),i.render(t,h),Yr.quality==="auto"&&(L.acc+=D,L.frames++,L.acc>3)){let k=L.frames/L.acc;L.acc=0,L.frames=0,k<40&&x>1&&(x=Math.max(1,x-.25),i.setPixelRatio(x),i.setSize(window.innerWidth,window.innerHeight,!1))}}i.setAnimationLoop(()=>I(Math.min(.05,S.getDelta()))),window.__step=(D,k=1/30)=>{for(let Z=0;Z<D;Z+=k)I(k)};let H=()=>{bt.init(),bt.resume()};window.addEventListener("pointerdown",H,{once:!0}),window.addEventListener("touchend",H,{once:!0}),js("screen-loading").classList.add("hidden"),P.show("title"),window.__game=f,window.__controls=_,window.__ix=g}})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
