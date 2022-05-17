//detalles usuario
let user= document.getElementById("user-icon");
let userDiv= document.getElementById('user-div')
user.onclick =()=>{
	(async () => {

		const { value: text } = await Swal.fire({
			
		  input: 'textarea',
		  inputLabel: 'Message',
		  title: 'USUARIO',
		  timer: 6000,
		  imageUrl:'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg',
		  imageWidth:100,
		  imageHeight:100,
		  inputPlaceholder: 'Escribe Tu nombre aca...',
		  inputAttributes: {
			'aria-label': 'Escribe Tu nombre aca'
		  },
		  showCancelButton: true

		})
		
		if (text) {
		  Swal.fire("Hola" +" " +text)
		  let nombreUsuario= document.createElement('p');
			nombreUsuario.innerText= "Hola" + " " + text;
			userDiv.append(nombreUsuario);
		}
		else{}
	localStorage.setItem("Usuario", text);
		
		
		})()
		
}

// Mensaje antes de comprar
let comprar= document.getElementById('buy__productos');
comprar.onclick=()=>{
	(async () => {

		const { value: accept } = await Swal.fire({
		  title: 'Terminos y condiciones',
		  input: 'checkbox',
		  inputValue: 1,
		  inputPlaceholder:
			'Antes de seguir con la compra, acepto los terminos y condiciones',
		  confirmButtonText:
			'Continue <i class="fa fa-arrow-right"></i>',
		  inputValidator: (result) => {
			return !result && 'Debe aceptar los terminos y condiciones si desea seguir'
		  }
		})
		
		if (accept) {
		  Swal.fire('Usted ha aceptado los terminos y condiciones :)')
		}
		
		})()
}




//pop ups
Toastify({
	text: "Cualquier Cosa, Consultanos a nuestro WhatsApp",
	duration: 600000,
    avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png",
	destination: "https://web.whatsapp.com/",
	newWindow: true,
	close: true,
	gravity: "bottom", // `top` or `bottom`
	position: "left", // `left`, `center` or `right`
	stopOnFocus: true, // Prevents dismissing of toast on hover
	style: {
	  background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
	onClick: function(){} // Callback after click
  }).showToast();

Toastify({
	text: "6 Cuotas sin interes con tarjeta Mastercard de todos los bancos",
	duration: 5000,
    avatar:"https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png",
	close: true,
	gravity: "top", // `top` or `bottom`
	position: "right", // `left`, `center` or `right`
	stopOnFocus: true, // Prevents dismissing of toast on hover
	style: {
	  background: "#60dcdc",
	},
	onClick: function(){} // Callback after click
  }).showToast();