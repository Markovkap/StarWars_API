import React, { useEffect, useState } from "react";
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

export function Planet(props) {
  const [planet, setPlanet] = useState(null);
  const [userInput, setUserInput] = useState("1");
  const [error, setError] = useState({ message: "", error: false });

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

  function changeInput(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      {error.error && <Error text={error.message} />}
      <div>
        <button onClick={() => getPlanet()}>get Planet</button>
        <input value={userInput} onChange={(event) => changeInput(event)} />
      </div>
      {planet && <PlanetView planetNumber={userInput} planet={planet} />}
    </div>
  );
}
