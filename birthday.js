exports.action = function(data){

try{
var reg="/"+data.birthday+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp) ; console.log(temp)
var phrase = temp[1].trim() //; 
console.log("on envoie : ",phrase)
 
var birthday = ""
var persons=['laurent','10.12.2020','fred','29.02.2000','kévin','11.12.2020']

var indice = persons.findIndex(persons => persons === phrase);
console.log(indice);
console.log(persons[indice]);
console.log(persons[indice+1]);
console.log("nb dans la liste : ",persons.length)

var first = persons[0];
var last = persons[persons.length - 1];
persons.forEach(function(item, index, array) {
  console.log(item, index);
});
console.log("Jarvis doit dire " ,persons[indice]+' '+persons[indice+1])

var moment = require('moment');moment.locale('fr');
var y=moment().format("YYYY")
var d=moment().format("DD")
var m=moment().format("MM")

var a=moment([y,m,d])
var a1=moment([d,m,y])
console.log([y,m,d])

y1=persons[indice+1].split('.')[2]
d1=persons[indice+1].split('.')[0]
m1=persons[indice+1].split('.')[1]

var b = moment([y1, m1, d1]);
var b1 = moment([d1,m1,y1]);

console.log(a.diff(b, 'days')," jours vivant")
console.log(a.diff(b, 'month')," mois vivant")
console.log(a.diff(b, 'year')," années vivant")

var temp=persons[indice+1].split(".")

console.log(temp[0],'jour')
console.log(temp[1],'mois')
console.log(temp[2],'années');

temp[1] = temp[1].replace(/01/, 'Janvier').replace(/02/, 'Février').replace(/03/, 'Mars').replace(/04/, 'Avril').replace(/05/, 'Mai').replace(/06/, 'Juin').replace(/07/, 'Juillet').replace(/08/, 'Août').replace(/09/, 'Septembre').replace(/10/, 'Octobre').replace(/11/, 'Novembre').replace(/12/, 'Décembre');


if (data.info == "date") { var birthday = persons[indice]+" est née le : "+persons[indice+1];}

if (data.info == "année") { var birthday = persons[indice]+" est née en "+temp[2];}

if (data.info == "age") { if(a < b) { var birthday = persons[indice]+ " aura " + a.diff(b, 'year') + " ans cette année";} 
						  if(a > b) { var birthday = persons[indice]+ " a eu " + a.diff(b, 'year') + " ans cette année";} }

if (data.info == "jour") {

mois=new Array(13);
jours=new Array(7);
mois[1]=0;mois[2]=3;mois[3]=3;mois[4]=6;mois[5]=1;mois[6]=4;mois[7]=6;mois[8]=2;mois[9]=5;mois[10]=0;mois[11]=3;mois[12]=5;
jours[0]="Dimanche";jours[1]='Lundi';jours[2]="Mardi";jours[3]="Mercredi";jours[4]="Jeudi";jours[5]="Vendredi";jours[6]="Samedi";

var d=temp[0];
d=eval(d);
var m=temp[1].replace(/Janvier/, '01').replace(/Février/, '02').replace(/Mars/, '03').replace(/Avril/, '04').replace(/Mai/, '05').replace(/Juin/, '06').replace(/Juillet/, '07').replace(/Août/, '08').replace(/Septembre/, '09').replace(/Octobre/, '10').replace(/Novembre/, '11').replace(/Décembre/, '12');
m=eval(m);
var y=temp[2];
y=eval(y);
y=y-100*Math.floor(y/100);
var rep=eval(y+Math.floor(y/4)+d+mois[m]);
var rep=rep-Math.floor(rep/7)*7;
if (2000) 
	var birthday = persons[indice]+ " est née un " +jours[rep];
else
	{ if (m>2) rep+=1; 
	var rep=(rep+5)-Math.floor((rep+5)/7)*7;
	var birthday = persons[indice]+ " est née un "+jours[rep];}

}

 speak(birthday)
 
 	function speak(birthday) {
		var nomduplugin = "birthday"
			var valeurduspeak = birthday


JarvisIASpeech(valeurduspeak)
		return 
	}
	console.log(birthday)
}catch(err){console.log(err);return }
}
