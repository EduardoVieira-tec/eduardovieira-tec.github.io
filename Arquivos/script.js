const botao = document.getElementById("btn-ver-mais");
const certificadosExtras = document.querySelectorAll(".certificado-extra");

botao.addEventListener("click", function() {

    certificadosExtras.forEach(function(certificado) {

        if (certificado.style.display === "block") {
            certificado.style.display = "none";
        } else {
            certificado.style.display = "block";
        }

    });

});