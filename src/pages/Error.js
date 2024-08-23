import { Link } from "react-router-dom";
import Home from "./Home";

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <h3>Page not found</h3>
      <Link to="/" element={<Home/>} className="btn">Back Home</Link>
    </section>
  );
};
export default Error;
