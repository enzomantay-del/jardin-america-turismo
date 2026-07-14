/**
 * Mejoras del sitio de turismo (prioridad alta/media).
 * No reemplaza la accesibilidad existente: solo agrega capas útiles.
 */
(function () {
  "use strict";

  var PORTAL_URL = "https://jardinamerica.net.ar/";
  var PORTAL_AREA_TURISMO = "https://jardinamerica.net.ar/turismo/";
  var PORTAL_FOLLETO = "folleto.html";
  var WA_TURISMO =
    "https://wa.me/5493743483429?text=" +
    encodeURIComponent("Hola! Consulto por información turística de Jardín América.");
  var TEL_TURISMO = "tel:+5493743483429";

  var GASTRO_REAL = [
    {
      n: "Complejo Turístico Baden Baden",
      tipo: "Restaurante / complejo",
      em: "🍽️",
      d: "Ruta Nacional 12, Jardín América",
      telHref: "tel:+543743482083",
      telDisplay: "(03743) 482-083",
      wa: "https://wa.me/543743482083",
      hor: "Consultar disponibilidad · pileta, quinchos y restaurante",
      maps: "https://www.google.com/maps/search/Complejo+Baden+Baden+Jardín+América",
    },
    {
      n: "Paraíso Lodge",
      tipo: "Lodge / restaurante",
      em: "🏡",
      d: "Ruta 12 km 1445, Arroyo Tabay — a ~4 km del centro",
      telHref: "tel:+5491123668814",
      telDisplay: "(011) 2366-8814",
      wa: "https://wa.me/5491123668814",
      hor: "Desayuno incluido · acceso peatonal a los Saltos del Tabay (~25 min)",
      maps: "https://www.google.com/maps/search/Paraíso+Lodge+Jardín+América",
    },
    {
      n: "Complejo Natural Ysirý",
      tipo: "Complejo / cantina",
      em: "🌿",
      d: "Jardín América, Misiones",
      telHref: "tel:+5493743410273",
      telDisplay: "(03743) 15-410273",
      wa: "https://wa.me/5493743410273",
      hor: "Abierto todos los días desde las 8 hs · piscinas y camping",
      maps: "https://www.google.com/maps/search/Complejo+Natural+Ysirý+Jardín+América",
    },
    {
      n: "Cooperativa Flor de Jardín",
      tipo: "Productos regionales",
      em: "🧉",
      d: "Ruta Nacional 12, Jardín América",
      telHref: "",
      telDisplay: "Consultar en planta / redes",
      web: "https://flordejardin.com.ar/",
      hor: "Yerba, encurtidos, dulces y fécula de mandioca a precio de origen",
      maps: "https://www.google.com/maps/search/Cooperativa+Flor+de+Jardín+Jardín+América",
    },
    {
      n: "Saltos del Tabay — predio",
      tipo: "Naturaleza / parador",
      em: "🌊",
      d: "A ~4 km del centro, Jardín América",
      telHref: "tel:+5493743400421",
      telDisplay: "(03743) 400-421",
      wa: "https://wa.me/5493743400421?text=" + encodeURIComponent("Hola! Consulto por los Saltos del Tabay."),
      hor: "Ver tarifas y dormis en la ficha del atractivo",
      maps: "https://www.google.com/maps/search/Saltos+del+Tabay+Jardín+América+Misiones",
    },
  ];

  var I18N = {
    es: {
      quickKicker: "Empezá acá",
      quickTitle: "¿Qué necesitás hoy?",
      q1t: "Saltos del Tabay",
      q1d: "Atractivo principal, tarifas y WhatsApp",
      q2t: "Cómo llegar",
      q2d: "Auto, colectivo y avión",
      q3t: "Colectivos",
      q3d: "Horarios a Posadas, Iguazú y Ruta 14",
      q4t: "Dónde dormir",
      q4d: "Alojamientos registrados",
      factsTitle: "Datos prácticos",
      factDist: "Distancia",
      factDistV: "≈ 4 km del centro",
      factHow: "Cómo llegar",
      factHowV: "Auto / remis · también a pie desde Paraíso Lodge (~25 min)",
      factContact: "Consultas",
      factContactV: "WhatsApp del predio o Oficina de Turismo",
      factTip: "Tip",
      factTipV: "Confirmá tarifas y clima antes de ir · ideal para toda la familia",
      colecLead:
        "Filtrá por destino o buscá una empresa. Los horarios son orientativos (lun–vie).",
      colecNext: "Próximos de hoy (aprox.):",
      colecNone: "No hay más salidas listadas para hoy, o es fin de semana (la tabla es lun–vie).",
      mapTitle: "Atajos del mapa",
      festYear: "Calendario " + new Date().getFullYear(),
      festLink: "Ver agenda de eventos del mes →",
      gastroOk:
        "Paradas y gastronomía con contacto real (establecimientos del circuito turístico). Confirmá siempre horarios y disponibilidad.",
      portal: "Portal municipal",
      folleto: "Folleto",
      waTurismo: "WhatsApp Turismo",
      langLabel: "Idioma",
    },
    pt: {
      quickKicker: "Comece aqui",
      quickTitle: "O que você precisa hoje?",
      q1t: "Saltos del Tabay",
      q1d: "Atração principal, tarifas e WhatsApp",
      q2t: "Como chegar",
      q2d: "Carro, ônibus e avião",
      q3t: "Ônibus",
      q3d: "Horários para Posadas, Iguaçu e Rota 14",
      q4t: "Onde dormir",
      q4d: "Hospedagens registradas",
      factsTitle: "Dados práticos",
      factDist: "Distância",
      factDistV: "≈ 4 km do centro",
      factHow: "Como chegar",
      factHowV: "Carro / remís · a pé desde Paraíso Lodge (~25 min)",
      factContact: "Consultas",
      factContactV: "WhatsApp do predio ou Escritório de Turismo",
      factTip: "Dica",
      factTipV: "Confirme tarifas e clima antes · ideal para toda a família",
      colecLead:
        "Filtre por destino ou busque uma empresa. Horários orientativos (seg–sex).",
      colecNext: "Próximos de hoje (aprox.):",
      colecNone: "Não há mais saídas listadas para hoje, ou é fim de semana (tabela seg–sex).",
      mapTitle: "Atalhos do mapa",
      festYear: "Calendário " + new Date().getFullYear(),
      festLink: "Ver agenda de eventos do mês →",
      gastroOk:
        "Paradas e gastronomia com contato real (circuito turístico). Confirme sempre horários e disponibilidade.",
      portal: "Portal municipal",
      folleto: "Folheto",
      waTurismo: "WhatsApp Turismo",
      langLabel: "Idioma",
    },
  };

  var lang = "es";

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  }

  function applyI18n() {
    document.querySelectorAll("[data-tm]").forEach(function (el) {
      var key = el.getAttribute("data-tm");
      if (key) el.textContent = t(key);
    });
    document.documentElement.lang = lang === "pt" ? "pt" : "es";
    document.querySelectorAll(".tm-lang button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  function injectQuickStart() {
    if (document.getElementById("tm-quick")) return;
    var hero = document.getElementById("hero");
    if (!hero || !hero.parentNode) return;

    var wrap = document.createElement("section");
    wrap.id = "tm-quick";
    wrap.className = "tm-quick";
    wrap.setAttribute("aria-labelledby", "tm-quick-title");
    wrap.innerHTML =
      '<div class="container">' +
      '<p class="tm-quick-kicker" data-tm="quickKicker">Empezá acá</p>' +
      '<h2 id="tm-quick-title" data-tm="quickTitle">¿Qué necesitás hoy?</h2>' +
      '<div class="tm-quick-grid" role="list">' +
      '<a class="tm-quick-link" role="listitem" href="#que-visitar-local"><strong data-tm="q1t">Saltos del Tabay</strong><span data-tm="q1d">Atractivo principal</span></a>' +
      '<a class="tm-quick-link" role="listitem" href="#inicio"><strong data-tm="q2t">Cómo llegar</strong><span data-tm="q2d">Auto, colectivo y avión</span></a>' +
      '<a class="tm-quick-link" role="listitem" href="#informacion" data-tm-open-tab="colectivos"><strong data-tm="q3t">Colectivos</strong><span data-tm="q3d">Horarios</span></a>' +
      '<a class="tm-quick-link" role="listitem" href="#informacion" data-tm-open-tab="alojamientos"><strong data-tm="q4t">Dónde dormir</strong><span data-tm="q4d">Alojamientos</span></a>' +
      "</div></div>";

    hero.insertAdjacentElement("afterend", wrap);

    wrap.addEventListener("click", function (e) {
      var a = e.target.closest("[data-tm-open-tab]");
      if (!a) return;
      var tab = a.getAttribute("data-tm-open-tab");
      setTimeout(function () {
        openInfoTab(tab);
      }, 50);
    });
  }

  function openInfoTab(name) {
    var btn = document.getElementById("tab-" + name);
    if (btn) btn.click();
  }

  function injectTabayFacts() {
    if (document.getElementById("tm-tabay-facts")) return;
    var list = document.querySelector("#que-visitar-local .featured-list");
    if (!list) return;
    var box = document.createElement("div");
    box.id = "tm-tabay-facts";
    box.className = "tm-facts";
    box.innerHTML =
      '<h4 data-tm="factsTitle">Datos prácticos</h4>' +
      "<dl>" +
      "<div><dt data-tm=\"factDist\">Distancia</dt><dd data-tm=\"factDistV\">≈ 4 km del centro</dd></div>" +
      "<div><dt data-tm=\"factHow\">Cómo llegar</dt><dd data-tm=\"factHowV\">Auto / remis</dd></div>" +
      "<div><dt data-tm=\"factContact\">Consultas</dt><dd data-tm=\"factContactV\">WhatsApp del predio</dd></div>" +
      "<div><dt data-tm=\"factTip\">Tip</dt><dd data-tm=\"factTipV\">Confirmá tarifas y clima</dd></div>" +
      "</dl>";
    list.insertAdjacentElement("afterend", box);
  }

  function parseTimeToMinutes(text) {
    var m = String(text || "").match(/(\d{1,2})\s*:\s*(\d{2})/);
    if (!m) return null;
    return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  }

  function enhanceColectivos() {
    var panel = document.getElementById("panel-colectivos");
    if (!panel || document.getElementById("tm-colec-tools")) return;

    var tools = document.createElement("div");
    tools.id = "tm-colec-tools";
    tools.className = "tm-colec-tools";
    tools.innerHTML =
      '<p data-tm="colecLead">Filtrá por destino o buscá una empresa.</p>' +
      '<div class="tm-colec-row" role="group" aria-label="Filtro de destino">' +
      '<button type="button" class="tm-chip is-active" data-dest="todos">Todos</button>' +
      '<button type="button" class="tm-chip" data-dest="posadas">Posadas</button>' +
      '<button type="button" class="tm-chip" data-dest="iguazu">Iguazú</button>' +
      '<button type="button" class="tm-chip" data-dest="ruta14">Ruta 14</button>' +
      "</div>" +
      '<div class="tm-colec-row">' +
      '<label for="tm-colec-q">Buscar</label>' +
      '<input id="tm-colec-q" type="search" placeholder="Empresa o destino…" autocomplete="off">' +
      "</div>" +
      '<div class="tm-colec-actions">' +
      '<a class="tm-btn-wa" href="' +
      WA_TURISMO +
      '" target="_blank" rel="noopener noreferrer" data-tm="waTurismo">WhatsApp Turismo</a>' +
      '<a class="tm-btn-sec" href="' +
      TEL_TURISMO +
      '">Llamar Turismo</a>' +
      '<button type="button" class="tm-btn-sec" id="tm-colec-next-btn">Próximos de hoy</button>' +
      "</div>" +
      '<p class="tm-colec-next" id="tm-colec-next" hidden></p>';

    panel.insertBefore(tools, panel.firstChild);

    var blocks = Array.prototype.slice.call(panel.querySelectorAll(".colectivos-empresa"));
    blocks.forEach(function (block, idx) {
      var key = idx === 0 ? "posadas" : idx === 1 ? "iguazu" : "ruta14";
      block.setAttribute("data-tm-dest", key);
    });

    var state = { dest: "todos", q: "" };

    function applyFilter() {
      var q = state.q.trim().toLowerCase();
      blocks.forEach(function (block) {
        var dest = block.getAttribute("data-tm-dest");
        var destOk = state.dest === "todos" || state.dest === dest;
        var rows = block.querySelectorAll("tbody tr");
        var any = false;
        rows.forEach(function (tr) {
          var text = tr.textContent.toLowerCase();
          var match = !q || text.indexOf(q) !== -1;
          tr.classList.toggle("tm-row-hide", !match);
          if (match) any = true;
        });
        block.classList.toggle("tm-dest-hide", !destOk || (q && !any));
      });
    }

    tools.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-dest]");
      if (chip) {
        state.dest = chip.getAttribute("data-dest");
        tools.querySelectorAll("[data-dest]").forEach(function (b) {
          b.classList.toggle("is-active", b === chip);
        });
        applyFilter();
      }
    });

    var input = document.getElementById("tm-colec-q");
    if (input) {
      input.addEventListener("input", function () {
        state.q = input.value;
        applyFilter();
      });
    }

    document.getElementById("tm-colec-next-btn").addEventListener("click", function () {
      highlightNext();
    });

    function highlightNext() {
      var now = new Date();
      var day = now.getDay(); // 0 sun .. 6 sat
      var mins = now.getHours() * 60 + now.getMinutes();
      var nextEl = document.getElementById("tm-colec-next");
      panel.querySelectorAll("tr.tm-row-next").forEach(function (tr) {
        tr.classList.remove("tm-row-next");
      });

      if (day === 0 || day === 6) {
        nextEl.hidden = false;
        nextEl.textContent = t("colecNone");
        return;
      }

      var found = [];
      blocks.forEach(function (block) {
        if (block.classList.contains("tm-dest-hide")) return;
        var title = (block.querySelector("h3") || {}).textContent || "";
        block.querySelectorAll("tbody tr").forEach(function (tr) {
          if (tr.classList.contains("tm-row-hide")) return;
          var cells = tr.querySelectorAll("td");
          if (!cells.length) return;
          var timeCell =
            cells.length >= 3
              ? cells[1]
              : cells.length === 2
                ? cells[1]
                : cells[cells.length - 1];
          // Ruta 14: Destino | Empresa | Horario
          if (block.getAttribute("data-tm-dest") === "ruta14") timeCell = cells[2] || cells[1];
          var tm = parseTimeToMinutes(timeCell ? timeCell.textContent : "");
          if (tm == null || tm < mins) return;
          found.push({ tr: tr, tm: tm, title: title, label: tr.textContent.replace(/\s+/g, " ").trim() });
        });
      });

      found.sort(function (a, b) {
        return a.tm - b.tm;
      });
      var top = found.slice(0, 3);
      top.forEach(function (row) {
        row.tr.classList.add("tm-row-next");
      });
      nextEl.hidden = false;
      if (!top.length) {
        nextEl.textContent = t("colecNone");
      } else {
        nextEl.textContent =
          t("colecNext") +
          " " +
          top
            .map(function (r) {
              return r.label.slice(0, 80);
            })
            .join(" · ");
        top[0].tr.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  function enhanceMap() {
    var wrap = document.querySelector(".mapa-wrap");
    if (!wrap || document.getElementById("tm-map-filters")) return;
    var filters = document.createElement("div");
    filters.id = "tm-map-filters";
    filters.className = "tm-map-filters";
    filters.setAttribute("role", "navigation");
    filters.setAttribute("aria-label", "Atajos del mapa");
    var links = [
      ["Naturaleza", "Saltos+del+Tabay+Jardín+América"],
      ["Ciudad", "Plaza+Colón+Jardín+América"],
      ["Dormir", "alojamientos+Jardín+América+Misiones"],
      ["Terminal", "Terminal+de+ómnibus+Jardín+América"],
      ["Mapa completo", null],
    ];
    filters.innerHTML = links
      .map(function (item) {
        var href =
          item[1] == null
            ? "https://www.google.com/maps/d/viewer?mid=1moxM3yLxCF-AeQOEoxLzfiNuxcGwcPQ"
            : "https://www.google.com/maps/search/?api=1&query=" + item[1];
        return (
          '<a href="' +
          href +
          '" target="_blank" rel="noopener noreferrer">' +
          item[0] +
          "</a>"
        );
      })
      .join("");
    wrap.appendChild(filters);
  }

  function replaceGastro() {
    if (window.GASTRO_FROM_FB) return;
    window.GASTRO = GASTRO_REAL.slice();
    window.GASTRO_EMBEDDED = GASTRO_REAL.slice();

    var banner = document.querySelector(".gastro-intro-banner");
    if (banner) {
      banner.classList.add("tm-gastro-ok");
      banner.innerHTML =
        '<span aria-hidden="true">✅</span><span data-tm="gastroOk">' +
        t("gastroOk") +
        "</span>";
    }

    if (typeof window.renderGastro === "function") {
      try {
        window.renderGastro();
      } catch (err) {
        /* ignore */
      }
    }

    setTimeout(decorateGastroCards, 50);
  }

  function decorateGastroCards() {
    var cards = document.querySelectorAll("#gastro-grid .turlista-card, #panel-gastronomia .turlista-card");
    if (!cards.length || !window.GASTRO) return;
    cards.forEach(function (card, idx) {
      var g = window.GASTRO[idx];
      if (!g) return;
      var actions = card.querySelector(".turlista-actions");
      if (!actions) return;
      if (g.wa && !actions.querySelector(".tm-card-wa")) {
        var a = document.createElement("a");
        a.className = "turlista-btn-tel tm-card-wa";
        a.href = g.wa;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", "WhatsApp " + (g.n || ""));
        a.innerHTML = '<span aria-hidden="true">💬</span> WhatsApp';
        actions.appendChild(a);
      }
      if (g.maps && !actions.querySelector(".tm-card-maps")) {
        var m = document.createElement("a");
        m.className = "turlista-btn-tel tm-card-maps";
        m.href = g.maps;
        m.target = "_blank";
        m.rel = "noopener noreferrer";
        m.setAttribute("aria-label", "Mapa " + (g.n || ""));
        m.innerHTML = '<span aria-hidden="true">📍</span> Mapa';
        actions.appendChild(m);
      }
      if (g.web && !actions.querySelector(".tm-card-web")) {
        var w = document.createElement("a");
        w.className = "turlista-btn-tel tm-card-web";
        w.href = g.web;
        w.target = "_blank";
        w.rel = "noopener noreferrer";
        w.textContent = "Sitio web";
        actions.appendChild(w);
      }
    });
  }

  function rebuildGastro() {
    /* legacy no-op: usamos renderGastro del sitio */
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function enhanceFestividades() {
    var section = document.getElementById("festividades");
    if (!section || document.getElementById("tm-fest-meta")) return;
    var header = section.querySelector(".section-header") || section.querySelector("header");
    if (!header) return;
    var meta = document.createElement("div");
    meta.id = "tm-fest-meta";
    meta.className = "tm-fest-meta";
    meta.innerHTML =
      '<span class="section-badge" data-tm="festYear">' +
      t("festYear") +
      "</span>" +
      '<a href="#eventos" data-tm="festLink">Ver agenda de eventos del mes →</a>';
    header.appendChild(meta);
  }

  function enhanceNavAndFooter() {
    var nav = document.getElementById("nav-menu");
    if (nav && !document.getElementById("tm-nav-portal")) {
      var li = document.createElement("li");
      li.id = "tm-nav-portal";
      li.innerHTML =
        '<a class="nav-link tm-ext-link" href="' +
        PORTAL_AREA_TURISMO +
        '" target="_blank" rel="noopener noreferrer" data-tm="portal">Portal municipal</a>';
      nav.appendChild(li);

      var langWrap = document.createElement("li");
      langWrap.className = "tm-lang";
      langWrap.setAttribute("aria-label", "Idioma");
      langWrap.innerHTML =
        '<button type="button" data-lang="es" class="is-active">ES</button>' +
        '<button type="button" data-lang="pt">PT</button>';
      nav.appendChild(langWrap);
      langWrap.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-lang]");
        if (!btn) return;
        lang = btn.getAttribute("data-lang") || "es";
        try {
          localStorage.setItem("tm-lang", lang);
        } catch (err) {}
        applyI18n();
      });
    }

    var footer = document.querySelector("footer");
    if (footer && !document.getElementById("tm-footer-extra")) {
      var box = document.createElement("div");
      box.id = "tm-footer-extra";
      box.className = "tm-footer-extra";
      box.innerHTML =
        '<a href="' +
        PORTAL_URL +
        '" target="_blank" rel="noopener noreferrer" data-tm="portal">Portal municipal</a>' +
        '<a href="folleto.html" data-tm="folleto">Folleto</a>' +
        '<a href="' +
        WA_TURISMO +
        '" target="_blank" rel="noopener noreferrer" data-tm="waTurismo">WhatsApp Turismo</a>' +
        '<a href="https://lautiezequiell.github.io/memoria-viva-jardin-america/" target="_blank" rel="noopener noreferrer">Memoria Viva</a>' +
        '<a href="https://xdebdesarrollos.github.io/caminohistoricocultural/" target="_blank" rel="noopener noreferrer">Camino histórico</a>';
      var inner = footer.querySelector(".footer-grid, .container, .footer-content") || footer;
      inner.appendChild(box);
    }
  }

  function softEmptyStates() {
    // Si eventos siguen en "Cargando" mucho tiempo, ya hay timeout; reforzamos enlace a festividades
    setTimeout(function () {
      var grid = document.getElementById("eventos-grid");
      if (!grid) return;
      var txt = grid.textContent || "";
      if (/Cargando eventos/i.test(txt)) {
        grid.innerHTML =
          '<div class="ev-empty"><p>No pudimos cargar la agenda en este momento.</p>' +
          '<p><a href="#festividades">Ver calendario anual de festividades</a> · ' +
          '<a href="' +
          WA_TURISMO +
          '" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></p></div>';
      }
      var promos = document.getElementById("promos-web-grid");
      if (promos && /Cargando promociones/i.test(promos.textContent || "")) {
        promos.innerHTML =
          '<p style="text-align:center;color:#64748b">No hay promociones cargadas por ahora. Consultá alojamientos en <a href="#informacion" id="tm-goto-aloj">Información útil</a>.</p>';
        var go = document.getElementById("tm-goto-aloj");
        if (go) {
          go.addEventListener("click", function () {
            setTimeout(function () {
              openInfoTab("alojamientos");
            }, 50);
          });
        }
      }
    }, 12000);
  }

  function init() {
    try {
      var saved = localStorage.getItem("tm-lang");
      if (saved === "pt" || saved === "es") lang = saved;
    } catch (err) {}

    injectQuickStart();
    injectTabayFacts();
    enhanceColectivos();
    enhanceMap();
    enhanceFestividades();
    enhanceNavAndFooter();
    replaceGastro();
    softEmptyStates();
    applyI18n();

    // Deep-links: #colectivos / #alojamientos / #gastronomia
    var hash = (location.hash || "").replace("#", "");
    if (hash === "colectivos" || hash === "alojamientos" || hash === "gastronomia") {
      openInfoTab(hash);
      var info = document.getElementById("informacion");
      if (info) info.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
