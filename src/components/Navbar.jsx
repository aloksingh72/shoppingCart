import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink>
          <div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw1ALV4UrSrezFd4M8Oxx8Qk&ust=1704433826009000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDk-oGFw4MDFQAAAAAdAAAAABAD" />
          </div>
        </NavLink>

        <div>
             <NavLink to= "/">
             <p>Home</p>
             </NavLink>

             <NavLink to = "/cart">
                <div>
                    <FaOpencart icon/>

                </div>
             </NavLink>



          
        </div>
      </div>
    </div>
  );
};
export default Navbar;
