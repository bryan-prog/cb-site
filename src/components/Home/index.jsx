import {Link , useLocation} from "react-router-dom";
import "./style.css";


const Home = () => {
    return (
       <div className="home">
           <div className="title">
               <h1>
                   <p>Hi,</p>
                   <p>I am Bryan</p>
                   <p>a full stack Web Developer</p>
                   <p>and a Game Programmer</p>
               </h1>
               <Link to="/about">
                   <button>More Info</button>
               </Link>
           </div>
           <div className="person">
               <img
              
              src= {`${process.env.PUBLIC_URL}/23.png`}
               alt="person picture"
               />
           </div>
       </div>
    )
}

export default Home;
