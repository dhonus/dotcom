<script>
  const current_year = new Date().getFullYear();
</script>

<div class="main-wrapper">
  <div class="sidebar">
    <div class="identity">
        <img src="/images/profile.png" alt="Daniel Honus" width="200" height="200" />
        <h2>Daniel Honus</h2>
        <p>Welcome to my personal<br>website.</p>
    </div>
    <nav class="navbar">
      <a href="/"><img src="/images/home-svgrepo-com.svg"/>Home</a>
      <a href="https://github.com/dhonus"><img src="/images/github-svgrepo-com.svg"/>Github</a>
      <a href="/about"><img src="/images/faq-svgrepo-com.svg"/>About me</a>
      <a href="/blog"><img src="/images/news-svgrepo-com.svg"/>Blog</a>
    </nav>
  </div>
  <div class="right-content">
    <slot></slot>
  </div>
</div>
<footer>
  <p class="footer-copyright">Copyright © 2018 – {current_year} Daniel Honus. This website is free software licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" style="color:gray;">GNU GPLv3</a>.</p>
  <a target="_blank" href="https://mega.nz/megadrop/BdiWVPiHPpo">
    <button class="footer-megalink">Send Me a File With MEGA</button>
  </a>
</footer>