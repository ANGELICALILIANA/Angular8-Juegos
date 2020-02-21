import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { __importDefault } from 'tslib';
import { disableDebugTools } from '@angular/platform-browser';
import { url } from 'inspector';

@Component({
  selector: 'app-piedra-single-player',
  templateUrl: './piedra-single-player.component.html',
  styleUrls: ['./piedra-single-player.component.scss']
})

export class PiedraSinglePlayerComponent implements OnInit {

  opcionesJuego = [];
  opcionSeleccionada;
  imagenAleatoria = { Nombre: "Nada", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Piedra.png" };
  resultadoJuego = "";


  constructor() {
  }

  ngOnInit() {

    this.opcionesJuego.push({ Nombre: "Piedra", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Piedra.png" });
    this.opcionesJuego.push({ Nombre: "Papel", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Papel.png" });
    this.opcionesJuego.push({ Nombre: "Tijera", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Tijera.png" });
    this.opcionesJuego.push({ Nombre: "Lagarto", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Lagarto.png" });
    this.opcionesJuego.push({ Nombre: "Spock", URL: "../../assets/Imagenes_Piedra_Papel_Tijera_Lagarto_Spock/Spock.png" });

    this.opcionSeleccionada = this.opcionesJuego[0]

    document.getElementById("imagenMaquina").style.visibility = "hidden"

  }

  jugarMaquina() {

    this.imagenAleatoria = this.opcionesJuego[Math.floor(Math.random() * (4 - 0 + 1)) + 0];

    document.getElementById("imagenMaquina").style.visibility = "visible";

    switch (this.opcionSeleccionada.Nombre) {

      case this.imagenAleatoria.Nombre:
        this.resultadoJuego = "Empate";
        break;

      case "Piedra":
        if (this.imagenAleatoria.Nombre == "Lagarto" || this.imagenAleatoria.Nombre == "Tijera") {
          this.resultadoJuego = "Ganador";
        }
        else {
          this.resultadoJuego = "Perdedor";
        }
        break;

      case "Papel":
        if (this.imagenAleatoria.Nombre == "Piedra" || this.imagenAleatoria.Nombre == "Spoke") {
          this.resultadoJuego = "Ganador";
        }
        else {
          this.resultadoJuego = "Perdedor";
        }
        break;

      case "Tijera":
        if (this.imagenAleatoria.Nombre == "Papel" || this.imagenAleatoria.Nombre == "Lagarto") {
          this.resultadoJuego = "Ganador";
        }
        else {
          this.resultadoJuego = "Perdedor";
        }
        break;

      case "Lagarto":
        if (this.imagenAleatoria.Nombre == "Papel" || this.imagenAleatoria.Nombre == "Spoke") {
          this.resultadoJuego = "Ganador";
        }
        else {
          this.resultadoJuego = "Perdedor";
        }
        break;

      case "Spock":
        if (this.imagenAleatoria.Nombre == "Piedra" || this.imagenAleatoria.Nombre == "Tijera")
          this.resultadoJuego = "Ganador";
        else 
          this.resultadoJuego = "Perdedor";
        break;
    }

    if(this.resultadoJuego == "Ganador")
      document.getElementById("textoResultado").style.color = "#13C313";
    else if(this.resultadoJuego == "Perdedor")
      document.getElementById("textoResultado").style.color = "#F97704";
    else
      document.getElementById("textoResultado").style.color = "#05C1BE";
  }

  ocultarImagenSelect() {
    document.getElementById("imagenMaquina").style.visibility = "hidden";
  }


}



