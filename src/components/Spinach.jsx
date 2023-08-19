import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Spinach = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors"})
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json()
      })
      .then((response) => setImageURL(response[Math.floor(Math.random()*5000)].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [])

  if (error) {
    return (
      <div>
        <p>A network error occured</p>
        <Link to={'/'}>Return Home</Link>
      </div>
    )
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <img src={imageURL} alt="Placeholder Image" />
      <Link to={'/'}>Click here to go back</Link>
    </div>
  );
};

export default Spinach;