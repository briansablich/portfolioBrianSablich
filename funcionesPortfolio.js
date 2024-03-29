
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

        document.addEventListener('DOMContentLoaded', function() {
            const archivos = document.querySelectorAll('.archivo');
            let clickCount = 0;
            let timer;
        
            archivos.forEach(archivo => {
                archivo.addEventListener('click', function(e) {
                    e.preventDefault();
                    clickCount++;
                    if (clickCount === 1) {
                        timer = setTimeout(function() {
                            clickCount = 0;
                        }, 300);
                    } else if (clickCount === 2) {
                        const divTexto = document.getElementById('divTexto');
                        const estadoDisplay = window.getComputedStyle(divTexto).display;
                        const cajaTitulo = document.getElementById('cajaTitulo');
                        const dataTexto = archivo.getAttribute('data-texto');
                        const dataTitle = archivo.getAttribute('data-title');
                        
                        if (estadoDisplay === 'none' || cajaTitulo.textContent !== dataTitle) {
                            divTexto.style.display = 'block';
                            divTexto.classList.add('cajaTextoClass');
                            mostrarTexto(dataTexto, dataTitle);
                        } else {
                            divTexto.style.display = 'none';
                        }
                        
                        clearTimeout(timer);
                        clickCount = 0;
                    }
                });
            });
            
            function mostrarTexto(textoArchivo, textoTitulo) {
                const contenedorTexto = document.getElementById('cajaTexto');
                const contenedorTitulo = document.getElementById('cajaTitulo');
                contenedorTexto.textContent = textoArchivo;
                contenedorTitulo.textContent = textoTitulo;
            }
        });
        

        //FIN JS DE ARCHIVOS DE PRESENTACION

