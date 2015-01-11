function deleteInpostLinks(){

for(var i = 0; document.links.length> i; i++){
	var l = document.links[i];
		if(l.parentNode.tagName == "P" || l.parentNode.tagName == "p"){
			 l.parentNode.removeChild(l);
		}
	}
}
deleteInpostLinks();
var poststodelete = new Array();
for(var i = 0; document.getElementsByClassName('de-reflink').length > i; i++){
	var curpost = document.getElementById("post_"+document.getElementsByClassName('de-reflink')[i].href.split("#")[1]);
	newHTML = '<span id="curn" style="padding-left:20px; border: 1px solid black">' +curpost.innerHTML + '</span>';
	poststodelete[poststodelete.length] = curpost;
	document.getElementsByClassName('de-reflink')[i].parentNode.parentNode.parentNode.innerHTML += newHTML;
	var links = document.getElementById("curn").getElementsByClassName('de-reflink');
	document.getElementById("curn").id="curnpadding";
	//deleteInpostLinks();
}
//удаление дублирующихся постов
for(var i = 0; poststodelete.length > i; i++){
	if(typeof poststodelete[i].parentNode != 'undefined' &&  poststodelete[i].parentNode != null){
	poststodelete[i].parentNode.removeChild(poststodelete[i]);
	}
}

//удаление >> ссылок
for(var i = 0; document.getElementsByClassName('ABU-refmap').length > i; i++){
document.getElementsByClassName('ABU-refmap')[i].parentNode.removeChild(document.getElementsByClassName('ABU-refmap')[i]);
i--;
}
for(var i = 0; document.getElementsByClassName('de-refmap').length > i; i++){
document.getElementsByClassName('de-refmap')[i].parentNode.removeChild(document.getElementsByClassName('de-refmap')[i]);
i--;
}

//Удаление лишних переносов строки
for(var i = 0; document.getElementsByClassName('post-message').length > i; i++){
document.getElementsByClassName('post-message')[i].innerHTML = document.getElementsByClassName('post-message')[i].innerHTML.replace('<br>','')
}

//скрытие рекламы
for(var i = 0; document.getElementsByClassName('rekl').length > i; i++){
document.getElementsByClassName('rekl')[i].parentNode.removeChild(document.getElementsByClassName('rekl')[i]);
i--;
}
