# Aster website

Source of the Aster landing and download page, served by GitHub Pages at
**https://rkdrn79.github.io/aster-site/**.

Plain HTML and CSS with no build step: edit `index.html`, `phone.html` (the phone setup guide), and
`styles.css`, and images live in `assets/`. `app/` is the hosted phone web client; it is built from
the app repository, so don't edit it here. The app itself is at [rkdrn79/aster](https://github.com/rkdrn79/aster).

## Release updates

Only update downloads as part of a user-requested Aster release. Prepare the displayed version and
both macOS and Windows download links for the same tag. Verify that all linked assets are attached
to that GitHub Release before publishing this site change. A release is complete only after the
GitHub Release and the live site both serve the new version for both platforms.
