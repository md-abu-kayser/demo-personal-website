# Personal Portfolio | Kawser - Full-Stack Engineer

## Demo Frontend

Professional, responsive personal portfolio template for a Full Stack Developer and UI/UX Designer. Built with Tailwind CSS, DaisyUI and lightweight custom CSS for fast performance and easy customization.

## Table of Contents

- Overview
- Live Demo
- Features
- Tech Stack
- Project Structure
- Getting Started
- Customization Guide
- Deployment
- Contributing
- Contact

## Overview

This repository contains a polished landing/portfolio website showcasing projects, services, client testimonials, and contact information for Muhammad Kawser - a Full Stack Developer and UI/UX Designer. The layout emphasizes performance, accessibility, and a modern aesthetic with theme switching and responsive components.

The project is intended both as a personal portfolio and as a starter template you can fork and customize to present your own work to clients.

## Live Demo github pages

- **GitHub Pages:** https://go-kawser.github.io/demo-personal-website/

## Features

- Clean, responsive hero and multi-section layout (About, Services, Portfolio, Testimonials, Blog, Contact)
- Theme selection (DaisyUI themes) and accessible color contrasts
- Portfolio grid with category filters and animated hover states
- Skills section with animated progress bars
- Reusable components using Tailwind + DaisyUI utility classes
- Optimized for performance: minimal custom CSS and CDN-hosted UI libraries

## Tech Stack

- HTML5
- CSS3 (custom styles + Tailwind CSS via CDN)
- DaisyUI (component library for Tailwind)
- Font Awesome (icons)
- Google Fonts (Poppins)

### Project Structure

**Root files:**

```
index.html            # Single-page portfolio site
README.md             # Project documentation (this file)
css/                  # Custom styles
styles.css            # Project-specific CSS
images/               # Placeholder images and avatar
```

### Key sections in `index.html`:

- Header / Navigation - responsive navbar with theme picker and Hire button
- Hero - prominent headline, call-to-actions and animated typewriter
- About - personal summary, contact metadata, and skills
- Services - cards describing offered services
- Portfolio - projects gallery (image cards)
- Testimonials - client feedback carousel
- Contact - contact call-to-action and links

### Getting Started

**Prerequisites: a modern browser. To run locally:**

1. Clone the repository:

- git clone https://github.com/go-kawser/demo-personal-website.git

### Customization Guide

- Replace the name, email and personal details in the About section of `index.html`.
- Swap out images in the `images/` folder and update image paths.
- Edit `css/styles.css` to tweak colors, animations, and spacing. The project uses CSS variables for easy color theming (see `:root`).
- Tailwind / DaisyUI themes can be changed via the theme picker in the navbar. To permanently set a theme, modify the `data-theme` attribute on the `<html>` element in `index.html`.

### Accessibility notes

- Semantic HTML is used for headings and sections.
- Buttons and links include clear text CTAs.
- Ensure images include concise `alt` text when adding or replacing images.

### Deployment

**Recommended quick deploy options:**

- GitHub Pages - push to `main` and enable Pages from the repository settings (select root). The site will be served at `https://go-kawser.github.io/demo-personal-website/`.
- Netlify / Vercel - drag & drop the project folder or connect your GitHub repo for CI/CD.

### Contributing

This repo is primarily a personal portfolio template. If you'd like to suggest improvements, feel free to open an issue or submit a pull request. Keep changes focused and provide screenshots for visual edits.

**Suggested contribution workflow:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/awesome-improvement`)
3. Commit changes and push
4. Open a Pull Request describing your changes

##### Contact

- **Name:** Kawser - Full-Stack Engineer
- **Email:** abu.kayser.official@gmail.com
- **Location:** Tangail, Dhaka, Bangladesh

If you'd like help customizing this template, or want to hire, use the contact links on the site or email directly.

---

**Made with love - a clean, responsive portfolio template for showcasing modern web skills.**

---
