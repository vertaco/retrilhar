if(location.href.split('/')[3]=='carrinho'){
	var idReserva = $('[id*=reserva-]:eq(0)').attr('id').split('-')[1];
	var valorVenda = Number($('[id*=reserva-] b:contains("Sub total"):eq(0)').next().text().replace(/[^0-9-]+/g,'').replace(/(\d+)(\d{2})$/, '$1.$2'));
	var nomeEvento = $('[id*=reserva-] li:contains("Data"):eq(0)').next().text().split('\n')[0].trim();
	fbq('track','Purchase',{"value":valorVenda,"currency":'BRL',"content_name":nomeEvento},{"eventID": 'reserva-'+idReserva});
	gtag('event', 'purchase', {
      'transaction_id': idReserva,
      'value': valorVenda,
      'currency': 'BRL',
      'items': [
        {
          'item_name': nomeEvento, // Nome do passeio
          'quantity': 1,
          'price': valorVenda
        }
      ]
    });
}
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','AW-1001844227');
$(function(){
	/*$('#formReservaNova').on('submit',function(e){gtag('event','conversion',{'send_to':'AW-1001844227/_ne1CIWJxYcYEIPc290D'})});*/
	$('<h3>Próximas saídas em Brasília, Goiás e região</h3>').appendTo($('.sec-heading:eq(0)'));
	$('<h3>Roteiros exclusivos</h3>').appendTo($('.sec-heading:eq(1)'));
	var auxEmb='.embed-responsive-';$(auxEmb+'1by1').parent().appendTo($('.make-me-sticky')).css('padding','15px');
	$(auxEmb+'1by1').addClass(auxEmb+'16by9').removeClass(auxEmb+'1by1')})
gtag('config','G-0B3G9DSKJ6');
$(function(){
$('#formReservaNova').addClass('was-validated');
$('[required]').prev('label').append('<span style="color:red;"> *</span>');
$(':input[required]').closest('.input-group, .phone').prev('label').append('<span style="color:red;"> *</span>');
$('#extra_re_peso').attr('min','20').val('');
$('#extra_re_altura').attr('min','0.1').val('');
if($('#endereco'))$('#endereco').parent().parent().parent().remove();
if($('#email').is(':disabled') && $('#nome').val()){
  $('#nome').attr('readonly', true);
  if($('input[name="participante[cpf]"]').val()){
    $('input[name="participante[cpf]"]').attr('readonly', true);
  }
}
});
function getCookie(nome) {
    var nomeIgual = nome + "=";
    var decodedCookie = decodeURIComponent(document.cookie); // Decodifica a string de cookies
    var ca = decodedCookie.split(';'); // Separa os cookies
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nomeIgual) == 0) {
            return c.substring(nomeIgual.length, c.length); // Retorna o valor do cookie
        }
    }
    return ""; // Retorna uma string vazia se o cookie não for encontrado
}
var afiliado_ = new URLSearchParams(window.location.search).get('afiliado');
if(afiliado_ == null){
  afiliado_ = getCookie('afiliado');
  if(afiliado_ != null){
    var data = new Date();
    data.setTime(data.getTime() + (5 * 24 * 60 * 60 * 1000)); // 5 dias
    var expires = "expires=" + data.toUTCString(); // Formata a data de expiração
    document.cookie = 'afiliado='+afiliado_+'; '+expires+'; path=/;';
  }
}
if(!location.pathname.startsWith('/reserva/')){
  $(".singlePlaceitem small:contains('por pessoa')").replaceWith('<div class="d-grid mt-auto"><a class="btn btn-primary btn-sm rounded-pill shadow-sm d-flex align-items-center justify-content-center text-uppercase fw-bold" role="button" onclick="$(this).attr(\'href\',$(this).closest(\'.singlePlaceitem\').find(\'a:first\').attr(\'href\'))">SAIBA MAIS</a></div>');
 $('.main-banner')
 .css('justify-content','flex-end')
 .css('padding-bottom','0')
 .attr('data-overlay','3')
 .append('<div class="container">'
 +($('.main-banner').children().length == 0?'<div class="col-md-4 col-sm-4"><div class="caption text-center cl-white"><h3 style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);font-size: 40px;line-height: 35px;">As melhores experiências de Aventura com Segurança.</h3></div></div>':'')
 +'<div class="row" style="justify-content: flex-end;"><img data-overlay="1" src="https://i.ibb.co/9F3fgMf/tripadwhite2025.png" style="max-width: 130px;" class="sombra-img" alt="Prémio Travellers Choice de 2025" title="Prémio Travellers Choice de 2025"></div></div>');
}
if(afiliado_ != null && afiliado_ != ''){
  if(location.pathname.startsWith('/reserva/')){
    $('.card-title').css('display','inline');
    if(afiliado_ == 'trilheiras'){
      $('.card-title').after('<img src="https://i.ibb.co/kBCzVtT/logo-Trilheiras.png" style="max-height: 35px;" alt="Parceiros: Trilheiras de Brasília" title="Parceiros: Trilheiras de Brasília">');
    } else if(afiliado_ == 'balonismo'){
      $('.card-title').after('<img src="https://i.ibb.co/WpDfQy3m/cerrado-balonismo.png" style="max-height: 35px;" alt="Parceiros: Cerrado Balonismo" title="Parceiros: Cerrado Balonismo">');
    } else if(afiliado_ == 'cecerrado'){
      $('.card-title').after('<img src="https://i.ibb.co/TJzxHSg/logocerrado.png" style="max-height: 50px;" alt="Parceiros: Cerrado Experience" title="Parceiros: Cerrado Experience">');
    } else if(afiliado_ == 'jannaguia'){
      $('.card-title').after('<img src="https://i.ibb.co/RpmtdwZC/logojanna.png" style="max-height: 30px;" alt="Parceiros: Janna Guia Ecovivências" title="Parceiros: Janna Guia Ecovivências">');
    } else if(afiliado_ == 'andorinhas'){
      $('.card-title').after('<img src="https://i.ibb.co/61LRcJ5/logo-andorinhas.png" style="max-height: 35px;" alt="Parceiros: Reserva Ancorinhas" title="Parceiros: Reserva Ancorinhas">');
    } else if(afiliado_ == 'arpuroturismo'){
      $('.card-title').after('<img src="https://i.ibb.co/PzWbzd9v/logoarpuro.jpg" style="max-height: 40px;" alt="Parceiros: Ar Puro Turismo" title="Parceiros: Ar Puro Turismo">');
    }
  } else if(afiliado_ == 'cecerrado'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/TJzxHSg/logocerrado.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Cerrado Experience" title="Parceiros: Cerrado Experience">');
  } else if(afiliado_ == 'trilheiras'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/kBCzVtT/logo-Trilheiras.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Trilheiras de Brasília" title="Parceiros: Trilheiras de Brasília">');
  } else if(afiliado_ == 'balonismo'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/WpDfQy3m/cerrado-balonismo.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Cerrado Balonismo" title="Parceiros: Cerrado Balonismo">');
  } else if(afiliado_ == 'jannaguia'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/RpmtdwZC/logojanna.png" style="position: absolute;max-height: 30px;right: 0;top: 0;" alt="Parceiros: Janna Guia Ecovivências" title="Parceiros: Janna Guia Ecovivências">');
  } else if(afiliado_ == 'andorinhas'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/61LRcJ5/logo-andorinhas.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Reserva Andorinhas" title="Parceiros: Reserva Andorinhas">');
  } else if(afiliado_ == 'arpuroturismo'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/PzWbzd9v/logoarpuro.jpg" style="position: absolute;max-height: 60px;right: 0;top: 0;" alt="Parceiros: Ar Puro Turismo" title="Parceiros: Ar Puro Turismo">');
  }
}

