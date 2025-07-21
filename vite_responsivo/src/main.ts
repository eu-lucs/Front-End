import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <header class="ifro-header">
    <div class="container header__container">
      <a href="/" class="header__logo">
        <img src="/logo_ifro.png" alt="Logo do IFRO" />
      </a>
      <button class="header__menu-toggle" id="menu-toggle" aria-label="Abrir menu">&#9776;</button>
      <nav class="header__nav" id="nav">
        <ul class="nav__list">
          <li><a href="#">Institucional</a></li>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Pesquisa</a></li>
          <li><a href="#">Extensão</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="ifro-main container">
    <div class="main__banner">
      <img src="/banner_ifro.jpg" alt="Campus IFRO Vilhena - Foto aérea" />
    </div>

    <section class="intro">
      <h1 class="intro__title">Bem-vindo ao Portal IFRO</h1>
      <p class="intro__text">Este é o espaço central do site. Aqui você poderá adicionar notícias, destaques, avisos, banners e muito mais.</p>
    </section>

    <section class="highlights">
      <div class="highlight">
        <img src="/cursos.jpg" alt="Cursos IFRO" class="highlight__img" />
        <h2>Cursos</h2>
        <p>Conheça nossos cursos técnicos, superiores e de pós-graduação.</p>
      </div>
      <div class="highlight">
        <img src="/extensao.jpeg" alt="Projeto de Extensão IFRO" class="highlight__img" />
        <h2>Extensão</h2>
        <p>Saiba mais sobre nossos projetos de extensão com a comunidade.</p>
      </div>
      <div class="highlight">
        <img src="/pesquisa.jpeg" alt="Pesquisa Científica IFRO" class="highlight__img" />
        <h2>Pesquisa</h2>
        <p>Veja nossas iniciativas de pesquisa científica e tecnológica.</p>
      </div>
    </section>

    <section class="noticias">
      <h2 class="section-title">Últimas Notícias</h2>
      <article class="noticia">
        <h3>IFRO abre inscrições para cursos técnicos 2025</h3>
        <time class="noticia__data">21/07/2025</time>
        <p>Vagas abertas para cursos técnicos em todas as unidades do estado.</p>
      </article>
      <article class="noticia">
        <h3>Evento de tecnologia reúne mais de 500 estudantes</h3>
        <time class="noticia__data">18/07/2025</time>
        <p>Campus Ji-Paraná sediou evento com IA, robótica e programação.</p>
      </article>
      <article class="noticia">
        <h3>Projeto jurídico gratuito à comunidade</h3>
        <time class="noticia__data">15/07/2025</time>
        <p>IFRO Porto Velho Zona Norte promove cidadania e apoio jurídico.</p>
      </article>
    </section>

    <section class="campus">
      <h2>Campus IFRO Vilhena</h2>
      <p>O Campus Vilhena do Instituto Federal de Rondônia oferece ensino público e gratuito de qualidade.</p>
      <ul class="campus__info">
        <li><strong>Endereço:</strong> BR-174, Km 3,5 - Vilhena - RO</li>
        <li><strong>Telefone:</strong> (69) 3322-4200</li>
        <li><strong>Cursos:</strong> Informática, Agropecuária, Engenharia Agronômica, Química e outros.</li>
        <li><strong>Atendimento:</strong> Seg a Sex - 8h às 12h / 14h às 18h</li>
      </ul>
    </section>

    <section class="projetos">
      <h2 class="section-title">Projetos do Campus</h2>
      <div class="projetos__cards">
        <div class="projeto">
          <img src="/horta_escolar.jpeg" alt="Horta Escolar Sustentável" class="projeto__img" />
          <h3>Horta Escolar Sustentável</h3>
          <p>Hortas orgânicas com foco em sustentabilidade nas escolas.</p>
        </div>
        <div class="projeto">
          <img src="/ifro_tech.jpg" alt="IFRO Tech Robótica Educacional" class="projeto__img" />
          <h3>IFRO Tech: Robótica Educacional</h3>
          <p>Projeto com Arduino e lógica para alunos da rede pública.</p>
        </div>
        <div class="projeto">
          <img src="/agroifro.jpg" alt="AgroIFRO" class="projeto__img" />
          <h3>AgroIFRO</h3>
          <p>Parcerias com produtores para aplicar tecnologia no campo.</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="ifro-footer">
    <div class="footer__top container">
      <div class="footer__column">
        <h3>Institucional</h3>
        <ul>
          <li><a href="#">Sobre o IFRO</a></li>
          <li><a href="#">Ouvidoria</a></li>
          <li><a href="#">Site Antigo</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3>Sobre o site</h3>
        <ul>
          <li><a href="#">Acessibilidade</a></li>
          <li><a href="#">Fale Conosco</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <div class="footer__logos">
          <img src="/acesso_informacao.png" alt="Acesso à Informação" />
          <img src="/brasao_governo.png" alt="Governo Federal" />
        </div>
        <p class="footer__info">
          Instituto Federal de Rondônia - Reitoria<br />
          Porto Velho - RO - Atendimento: Seg a Sex - 08h às 12h e 14h às 18h
        </p>
      </div>
    </div>
  </footer>
`;

const toggle = document.getElementById('menu-toggle')!;
const nav = document.getElementById('nav')!;

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
