# Wilson's Lone Star — Website

**wilsonslonestar.com** | Waxahachie, TX | USCCA Certified Firearms & Defense Training

---

## File Structure

```
wilsonslonestar/
├── index.html                          ← Home page
├── about.html                          ← About / Instructor
├── courses.html                        ← Courses overview
├── schedule.html                       ← Upcoming dates & registration
├── faq.html                            ← Frequently Asked Questions
├── contact.html                        ← Contact & registration form
├── privacy.html                        ← Privacy policy
├── courses/
│   ├── firearm-training.html
│   ├── home-defense.html
│   ├── first-aid.html
│   └── countering-mass-shooting.html
├── css/
│   └── style.css                       ← All styles (one file)
├── js/
│   ├── layout.js                       ← Shared nav & footer (edit once, applies everywhere)
│   └── main.js                         ← Mobile nav toggle & form handling
└── README.md
```

---

## Hosting on GitHub Pages (free)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up for a free account if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it `wilsonslonestar` (or any name you prefer)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On your new repo page, click **uploading an existing file**
2. Drag the entire folder contents (all HTML files, the css/ and js/ folders) into the upload area
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Set Branch to `main` and folder to `/ (root)`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/wilsonslonestar/`

### Step 5 — Connect your custom domain (wilsonslonestar.com)
1. In GitHub Pages settings, enter `wilsonslonestar.com` under **Custom domain**
2. Log into your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | yourusername.github.io |

DNS changes take 15 minutes to 48 hours to propagate. GitHub will automatically provision an SSL certificate (HTTPS) once the domain verifies.

---

## Customizing the Site

### Replace [brackets] throughout
Every `[bracket]` in the HTML files is a placeholder for your real information:
- `Brent Wilson` → your name
- `4 hours` → actual course duration  
- `$75` → actual price
- `[Month DD]` → real class dates
- `[your background]` → your credentials on the About page
- `brent@wilsonslonestar.com` → your actual email address

### Update the nav and footer (one place)
Open `js/layout.js` — this single file controls the navigation and footer on every page. Update your email, location, or links there once, and it applies sitewide.

### Add a real instructor photo
On `index.html` and `about.html`, find the `<div class="about-snippet__img">` element and replace it with:
```html
<img src="images/instructor.jpg" alt="Wilson's Lone Star instructor" class="about-snippet__img" style="object-fit:cover">
```
Then create an `images/` folder and add your photo.

### Add your real email to the contact form
The form currently shows a success message on the client side. To actually receive submissions, use a free form service:
- **Formspree** (formspree.io) — free tier, easy setup
- **Web3Forms** (web3forms.com) — free, no signup required

For Formspree:
1. Sign up at formspree.io and create a form
2. Replace `<form id="contact-form" novalidate>` with `<form id="contact-form" action="https://formspree.io/f/YOURCODE" method="POST">`
3. Remove the JavaScript submit handler from main.js (or keep it for the success message)

### Update class dates
Open `schedule.html` and replace the `[Month DD]` and `[XX]` placeholders in the table rows with your real dates and prices. Add or remove `<tr>` rows as needed.

---

## SEO Tips
- The `<title>` and `<meta name="description">` tags are already optimized on every page
- Add your site to [Google Search Console](https://search.google.com/search-console) after going live
- Submit your sitemap at `wilsonslonestar.com/sitemap.xml` (create a simple one once live)
- The most impactful local SEO action: get your [Google Business Profile](https://business.google.com) verified

---

Built for Wilson's Lone Star by Claude (Anthropic) — April 2026
