---
layout: Home
seo:
  title: Kevin Lin's Portfolio Website
  description: Welcome to my portfolio website! I'm Kevin Lin, a Web & Information Systems major at New Jersey Institute of Technology. Explore my creative work and projects as I showcase my skills in web development.
---

---main
images:
  - src: /myhero2.jpg
    alt: my photo
  - src: /hero-mobile2.jpeg
    alt: my photo
---

# <Typewriter>Kevin Lin</Typewriter>

# *Web Developer*  

<Sep size={12} />

As a driven college junior with a passion for web development, I am seeking an opportunity to apply my expertise in HTML, CSS, and JavaScript to contribute to a team's success and gain valuable industry experience.



---achievements
- number: 3rd
  text: Year undergraduate
- number: 5+
  text: Projects Completed

---



---cta
---
<Button href="/about" size="lg">
  About Me
</Button>

---articles
collection:
  path: /blog
  recordsPerPage: 9
  limit: 9
  sortBy: date
  filterBy:
    featured:
      $eq: true
---

### *Featured Articles*

Featured handcrafted articles about my thoughts and experiments.