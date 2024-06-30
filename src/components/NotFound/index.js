import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => (
  <div id="notfound-card">
    <img
      src="https://res.cloudinary.com/dvjls69bh/image/upload/v1717860974/Group_7504_ascoit.png"
      alt="not found"
      id="not-found-image"
    />
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found</p>
    <Link to="/" className="button">
      Go to Home
    </Link>
  </div>
);
export default NotFound;
