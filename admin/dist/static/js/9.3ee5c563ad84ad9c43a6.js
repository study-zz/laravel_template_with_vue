webpackJsonp([9],{a7ke:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#allmap {\n  width: 100%;\n  height: 100%;\n}\n#allmap p {\n    margin-left: 5px;\n    font-size: 14px;\n}\n.anchorBL {\n  display: none;\n}\n",""])},"n+s7":function(n,e,t){var a=t("a7ke");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("78aa91fc",a,!0)},xSm7:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("jkKj"),i=t.n(a),o={name:"dashboard",data:function(){return{mapHeight:500,points:[[116.417854,39.921988,"车牌：XXXX<br>司机：王大力<br>电话：13800138000<br>时间：2018-03-16 18：00：05<br>状态:停车超时报警<br>速度:1.2KM/H<br>位置：北京市东城区正义路甲5号"],[116.412222,39.912345,"车牌：ZZZZ<br>司机：王大力<br>电话：13800138000<br>时间：2018-03-16 18：00：05<br>状态:停车超时报警<br>速度:1.2KM/H<br>位置：北京市东城区正义路甲5号"]]}},mounted:function(){var n=new i.a.Map("allmap",{enableMapClick:!1});n.centerAndZoom(new i.a.Point(116.417854,39.921988),12),n.enableScrollWheelZoom();var e=new i.a.Geolocation;e.enableSDKLocation(),e.getCurrentPosition(function(e){0===this.getStatus()&&n.panTo(e.point)},{enableHighAccuracy:!0}),this.mapHeight=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-85;var t=new i.a.Marker(new i.a.Point(116.406605,39.921585));n.addOverlay(t),function(e,t){t.addEventListener("click",function(t){!function(e,t){var o=t.target,r=new i.a.Point(o.getPosition().lng,o.getPosition().lat),l=new i.a.InfoWindow(e,a);n.openInfoWindow(l,r)}(e,t)})}("车牌：YYYY<br>司机：王大力<br>电话：13800138000<br>时间：2018-03-16 18：00：05<br>状态:停车超时报警<br>速度:1.2KM/H<br>位置：北京市东城区正义路甲5号",t);var a={width:250,title:"地标",enableMessage:!1}},methods:{},computed:{}},r={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{style:{height:this.mapHeight+"px"},attrs:{id:"allmap"}})},staticRenderFns:[]};var l=t("VU/8")(o,r,!1,function(n){t("n+s7")},null,null);e.default=l.exports}});