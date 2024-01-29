class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovie(movie) {
      if (movie.availableCopies > 0) {
        this.rentedMovies.push(movie);
        movie.availableCopies--;
        console.log(`${this.name} rented ${movie.title}.`);
      } else {
        console.log(`Sorry, ${movie.title} is currently not available.`);
      }
    }
  
    returnMovie(movie) {
      const index = this.rentedMovies.indexOf(movie);
      if (index !== -1) {
        this.rentedMovies.splice(index, 1);
        movie.availableCopies++;
        console.log(`${this.name} returned ${movie.title}.`);
      } else {
        console.log(`${this.name} did not rent ${movie.title}.`);
      }
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
      this.customers = [];
    }
  
    addMovie(title, genre, availableCopies) {
      const movie = new Movie(title, genre, availableCopies);
      this.movies.push(movie);
      console.log(`${title} added to the movie store.`);
    }
  
    addCustomer(name) {
      const customer = new Customer(name);
      this.customers.push(customer);
      console.log(`${name} added to the customer list.`);
    }
  
    listMovies() {
      console.log("Available Movies:");
      this.movies.forEach(movie => {
        console.log(`${movie.title} - ${movie.genre} - ${movie.availableCopies} available`);
      });
    }
  }
  