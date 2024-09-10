import { Link } from "react-router-dom";
import "./App.css";
import { FaInstagram, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { IoMdDocument, IoIosSchool } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", saveTheme === "dark");
    setTheme(saveTheme);
  }, []);

  const darkmodeSwitchToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const sosmedItem = [
    {
      id: 1,
      icon: <FaInstagram />,
      action: "https://www.instagram.com/kevien.oj/",
    },
    {
      id: 2,
      icon: <FaGithub />,
      action: "https://github.com/Kepin17",
    },

    {
      id: 3,
      icon: <FaLinkedin />,
      action: "https://www.linkedin.com/in/kevien-ollyvie-jolanda-057268194/",
    },
  ];

  return (
    <main className="wrapper relative w-full bg-slate-300 dark:bg-slate-700 h-screen bg-white shadow-lg  flex justify-center items-center transtition-all duration-300 ease-in-out">
      <section className="card-wrapper w-[350px] h-[500px] bg-white dark:bg-slate-900 border-2  shadow-md dark:shadow-none shadow-slate-500 rounded-lg py-4 relative ">
        <div className="card-header w-fuil h-[250px]">
          <figure>
            <img src="image/foto-kepin.png" alt="kepin.png" className="w-[100px] h-[100px] mt-2 mx-auto rounded-full border-2 shadow-md " />
          </figure>
          <article className="text-center font-roboto mt-3 dark:text-white">
            <h1 className="font-bold">Kevien Ollyvie Jolanda</h1>
            <p className="text-sm">Frontend Developer | UI/UX Designer</p>
            <small className="text-slate-500 dark:text-slate-400 flex justify-center items-center gap-2 my-2">
              <IoIosSchool />
              Student of Duta Bangsa University
            </small>
            <ul className="flex justify-center gap-5 my-3">
              {sosmedItem.map((item) => (
                <li
                  className="w-[40px] h-[40px] bg-white dark:bg-slate-700 text-black dark:text-white hover:bg-slate-900 dark:hover:bg-slate-600 hover:text-white shadow-md rounded-full flex justify-center items-center
                  transition-all duration-300
                "
                  key={item.id}
                >
                  <Link to={item.action} className="text-2xl">
                    {item.icon}
                  </Link>
                </li>
              ))}

              <li
                className="w-[40px] h-[40px] bg-white dark:bg-slate-700 text-black dark:text-white hover:bg-slate-900 dark:hover:bg-slate-600 hover:text-white shadow-md rounded-full flex justify-center items-center
                  transition-all duration-300
                "
              ></li>
            </ul>
          </article>
        </div>

        <div className="card-body w-full h-[180px] flex flex-col justify-center gap-5 px-10 font-roboto ">
          <Link to={""} target="_blank" className="h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md relative">
            <div className="absolute top-2 left-3 text-2xl">
              <IoMdDocument />
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Download CV</button>
          </Link>

          <Link to={""} className="h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md relative" onClick={() => {}}>
            <div className="absolute top-2 left-3 text-2xl">
              <FaGlobe />
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">My Portfolio</button>
          </Link>

          <Link to={"https://wa.me/6288295423952"} target="_blank" className="h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md relative">
            <div className="absolute top-2 left-3 text-2xl">
              <MdMessage />
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Send Message</button>
          </Link>
        </div>

        <div className="card-footer w-full h-[50px] text-center font-roboto text-slate-600 dark:text-slate-400 py-2">
          <small>© 2024 create by Olyzano</small>
        </div>

        <div
          className="switch-wrapper w-[60px] h-[30px] border-2 border-slate-900 rounded-full absolute top-5 right-5"
          style={{
            backgroundColor: theme === "light" ? "black" : "white",
          }}
        >
          <div
            className="switch w-5 h-5 bg-slate-900 rounded-full relative top-[3.5px] flex justify-center items-center cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: theme === "light" ? "white" : "black",
              left: theme !== "light" ? "2.2rem" : ".1rem",
            }}
            onClick={darkmodeSwitchToggle}
          ></div>
        </div>
      </section>
    </main>
  );
}

export default App;
