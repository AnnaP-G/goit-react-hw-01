import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";

// import FriendList from "../src/components/FriendList/FriendList";
// import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
