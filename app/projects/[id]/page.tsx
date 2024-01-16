"use client";

import React, { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await import("@/content/projects/projects.json");
    };

    fetchData();
  }, []);

  console.log(data);

  return <div>Project</div>;
};

export default Project;
