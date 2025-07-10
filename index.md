---
layout: default
title: Chessful Homepage
---

{% include chessful_head.html %}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chessful</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Roboto, sans-serif;
      background-color: #000;
      color: #fff;
      line-height: 1.6;
      font-size: 17px;
    }

    /* Header */
    header {
      background-color: #111;
      padding: 1.2rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 999;
      border-bottom: 1px solid #222;
    }

    header .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 2rem;
    }

    nav ul li a {
      color: #ddd;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav ul li a:hover {
      color: #6fdd75;
    }

    /* Sections */
    section {
      padding: 4rem 10%;
      text-align: center;
      border-bottom: 1px solid #1a1a1a;
    }

    .hero {
      background: linear-gradient(135deg, #111, #000);
    }

    .hero h1 {
      font-size: 2.75rem;
      margin-bottom: 1rem;
    }

    .hero p {
      color: #ccc;
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    button {
      background-color: #6fdd75;
      color: #000;
      padding: 0.75rem 1.75rem;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #5cc862;
    }

    .featured-games .game-preview,
    .profile,
    .feature,
    .book {
      background-color: #111;
      padding: 2rem;
      border-radius: 12px;
      margin-top: 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .user-profiles,
    .course-features {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .cta {
      background-color: #111;
    }

    footer {
      background-color: #000;
      padding: 2rem;
      text-align: center;
      color: #777;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <!-- Hero -->
  <section class="hero">
    <h1>Master the game with grandmasters' expertise</h1>
    <p>Learn from the best and improve your chess skills</p>
    <button>Start Learning</button>
  </section>

  <!-- Featured Games -->
  <section id="learn" class="featured-games">
    <h2>Featured Games</h2>
    <div class="game-preview">
      <h3>Game Preview</h3>
      <p>Moves and commentary</p>
      <div class="interactive-board"></div>
      <p>User ratings and reviews</p>
    </div>
  </section>

  <!-- Community -->
  <section id="connect" class="community">
    <h2>Connect with Other Chess Enthusiasts</h2>
    <p>Join discussions, share your games, and learn from others</p>
    <div class="user-profiles">
      <div class="profile">User Profile 1</div>
      <div class="profile">User Profile 2</div>
      <div class="profile">User Profile 3</div>
    </div>
  </section>

  <!-- Openings Course -->
  <section id="openings-course" class="openings-course">
    <h2>Interactive Openings Course</h2>
    <p>Learn popular openings with video lessons and interactive exercises</p>
    <div class="course-features">
      <div class="feature">Video Lessons</div>
      <div class="feature">Interactive Exercises</div>
      <div class="feature">Progress Tracking</div>
    </div>
  </section>

  <!-- Bookstore -->
  <section id="bookstore" class="bookstore">
    <h2>Bookstore</h2>
    <p>Purchase Chessful assets, including our book</p>
    <div class="book">
      <h3>Book Title</h3>
      <p>Book description and reviews</p>
      <button>Purchase</button>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta">
    <h2>Join the Chessful Community</h2>
    <p>Sign up or log in to access exclusive content and community features</p>
    <button>Sign Up</button>
    <button>Log In</button>
  </section>

  <!-- Footer -->
  <footer>
    <p>Contact Information</p>
    <p>Social Media Links</p>
    <p>Terms of Service and Privacy Policy</p>
  </footer>
</body>
</html>
