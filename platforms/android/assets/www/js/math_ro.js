function Name_Product(){
	document.getElementById("errorOut").innerHTML="";
		var m=document.getElementById("name");
		//var v=document.getElementById("name_prod");
						//	v.value=m.value;
							var as=document.getElementById("crio").value;
							var dis=document.getElementById("sod_vodi").value;
										
					if(m.value=="1")
					{
						//v.value="Nu este în listă sau necunoscut";
						error0.value="";
						if(as>0.01||as<-5)
						{
							if(as>0.01)
							{
								crios.value=0.01;}
							if(as<-5)
							{crios.value=-5;}
						}
						if(dis>1||dis<0)
						{
							if(dis>1)
							{vodos.value=1;}
							if(dis<0)
							{vodos.value=0;}
						}
						
						if(erste>100||erste<-50)
						{
							//v.value="";
							if(erste>100)
							{first.value=100;}
							if(erste<-50)
							{first.value=-50;}
						}
						if(zweite>100||zweite<-50)
						{
							//v.value="";
							if(zweite>100)
							{last.value=100;}
							if(zweite<-50)
							{last.value=-50;}
						}
						
					}
					else if(m.value=="- Selectați produsul -")
					{
						error0.value="Selectați produsul!";
						//v.value="";
						var erste=document.getElementById("first").value;
				var zweite=document.getElementById("last").value;
				var croi_prov=document.getElementById("crio").value;
				var voda_prov=document.getElementById("sod_vodi").value;
if(erste==""){ 
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("error1").value="  Tastaţi numărul!";
			document.getElementById("error2").value="";
return false;}
else if(zweite==""){
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="  Tastaţi numărul!";
return false;}
if(croi_prov==""){ 
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("errorCrio").value="  Tastaţi numărul!";
			document.getElementById("errorVoda").value="";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="";
return false;}
else if(voda_prov==""){
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("errorCrio").value="";
			document.getElementById("errorVoda").value="  Tastaţi numărul!";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="";
return false;}
else{
	//errorCrio   errorVoda
	document.getElementById("errorCrio").value="";
	document.getElementById("errorVoda").value="";
document.getElementById("error1").value="";
document.getElementById("error2").value="";
}
					}
					else{error0.value="";}
		if(as!=""&dis!="")
		{
			error0.value="";
			//v.value="";
		}
					
				 }
				 
	function validation()
{			var m=document.getElementById("name");
				//var name=document.getElementById("name_prod");
				var v=document.getElementById("vv");
				var erste=document.getElementById("first").value;
				var first=document.getElementById("first");
				var zweite=document.getElementById("last").value;
				var last=document.getElementById("last");
				var error1=document.getElementById("error1");
				var error2=document.getElementById("error2");
				
				var error0=document.getElementById("error0");
					var as=document.getElementById("crio").value;
					var crios=document.getElementById("crio");
					var vodos=document.getElementById("sod_vodi");
					var dis=document.getElementById("sod_vodi").value;
					var erorCrio=document.getElementById("errorCrio");
					var erorVoda=document.getElementById("errorVoda");
							
	if(m.value=="1")
	{
								
						if(as>0.01||as<-5)
						{
							if(as>0.01)
							{
								crios.value=0.01;}
							if(as<-5)
							{crios.value=-5;}
						}
						if(dis>1||dis<0)
						{
							if(dis>1)
							{vodos.value=1;}
							if(dis<0)
							{vodos.value=0;}
						}
		if(erste>100||erste<-50)
	{
		v.value="";
		//name.value="";
		if(erste>100)
		{first.value=100;}
		if(erste<-50)
		{first.value=-50;}
	error0.value="";
	}
	if(zweite>100||zweite<-50)
	{
		v.value="";
		//name.value="";
		if(zweite>100)
		{last.value=100;}
		if(zweite<-50)
		{last.value=-50;}
	error0.value="";
	}
	}
	else //(m.value!="- Выберите продукт -")
	{
		
	if(erste>100||erste<-60)
	{
		v.value="";
		//name.value="";
		if(erste>100)
		{first.value=100;}
		if(erste<-60)
		{first.value=-60;}
	error0.value="";
	}
	if(zweite>100||zweite<-60)
	{
		v.value="";
		//name.value="";
		if(zweite>100)
		{last.value=100;}
		if(zweite<-60)
		{last.value=-60;}
	error0.value="";
	}
	}
}				 
				 

	
function empty()
{
	var erste=document.getElementById("first").value;
				var zweite=document.getElementById("last").value;
				var croi_prov=document.getElementById("crio").value;
				var voda_prov=document.getElementById("sod_vodi").value;
if(erste==""){ 
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("error1").value="  Tastaţi numărul!";
			document.getElementById("error2").value="";
return false;}
else if(zweite==""){
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="  Tastaţi numărul!";
return false;}
if(croi_prov==""){ 
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("errorCrio").value="  Tastaţi numărul!";
			document.getElementById("errorVoda").value="";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="";
return false;}
else if(voda_prov==""){
			document.getElementById("vv").value="";
			//document.getElementById("name_prod").value="";
			document.getElementById("errorCrio").value="";
			document.getElementById("errorVoda").value="  Tastaţi numărul!";
			document.getElementById("error1").value="";
			document.getElementById("error2").value="";
return false;}
else{
	//errorCrio   errorVoda
	document.getElementById("errorCrio").value="";
	document.getElementById("errorVoda").value="";
document.getElementById("error1").value="";
document.getElementById("error2").value="";
}
}



				 
function finish(){
	var graph1=[];
	var graph2=[];
	var graph=[];
	
	var erste=document.getElementById("first").value;
				var zweite=document.getElementById("last").value;
				
				var mim=parseFloat(erste);
				var nin=parseFloat(zweite);

				 var a = parseInt(mim)+273; 
				 var b = parseInt(nin)+273;
var temp=new Array(213.0,214.0,215.0,216.0,217.0,218.0,219.0,220.0,221.0,222.0,223.0,224.0,225.0,226.0,227.0,228.0,229.0,230.0,231.0,232.0,233.0,234.0,235.0,236.0,237.0,238.0,239.0,240.0,241.0,242.0,243.0,244.0,245.0,246.0,247.0,248.0,249.0,250.0,251.0,252.0,253.0,254.0,255.0,256.0,257.0,258.0,259.0,260.0,261.0,262.0,263.0,264.0,265.0,266.0,267.0,268.0,269.0,270.0,271.0,271.7,273.0,274.0,275.0,276.0,277.0,278.0,279.0,280.0,281.0,282.0,283.0,284.0,285.0,286.0,287.0,288.0,289.0,290.0,291.0,292.0,293.0,294.0,295.0,296.0,297.0,298.0,299.0,300.0,301.0,302.0,303.0,304.0,305.0,306.0,307.0,308.0,309.0,310.0,311.0,312.0,313.0,314.0,315.0,316.0,317.0,318.0,319.0,320.0,321.0,322.0,323.0,324.0,325.0,326.0,327.0,328.0,329.0,330.0,331.0,332.0,333.0,334.0,335.0,336.0,337.0,338.0,339.0,340.0,341.0,342.0,343.0,344.0,345.0,346.0,347.0,348.0,349.0,350.0,351.0,352.0,353.0,354.0,355.0,356.0,357.0,358.0,359.0,360.0,361.0,362.0,363.0,364.0,365.0,366.0,367.0,368.0,369.0,370.0,371.0,372.0,373.0);
for(var i=0;i<temp.length;i++)
{
	var c=temp[i]-273;
	graph1.push(c);
}

var croi_prov=document.getElementById("crio").value;
var voda_prov=document.getElementById("sod_vodi").value;

if(croi_prov!=""&voda_prov!="")
{
	var d=mim;
	var t=nin;
switch(document.getElementById("formula").value)
	{
		case"Raul":{
	for(qw=0;qw<2;qw++)
	{ 
var Crio_t=document.getElementById("crio").value; 
		var Voda=document.getElementById("sod_vodi").value;
		var T_prod_beg; 
		var w_voda_fin;
		var w_voda_beg;
		var C_voda;
		var C_ice;   
		var suhoe;   
		var delta_t;        
		var Delta_h_prod_b; 
								var C_suhoe;
								var R_ice;
								var d_h_suhoe;
								var d_h_voda;
								var d_h_ice;
								var d_h_faza;
		var resultat_Raul;
		var resultat_Raul1;
	if(qw==1)   {
					T_prod_beg=d;
					resultat_Raul1=resultat_Raul;
			  }
	else {T_prod_beg=t;}
		
	
if (Crio_t >= 0) {Crio_t= 0.01;}
if (Crio_t < -5) {Crio_t= -5;}
if (Voda   < 0)  {Voda =0;}
if (Voda   > 1)  {Voda=1;}
if (T_prod_beg > 100)  {T_prod_beg = 100 ;}
if (T_prod_beg < -50)  {T_prod_beg = -50 ;}
	
	C_voda  = 4190.0   ; // теплоемкость воды, Дж/(кг*град.С)
	C_ice   = 2050.0   ; // теплоемкость льда, Дж/(кг*град.С)
	suhoe   = 1 - Voda ; // содержание сухого вещества, доли единицы
			
if ((T_prod_beg*10) >= (Crio_t*10)) { 
	  // если температура выше криоскопической, вся вода жидкая
		w_voda_beg = 0; 
	  }  
else {					// если температура ниже криоскопической, количество вымороженной воды
						// можно определить по формуле Рауля
	  w_voda_beg = 1 - (Crio_t/T_prod_beg); 		
	 }
	delta_t  = 0.1;     //  задаем значение элементарного приращения температуры
	Delta_h_prod_b= 0;  //  задаем начальное значение разности энтальпий при изменении температуры
                        //  от текущего значения (максимум +100 град.С) до -60 град.С
for (j= 1; j< 1601; j++)   //  запускаем цикл интегрирования с шагом delta_t
  {
      C_suhoe = 1470+T_prod_beg*0.0066; // теплоемкость сухого вещества при текущей температуре
      R_ice = 333400 + T_prod_beg * 2090; // удельная теплота льдообразования при текущей температуре
      d_h_suhoe = C_suhoe * delta_t * suhoe; // приращение энтальпии сухого вещества
	  d_h_voda = C_voda*delta_t * Voda * (1 - w_voda_beg); // приращение энтальпии жидкой воды
	  
	  
	  
	  d_h_ice = C_ice   * delta_t * Voda * w_voda_beg ;       // приращение энтальпии льда (вымороженной воды)
   if ((T_prod_beg*10) >= (Crio_t*10)) // определим количество вымороженной воды при текущей температуре
                { 
			     w_voda_fin = 0;
			   }	   
   else {
			w_voda_fin =1-Crio_t/ T_prod_beg;
		}
      d_h_faza= R_ice * Voda * (w_voda_fin - w_voda_beg) ; // приращение энтальпии фазового перехода из воды в лед
      Delta_h_prod_b= Delta_h_prod_b + d_h_suhoe + d_h_voda + d_h_ice + d_h_faza ; // суммарное приращение энтальпии
	  
	  resultat_Raul=Delta_h_prod_b;
	  if  (T_prod_beg <= -50)
		{ 
			break ;
		}; // при температуре ниже -50 град.С выходим из цикла интегрирования
      w_voda_beg= w_voda_fin;          // делаем текущее значение вымороженной воды начальным
      T_prod_beg= T_prod_beg - delta_t;  // делаем текущее значение температуры начальным и переходим к началу цикла
	
  }
  }
		var v=document.getElementById("vv");
		var itog=((resultat_Raul1-resultat_Raul)/1000).toFixed(1);
		if(itog<0){itog=itog*(-1);}
		v.value=itog;
		}
		break;
		
		case"Cijov":{
	for(qw=0;qw<2;qw++)
	{ 
var Crio_t=document.getElementById("crio").value; 
		var Voda=document.getElementById("sod_vodi").value;
		var T_prod_beg; 
		var w_voda_fin=0; 
		var w_voda_beg=0;
		var C_voda=0;
		var C_ice=0;   
		var suhoe=0;   
		var delta_t=0;        
		var Delta_h_prod_b=0; 
					var C_suhoe; var R_ice;	var d_h_suhoe;	var d_h_voda; var d_h_ice;	var d_h_faza;
		var resultat_Cijov;
		var resultat_Cijov1;
							var mn;var m;var b;var i;
	if(qw==1)   {
					T_prod_beg=d;
					resultat_Cijov1=resultat_Cijov;
			  }
	else {
		T_prod_beg=t;
		}
		
	
if (Crio_t >= 0) {Crio_t= 0.01;}
if (Crio_t < -5) {Crio_t= -5;}
if (Voda   < 0)  {Voda =0;}
if (Voda   > 1)  {Voda=1;}
if (T_prod_beg > 100)  {T_prod_beg = 100 ;}
if (T_prod_beg < -50)  {T_prod_beg = -50 ;}
	
	C_voda  = 4190.0   ; // теплоемкость воды, Дж/(кг*град.С)
	C_ice   = 2050.0   ; // теплоемкость льда, Дж/(кг*град.С)
	suhoe   = 1 - Voda ; // содержание сухого вещества, доли единицы
			
if ((T_prod_beg*10) >= (Crio_t*10)) { 
	  // если температура выше криоскопической, вся вода жидкая
		w_voda_beg = 0;  
	  }  
else {					// если температура ниже криоскопической, количество вымороженной воды
						// можно определить по формуле Чижова
						mn=10-(T_prod_beg*10)+(Crio_t*10); 
						m=mn/10;
						b =Math.log10(m);
						i= 1.105/(1+0.31/b);								//1.105 / (1+0.31/(log10(1-T_prod_beg+Crio_t));
						w_voda_beg=i.toFixed(6);
	  					
	 }
	delta_t  = 0.1;     //  задаем значение элементарного приращения температуры
	Delta_h_prod_b= 0;  //  задаем начальное значение разности энтальпий при изменении температуры
                        //  от текущего значения (максимум +100 град.С) до -60 град.С
for (j= 1; j< 1601; j++)   //  запускаем цикл интегрирования с шагом delta_t
  {
      C_suhoe = 1470+T_prod_beg*0.0066; // теплоемкость сухого вещества при текущей температуре
      R_ice = 333400 + T_prod_beg * 2090; // удельная теплота льдообразования при текущей температуре
      d_h_suhoe = C_suhoe * delta_t * suhoe; // приращение энтальпии сухого вещества
	  d_h_voda = C_voda*delta_t * Voda * (1 - w_voda_beg); // приращение энтальпии жидкой воды
	  
	  
	  d_h_ice = C_ice   * delta_t * Voda * w_voda_beg ;       // приращение энтальпии льда (вымороженной воды)
	  
   if ((T_prod_beg*10) >= (Crio_t*10)) // определим количество вымороженной воды при текущей температуре
                { 
			     w_voda_fin = 0;
			   }	   
   else {
						mn=10-(T_prod_beg*10)+(Crio_t*10); 
						m=mn/10;
						b =Math.log10(m);
						i= 1.105/(1+0.31/b);								//1.105 / (1+0.31/(log10(1-T_prod_beg+Crio_t));
						w_voda_fin=i.toFixed(6);						
		}
      d_h_faza= R_ice * Voda * (w_voda_fin - w_voda_beg) ; // приращение энтальпии фазового перехода из воды в лед
      Delta_h_prod_b= Delta_h_prod_b + d_h_suhoe + d_h_voda + d_h_ice + d_h_faza ; // суммарное приращение энтальпии
	  
	  resultat_Cijov=Delta_h_prod_b;
	  if  (T_prod_beg <= -50)
		{ 
			break ;
		}; // при температуре ниже -50 град.С выходим из цикла интегрирования
      w_voda_beg= w_voda_fin;          // делаем текущее значение вымороженной воды начальным
      T_prod_beg= T_prod_beg - delta_t;  // делаем текущее значение температуры начальным и переходим к началу цикла
	
  }
  }
		var v=document.getElementById("vv");
		var itog=((resultat_Cijov1-resultat_Cijov)/1000).toFixed(1);
		if(itog<0){itog=itog*(-1);}
		v.value=itog;
		}
		break;
		default:{}break;
	};
}
else if(erste!=""&zweite!=""||erste!=""&&zweite!=""){
	mim=Math.round(mim);
	nin=Math.round(nin);
switch(document.getElementById("name").value)
{
case"caise":{
				var result1="";var result2=""; var resultall="";
				 
				 var numb_abricos = new Array(0.00,2.20,4.41,6.62,8.83,11.05,13.28,15.51,17.75,19.99,22.24,24.50,26.77,29.04,31.32,33.61,35.91,38.22,40.54,42.87,45.21,47.56,49.92,52.30,54.70,57.10,59.53,61.97,64.43,66.92,69.42,71.95,74.51,77.09,79.71,82.36,85.05,87.79,90.57,93.41,96.30,99.27,102.31,105.45,108.69,112.06,115.58,119.28,123.19,127.39,131.94,136.95,142.60,149.14,157.03,167.12,181.22,204.22,256.07,393.69,398.68,402.51,406.34,410.18,414.01,417.85,421.68,425.51,429.35,433.18,437.02,440.85,444.68,448.52,452.35,456.19,460.02,463.85,467.69,471.52,475.36,479.19,483.02,486.86,490.69,494.53,498.36,502.19,506.03,509.86,513.70,517.53,521.36,525.20,529.03,532.87,536.70,540.53,544.37,548.20,552.04,555.87,559.70,563.54,567.37,571.21,575.04,578.87,582.71,586.54,590.38,594.21,598.04,601.88,605.71,609.55,613.38,617.21,621.05,624.88,628.72,632.55,636.38,640.22,644.05,647.89,651.72,655.55,659.39,663.22,667.06,670.89,674.72,678.56,682.39,686.23,690.06,693.89,697.73,701.56,705.40,709.23,713.06,716.90,720.73,724.57,728.40,732.23,736.07,739.90,743.74,747.57,751.40,755.24,759.07,762.91,766.74,770.57,774.41,778.24,782.08);
					graph2=numb_abricos;
					for(var i in temp)
					{
						if(temp[i]==a)
						{
							result1=numb_abricos[i];
						};
					};
					for(var j in temp)
					{
						if(temp[j]==b)
						{
							result2=numb_abricos[j];
						};
					};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);
};
	break;
case"gutuie":{
				var result1="";var result2=""; var resultall="";
				
				var value_aiva=new Array(0.00, 2.20, 4.40, 6.61, 8.82, 11.04, 13.27, 15.50, 17.74, 19.98, 22.23, 24.49, 26.75, 29.03, 31.31, 33.60, 35.90, 38.21, 40.53, 42.86, 45.20, 47.56, 49.93, 52.31,54.71, 57.12, 59.55, 62.00, 64.47, 66.97, 69.48, 72.02, 74.59, 77.19, 79.83, 82.50, 85.21, 87.97, 90.79, 93.66, 96.59, 99.60, 102.70, 105.90, 109.22, 112.68, 116.31, 120.15, 124.24,128.66, 133.50, 138.92, 145.13, 152.53, 161.79, 174.34, 193.68, 231.97, 390.72, 394.56, 398.39, 402.23, 406.07, 409.90, 413.74, 417.58, 421.41, 425.25, 429.09, 432.93, 436.76, 440.60,444.44, 448.27, 452.11, 455.95, 459.78, 463.62, 467.46, 471.30, 475.13, 478.97, 482.81, 486.64, 490.48, 494.32, 498.15, 501.99, 505.83, 509.67, 513.50, 517.34, 521.18, 525.01, 528.85,532.69, 536.52, 540.36, 544.20, 548.04, 551.87, 555.71, 559.55, 563.38, 567.22, 571.06, 574.89, 578.73, 582.57, 586.41, 590.24, 594.08, 597.92, 601.75, 605.59, 609.43, 613.26, 617.10,620.94, 624.78, 628.61, 632.45, 636.29, 640.12, 643.96, 647.80, 651.63, 655.47, 659.31, 663.15, 666.98, 670.82, 674.66, 678.49, 682.33, 686.17, 690.00, 693.84, 697.68, 701.52, 705.35,709.19, 713.03, 716.86, 720.70, 724.54, 728.37, 732.21, 736.05, 739.89, 743.72, 747.56, 751.40, 755.23, 759.07, 762.91, 766.74, 770.58, 774.42, 778.26, 782.09);
					graph2=value_aiva;
					for(var i in temp)
					{
						if(temp[i]==a)
						{
							result1=value_aiva[i];
						};
					};
					for(var j in temp)
					{
						if(temp[j]==b)
						{
							result2=value_aiva[j];
						};
					};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;						
};
	break;
case"ananasul":{
				var result1="";var result2=""; var resultall="";
				var value_ananas=new Array(0.00, 2.20, 4.40, 6.60, 8.81, 11.03, 13.25, 15.47, 17.71, 19.94, 22.19, 24.44, 26.70, 28.97, 31.25, 33.53, 35.82, 38.13, 40.44, 42.76, 45.09, 47.44, 49.80, 52.17, 54.56, 56.96, 59.38, 61.81, 64.27, 66.74, 69.24, 71.76, 74.31, 76.88, 79.49, 82.13, 84.81, 87.53, 90.30, 93.12, 96.00, 98.95, 101.98, 105.09, 108.31, 111.65, 115.13, 118.79, 122.66, 126.79, 131.26, 136.17, 141.67, 148.01, 155.58, 165.14, 178.21, 198.73, 240.96, 394.24, 398.46, 402.30, 406.14, 409.98, 413.81, 417.65, 421.49, 425.33, 429.17, 433.00, 436.84, 440.68, 444.52, 448.36, 452.19, 456.03, 459.87, 463.71, 467.55, 471.38, 475.22, 479.06, 482.90, 486.74, 490.57, 494.41, 498.25, 502.09, 505.93, 509.76, 513.60, 517.44, 521.28, 525.12, 528.95, 532.79, 536.63, 540.47, 544.31, 548.14, 551.98, 555.82, 559.66, 563.50, 567.33, 571.17, 575.01, 578.85, 582.69, 586.52, 590.36, 594.20, 598.04, 601.88, 605.71, 609.55, 613.39, 617.23, 621.07, 624.90, 628.74, 632.58, 636.42, 640.26, 644.09, 647.93, 651.77, 655.61, 659.45, 663.28, 667.12, 670.96, 674.80, 678.64, 682.47, 686.31, 690.15, 693.99, 697.83, 701.66, 705.50, 709.34, 713.18, 717.02, 720.85, 724.69, 728.53, 732.37, 736.21, 740.04, 743.88, 747.72, 751.56, 755.40, 759.23, 763.07, 766.91, 770.75, 774.59, 778.42, 782.26);
					graph2=value_ananas;
					for(var i in temp)
					{
						if(temp[i]==a)
						{
							result1=value_ananas[i];
						};
					};
					for(var j in temp)
					{
						if(temp[j]==b)
						{
							result2=value_ananas[j];
						};
					};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"portocale":{
				var result1="";var result2=""; var resultall="";
				var value_apelsin=new Array(0.00,2.17,4.35,6.54,8.72,10.92,13.12,15.32,17.53,19.75,21.98,24.21,26.44,28.69,30.94,33.21,35.48,37.76,40.05,42.35,44.67,46.99,49.33,51.68,54.05,56.43,58.83,61.25,63.68,66.14,68.62,71.13,73.66,76.22,78.81,81.45,84.12,86.83,89.60,92.42,95.31,98.27,101.31,104.45,107.70,111.10,114.65,118.40,122.41,126.72,131.45,136.73,142.78,149.97,158.97,171.14,189.86,226.88,380.21,383.96,387.71,391.47,395.22,398.98,402.73,406.48,410.24,413.99,417.75,421.50,425.25,429.01,432.76,436.52,440.27,444.02,447.78,451.53,455.29,459.04,462.79,466.55,470.30,474.06,477.81,481.56,485.32,489.07,492.83,496.58,500.33,504.09,507.84,511.60,515.35,519.10,522.86,526.61,530.37,534.12,537.87,541.63,545.38,549.14,552.89,556.64,560.40,564.15,567.91,571.66,575.41,579.17,582.92,586.68,590.43,594.18,597.94,601.69,605.45,609.20,612.95,616.71,620.46,624.22,627.97,631.72,635.48,639.23,642.99,646.74,650.49,654.25,658.00,661.76,665.51,669.26,673.02,676.77,680.53,684.28,688.03,691.79,695.54,699.30,703.05,706.80,710.56,714.31,718.07,721.82,725.57,729.33,733.08,736.84,740.59,744.34,748.10,751.85,755.61,759.36,763.11);
					graph2=value_apelsin;
					for(var i in temp)
					{
						if(temp[i]==a)
						{
							result1=value_apelsin[i];
						};
					};
					for(var j in temp)
					{
						if(temp[j]==b)
						{
							result2=value_apelsin[j];
						};
					};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"pepeni verzi":{
				var result1="";var result2=""; var resultall="";
				var value_arbuz=new Array(0.00,2.26,4.53,6.81,9.09,11.38,13.67,15.97,18.28,20.59,22.91,25.23,27.57,29.91,32.27,34.63,37.00,39.38,41.77,44.18,46.59,49.02,51.47,53.92,56.40,58.89,61.40,63.92,66.47,69.04,71.64,74.26,76.90,79.58,82.30,85.05,87.84,90.68,93.58,96.52,99.54,102.62,105.80,109.06,112.44,115.96,119.63,123.49,127.58,131.96,136.71,141.94,147.81,154.60,162.74,173.04,187.18,209.45,255.43,422.69,427.15,431.20,435.26,439.31,443.37,447.42,451.48,455.53,459.59,463.64,467.70,471.75,475.81,479.86,483.92,487.97,492.03,496.08,500.14,504.19,508.25,512.30,516.36,520.41,524.47,528.52,532.58,536.63,540.69,544.74,548.80,552.85,556.91,560.96,565.02,569.07,573.13,577.18,581.24,585.29,589.35,593.40,597.46,601.51,605.57,609.62,613.68,617.73,621.79,625.84,629.90,633.95,638.01,642.06,646.12,650.17,654.23,658.28,662.34,666.39,670.45,674.50,678.56,682.61,686.67,690.72,694.78,698.83,702.89,706.94,711.00,715.05,719.11,723.16,727.22,731.27,735.33,739.38,743.44,747.49,751.55,755.60,759.66,763.71,767.77,771.82,775.88,779.93,783.99,788.04,792.10,796.15,800.21,804.26,808.32,812.37,816.43,820.48,824.54,828.59,832.65);
							graph2=value_arbuz;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_arbuz[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_arbuz[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"anghinare":{
				var result1="";var result2=""; var resultall="";
				var value_artisoki=new Array(0.00,2.18,4.37,6.56,8.76,10.97,13.17,15.39,17.61,19.84,22.07,24.31,26.56,28.81,31.08,33.35,35.63,37.92,40.22,42.53,44.85,47.18,49.53,51.89,54.26,56.65,59.05,61.47,63.92,66.38,68.86,71.37,73.90,76.46,79.06,81.68,84.35,87.06,89.81,92.62,95.49,98.42,101.43,104.53,107.74,111.06,114.53,118.18,122.04,126.17,130.64,135.55,141.07,147.45,155.10,164.81,178.24,199.70,245.79,390.10,394.68,398.49,402.30,406.11,409.92,413.73,417.54,421.35,425.16,428.97,432.79,436.60,440.41,444.22,448.03,451.84,455.65,459.46,463.27,467.08,470.90,474.71,478.52,482.33,486.14,489.95,493.76,497.57,501.38,505.19,509.01,512.82,516.63,520.44,524.25,528.06,531.87,535.68,539.49,543.30,547.12,550.93,554.74,558.55,562.36,566.17,569.98,573.79,577.60,581.41,585.23,589.04,592.85,596.66,600.47,604.28,608.09,611.90,615.71,619.52,623.34,627.15,630.96,634.77,638.58,642.39,646.20,650.01,653.82,657.63,661.45,665.26,669.07,672.88,676.69,680.50,684.31,688.12,691.93,695.74,699.56,703.37,707.18,710.99,714.80,718.61,722.42,726.23,730.04,733.85,737.67,741.48,745.29,749.10,752.91,756.72,760.53,764.34,768.15,771.96,775.78);
							graph2=value_artisoki;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_artisoki[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_artisoki[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vânătă":{
				var result1="";var result2=""; var resultall="";
				var value_baklajan=new Array(0.00,2.24,4.49,6.74,8.99,11.26,13.52,15.80,18.08,20.36,22.66,24.96,27.27,29.58,31.91,34.24,36.58,38.94,41.30,43.67,46.06,48.46,50.87,53.29,55.73,58.19,60.66,63.15,65.66,68.20,70.75,73.33,75.94,78.57,81.24,83.94,86.69,89.47,92.31,95.19,98.14,101.16,104.25,107.44,110.73,114.14,117.70,121.43,125.37,129.58,134.11,139.07,144.61,150.94,158.42,167.71,180.10,198.63,233.01,344.09,413.40,420.55,424.52,428.49,432.46,436.43,440.40,444.37,448.34,452.31,456.28,460.25,464.22,468.19,472.16,476.13,480.10,484.07,488.04,492.01,495.98,499.95,503.92,507.89,511.86,515.83,519.80,523.77,527.74,531.71,535.68,539.65,543.62,547.59,551.56,555.53,559.50,563.47,567.44,571.41,575.38,579.35,583.32,587.29,591.26,595.23,599.20,603.17,607.14,611.11,615.08,619.05,623.02,626.99,630.96,634.93,638.90,642.87,646.84,650.81,654.78,658.75,662.72,666.69,670.66,674.63,678.60,682.57,686.54,690.51,694.48,698.45,702.42,706.39,710.36,714.33,718.30,722.27,726.24,730.21,734.18,738.15,742.12,746.09,750.06,754.03,758.00,761.97,765.94,769.91,773.88,777.85,781.82,785.79,789.76,793.73,797.70,801.67,805.64,809.61,813.58);
							graph2=value_baklajan;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_baklajan[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_baklajan[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"banane":{
				var result1="";var result2=""; var resultall="";
				var value_banani=new Array(0.00,2.14,4.28,6.43,8.58,10.73,12.89,15.06,17.23,19.41,21.59,23.78,25.98,28.18,30.39,32.61,34.84,37.08,39.32,41.57,43.84,46.11,48.40,50.70,53.01,55.34,57.68,60.04,62.41,64.81,67.22,69.65,72.11,74.60,77.11,79.66,82.24,84.86,87.52,90.23,92.99,95.81,98.71,101.68,104.75,107.93,111.24,114.70,118.36,122.25,126.45,131.04,136.15,142.01,148.96,157.64,169.36,187.37,222.90,369.91,373.55,377.20,380.85,384.50,388.14,391.79,395.44,399.08,402.73,406.38,410.02,413.67,417.32,420.97,424.61,428.26,431.91,435.55,439.20,442.85,446.49,450.14,453.79,457.44,461.08,464.73,468.38,472.02,475.67,479.32,482.96,486.61,490.26,493.91,497.55,501.20,504.85,508.49,512.14,515.79,519.43,523.08,526.73,530.38,534.02,537.67,541.32,544.96,548.61,552.26,555.90,559.55,563.20,566.85,570.49,574.14,577.79,581.43,585.08,588.73,592.37,596.02,599.67,603.32,606.96,610.61,614.26,617.90,621.55,625.20,628.84,632.49,636.14,639.79,643.43,647.08,650.73,654.37,658.02,661.67,665.31,668.96,672.61,676.26,679.90,683.55,687.20,690.84,694.49,698.14,701.78,705.43,709.08,712.73,716.37,720.02,723.67,727.31,730.96,734.61,738.25);
							graph2=value_banani;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_banani[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_banani[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"miel peste medie adipozitate":
	{
				var result1="";var result2=""; var resultall="";
				var value_baran_visoc=new Array(0.00,1.88,3.76,5.64,7.53,9.43,11.32,13.23,15.13,17.04,18.96,20.88,22.80,24.74,26.67,28.62,30.57,32.52,34.49,36.46,38.44,40.43,42.43,44.43,46.45,48.48,50.52,52.57,54.64,56.72,58.82,60.93,63.06,65.21,67.38,69.58,71.81,74.06,76.34,78.66,81.03,83.43,85.89,88.41,91.00,93.67,96.44,99.32,102.34,105.53,108.94,112.62,116.69,121.26,126.59,133.09,141.60,154.07,176.75,248.74,293.39,299.85,303.45,307.04,310.63,314.23,317.82,321.41,325.01,328.60,332.19,335.78,339.38,342.97,346.56,350.16,353.75,357.34,360.94,364.53,368.12,371.71,375.31,378.90,382.49,386.09,389.68,393.27,396.87,400.46,404.05,407.64,411.24,414.83,418.42,422.02,425.61,429.20,432.80,436.39,439.98,443.57,447.17,450.76,454.35,457.95,461.54,465.13,468.73,472.32,475.91,479.50,483.10,486.69,490.28,493.88,497.47,501.06,504.66,508.25,511.84,515.43,519.03,522.62,526.21,529.81,533.40,536.99,540.59,544.18,547.77,551.36,554.96,558.55,562.14,565.74,569.33,572.92,576.52,580.11,583.70,587.29,590.89,594.48,598.07,601.67,605.26,608.85,612.45,616.04,619.63,623.22,626.82,630.41,634.00,637.60,641.19,644.78,648.38,651.97,655.56);
							graph2=value_baran_visoc;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_baran_visoc[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_baran_visoc[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"miel sub media ingrasarea":
	{
				var result1="";var result2=""; var resultall="";
				var value_baran_nisc=new Array(0.00,1.89,3.79,5.69,7.60,9.51,11.42,13.34,15.27,17.20,19.14,21.08,23.03,24.99,26.95,28.92,30.90,32.89,34.89,36.89,38.91,40.93,42.97,45.02,47.08,49.15,51.24,53.34,55.46,57.60,59.76,61.93,64.13,66.36,68.61,70.89,73.20,75.55,77.94,80.37,82.86,85.40,88.01,90.69,93.45,96.32,99.31,102.44,105.74,109.26,113.05,117.19,121.80,127.07,133.28,140.97,151.19,166.43,194.62,285.39,341.96,348.43,352.03,355.63,359.22,362.82,366.41,370.01,373.61,377.20,380.80,384.39,387.99,391.59,395.18,398.78,402.37,405.97,409.57,413.16,416.76,420.35,423.95,427.55,431.14,434.74,438.33,441.93,445.53,449.12,452.72,456.31,459.91,463.51,467.10,470.70,474.29,477.89,481.49,485.08,488.68,492.27,495.87,499.47,503.06,506.66,510.25,513.85,517.45,521.04,524.64,528.23,531.83,535.43,539.02,542.62,546.21,549.81,553.41,557.00,560.60,564.19,567.79,571.39,574.98,578.58,582.17,585.77,589.37,592.96,596.56,600.15,603.75,607.35,610.94,614.54,618.13,621.73,625.33,628.92,632.52,636.11,639.71,643.31,646.90,650.50,654.09,657.69,661.29,664.88,668.48,672.07,675.67,679.27,682.86,686.46,690.05,693.65,697.25,700.84,704.44);
							graph2=value_baran_nisc;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_baran_nisc[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_baran_nisc[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;	
case"miel adipozitate medie":
	{
				var result1="";var result2=""; var resultall="";
				var value_baran_sredn=new Array(0.00,1.92,3.85,5.78,7.71,9.65,11.59,13.54,15.49,17.45,19.41,21.38,23.36,25.34,27.33,29.32,31.32,33.33,35.35,37.37,39.40,41.45,43.50,45.57,47.64,49.73,51.83,53.94,56.07,58.22,60.38,62.56,64.76,66.99,69.24,71.51,73.82,76.15,78.53,80.94,83.40,85.91,88.48,91.11,93.83,96.63,99.54,102.59,105.78,109.17,112.81,116.76,121.13,126.09,131.89,139.02,148.42,162.31,187.77,269.19,319.80,326.31,329.93,333.55,337.16,340.78,344.40,348.02,351.64,355.25,358.87,362.49,366.11,369.73,373.34,376.96,380.58,384.20,387.82,391.43,395.05,398.67,402.29,405.91,409.52,413.14,416.76,420.38,424.00,427.61,431.23,434.85,438.47,442.09,445.70,449.32,452.94,456.56,460.18,463.79,467.41,471.03,474.65,478.27,481.88,485.50,489.12,492.74,496.36,499.97,503.59,507.21,510.83,514.45,518.06,521.68,525.30,528.92,532.54,536.15,539.77,543.39,547.01,550.63,554.24,557.86,561.48,565.10,568.72,572.33,575.95,579.57,583.19,586.81,590.42,594.04,597.66,601.28,604.90,608.51,612.13,615.75,619.37,622.99,626.60,630.22,633.84,637.46,641.08,644.69,648.31,651.93,655.55,659.17,662.78,666.40,670.02,673.64,677.26,680.87,684.49);
							graph2=value_baran_sredn;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_baran_sredn[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_baran_sredn[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"puls":{
				var result1="";var result2=""; var resultall="";
				var value_bobi=new Array(0.00,2.21,4.43,6.65,8.87,11.10,13.34,15.58,17.83,20.09,22.35,24.62,26.90,29.18,31.47,33.78,36.09,38.41,40.74,43.08,45.43,47.80,50.18,52.57,54.98,57.40,59.84,62.30,64.77,67.27,69.79,72.34,74.91,77.51,80.15,82.82,85.53,88.28,91.08,93.94,96.86,99.84,102.91,106.07,109.34,112.73,116.27,120.00,123.94,128.16,132.74,137.78,143.44,149.99,157.86,167.86,181.71,203.86,251.51,400.82,405.49,409.38,413.27,417.16,421.05,424.94,428.83,432.72,436.61,440.51,444.40,448.29,452.18,456.07,459.96,463.85,467.74,471.63,475.52,479.42,483.31,487.20,491.09,494.98,498.87,502.76,506.65,510.54,514.43,518.33,522.22,526.11,530.00,533.89,537.78,541.67,545.56,549.45,553.34,557.24,561.13,565.02,568.91,572.80,576.69,580.58,584.47,588.36,592.25,596.15,600.04,603.93,607.82,611.71,615.60,619.49,623.38,627.27,631.16,635.06,638.95,642.84,646.73,650.62,654.51,658.40,662.29,666.18,670.07,673.97,677.86,681.75,685.64,689.53,693.42,697.31,701.20,705.09,708.98,712.88,716.77,720.66,724.55,728.44,732.33,736.22,740.11,744.00,747.89,751.79,755.68,759.57,763.46,767.35,771.24,775.13,779.02,782.91,786.80,790.70,794.59);
							graph2=value_bobi;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_bobi[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_bobi[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"broccoli":{
				var result1="";var result2=""; var resultall="";
				var value_brokoli=new Array(0.00,2.21,4.42,6.64,8.86,11.09,13.33,15.57,17.81,20.06,22.32,24.59,26.86,29.14,31.43,33.73,36.04,38.35,40.68,43.01,45.36,47.72,50.09,52.48,54.88,57.29,59.72,62.17,64.64,67.12,69.63,72.16,74.72,77.31,79.93,82.58,85.26,87.99,90.77,93.59,96.47,99.42,102.44,105.55,108.76,112.07,115.53,119.15,122.96,127.02,131.38,136.13,141.41,147.40,154.43,163.05,174.33,190.72,219.43,297.26,403.19,409.42,413.31,417.20,421.09,424.98,428.87,432.76,436.65,440.55,444.44,448.33,452.22,456.11,460.00,463.89,467.78,471.67,475.56,479.46,483.35,487.24,491.13,495.02,498.91,502.80,506.69,510.58,514.47,518.37,522.26,526.15,530.04,533.93,537.82,541.71,545.60,549.49,553.38,557.28,561.17,565.06,568.95,572.84,576.73,580.62,584.51,588.40,592.29,596.19,600.08,603.97,607.86,611.75,615.64,619.53,623.42,627.31,631.20,635.10,638.99,642.88,646.77,650.66,654.55,658.44,662.33,666.22,670.11,674.01,677.90,681.79,685.68,689.57,693.46,697.35,701.24,705.13,709.02,712.92,716.81,720.70,724.59,728.48,732.37,736.26,740.15,744.04,747.93,751.83,755.72,759.61,763.50,767.39,771.28,775.17,779.06,782.95,786.84,790.74,794.63);
							graph2=value_brokoli;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_brokoli[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_brokoli[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"pâine fantezie":{
				var result1="";var result2=""; var resultall="";
				var value_bulka=new Array(0.00,1.86,3.72,5.59,7.46,9.34,11.22,13.12,15.02,16.93,18.84,20.77,22.70,24.65,26.60,28.57,30.55,32.54,34.55,36.57,38.60,40.66,42.73,44.82,46.93,49.07,51.23,53.42,55.64,57.90,60.19,62.52,64.90,67.33,69.81,72.36,74.97,77.67,80.45,83.34,86.35,89.49,92.80,96.29,100.01,103.99,108.30,113.02,118.23,124.08,130.76,138.55,147.86,159.34,174.07,194.02,223.08,225.66,228.25,230.83,233.42,236.00,238.59,241.17,243.76,246.34,248.93,251.51,254.10,256.68,259.27,261.85,264.44,267.02,269.61,272.19,274.78,277.36,279.95,282.53,285.12,287.70,290.29,292.87,295.46,298.04,300.63,303.21,305.80,308.38,310.97,313.55,316.14,318.72,321.31,323.89,326.48,329.06,331.65,334.23,336.82,339.40,341.99,344.57,347.16,349.74,352.33,354.91,357.50,360.08,362.67,365.25,367.84,370.42,373.01,375.59,378.18,380.76,383.35,385.93,388.52,391.10,393.69,396.27,398.86,401.44,404.03,406.61,409.20,411.78,414.37,416.95,419.54,422.12,424.71,427.29,429.88,432.46,435.05,437.63,440.22,442.80,445.39,447.97,450.56,453.14,455.73,458.31,460.90,463.48,466.07,468.65,471.24,473.82,476.41,478.99,481.58,484.16,486.75,489.33,
				491.92);
							graph2=value_bulka;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_bulka[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_bulka[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vin de desert":{
				var result1="";var result2=""; var resultall="";
				var value_vine_desert=new Array(0.00,2.73,5.49,8.28,11.09,13.93,16.80,19.70,22.64,25.61,28.62,31.67,34.76,37.90,41.09,44.33,47.62,50.97,54.39,57.87,61.43,65.07,68.79,72.60,76.51,80.53,84.67,88.93,93.33,97.89,102.62,107.53,112.65,118.00,123.60,129.49,135.70,142.28,149.26,156.72,164.73,173.36,182.72,192.95,204.21,216.69,230.67,246.48,264.59,285.62,307.76,311.74,315.35,318.96,322.58,326.19,329.80,333.42,337.03,340.64,344.26,347.87,351.48,355.09,358.71,362.32,365.93,369.55,373.16,376.77,380.39,384.00,387.61,391.22,394.84,398.45,402.06,405.68,409.29,412.90,416.52,420.13,423.74,427.35,430.97,434.58,438.19,441.81,445.42,449.03,452.65,456.26,459.87,463.48,467.10,470.71,474.32,477.94,481.55,485.16,488.78,492.39,496.00,499.61,503.23,506.84,510.45,514.07,517.68,521.29,524.91,528.52,532.13,535.74,539.36,542.97,546.58,550.20,553.81,557.42,561.04,564.65,568.26,571.87,575.49,579.10,582.71,586.33,589.94,593.55,597.17,600.78,604.39,608.00,611.62,615.23,618.84,622.46,626.07,629.68,633.30,636.91,640.52,644.13,647.75,651.36,654.97,658.59,662.20,665.81,669.43,673.04,676.65,680.26,683.88,687.49,691.10,694.72,698.33,701.94,705.56);
							graph2=value_vine_desert;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_vine_desert[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_vine_desert[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vin alcoolizat":{
				var result1="";var result2=""; var resultall="";
				var value_vine_creplonoe=new Array(0.00,2.88,5.79,8.73,11.70,14.70,17.74,20.82,23.94,27.09,30.30,33.54,36.84,40.19,43.60,47.07,50.60,54.20,57.87,61.63,65.47,69.40,73.42,77.56,81.81,86.18,90.69,95.35,100.18,105.18,110.38,115.79,121.45,127.37,133.59,140.14,147.06,154.41,162.24,170.62,179.62,189.37,199.96,211.56,224.35,238.57,254.52,272.62,293.38,304.98,310.50,314.18,317.86,321.53,325.21,328.89,332.57,336.25,339.92,343.60,347.28,350.96,354.64,358.31,361.99,365.67,369.35,373.03,376.70,380.38,384.06,387.74,391.42,395.09,398.77,402.45,406.13,409.81,413.48,417.16,420.84,424.52,428.20,431.87,435.55,439.23,442.91,446.59,450.26,453.94,457.62,461.30,464.98,468.65,472.33,476.01,479.69,483.37,487.04,490.72,494.40,498.08,501.76,505.43,509.11,512.79,516.47,520.15,523.82,527.50,531.18,534.86,538.54,542.21,545.89,549.57,553.25,556.93,560.60,564.28,567.96,571.64,575.32,578.99,582.67,586.35,590.03,593.71,597.38,601.06,604.74,608.42,612.10,615.77,619.45,623.13,626.81,630.49,634.16,637.84,641.52,645.20,648.88,652.55,656.23,659.91,663.59,667.27,670.94,674.62,678.30,681.98,685.66,689.33,693.01,696.69,700.37,704.05,707.72,711.40,715.08);
							graph2=value_vine_creplonoe;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_vine_creplonoe[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_vine_creplonoe[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vin sec":{
				var result1="";var result2=""; var resultall="";
				var value_vine_suhoe=new Array(0.00,2.56,5.14,7.74,10.36,12.99,15.65,18.32,21.02,23.75,26.50,29.28,32.08,34.92,37.79,40.69,43.63,46.62,49.64,52.71,55.83,59.01,62.24,65.53,68.89,72.32,75.83,79.43,83.13,86.92,90.84,94.87,99.05,103.38,107.89,112.59,117.50,122.67,128.11,133.87,140.00,146.56,153.61,161.24,169.57,178.73,188.91,200.32,213.29,228.24,245.76,266.71,292.37,324.77,367.26,377.43,384.55,388.51,392.46,396.42,400.37,404.33,408.29,412.24,416.20,420.15,424.11,428.07,432.02,435.98,439.93,443.89,447.85,451.80,455.76,459.71,463.67,467.63,471.58,475.54,479.49,483.45,487.41,491.36,495.32,499.27,503.23,507.19,511.14,515.10,519.05,523.01,526.97,530.92,534.88,538.83,542.79,546.75,550.70,554.66,558.61,562.57,566.53,570.48,574.44,578.39,582.35,586.31,590.26,594.22,598.17,602.13,606.09,610.04,614.00,617.95,621.91,625.87,629.82,633.78,637.73,641.69,645.65,649.60,653.56,657.51,661.47,665.43,669.38,673.34,677.29,681.25,685.21,689.16,693.12,697.07,701.03,704.99,708.94,712.90,716.85,720.81,724.77,728.72,732.68,736.63,740.59,744.55,748.50,752.46,756.41,760.37,764.33,768.28,772.24,776.19,780.15,784.11,788.06,792.02,795.97);
							graph2=value_vine_suhoe;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_vine_suhoe[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_vine_suhoe[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"struguri":{
				var result1="";var result2=""; var resultall="";
				var value_vinograd=new Array(0.00,2.18,4.37,6.56,8.75,10.95,13.16,15.37,17.59,19.81,22.04,24.28,26.52,28.78,31.04,33.30,35.58,37.87,40.16,42.47,44.79,47.12,49.46,51.81,54.18,56.57,58.97,61.38,63.82,66.28,68.76,71.26,73.79,76.35,78.93,81.56,84.22,86.92,89.67,92.47,95.33,98.26,101.27,104.36,107.56,110.88,114.35,118.00,121.85,125.98,130.46,135.39,140.94,147.36,155.10,164.99,178.80,201.31,251.99,386.48,391.39,395.17,398.96,402.74,406.52,410.30,414.08,417.87,421.65,425.43,429.21,432.99,436.78,440.56,444.34,448.12,451.90,455.69,459.47,463.25,467.03,470.81,474.60,478.38,482.16,485.94,489.72,493.51,497.29,501.07,504.85,508.63,512.42,516.20,519.98,523.76,527.54,531.33,535.11,538.89,542.67,546.45,550.24,554.02,557.80,561.58,565.36,569.15,572.93,576.71,580.49,584.27,588.06,591.84,595.62,599.40,603.18,606.97,610.75,614.53,618.31,622.09,625.88,629.66,633.44,637.22,641.00,644.79,648.57,652.35,656.13,659.91,663.70,667.48,671.26,675.04,678.82,682.61,686.39,690.17,693.95,697.73,701.52,705.30,709.08,712.86,716.64,720.43,724.21,727.99,731.77,735.55,739.34,743.12,746.90,750.68,754.46,758.25,762.03,765.81,769.59);
							graph2=value_vinograd;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_vinograd[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_vinograd[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vișina":{
				var result1="";var result2=""; var resultall="";
				var value_visnea=new Array(0.00,2.19,4.38,6.58,8.79,11.00,13.21,15.44,17.66,19.90,22.14,24.39,26.65,28.92,31.19,33.48,35.77,38.08,40.39,42.72,45.06,47.41,49.78,52.16,54.56,56.98,59.41,61.87,64.35,66.85,69.38,71.93,74.52,77.14,79.80,82.50,85.25,88.06,90.92,93.85,96.86,99.96,103.17,106.50,109.98,113.64,117.52,121.69,126.21,131.21,136.85,143.44,151.44,161.81,176.62,201.86,265.53,378.00,383.67,387.46,391.24,395.02,398.80,402.58,406.37,410.15,413.93,417.71,421.49,425.28,429.06,432.84,436.62,440.40,444.19,447.97,451.75,455.53,459.31,463.10,466.88,470.66,474.44,478.22,482.01,485.79,489.57,493.35,497.13,500.92,504.70,508.48,512.26,516.04,519.83,523.61,527.39,531.17,534.95,538.74,542.52,546.30,550.08,553.86,557.65,561.43,565.21,568.99,572.77,576.56,580.34,584.12,587.90,591.68,595.47,599.25,603.03,606.81,610.59,614.38,618.16,621.94,625.72,629.50,633.29,637.07,640.85,644.63,648.41,652.20,655.98,659.76,663.54,667.32,671.11,674.89,678.67,682.45,686.23,690.02,693.80,697.58,701.36,705.14,708.93,712.71,716.49,720.27,724.05,727.84,731.62,735.40,739.18,742.96,746.75,750.53,754.31,758.09,761.87,765.66,769.44);
							graph2=value_visnea;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_visnea[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_visnea[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"apă":{
				var result1="";var result2=""; var resultall="";
				var value_voda=new Array(0.00,2.05,4.10,6.15,8.20,10.25,12.30,14.35,16.40,18.45,20.50,22.55,24.60,26.65,28.70,30.75,32.80,34.85,36.90,38.95,41.00,43.05,45.10,47.15,49.20,51.25,53.30,55.35,57.40,59.45,61.50,63.55,65.60,67.65,69.70,71.75,73.80,75.85,77.90,79.95,82.00,84.05,86.10,88.15,90.20,92.25,94.30,96.35,98.40,100.45,102.50,104.55,106.60,108.65,110.70,112.75,114.80,116.85,118.90,120.95,122.80,456.35,460.54,464.73,468.92,473.11,477.30,481.49,485.68,489.87,494.06,498.25,502.44,506.63,510.82,515.01,519.20,523.39,527.58,531.77,535.96,540.15,544.34,548.53,552.72,556.91,561.10,565.29,569.48,573.67,577.86,582.05,586.24,590.43,594.62,598.81,603.00,607.19,611.38,615.57,619.76,623.95,628.14,632.33,636.52,640.71,644.90,649.09,653.28,657.47,661.66,665.85,670.04,674.23,678.42,682.61,686.80,690.99,695.18,699.37,703.56,707.75,711.94,716.13,720.32,724.51,728.70,732.89,737.08,741.27,745.46,749.65,753.84,758.03,762.22,766.41,770.60,774.79,778.98,783.17,787.36,791.55,795.74,799.93,804.12,808.31,812.50,816.69,820.88,825.07,829.26,833.45,837.64,841.83,846.02,850.21,854.40,858.59,862.78,866.97,875.35);
							graph2=value_voda;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_voda[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_voda[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"carne de vită categoria I":{
				var result1="";var result2=""; var resultall="";
				var value_goviadina_1kategorii=new Array(0.00,1.90,3.81,5.72,7.63,9.55,11.47,13.40,15.34,17.27,19.22,21.17,23.13,25.09,27.06,29.04,31.03,33.02,35.03,37.04,39.06,41.09,43.13,45.19,47.25,49.33,51.42,53.53,55.66,57.80,59.96,62.14,64.34,66.57,68.82,71.10,73.41,75.76,78.15,80.58,83.06,85.60,88.19,90.87,93.62,96.48,99.45,102.56,105.84,109.33,113.08,117.18,121.74,126.93,133.04,140.59,150.61,165.53,193.04,281.48,336.57,343.09,346.71,350.34,353.96,357.58,361.20,364.83,368.45,372.07,375.70,379.32,382.94,386.57,390.19,393.81,397.43,401.06,404.68,408.30,411.93,415.55,419.17,422.80,426.42,430.04,433.66,437.29,440.91,444.53,448.16,451.78,455.40,459.03,462.65,466.27,469.89,473.52,477.14,480.76,484.39,488.01,491.63,495.26,498.88,502.50,506.12,509.75,513.37,516.99,520.62,524.24,527.86,531.49,535.11,538.73,542.35,545.98,549.60,553.22,556.85,560.47,564.09,567.72,571.34,574.96,578.58,582.21,585.83,589.45,593.08,596.70,600.32,603.95,607.57,611.19,614.81,618.44,622.06,625.68,629.31,632.93,636.55,640.18,643.80,647.42,651.04,654.67,658.29,661.91,665.54,669.16,672.78,676.41,680.03,683.65,687.27,690.90,694.52,698.14,701.77);
							graph2=value_goviadina_1kategorii;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_goviadina_1kategorii[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_goviadina_1kategorii[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"carne de vită categoria II":{
				var result1="";var result2=""; var resultall="";
				var value_goviadina_2kategorii=new Array(0.00,1.93,3.87,5.80,7.75,9.70,11.65,13.61,15.57,17.54,19.52,21.50,23.49,25.48,27.48,29.49,31.51,33.54,35.57,37.61,39.67,41.73,43.81,45.89,47.99,50.11,52.23,54.38,56.53,58.71,60.91,63.12,65.36,67.63,69.92,72.24,74.59,76.98,79.41,81.89,84.42,87.00,89.65,92.37,95.18,98.10,101.13,104.31,107.66,111.24,115.08,119.28,123.96,129.30,135.59,143.39,153.74,169.18,197.73,289.69,347.00,353.45,357.03,360.61,364.19,367.77,371.35,374.93,378.52,382.10,385.68,389.26,392.84,396.42,400.00,403.58,407.16,410.74,414.33,417.91,421.49,425.07,428.65,432.23,435.81,439.39,442.97,446.55,450.14,453.72,457.30,460.88,464.46,468.04,471.62,475.20,478.78,482.36,485.95,489.53,493.11,496.69,500.27,503.85,507.43,511.01,514.59,518.17,521.76,525.34,528.92,532.50,536.08,539.66,543.24,546.82,550.40,553.98,557.57,561.15,564.73,568.31,571.89,575.47,579.05,582.63,586.21,589.79,593.38,596.96,600.54,604.12,607.70,611.28,614.86,618.44,622.02,625.60,629.19,632.77,636.35,639.93,643.51,647.09,650.67,654.25,657.83,661.41,665.00,668.58,672.16,675.74,679.32,682.90,686.48,690.06,693.64,697.22,700.81,704.39,707.97);
							graph2=value_goviadina_2kategorii;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_goviadina_2kategorii[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_goviadina_2kategorii[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"vită fiartă":{
				var result1="";var result2=""; var resultall="";
				var value_goviadina_varionaia=new Array(0.00,1.89,3.79,5.69,7.59,9.49,11.39,13.30,15.21,17.12,19.03,20.94,22.86,24.78,26.70,28.63,30.56,32.49,34.43,36.37,38.32,40.27,42.22,44.18,46.15,48.13,50.11,52.10,54.09,56.10,58.12,60.15,62.19,64.24,66.32,68.40,70.51,72.64,74.80,76.98,79.20,81.46,83.76,86.11,88.53,91.02,93.60,96.30,99.13,102.14,105.39,108.94,112.92,117.50,122.98,129.92,139.40,153.96,181.19,259.14,297.54,303.29,306.48,309.68,312.87,316.06,319.26,322.45,325.65,328.84,332.03,335.23,338.42,341.62,344.81,348.00,351.20,354.39,357.59,360.78,363.97,367.17,370.36,373.56,376.75,379.94,383.14,386.33,389.53,392.72,395.91,399.11,402.30,405.50,408.69,411.88,415.08,418.27,421.47,424.66,427.85,431.05,434.24,437.44,440.63,443.82,447.02,450.21,453.41,456.60,459.79,462.99,466.18,469.38,472.57,475.76,478.96,482.15,485.35,488.54,491.73,494.93,498.12,501.32,504.51,507.70,510.90,514.09,517.29,520.48,523.67,526.87,530.06,533.26,536.45,539.64,542.84,546.03,549.23,552.42,555.61,558.81,562.00,565.20,568.39,571.58,574.78,577.97,581.17,584.36,587.55,590.75,593.94,597.14,600.33,603.52,606.72,609.91,613.11,616.30,619.49);
							graph2=value_goviadina_varionaia;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_goviadina_varionaia[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_goviadina_varionaia[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"carne de vită os":{
				var result1="";var result2=""; var resultall="";
				var value_goviadina_kosti=new Array(0.00,1.42,2.84,4.26,5.69,7.12,8.55,9.98,11.41,12.85,14.29,15.74,17.19,18.64,20.09,21.55,23.01,24.48,25.96,27.43,28.92,30.41,31.90,33.40,34.91,36.43,37.96,39.49,41.04,42.60,44.16,45.75,47.34,48.96,50.59,52.24,53.91,55.61,57.34,59.10,60.90,62.73,64.62,66.57,68.59,70.68,72.88,75.19,77.66,80.31,83.22,86.44,90.11,94.41,99.66,106.39,115.74,122.31,125.11,127.01,129.01,130.91,132.91,134.91,136.91,138.91,141.01,143.11,145.31,147.51,149.71,151.91,154.21,156.51,158.81,161.11,163.51,165.81,168.11,170.31,172.61,174.81,177.01,179.11,181.31,183.41,185.61,187.71,189.81,191.91,194.01,196.11,198.21,200.31,202.41,204.51,206.71,208.91,211.11,213.41,215.71,217.85,220.00,222.14,224.28,226.43,228.57,230.71,232.86,235.00,237.14,239.29,241.43,243.57,245.72,247.86,250.00,252.15,254.29,256.43,258.58,260.72,262.86,265.01,267.15,269.29,271.44,273.58,275.72,277.87,280.01,282.15,284.30,286.44,288.58,290.73,292.87,295.01,297.16,299.30,301.44,303.59,305.73,307.87,310.02,312.16,314.30,316.45,318.59,320.73,322.88,325.02,327.16,329.31,331.45,333.59,335.74,337.88,340.02,342.17,344.31);
							graph2=value_goviadina_kosti;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_goviadina_kosti[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_goviadina_kosti[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mazăre":{
				var result1="";var result2=""; var resultall="";
				var value_gorosek=new Array(0.00,2.10,4.20,6.30,8.41,10.52,12.64,14.76,16.89,19.02,21.16,23.30,25.46,27.61,29.78,31.95,34.13,36.32,38.51,40.72,42.94,45.16,47.40,49.64,51.91,54.18,56.47,58.77,61.09,63.42,65.78,68.16,70.56,72.98,75.43,77.91,80.42,82.97,85.56,88.20,90.88,93.63,96.44,99.33,102.30,105.39,108.59,111.95,115.48,119.25,123.31,127.74,132.69,138.35,145.09,153.53,165.00,182.89,219.50,351.82,355.68,359.19,362.70,366.21,369.73,373.24,376.75,380.26,383.77,387.28,390.79,394.30,397.81,401.32,404.84,408.35,411.86,415.37,418.88,422.39,425.90,429.41,432.92,436.43,439.95,443.46,446.97,450.48,453.99,457.50,461.01,464.52,468.03,471.54,475.06,478.57,482.08,485.59,489.10,492.61,496.12,499.63,503.14,506.65,510.17,513.68,517.19,520.70,524.21,527.72,531.23,534.74,538.25,541.76,545.28,548.79,552.30,555.81,559.32,562.83,566.34,569.85,573.36,576.87,580.39,583.90,587.41,590.92,594.43,597.94,601.45,604.96,608.47,611.98,615.50,619.01,622.52,626.03,629.54,633.05,636.56,640.07,643.58,647.09,650.61,654.12,657.63,661.14,664.65,668.16,671.67,675.18,678.69,682.20,685.72,689.23,692.74,696.25,699.76,703.27,706.78);
							graph2=value_gorosek;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_gorosek[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_gorosek[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"grapefruitul":{
				var result1="";var result2=""; var resultall="";
				var value_greifrut=new Array(0.00,2.21,4.43,6.66,8.89,11.12,13.37,15.61,17.87,20.13,22.39,24.67,26.95,29.23,31.53,33.84,36.15,38.48,40.81,43.16,45.51,47.88,50.26,52.66,55.07,57.50,59.94,62.40,64.88,67.38,69.90,72.45,75.03,77.63,80.27,82.94,85.65,88.40,91.20,94.06,96.97,99.96,103.02,106.18,109.44,112.82,116.35,120.06,123.99,128.19,132.73,137.72,143.31,149.76,157.48,167.22,180.57,201.52,244.69,401.47,405.75,409.64,413.53,417.42,421.31,425.20,429.09,432.98,436.87,440.76,444.65,448.54,452.43,456.32,460.21,464.10,467.99,471.88,475.77,479.66,483.55,487.44,491.33,495.22,499.11,503.00,506.89,510.78,514.67,518.56,522.45,526.34,530.23,534.12,538.01,541.90,545.79,549.68,553.57,557.46,561.35,565.24,569.13,573.02,576.91,580.80,584.69,588.58,592.47,596.36,600.25,604.14,608.03,611.92,615.81,619.70,623.59,627.48,631.37,635.26,639.15,643.04,646.93,650.82,654.71,658.60,662.49,666.38,670.27,674.16,678.05,681.94,685.83,689.72,693.61,697.50,701.39,705.28,709.17,713.06,716.95,720.84,724.73,728.62,732.51,736.40,740.29,744.18,748.07,751.96,755.85,759.74,763.63,767.52,771.41,775.30,779.19,783.08,786.97,790.86,794.75);
							graph2=value_greifrut;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_greifrut[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_greifrut[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"ciuperci":{
				var result1="";var result2=""; var resultall="";
				var value_gribi=new Array(0.00,2.22,4.45,6.68,8.92,11.16,13.41,15.66,17.92,20.19,22.47,24.75,27.04,29.33,31.64,33.95,36.27,38.61,40.95,43.30,45.67,48.04,50.43,52.84,55.26,57.69,60.14,62.61,65.10,67.61,70.14,72.70,75.28,77.90,80.54,83.22,85.94,88.70,91.52,94.38,97.31,100.30,103.37,106.54,109.81,113.20,116.74,120.45,124.38,128.58,133.12,138.10,143.67,150.08,157.72,167.30,180.30,200.37,240.17,405.36,409.28,413.20,417.12,421.03,424.95,428.87,432.79,436.71,440.62,444.54,448.46,452.38,456.30,460.21,464.13,468.05,471.97,475.89,479.80,483.72,487.64,491.56,495.48,499.39,503.31,507.23,511.15,515.07,518.98,522.90,526.82,530.74,534.66,538.57,542.49,546.41,550.33,554.25,558.16,562.08,566.00,569.92,573.84,577.75,581.67,585.59,589.51,593.43,597.34,601.26,605.18,609.10,613.02,616.93,620.85,624.77,628.69,632.61,636.52,640.44,644.36,648.28,652.20,656.11,660.03,663.95,667.87,671.79,675.70,679.62,683.54,687.46,691.38,695.29,699.21,703.13,707.05,710.97,714.88,718.80,722.72,726.64,730.56,734.47,738.39,742.31,746.23,750.15,754.06,757.98,761.90,765.82,769.74,773.65,777.57,781.49,785.41,789.33,793.24,797.16,801.08);
							graph2=value_gribi;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_gribi[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_gribi[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"pere":{
				var result1="";var result2=""; var resultall="";
				var value_grusi=new Array(0.00,2.20,4.41,6.62,8.83,11.05,13.28,15.51,17.75,20.00,22.25,24.51,26.78,29.05,31.34,33.63,35.93,38.24,40.57,42.90,45.25,47.60,49.97,52.36,54.76,57.17,59.61,62.06,64.53,67.02,69.54,72.08,74.65,77.25,79.88,82.55,85.27,88.02,90.83,93.69,96.62,99.63,102.71,105.90,109.20,112.63,116.23,120.02,124.06,128.41,133.15,138.42,144.42,151.47,160.17,171.63,188.51,218.86,307.95,395.15,401.73,405.60,409.47,413.34,417.21,421.08,424.95,428.82,432.69,436.56,440.43,444.30,448.17,452.04,455.91,459.78,463.65,467.52,471.39,475.26,479.13,483.00,486.87,490.74,494.61,498.48,502.35,506.22,510.09,513.96,517.83,521.70,525.57,529.44,533.31,537.18,541.05,544.92,548.79,552.66,556.53,560.40,564.27,568.14,572.01,575.88,579.75,583.62,587.49,591.36,595.23,599.10,602.97,606.84,610.71,614.58,618.45,622.32,626.19,630.06,633.93,637.80,641.67,645.54,649.41,653.28,657.15,661.02,664.89,668.76,672.63,676.50,680.37,684.24,688.11,691.98,695.85,699.72,703.59,707.46,711.33,715.20,719.07,722.94,726.81,730.68,734.55,738.42,742.29,746.16,750.03,753.90,757.77,761.64,765.51,769.38,773.25,777.12,780.99,784.86,788.73);
							graph2=value_grusi;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_grusi[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_grusi[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"pepeni galbeni":{
				var result1="";var result2=""; var resultall="";
				var value_dini=new Array(0.00,2.21,4.42,6.64,8.87,11.10,13.33,15.58,17.82,20.08,22.34,24.61,26.88,29.17,31.46,33.76,36.07,38.39,40.72,43.06,45.41,47.77,50.15,52.54,54.94,57.36,59.80,62.25,64.72,67.22,69.74,72.28,74.85,77.44,80.07,82.73,85.44,88.18,90.97,93.82,96.72,99.70,102.75,105.89,109.14,112.50,116.02,119.70,123.60,127.77,132.26,137.20,142.73,149.08,156.64,166.13,179.00,198.86,238.23,401.60,405.49,409.38,413.27,417.16,421.05,424.94,428.83,432.72,436.61,440.50,444.39,448.28,452.17,456.06,459.95,463.84,467.73,471.62,475.51,479.40,483.29,487.18,491.07,494.96,498.85,502.74,506.63,510.52,514.41,518.30,522.19,526.08,529.97,533.86,537.75,541.64,545.53,549.42,553.31,557.20,561.09,564.98,568.87,572.76,576.65,580.54,584.43,588.32,592.21,596.10,599.99,603.88,607.77,611.66,615.55,619.44,623.33,627.22,631.11,635.00,638.89,642.78,646.67,650.56,654.45,658.34,662.23,666.12,670.01,673.90,677.79,681.68,685.57,689.46,693.35,697.24,701.13,705.02,708.91,712.80,716.69,720.58,724.47,728.36,732.25,736.14,740.03,743.92,747.81,751.70,755.59,759.48,763.37,767.26,771.15,775.04,778.93,782.82,786.71,790.60,794.49);
							graph2=value_dini;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_dini[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_dini[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"întregul înlocuitor de lapte":{
				var result1="";var result2=""; var resultall="";
				var value_zamena_moloka=new Array(0.00,2.00,4.00,6.00,8.00,10.00,12.00,14.00,15.90,17.90,19.90,21.90,23.90,25.90,27.90,29.90,31.80,33.80,35.80,37.80,39.80,41.80,43.50,45.20,46.90,48.60,50.40,52.10,53.90,55.70,57.50,59.40,61.30,63.20,65.10,67.10,69.10,71.10,73.20,75.30,77.50,79.70,82.00,84.30,86.80,89.30,91.90,94.60,97.10,98.80,100.60,102.40,104.20,106.10,107.90,109.80,111.60,113.60,115.50,117.50,119.60,121.70,123.80,125.80,127.80,129.70,131.70,133.60,135.50,137.50,139.60,141.60,143.70,145.80,147.90,150.10,152.40,154.90,157.30,159.90,162.20,164.40,166.50,168.50,170.50,172.60,174.60,176.60,178.60,180.70,182.80,184.90,187.10,189.20,191.30,193.40,195.40,197.30,199.20,201.10,203.00,204.80,206.70,208.60,210.40,212.30,214.10,216.00,217.80,219.70,221.60,223.40,225.30,227.10,229.00,230.90,232.70,234.60,236.50,238.40,240.20,242.60,244.00,245.90,247.80,249.70,251.60,253.50,255.40,257.30,259.20,261.10,263.00,265.00,266.90,268.80,270.80,272.70,274.60,276.60,278.50,280.50,282.40,284.40,286.30,288.30,290.30,292.20,294.20,296.20,298.20,300.20,302.20,304.20,306.20,308.20,310.20,312.20,314.20,316.20,318.20);
							graph2=value_zamena_moloka;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_zamena_moloka[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_zamena_moloka[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"curcan":{
				var result1="";var result2=""; var resultall="";
				var value_indeika=new Array(0.00,2.09,4.19,6.29,8.40,10.51,12.63,14.75,16.88,19.01,21.15,23.29,25.44,27.60,29.77,31.94,34.12,36.31,38.51,40.72,42.94,45.16,47.40,49.66,51.92,54.20,56.50,58.81,61.14,63.48,65.85,68.24,70.65,73.09,75.56,78.07,80.60,83.18,85.80,88.48,91.21,94.00,96.87,99.83,102.89,106.07,109.40,112.90,116.63,120.64,125.01,129.88,135.43,142.01,150.20,161.21,178.09,211.29,348.34,351.85,355.36,358.87,362.38,365.89,369.40,372.91,376.42,379.93,383.44,386.95,390.46,393.97,397.48,400.99,404.50,408.01,411.52,415.03,418.54,422.05,425.56,429.07,432.58,436.09,439.60,443.11,446.62,450.13,453.64,457.15,460.66,464.17,467.68,471.19,474.70,478.21,481.72,485.23,488.74,492.25,495.76,499.27,502.78,506.29,509.80,513.31,516.82,520.33,523.84,527.35,530.86,534.37,537.88,541.39,544.90,548.41,551.92,555.43,558.94,562.45,565.96,569.47,572.98,576.49,580.00,583.51,587.02,590.53,594.04,597.55,601.06,604.57,608.08,611.59,615.10,618.61,622.12,625.63,629.14,632.65,636.16,639.67,643.18,646.69,650.20,653.71,657.22,660.73,664.24,667.75,671.26,674.77,678.28,681.79,685.30,688.81,692.32,695.83,699.34,702.85,706.36);
							graph2=value_indeika;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_indeika[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_indeika[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cacao cu lapte condensat și zahăr":{
				var result1="";var result2=""; var resultall="";
				var value_kakao_sgusionka_i_sahar=new Array(0.00,2.08,4.16,6.25,8.34,10.44,12.54,14.64,16.76,18.88,21.00,23.14,25.28,27.43,29.60,31.77,33.97,36.18,38.40,40.66,42.94,45.25,47.60,50.00,52.47,55.02,57.68,60.50,63.54,66.94,70.97,76.26,84.94,112.21,120.00,124.00,126.10,128.20,130.40,132.50,134.60,136.70,138.80,140.90,143.10,145.20,147.30,149.20,151.60,153.70,155.80,158.00,160.10,162.30,164.40,166.60,168.80,171.00,173.20,175.40,177.60,179.90,182.10,184.40,186.60,188.80,191.00,193.20,195.20,197.60,199.90,202.10,204.40,206.60,208.90,211.20,213.50,216.00,218.40,220.80,223.20,225.50,227.80,230.00,232.30,234.50,236.80,239.00,241.30,243.60,245.90,248.20,250.50,252.80,255.10,257.40,259.60,261.90,264.10,266.30,268.30,270.80,273.00,275.20,277.40,279.70,281.90,284.10,286.40,288.60,290.80,293.10,295.30,297.60,299.80,302.10,304.30,306.60,308.90,311.10,313.40,315.70,318.00,320.30,322.60,324.90,327.10,329.50,331.80,334.10,336.40,338.70,341.00,343.40,345.70,348.00,350.40,352.70,355.10,357.40,359.80,362.20,364.50,366.90,369.30,371.70,374.10,376.50,378.90,381.30,383.70,386.10,388.50,391.00,393.40,395.80,398.30,400.70,403.20,405.60,408.10);
							graph2=value_kakao_sgusionka_i_sahar;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kakao_sgusionka_i_sahar[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kakao_sgusionka_i_sahar[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"varză albă":{
				var result1="";var result2=""; var resultall="";
				var value_kapusta_belo_kacian=new Array(0.00,2.22,4.44,6.66,8.89,11.13,13.37,15.62,17.87,20.13,22.40,24.67,26.95,29.24,31.54,33.84,36.16,38.48,40.81,43.16,45.51,47.88,50.26,52.65,55.06,57.48,59.92,62.38,64.86,67.35,69.87,72.41,74.98,77.57,80.20,82.86,85.56,88.30,91.08,93.91,96.81,99.76,102.80,105.91,109.12,112.45,115.91,119.54,123.36,127.42,131.77,136.52,141.78,147.74,154.71,163.22,174.27,190.13,217.22,285.79,407.10,412.98,416.90,420.82,424.74,428.65,432.57,436.49,440.41,444.33,448.25,452.17,456.09,460.01,463.93,467.84,471.76,475.68,479.60,483.52,487.44,491.36,495.28,499.20,503.12,507.03,510.95,514.87,518.79,522.71,526.63,530.55,534.47,538.39,542.31,546.22,550.14,554.06,557.98,561.90,565.82,569.74,573.66,577.58,581.50,585.41,589.33,593.25,597.17,601.09,605.01,608.93,612.85,616.77,620.69,624.60,628.52,632.44,636.36,640.28,644.20,648.12,652.04,655.96,659.88,663.79,667.71,671.63,675.55,679.47,683.39,687.31,691.23,695.15,699.07,702.98,706.90,710.82,714.74,718.66,722.58,726.50,730.42,734.34,738.26,742.17,746.09,750.01,753.93,757.85,761.77,765.69,769.61,773.53,777.45,781.36,785.28,789.20,793.12,797.04,800.96);
							graph2=value_kapusta_belo_kacian;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kapusta_belo_kacian[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kapusta_belo_kacian[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"varză de brusell":{
				var result1="";var result2=""; var resultall="";
				var value_kapusta_briusel=new Array(0.00,2.19,4.39,6.60,8.80,11.02,13.24,15.46,17.69,19.93,22.18,24.43,26.68,28.95,31.22,33.50,35.79,38.09,40.40,42.72,45.05,47.40,49.75,52.12,54.50,56.90,59.31,61.74,64.19,66.66,69.15,71.67,74.21,76.78,79.37,82.00,84.67,87.38,90.14,92.94,95.81,98.74,101.74,104.83,108.01,111.32,114.75,118.36,122.16,126.21,130.57,135.34,140.65,146.71,153.87,162.73,174.52,192.12,224.70,329.83,395.39,402.29,406.13,409.96,413.80,417.63,421.47,425.30,429.14,432.97,436.81,440.64,444.48,448.31,452.15,455.98,459.82,463.65,467.49,471.32,475.16,478.99,482.83,486.66,490.50,494.33,498.17,502.00,505.84,509.67,513.51,517.34,521.18,525.01,528.85,532.68,536.52,540.35,544.19,548.02,551.86,555.69,559.53,563.36,567.20,571.03,574.87,578.70,582.54,586.37,590.21,594.04,597.88,601.71,605.55,609.38,613.22,617.05,620.89,624.72,628.56,632.39,636.23,640.06,643.90,647.73,651.57,655.40,659.24,663.07,666.91,670.74,674.58,678.41,682.25,686.08,689.92,693.75,697.59,701.42,705.26,709.09,712.93,716.76,720.60,724.43,728.27,732.10,735.94,739.77,743.61,747.44,751.28,755.11,758.95,762.78,766.62,770.45,774.29,778.12,781.96);
							graph2=value_kapusta_briusel;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kapusta_briusel[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kapusta_briusel[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"varză acră":{
				var result1="";var result2=""; var resultall="";
				var value_kapusta_kvasenaia=new Array(0.00,2.18,4.36,6.55,8.75,10.95,13.16,15.37,17.60,19.82,22.06,24.30,26.55,28.81,31.08,33.36,35.65,37.95,40.26,42.58,44.92,47.27,49.63,52.01,54.41,56.82,59.25,61.71,64.19,66.69,69.21,71.77,74.36,76.98,79.65,82.35,85.11,87.92,90.78,93.72,96.74,99.85,103.07,106.41,109.90,113.57,117.46,121.63,126.15,131.14,136.76,143.28,151.14,161.20,175.28,198.24,250.02,387.49,392.54,396.43,400.32,404.21,408.10,411.99,415.88,419.77,423.66,427.54,431.43,435.32,439.21,443.10,446.99,450.88,454.77,458.66,462.55,466.43,470.32,474.21,478.10,481.99,485.88,489.77,493.66,497.55,501.44,505.32,509.21,513.10,516.99,520.88,524.77,528.66,532.55,536.44,540.33,544.21,548.10,551.99,555.88,559.77,563.66,567.55,571.44,575.33,579.22,583.10,586.99,590.88,594.77,598.66,602.55,606.44,610.33,614.22,618.11,621.99,625.88,629.77,633.66,637.55,641.44,645.33,649.22,653.11,657.00,660.88,664.77,668.66,672.55,676.44,680.33,684.22,688.11,692.00,695.89,699.77,703.66,707.55,711.44,715.33,719.22,723.11,727.00,730.89,734.78,738.66,742.55,746.44,750.33,754.22,758.11,762.00,765.89,769.78,773.67,777.55,781.44,785.33,789.22);
							graph2=value_kapusta_kvasenaia;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kapusta_kvasenaia[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kapusta_kvasenaia[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"varză creață":{
				var result1="";var result2=""; var resultall="";
				var value_kapusta_savoiskaia=new Array(0.00,2.22,4.45,6.68,8.92,11.17,13.42,15.67,17.93,20.20,22.47,24.76,27.05,29.34,31.65,33.96,36.28,38.62,40.96,43.31,45.68,48.05,50.44,52.85,55.26,57.70,60.15,62.61,65.10,67.61,70.13,72.69,75.27,77.87,80.51,83.18,85.89,88.65,91.44,94.29,97.20,100.17,103.22,106.36,109.59,112.94,116.42,120.07,123.91,128.00,132.39,137.17,142.47,148.48,155.51,164.09,175.25,191.27,218.65,287.97,410.61,416.53,420.48,424.43,428.37,432.32,436.27,440.22,444.16,448.11,452.06,456.00,459.95,463.90,467.84,471.79,475.74,479.69,483.63,487.58,491.53,495.47,499.42,503.37,507.31,511.26,515.21,519.16,523.10,527.05,531.00,534.94,538.89,542.84,546.78,550.73,554.68,558.63,562.57,566.52,570.47,574.41,578.36,582.31,586.25,590.20,594.15,598.10,602.04,605.99,609.94,613.88,617.83,621.78,625.72,629.67,633.62,637.57,641.51,645.46,649.41,653.35,657.30,661.25,665.19,669.14,673.09,677.04,680.98,684.93,688.88,692.82,696.77,700.72,704.66,708.61,712.56,716.51,720.45,724.40,728.35,732.29,736.24,740.19,744.13,748.08,752.03,755.98,759.92,763.87,767.82,771.76,775.71,779.66,783.60,787.55,791.50,795.45,799.39,803.34,807.29);
							graph2=value_kapusta_savoiskaia;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kapusta_savoiskaia[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kapusta_savoiskaia[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"conopidă":{
				var result1="";var result2=""; var resultall="";
				var value_kapusta_cvetnaia=new Array(0.00,2.22,4.45,6.68,8.92,11.16,13.41,15.66,17.92,20.19,22.47,24.75,27.04,29.33,31.64,33.95,36.27,38.61,40.95,43.30,45.67,48.04,50.43,52.84,55.26,57.69,60.14,62.61,65.10,67.61,70.14,72.70,75.28,77.90,80.54,83.22,85.94,88.70,91.52,94.38,97.31,100.30,103.37,106.54,109.81,113.20,116.74,120.45,124.38,128.58,133.12,138.10,143.67,150.08,157.72,167.30,180.30,200.37,240.17,405.36,409.28,413.20,417.12,421.03,424.95,428.87,432.79,436.71,440.62,444.54,448.46,452.38,456.30,460.21,464.13,468.05,471.97,475.89,479.80,483.72,487.64,491.56,495.48,499.39,503.31,507.23,511.15,515.07,518.98,522.90,526.82,530.74,534.66,538.57,542.49,546.41,550.33,554.25,558.16,562.08,566.00,569.92,573.84,577.75,581.67,585.59,589.51,593.43,597.34,601.26,605.18,609.10,613.02,616.93,620.85,624.77,628.69,632.61,636.52,640.44,644.36,648.28,652.20,656.11,660.03,663.95,667.87,671.79,675.70,679.62,683.54,687.46,691.38,695.29,699.21,703.13,707.05,710.97,714.88,718.80,722.72,726.64,730.56,734.47,738.39,742.31,746.23,750.15,754.06,757.98,761.90,765.82,769.74,773.65,777.57,781.49,785.41,789.33,793.24,797.16,801.08);
							graph2=value_kapusta_cvetnaia;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value_kapusta_cvetnaia[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value_kapusta_cvetnaia[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cartofi":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.12,4.25,6.37,8.51,10.65,12.79,14.94,17.09,19.25,21.42,23.59,25.76,27.95,30.14,32.34,34.54,36.76,38.98,41.21,43.46,45.71,47.97,50.25,52.53,54.83,57.15,59.48,61.82,64.19,66.57,68.97,71.40,73.85,76.32,78.83,81.37,83.94,86.55,89.21,91.92,94.68,97.51,100.41,103.39,106.48,109.68,113.02,116.53,120.24,124.22,128.54,133.30,138.66,144.90,152.47,162.25,176.19,199.87,259.50,364.73,370.11,373.70,377.29,380.88,384.47,388.06,391.65,395.24,398.83,402.42,406.01,409.60,413.19,416.78,420.37,423.96,427.55,431.14,434.73,438.32,441.91,445.50,449.09,452.68,456.27,459.86,463.45,467.04,470.63,474.22,477.81,481.40,484.99,488.58,492.17,495.76,499.35,502.94,506.53,510.12,513.71,517.30,520.89,524.48,528.07,531.66,535.25,538.84,542.43,546.02,549.61,553.20,556.79,560.38,563.97,567.56,571.15,574.74,578.33,581.92,585.51,589.10,592.69,596.28,599.87,603.46,607.05,610.64,614.23,617.82,621.41,625.00,628.59,632.18,635.77,639.36,642.95,646.54,650.13,653.72,657.31,660.90,664.49,668.08,671.67,675.26,678.85,682.44,686.03,689.62,693.21,696.80,700.39,703.98,707.57,711.16,714.75,718.34,721.93,725.52);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"chefir de grăsime 3,2%":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,1.92,3.84,5.77,7.69,9.63,11.56,13.50,15.44,17.39,19.34,21.30,23.26,25.23,27.20,29.18,31.17,33.16,35.16,37.17,39.19,41.22,43.26,45.30,47.36,49.44,51.52,53.63,55.75,57.88,60.04,62.22,64.42,66.65,68.92,71.21,73.55,75.92,78.35,80.83,83.38,86.00,88.70,91.51,94.44,97.52,100.77,104.24,107.98,112.06,116.60,121.72,127.67,134.79,143.66,155.33,171.91,198.29,249.17,398.00,402.00,406.00,409.90,413.90,417.80,421.80,425.70,429.70,433.60,437.50,441.50,445.40,449.40,453.30,457.30,461.30,465.20,469.20,473.30,477.30,481.30,485.20,489.20,493.10,497.00,501.00,504.90,508.80,512.80,516.70,520.70,524.60,528.60,532.50,536.50,540.40,544.20,548.30,552.20,556.10,560.10,564.00,567.90,571.90,575.80,579.70,583.70,587.60,591.60,595.50,599.50,603.40,607.40,611.40,615.30,619.30,623.30,627.30,631.20,635.20,639.20,643.20,647.30,651.30,655.30,659.30,663.30,667.40,671.40,675.50,679.50,683.60,687.70,691.80,695.80,699.90,704.00,708.20,712.30,716.40,720.50,724.70,728.80,733.00,737.10,741.30,745.50,749.70,753.90,758.10,762.30,766.60,770.80,775.00,779.30,783.60,787.80,792.10,796.40,800.70,805.10);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"scăzut de grăsimi chefir 0%":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.06,4.12,6.18,8.25,10.32,12.40,14.48,16.56,18.65,20.74,22.84,24.94,27.05,29.16,31.28,33.41,35.54,37.69,39.83,41.99,44.16,46.34,48.53,50.73,52.95,55.17,57.42,59.68,61.96,64.26,66.58,68.93,71.31,73.71,76.15,78.63,81.16,83.73,86.36,89.05,91.83,94.69,97.65,100.74,103.97,107.39,111.02,114.93,119.20,123.92,129.24,135.41,142.77,151.92,163.93,180.95,207.99,260.06,412.23,416.23,420.23,424.23,428.13,432.13,436.13,440.13,444.13,448.03,452.03,456.03,460.03,463.93,467.93,471.93,475.83,479.83,483.73,487.73,491.73,495.63,499.63,503.63,507.53,511.53,515.53,519.53,523.43,527.43,531.33,535.33,539.33,543.23,547.23,551.23,555.23,559.13,563.13,567.13,571.13,575.13,579.13,583.13,587.13,591.13,595.13,599.13,603.13,607.13,611.13,615.13,619.23,623.23,627.23,631.33,635.33,639.43,643.43,647.53,651.63,655.63,659.73,663.83,667.93,672.03,676.13,680.23,684.33,688.43,692.53,696.73,700.83,704.93,709.13,713.33,717.43,721.63,725.83,730.03,734.23,738.43,742.63,746.83,751.03,755.33,759.53,763.83,768.13,772.33,776.63,780.93,785.23,789.53,793.93,798.23,802.63,806.93,811.33,815.73,820.03,824.43);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"chefir tallinn 1%":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,1.91,3.82,5.73,7.65,9.57,11.49,13.42,15.35,17.29,19.23,21.18,23.13,25.08,27.04,29.01,30.99,32.97,34.96,36.95,38.96,40.97,43.00,45.03,47.08,49.14,51.21,53.30,55.41,57.53,59.67,61.84,64.03,66.25,68.49,70.77,73.09,75.45,77.86,80.32,82.85,85.45,88.14,90.93,93.83,96.88,100.11,103.55,107.26,111.30,115.79,120.87,126.76,133.81,142.59,154.14,170.54,196.63,246.93,394.03,397.93,401.83,405.73,409.63,413.53,417.33,421.23,425.13,429.03,432.93,436.83,440.73,444.53,448.43,452.33,456.23,460.13,464.03,467.93,471.83,475.73,479.63,483.43,487.33,491.23,495.13,498.93,502.83,506.73,510.63,514.53,518.43,522.23,526.13,530.03,533.93,537.83,541.73,545.63,549.53,553.43,557.33,561.23,565.13,569.03,572.93,576.83,580.73,584.63,588.53,592.43,596.43,600.33,604.23,608.23,612.13,616.13,620.03,624.03,628.03,631.93,635.93,639.93,643.93,647.93,651.93,655.93,659.93,663.93,667.93,671.93,676.03,680.03,684.13,688.13,692.23,696.33,700.43,704.43,708.53,712.63,716.83,720.93,725.03,729.13,733.33,737.43,741.63,745.83,750.03,754.13,758.33,762.63,766.83,771.03,775.23,779.53,783.73,788.03,792.33,796.63);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"căpșune":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.21,4.43,6.66,8.89,11.12,13.37,15.61,17.87,20.13,22.39,24.67,26.95,29.23,31.53,33.84,36.15,38.48,40.81,43.16,45.51,47.88,50.26,52.66,55.07,57.50,59.94,62.40,64.88,67.38,69.90,72.45,75.03,77.63,80.27,82.94,85.65,88.40,91.20,94.06,96.97,99.96,103.02,106.18,109.44,112.82,116.35,120.06,123.99,128.19,132.73,137.72,143.31,149.76,157.48,167.22,180.57,201.52,244.69,401.47,405.75,409.64,413.53,417.42,421.31,425.20,429.09,432.98,436.87,440.76,444.65,448.54,452.43,456.32,460.21,464.10,467.99,471.88,475.77,479.66,483.55,487.44,491.33,495.22,499.11,503.00,506.89,510.78,514.67,518.56,522.45,526.34,530.23,534.12,538.01,541.90,545.79,549.68,553.57,557.46,561.35,565.24,569.13,573.02,576.91,580.80,584.69,588.58,592.47,596.36,600.25,604.14,608.03,611.92,615.81,619.70,623.59,627.48,631.37,635.26,639.15,643.04,646.93,650.82,654.71,658.60,662.49,666.38,670.27,674.16,678.05,681.94,685.83,689.72,693.61,697.50,701.39,705.28,709.17,713.06,716.95,720.84,724.73,728.62,732.51,736.40,740.29,744.18,748.07,751.96,755.85,759.74,763.63,767.52,771.41,775.30,779.19,783.08,786.97,790.86,794.75);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"merișor":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.19,4.39,6.59,8.79,11.00,13.22,15.44,17.67,19.90,22.14,24.39,26.64,28.91,31.18,33.46,35.75,38.04,40.35,42.67,45.00,47.34,49.69,52.06,54.44,56.84,59.25,61.68,64.13,66.60,69.09,71.61,74.15,76.72,79.33,81.96,84.64,87.36,90.12,92.94,95.81,98.76,101.78,104.89,108.10,111.43,114.91,118.56,122.43,126.56,131.02,135.93,141.43,147.76,155.33,164.88,177.95,198.46,240.69,393.97,398.19,402.02,405.86,409.69,413.53,417.37,421.20,425.04,428.87,432.71,436.55,440.38,444.22,448.05,451.89,455.73,459.56,463.40,467.23,471.07,474.91,478.74,482.58,486.41,490.25,494.09,497.92,501.76,505.59,509.43,513.27,517.10,520.94,524.77,528.61,532.45,536.28,540.12,543.95,547.79,551.63,555.46,559.30,563.13,566.97,570.81,574.64,578.48,582.31,586.15,589.99,593.82,597.66,601.49,605.33,609.17,613.00,616.84,620.67,624.51,628.35,632.18,636.02,639.85,643.69,647.53,651.36,655.20,659.03,662.87,666.71,670.54,674.38,678.21,682.05,685.89,689.72,693.56,697.39,701.23,705.07,708.90,712.74,716.57,720.41,724.25,728.08,731.92,735.75,739.59,743.43,747.26,751.10,754.93,758.77,762.61,766.44,770.28,774.11,777.95,781.79);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mezeluri semi-afumate armavir":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.27,4.55,6.83,9.12,11.40,13.69,15.99,18.28,20.58,22.89,25.20,27.51,29.83,32.15,34.48,36.82,39.16,41.51,43.86,46.22,48.59,50.96,53.35,55.74,58.15,60.56,62.99,65.43,67.89,70.36,72.84,75.35,77.87,80.42,83.00,85.60,88.24,90.92,93.63,96.40,99.23,102.12,105.10,108.18,111.39,114.75,118.32,122.17,126.40,131.20,136.88,144.10,154.43,173.08,237.25,256.11,263.51,267.41,271.31,275.41,279.41,283.51,287.61,291.71,295.61,299.51,303.31,306.91,310.51,314.01,317.51,320.91,324.21,327.61,330.91,334.21,337.51,340.91,344.31,347.81,351.41,355.11,358.91,362.91,367.21,371.61,376.01,380.51,384.91,389.11,393.01,396.81,400.41,403.91,407.21,410.41,413.61,416.71,419.81,422.81,425.71,428.71,431.61,434.51,437.41,440.21,443.11,445.91,448.81,451.61,454.41,457.31,460.11,462.91,465.71,468.51,471.31,474.11,476.91,479.71,482.51,485.31,488.21,491.01,493.81,496.61,499.41,502.21,505.01,507.91,510.71,513.51,516.31,519.01,522.01,524.91,527.71,530.61,533.41,536.31,539.11,542.01,544.91,547.81,550.61,553.51,556.41,559.31,562.21,565.11,568.01,570.91,573.91,576.81,579.71,582.71,585.61,588.61,591.51,594.51);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cârnați de vită gătită":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.24,4.48,6.72,8.97,11.23,13.49,15.75,18.02,20.29,22.57,24.86,27.15,29.45,31.76,34.07,36.39,38.72,41.06,43.40,45.76,48.13,50.50,52.89,55.29,57.71,60.14,62.58,65.04,67.52,70.01,72.53,75.07,77.64,80.23,82.86,85.52,88.21,90.95,93.73,96.57,99.46,102.43,105.48,108.62,111.88,115.26,118.81,122.57,126.57,130.91,135.69,141.08,147.36,155.02,165.06,179.83,206.76,292.54,345.86,352.16,355.76,359.26,362.86,366.46,370.06,373.66,377.26,380.96,384.56,388.26,391.96,395.66,399.36,403.16,406.86,410.56,414.26,417.96,421.66,425.36,429.06,432.66,436.36,439.96,443.56,447.16,450.76,454.36,457.96,461.56,465.16,468.76,472.36,475.96,479.56,483.26,486.86,490.56,494.26,497.96,501.66,505.46,509.26,513.16,517.06,521.06,525.06,529.16,533.16,537.16,541.16,545.16,548.96,552.86,556.66,560.46,564.16,567.96,571.66,575.36,579.06,582.76,586.36,590.06,593.06,597.36,601.06,604.76,608.36,612.06,615.76,619.46,623.06,626.76,630.46,634.16,637.86,641.56,645.26,648.96,652.66,656.46,660.16,663.86,667.66,671.36,675.16,678.96,682.66,686.46,690.26,694.06,697.86,701.66,705.46,709.26,713.16,716.96,720.86,724.66);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cârnați delicatețe fierte afumate":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.45,4.90,7.36,9.82,12.28,14.74,17.21,19.68,22.15,24.63,27.11,29.59,32.08,34.57,37.07,39.58,42.08,44.60,47.12,49.65,52.18,54.72,57.27,59.83,62.40,64.98,67.57,70.17,72.78,75.41,78.06,80.72,83.40,86.11,88.84,91.60,94.39,97.22,100.10,103.03,106.01,109.07,112.23,115.49,118.89,122.48,126.32,130.51,135.21,140.73,147.68,157.59,175.78,246.62,250.02,253.42,257.02,260.72,264.42,268.32,272.22,276.12,279.92,283.82,287.62,291.22,294.82,298.42,301.82,305.12,308.42,311.72,314.92,318.12,321.32,324.52,327.72,330.92,334.22,337.52,340.92,344.52,348.12,352.02,356.02,360.22,364.42,368.72,372.82,376.82,380.62,384.22,387.62,391.02,394.22,397.32,400.32,403.32,406.22,409.12,412.02,414.82,417.72,420.52,423.22,426.02,428.82,431.52,434.32,437.02,439.72,442.52,445.22,447.92,450.62,453.42,456.12,458.82,461.52,464.22,466.92,469.72,472.42,475.12,477.82,480.62,483.32,486.02,488.72,491.52,494.22,496.92,499.72,502.42,505.22,507.92,510.72,513.52,516.22,519.02,521.82,524.52,527.32,530.12,532.92,535.72,538.52,541.32,544.12,546.92,549.72,552.62,555.42,558.22,561.12,563.92,566.82,569.62,572.52,575.42);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"fierte diabetici mezeluri":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.26,4.53,6.81,9.08,11.36,13.65,15.94,18.23,20.53,22.83,25.14,27.46,29.78,32.11,34.44,36.78,39.13,41.49,43.86,46.23,48.61,51.01,53.41,55.83,58.25,60.69,63.15,65.62,68.10,70.61,73.13,75.68,78.24,80.84,83.46,86.11,88.80,91.53,94.30,97.11,99.99,102.93,105.95,109.05,112.26,115.60,119.09,122.77,126.69,130.93,135.59,140.83,146.93,154.38,164.18,178.71,205.96,302.75,331.47,338.67,342.37,346.17,349.97,353.77,357.47,361.17,364.87,368.47,372.07,375.67,379.17,382.67,386.17,389.67,393.17,396.67,400.17,403.67,407.17,410.67,414.27,417.87,421.57,425.37,429.17,433.07,436.97,440.97,444.87,448.67,452.37,456.07,459.67,463.17,466.67,470.17,473.57,476.97,480.37,483.77,487.07,490.47,493.77,497.17,500.47,503.77,507.17,510.47,513.77,517.07,520.37,523.77,526.87,530.37,533.67,537.07,540.37,543.67,547.07,550.27,553.67,557.07,560.37,563.77,567.07,570.47,573.87,577.17,580.57,583.97,587.37,590.67,594.07,597.47,600.87,604.27,607.77,611.17,614.57,617.97,621.47,624.87,627.57,631.77,635.27,638.67,642.17,645.67,649.17,652.67,656.17,659.67,663.17,666.77,670.27,673.77,677.37,680.87,684.47,688.07);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"fierte doctorat mezeluri":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.06,4.12,6.18,8.25,10.32,12.40,14.48,16.57,18.66,20.76,22.86,24.97,27.08,29.20,31.33,33.47,35.61,37.76,39.92,42.09,44.27,46.45,48.65,50.86,53.09,55.32,57.57,59.84,62.12,64.42,66.74,69.09,71.45,73.84,76.26,78.72,81.20,83.73,86.30,88.92,91.60,94.34,97.16,100.07,103.09,106.23,109.53,113.01,116.75,120.79,125.26,130.32,136.24,143.51,153.14,167.51,194.60,291.29,319.96,327.16,330.96,334.76,338.56,342.26,346.06,349.76,353.36,356.96,360.56,364.16,367.66,371.16,374.56,378.06,381.56,384.96,388.46,391.96,395.46,398.96,402.56,406.16,409.86,413.56,417.46,421.36,425.26,429.26,433.16,436.96,441.06,444.36,447.96,451.46,454.96,458.36,461.76,465.16,468.56,471.86,475.16,478.56,481.86,485.16,488.46,491.76,495.06,498.36,501.66,504.86,508.16,511.46,514.76,518.06,521.36,524.66,527.96,531.26,534.56,537.86,541.16,544.46,547.76,551.06,554.36,557.66,561.06,564.36,567.66,571.06,574.36,577.76,581.06,584.46,587.86,591.16,594.56,597.96,601.36,604.76,608.16,611.56,614.96,618.36,621.56,625.16,628.66,632.06,635.56,638.96,642.46,645.96,649.46,652.86,656.36,659.86,663.36,666.96,670.46,673.96);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cârnați, afumate fierte înregistrat":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.29,4.58,6.87,9.17,11.47,13.77,16.07,18.38,20.70,23.02,25.34,27.67,30.00,32.34,34.68,37.03,39.38,41.74,44.11,46.48,48.87,51.26,53.66,56.07,58.48,60.92,63.36,65.82,68.29,70.77,73.28,75.80,78.35,80.92,83.52,86.14,88.81,91.51,94.26,97.06,99.93,102.88,105.92,109.08,112.38,115.88,119.64,123.76,128.40,133.89,140.84,150.82,169.23,241.12,244.12,247.12,250.12,253.22,256.22,259.42,262.52,265.72,268.92,272.22,275.52,278.82,282.32,286.12,289.32,292.92,296.62,300.32,304.02,307.82,311.62,315.32,319.12,322.82,326.42,330.02,333.62,337.12,340.62,344.02,347.42,350.82,354.22,357.52,360.92,364.22,367.52,370.82,374.22,377.52,380.92,384.32,387.82,391.32,394.92,398.52,402.32,406.22,410.22,414.42,418.82,423.32,428.02,432.72,437.52,442.12,446.72,451.02,455.22,459.32,463.22,466.92,470.62,474.22,477.72,481.12,484.62,487.92,491.22,494.52,497.82,501.12,504.32,507.62,510.82,514.02,517.22,520.42,523.62,526.82,530.02,533.22,536.32,539.52,542.72,545.92,549.12,552.32,555.52,558.72,561.92,565.12,568.32,571.52,574.82,578.02,581.22,584.52,587.72,590.92,594.22,597.42,600.72,604.02,607.32,610.52);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mezeluri fierte krasnodar":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.18,4.37,6.56,8.76,10.96,13.16,15.37,17.58,19.79,22.02,24.24,26.47,28.71,30.96,33.21,35.46,37.73,40.00,42.28,44.57,46.86,49.17,51.49,53.81,56.15,58.50,60.87,63.25,65.64,68.05,70.48,72.93,75.41,77.90,80.42,82.97,85.56,88.18,90.84,93.55,96.31,99.13,102.02,105.00,108.07,111.26,114.59,118.10,121.83,125.85,130.25,135.19,140.90,147.83,156.83,169.96,193.70,268.85,315.44,322.44,326.44,330.54,334.54,338.44,342.44,346.24,350.04,353.84,357.54,361.14,364.74,368.34,371.84,375.34,378.94,382.44,385.94,389.54,393.04,396.64,400.34,404.14,407.94,411.94,416.04,420.24,424.44,428.74,432.84,436.94,440.84,444.64,448.34,452.04,455.54,459.04,462.44,465.84,469.14,472.54,475.84,479.14,482.44,485.64,488.94,492.14,495.44,498.64,501.94,505.14,508.34,511.54,514.84,518.04,521.24,524.54,527.74,530.94,534.24,537.44,540.64,543.94,547.14,550.44,553.64,556.94,560.14,563.44,566.64,569.94,573.24,576.44,579.74,583.04,586.34,589.64,592.94,596.24,599.54,602.84,606.14,609.54,612.84,616.14,619.54,622.84,626.24,629.64,632.94,636.34,639.74,643.14,646.54,649.94,653.34,656.74,660.24,663.64,667.04,670.54);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"cârnați fierte amatori":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.24,4.48,6.73,8.98,11.23,13.49,15.75,18.01,20.28,22.55,24.83,27.11,29.40,31.69,33.98,36.28,38.59,40.91,43.23,45.55,47.89,50.23,52.58,54.94,57.31,59.69,62.08,64.48,66.90,69.32,71.77,74.22,76.70,79.20,81.71,84.25,86.82,89.41,92.04,94.70,97.40,100.15,102.95,105.82,108.75,111.78,114.90,118.15,121.55,125.15,129.00,133.19,137.85,143.18,149.58,157.80,169.63,190.78,256.97,297.89,305.29,309.29,313.59,317.69,321.69,325.59,329.49,333.19,336.89,340.59,344.19,347.69,351.19,354.69,358.09,361.59,365.09,368.59,372.09,375.69,379.39,383.19,387.09,391.19,395.49,399.79,404.29,408.79,413.09,417.39,421.39,425.19,428.99,432.49,435.99,439.39,442.79,445.99,449.29,452.49,455.59,458.79,461.89,464.99,468.09,471.19,474.29,477.29,480.39,483.49,486.49,489.59,492.59,495.59,498.69,501.69,504.79,507.79,510.79,513.89,516.89,519.99,522.99,525.99,529.09,532.09,535.19,538.29,541.49,544.39,547.39,550.49,553.59,556.69,559.69,562.79,565.89,568.99,572.09,575.19,578.29,581.49,584.59,587.69,590.79,593.99,597.09,600.29,603.39,606.59,609.69,612.89,616.09,619.29,622.49,625.69,628.89,632.09,635.29,638.49);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mezeluri fierte si afumate amatori":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.46,4.93,7.40,9.87,12.35,14.83,17.31,19.80,22.28,24.78,27.27,29.77,32.28,34.79,37.30,39.82,42.35,44.88,47.41,49.96,52.51,55.07,57.63,60.21,62.79,65.39,68.00,70.62,73.25,75.90,78.56,81.24,83.95,86.67,89.43,92.21,95.02,97.88,100.77,103.72,106.74,109.82,113.00,116.29,119.73,123.36,127.23,131.46,136.22,141.80,148.83,158.87,177.29,249.00,252.40,256.00,259.70,263.50,267.40,271.40,275.50,279.60,283.60,287.60,291.50,295.40,299.10,303.10,306.30,309.70,313.10,316.50,319.80,323.10,326.40,329.60,332.90,336.20,339.60,343.00,346.60,350.20,354.10,358.10,362.20,366.60,371.10,375.50,379.80,384.00,387.90,391.70,395.20,398.50,401.90,405.10,408.30,411.30,414.30,417.30,420.20,423.10,426.00,428.80,431.60,434.40,437.30,440.00,442.80,445.60,448.40,451.20,453.90,456.70,459.40,462.20,464.90,467.70,470.40,473.20,476.00,478.70,481.50,484.20,487.00,489.70,492.50,495.30,498.00,500.80,503.60,506.30,509.10,511.90,514.70,517.50,520.30,523.00,525.80,528.60,531.50,534.30,537.10,539.90,542.70,545.50,548.40,551.20,554.10,556.90,559.80,562.60,565.50,568.40,571.20,574.10,577.00,579.90,582.80,585.70);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"amatori mezeluri fierte carne de porc":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.20,4.40,6.61,8.82,11.03,13.24,15.46,17.68,19.91,22.14,24.37,26.61,28.86,31.10,33.36,35.62,37.88,40.15,42.43,44.71,47.00,49.30,51.61,53.92,56.24,58.58,60.92,63.28,65.65,68.03,70.43,72.84,75.27,77.72,80.19,82.68,85.20,87.75,90.33,92.95,95.61,98.32,101.08,103.91,106.82,109.82,112.94,116.19,119.62,123.28,127.24,131.63,136.63,142.59,150.20,161.06,180.33,240.23,277.15,284.65,288.85,293.05,297.25,301.45,305.55,309.55,313.35,317.15,320.85,324.55,328.05,331.55,335.05,338.45,341.95,345.35,348.75,352.25,355.75,359.35,363.05,366.85,370.85,374.95,379.35,383.85,388.45,393.05,397.55,401.85,405.95,409.85,413.55,417.15,420.55,423.95,427.15,430.45,433.55,436.65,439.75,442.75,446.15,448.75,451.75,454.75,457.65,460.65,463.55,466.55,469.45,472.35,475.25,478.15,481.05,483.95,486.85,489.85,492.75,495.65,498.55,501.45,504.35,507.25,510.15,513.05,515.75,518.85,521.85,524.75,527.65,530.55,533.55,536.45,540.45,542.35,545.25,548.25,551.25,554.15,557.15,560.05,563.05,566.05,569.05,572.05,575.05,578.05,581.05,584.05,587.05,590.05,593.15,596.15,599.15,602.25,605.25,608.35,611.45,614.45);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"afumat maikop mezeluri":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.90,5.90,8.80,11.70,14.70,17.60,20.50,23.40,26.40,29.30,32.20,35.20,38.10,41.00,44.00,46.90,49.80,52.70,55.70,58.60,61.50,64.50,67.40,70.30,73.30,76.20,79.10,82.00,85.00,87.90,90.80,93.80,96.70,99.60,102.60,105.50,108.40,111.30,114.30,117.20,119.60,122.10,124.70,127.20,129.80,132.40,135.10,137.80,140.60,143.50,146.40,149.40,152.50,155.70,159.10,162.60,166.20,169.90,173.80,177.80,181.80,185.90,189.90,193.90,197.80,201.50,205.00,208.70,212.20,215.50,218.80,222.00,225.10,228.20,231.30,234.40,237.50,240.70,243.90,247.20,250.60,254.20,257.90,261.90,266.10,270.60,275.10,279.60,284.00,288.00,292.10,295.70,299.20,302.50,305.60,308.60,311.50,314.30,317.10,319.80,322.40,325.10,327.70,330.20,332.80,335.30,337.80,340.30,342.80,345.30,347.80,350.20,352.70,355.10,357.60,360.00,362.50,364.90,367.30,369.80,372.20,374.60,377.10,379.50,381.90,384.40,386.80,389.30,391.70,394.10,396.60,399.00,401.50,403.90,406.40,408.80,411.30,413.80,416.20,418.70,421.20,423.60,426.10,428.60,431.10,433.60,436.00,438.50,441.00,443.50,446.10,448.60,451.10,453.60,456.10,458.70,461.20,463.70,466.30,468.80);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mezeluri de lapte fierte":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.24,4.49,6.74,8.99,11.24,13.51,15.77,18.04,20.32,22.59,24.88,27.17,29.47,31.77,34.08,36.39,38.72,41.05,43.39,45.73,48.09,50.45,52.83,55.22,57.62,60.03,62.45,64.89,67.35,69.82,72.31,74.83,77.36,79.92,82.51,85.12,87.77,90.46,93.19,95.96,98.79,101.69,104.65,107.70,110.85,114.12,117.54,121.14,124.96,129.09,133.60,138.67,144.54,151.66,160.91,174.42,198.88,276.38,324.51,331.31,335.11,339.01,342.81,346.61,350.31,354.01,357.71,361.31,364.91,368.41,371.91,375.41,378.91,382.41,385.81,389.31,392.81,396.31,399.81,403.31,406.91,410.51,414.21,418.01,421.81,425.81,429.71,433.71,437.61,441.51,445.21,448.91,452.51,456.01,459.51,462.91,466.31,469.71,473.11,476.41,479.71,483.01,486.31,489.61,492.91,496.21,499.51,502.71,506.01,509.31,512.51,515.81,519.11,522.41,525.61,528.91,532.21,535.51,538.81,542.01,545.31,548.61,551.91,555.21,558.51,561.81,565.11,568.41,571.81,575.11,578.41,581.71,585.11,588.41,591.81,595.11,598.51,601.81,605.21,608.61,612.01,615.31,618.71,622.11,625.51,628.91,632.41,635.81,639.21,642.71,646.11,649.61,653.01,656.51,660.01,663.41,666.91,670.41,673.91,677.51);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri moscova fierte":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.16,4.33,6.49,8.67,10.84,13.02,15.21,17.40,19.59,21.79,23.99,26.20,28.41,30.63,32.86,35.09,37.33,39.58,41.83,44.10,46.37,48.65,50.94,53.24,55.55,57.88,60.22,62.57,64.93,67.32,69.72,72.14,74.58,77.04,79.54,82.05,84.61,87.19,89.82,92.49,95.21,97.99,100.84,103.77,106.80,109.93,113.21,116.66,120.32,124.26,128.58,133.41,138.99,145.75,154.52,167.28,190.32,263.11,308.29,315.49,319.49,323.49,327.49,331.49,335.39,339.29,343.09,346.79,350.49,354.09,357.69,361.29,364.79,368.29,371.79,375.29,378.79,382.39,385.89,389.49,393.19,396.99,400.79,404.79,408.89,413.09,417.29,421.59,425.79,429.89,433.79,437.59,441.29,444.89,448.39,451.89,455.29,458.59,461.99,465.29,468.59,471.79,475.09,478.29,481.59,484.79,487.99,491.19,494.39,497.59,500.79,503.99,507.19,510.39,513.59,516.79,519.99,523.19,526.39,529.59,532.89,536.09,539.29,542.49,545.69,548.49,552.19,555.39,558.59,561.79,565.09,568.29,571.59,574.79,578.09,581.39,584.59,587.89,591.19,594.49,597.69,600.99,604.29,607.59,610.99,614.29,617.59,620.89,624.29,627.59,630.99,634.29,637.69,641.09,644.39,647.79,651.19,654.59,657.99,661.39);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
 v.value=resultall.toFixed(1);;
};
	break;
case"mezeluri moscova fierte si afumate":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.48,4.96,7.45,9.94,12.43,14.92,17.42,19.92,22.43,24.93,27.45,29.96,32.48,35.01,37.53,40.07,42.61,45.15,47.71,50.26,52.83,55.40,57.98,60.57,63.17,65.78,68.40,71.03,73.68,76.34,79.01,81.71,84.42,87.16,89.92,92.72,95.54,98.40,101.31,104.27,107.28,110.38,113.56,116.85,120.29,123.91,127.78,132.00,136.74,142.29,149.27,159.22,177.44,248.27,251.77,255.27,258.87,262.57,265.57,270.27,274.27,278.27,282.17,286.07,289.67,293.67,297.27,300.87,304.37,307.77,311.07,314.37,317.67,320.87,324.17,327.37,330.57,333.87,337.17,340.57,344.07,347.57,351.37,355.27,359.37,363.57,367.87,372.27,376.47,380.47,384.37,387.97,391.47,394.87,398.07,401.27,404.37,407.37,410.37,413.27,416.17,419.07,421.87,424.77,427.57,430.37,433.17,435.97,438.77,441.47,444.27,447.07,449.77,452.57,455.27,458.07,460.77,463.57,466.27,469.07,471.77,474.57,477.27,480.07,482.77,485.57,488.37,491.07,493.87,496.67,499.37,502.17,504.97,507.77,510.47,513.27,516.07,518.87,521.67,524.47,527.27,530.07,532.87,535.77,538.57,541.37,544.17,547.07,549.87,552.77,555.57,558.47,561.27,564.17,567.07,569.97,572.87,575.77,578.67,581.57);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri afumate moscova":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.90,5.90,8.80,11.70,14.60,17.50,20.40,23.40,26.30,29.20,32.10,35.00,37.90,40.90,43.80,46.70,49.60,52.50,55.40,58.40,61.30,64.20,67.10,70.00,72.90,75.90,78.80,81.70,84.60,87.50,90.40,93.40,96.30,99.20,102.10,105.00,107.90,110.90,113.80,116.70,119.40,121.80,124.20,126.80,129.40,132.10,134.70,137.50,140.20,143.10,146.00,148.90,152.00,155.20,158.50,161.90,165.40,169.00,172.80,176.60,180.50,184.40,188.30,192.20,195.90,199.60,203.10,206.60,209.90,213.20,216.40,219.60,222.70,225.70,228.80,231.80,234.90,238.00,241.20,244.40,247.80,251.30,254.90,258.80,262.80,267.10,271.40,275.80,280.00,284.10,287.80,291.40,294.80,298.00,301.00,304.00,306.90,309.70,312.50,315.20,317.90,320.50,323.10,325.70,328.30,330.80,333.40,335.90,338.40,341.00,343.50,346.00,348.50,350.90,353.40,355.90,358.20,360.90,363.40,365.80,368.30,370.80,373.30,375.80,378.20,380.70,383.20,385.70,388.20,390.70,393.10,395.60,398.10,400.60,403.10,405.60,408.10,410.60,413.10,415.70,418.20,420.70,423.20,425.80,428.30,430.80,433.40,435.90,438.50,441.00,443.60,446.10,448.70,451.30,453.80,456.40,459.00,461.60,464.20,466.80);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"afumat de construcții mezeluri":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.90,5.80,8.70,11.60,14.50,17.40,20.30,23.20,26.10,29.00,31.90,34.80,37.70,40.60,43.50,46.40,49.30,52.20,55.10,58.00,60.90,63.80,66.70,69.60,72.50,75.40,78.30,81.20,84.10,87.00,89.90,92.80,95.70,98.60,101.50,104.40,107.30,110.20,113.10,116.00,118.40,120.60,123.30,125.70,128.30,130.80,133.40,136.20,138.90,141.70,144.60,147.60,150.70,153.90,157.30,160.80,164.40,168.20,172.20,176.30,180.40,184.60,188.70,192.80,196.80,200.60,204.30,207.90,211.40,214.70,218.00,221.20,224.40,227.50,230.60,233.70,236.80,239.90,243.10,246.50,249.90,253.50,257.40,261.50,265.80,270.40,275.10,279.80,284.30,288.60,292.60,296.30,299.80,303.10,306.20,309.20,312.10,314.90,317.60,320.20,322.80,325.40,327.90,330.40,332.90,335.40,337.80,340.20,342.60,345.00,347.40,349.80,352.20,354.60,356.90,359.30,361.60,364.00,366.30,368.70,371.00,373.40,375.70,378.10,380.40,382.80,385.10,387.50,389.60,392.20,394.50,396.90,399.20,401.60,403.90,406.30,408.60,411.00,413.40,415.80,418.10,420.50,422.90,425.30,427.70,430.00,432.40,434.80,437.20,439.60,442.00,444.50,446.90,449.30,451.70,454.10,456.60,459.00,461.50,463.90);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri semi-afumate poltava":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.48,4.97,7.46,9.95,12.44,14.94,17.44,19.95,22.45,24.97,27.48,30.00,32.52,35.05,37.59,40.12,42.67,45.22,47.78,50.34,52.91,55.49,58.08,60.67,63.28,65.90,68.53,71.17,73.83,76.50,79.19,81.90,84.63,87.39,90.17,92.99,95.84,98.74,101.69,104.69,107.77,110.93,114.21,117.62,121.21,125.04,129.21,133.88,139.35,146.20,155.92,173.66,242.32,245.72,249.32,252.92,256.72,260.62,264.62,268.72,272.82,277.02,281.12,285.22,289.32,293.22,297.02,300.72,304.32,307.82,311.22,314.62,317.92,321.32,324.52,327.82,331.12,334.52,337.92,341.42,344.92,348.72,352.62,356.72,361.02,365.52,370.12,374.72,379.22,383.52,387.52,391.32,394.92,398.42,401.72,404.92,408.02,411.02,414.02,417.02,419.92,422.72,425.62,428.42,431.22,434.02,436.72,439.52,442.22,445.02,447.72,450.42,453.22,455.92,458.62,461.32,464.02,466.72,469.42,472.12,474.82,477.52,480.22,482.92,485.62,488.42,491.12,493.82,496.52,499.22,501.92,504.72,507.42,510.12,512.82,515.62,518.32,521.12,523.82,526.52,529.32,532.12,534.82,537.62,540.42,543.12,545.92,548.72,551.52,554.32,557.12,559.92,562.72,565.52,568.32,571.12,574.02,576.82,579.72,582.52);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri rostov fierte și afumate":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.44,4.88,7.33,9.78,12.23,14.68,17.14,19.60,22.07,24.53,27.01,29.48,31.96,34.44,36.93,39.43,41.93,44.43,46.94,49.46,51.99,54.52,57.06,59.61,62.17,64.74,67.32,69.91,72.52,75.14,77.77,80.43,83.10,85.80,88.52,91.27,94.06,96.88,99.74,102.66,105.64,108.69,111.84,115.09,118.49,122.07,125.90,130.08,134.77,140.28,147.23,157.13,175.32,246.16,249.56,252.96,256.56,260.26,263.96,267.86,271.76,275.66,279.56,283.36,287.16,290.86,294.46,297.96,301.36,304.76,308.06,311.26,314.56,317.76,320.86,324.06,327.26,330.46,333.76,337.06,340.56,344.06,347.76,351.56,355.56,359.76,364.06,368.26,372.46,376.46,380.26,383.86,387.26,390.56,393.76,396.86,399.96,402.96,405.86,408.76,411.66,414.46,417.26,420.06,422.86,425.66,428.46,431.16,433.96,436.66,439.36,442.16,444.86,447.56,450.26,452.96,455.76,458.46,461.16,463.86,466.56,469.26,472.06,474.76,477.46,480.16,482.96,485.66,488.36,491.16,493.86,496.56,499.36,502.06,504.86,507.56,510.36,513.06,515.86,518.66,521.36,524.16,526.96,529.76,532.56,535.36,538.16,540.96,543.76,546.56,549.36,552.26,555.06,557.86,560.76,563.56,566.46,569.26,572.16,575.06);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri fierte rus":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.03,4.05,6.09,8.12,10.16,12.21,14.25,16.31,18.36,20.43,22.49,24.56,26.64,28.73,30.82,32.91,35.01,37.12,39.24,41.37,43.50,45.65,47.80,49.96,52.14,54.32,56.52,58.74,60.96,63.21,65.47,67.75,70.05,72.37,74.72,77.10,79.51,81.95,84.43,86.96,89.53,92.17,94.87,97.64,100.52,103.50,106.61,109.89,113.38,117.14,121.27,125.89,131.25,137.74,146.18,158.49,180.75,251.13,294.75,301.75,306.05,310.15,314.25,318.35,322.35,326.25,330.15,333.95,337.65,341.25,344.85,348.45,351.95,355.45,358.95,362.45,365.95,369.55,373.25,376.75,380.45,384.25,388.15,392.25,396.45,400.75,405.15,409.55,413.85,418.05,422.05,425.95,429.65,433.25,436.75,440.25,443.65,446.95,450.25,453.45,456.75,459.95,463.15,466.25,469.45,472.65,475.75,478.95,482.05,485.15,488.25,491.45,494.55,497.65,500.75,503.85,507.05,510.15,513.25,516.35,519.45,522.65,525.75,528.85,532.05,535.15,538.25,541.45,544.55,547.75,550.85,553.55,557.15,560.35,563.55,566.65,569.85,573.05,576.25,579.45,582.65,585.85,589.35,592.25,595.45,598.65,601.95,605.15,608.45,611.65,614.95,618.15,621.45,624.75,628.05,631.35,634.65,637.95,641.25,644.55);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
case"mezeluri fierte și afumate cârnați":{
				var result1="";var result2=""; var resultall="";
				var value=new Array(0.00,2.64,5.27,7.91,10.55,13.20,15.85,18.50,21.15,23.81,26.47,29.13,31.80,34.47,37.14,39.82,42.51,45.20,47.89,50.59,53.30,56.01,58.73,61.46,64.20,66.94,69.70,72.46,75.24,78.03,80.83,83.65,86.49,89.34,92.22,95.12,98.05,101.01,104.00,107.04,110.13,113.27,116.49,119.79,123.20,126.75,130.48,134.44,138.75,143.55,149.14,156.13,165.99,183.89,253.04,256.44,259.84,263.44,267.04,270.84,274.64,278.54,282.34,286.24,289.04,293.84,297.44,301.04,304.54,307.94,311.24,314.54,317.84,321.04,324.14,327.34,330.54,333.64,336.84,340.14,343.44,346.84,350.34,354.04,357.84,361.84,365.94,370.24,374.44,378.54,382.54,386.24,389.84,393.24,396.54,399.74,402.84,405.84,408.84,411.74,414.64,417.54,420.34,423.14,425.94,428.64,431.44,434.14,436.94,439.64,442.34,445.14,447.84,450.54,453.24,455.94,458.64,461.34,464.04,466.74,469.44,472.14,474.84,477.54,480.24,482.94,485.64,487.54,491.14,493.84,496.54,499.24,502.04,504.74,507.44,510.14,512.94,516.04,518.44,521.14,523.94,526.64,529.44,532.24,534.94,537.74,540.54,543.34,546.14,548.94,551.74,554.54,557.34,560.14,562.94,565.74,568.64,571.44,574.24,577.44,579.94);
							graph2=value;
							for(var i in temp)
							{
								if(temp[i]==a)
								{
									result1=value[i];
								};
							};
							for(var j in temp)
							{
								if(temp[j]==b)
								{
									result2=value[j];
								};
							};				
			resultall=result2-result1;
			if(resultall<=0)
			{
			resultall=resultall*-1;
			}
							var v=document.getElementById("vv");
							v.value=resultall.toFixed(1);
};
	break;
	
	
				default:
				break;};
}
for(var i=0;i<graph1.length;i++)
		{
		if(graph1[i]==mim)
		{		graph.push([graph1[i],graph2[i],0,1000,null,null]);}
		else if(graph1[i]==nin)
		{		graph.push([graph1[i],graph2[i],null,null,0,1000]);}
		else{		graph.push([graph1[i],graph2[i], null, null, null,null]);		}
		
		}

return graph;
};
document.getElementById("name").addEventListener("change", function () {
	if(document.getElementById('name').value==1){
	document.getElementById('gran1').innerHTML="Restricție [-50 100]";
	document.getElementById('gran2').innerHTML="Restricție [-50 100]";}
	else{
	document.getElementById('gran1').innerHTML="Restricție [-60 100]";
	document.getElementById('gran2').innerHTML="Restricție [-60 100]";
	}
});


