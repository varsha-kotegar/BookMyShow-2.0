import React from "react";
import { Table } from "react-bootstrap";

const Movies = () => {
  const movies = [
    { name: "Avengers", genre: "Action", release: "2019", rating: "4.5", price: "$10" },
    { name: "Joker", genre: "Thriller", release: "2019", rating: "4.8", price: "$12" },
    { name: "Inception", genre: "Sci-Fi", release: "2010", rating: "4.7", price: "$15" },
  ];

  return (
    <div className="container mt-5">
      <h2>Movies Listing</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Movies;
