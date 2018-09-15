[Code](https://github.com/nicolasserrano/practicaDatos) - [View and execute](https://nicolasserrano.github.io/practicaDatos)

# Referencias
- [Editor hexadecimal](https://hexed.it/)
- [Tabla ASCII](https://ascii.cl/)
- [JavaScript](https://nicolasserrano.github.io/CS/JavaScript/JavascriptOnePage.pdf)
- [XML DOM](https://www.w3schools.com/xml/dom_intro.asp)
- [JSON](https://nicolasserrano.github.io/CS/JavaScript#json)

# Practicas Datos

Instrucciones para las practicas:

[practica csv1](practicas/csv1)

[practica csv2](practicas/csv2)

[practica csv3](practicas/csv3)

[practica csv4](practicas/csv4)

[practica xml1](practicas/xml1)

[practica xml2](practicas/xml2)

[practica rss](practicas/rss)

[practica json1](practicas/json1)

[practica json2](practicas/json2)

[practica api](practicas/api)

[practica webScraping1](practicas/webScraping1)

Opcional con Python: [practica webScraping2](practicas/webScraping2)

[practica webScraping3](practicas/webScraping3)

[practica visualizacion1](practicas/visualizacion1)

[practica visualizacion2](practicas/visualizacion2)

[practica visualizacion3](practicas/visualizacion3)

# Ejemplos de origines de datos
- [Datos abiertos Donostia](https://www.donostia.eus/datosabiertos/)
- [Open Data Euskadi](http://opendata.euskadi.eus/inicio/)
- [Open data initiative of the Government of Spain](http://datos.gob.es/en)
- [EU Open Data Portal](https://data.europa.eu/euodp/en/home)
- [Temperaturas en xml y WebScraping](http://www.aemet.es/es/eltiempo/prediccion/espana?w=13)

# Ejemplos de API
- [Rapid API](https://rapidapi.com/)

# Coordenadas geográficas
- [Coordenadas de poblaciones](https://www.businessintelligence.info/assets/listado-longitud-latitud-municipios-espana.html)
- Funcion JavaScript para leer coordenadas
<pre>
function leerPoblaciones() {
    villagesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=4;i<villagesTR.length;i++) {
      long = villagesTR[i].children[4].textContent.replace(',','.');
      lat  = villagesTR[i].children[3].textContent.replace(',','.');
      hab = villagesTR[i].children[6].textContent;
      str += "[" + long
      str += "," + lat
      str += ",'" + villagesTR[i].children[2].textContent.replace("'"," ").replace("'"," ").replace("\n","") + " " + long + " " + lat + "', " + hab + "],"
      str += "\n"
    }
    str += "[,,]]"
    return str;
}
</pre>

Función Excel para crear JSON: <textarea>
=CONCATENATE("[";SUBSTITUTE(E4;",";".");",";SUBSTITUTE(D4;",";".");",'";SUBSTITUTE(C4;"'";" ");"'],")</textarea>

- [Poblaciones en ScatterChart](geocoordenadas/ScatterChart1.html)

## Coordenadas UTM
- [UTM coordinates](https://upload.wikimedia.org/wikipedia/commons/e/ed/Utm-zones.jpg)
- [Geoplaner](https://www.geoplaner.com/)
- [Gipuzkoa Spatial Data Infrastructure](https://b5m.gipuzkoa.eus/url5000/index.php?lengua=0)
- [Conversor coordenadas](https://github.com/TimothyGu/utm) - [Funciones JS](geocoordenadas/utm.html)

