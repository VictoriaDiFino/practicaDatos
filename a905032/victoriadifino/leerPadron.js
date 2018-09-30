function leerPadron() {
    nt=document.getElementsByTagName('table').length
    villagesTR = document.getElementsByTagName('table')[nt-1].getElementsByTagName('tr')
    str='[';
    str += "['Nacionalidad','Hombres','Mujeres'],"
    str += "\n"
    for (i=1;i<villagesTR.length;i++) {
      nac = villagesTR[i].children[0].textContent;
      h  = villagesTR[i].children[1].textContent;
      m = villagesTR[i].children[2].textContent;
      str += "['" + nac
      str += "'," + h
	  str += "," + m
	  str += "]"
	  str += ","
      str += "\n"
	  
    }
	str +=']';
    return str;
}