import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";

// Import the properties array
import { properties } from "../data/data.js";

function Nav() {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Update suggestions as user types
  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = properties.filter((prop) =>
      prop.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 5)); // show top 5 suggestions
  };

  // Click on suggestion
  const handleSelect = (prop) => {
    setQuery("");
    setSuggestions([]);
    navigate("/property", { state: prop }); // navigate to property details page
  };

  // Press Enter or click search button
  const handleSearch = () => {
    const filtered = properties.filter((prop) =>
      prop.title.toLowerCase().includes(query.toLowerCase())
    );
    navigate("/search-results", { state: { results: filtered, query } });
  };

  return (
    <div id="Nav">
      {/* Hamburger dropdown */}
      {visible && (
        <div className="hamburger active">
          <Link to="/Login"><div className="ham1">Login</div></Link>
          <Link to="/Signup"><div className="ham1">Sign Up</div></Link>
          <Link to="/Listing"><div className="ham1">List your home</div></Link>
          <Link to="/Contact"><div className="ham1">Help center</div></Link>
        </div>
      )}

      {/* Navbar Top */}
      <div className="nav1">
        <Link to="/">
          <div className="logo">
            <img src={logo} width="50px" alt="logo" />
            <h1>Private Property Rental</h1>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="search">
          <input
            type="text"
            placeholder="Search by property name"
            value={query}
            onChange={handleInput}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>
            <IoSearch />
            <span>Search</span>
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((prop, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSelect(prop)}
                >
                  {prop.title}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="ham">
          <Link to="/Listing">
            <button id="btn1">List Your Home</button>
          </Link>
          <button id="btn2" onClick={() => setVisible((prev) => !prev)}>
            <GiHamburgerMenu id="sbg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      {/* Category Navbar */}
      <div className="nav2">
        <NavLink to="">
          <div className="svg11">
            <MdOutlineWhatshot />
            <h3>Trending</h3>
          </div>
        </NavLink>

        <NavLink to="/Houses">
          <div className="svg11">
            <GiFamilyHouse />
            <h3>Houses</h3>
          </div>
        </NavLink>

        <NavLink to="/Rooms">
          <div className="svg11">
            <MdBedroomParent />
            <h3>Rooms</h3>
          </div>
        </NavLink>

        <NavLink to="/Farm_House">
          <div className="svg11">
            <PiFarm />
            <h3>Farm Houses</h3>
          </div>
        </NavLink>

        <NavLink to="/Pool_Houses">
          <div className="svg11">
            <MdOutlinePool />
            <h3>Pool Houses</h3>
          </div>
        </NavLink>

        <NavLink to="/Tent_Houses">
          <div className="svg11">
            <LuTentTree />
            <h3>Tent Houses</h3>
          </div>
        </NavLink>

        <NavLink to="/Cabins">
          <div className="svg11">
            <GiWoodCabin />
            <h3>Cabins</h3>
          </div>
        </NavLink>

        <NavLink to="/Shops">
          <div className="svg11">
            <SiHomeassistantcommunitystore />
            <h3>Shops</h3>
          </div>
        </NavLink>

        <NavLink to="/Forest_Houses">
          <div className="svg11">
            <FaTreeCity />
            <h3>Forest Houses</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
