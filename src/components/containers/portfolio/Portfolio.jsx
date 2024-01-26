import React, { useState } from 'react';
import './portfolio.scss';
import PageHeaderContent from '../../page_Header_Content.jsx/PageHeaderContent';
import { BsInfoCircle } from 'react-icons/bs';

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "Development" },
  { id: 3, name: "Design" }
];

const projects = [
  {
    id: 1,
    name: "Project 1",
    imageURL: "https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
    category: "Development",
    description: "Description of Project 1.",
  },
  {
    id: 2,
    name: "Project 2",
    imageURL: "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",
    category: "Design",
    description: "Description of Project 2.",
  },
  {
    id: 3,
    name: "Project 2",
    imageURL: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
    category: "Development",
    description: "Description of Project 2.",
  },
  {
    id: 4,
    name: "Project 2",
    imageURL: "https://thumbs.dreamstime.com/b/two-roads-forest-illuminated-sun-spring-view-143727278.jpg",
    category: "Design",
    description: "Description of Project 2.",
  },
  {
    id: 5,
    name: "Project 2",
    imageURL: "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg",
    category: "Development",
    description: "Description of Project 2.",
  },
  {
    id: 6,
    name: "Project 2",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3s2YxzGwlKiBhyfg_N6HCS2BeurPm9ySzpXisRjvE0N8kZGcb4UvJSTlSTJvjCFyfZ0&usqp=CAU",
    category: "Design",
    description: "Description of Project 2.",
  },
  {
    id: 7,
    name: "Project 2",
    imageURL: "https://plus.unsplash.com/premium_photo-1675198764385-642c571ba901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&w=1000&q=80",
    category: "Development",
    description: "Description of Project 2.",
  },
  
];

function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const filteredProjects = selectedTab === "All" ? projects : projects.filter(project => project.category === selectedTab);

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent 
        headerText="Portfolio"
        icon={<BsInfoCircle size={40}/>}
      />
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={selectedTab === tab.name ? "tab selected" : "tab"}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="projects">
        {filteredProjects.map(project => (
          <div key={project.id} className="project">
            <img src={project.imageURL} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


