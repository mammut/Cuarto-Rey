shuffle = function(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

fill_rules = function(reglas) {
	if($.cookie('cuartorey') != null) { // Load cookie values
		var reglas = $.cookie('cuartorey').split('-');
	}
	for(var carta in cartas) {
		$('#'+cartas[carta]).val(reglas[carta]);
	}
};

/* Generar Mazo */
var cartas = ['as', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'jota', 'quina', 'kaiser'];
var reglas = ['Regla', 'Toma 2', 'Tome 3', 'Toma 4', 'Da 2', 'Da 3', 'Da 4', 'Historia', 'Pulgar', 'Cascada', 'Cultura', 'Rima', 'Shot'];
var icons = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var mazo = new Array();

for (var i = 0; i < 4; i++)
	for(var carta in cartas)
		mazo.push(cartas[carta]);

mazo = shuffle(mazo);
var total = mazo.length;
var mouse_is_inside = false;

$(function() {
	fill_rules(reglas);
	
	$('#config-button').click(function() {
		$('#config').animate({width: 'toggle'});
	});

	$('#count-keep').html('Van: ' + (total - mazo.length) + ' - Quedan: ' + mazo.length);
	
	$('#sacar-carta').click(function() {
		if(mazo.length > 0) {
			var tmp = mazo.pop();
			$('#juego li').html(icons[cartas.indexOf(tmp)]+': ' + $('#'+tmp).val());
		}else {
			$('#juego li').html('fin');
		}
		if (total - mazo.length >= 0)
			$('#count-keep').html('Van: ' + (total - mazo.length) + ' - Quedan: ' + mazo.length);
			
		return 0;
	});
	
	$('#save-config').click(function() {
		var saveus = new Array();
		
		for (var carta in cartas) {
			saveus.push($('#'+cartas[carta]).val());
		}
		$.cookie('cuartorey', saveus.join('-'));
		$('#config').animate({width: 'toggle'});
		return 0;
	});
});