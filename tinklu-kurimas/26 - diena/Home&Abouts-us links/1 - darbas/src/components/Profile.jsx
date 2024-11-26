import { Link } from "react-router";

export default function Profile() {
  return (
    <>
      <h2>Profile page</h2>
      <Link to={"/dashboard/settings"}>Go to Settings page</Link>
    </>
  );
}
