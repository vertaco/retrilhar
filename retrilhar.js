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
	$(auxEmb+'1by1').addClass(auxEmb+'16by9').removeClass(auxEmb+'1by1');
	// Captura o link da Política de Privacidade já existente no rodapé do site
	
	const urlPolitica = $("a:contains('Política de privacidade')").attr("href") || "/politica-de-privacidade";
	if(location.pathname.startsWith('/pre-reserva')){
		// Localiza o elemento mais profundo que contém o texto e aplica a substituição
		$("*:contains('Solicitamos essas informações para casos de emergência')").last().html(
		    'Seus dados de saúde serão usados somente para avaliar sua participação, emitir o seguro e auxiliar em emergências, com acesso restrito. Consulte a <a href="' + urlPolitica + '" target="_blank" style="text-decoration: underline;">Política de Privacidade</a>.'
		);
		$("label:contains('Utiliza medicamento controlado de uso contínuo?')").last().html(function(_, html) {
		    return html.replace(
		        'Utiliza medicamento controlado de uso contínuo?', 
		        'Usa medicamento contínuo ou que poderá precisar durante a atividade?'
		    );
		});
		$("label:contains('Possui algum problema de saúde que deva ser ressaltado?')").last().html(function(_, html) {
		    return html.replace(
		        'Possui algum problema de saúde que deva ser ressaltado?', 
		        'Possui alguma condição de saúde ou lesão que possa afetar sua participação?'
		    );
		});
		$("label:contains('Alguma incapacidade física ou mental?')").last().html(function(_, html) {
		    return html.replace(
		        'Alguma incapacidade física ou mental?', 
		        'Precisa de apoio ou adaptação para participar da atividade?'
		    );
		});
		$("label:contains('Qual(is) alergia(s) possui?')").last().html(function(_, html) {
		    return html.replace(
		        'Qual(is) alergia(s) possui?', 
		        'Descreva a alergia e os cuidados necessários:'
		    );
		});
		$("label:contains('Qual(is) restrição(ões) alimentar(es) possui?')").last().html(function(_, html) {
		    return html.replace(
		        'Qual(is) restrição(ões) alimentar(es) possui?', 
		        'Informe a restrição alimentar:'
		    );
		});
		$("label:contains('Quais medicamento controlado de uso contínuo utiliza?')").last().html(function(_, html) {
		    return html.replace(
		        'Quais medicamento controlado de uso contínuo utiliza?', 
		        'Informe o medicamento e os cuidados necessários:'
		    );
		});
		$("label:contains('Qual(is) problema(s) de saúde possui?')").last().html(function(_, html) {
		    return html.replace(
		        'Qual(is) problema(s) de saúde possui?', 
		        'Descreva a condição e os cuidados necessários:'
		    );
		});
		$("label:contains('Qual incapacidade física ou mental possui?')").last().html(function(_, html) {
		    return html.replace(
		        'Qual incapacidade física ou mental possui?', 
		        'Informe o apoio ou adaptação necessária:'
		    );
		});
		$("label:contains('Autoriza o envio de novidades e promoções por e-mail')").last().html(function(_, html) {
		    return html.replace(
		        'Autoriza o envio de novidades e promoções por e-mail', 
		        'Desejo receber novidades e promoções da Vertaco.'
		    );
		});
		$("button:contains('Reservar')").last().html(function(_, html) { 
		    return html.replace(
		        'Reservar',  
		        'Enviar solicitação de reserva' 
		    );
		});
	}
})
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
function adicionarProximasDatas(){
	if (window.innerWidth <= 768) {
		let datas = [];
	    // Busca os elementos que contêm o texto das próximas datas
	    $('.preReservaBtn:not([data-label="RESERVAR"])').each(function() {
	        let textoData = $(this).text().trim();
	        if (textoData) {
	            datas.push(textoData);
	        }
	    });
	    // Remove duplicatas caso a mesma data apareça mais de uma vez
	    datas = [...new Set(datas)];
	    // Constrói o HTML a ser inserido
	    if (datas.length > 0) {
	        let htmlDatas = '<div id="lista-proximas-datas" style="padding: 5px;" onclick="$(\'.fixed-bottom > [data-label=\\\'RESERVAR\\\'] > button\').click();">';
	        htmlDatas += '<h5>Próximas datas</h5><u><b>';
	        datas.forEach(function(data) {
	            htmlDatas += data + '<br>';
	        });
	        htmlDatas += '</b></u></div>';
	        // Insere o HTML logo após o carrossel
			if($('#carouselExampleIndicators').length > 0){
				$('#carouselExampleIndicators').after(htmlDatas);
			} else {
				$('#galeria + p').after(htmlDatas);	
			}
	    }
	} 
}
function adicionarBadgesCards(){
	// Transporte opcional
	$.each([
        "Rapel Cachoeira do Bisnau",
        "Canionismo Cachoeira do Dragão",
        "Rapel Chapada Indaiá",
        "Rapel Dolina dos Maracanãs",
        "Canionismo em Pirenópolis-GO",
        "Cachoeira do Dragão"
    ], function(index, atividade) {
        // Encontra a imagem da atividade baseada no texto alternativo ou título
        $('img[alt="' + atividade + '"], img[title="' + atividade + '"]').each(function() {
            const $linkPai = $(this).parent();
            // Força o comportamento relativo no elemento pai
            $linkPai.addClass('position-relative d-block');
            // Injeta o badge apenas se ele ainda não existir no elemento (evita duplicidade)
            if ($linkPai.html().indexOf('Transporte opcional') === -1) {
                $linkPai.append('<span class="badge badge-warning" style="position: absolute; top: 10px; right: 10px; z-index: 10; background-color: #ffc107; color: #212529;">Transporte opcional</span>');
            }
        });
    });
	// Almoço incluso
	$.each(["Cânion Chapada Imperial"], function(index, atividade) {
        // Encontra a imagem da atividade baseada no texto alternativo ou título
        $('img[alt="' + atividade + '"], img[title="' + atividade + '"]').each(function() {
            const $linkPai = $(this).parent();
            // Força o comportamento relativo no elemento pai
            $linkPai.addClass('position-relative d-block');
            // Injeta o badge apenas se ele ainda não existir no elemento (evita duplicidade)
            if ($linkPai.html().indexOf('Almoço incluso') === -1) {
                $linkPai.append('<span class="badge badge-success" style="position: absolute; top: 10px; right: 10px; z-index: 10; color: #fff; background-color: #28a745;">Almoço incluso</span>');
            }
        });
    });
	// Transporte incluso
	$.each(["Excursão Terra Ronca-GO [10 a 12/10]","Excursão Mambaí-GO [05 a 07/09]"], function(index, atividade) {
        // Encontra a imagem da atividade baseada no texto alternativo ou título
        $('.cover img[alt="' + atividade + '"], .cover img[title="' + atividade + '"]').each(function() {
            const $linkPai = $(this).parent();
            // Força o comportamento relativo no elemento pai
            $linkPai.addClass('position-relative d-block');
            // Injeta o badge apenas se ele ainda não existir no elemento (evita duplicidade)
            if ($linkPai.html().indexOf('Transporte incluso') === -1) {
                $linkPai.append('<span class="badge badge-success" style="position: absolute; top: 10px; right: 10px; z-index: 10; color: #fff; background-color: #28a745;">Transporte incluso</span>');
            }
        });
    });
}
$(document).ready(function() {
	adicionarBadgesCards();
    if(window.location.pathname.indexOf('/f/') === -1 && window.location.pathname.indexOf('/p/') === -1){
		return;
	}
	adicionarProximasDatas();
	var urlContemHabitat = window.location.pathname.indexOf('/f/habitat-aventura/') !== -1;
    var urlContemCerradoExperience = window.location.pathname.indexOf('/f/cerrado-experience/') !== -1;
	var nomeEmpresa;
    var $blockBody = $('.block-body').first();
	if ((urlContemHabitat || urlContemCerradoExperience) && !(!$blockBody.length || $('#empresas-participantes').length)) {
        var empresaOperadoraHtml;
		var empresaOperadoraHtmlReserva;
	    if(urlContemHabitat){
			nomeEmpresa = 'Habitat Aventura';
	    	empresaOperadoraHtml ='<p class="mb-1"><b>Habitat Aventura</b></p><p class="text-muted mb-2">CNPJ e Cadastur: 28.700.688/0001-31</p>';
	    } else if(urlContemCerradoExperience){
	     	nomeEmpresa = 'Cerrado Experience';
			empresaOperadoraHtml ='<p class="mb-1"><b>Cerrado Experience</b></p><p class="text-muted mb-2">CNPJ e Cadastur: 43.255.923/0001-05</p>';
	    }
	    var empresasParticipantesHtml = `<div id="empresas-participantes" class="card border-primary mb-4 mt-2">
	            <div class="card-header text-white" style="border: 0;background-color: #0977ec;"><b>🏢 Empresas participantes</b></div>
	            <div class="card-body"><div class="row"><div class="col-md-6 mb-3 mb-md-0">
	                        <h6 class="font-weight-bold">Intermediação comercial</h6>
	                        <p class="mb-1"><b>Vertaco – Turismo de Aventura</b></p>
	                        <p class="text-muted mb-2">CNPJ e Cadastur: 29.910.187/0001-42</p>
	                        <p class="mb-0">Divulgação da experiência, atendimento comercial, processamento da reserva e intermediação da contratação.</p>
	                    </div><div class="col-md-6 border-left"><h6 class="font-weight-bold">Prestação e operação da atividade</h6>`
	                        +empresaOperadoraHtml+
	                        `<p class="mb-0">Planejamento, organização e execução da atividade, disponibilização da equipe e dos equipamentos, orientações de segurança e decisões operacionais.</p>
	                    </div>
	                </div>
	<hr><p class="small text-muted mb-0">A Vertaco atua como agência intermediadora e recebe comissão pela comercialização. A identificação das atribuições de cada empresa não elimina os direitos do consumidor nem afasta as responsabilidades legais aplicáveis aos fornecedores envolvidos.</p></div></div>`;
    	$blockBody.append(empresasParticipantesHtml);
    }

    function checarVagasEAdicionarLink() {
       	// 1. Verifica se o campo name="idEvento" existe e está preenchido
        var $campoEvento = $('[name="idEvento"]:visible');
		// OTIMIZAÇÃO 1: Early Return. 
	    // Se o campo evento não está na tela, não gasta processamento executando o resto da função.
	    if ($campoEvento.length === 0) {
	        return; 
	    }
		var $campoHorario = $('[name="idHorario"]:visible');
        var valorEvento = $campoEvento.val();
        var eventoSelecionado = (valorEvento !== undefined && valorEvento !== null && valorEvento.trim() !== "");
		var $avisoVagas = $();

	    // OTIMIZAÇÃO 2: Só faz a busca pesada de texto SE o evento estiver selecionado
	    if (eventoSelecionado) {
	        $avisoVagas = $campoEvento.closest('.modal-body')
	            // OTIMIZAÇÃO 3: Removido o *:visible. Especifique as tags prováveis onde o texto mora.
	            // Isso reduz a busca de centenas de elementos para apenas alguns.
	            .find('div')
	            .filter(function() {
	                return $(this).text().trim().startsWith('0 vagas disponíveis');
	            }).last();
	    }
                
        // 3. Verifica se tem 0 vagas, se o evento foi selecionado e se o botão ainda não existe
	    if ($avisoVagas.length > 0 && $("#btn-whatsapp-espera").length === 0 && ($campoHorario.length === 0 || $campoHorario.val() !== "")) {
	        
	        // Captura o nome da atividade no título da página (H1) ou usa um fallback
	        var nomeAtividade = $('.caption h2').text().trim() || "o evento";
	        
	        // Captura a data selecionada no campo idEvento
	        var dataEvento = $campoEvento.find("option:selected").text().trim();
	        
	        // Monta a mensagem combinando Nome + Data
	        var telefone = "5561991281086"; 
	        var mensagem = encodeURIComponent("Olá! Vi que *" + nomeAtividade + "* na data de *" + dataEvento + "* está com 0 vagas. Gostaria de entrar na fila de espera.");
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
	        
	    } else if ($avisoVagas.length === 0 || !eventoSelecionado) {
	        // Remove o botão de fila de espera se houver vagas ou se o evento não estiver preenchido
	        $("#btn-whatsapp-espera").remove();
	    }
	
	    // OTIMIZAÇÃO 4: Prevenção de Crash por variáveis indefinidas (ReferenceError)
	    // O typeof garante que, se a variável não existir na página atual, o script não quebre.
	    var isHabitat = (typeof urlContemHabitat !== 'undefined' && urlContemHabitat);
	    var isCerrado = (typeof urlContemCerradoExperience !== 'undefined' && urlContemCerradoExperience);
	    var nomeDaEmp = (typeof nomeEmpresa !== 'undefined') ? nomeEmpresa : 'nossa empresa parceira';
	
	    if ((isHabitat || isCerrado) && $('#aviso-empresas-participantes').length === 0) {
	        $campoEvento.closest('.modal-body').prepend('<div class="form-group" id="aviso-empresas-participantes"><div class="alert alert-info p-2" role="alert"><b>Atividade de empresa parceira:</b> esta atividade é prestada e operada pela '+ nomeDaEmp +'. A Vertaco atua na divulgação, reserva e intermediação comercial da contratação.</div></div>');
	    }
    }

    // --- OTIMIZAÇÃO: Controle de chamadas (Debounce) ---
	// Evita que a função rode dezenas de vezes por segundo
	var timer;
	function checarComDebounce() {
	    clearTimeout(timer);
	    timer = setTimeout(checarVagasEAdicionarLink, 400); // Aguarda 400ms após a última mudança para agir
	}
	
	// Usando MutationObserver APENAS no contexto necessário (ex: o modal ou formulário)
	// Se não souber o ID do modal, ainda podemos usar o body, mas o debounce salvará a performance.
	var observer = new MutationObserver(function(mutations) {
	    checarComDebounce();
	});
	
	// Inicia o observador
	observer.observe(document.body, { childList: true, subtree: true });
	
	// Gatilhos extras nos campos (já com setTimeout no seu código original, mas centralizados aqui)
	$(document).on('change', '[name="idEvento"], [name="idHorario"]', function() {
	    checarComDebounce();
	});
});




