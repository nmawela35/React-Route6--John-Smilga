import { Link } from "react-router-dom";
import Home from "./Home";

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to="/" element={<Home/>} className="btn">Back Home</Link>
    </section>
  );
};
export default About;
