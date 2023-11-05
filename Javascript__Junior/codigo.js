
let free = false;
const validarCliente = (time) =>{
	let edad = prompt ("Cual es tu edad?")
	if (edad>=18){
		if(time >= 2 && time < 7 && free ==false){
			alert ("puedes pasar gratis")
			free = true
		}else {
			alert(`son las ${time}:00chrs puedes pasar pero tienes que pagar la entrada`)
		}
	} else {
		alert ("No puedes pasar porque eres menor de edad")
	}
}

validarCliente(23);
validarCliente(0.2);
validarCliente(5);
validarCliente(6);

validarCliente(1);
validarCliente(7);


