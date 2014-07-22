/* ===================================================
 * tagmanager.js v0.0.1
 * http://www.leegtang.com
 * ===================================================
 * Copyright 2014 Caigen Li
 *
 * Licensed under the Mozilla Public License, Version 2.0 You may not use this work except in compliance with the License.
 *
 * http://www.mozilla.org/MPL/2.0/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
;(function($) { 
    "use strict";
    $.fn.zfilter = function( options ) {  
        var opts = {
           obj :'cblock',
           extra : '',
           callback : function(){},
           params  :[
                     {content:'性别',tag:'sex',data:[
		        	   {value:'-1',title:'全部'},
		        	   {value:'0',title:'男'},
		        	   {value:'1',title:'女'}
		        	  ] },
           ]  
        };  
        var ap='';
      
        return this.each(function() { 
          if ( options ) {   
            $.extend( opts, options );  
          } 
           
          for(var i=0;i<opts.params.length;i++){
        	  var n=opts.params[i].tag;
        	  var v=opts.params[i].data[0].value;
        	  ap+='<input type="hidden" name="'+n+'" id="'+n+'" value="'+v+'"/>' ;
          }
          
          ap+=' <div class="tj"> <ul>' ;
          
          for(var i=0;i<opts.params.length;i++){
        	  var n=opts.params[i].tag;
        	  var c=opts.params[i].content;
        	  ap+='<li><span class="label label-tag">'+c+':</span>';
        	  for(var j=0;j<opts.params[i].data.length;j++){
        		  ap+='&nbsp;<a href="javascript:;" data-rel="'+n+'" data-value="'+opts.params[i].data[j].value+'">';
        		  if(j==0)ap+='<span class="label label-warning">'+opts.params[i].data[j].title+'</span></a>';
        		  else ap+='<span class="label label-default">'+opts.params[i].data[j].title+'</span></a>';
        	  }
        	  ap+='</li>';
        	  
          }
          ap+='<li><span class="label label-tag">已选择:</span>';
          for(var i=0;i<opts.params.length;i++){
        	  var n=opts.params[i].tag;
        	  ap+='&nbsp;<span class="label label-info"><span id="t_'+n+'">全部</span>&nbsp;<a href="javascript:;" data-rel="'+n+'" data-value="'+opts.params[i].data[0].value+'" class="glyphicon glyphicon-remove"></a></span>';
        	  		
          } 
          ap+='</li></ul></div>';
          $("#"+opts.obj).append(ap);
           
         
          $(".tj a").click(function(){
        		var rel=$(this).attr('data-rel');
        		var val=$(this).attr('data-value');
        		var t=$(this).children('span').text();
        		$("#"+rel).val(val);

        		if(t=='')t='全部'; 
        		$("#t_"+rel).text(t);

        		$(".tj a").each(function(){
        			if($(this).attr('data-rel')== rel){ 
        				if($(this).attr('data-value')== val)
        					$(this).children('span').removeClass('label-default').addClass('label-warning');
        				else 
        					$(this).children('span').removeClass('label-warning').addClass('label-default');
        			} 
        		});
        		var params='';
        		for(var i=0;i<opts.params.length;i++){
              	  var n=opts.params[i].tag;
              	  params+=n+'='+$("#"+n).val();
              	  if(i!=opts.params.length-1)params+='&';
        		} 
        		// callback ,send the result message
        		opts.callback(opts.extra+params);
        		//console.log('params:'+opts.extra+params); 
        		
        	});
      
        });  
      
      };  

}(jQuery));