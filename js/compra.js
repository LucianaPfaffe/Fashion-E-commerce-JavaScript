
const url= 'https://hookb.in/JKPD8P8lOJsyG2P1rB0X';
const form= document.querySelector('form');

form.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const formDataSerialized= Object.fromEntries(formData);
    const jsonObject={
        ...formDataSerialized,
        sendToSelf: formDataSerialized.sendToSelf ? true: false,
    };

    try{
        const response = await fetch(url,{
            method:'POST',
            body:JSON.stringify(jsonObject),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const json= await response.json();
        console.log(json);
    } catch(e){
        console.error(e);
    }
});

botonCompra= document.getElementById('comprar');
// Mensaje antes de comprar
botonCompra.onclick=()=>{
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
