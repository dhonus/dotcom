<script>
  const current_year = new Date().getFullYear();
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
</nav>

<slot></slot>

<footer>
  <p class="footer-copyright">Copyright © 2018 – {current_year} Daniel Honus. This website is free software licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" style="color:gray;">GNU GPLv3</a>.</p>
  <a target="_blank" href="https://mega.nz/megadrop/BdiWVPiHPpo">
    <button class="footer-megalink">Send Me a File With MEGA</button>
  </a>
</footer>