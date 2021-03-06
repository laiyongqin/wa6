/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
*
* Changed By Nutjs 2016-08-14
*
*/
COMP['loading-bar']=Vue.extend({template:"<div v-if=\"show\" class=\"loading-bar to-{{ direction }} {{ full }} {{ class != undefined ? class : '' }} {{ error ? 'error' : '' }}\" :id=\"id != undefined ? 'loading-bar-'+id : ''\" :style=\"styling()\"> <div class=\"glow-bar\"></div> </div>",props:{id:String,"class":String,progress:Number,direction:{type:String,"default":"right"},error:Boolean},data:function(){return{show:!0,full:"",width:0,wait:!1}},watch:{progress:function(b,c){var a=this;0==c&&0<b&&this.$dispatch("loading-bar:started");
1<b&&100>b&&this.$dispatch("loading-bar:loading");100==this.progress?(this.wait=!0,this.width=100,setTimeout(function(){a.full="full";a.error=!1;setTimeout(function(){a.show=!1;a.progress=0;a.wait=!1;setTimeout(function(){a.full="";a.show=!0;a.$dispatch("loading-bar:loaded")})},250)},700)):(this.full="",this.width=b)},error:function(b,c){this.progress=100;this.$dispatch("loading-bar:error")}},methods:{styling:function(){return this.wait?{width:"100%"}:{width:this.width+"%"}}}});
