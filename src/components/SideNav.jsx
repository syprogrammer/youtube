import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// -------------------- importing React icons from library---------------
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

// ----------------------- Creating an array of all categories ----------------- 
const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    { name: "Fashion & beauty", icon: <GiEclipse />, type: "category", divider: true, },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

// ------------importing component --------------
import MenuItem from "./MenuItem";

// -----------------importing context api to access state---------------
import { Context } from "../context/contextApi";

const SideNav = () => {
    const { selectedCategory, setSelectedCategory, sideNavHamburger,setSideNavHamburger } =
        useContext(Context);

    const navigate = useNavigate();

    // ------------------- Switching between different categories ----------------- 
    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all
             ${sideNavHamburger ? "translate-x-2" : "translate-x-[-240px]"
                }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <MenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/")
                                    setSideNavHamburger(!sideNavHamburger);
                                }}
                                className={`${selectedCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                    }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                Created by Syprogrammer Github:- https://github.com/syprogrammer
                <div className="text-white/[0.5] text-[12px]">
                </div>
            </div>
        </div>
    );
};

export default SideNav;