// ── Nav & Footer injection ──
// This script injects the shared nav and footer into every page.
// Update links and content here once to affect the whole site.

(function () {
  const path = window.location.pathname;
  const isSubdir = path.includes('/courses/');
  const root = isSubdir ? '../' : './';

  const navHTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="${root}index.html" class="nav__logo">Wilson's <span>Lone Star</span></a>
    <ul class="nav__links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${root}courses.html">Courses</a></li>
      <li><a href="${root}about.html">About</a></li>
      <li><a href="${root}schedule.html">Schedule</a></li>
      <li><a href="${root}faq.html">FAQ</a></li>
      <li><a href="${root}contact.html">Contact</a></li>
    </ul>
    <a href="${root}schedule.html" class="nav__cta">Register Now</a>
    <button class="nav__toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav__mobile">
    <a href="${root}index.html">Home</a>
    <a href="${root}courses.html">Courses</a>
    <a href="${root}about.html">About</a>
    <a href="${root}schedule.html">Schedule</a>
    <a href="${root}faq.html">FAQ</a>
    <a href="${root}contact.html">Contact</a>
    <a href="${root}schedule.html" style="color:var(--gold);font-weight:bold;margin-top:4px">Register Now →</a>
  </div>
</nav>`;

  const footerHTML = `
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__top">
      <div class="footer__brand">
        <div class="nav__logo">Wilson's <span style="color:var(--gold)">Lone Star</span></div>
        <p>USCCA-certified firearms and personal defense training in Waxahachie, TX. Serving Ellis County and the greater DFW area.</p>
      </div>
      <div class="footer__col">
        <h4>Courses</h4>
        <ul>
          <li><a href="${root}courses/firearm-training.html">Firearm Training</a></li>
          <li><a href="${root}courses/home-defense.html">Home Defense</a></li>
          <li><a href="${root}courses/first-aid.html">First Aid Fundamentals</a></li>
          <li><a href="${root}courses/countering-mass-shooting.html">Countering the Mass Shooting</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Site</h4>
        <ul>
          <li><a href="${root}about.html">About</a></li>
          <li><a href="${root}schedule.html">Schedule & Registration</a></li>
          <li><a href="${root}faq.html">FAQ</a></li>
          <li><a href="${root}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Contact</h4>
        <ul>
          <li><a href="${root}contact.html">Send a message</a></li>
          <li><a href="mailto:brent@wilsonslonestar.com">brent@wilsonslonestar.com</a></li>
          <li style="color:var(--text-subtle);font-size:13px;margin-top:4px">Waxahachie, TX 75165</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; ${new Date().getFullYear()} Wilson's Lone Star. All rights reserved.</p>
      <div class="footer__legal">
        <a href="${root}privacy.html">Privacy Policy</a>
        <a href="${root}contact.html">Waiver Info</a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = navHTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = footerHTML;
})();
