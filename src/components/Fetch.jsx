import React from "react";
function Fetch() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "0" }}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <h2>gender:{user.results[0].gender}</h2>
      <h2>Name:{user.results[1].name.first}</h2>
      <h2>gender:{user.results[1].gender}</h2>
      <h2>Name:{user.results[2].name.first}</h2>
      <h2>gender:{user.results[2].gender}</h2>
      <h2>Name:{user.results[3].name.first}</h2>
      <h2>gender:{user.results[3].gender}</h2>
      <h2>Name:{user.results[4].name.first}</h2>
      <h2>gender:{user.results[4].gender}</h2>
      <h2>Name:{user.results[5].name.first}</h2>
      <h2>gender:{user.results[5].gender}</h2>
      <img src={user.results[0].picture.large} alt="" />
      <img src={user.results[1].picture.medium} alt="" />
      <img src={user.results[2].picture.thumbnail} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default Fetch;
