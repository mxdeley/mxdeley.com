"use client";

import React, { useState, useEffect } from "react";
import data from "../../../content/projects/projects.json";
import Image from "next/image";

interface ProjectData {
  id: number;
  title: string;
  image: string;
}

const Project: React.FC = () => {
  const [jsonData, setJsonData] = useState<ProjectData[]>([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="text-white">
      {jsonData.map((item: ProjectData) => (
        <React.Fragment key={item.id}>
          <div>{item.title}</div>
          <Image src={item.image} height={200} width={200} alt="" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Project;
