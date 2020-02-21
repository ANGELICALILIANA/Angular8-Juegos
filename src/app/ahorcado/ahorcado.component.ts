import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  palabra;
  lineasPalabra;
  textoVictoria;
  letraIngresada;
  juegoTerminado;
  teclado = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  busquedaTeclado;

  constructor() { }

  ngOnInit() {

    this.palabra = "gato";
    this.lineasPalabra = "";
    this.textoVictoria = "En juego...";
    this.juegoTerminado = false;

    this.lineasPalabra = "";
    for (var i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] != " ")
        this.lineasPalabra += "-";
      else
        this.lineasPalabra += "_";
    }

    this.busquedaTeclado = "";

  }

  /**
   * Corroborar la letra que ha sido ingresada
   * @param k 
   */
  validarLetra(letra) {

    this.busquedaTeclado = "";

    this.busquedaTeclado = letra; // Variable quitar

    console.log(letra);

    if (!this.juegoTerminado && this.busquedaTeclado != "") {

      var indices = [];
      var auxLineasPalabra = "";
      var posicionLetra;
      var j = 0;

      posicionLetra = this.palabra.indexOf(this.busquedaTeclado);

      while (posicionLetra != -1) {
        indices.push(posicionLetra);
        posicionLetra = this.palabra.indexOf(this.busquedaTeclado, posicionLetra + 1);
      }

      auxLineasPalabra = this.lineasPalabra;

      this.lineasPalabra = "";

      for (var i = 0; i < this.palabra.length; i++) {
        if (i != indices[j])
          this.lineasPalabra += auxLineasPalabra[i];
        else {
          this.lineasPalabra += this.busquedaTeclado;
          j++;
        }
      }

      if (!this.lineasPalabra.includes("-")) {
        this.juegoTerminado = true;
        this.textoVictoria = "Gano";
      }
    }

    this.busquedaTeclado = "";
  }

  /**
   * Se usa para inciar un nuevo Juego
   */
  iniciarNuevoJuego() {

    this.ngOnInit();
  }


}
