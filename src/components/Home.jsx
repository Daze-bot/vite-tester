import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <h1>Hello from the Home Page of the App!</h1>
      <p>Here are some links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to={'profile'}>Profile Page</Link>
          </li>
          <li>
            <Link to={'profile/spinach'}>Spinach Page</Link>
          </li>
          <li>
            <Link to={'profile/popeye'}>Popeye Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;
