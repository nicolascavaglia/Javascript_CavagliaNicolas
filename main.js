function alquilar(cancha, horarios) {
    alert("Ok, estos son los horarios disponibles:");
  
    for (let i = 0; i < horarios.length; i++) {
      alert(horarios[i]);
    }
  
    let horarioElegido;
    let horarioValido = false;
  
    while (!horarioValido) {
      horarioElegido = prompt("Elige un horario escribiendo su número correspondiente (1-4)");
  
      if (horarioElegido >= 1 && horarioElegido <= 4) {
        horarioValido = true;
      } else {
        alert("Opción no válida, por favor elige un número del 1 al 4.");
      }
    }
  
    alert(`Has reservado la ${cancha} a las ${horarios[horarioElegido-1]}. Disfruta de tu partido!`);
  }
  
  let nombre = prompt("Ingresa tu nombre");
  let saludo = prompt(`Hola ${nombre}, ¿quieres reservar una cancha?`);
  
  if (saludo.toLowerCase() === "si") {
    let cancha = prompt("¿Qué cancha quieres reservar? (Cancha 1, Cancha 2, Cancha 3)");
  
    let horarios = ["OPCION 1: 8:00am - 9:00am", "OPCION 2: 9:00am - 10:00am", "OPCION 3: 10:00am - 11:00am", "OPCION 4: 11:00am - 12:00pm"];
  
    alquilar(cancha, horarios);
  
  } else {
    alert("Ok, Hasta luego, te esperamos pronto para jugar.")
  }
  

