function removeElem(elem){
	elem.parentNode.removeChild(elem);
}

function deleteInpostLinks(){
	//2ch.hk
	for(var i = 0; document.getElementsByClassName('post-reply-link').length > i; i++){
		if(document.getElementsByClassName('post-reply-link')[i].parentNode.className != 'ABU-refmap' && document.getElementsByClassName('post-reply-link')[i].parentNode.className != 'de-refmap'){
			document.getElementsByClassName('post-reply-link')[i].parentNode.removeChild(document.getElementsByClassName('post-reply-link')[i]);
		}
	}
	//inach
	for(var i = 0; document.links.length > i; i++){
		var text = document.links[i].innerText;
		var href = document.links[i].href;
		if(href.split("#")[1] == text.split(">")[2] && text[0] == '>' && text[1] == '>' && document.links[i].className != 'de-reflink'){
			document.links[i].parentNode.removeChild(document.links[i]);
		}
	}
	for(var i = 0; document.getElementsByClassName('de-opref').length > i; i++){
		removeElem(document.getElementsByClassName('de-opref')[i]);
		i--;
	}
}
deleteInpostLinks();
var poststodelete = new Array();
for(var i = 0; document.getElementsByClassName('post-reply-link').length > i; i++){
	var curpost = document.getElementById("post-"+document.getElementsByClassName('post-reply-link')[i].href.split("#")[1]);
	newHTML = '<span id="curn" style="padding-left:20px">' +curpost.innerHTML + '</span>';
	poststodelete[poststodelete.length] = curpost;
	document.getElementsByClassName('post-reply-link')[i].parentNode.parentNode.innerHTML += newHTML;
	var links = document.getElementById("curn").getElementsByClassName('post-reply-link');
	document.getElementById("curn").id="curnpadding";
	deleteInpostLinks();
}

for(var i = 0; document.getElementsByClassName('de-reflink').length > i; i++){
	var curpost = document.getElementById("reply"+document.getElementsByClassName('de-reflink')[i].href.split("#")[1]).parentNode.parentNode.parentNode;
	newHTML = '<span id="curn" style="padding-left:20px; border: 1px solid red;">' +curpost.innerHTML + '</span>';
	poststodelete[poststodelete.length] = curpost;
	document.getElementsByClassName('de-reflink')[i].parentNode.parentNode.innerHTML += newHTML;
	var links = document.getElementById("curn").getElementsByClassName('de-reflink');
	document.getElementById("curn").id="curnpadding";
	deleteInpostLinks();
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
