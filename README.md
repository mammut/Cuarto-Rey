Cuarto Rey
==========

Juego alcohólico creado en JavaScript, CSS3, HTML5 principalmente para iPhone.

  - Configuración para cada carta del mazo
  - Guarda la configuración para cada sesión del juego
  -

Usa el Plugin jQuery Cookie de [carhartl] para guardar las configuraciónes

  [carhartl]: https://github.com/carhartl/jquery-cookie 


El Juego
========

1. Requisitos
------------
 - 1 Mazo de cartas (sin Joker)
 - Alcohol
 - Vasos para cada jugador
 - Un vaso vacío en el centro

2. Instrucciones
----------------

Cada jugador debe tener su vaso lleno de algún trago a elección, cuando un jugador quede con el vaso vacío este deberá rellenarlo.

Deben poner el mazo de cartas al centro de los jugadores y deberán turnarse para sacar una carta a la vez cada uno y la pondrá boca arriba al lado del mazo de cartas de manera que todos vean que carta saco el jugador. (o pasarse el iPhone 'sacando' cartas por cada turno).

Cada carta tiene un significado que los jugadores deberán obedecer para el buen transcurso del juego.

El significado de las cartas se definen en la configuración del juego.

El juego viene cargado con significados por defecto:

- **As: *Regla*** (el jugador crea una regla que todos los jugadores deben obedecir, si alguien la viola, Toma. La regla dura hasta que a otro jugador le aparezca un As)
- **1: *Toma uno*** (el jugador toma un sorbo de su trago)
- **2: *Toma dos*** (el jugador toma dos sorbos de su trago)
- **3: *Toma tres*** (el jugador toma tres sorbos de su trago)
- **4: *Toma cuatro*** (el jugador toma cuatro sorbos de su trago)
- **5: *Da 2*** (el jugador reparte 2 sorbos)
- **6: *Da 3*** (el jugador reparte 3 sorbos)
- **7: *Da 4*** (el jugador reparte 4 sorbos)
- **8: *Historia*** ( cada participante debe agregar UNA palabra a la anterior para crear una historia ejemplo

 - A: habia
 - B: habia UNA
 - C: "habia una VEZ"
 - D: -"habia una vez UNA"

- **9: *Pulgar*** (el jugador en un momento a su elección coloca su pulgar sobre la orilla de la mesa luego el resto de los jugadores deben hacer lo mismo. El último en colocar su pulgar Toma un sorbo)

- **10: *Cascada*** (el jugador que saco la carta comienza a tomar, luego el jugador a su izquierda y así hasta que todos los jugadores esten tomando. Nadie puede parar de tomar hasta que el jugador a su derecha (el anterior) no pare de tomar.

- **Jota: *Cultura*** (El jugador que saco la carta elige un tema, por ejemplo marcas de autos. Luego todos deben mencionar una marca de autos, el que repite o se equivoca Toma)

- **Quina: *Rima*** (el jugador dice una palabra y todos siguen con palabras que rimen, el que no rima Toma)

- **Kaiser: *Shot*** (El jugador agrega al vaso central 1/4 del total de este. El que saca el último Kaiser agrega su porción y luego debe tomar el vaso completo como un shot)

Toos estos son ejemplos. Pueden inventarse mas y guardarlos a gustos en la configuración del juego. (mas ejemplos: [cuarto rey])

[Cuarto Rey]: http://www.juegosparatomar.com/2008/12/combinado.html

____
El alcoholismo es una enfermedad, debe ser tratada con seriedad y respeto. El consumo de alcohol debe ser consciente y cuidado.