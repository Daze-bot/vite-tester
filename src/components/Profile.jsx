import { useParams } from "react-router-dom";
import DefaultProfile from './DefaultProfile';
import Spinach from './Spinach';
import Popeye from './Popeye';

const Profile = () => {
  const { name } = useParams();
  
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>How are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  )
}

export default Profile;
