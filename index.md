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
/* Chessful Homepage - Inspired by Chess.com */

/* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', 'Segoe UI', Roboto, sans-serif;
  background-color: #1e1e1e;
  color: #f5f5f5;
  line-height: 1.6;
  font-size: 17px;
}

/* Navigation */
nav {
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #2d2d2d;
  position: sticky;
  top: 0;
  z-index: 999;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

nav ul li a {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #6fdd75;
}

nav .logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #6fdd75;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #2d2d2d, #1f1f1f);
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #d3d3d3;
}

.hero button {
  background-color: #6fdd75;
  color: #1a1a1a;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}

.hero button:hover {
  background-color: #5cc862;
}

/* Section Titles */
section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

/* Featured Games */
.featured-games {
  background-color: #262626;
  padding: 3rem 2rem;
}

.game-preview {
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  color: #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-preview:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Community */
.community {
  background-color: #2d2d2d;
  padding: 3rem 2rem;
  text-align: center;
}

.user-profiles {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.profile {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 10px;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Openings Course */
.openings-course {
  background-color: #262626;
  padding: 3rem 2rem;
  text-align: center;
}

.course-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.feature {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 10px;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Bookstore */
.bookstore {
  background-color: #2d2d2d;
  padding: 3rem 2rem;
  text-align: center;
}

.book {
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.book button {
  background-color: #6fdd75;
  color: #1a1a1a;
  border: none;
  padding: 0.6rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.book button:hover {
  background-color: #5cc862;
}

/* Call to Action */
.cta {
  background-color: #121212;
  padding: 3rem 2rem;
  text-align: center;
}

.cta button {
  background-color: #6fdd75;
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cta button:hover {
  background-color: #5cc862;
}

/* Footer */
footer {
  background-color: #1a1a1a;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  border-top: 2px solid #2d2d2d;
}

/* Responsive Layout */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .course-features,
  .user-profiles {
    flex-direction: column;
    align-items: center;
  }
}

</style>