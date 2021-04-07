class maquines{
    constructor(maquina, procediment, seguretat, manteniment){
        this.maquina = maquina;
        this.procediment = procediment;
        this.seguretat = seguretat;
        this.manteniment = manteniment;
    }

    get theHtml(){
        return this.html();
    }
    
    html(){
             return `<div class="maquina">
                    <h3>${this.maquina}</h3>
                    <a href="${this.procediment}" 
                        target="_blank">Fitxa de procediment</a>
                    <a href="${this.seguretat}" 
                        target="_blank">Fitxa de seguretat</a>
                    <a href= ${this.manteniment}
                        target="_blank">Manteniment</a>
                </div>`;
    }
}

var GTO = new maquines("CTO", 
                        "https://drive.google.com/file/d/1bSgy00vgCpUdNULEy-PANqz7PIMFeJHO/view?usp=sharing",
                        "https://drive.google.com/file/d/1_gwV_Je8-9fsReQ22E2ixIGHkKy3bwXX/view?usp=sharing",
                        "https://drive.google.com/file/d/1Ni5gCDNJyftCqqvow0Z4aGCaONjd413c/view?usp=sharing");

var Guillotina = new maquines("Guillotina", 
                        "https://drive.google.com/file/d/11vmIHXggtJXkyrtW_FLnceh4c6oitmXO/view?usp=sharing",
                        "https://drive.google.com/file/d/1dGJrz6F2Mpmmbug3ZflWrmVkn0Dw0MHz/view?usp=sharing",
                        "https://drive.google.com/file/d/1e7nBXrYRiBySNNmezCawAx8ozxgeG4ig/view?usp=sharing");

var Plotter = new maquines("Plotter de tall", 
                        "https://drive.google.com/file/d/11PW2RHmlv-oGM8zk1KUXeynG9nPo2mUb/view?usp=sharing",
                        "https://drive.google.com/file/d/1sDkOLrG8s6UXHuD-eVeg5cOxwYcH7EJv/view?usp=sharing",
                        "https://drive.google.com/file/d/1e7nBXrYRiBySNNmezCawAx8ozxgeG4ig/view?usp=sharing");

var Speedmaster = new maquines("Speedmaster", 
                        "https://drive.google.com/file/d/1NRL3s0X-xHWj7Aq5jVaBwDIdyTFBWafi/view?usp=sharing",
                        "https://drive.google.com/file/d/1uocOWUa_tKELl0TllJxHQD_V1xrPivix/view?usp=sharing",
                        "https://drive.google.com/file/d/1KCux-9_-R7Qer-IkMGYDz_yMPyyroGt7/view?usp=sharing");

var content = document.getElementById("content");
var allMachines = [GTO.theHtml, Guillotina.theHtml, Plotter.theHtml, Speedmaster.theHtml]


for(let i = 0; i<allMachines.length; i++){
    content.innerHTML += allMachines[i];
}


