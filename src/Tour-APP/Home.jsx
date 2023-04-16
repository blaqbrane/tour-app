import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Tours";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [err, setErr] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const url = "https://course-api.com/react-tours-project";

  const DeleteTour = (id) => {
    const filteredTour = tours.filter((tour) => tour.id !== id)
    setTours(filteredTour)
  }
  const abortConst = new AbortController();
  const FetchFromApI = () => {
    setIsloading(true);
    fetch(url, { signal: abortConst.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("404");
        }
        return res.json();
      })
      .then((data) => {
        setTours(data);
        setIsloading(false);
        setErr(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          setErr(err.message);
          setIsloading(false);
        }
      });
  };

  useEffect(() => {
    FetchFromApI();
  }, []);

  if (isloading) {
    return <h1 className="">
       Loading...
    </h1>;
  }
  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center " >
        <h1 className="text-center mt-6 mb-3">No Tours left</h1>
        <button className="px-6 py-1 rounded bg-green-500 text-white" onClick={() => FetchFromApI()}>Refresh</button>
        {err}
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl mt-4 text-center">Our Tour</h1>
      <div className="w-20 h-1 mx-auto mt-2 bg-[green]"/>
      <Tours tours={tours} DeleteTour={DeleteTour}/>
    </div>
  );
};

export default Home;
