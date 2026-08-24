  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '731551024492811');
fbq('track', "PageView");

$(document).ready(function() {
    var urlContemHabitat = window.location.pathname.indexOf('/f/habitat-aventura/') !== -1;
    var urlContemCerradoExperience = window.location.pathname.indexOf('/f/cerrado-experience/') !== -1;
    if (!urlContemHabitat && !urlContemCerradoExperience) {
        return;
    }
    var $blockBody = $('.block-body').first();
    if (!$blockBody.length || $('#empresas-participantes').length) {
        return;
    }
    var empresaOperadoraHtml;
    if(urlContemHabitat){
      empresaOperadoraHtml ='<p class="mb-1"><b>Habitat Aventura</b></p><p class="text-muted mb-2">CNPJ e Cadastur: 28.700.688/0001-31</p>';
    } else if(urlContemCerradoExperience){
      empresaOperadoraHtml ='<p class="mb-1"><b>Cerrado Experience</b></p><p class="text-muted mb-2">CNPJ e Cadastur: 43.255.923/0001-05</p>';
    }
    var empresasParticipantesHtml = `
        <div id="empresas-participantes" class="card border-primary mb-4 mt-2">
            <div class="card-header text-white" style="border: 0;">
                <b>🏢 Empresas participantes</b>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <h6 class="font-weight-bold">Intermediação comercial</h6>
                        <p class="mb-1"><b>Vertaco – Turismo de Aventura</b></p>
                        <p class="text-muted mb-2">CNPJ e Cadastur: 29.910.187/0001-42</p>
                        <p class="mb-0">Divulgação da experiência, atendimento comercial, processamento da reserva e intermediação da contratação.</p>
                    </div>
                    <div class="col-md-6 border-left">
                        <h6 class="font-weight-bold">Prestação e operação da atividade</h6>`
                        +empresaOperadoraHtml+
                        `<p class="mb-0">
                            Planejamento, organização e execução da atividade,
                            disponibilização da equipe e dos equipamentos,
                            orientações de segurança e decisões operacionais.
                        </p>
                    </div>
                </div>
<hr><p class="small text-muted mb-0">
                    A Vertaco atua como agência intermediadora e recebe comissão
                    pela comercialização. A identificação das atribuições de cada
                    empresa não elimina os direitos do consumidor nem afasta as
                    responsabilidades legais aplicáveis aos fornecedores envolvidos.
                </p>
            </div>
        </div>
    `;
    $blockBody.append(empresasParticipantesHtml);
});
