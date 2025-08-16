/*function convertirMoneda() {
    let euros = document.getElementById('eur').value;
    let moneda = document.getElementById('moneda').value;
    let resultado = document.getElementById('result');
    
    
    // Valor = número
    if (isNaN(euros)) {
      console.log("Introduzca un número.");
      return;
    }
    
    euros = parseFloat(euros);
    let diferenciaMoneda;
    
    if (moneda === 'usd') {
      diferenciaMoneda = 1.1;
    }else if (moneda === 'gbp') {
      diferenciaMoneda = 0.85;
    }else if (moneda === 'yen') {
      diferenciaMoneda = 158;
    }
    
    let conversion = euros * diferenciaMoneda;
    
    // Mostrar el resultado
    resultado.textContent = `El cambio de moneda es un total de: ${conversion.toFixed(2)} `;
}

  window.onload = function() {
    document.getElementById('convert').addEventListener('click', convertirMoneda);
  }; */

  const carlos = new Map ();

  carlos.set(`firstName`, `Carlos`);
  carlos.set(`secondName `, `Quesada`);
  carlos.set(`age`, `25`);
  carlos.set(`birthady`, new Date('10/12/1998'));
  carlos.set(`peso`, `73`);
  carlos.set(`altura`, `176`);
  carlos.set(`hasJob`, `true`);

console.log (carlos);
