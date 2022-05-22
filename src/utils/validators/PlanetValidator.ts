import { Validator } from "fluentvalidation-ts";
import { Planet } from "../../model/Planet";
import { dataType } from "../enums/dataTypes";
import { surfaceWater } from "../enums/surfaceWater";
import { textTypes } from "../enums/textTypes";
import { RegexExpression } from "./RegexExpression";

export class PlanetValidator extends Validator<Planet> {
  constructor() {
    super();

    this.ruleFor("nombre")
      .notNull()
      .withMessage("El valor no puede ser null")
      .notEmpty()
      .withMessage("El valor no puede estar vacio");

    this.ruleFor("periodo_rotacion")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must((periodo_rotacion) => typeof periodo_rotacion === dataType.number)
      .withMessage("El valor no puede ser string")
      .greaterThan(0)
      .withMessage("El valor no puede ser menor a 0");

    this.ruleFor("periodo_orbital")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must((periodo_orbital) => typeof periodo_orbital === dataType.number)
      .withMessage("El valor no puede ser string")
      .greaterThan(0)
      .withMessage("El valor no puede ser menor a 0");

    this.ruleFor("diametro")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must((diametro) => typeof diametro === dataType.number)
      .withMessage("El valor no puede ser string")
      .greaterThan(0)
      .withMessage("El valor no puede ser menor a 0");

    this.ruleFor("clima")
      .notNull()
      .withMessage("El valor no puede ser null")
      .notEmpty()
      .withMessage("El valor no puede estar vacio");

    this.ruleFor("gravedad")
      .notNull()
      .withMessage("El valor no puede ser null")
      .notEmpty()
      .withMessage("El valor no puede estar vacio");

    this.ruleFor("terreno")
      .notNull()
      .withMessage("El valor no puede ser null")
      .notEmpty()
      .withMessage("El valor no puede estar vacio");

    this.ruleFor("surperficie_agua")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must((surperficie_agua) =>
        Object.values(surfaceWater).includes(surperficie_agua)
      )
      .withMessage(
        "El valor ingresado no esta dentro de las opciones permitidas"
      );

    this.ruleFor("poblacion")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must((poblacion) => typeof poblacion === dataType.number)
      .withMessage("El valor no puede ser string")
      .must((poblacion) => Number.isInteger(poblacion))
      .withMessage("El valor no puede tener comas decimales")
      .greaterThan(0)
      .withMessage("El valor no puede ser menor a 0");

    this.ruleFor("residentes")
      .notNull()
      .withMessage("El valor no puede ser un array null")
      .must((residentes) => Array.isArray(residentes))
      .withMessage("El valor debe ser un array de tipo strings")
      .must(
        (residentes) =>
          residentes.filter((residente) => typeof residente !== dataType.string)
            .length === 0
      )
      .withMessage("Uno o más elementos del array no es un string")
      .must(
        (residentes) =>
          residentes.filter((residente) => residente.trim() === textTypes.empty)
            .length === 0
      )
      .withMessage("Uno o más elementos del array estan vacios")
      .must(
        (residentes) =>
          residentes.filter((residente) => {
            const match = residente
              .trim()
              .match(new RegExp(RegexExpression.uri));
            return match === undefined || match === null;
          }).length === 0
      )
      .withMessage(
        "Uno o más elementos del array residentes no esta en el formato URL correcto"
      );

    this.ruleFor("peliculas")
      .notNull()
      .withMessage("El valor no puede ser un array null")
      .must((peliculas) => Array.isArray(peliculas))
      .withMessage("El valor debe ser un array de tipo strings")
      .must(
        (peliculas) =>
          peliculas.filter((pelicula) => typeof pelicula !== dataType.string)
            .length === 0
      )
      .withMessage("Uno o más elementos del array no es un string")
      .must(
        (peliculas) =>
          peliculas.filter((pelicula) => {
            const match = pelicula
              .trim()
              .match(new RegExp(RegexExpression.uri));
            return match === undefined || match === null;
          }).length === 0
      )
      .withMessage(
        "Uno o más elementos del array peliculas no esta en el formato URL correcto"
      );

    this.ruleFor("creado")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must(
        (creado) => new Date(creado).toDateString() !== textTypes.invalidDate
      )
      .withMessage(
        "El valor string no esta en formato date-time (Ejm. 2014-12-09T13:50:49.641000Z) "
      );

    this.ruleFor("editado")
      .notNull()
      .withMessage("El valor no puede ser null")
      .must(
        (editado) => new Date(editado).toDateString() !== textTypes.invalidDate
      )
      .withMessage(
        "El valor string no esta en formato date-time (Ejm. 2014-12-09T13:50:49.641000Z) "
      );

    this.ruleFor("url")
      .notNull()
      .withMessage("El valor no puede ser null")
      .notEmpty()
      .withMessage("El valor no puede estar vacio")
      .matches(new RegExp(RegexExpression.uri))
      .withMessage("El valor no tiene el formato URL correcto");
  }
}
