/*
 Segun tu ingreso te informa que prestamo podes sacar y te da la opcion de seleccionar en 12,24 y 36 cuotas para despues informarte como te queda el plan, en caso de no poner ESC o un monto cuando te lo pide saldra error.
 */


let presupuestoCliente;
const montoPrestamoBajo = 100000;
const montoPrestamoMedio = 250000;
const montoPrestamoAlto = 450000;
let montoCuotas;
let numeroOpciones;
const tasaInteresAnual = 60;

do {

    presupuestoCliente = prompt("Ingrese el ingreso neto de su sueldo o ESC para salir:")

    if (presupuestoCliente != "ESC") {
        presupuestoCliente = parseInt(presupuestoCliente);


        if (presupuestoCliente < 30000) {

            alert("Su sueldo no es suficiente para acceder a nuestro plan volvera al inicio.");

        } else if ((presupuestoCliente > 30000) && (presupuestoCliente < 70000)) {

            numeroOpciones = prompt("Su presupuesto es bajo puede acceder a un prestamo de $" + montoPrestamoBajo + " seleccione entre 12, 24 y 36 cuotas para ver los planes:");
            numeroOpciones = parseInt(numeroOpciones);

            switch (numeroOpciones) {

                case 12:

                    montoCuotas = ((montoPrestamoBajo * tasaInteresAnual) / 100 + montoPrestamoBajo) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoBajo} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 24:

                    montoCuotas = ((montoPrestamoBajo * (tasaInteresAnual * 2)) / 100 + montoPrestamoBajo) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoBajo} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 36:

                    montoCuotas = ((montoPrestamoBajo * (tasaInteresAnual * 3)) / 100 + montoPrestamoBajo) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoBajo} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                default:

                    alert("Comando invalido");

            }


        } else if ((presupuestoCliente > 70000) && (presupuestoCliente < 150000)) {

            numeroOpciones = prompt("Su presupuesto es medio puede acceder a un prestamo de $" + montoPrestamoMedio + " seleccione entre 12, 24 y 36 cuotas para ver los planes:");
            numeroOpciones = parseInt(numeroOpciones);

            switch (numeroOpciones) {

                case 12:

                    montoCuotas = ((montoPrestamoMedio * tasaInteresAnual) / 100 + montoPrestamoMedio) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoMedio} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 24:

                    montoCuotas = ((montoPrestamoMedio * (tasaInteresAnual * 2)) / 100 + montoPrestamoMedio) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoMedio} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 36:

                    montoCuotas = ((montoPrestamoMedio * (tasaInteresAnual * 3)) / 100 + montoPrestamoMedio) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoMedio} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                default:

                    alert("Comando invalido");

            }

        } else if (presupuestoCliente >= 150000) {

            numeroOpciones = prompt("Su presupuesto es alto puede acceder a un prestamo de $" + montoPrestamoAlto + " seleccione entre 12, 24 y 36 cuotas para ver los planes:");
            numeroOpciones = parseInt(numeroOpciones);

            switch (numeroOpciones) {

                case 12:

                    montoCuotas = ((montoPrestamoAlto * tasaInteresAnual) / 100 + montoPrestamoAlto) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoAlto} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 24:

                    montoCuotas = ((montoPrestamoAlto * (tasaInteresAnual * 2)) / 100 + montoPrestamoAlto) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);


                    alert(`Su prestamo de $${montoPrestamoAlto} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                case 36:

                    montoCuotas = ((montoPrestamoAlto * (tasaInteresAnual * 3)) / 100 + montoPrestamoAlto) / numeroOpciones;
                    montoCuotas = parseInt(montoCuotas);

                    alert(`Su prestamo de $${montoPrestamoAlto} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${montoCuotas} `);
                    break;

                default:

                    alert("Comando invalido");
            }
        }else{

            alert("Comando invalido");
        }
    }
} while (presupuestoCliente != "ESC")