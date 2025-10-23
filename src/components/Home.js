import React from "react";

function Home({ name, city, color }) {
  return (
    <div id="home">
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
      <img src="demo.png" alt="Demo" />
    </div>
  );
}

export default Home;