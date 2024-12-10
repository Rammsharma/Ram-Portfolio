import React from "react";
import java from "../../src/components/image/java.png";
import wordpress from "../../src/components/image/wordpress.png";
import reactjs from "../../src/components/image/reactjs.png";
import ajio from "../../src/components/image/ajio.png";
import pic from "../../src/components/image/photo-ram.jpeg";
function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Text-utils",
      text: "Textutils is a single page application",
      sourcecode: "https://github.com/Rammsharma/TextUtils_React.git"
    },
    {
      id: 2,
      logo: wordpress,
      name: "Blog",
      text: "Built using WordPress,it offers user-friendly features.",
      sourcecode: ""
    },
    {
      id: 3,
      logo: ajio,
      name: "Ajio Clone",
      text: "Create a Ajio Clone website using HTML-CSS",
      sourcecode: "https://github.com/Rammsharma/Rammsharma.github.io.git"
    },
    {
      id: 4,
      logo: pic,
      name: "Portfolio",
      text: "A portfolio built with ReactJS showcases your ability ",
      sourcecode: "https://github.com/Rammsharma/Portfolio.git"
    },
  
    {
      id: 6,
      logo: java,
      name: "Core-Java",
      text: "use of basic concepts like class, object, and methods",
      sourcecode: "https://github.com/Rammsharma/java.git"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, text,sourcecode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{text}</p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={sourcecode}>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;