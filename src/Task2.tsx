import { useState } from "react";
import { data } from "./Task2_data";

export function Task2() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <p>запрос: {query}</p>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>результат:</p>
      {(
        <ul>
          {data.filter(({ name }) =>
            name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          ).map((
            { name, url },
          ) => (
            <li>
              <figure>
                <img
                  src={url}
                  alt={name}
                  style={{ width: 100, height: 100, objectFit: "contain" }}
                />
                <figcaption>{name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
