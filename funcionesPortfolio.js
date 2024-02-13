
        //Codigo del tooltip customizado
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        //Fin Codigo del tooltip customizado

        //Boton copiar
        const botonCopiar = document.querySelectorAll('.botonCopiar');
        const emailLabel = document.getElementById('emailLabel');
        const idImagenBotonCopiar = document.querySelectorAll('.idImagenBotonCopiar');

        botonCopiar.forEach((boton, index) => {
            boton.addEventListener('click', () => {

                const textoACopiar = emailLabel.innerText;

                // Crear un elemento de textarea para copiar el texto
                const textarea = document.createElement('textarea');
                textarea.value = textoACopiar;
                document.body.appendChild(textarea);

                // Seleccionar y copiar el texto
                textarea.select();
                document.execCommand('copy');

                // Eliminar el textarea temporal
                document.body.removeChild(textarea);


                idImagenBotonCopiar[index].src = 'Images/svgCopied.svg';

                idImagenBotonCopiar[index].classList.add('oculto');
                // Ocultar el tooltip después de 1 segundo
                setTimeout(() => {
                    if (index == 0)
                        idImagenBotonCopiar[index].src = 'Images/svgCopyBotonera.svg';
                    else
                        idImagenBotonCopiar[index].src = 'Images/svgCopy.svg';

                    idImagenBotonCopiar[index].classList.remove('oculto');
                }, 1000);
            });
        });
        //Fin boton copiar

        //JS DE ARCHIVOS DE PRESENTACION

        document.addEventListener('DOMContentLoaded', function () {
            const archivos = document.querySelectorAll('.archivo');

            archivos.forEach(archivo => {
                archivo.addEventListener('click', function (e) {
                    e.preventDefault();
                    const texto = this.getAttribute('data-texto');
                    mostrarTexto(texto);
                });
            });

            function mostrarTexto(texto) {
                const contenedorTexto = document.getElementById('textoArchivo');
                contenedorTexto.textContent = texto;
            }
        });

        //FIN JS DE ARCHIVOS DE PRESENTACION

