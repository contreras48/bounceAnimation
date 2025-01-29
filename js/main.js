const jugadores = document.querySelectorAll('.among-us > .ball');
console.log(jugadores.length);

jugadores.forEach(jugador => {
  jugador.addEventListener('click', 
    function(e){
      const antecesor = e.target.closest('.among-us');
      const rol = antecesor.querySelector('h1');
      
      const h1 = document.querySelectorAll('.among-us > h1');

      h1.forEach(e => {
        e.classList.remove('visible');
      })

      rol.classList.add('visible');
    })
})