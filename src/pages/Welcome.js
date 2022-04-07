import { Routes, Route, Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <br />
      <Link to="other-user">Other User</Link>
      <Routes>
        <Route path="new-user" element={<p>Welcome, New User!</p>} />
      </Routes>
      <Outlet />
    </section>
  );
};

export default Welcome;
