# DeeSanas.com — Codex Repository Instructions

## Project

This repository powers my professional website:

- Website: https://deesanas.com/
- GitHub repository: DeeSanas/deesanas.github.io
- Hosting: GitHub Pages
- Default branch: main
- Custom domain: deesanas.com

The primary purpose of this repository is to maintain my professional website and regularly publish new technology and professional articles.

## Source of Truth

Treat the current repository as the source of truth.

Before changing anything:

1. Inspect the relevant existing HTML, CSS and JavaScript files.
2. Understand the current implementation before modifying it.
3. Preserve existing working functionality unless explicitly asked to change it.
4. Do not assume a structure that is not present in the repository.

Important existing files include:

- index.html
- about.html
- contact.html
- resources.html
- style.css
- posts.js
- renderPosts.js
- existing blog*.html article pages
- CNAME

## Website Design

Preserve the existing:

- Branding
- Navigation
- Typography
- Layout
- Header and footer conventions
- Responsive/mobile behavior
- Article presentation style
- Overall visual identity

Do not redesign the website unless explicitly requested.

New pages should look and behave like they belong to the existing DeeSanas.com website.

## Publishing New Articles

When asked to add a new article:

1. Review existing article pages and the current article-listing mechanism first.
2. Professionally edit supplied content where necessary.
3. Preserve the author's intended meaning and technical content.
4. Follow the existing website article design and structure.
5. Create the new article page.
6. Add the article to the appropriate website listing/data structure, including posts.js or resources.html where required by the current implementation.
7. Make sure visitors can discover and open the article from the website.
8. Verify that navigation back to the main website works correctly.

For new articles, prefer descriptive, SEO-friendly filenames where compatible with the current architecture.

Example:

ai-infrastructure-sovereign-cloud-strategy.html

Avoid creating new generic names such as:

blog15.html

However, do not rename existing blog1.html, blog2.html, etc. unless explicitly requested because existing links may depend on them.

## Article Quality

Articles should be:

- Professional
- Technically credible
- Clear and well structured
- Appropriate for an international professional audience
- Original
- Easy to read
- Free from unnecessary repetition
- Free from unsupported claims or fabricated statistics

Preserve technical terminology when it is appropriate to the subject.

Do not invent customer names, project details, statistics, references, deployments or achievements.

## SEO and Metadata

For every new article, review and implement where applicable:

- HTML page title
- Meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Heading hierarchy
- Image alt text
- Descriptive article URL
- Internal links
- Author information
- Publication date

Keep SEO natural. Do not use keyword stuffing.

The canonical domain is:

https://deesanas.com/

## Images

For article images:

- Use meaningful filenames.
- Optimize images for web delivery.
- Prefer efficient formats such as WebP where appropriate.
- Provide useful alt text.
- Maintain good image quality.
- Do not replace or delete existing images without a reason.

## Existing URLs

Existing public URLs must be treated as stable.

Do not:

- rename existing article files,
- change established paths,
- delete pages,
- change the CNAME,
- or restructure URLs

unless explicitly requested.

If a URL change is necessary, identify the impact before implementing it.

## Code Changes

Prefer small, targeted changes.

Do not modify unrelated files.

Do not introduce a new framework, CMS, build system, dependency or major architecture change unless explicitly requested.

Keep the website simple and maintainable.

Use the existing HTML/CSS/JavaScript architecture unless there is a clear approved reason to change it.

## Quality Assurance

Before considering any website update complete, check:

- Article appears correctly on the website
- Article listing is updated
- Navigation works
- Internal links work
- Image paths work
- CSS styling is consistent
- HTML structure is valid
- Desktop layout is correct
- Mobile/responsive layout is correct
- Spelling and grammar are reviewed
- Metadata is present where required
- Existing pages have not been unintentionally affected

## Git Safety

Do not push changes to main automatically unless explicitly requested.

For substantial changes, prefer:

1. Review current repository state.
2. Make the required changes.
3. Show what changed.
4. Run appropriate checks.
5. Allow review before committing or pushing when practical.

Never use destructive Git commands unless explicitly requested.

Do not overwrite unrelated local changes.

## Communication

Before making a substantial structural change, explain:

- what will change,
- which files will be affected,
- why the change is necessary,
- and any potential impact on the live website.

For ordinary article publishing that follows the established structure, proceed efficiently without unnecessary redesign.

## Primary Goal

Keep DeeSanas.com:

- Professional
- Technically credible
- Visually consistent
- Responsive
- SEO-friendly
- Reliable
- Easy to maintain
- Easy to extend with future professional articles
