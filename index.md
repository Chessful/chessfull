---
layout: none
title: Chessful Homepage
---

{% include chessful_head.html %}

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chess Mastery</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #000;
      color: #fff;
      min-height: 100vh;
    }

    /* Main container */
    .container {
      display: flex;
      flex-wrap: wrap;
      background-color: #111;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.6);
      max-width: 1000px;
      margin: 40px auto;
    }

    .image-section {
      flex: 1;
      min-width: 300px;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    .image-section img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }

    .text-section {
      flex: 1;
      min-width: 300px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      animation: fadeIn 1.5s ease-in;
    }

    .text-section h1 {
      font-size: 28px;
      margin-bottom: 20px;
      font-weight: bold;
      line-height: 1.3;
    }

    .text-section p {
      font-size: 16px;
      margin-bottom: 30px;
      color: #ccc;
    }

    .text-section button {
      padding: 12px 25px;
      font-size: 16px;
      font-weight: bold;
      background-color: #4CAF50;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s, box-shadow 0.3s;
    }

    .text-section button:hover {
      background-color: #45a049;
      transform: scale(1.05);
      box-shadow: 0 0 12px rgba(72, 239, 128, 0.6); /* subtle glow */
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media(max-width: 768px) {
      .container {
        flex-direction: column;
      }
      .text-section {
        text-align: center;
        padding: 20px;
      }
    }
  </style>
</head>
<body>

  <!-- Hero Section -->
  <div class="container">
    <div class="image-section">
      <img src="{{site.baseurl}}/images/home_page_icon.png" alt="Chess Match">
    </div>
    <div class="text-section">
      <h1>Master chess with grandmasters' expertise</h1>
      <p>Learn from the best and improve your chess skills</p>
      <button onclick="startLearning()">Start Learning</button>
    </div>
  </div>

  <script>
    function startLearning() {
      window.location.href = "/learn"; // Change this link to your target page
    }
  </script>
</body>
</html>
