/**
 * Metadados SEO das principais páginas da Vertaco.
 *
 * Instalação recomendada:
 *   <script src="/js/vertaco-seo-meta.js" defer></script>
 *
 * Preferência técnica: gerar estes mesmos dados no HTML enviado pelo servidor.
 * Este arquivo é uma alternativa para plataformas que não permitem alterar o
 * <head> individualmente. Após publicar, valide cada URL na Inspeção de URL do
 * Google Search Console e confirme o HTML renderizado.
 */
(function vertacoSeoMetadata() {
  'use strict';

  var SITE_URL = 'https://vertaco.com.br';
  var SITE_NAME = 'Vertaco Turismo de Aventura';

  var pages = Object.freeze({
    '/': {
      title: 'Turismo de aventura em Brasília e Goiás | Vertaco',
      description: 'Rapel, canionismo, trilhas, remadas e expedições em Brasília e Goiás. Conheça as experiências e próximas datas da Vertaco.'
    },
    '/p/balonismo-brasilia': {
      title: 'Passeio de balão em Brasília: datas e valores | Vertaco',
      description: 'Viva um passeio de balão em Brasília. Consulte próximas datas, valores, orientações e condições para participar da experiência.'
    },
    '/p/monte-roraima': {
      title: 'Expedição Monte Roraima: roteiro, datas e preço | Vertaco',
      description: 'Conheça a expedição ao Monte Roraima, com roteiro, próximas datas, preço, requisitos, itens necessários e orientações para a viagem.'
    },
    '/p/rapel-dolina-dos-maracanas': {
      title: 'Rapel na Dolina dos Maracanãs: datas e preço | Vertaco',
      description: 'Rapel de 70 metros na Dolina dos Maracanãs, em Formosa. Confira datas, preço, requisitos e transporte opcional saindo de Brasília.'
    },
    '/p/trilha-de-moto-iniciantes': {
      title: 'Rota do Morcego: trilha de moto para iniciantes | Vertaco',
      description: 'Trilha de moto para iniciantes na Rota do Morcego. Consulte programação, requisitos, nível de dificuldade e orientações da atividade.'
    },
    '/p/balonismo-pirenopolis-go': {
      title: 'Passeio de balão em Pirenópolis: datas e valores | Vertaco',
      description: 'Passeio de balão em Pirenópolis, Goiás. Consulte próximas datas, valores, condições de participação e orientações da experiência.'
    },
    '/p/remada-lua-cheia': {
      title: 'Remada da Lua Cheia em Brasília: próximas datas | Vertaco',
      description: 'Participe da Remada da Lua Cheia em Brasília. Confira próximas datas, local, equipamentos incluídos e orientações para participar.'
    },
    '/p/canionismo-barra-do-dia': {
      title: 'Cânion Barra do Dia: canionismo e 7 cachoeiras | Vertaco',
      description: 'Canionismo no Cânion Barra do Dia, com percurso por sete cachoeiras. Confira datas, preço, requisitos e itens necessários.'
    },
    '/p/canionismo-cachoeira-do-dragao': {
      title: 'Canionismo na Cachoeira do Dragão em Cavalcante | Vertaco',
      description: 'Canionismo na Cachoeira do Dragão, em Cavalcante. Consulte roteiro, próximas datas, requisitos e orientações para a atividade.'
    },
    '/p/curso-de-tecnicas-verticais-i': {
      title: 'Curso de Técnicas Verticais I em Brasília | Vertaco',
      description: 'Curso introdutório de técnicas verticais em Brasília. Confira conteúdo, carga horária, próximas turmas, requisitos e certificação.'
    },
    '/p/rapel-salto-do-tororo': {
      title: 'Rapel na Cachoeira do Tororó: datas e preço | Vertaco',
      description: 'Rapel na Cachoeira do Tororó, próximo a Brasília e indicado para iniciantes. Confira datas, preço, requisitos e orientações.'
    },
    '/p/rafting-na-chapada-dos-veadeiros': {
      title: 'Rafting na Chapada dos Veadeiros: datas e preço | Vertaco',
      description: 'Rafting na Chapada dos Veadeiros. Consulte próximas datas, preço, nível de dificuldade, requisitos e orientações para participar.'
    },
    '/p/rafting-tocantinzinho-chapada-veadeiros': {
      title: 'Rafting no Rio Tocantinzinho, Chapada dos Veadeiros | Vertaco',
      description: 'Rafting no Rio Tocantinzinho, na Chapada dos Veadeiros. Confira datas, preço, requisitos e informações da atividade.'
    },
    '/p/excursao-mambai-go-2dias': {
      title: 'Excursão para Mambaí, Goiás: roteiro e próximas datas | Vertaco',
      description: 'Excursão de aventura para Mambaí, Goiás. Conheça o roteiro, próximas datas, atividades incluídas, requisitos e condições da viagem.'
    },
    '/p/canionismo-chapada-imperial': {
      title: 'Canionismo na Chapada Imperial: datas e preço | Vertaco',
      description: 'Canionismo na Chapada Imperial, no Distrito Federal, com percurso por cachoeiras. Confira datas, preço, requisitos e itens incluídos.'
    },
    '/p/itiquira-rapel-na-ecobocaina': {
      title: 'Rapel na Ecobocaina e Cachoeira do Itiquira | Vertaco',
      description: 'Aventura de rapel na região da Ecobocaina e Cachoeira do Itiquira, em Formosa. Consulte datas, preço, requisitos e roteiro.'
    },
    '/p/trilha-e-rapel-cachoeira-veu-de-noiva': {
      title: 'Trilha e rapel na Chapada Indaiá: Véu de Noiva | Vertaco',
      description: 'Trilha e rapel na Cachoeira Véu de Noiva, na Chapada Indaiá. Confira próximas datas, preço, requisitos e orientações.'
    },
    '/p/rapel-cachoeira-do-bisnau': {
      title: 'Rapel na Cachoeira do Bisnau: datas e preço | Vertaco',
      description: 'Rapel na Cachoeira do Bisnau, em Formosa. Confira próximas datas, preço, requisitos e transporte opcional saindo de Brasília.'
    },
    '/p/excursao-terra-ronca': {
      title: 'Excursão para Terra Ronca: roteiro, datas e preço | Vertaco',
      description: 'Excursão para o Parque Estadual de Terra Ronca, em Goiás. Confira roteiro, próximas datas, preço, requisitos e itens incluídos.'
    },
    '/p/carnaval-pirenopolis-rapel-canionismo': {
      title: 'Carnaval em Pirenópolis com rapel e canionismo | Vertaco',
      description: 'Carnaval de aventura em Pirenópolis, com rapel, canionismo e atividades na natureza. Consulte roteiro, datas, valores e requisitos.'
    },
    '/p/canionismo-em-pirenopolis': {
      title: 'Canionismo em Pirenópolis: datas e preço | Vertaco',
      description: 'Canionismo em Pirenópolis, Goiás. Confira próximas datas, preço, nível de dificuldade, requisitos e informações da atividade.'
    }
  });

  function normalizePath(pathname) {
    var cleanPath = String(pathname || '/')
      .replace(/\/{2,}/g, '/')
      .replace(/\/$/, '');
    return cleanPath || '/';
  }

  function setMetaByName(name, content) {
    var element = document.head.querySelector('meta[name="' + name + '"]');
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  }

  function setMetaByProperty(property, content) {
    var element = document.head.querySelector('meta[property="' + property + '"]');
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  }

  function setCanonical(url) {
    var canonicals = document.head.querySelectorAll('link[rel="canonical"]');
    var canonical = canonicals[0];
    var index;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);

    // Evita canonicals conflitantes deixadas pela plataforma.
    for (index = 1; index < canonicals.length; index += 1) {
      canonicals[index].remove();
    }
  }

  function ensureIndexableRobots() {
    var robots = document.head.querySelector('meta[name="robots"]');

    // Não remove um noindex definido intencionalmente pela plataforma.
    if (robots && /(?:^|,)\s*noindex\b/i.test(robots.content || '')) {
      return;
    }

    setMetaByName(
      'robots',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    );
  }

  function setStructuredData(path, config, canonicalUrl) {
    var scriptId = 'vertaco-seo-jsonld';
    var oldScript = document.getElementById(scriptId);
    var graph;
    var script;

    if (oldScript) {
      oldScript.remove();
    }

    graph = [
      {
        '@type': 'Organization',
        '@id': SITE_URL + '/#organization',
        name: SITE_NAME,
        url: SITE_URL + '/'
      },
      {
        '@type': 'WebSite',
        '@id': SITE_URL + '/#website',
        url: SITE_URL + '/',
        name: SITE_NAME,
        publisher: { '@id': SITE_URL + '/#organization' },
        inLanguage: 'pt-BR'
      },
      {
        '@type': 'WebPage',
        '@id': canonicalUrl + '#webpage',
        url: canonicalUrl,
        name: config.title,
        description: config.description,
        isPartOf: { '@id': SITE_URL + '/#website' },
        about: { '@id': SITE_URL + '/#organization' },
        inLanguage: 'pt-BR'
      }
    ];

    if (path !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': canonicalUrl + '#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: SITE_URL + '/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: config.title.replace(/\s*\|\s*Vertaco\s*$/, ''),
            item: canonicalUrl
          }
        ]
      });
    }

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });
    document.head.appendChild(script);
  }

  var path = normalizePath(window.location.pathname);
  var config = pages[path];
  var canonicalUrl;

  // Não interfere em páginas que ainda não possuem configuração revisada.
  if (!config) {
    return;
  }

  canonicalUrl = path === '/' ? SITE_URL + '/' : SITE_URL + path;

  document.title = config.title;
  setMetaByName('description', config.description);
  ensureIndexableRobots();
  setCanonical(canonicalUrl);

  // Metadados para compartilhamento em redes sociais e mensageiros.
  setMetaByProperty('og:type', 'website');
  setMetaByProperty('og:locale', 'pt_BR');
  setMetaByProperty('og:site_name', SITE_NAME);
  setMetaByProperty('og:title', config.title);
  setMetaByProperty('og:description', config.description);
  setMetaByProperty('og:url', canonicalUrl);
  setMetaByName('twitter:card', 'summary_large_image');
  setMetaByName('twitter:title', config.title);
  setMetaByName('twitter:description', config.description);

  setStructuredData(path, config, canonicalUrl);
})();
