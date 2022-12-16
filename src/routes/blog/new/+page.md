---
title: New website
date: "2022-12-15"
thumbnail: "milad-fakurian-iLHDO19h0ng-unsplash.jpg"
---

## What I wanted to replace
At long last I have updated my website. Here is a screenshot of the old one:
<div class="small_image">
<img src="/images/blog/old_website_screenshot.png">
</div>

The old website wasn't particularly lacking in the functionality I wanted to get out of it, but it has become quite stale over the years.
It was also not built using any modern web technologies, and I wanted to try out some new things. 
I also didn't want a website that was just a collection of old HTML files that I had to manually update.

Not to mention the fact that it was simply four links and an image.

## What I wanted to do differently
* I wanted to use a modern web framework for ease of use and maintainability  
  * which was the main reason I wanted to update the website in the first place
* I wanted it to be able to compile to static HTML
* I wanted to use SASS for styling, ideally compiled by the JS framework
* A blog section would be nice
* CI/CD deployment

## The new website
The new website is built using [SvelteKit](https://kit.svelte.dev/), which is a framework for building web applications using Svelte.
I decided to use Svelte for its lightweight nature and ease of use. SvelteKit doesn't use a virtual DOM, which means that 
after the site is compiled, the resulting site is very responsive. I prefer a static website for this project because I do not
use any server-side functionality and wanted to use GitHub's continual deployment.

I have reused some assets and content from the old website. I have also added a markdown-centric blog section, which is powered by [MDsveX](https://github.com/pngwn/MDsveX/).