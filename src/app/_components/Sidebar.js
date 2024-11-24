"use client";

import { useState } from "react";

const Sidebar = ({ categories }) => {
  const [activeMenus, setActiveMenus] = useState([]);
  const [savedCategories, setSavedCategories] = useState([]);

  // Handles menu activation on hover
  const handleMouseEnter = (menuId, category, level) => {
    const updatedActiveMenus = [...activeMenus];
    const updatedSavedCategories = [...savedCategories];

    updatedActiveMenus[level] = menuId;
    updatedSavedCategories[level] = category;

    setActiveMenus(updatedActiveMenus);
    setSavedCategories(updatedSavedCategories);
  };

  const handleMouseLeave = (level) => {
    const updatedActiveMenus = activeMenus.slice(0, level);
    const updatedSavedCategories = savedCategories.slice(0, level);

    setActiveMenus(updatedActiveMenus);
    setSavedCategories(updatedSavedCategories);
  };

  // Renders children dynamically with depth
  const renderChildren = (children, level = 0) => {
    if (!children) return null;

    return (
      <div
        className="flex"
        onMouseLeave={() => handleMouseLeave(level)}
        onMouseEnter={() => null} // Prevent closing when re-entering
      >
        <div className={`bg-white w-60 border-r`}>
          <ul className="space-y-2 py-4">
            {children.map((child) => (
              <li
                key={child.id}
                className={`px-4 text-xs cursor-pointer flex items-center justify-between ${
                  activeMenus[level] === child.id
                    ? "text-orange-500 font-bold"
                    : "hover:text-orange-500"
                }`}
                onMouseEnter={() =>
                  child.childrens
                    ? handleMouseEnter(child.id, child, level)
                    : null
                }
              >
                <div>{child.title}</div>
                {child.childrens && (
                  <i
                    className={`fa-solid ${
                      activeMenus[level] === child.id ? "fa-chevron-right" : ""
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        {activeMenus[level] === savedCategories[level]?.id &&
          renderChildren(savedCategories[level]?.childrens, level + 1)}
      </div>
    );
  };

  return (
    <div className="absolute z-10 2xl:ml-52 lg:ml-12 md:ml-12 ml-12 bg-gray-50">
      <div className="flex" onMouseLeave={() => handleMouseLeave(0)}>
        <div className="bg-white w-60 border-r">
          <ul className="space-y-2 py-4">
            {categories.map((mainCategory) => (
              <li
                key={mainCategory.id}
                className={`px-4 text-xs cursor-pointer flex items-center justify-between ${
                  activeMenus[0] === mainCategory.id
                    ? "text-orange-500 font-bold"
                    : "hover:text-orange-500"
                }`}
                onMouseEnter={() =>
                  handleMouseEnter(mainCategory.id, mainCategory, 0)
                }
              >
                <div>{mainCategory.title}</div>
                {mainCategory.childrens && (
                  <i
                    className={`fa-solid ${
                      activeMenus[0] === mainCategory.id
                        ? "fa-chevron-right"
                        : ""
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        {activeMenus[0] === savedCategories[0]?.id &&
          renderChildren(savedCategories[0]?.childrens, 1)}
      </div>
    </div>
  );
};

export default Sidebar;
