/* 
* Swarasandhi based on Sanscrit Linguistic Rules
* Copyright 2013, Akhilan <mail@akhilan.in>
* 
* 
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU Lesser General Public License as published by
* the Free Software Foundation; either version 3 of the License, or
* (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Lesser General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
* 
* 
*/

/* സംസ്കൃത നിയമങ്ങളെ അടിസ്ഥാനപ്പെടുത്തിയ സ്വരസന്ധി
* പകർപ്പവകാശം 2013, അഖിലൻ <mail@akhilan.in>
* 
* ഇത് ഒരു സ്വതന്ത്ര സോഫ്റ്റ്‌വേറാണ്; ഫ്രീ സോഫ്റ്റ്‌വേർ ഫൗണ്ടേഷൻ പ്രസിദ്ധീകരിക്കുന്ന 
* ഗ്നു സാർവ്വജനിക അനുവാദപത്രം, പതിപ്പ്  3 അല്ലെങ്കിൽ (താങ്കളുടെ ഇച്ചാനുസരണം) മറ്റേതെങ്കിലും പുതിയ പതിപ്പ്, 
* പ്രകാരം താങ്കൾക്കത് പുനർവിതരണമോ കൂടെ/അല്ലെങ്കിൽ മാറ്റം വരുത്തുകയോ ചെയ്യാവുന്നതാണ്.
* 
* ഈ പ്രോഗ്രാം വിതരണം ചെയ്യുന്നത് ഇത് ഉപകാരപ്പെടുമെന്ന പ്രതീക്ഷയിലാണ്, 
* പക്ഷേ യാതൊരു ഗുണമേന്മാ ഉത്തരവാദിത്തവും വഹിക്കുന്നില്ല; ഇത് വ്യാപാരയോഗ്യമെന്നോ 
* പ്രത്യേക ഉപയോഗത്തിന് അനുയോജ്യമെന്നോ ഉള്ള യാതൊരു ഗുണമേന്മാ ഉത്തരവാദിത്തവും ഉൾക്കൊള്ളുന്നില്ല. 
* കൂടുതൽ വിവരങ്ങൾക്ക് ഗ്നു സാർവ്വജനിക അനുവാദപത്രം കാണുക.
* 
* ഈ പ്രോഗ്രാമിനൊപ്പം ഗ്നു സാർവ്വജനിക അനുവാദപത്രത്തിന്റെ ഒരു പകർപ്പ് താങ്കൾക്ക് ലഭിച്ചിട്ടുണ്ടാകണം; 
* ഇല്ലെങ്കിൽ ഫ്രീ സോഫ്റ്റ്‌വെയർ ഫൗണ്ടേഷനു്  എഴുതുക
*/


function join() 
{
	 var sel= document.form1.selection.value;
	 var preString = document.form1.firstC.value;
	 var postString = document.form1.secondC.value;
 	 var len1=preString.length;				
 	 var inChar1=preString[(len1)-1];
 	 var str1 = preString.substring(0, preString.length-1);
 	 var inChar2=postString[0]
 	 var str2 = postString.substring(1, postString.length);


	if (sel==0)
	alert("ഒരു സന്ധി തിരഞ്ഞെടുക്കുക");
	else if(sel==1) //ദീർഘസന്ധി 
		{
		if (inChar1=='ാ')
			{
			 if(inChar2=='അ'||inChar2=='ആ')  joiner='ാ' ;
			}
		if (inChar1=='ി'||inChar1=='ീ')
			{
			 if(inChar2=='ഇ'||inChar2=='ഈ') joiner='ീ' ;
			}
		if (inChar1=='ു'||inChar1=='ൂ')
			{
			 if(inChar2=='ഉ'||inChar2=='ഊ')  joiner='ൂ' ;
			}
		}

	else if (sel==2) //ഗുണസന്ധി 
		{
		if (inChar1=='ാ')
			{
			 if(inChar2=='ഇ'||inChar2=='ഈ') joiner='േ' ;
			else if(inChar2=='ഉ'||inChar2=='ഊ')  joiner='ോ';
			else if (inChar2=='ൠ'||inChar2=='ഋ') joiner='ർ'
			else if (inChar2=='ഐ') joiner= 'ൈ'
			else if (inChar2=='ഔ') joiner='ൌ'
			// else if (inChar2=='ലു') joiner='ൽ'
			}
		}

	else if (sel==3) //വൃദ്ധിസന്ധി
		{
		 if(preString=='ഉപ') //ഉപാർച്ഛിതി
			{
	 		if(inChar2=='ഋ'||inChar=='ൠ') joiner='ാർ';  str1=preString;
			// else if (inChar2=='ലു') 	joiner='ാൽ'
			}  
		else if (inChar1=='ാ')
			{
			 if(inChar2=='എ'||inChar2=='ഏ'||inChar2=='ഐ')  joiner='ൈ' ;
 			if(inChar2=='ഒ'||inChar2=='ഓ'||inChar2=='ഔ')  joiner='ൌ' ;
			}  
		}

	else if (sel==4) //യൺ സന്ധി
		{
			if (inChar1=='ി'||inChar1=='ീ')
				{
				if(inChar2!=='ഇ'&&inChar2!=='ഈ') joiner='്യാ';
				}
			if(inChar1=='ു'||inChar1=='ൂ')
				{
				if(inChar2!=='ഉ'&&inChar2!=='ഊ') joiner='്വാ';
				}
			if(inChar1=='ൃ')
				{
				if(inChar2!=='ഋ')  joiner='്രാ';
				}
				//ളാകൃതി 			
		}	
	else if (sel==5) //അയാദി സന്ധി 
		{
			if(inChar1='ൗ'||inChar1=='ൌ') 
				{
					joiner='ായ';
				}
		}
	outPut(str1,joiner,str2);	
}



function outPut(str1,joiner,str2)
{
	var newString= str1.concat(joiner,str2);
	 alert(newString);
	 document.form1.outTB.value = newString;
}
		
