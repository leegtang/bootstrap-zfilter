bootstrap-zfilter
=================

bootstrap zfilter (jquery plugin)

Preview
-------
![preview](https://raw.githubusercontent.com/leegtang/bootstrap-zfilter/master/preview.JPG)

Guide
-----

css

	<link href="libs/css/bootstrap.min.css" rel="stylesheet">
	<link href="zfilter/zfilter.css" rel="stylesheet">

js

	<script src="libs/js/jquery.min.js"></script>

usage

	<div class="container">
	<div id="cblock"></div>
	</div>
	<script>
	function cbk(p){
		console.log('params:'+p);
		alert(p);
	}
	jQuery("body").zfilter( {
		obj : 'cblock',
		callback : cbk,
		params :[
	                  {content:'性别',
	                   tag:'sex',
	                   data:[
			        	   {value:'-1',title:'全部'},
			        	   {value:'0',title:'男'},
			        	   {value:'1',title:'女'}
			        	]},
			           {content:'年龄',
				        tag:'age',
				        data:[
						    {value:'-1',title:'全部'},
	        	         	{value:'0',title:'19-22'},
	        	         	{value:'1',title:'22-26'}
	        	        ]}
	   ]
	});
	</script>