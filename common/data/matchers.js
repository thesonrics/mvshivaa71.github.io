window.matchers = [

    /* * * * * Captain abilities * * * * */

    {
        name: 'Capitanes potenciadores de tipo',
        target: 'captain',
        matcher: /Aumenta.+ (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Capitanes potenciadores de clase',
        target: 'captain',
        matcher: /Aumenta.+ (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },

    {
        name: 'Capitanes potenciadores de ATK',
        target: 'captain',
        matcher: /Aumenta.+ ATK/i
    },

    {
        name: 'Capitanes potenciadores de HP',
        target: 'captain',
        matcher: /Aumenta (la HP|el ATK y la HP|el ATK, la HP).+(de los personajes|de todos los personajes)|Aumenta.+y su HP/i
    },

    {
        name: 'Capitanes potenciadores de RCV',
        target: 'captain',
        matcher: /Aumenta (el RCV|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV).+(de los personajes|de todos los personajes)|Aumenta.+y su RCV/i
    },

    {
        name: 'Capitanes potenciadores de especiales',
        target: 'captain',
        matcher: /Aumenta.+daño.+especiales/i
    },

    {
        name: 'Capitanes 2x ATK y HP',
        target: 'captain',
        matcher: /Aumenta.+ (ATK y la HP|ATK, HP).+ 2x/i
    },

    {
        name: 'Capitanes 2x ATK y RCV',
        target: 'captain',
        matcher: /Aumenta.+ (ATK y el RCV|ATK, RCV).+ 2x/i
    },

    {
        name: 'Capitanes 2.5x ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 2.5x/i
    },

    {
        name: 'Capitanes 2.75 ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 2.75x/i,
        include: [ 529, 530, 668, 669 ]
    },

    {
        name: 'Capitanes 3x ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 3x/i
    },

    {
        name: 'Capitanes de ATK basado en HP',
        target: 'captain',
        matcher: /Aumenta.+ATK.+proporcionalmente/i
    },

    {
        name: 'Capitanes con patrón de ataque',
        target: 'captain',
        matcher: /(tras hacer|siguiendo un orden)/i
    },
    
    {
        name: 'Capitanes de orbes favorables',
        target: 'captain',
        matcher: /Hace que los orbes ((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\])|((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]) y (STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]))).+ orbes favorables/i
    },

    {
        name: 'Multiplicadores de cadena',
        target: 'captain',
        matcher: /Aumenta.+multiplicador de cadena/i
    },

    {
        name: 'Reductores de cooldown',
        target: 'captain',
        matcher: /Reduce.+especiales/i
    },

    {
        name: 'Reductores de daño',
        target: 'captain',
        matcher: /Reduce (cualquier )?.+daño.+ recibido/i
    },

    {
        name: 'Recuperadores HP',
        target: 'captain',
        matcher: /Recupera/i
    },

    {
        name: 'Tanques',
        target: 'captain',
        matcher: /Reduce (cualquier )?.+daño.+si.+HP.+99/i
    },

    {
        name: 'Zombies',
        target: 'captain',
        matcher: /Sobrevives/i
    },
    
    {
        name: 'Daño al final del turno',
        target: 'captain',
        matcher: /hace.+al final de cada turno/i
    },

    /* * * * * especiales * * * * */

    {
        name: 'Potenciadores de tipo',
        target: 'special',
        matcher: /Aumenta.+ (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,].+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Potenciadores de clase',
        target: 'special',
        matcher: /Aumenta.+ (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },

    {
        name: 'Especiales 1.5x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 1.5x/i
    },

    {
        name: 'Especiales 1.75x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 1.75x/i
    },

    {
        name: 'Especiales 2x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 2x/i
    },

    {
        name: 'Potenciadores de ATK condicionales',
        target: 'special',
        matcher: /Aumenta.+ ATK.+contra.+enemigos/i
    },

    {
        name: 'Potenciadores de ATK condicionales (2)',
        target: 'special',
        matcher: /(si en ese turno.+Aumenta.+ATK|Una vez lanzado el especial.+Aumenta.+ATK)/i
    },
	
	{
        name: 'Potenciadores Afinidad de Tipo',
        target: 'special',
        matcher: /Aumenta la Afinidad de Tipo/i
    },

    {
        name: 'Fijadores de orbes',
        target: 'special',
        matcher: /fija.+orbes/i
    },

    {
        name: 'Potenciadores de orbes',
        target: 'special',
        matcher: /incrementa.+efectividad/i
    },

    {
        name: 'Potenciadores de aparición de orbes',
        target: 'special',
        matcher: /Aumenta (ligeramente)? la probabilidad de obtener orbes (favorables)?/i
    },

    {
        name: 'Manipuladores de orbes',
        target: 'special',
        matcher: /(Cambia.+orbes)/i
    },

    {
        name: 'Manipuladores de todos los orbes',
        target: 'special',
        matcher: /(cambia[^,]+todos los orbes|cambia[^,]*todos los demás)/i,
        include: [ 516, 517 ]
    },

    {
        name: 'Manipuladores de orbe propio',
        target: 'special',
        matcher: /cambia.+su propio orbe.+a/i
    },

    {
        name: 'Aleatorizadores de orbes',
        target: 'special',
        matcher: /aleatoriza.+(orbes|todos los demás)/i
    },

    {
        name: 'Intercambiadores de orbes',
        target: 'special',
        matcher: /intercambia.+orbes/i
    },
	
	{
        name: 'Sincronizadores de orbes',
        target: 'special',
        matcher: /Cambia.+(los orbes|su propio orbe).+a.+(favorable|favorables)/i,
        include: [ 1036, 1037 ]
    },

    {
        name: 'Vaciadores de orbes',
        target: 'special',
        matcher: /(Vacía|cambia.+a.+\[VACÍO\])/i
    },

    {
        name: 'Rellenadores de orbes',
        target: 'special',
        matcher: /(Rellena\b|\[VACÍO\] orbes con|cambia.+\[VACÍO\].+a)/i
    },

    {
        name: 'Delayers',
        target: 'special',
        matcher: /retrasa/i
    },

    {
        name: 'Daño a todos los enemigos',
        target: 'special',
        matcher: /Hace.+a (todos|aleatorios) los enemigos/i
    },

    {
        name: 'Daño con varios golpes',
        target: 'special',
        matcher: /Inflige \d+ golpes/i
    },

    {
        name: 'Daño fijo',
        target: 'special',
        matcher: /Hace.+daño fijo/i
    },

    {
        name: 'Reductores de HP en %',
        target: 'special',
        matcher: /Reduce la HP actual de los enemigos/i,
		include: [ 1226 ]
    },

    {
        name: 'Daño basado en HP',
        target: 'specialNotes',
        matcher: /specialProportional/i
    },

    {
        name: 'Reductores de defensa',
        target: 'special',
        matcher: /Reduce.+defensa/i
    },

    {
        name: 'Productores RCV',
        target: 'special',
        matcher: /a[\s,\[\]A-Zo]+\[RCV\]/
    },

    {
        name: 'Convertidores RCV',
        target: 'special',
        matcher: /\[RCV\].+a/i
    },

    {
        name: 'Reductores de daño',
        target: 'special',
        matcher: /Reduce (cualquier )?.+daño.+ recibido/i
    },

    {
        name: 'Nulificadores de daño',
        target: 'special',
        matcher: /Reduce (cualquier )?.+daño.+ recibido.+100%/i
    },

    {
        name: 'Reductores de Encadenamientos',
        target: 'special',
        matcher: /Reduce.+duración.+encadenamientos/i,
    },

    {
        name: 'Reductores de Despair',
        target: 'special',
        matcher: /Reduce.+duración.+despair/i,
    },
	
	{
        name: 'Reductores de Silencio',
        target: 'special',
        matcher: /Reduce.+duración.+silencio/i,
    },

    {
        name: 'Eliminadores de orbes Negativo',
        target: 'special',
        matcher: /(vacía.+\[NEGATIVO\]|cambia.+\[NEGATIVO\].+a|incluyendo.+\[NEGATIVO\])/i,
    },

    {
        name: 'Eliminadores de Ceguera',
        target: 'special',
        matcher: /elimina.+ ceguera/i
    },

    {
        name: 'Recuperadores HP',
        target: 'special',
        matcher: /Recupera/i
    },

    {
        name: 'Reductores HP del equipo',
        target: 'special',
        matcher: /Reduce.+HP(actual )? del equipo/i
    },

    {
        name: 'Envenenadores',
        target: 'special',
        matcher: /envenena/i
    },

    {
        name: 'Eliminadores de veneno',
        target: 'special',
        matcher: /Elimina.+ envenenamiento/i,
        include: [ 1078, 1079 ]
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Sobrevives/i
    },
    
    {
       name: 'Reductores carga especial',
       target: 'special',
       matcher: /reduce la carga de los especiales/i
    },
    
    {
       name: 'Reductores de Parálisis',
       target: 'special',
       matcher: /reduce.+duración.+parálisis/i
    },
	
	/* * * * * Sailor * * * * */
    
    {
        name: 'Tiene Habilidad Sailor',
        target: 'sailor',
        matcher: /\S/i
    },
    
    {
        name: 'Sailors potenciadoras de tipo',
        target: 'sailor',
        matcher: /Aumenta (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },
    
    {
        name: 'Sailors potenciadoras de clase',
        target: 'sailor',
        matcher: /Aumenta (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },
    
    {
        name: 'Sailors de orbes favorables',
        target: 'sailor',
        matcher: /Hace que los orbes (\[STR\]|\[DEX\]|\[QCK\]|\[PSY\]|\[INT\]|\[RCV\]|\[TND\]) cuenten como favorables/i
    },

];
