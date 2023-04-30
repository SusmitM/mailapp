import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>My Mail Box</h1>
      <div className="btnContainer">
        <NavLink to="/inbox">
          <button className="btn Inbox"> Inbox</button>
        </NavLink>
        <NavLink to="/sent">
          <button className="btn Sent">Sent Mails</button>
        </NavLink>
      </div>
    </>
  );
};
