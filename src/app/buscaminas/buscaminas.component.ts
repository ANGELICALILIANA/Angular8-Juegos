import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { element } from 'protractor';

@Component({
  selector: 'app-buscaminas',
  templateUrl: './buscaminas.component.html',
  styleUrls: ['./buscaminas.component.scss']
})
export class BuscaminasComponent implements OnInit {

  matriz = [];
  columnas;
  filas;
  col: number;
  fil: number;
  cantidadBombas = 0;
  variableClases = '';
  color = '';
  matrizAsteriscos = [];
  perdio = false;

  constructor() { }

  ngOnInit() {

    this.columnas = "";
    this.filas = "";
  }

  /**
   * Al hacer click genera el tablero con bombas
   */
  generarTablero() {

    this.perdio = false;
    this.cantidadBombas = 0;
    this.matriz = [];
    this.matrizAsteriscos = [];

    for (var i = 0; i < this.filas; i++) {
      var aux1 = [];
      var aux2 = [];
      for (var j = 0; j < this.columnas; j++) {
        aux2.push('*');
        if (this.generarNumeroAleatorio(99, 0) < 10) {
          aux1.push('X');
          this.cantidadBombas++;
        }
        else {
          aux1.push('O');
        }
      }
      this.matriz.push(aux1);
      this.matrizAsteriscos.push(aux2);
    }

    console.log(this.matriz);

    console.log(this.cantidadBombas);
  }

  /**
   * Genera un número aleatorio con los parámetros asignados
   * @param numMax Número aleatorio máximo
   * @param numMin Número aleatorio minimo
   */
  generarNumeroAleatorio(numMax, numMin) {

    var NumeroBombas
    NumeroBombas = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return NumeroBombas;
  }

  /**
   * Cambia el color del elemento y el elemento al dar click
   */
  cambiarColorClick(i, j) {

    var indice;

    let auxArrMattizAste = []
    let auxArrMatrizN = []
    auxArrMatrizN = this.matriz[i]
    auxArrMattizAste = this.matrizAsteriscos[i]

    if (this.perdio == false && auxArrMattizAste[j] == '*') {
      auxArrMattizAste[j] = auxArrMatrizN[j]
      this.matrizAsteriscos[i] = auxArrMattizAste

      if (auxArrMatrizN[j] == 'X') {
        console.log("Superior " + auxArrMatrizN[j - 1], "Posicion " + auxArrMatrizN[j], "Inferior " + auxArrMatrizN[j + 1]);
        
        this.perdio = true;
      }
    }
  }


}



