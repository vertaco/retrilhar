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
if($('#email').is(':disabled') && $('#nome').val()){
  $('#nome').attr('readonly', true);
}
});
