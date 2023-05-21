document.getElementById("texto").addEventListener("keypress",verificar);
	function verificar(e) {
 	if(e.key.match(/[a-zñ\s]/i)===null) {
 			e.preventDefault();
		}
	}
let cambio = document.getElementById("cambio");
let lbl_cambio = document.getElementById("lbl-cambio");
cambio.addEventListener('change',(event)=>{
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if(checked == true){
        lbl_cambio.innerHTML='<i class="fa-sharp fa-solid fa-sun">';
        document.getElementById("imagen-encriptador").src="./imagenes/hidden-dark.png";
        document.getElementById("logo-img").src="./imagenes/logoavs-dark.png";      
    }else{
        lbl_cambio.innerHTML='<i class="fa-sharp fa-solid fa-moon">';
        document.getElementById("imagen-encriptador").src="./imagenes/hidden-light.png";
        document.getElementById("logo-img").src="./imagenes/logoavs-light.png";
    }    
});
const texto = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");
texto.focus();
function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    if(textoEncriptado!=""){
        resultado.value = textoEncriptado;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:'Aún no ingresa un texto para encriptarlo.',
            showConfirmButton: false,
            timer: 3000
        })
    }
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(texto.value);
    if(textoEncriptado!=""){
        resultado.value = textoEncriptado;
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:'Aún no ingresa un texto para desencriptarlo.',
            showConfirmButton: false,
            timer: 3000
        })  
    }
}
function btnCopiar(){
    const copiarTexto = resultado.value;
    if(copiarTexto!=""){
        navigator.clipboard.writeText(copiarTexto);
        texto.value = "";
        texto.focus();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El texto ha sido copiado al portapapeles',
            showConfirmButton: false,
            timer: 2000
          })
    }else{
        texto.focus();
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:'No se puede copiar, aún no ha encriptado o desencriptado ningun texto.',
            showConfirmButton: false,
            timer: 3500
        })
    }
}
function btnBorrar(){
    texto.focus();
    Swal.fire({
        title: 'Estás seguro?. Este proceso no se puede revertir, se perderá la información.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar !'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha borrado con exito!',
                showConfirmButton: false,
                timer: 1500
              })
          resultado.value = "";
          texto.value = "";
        }
      })
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
