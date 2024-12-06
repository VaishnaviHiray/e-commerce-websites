import React, { useState } from "react";
import st from "./NavbarBanner.css";

function NavbarBanner({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <div className="navbarBanner">
        <div className="navbarBannerleft">
          <div className="optionsnavbar">
            {/* Dropdown List to Filter Categories */}
            <div className="optionsnavbar">
              <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories && categories.length > 0 ? (
                  categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))
                ) : (
                  <option value="All">All</option> // Fallback option if no categories
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="navbarBannerright">
          <a className="brand-Image" href="#">
            <img src="https://m.media-amazon.com/images/G/31/Events/img24/Jupiter24/Phase2/J24_P2_SWM_ShopNow._CB544503925_.jpg" alt="amazon" className={st.img}
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default NavbarBanner;

