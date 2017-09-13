

function editarRegistro(id){
	for(var i=0; i < localStorage.length; i++){
		var clave=localStorage.key(i);
		if(clave==id){
			registro=$.parseJSON(localStorage.getItem(clave));
					
			$("#miCod").val(registro.id);
			$("#miNom").val(registro.nombre);
			$("#miNota").val(registro.nota);
		}
	}
}

function eliminarRegistro(id,nombre,nota){
	localStorage.removeItem(id,nombre,nota);
	
	listarEstudiantes();
}	


function listarEstudiantes(){
	var tabla="";
	var parrafo1=$("#p1");
			
	tabla+='<table id="tabla">';
	tabla+='<tr>';
	tabla+='<th>ID</th>';
	tabla+='<th>NOMBRE</th>';
	tabla+='<th>NOTA</th>';
	tabla+='<th>EDITAR</th>';
	tabla+='<th>ELIMINAR</th>';
	tabla+='</tr>';
			
	for(var i=0;i<localStorage.length;i++){
		var clave=localStorage.key(i);
		var registro=$.parseJSON(localStorage.getItem(clave));
				
		tabla+='<tr>';
		tabla+='<td>'+registro.id+'</td>';
		tabla+='<td>'+registro.nombre+'</td>';
		tabla+='<td>'+registro.nota+'</td>';
		tabla+='<td><button id="btnR" onclick="editarRegistro(\''+registro.id+'\');">Editar</button></td>';
		tabla+='<td><button id="btnE" onclick="eliminarRegistro(\''+registro.id+'\');">Eliminar</button></td>';
		tabla+='</tr>';				
	}
		tabla+='</table>';
		$(parrafo1).html(tabla);
	}



$(document).ready(function(){		

	
	

	listarEstudiantes();
	
	
			

	$(".submit").click(function(){
		var id=$("#miCod").val();
		var nombre=$("#miNom").val();
		var nota=$("#miNota").val();
		
				
		if((id,nombre,nota).length===0){
			return;
		
		}else{		
		var registro={
			id:id,
			nombre:nombre,
			nota:nota
			}
		}
		
		localStorage.setItem(id, JSON.stringify(registro));
		
		listarEstudiantes();
		alert("Registro exitoso");
		restablecer();		
	});
		
	function restablecer(){
		$("#miCod").val("");
		$("#miNom").val("");
		$("#miNota").val("");
				
	}
	
	$("#btn2").click(function(){
		
		if(localStorage.length===0){
		return false;
	}else{
		
		var suma=0.0;			
		for (var i=0; i < localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));	
			suma += parseInt(registro.nota);
			var prom = suma/localStorage.length ;		
		}
		alert("La nota promedio es: "+ prom.toFixed(2));
	}
	});	
	
	$("#btn3").click(function(){
		
		
		if(localStorage.length===0){
			return false;
		}else{
			
			var Nmax = 0;
			for (var i=0;i<localStorage.length; i++){
				var clave=localStorage.key(i);
				var registro=$.parseJSON(localStorage.getItem(clave));				
				if (Nmax<registro.nota){
					Nmax = parseInt(registro.nota);																			
				}
			}
			alert("La nota maxima es: "+ Nmax);
		}
	});
	
	$("#btn4").click(function(){
		if(localStorage.length===0){
		return false;
	}else{
		var Nmin = 100;
		for (var i=0; i<localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));
			if (Nmin>registro.nota){
				Nmin = parseInt(registro.nota);
			}
		}
		alert("La nota minima es: " + Nmin);
	}
	});	
});