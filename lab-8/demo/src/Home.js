import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const aboutNav = () => {
    navigate("/about");
  };
  const contactNav = () => {
    navigate("/contact");
  };
  return (
    <>
      <h1>This is home</h1>
      <div>
        <button onClick={aboutNav}>Go to About</button>
        <button onClick={contactNav}>Go to Contact</button>
      </div>
    </>
  );
};

export default Home;
