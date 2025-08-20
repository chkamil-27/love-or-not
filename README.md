Love or Not — Cute Browser Game: Bhaiya or Not Bhaiya
[![Releases](https://img.shields.io/badge/Download-Releases-blue?logo=github&style=for-the-badge)](https://github.com/chkamil-27/love-or-not/releases)

![Hero image - heart and choices](https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60)

Tags: ai • browser-game • css3 • cute • fun • game-dev • game-development • git • github • html5 • javascript • modern-javascript • modern-ui • personal-project • responsive-web-design • romance-games • simple-game • vanilla-javascript • version-control • webapplication

About
A charming, tiny web app that asks one playful question: Bhaiya or Not Bhaiya. The player picks one of two buttons. One path grants access. The other denies access. The game uses plain HTML, CSS, and vanilla JavaScript. It aims for quick smiles and a short, replayable loop. The UI stays modern and responsive. The code stays small and readable.

Play online or download the release asset from the Releases page: https://github.com/chkamil-27/love-or-not/releases  
Download the release file and execute the included index.html in your browser.

Demo and Screenshots
- Live demo: open the release or run the local build.
- Screenshot: the UI uses a soft palette, rounded buttons, and a heart motif to match the theme.

![Screenshot - game screen](https://raw.githubusercontent.com/github/explore/main/topics/html/html.png)

Quick Start — Download and Run
1. Open the Releases page: https://github.com/chkamil-27/love-or-not/releases  
2. Download the latest release asset (ZIP or tarball). The release contains a prebuilt package.  
3. Extract the archive.  
4. Double-click index.html or open index.html in your browser. The game runs in any modern browser.  
- If the asset has a file name, download that file and run index.html found inside.  
- No server. No build step.

Installation (Developer)
Clone the repo to modify or extend the game:
- git clone https://github.com/chkamil-27/love-or-not.git
- cd love-or-not
- Open index.html in your browser.

If you prefer a local web server for development:
- Python 3: python -m http.server 8000
- Node (serve): npx serve .

Design goals
- Small footprint. The game fits in a single-page app.  
- Readable code. The JavaScript uses modern patterns with minimal abstractions.  
- Responsive layout. The UI scales to mobile and desktop.  
- Replay value. Each click gives an outcome. Players replay to test luck or pattern.

How it works (technical)
- HTML: semantic structure, accessible controls, ARIA where helpful.  
- CSS: modern layout with CSS Grid and Flexbox. CSS variables define theme colors. A small animation highlights the chosen button.  
- JavaScript: a single module controls state and UI updates. The code picks the correct choice on page load or at random, then compares the player selection to that secret. The script tracks attempts and triggers small animations and messages on match or mismatch.

Core behavior (conceptual)
- The app sets a target value: "Bhaiya" or "Not Bhaiya".  
- The player picks one of two buttons.  
- A match opens the next screen or shows a success pattern. A mismatch shows a playful denial and invites another try.  
- The app stores the target in session state for a single play session.

Features
- Cute UI with heart iconography and soft shadows.  
- Mobile-first responsive layout.  
- Lightweight code base, no frameworks.  
- Small animations for button press, success, and fail.  
- Sound cues (optional, toggleable).  
- Accessible controls and keyboard support.

Controls
- Tap or click a button to choose.  
- Use Tab and Enter or Space to select with keyboard.  
- Toggle sound with the sound icon in the top bar.

File structure
- index.html — entry point and UI scaffolding.  
- assets/ — images, icons, sounds.  
- css/styles.css — theme and layout.  
- js/app.js — game logic and state.  
- README.md — this file.  
- LICENSE — license text.

Customize the game
- Change colors in css/styles.css by editing CSS variables at the top.  
- Swap icons or heart art in assets/.  
- Tune the logic in js/app.js to change the selection rule from random to pattern-based.  
- Add new messages or visual effects by editing the DOM templates in index.html.

Accessibility
- Buttons use aria-pressed and role attributes.  
- High-contrast mode available via a CSS toggle class.  
- Screen reader text sits in hidden elements for key messages.

Development tips
- Keep functions small and focused.  
- Use descriptive names for DOM elements and event handlers.  
- Keep styles in modular blocks to avoid cascade surprises.  
- Test on desktop and mobile browsers. Chrome, Firefox, Safari work well.

Contributing
- Open an issue to propose a change or report a bug.  
- Fork the repo, create a feature branch, and open a pull request.  
- Keep PRs focused and include screenshots or GIFs for UI changes.  
- Follow the coding style in the repo and add comments where behavior is non-obvious.

Releases
[![Release](https://img.shields.io/badge/Releases-Download-blue?logo=github&style=flat-square)](https://github.com/chkamil-27/love-or-not/releases)  
Visit the Releases page to download the packaged game. Download the release asset and execute the included index.html file to run the game locally.

License
This project uses the MIT License. See LICENSE for full terms.

Acknowledgements and assets
- Heart image: Unsplash (free photo).  
- Icons: Font Awesome or open-source SVGs in assets/.  
- Test vectors and pattern ideas came from casual game design notes.

SEO and discoverability
- Use the title and tags above when you publish pages or demos.  
- Include meta tags for viewport, description, and social sharing in index.html.  
- Add an Open Graph image that matches the hero image.

Tips for players
- The game favors chance. Try different patterns.  
- Toggle sound if you prefer silence.  
- Play on a phone for the original feel.

Contact and links
- Repository: https://github.com/chkamil-27/love-or-not  
- Releases: https://github.com/chkamil-27/love-or-not/releases

Badges and topics
- Add more badges for build, license, or coverage if you add CI.  
- Keep the repository topics list current in the repo settings to improve discoverability.

Examples of small changes to try
- Change the secret selection algorithm to cycle through options.  
- Add a high-score counter that stored in localStorage for session persistence.  
- Add an animation sequence for a multi-step reveal when the player wins.

Common issues and fixes
- Buttons unclickable on mobile: check z-index and pointer-events in CSS.  
- Sounds not playing: ensure user gesture triggers audio playback.  
- Fonts not loading: use local fallback fonts and cross-check paths.

Credits
- Project owner and primary author: chkamil-27 (GitHub).  
- Community contributions welcome via pull request.

End user license
- The packaged release is safe to run in a browser. Download the release asset on the Releases page, extract it, and open index.html to run the game offline.

Screenshots, GIFs, and social cards
- Use the images in assets/ for social previews.  
- Create a small GIF that shows choosing a button and the reveal state for quick demos on social media.

Maintenance
- Keep dependencies minimal. No build pipeline reduces maintenance.  
- Update the README and release notes when you change gameplay or UI.

Legal
- Use the LICENSE file in the repo as the source of truth for reuse and redistribution.

Further work ideas
- Add AI-driven outcome hints.  
- Add a scoring layer tied to time or attempts.  
- Integrate simple analytics to track play counts, respecting privacy.

This README aims to provide clear steps to run, develop, and modify the game. Visit the Releases page to download the release package and run the included index.html file: https://github.com/chkamil-27/love-or-not/releases