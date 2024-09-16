/**
 * Escriba una función que, cuando se le da una URL como una cadena, analice solo el nombre de dominio y lo devuelva como una cadena. Por ejemplo:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

// Mi solución

function domainName(url) {
  url = url.replace("https://", "").replace("http://", "").replace("www.", "");
  return url.split(".")[0];
}
