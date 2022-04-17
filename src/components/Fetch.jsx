

import React, { useState, useEffect } from "react";
import "./fetch.css"

function Fetch() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState([]);



  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  const apiPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: inputs.name,
        netid: inputs.netid,
        email: inputs.email,
        class: inputs.class,
        topic: inputs.topic,

      }),
      headers: {
        "Content-type":  "application/json; charset-UTF-8",
      },
      
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
        
  };



  const handleChange = (event) => {
    setInputs((input)=> ({
      ...inputs, 
        [event.target.name ]: event.target.value,

    }))
   
  }
  const handleSubmit = (event) => {
    apiPost();
    event.preventDefault();
    console.log(inputs);
   
  }


  return (
    <div className="fetch">
      
      <h4>Get Api</h4>
      <button onClick={apiGet}>Fetch Data</button>
      <br />

      <div>
         
        <ol>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} -- {item.userId}
            </li>
          ))}

        </ol>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <br/>
          <h4 >Post API</h4>
          <input type="text" name="name" placeholder="Name" onChange={handleChange}/><br/>
          <input type="text" name="netid" placeholder="netID" onChange={handleChange}/><br/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
          <input type="text" name="class" placeholder="Class" onChange={handleChange} /><br />
          <input type="text" name="topic" placeholder="Topic" onChange={handleChange}/><br/>
          <input type="submit" name="Submit" onChange={handleChange}/>
          
        </form>
      </div>

    </div>
  );
}

export default Fetch;




/*import React, { useState, useEffect } from "react";
import "./fetch.css"

function Fetch() {
    const [data, setData] = useState([]);

  //Get Method
  const apiFetching = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div className="fetch">
      My API <br />
      <button onClick={apiFetching}>Fetch Data</button>
      <br />

      <div>
         
        <ol>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}

        </ol>
      </div>

    </div>
  );
}

export default Fetch;*/