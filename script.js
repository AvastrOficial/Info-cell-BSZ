function loading() {
      document.querySelector('.ove').style.display = 'none';
    }

    // Simular tiempo de carga
    setTimeout(function() {
      // Llamar a la función para cerrar la animación
      loading();
    }, 3000); // Cambia el tiempo de espera a tu preferencia (en milisegundos)
    
 document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.square').addEventListener('click', function() {
        const checkmark = document.querySelector('.checkmark');
        const conElement = document.querySelector('.con');
        const textElement = document.querySelector('.text');
        const roundedRectangle = document.querySelector('.rounded-rectangle');
        const overlay1 = document.querySelector('.overlay1');
        const cont2 = document.querySelector('.cont2'); // Elemento para mostrar contenido web
        
        checkmark.style.animation = 'checkmarkAnimation 1s ease-in-out forwards';

        setTimeout(() => {
          checkmark.style.animation = '';
          conElement.style.display = 'none';
          textElement.style.display = 'none';
          roundedRectangle.style.display = 'none';
          overlay1.style.display = 'none';
          
          // Mostrar contenido web y aplicar la clase cont2
          cont2.style.display = 'block'; // O 'flex', según el caso
          cont2.classList.add('cont2');
        }, 3000);
      });
    });

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');

    passwordInput.addEventListener('keyup', function(event) {
        const password = event.target.value;

        // Verificar si la contraseña es correcta (por ejemplo, "clave123")
        if (password === 'BSZ') {
            const overlay = document.querySelector('.overlay1');
            const overlayContent = document.querySelector('.overlay1-content');
            const inputField = document.querySelector('.overlay1 input');

            overlay.style.display = 'none'; // Ocultar el overlay
            overlayContent.style.display = 'none'; // Ocultar el contenido del overlay
            inputField.style.display = 'none'; // Ocultar el campo de entrada
        }
    });
});


// Obtener la dirección IP del usuario
const userIPElement = document.getElementById("userIP");

fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        userIPElement.textContent = data.ip;
    })
    .catch(error => {
        console.error("Error al obtener la dirección IP:", error);
    });
