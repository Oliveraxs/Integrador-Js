$(function(){

	$('#resumen').click(function(){
        let cantidad = $('#cantidad').val();
        let categoria = $('#categoria').val();
        let total = 0;
        let valorTicket = 200;
        let porcetanje = 0;

        switch (categoria) {
            case "estudiante":
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
                    porcetanje = (valorTicket * 80)/100;
                    total = (valorTicket-porcetanje)*parseInt(cantidad);
                    document.getElementById("totalPagar").innerHTML = "Total a Pagar: $ " + total;
              break;
            case "trainee":
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                    porcetanje = (valorTicket * 50)/100;
                    total = (valorTicket-porcetanje)*parseInt(cantidad);
                    document.getElementById("totalPagar").innerHTML = "Total a Pagar: $ " + total;
              break;
            case "junior":
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                    porcetanje = (valorTicket * 15)/100;
                    total = (valorTicket-porcetanje)*parseInt(cantidad);
                    document.getElementById("totalPagar").innerHTML = "Total a Pagar: $ " + total;
              break;
          }
	});
});