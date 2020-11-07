import React, { useState } from "react";
import "./styles.css";

const API = "https://swapi.dev/api/";

function Error(props) {
  return <p style={{ color: "red" }}>{props.text}</p>;
}

function PlanetView(props) {
  /* name string -- The name of this planet.
diameter string -- The diameter of this planet in kilometers.
rotation_period string -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
orbital_period string -- The number of standard days it takes for this planet to complete a single orbit of its local star.
gravity string -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
population string -- The average population of sentient beings inhabiting this planet.
climate string -- The climate of this planet. Comma separated if diverse.
terrain string -- The terrain of this planet. Comma separated if diverse.
surface_water string -- The percentage of the planet surface that is naturally occurring water or bodies of water.
residents array -- An array of People URL Resources that live on this planet.
films array -- An array of Film URL Resources that this planet has appeared in.
url string -- the hypermedia URL of this resource.
created string -- the ISO 8601 date format of the time that this resource was created.
edited string -- the ISO 8601 date format of the time that this resource was edited. */
  return (
    <div>
      <h1>Description of Planet #{props.planetNumber}:</h1>
      <h2>{props.planet.name}</h2>
      <h3>population: {props.planet.population}</h3>
      <p>gravity: {props.planet.gravity} *</p>
      <p>diameter: {props.planet.diameter} km</p>
      <p>terrain: {props.planet.terrain}</p>
      <p>climate: {props.planet.climate}</p>
      <p>1 day on this planet: {props.planet.rotation_period} hours</p>
      <p>1 year in their days: {props.planet.orbital_period} days</p>
      <p>
        1 year in our days:{" "}
        {Math.floor(
          (props.planet.orbital_period * props.planet.rotation_period) / 24
        )}{" "}
        days
      </p>
      <p>water: {props.planet.surface_water}%</p>
      <p>
        {props.planet.films.length === 0 ? (
          "this planet didn't apear in any film"
        ) : (
          <>
            This planet was in {props.planet.films.length} films{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.planet.residents.length === 0 ? (
          "this planet hasn't any residents"
        ) : (
          <>
            There is {props.planet.residents.length} planet's residents{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <hr />
      <p>
        <sup>
          * - A number denoting the gravity of this planet, where "1" is normal
          or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5
          standard Gs.
        </sup>
      </p>
    </div>
  );
}

function ShipView(props) {
  /* "name": "CR90 corvette",
	"model": "CR90 corvette",
	"manufacturer": "Corellian Engineering Corporation",
	"cost_in_credits": "3500000",
	"length": "150",
	"max_atmosphering_speed": "950",
	"crew": "30-165",
	"passengers": "600",
	"cargo_capacity": "3000000",
	"consumables": "1 year",
	"hyperdrive_rating": "2.0",
	"MGLT": "60",
	"starship_class": "corvette",
	"pilots": [],
	"films": [
		"http://swapi.dev/api/films/1/",
		"http://swapi.dev/api/films/3/",
		"http://swapi.dev/api/films/6/"
	],
	"created": "2014-12-10T14:20:33.369000Z",
	"edited": "2014-12-20T21:23:49.867000Z",
	"url": "http://swapi.dev/api/starships/2/" */
  return (
    <div>
      <h1>Description of Ship #{props.shipNumber}:</h1>
      <h2>{props.ship.name}</h2>
      <h3>model: {props.ship.model}</h3>
      <p>cost_in_credits: {props.ship.cost_in_credits}</p>
      <p>length: {props.ship.length} km</p>
      <p>max_atmosphering_speed: {props.ship.max_atmosphering_speed}</p>
      <p>crew: {props.ship.crew}</p>
      <p>passengers: {props.ship.passengers}</p>
      <p>cargo_capacity: {props.ship.cargo_capacity}</p>
      <p>consumables: {props.ship.consumables}</p>
      <p>
        {props.ship.films.length === 0 ? (
          "this ship didn't apear in any film"
        ) : (
          <>
            This ship was in {props.ship.films.length} films{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.ship.pilots.length === 0 ? (
          "this ship hasn't any pilots"
        ) : (
          <>
            There is {props.ship.pilots.length} ship's pilots{" "}
            <button>more information</button>
          </>
        )}
      </p>
    </div>
  );
}

function FilmView(props) {
  /* title string -- The title of this film
episode_id integer -- The episode number of this film.
opening_crawl string -- The opening paragraphs at the beginning of this film.
director string -- The name of the director of this film.
producer string -- The name(s) of the producer(s) of this film. Comma separated.
release_date date -- The ISO 8601 date format of film release at original creator country.
species array -- An array of species resource URLs that are in this film.
starships array -- An array of starship resource URLs that are in this film.
vehicles array -- An array of vehicle resource URLs that are in this film.
characters array -- An array of people resource URLs that are in this film.
planets array -- An array of planet resource URLs that are in this film.
url string -- the hypermedia URL of this resource.
created string -- the ISO 8601 date format of the time that this resource was created.
edited string -- the ISO 8601 date format of the time that this resource was edited. */
  return (
    <div>
      <h1>Description of Film #{props.filmNumber}:</h1>
      <h2>{props.film.title}</h2>
      <h3>episode_id: {props.film.episode_id}</h3>
      <p>opening_crawl: *</p>
      <p>director: {props.film.director}</p>
      <p>producer: {props.film.producer}</p>
      <p>release_date: {props.film.release_date}</p>
      <p>
        {props.film.species.length === 0 ? (
          "this species didn't apear in any film"
        ) : (
          <>
            This species was in {props.film.species.length} films{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.film.starships.length === 0 ? (
          "this film hasn't any starships"
        ) : (
          <>
            There is {props.film.starships.length} film's starships{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.film.vehicles.length === 0 ? (
          "this film hasn't any vehicles"
        ) : (
          <>
            There is {props.film.vehicles.length} film's vehicles{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.film.characters.length === 0 ? (
          "this film hasn't any characters"
        ) : (
          <>
            There is {props.film.characters.length} film's characters{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <p>
        {props.film.planets.length === 0 ? (
          "this film hasn't any planets"
        ) : (
          <>
            There is {props.film.planets.length} film's planets{" "}
            <button>more information</button>
          </>
        )}
      </p>
      <hr />
      <p>
        <sup>* - {props.film.opening_crawl}</sup>
      </p>
    </div>
  );
}

export function Planet(props) {
  const [planet, setPlanet] = useState(null);
  const [userInput, setUserInput] = useState("1");
  const [error, setError] = useState({ message: "", error: false });
  const [ship, setShip] = useState(null);
  const [userInput2, setUserInput2] = useState("2");
  const [film, setFilm] = useState(null);
  const [userInput3, setUserInput3] = useState("1");
  const [userOrder, setUserOrder] = useState("0");

  function getPlanet() {
    if (!userInput || isNaN(userInput)) {
      return setError({ message: "LOL type only numbers", error: true });
    }

    setError({ message: "", error: false });

    fetch(`${API}planets/${userInput}/`)
      .then((response) => {
        response.json().then((planet) => {
          if (planet.detail) {
            setError({
              message:
                "You are stupid, because planet with this number doesn't exist",
              error: true
            });
          } else {
            setPlanet(planet);
          }
        });
      })
      .catch((err) => {
        setError({
          message: "You are stupid, because something wrong with server",
          error: true
        });
        console.log(err);
      });
  }
  function getShip() {
    if (!userInput || isNaN(userInput)) {
      return setError({ message: "LOL type only numbers", error: true });
    }

    setError({ message: "", error: false });

    fetch(`${API}starships/${userInput2}/`)
      .then((response) => {
        response.json().then((ship) => {
          if (ship.detail) {
            setError({
              message:
                "You are stupid, because starship with this number doesn't exist",
              error: true
            });
          } else {
            setShip(ship);
          }
        });
      })
      .catch((err) => {
        setError({
          message: "You are stupid, because something wrong with server",
          error: true
        });
        console.log(err);
      });
  }
  function getFilm() {
    if (!userInput || isNaN(userInput)) {
      return setError({ message: "LOL type only numbers", error: true });
    }

    setError({ message: "", error: false });

    fetch(`${API}films/${userInput3}/`)
      .then((response) => {
        response.json().then((film) => {
          if (film.detail) {
            setError({
              message:
                "You are stupid, because film with this number doesn't exist",
              error: true
            });
          } else {
            setFilm(film);
          }
        });
      })
      .catch((err) => {
        setError({
          message: "You are stupid, because something wrong with server",
          error: true
        });
        console.log(err);
      });
  }
  function changeInput(event) {
    setUserInput(event.target.value);
  }
  function changeInput2(event) {
    setUserInput2(event.target.value);
  }
  function changeInput3(event) {
    setUserInput3(event.target.value);
  }

  return (
    <div className="App">
      {error.error && <Error text={error.message} />}
      {userOrder === "0" && (
        <>
          <div>
            <button onClick={() => setUserOrder("1")}>Planets</button>
            <button onClick={() => setUserOrder("2")}>Ships</button>
            <button onClick={() => setUserOrder("3")}>Films</button>
            <br />
            <img
              height="100px"
              src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
            />
          </div>
        </>
      )}

      {userOrder === "1" && (
        <>
          <div>
            <button onClick={() => setUserOrder("0")}>Back</button>
            <hr />
            <button onClick={() => getPlanet()}>get Planet</button>
            <input value={userInput} onChange={(event) => changeInput(event)} />
          </div>
          {planet && <PlanetView planetNumber={userInput} planet={planet} />}
        </>
      )}

      {userOrder === "2" && (
        <>
          <div>
            <button onClick={() => setUserOrder("0")}>Back</button>
            <hr />
            <button onClick={() => getShip()}>get ship</button>
            <input
              value={userInput2}
              onChange={(event) => changeInput2(event)}
            />
          </div>
          {ship && <ShipView shipNumber={userInput2} ship={ship} />}
        </>
      )}

      {userOrder === "3" && (
        <>
          <div>
            <button onClick={() => setUserOrder("0")}>Back</button>
            <hr />
            <button onClick={() => getFilm()}>get film</button>
            <input
              value={userInput3}
              onChange={(event) => changeInput3(event)}
            />
          </div>
          {film && <FilmView filmNumber={userInput3} film={film} />}
        </>
      )}
    </div>
  );
}