$(document).ready(function() {
    
    function checarVagasEAdicionarLink() {
        // 1. Verifica se o campo name="idEvento" existe e está preenchido
        var $campoEvento = $('[name="idEvento"]:visible');
        var valorEvento = $campoEvento.val();
        var eventoSelecionado = (valorEvento !== undefined && valorEvento !== null && valorEvento.trim() !== "");

        // 2. Busca o aviso de 0 vagas
        var $avisoVagas = $campoEvento.closest('.modal-body, form').find("*:contains('0 vagas disponíveis'):visible").last();
        
        // 3. Verifica se tem 0 vagas, se o evento foi selecionado e se o botão ainda não existe
        if ($campoEvento.is(':visible') && $avisoVagas.length > 0 && eventoSelecionado && $("#btn-whatsapp-espera").length === 0) {
            
            // Captura o nome da atividade no título da página (H1)
            var nomeAtividade = $('h1').first().text().trim();
            if(!nomeAtividade) nomeAtividade = "o evento"; // Fallback caso não encontre o H1
            
            // Captura a data selecionada no campo idEvento
            var dataEvento = $campoEvento.find("option:selected").text().trim();
            
            // Monta a mensagem combinando Nome + Data
            var telefone = "5561991281086"; 
            var mensagemOriginal = "Olá! Vi que '" + nomeAtividade + "' na data de " + dataEvento + " está com 0 vagas. Gostaria de entrar na fila de espera.";
            var mensagem = encodeURIComponent(mensagemOriginal);
            var linkWa = "https://wa.me/" + telefone + "?text=" + mensagem;
            
            // Cria o botão HTML
            var $botaoZap = $("<a>", {
			    id: "btn-whatsapp-espera",
			    href: linkWa,
			    target: "_blank",
			    class: "btn-fila-whatsapp",
			    html: '<i class="fab fa-whatsapp"></i>&nbsp; Entrar na Fila de Espera'
			});
            
            // Anexa o botão logo após o aviso de 0 vagas
            $avisoVagas.append($botaoZap);
            
            // Desabilita o botão azul de "Reservar" original
           // $("button:contains('Reservar')").prop("disabled", true).css("opacity", "0.5");
            
        } else if ($avisoVagas.length === 0 || !eventoSelecionado) {
            // Remove o botão de fila de espera se houver vagas ou se o evento não estiver preenchido
            $("#btn-whatsapp-espera").remove();
            
            // Só reabilita o botão "Reservar" se o aviso de 0 vagas não estiver na tela
           // if($avisoVagas.length === 0) {
            //    $("button:contains('Reservar')").prop("disabled", false).css("opacity", "1");
           // }
        }
    }

    // Usando MutationObserver para observar mudanças na tela
    var observer = new MutationObserver(function(mutations) {
        checarVagasEAdicionarLink();
    });
    
    // Inicia o observador no corpo da página
    observer.observe(document.body, { childList: true, subtree: true });

    // Gatilho extra: dispara a função quando o campo do evento for alterado
    $(document).on('change', '[name="idEvento"]', function() {
        setTimeout(checarVagasEAdicionarLink, 200);
    });
});




