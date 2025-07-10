---
layout: default
title: Chessful Homepage
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chessful</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <nav>
            <ul>
                <li><a href="#learn">Learn</a></li>
                <li><a href="#connect">Connect</a></li>
                <li><a href="#openings-course">Openings Course</a></li>
                <li><a href="#bookstore">Bookstore</a></li>
            </ul>
            <div class="logo">Chessful</div>
        </nav>
    </header>
    <!-- Hero Section -->
    <section class="hero">
        <h1>Master the game with grandmasters' expertise</h1>
        <p>Learn from the best and improve your chess skills</p>
        <button>Start Learning</button>
    </section>
    <!-- Featured Games Section -->
    <section id="learn" class="featured-games">
        <h2>Featured Games</h2>
        <div class="game-preview">
            <h3>Game Preview</h3>
            <p>Moves and commentary</p>
            <div class="interactive-board"></div>
            <p>User ratings and reviews</p>
        </div>
    </section>
    <!-- Community Section -->
    <section id="connect" class="community">
        <h2>Connect with Other Chess Enthusiasts</h2>
        <p>Join discussions, share your games, and learn from others</p>
        <div class="user-profiles">
            <div class="profile">User Profile 1</div>
            <div class="profile">User Profile 2</div>
            <div class="profile">User Profile 3</div>
        </div>
    </section>
    <!-- Openings Course Section -->
    <section id="openings-course" class="openings-course">
        <h2>Interactive Openings Course</h2>
        <p>Learn popular openings with video lessons and interactive exercises</p>
        <div class="course-features">
            <div class="feature">Video Lessons</div>
            <div class="feature">Interactive Exercises</div>
            <div class="feature">Progress Tracking</div>
        </div>
    </section>
    <!-- Bookstore Section -->
    <section id="bookstore" class="bookstore">
        <h2>Bookstore</h2>
        <p>Purchase Chessful assets, including our book</p>
        <div class="book">
            <h3>Book Title</h3>
            <p>Book description and reviews</p>
            <button>Purchase</button>
        </div>
    </section>
    <!-- Call-to-Action Section -->
    <section class="cta">
        <h2>Join the Chessful Community</h2>
        <p>Sign up or log in to access exclusive content and community features</p>
        <button>Sign Up</button>
        <button>Log In</button>
    </section>
    <!-- Footer Section -->
    <footer>
        <p>Contact Information</p>
        <p>Social Media Links</p>
        <p>Terms of Service and Privacy Policy</p>
    </footer>
</body>
</html>
<style>
 /* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and Font */
body {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #1f1f1f;
  background-color: #fdfdfd;
  line-height: 1.6;
  font-size: 17px;
}

/* Typography Enhancements */
h1, h2, h3, h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;
}

h1 { font-size: 2.5rem; margin-top: 2.5rem; }
h2 { font-size: 2rem; margin-top: 2rem; }
h3 { font-size: 1.5rem; margin-top: 1.5rem; }
h4 { font-size: 1.25rem; margin-top: 1.25rem; }

p, li {
  font-size: 1.05rem;
  margin: 1rem 0;
  color: #444;
}

/* Images */
.post img {
  display: block;
  margin: 1.5rem auto;
  max-width: 100%;
  border-radius: 8px;
}

img.emoji {
  display: inline !important;
  vertical-align: baseline !important;
}

/* Figcaptions */
.post figcaption {
  text-align: center;
  font-size: 0.9rem;
  font-style: italic;
  color: #666;
  margin-top: 0.5rem;
}

/* Code and Pre */
pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

pre code {
  font-size: 0.95rem;
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
}

/* Lists */
li h3, li h4 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

/* Metadata */
.post-meta-title, .post-meta {
  color: #888;
  font-size: 0.95rem;
}

/* Category Tags */
.category-tags {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #a14646;
}

.category-tags-link {
  color: #a14646 !important;
  font-weight: 500;
}

/* Anchor Links */
.anchor-link {
  opacity: 0;
  padding-left: 0.3em;
  transition: opacity 0.3s ease;
}

h1:hover .anchor-link,
h2:hover .anchor-link,
h3:hover .anchor-link {
  opacity: 1;
}

/* Page Description */
.page-description {
  color: #666;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

/* Search Results */
.search-results-list-item {
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.search-results-list-item .search-result-title {
  font-size: 1.1rem;
  color: #d9230f;
}

.search-result-preview,
.search-result-rel-date {
  font-size: 0.95rem;
  color: #777;
}

.search-result-highlight {
  color: #2c003e;
  font-weight: bold;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 8px;
}

/* Buttons */
button {
  background-color: #f2c94c;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  color: #222;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #e0b93f;
}

/* YouTube Responsive Embed */
.youtube-iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.youtube-iframe-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}

/* Footnotes */
.footnotes, .footnotes p, .footnotes li {
  font-size: 12px;
}

/* Notebook-style badge icons */
.notebook-badge-image {
  border: none !important;
}

/* Output Styling */
.output_wrapper {
  overflow-x: auto;
  margin-top: 1rem;
}

.output_text.output_execute_result pre {
  white-space: pre-wrap;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 1rem;
}

table th, table td {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  text-align: left;
}

table th {
  background-color: #f0f0f0;
  text-align: center;
}
</style>