import React, { useEffect, useState } from "react";
import Cast from "./Cast";

const MiApi = () => {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getMiApi();
  }, []);

  const getMiApi = async () => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const resp = await fetch(url);
    const data = await resp.json();

    setInfo(data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filterNames = info.filter((Cast) => {
    return Cast.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <main>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={handleChange}
          value={value}
        />
        
    
        <br />
        <ul>
          {filterNames.map((noun) => (
            <Cast key={noun.char_id} {...noun} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MiApi;
