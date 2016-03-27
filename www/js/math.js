function Name_Product(){
		var m=document.getElementById("name");
		var v=document.getElementById("name_prod");
							v.value=m.value;
							var as=document.getElementById("crio").value;
							var dis=document.getElementById("sod_vodi").value;
		if(as!=""&dis!="")
		{
			v.value="";
		}
				 }
				 
				 document.getElementById("btn").onclick=function(){finish();Name_Product();};
