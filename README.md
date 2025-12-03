<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Peppi Myllymäki</title>
  <link rel="stylesheet" href="workportfolio.css" />
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <h1>Peppi Myllymäki</h1>
    <nav>
      <a href="#about">About me</a>
      <a href="#websites">Web development work</a>
      <a href="#work">Other work experience</a>
      <a href="#projects">Projects & skills</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <!-- About Section -->
    <section id="about" class="section">
      <h2>About Me</h2>
      <div class="about-content">
        <img src="img/pikkupeppi.png" alt="My Photo" class="profile-pic" />
        <p>
          I'm a game programming engineering student finishing my degree. I combine my technical coding skill with strong visual and creative capabilities.
          I enjoy building things that sit between storytelling, design and technology; from websites to 3D visuals, interactive experiences and videogames.
          <br /><br />
          I work with C#, C++, Unity, Unreal Engine, HTML, CSS and JavaScript, and I’ve created several websites both with and without frameworks.
          I also have experience in 3D modeling, animation, photogrammetry, Blender, XAMPP, and graphic design.
          Lately I’ve been expanding my skills in working with data, Excel and basic data processing workflows.
          <br /><br />
          My working style is calm, responsible and thorough. I’m comfortable taking initiative, guiding a team when needed, and learning new tools quickly.
          I’m especially motivated by projects where I can merge code, visual storytelling and interactive design.
          <br /><br />
          I’m looking for a role where I can create impactful digital experiences; whether through data-driven visuals, interactive stories, game-like experiences, or new experimental formats that mix design and code.
        </p>
      </div>
    </section>

    <!-- Web Development Work Section -->
    <section id="websites" class="section">
      <h2>Web Development Work</h2>
      <div class="accordion">

        <!-- XAMK Gamelab -->
        <div class="accordion-item">
          <button class="accordion-header">
            XAMK Gamelab | Website developer <span class="accordion-toggle">⌵</span>
          </button>
          <div class="accordion-panel">
            <p class="accordion-text">
              I developed the Gamelab website, following designs created in Figma by the project lead.
              My goal was to build a modern, visually appealing, and responsive site while implementing features like downloadable assets, interactive media galleries, and dynamic buttons.
            </p>
            <a href="https://gamelab.fi/" target="_blank" class="accordion-button">Visit the website →</a>
          </div>
        </div>

        <!-- SAK Lohja -->
        <div class="accordion-item">
          <button class="accordion-header">
            SAK:n Lohjan paikallisjärjestö | Website developer & Graphic design <span class="accordion-toggle">⌵</span>
          </button>
          <div class="accordion-panel">
            <p class="accordion-text">
              I am designing and developing a modern and visually appealing website for SAK Lohja using Yhdistysavain,
              following the client’s specifications. The project focuses on accessibility, online forms, and cohesive brand identity.
            </p>
          </div>
        </div>

        <!-- Lavoka Oy -->
        <div class="accordion-item">
          <button class="accordion-header">Lavoka Oy | Website developer <span class="accordion-toggle">⌵</span></button>
          <div class="accordion-panel">
            <p class="accordion-text">
              I designed and developed the official website for Lavoka Oy using Zoner’s website builder,
              creating a professional and user-friendly site based on the company’s branding.
            </p>
            <div class="media-grid">
              <img src="img/lavoka.jpeg" class="media-item" />
            </div>
            <a href="https://lavoka.fi" target="_blank" class="accordion-button">Visit the website →</a>
          </div>
        </div>

        <!-- Own Website -->
        <div class="accordion-item">
          <button class="accordion-header">Own website <span class="accordion-toggle">⌵</span></button>
          <div class="accordion-panel">
            <p class="accordion-text">
              This was the first website I ever created, built in 2023 during a web development course.
              It served as my personal portfolio and focused on expressive visuals, original artwork, and clear presentation.
            </p>
            <a href="https://portfolio.gamelab.fi/peppi.myllymaki/" target="_blank" class="accordion-button">Visit the website →</a>
          </div>
        </div>

      </div>
    </section>

    <!-- Projects & Skills Section -->
    <section id="projects" class="section">
      <h2>Projects and Skills</h2>
      <div class="accordion">
        <section class="skills-overview" id="skills-overview">
          <h3>Key skills demonstrated across projects and <span class="pink">gained from courses</span></h3>
          <ul class="skills-list">
            <li class="skill">
              <span class="skill-name">Excel</span>
              <span class="skill-courses"><br /><br />Excel: Managing and Analyzing Data</span>
            </li>
            <li class="skill">
              <span class="skill-name">Graphic design & Illustration</span>
              <span class="skill-projects"><br /><br />Ylioppilaskunnan Soittajat<br />Luna Raccoon's Rescue<br />Own website</span>
            </li>
            <li class="skill">
              <span class="skill-name">Animation & motion</span>
              <span class="skill-projects"><br /><br />Animation<br />Luna Raccoon’s Rescue</span>
            </li>
            <li class="skill">
              <span class="skill-name">Front-end (HTML / CSS / JS)</span>
              <span class="skill-projects"><br /><br />XAMK Gamelab<br />Own website</span>
              <span class="skill-courses">Website basics</span>
            </li>
            <li class="skill">
              <span class="skill-name">Full-stack / CRUD & backend fundamentals</span>
              <span class="skill-projects"><br /><br />Task manager</span>
              <span class="skill-courses">Backend programming<br />Game data</span>
            </li>
            <li class="skill">
              <span class="skill-name">3D modelling & photogrammetry</span>
              <span class="skill-projects"><br /><br />3D-modeling<br />Photogrammetry</span>
              <span class="skill-courses">Graphics and 3D-modeling<br />Character design</span>
            </li>
            <li class="skill">
              <span class="skill-name">Web design</span>
              <span class="skill-projects"><br /><br />Lavoka Oy<br />SAK:n Lohjan paikallisjärjestö<br />Own website</span>
              <span class="skill-courses">Website basics</span>
            </li>
            <li class="skill">
              <span class="skill-name">Programming</span>
              <span class="skill-projects"><br /><br />Kuura Murder Mystery 3</span>
              <span class="skill-courses">Programming<br />Game programming (+ Applied, Advanced)<br />Object oriented programming<br />Software architecture and game programming patterns<br />Backend programming<br />Operating environments of online games</span>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <!-- Other Work Section -->
    <section id="work" class="section">
      <h2>Other Work Experience</h2>
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-header">Ylioppilaskunnan Soittajat | Graphic Design <span class="accordion-toggle">⌵</span></button>
          <div class="accordion-panel">
            <p class="accordion-text">
              I designed and produced marketing materials for a concert event, including poster, social media ads, brochure, and banner.
            </p>
            <div class="media-grid">
              <img src="img/FINAL2 YS drawn BANNER valoisa.png" class="media-item" />
              <img src="img/FINAL2 YS drawn SQUARE valoisa.png" class="media-item" />
              <img src="img/Ehdotus YS drawn POSTER valoisa.png" class="media-item" />
              <img src="img/Uusi juliste YS drawn POSTER valoisa.png" class="media-item" />
              <img src="img/Käsiohjelman kansikuva v2.png" class="media-item" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
      <h2>Education</h2>
      <p>
        I am completing a Bachelor of Engineering (AMK) in Game Programming at Kaakkois-Suomen ammattikorkeakoulu (XAMK) with GPA 4.24.
        Studies cover programming (C#, C++), Unity/Unreal workflows, 3D modeling, animation, graphics, web development (HTML/CSS/JS), game design, physics, mathematics, data management, and digital security.
      </p>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <h2>Contact</h2>
      <p>📧 peppitau@gmail.com</p>
      <p><a href="https://www.linkedin.com/in/peppi-myllym%C3%A4ki-589670253/" target="_blank">👤 LinkedIn</a></p>
    </section>
  </main>

  <!-- Modal -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <span id="closeModal" class="close">&times;</span>
      <div id="modalInner"></div>
    </div>
  </div>

  <script src="workportfolio.js"></script>
</body>
</html>
