/* ---------------- FICHA 0.0 - JavaScript ---------------- */

function dX(dice,element) {
	var roll = Math.ceil( parseInt(dice) * Math.random() ) ;
	return roll + parseInt(element.value) ;
}

/* ---------------- HABILIDADES BÁSICAS ---------------- */

function modificador(atributo) {
    return Math.floor(atributo / 2) - 5;
}

function atualizarModificador(nomeAtributo) {
	var attr     = parseInt(document.getElementById(nomeAtributo         ).value);
	var attrTemp = parseInt(document.getElementById(nomeAtributo + 'temp').value) || 0;
	
	document.getElementById(nomeAtributo + 'mod').value = modificador(attr+attrTemp);
}

/* ---------------- PERÍCIAS ---------------- */

function grad(per) {
	var per = document.getElementById(per + 'Treino');
	var nv = parseInt(charLevel.value);
	if (per.checked) {
		var gd = nv + 3;
		} else {
		var gd = Math.floor(nv / 2);
	}
	return gd;
}

function atualizarPericia(perId) {
	var bonus = parseInt(document.getElementById(perId + 'Bonus').value) || 0 ;
	var hab = parseInt(document.getElementById(document.getElementById(perId + 'Hab').value).value) || 0;
	document.getElementById(perId + 'Total').value = hab + bonus + grad(perId) ;
}

document.addEventListener("DOMContentLoaded", function(event) {
	/* ---------------- HABILIDADES BÁSICAS ---------------- */
	document.querySelectorAll('.habValor').forEach(function(element) {
		var nomeAtributo = element.id;
		
		document.getElementById(nomeAtributo).addEventListener('change', function(event) {
			atualizarModificador(nomeAtributo);
		});
		
		document.getElementById(nomeAtributo+ 'temp').addEventListener('change', function(event) {
			atualizarModificador(nomeAtributo);
		});
	});
	/* ---------------- PERÍCIAS ---------------- */
	document.querySelectorAll('.per').forEach(function(element) {
		var nomePer = element.id;
		
		['Bonus', 'Treino', 'Hab'].forEach(function(element){
			document.getElementById(nomePer + element).addEventListener('change', function(event) {
				atualizarPericia(nomePer);
			});
		});
		
		charLevel.addEventListener('change', function(event) {
			atualizarPericia(nomePer);
		});
		
		document.querySelectorAll('.habValor').forEach(function(element) {
			var nomeAtributo = element.id;
			
			document.getElementById(nomeAtributo).addEventListener('change', function(event) {
				atualizarPericia(nomePer);
			});
			
			document.getElementById(nomeAtributo + 'temp').addEventListener('change', function(event) {
				atualizarPericia(nomePer);
			});
		});
	});
	
	/* ---------------- DADOS ---------------- */
	document.querySelectorAll('.d20').forEach(function(element) {
		element.addEventListener('click', function(spot) {
			alert( "Rolagem deu:  " + dX("20",element) ) ;
		});
	});
});