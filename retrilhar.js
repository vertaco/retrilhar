if(location.href.split('/')[3]=='carrinho'){fbq('track','Purchase',{"value":Number($('span:contains("Total (RS)")').next().text().replace(/[^0-9\.-]+/g,''))/100,"currency":'BRL'})}
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','AW-1001844227');$(function(){$('#formReservaNova').on('submit',function(e){gtag('event','conversion',{'send_to':'AW-1001844227/_ne1CIWJxYcYEIPc290D'})});$('<h3>Escolha sua próxima aventura</h3>').appendTo($('.sec-heading:eq(0)'));$('<h3>Roteiros exclusivos</h3>').appendTo($('.sec-heading:eq(1)'));var auxEmb='.embed-responsive-';$(auxEmb+'1by1').parent().appendTo($('.make-me-sticky')).css('padding','15px');$(auxEmb+'1by1').addClass(auxEmb+'16by9').removeClass(auxEmb+'1by1')})
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
    }
  } else if(afiliado_ == 'cecerrado'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/TJzxHSg/logocerrado.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Cerrado Experience" title="Parceiros: Cerrado Experience">');
  } else if(afiliado_ == 'trilheiras'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/kBCzVtT/logo-Trilheiras.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Trilheiras de Brasília" title="Parceiros: Trilheiras de Brasília">');
  } else if(afiliado_ == 'balonismo'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/WpDfQy3m/cerrado-balonismo.png" style="position: absolute;max-height: 50px;right: 0;top: 0;" alt="Parceiros: Cerrado Balonismo" title="Parceiros: Cerrado Balonismo">');
  } else if(afiliado_ == 'jannaguia'){
    $('.main-banner').prepend('<img src="https://i.ibb.co/RpmtdwZC/logojanna.png" style="position: absolute;max-height: 30px;right: 0;top: 0;" alt="Parceiros: Janna Guia Ecovivências" title="Parceiros: Janna Guia Ecovivências">');
  }
}

