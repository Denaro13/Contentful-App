import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "a1gf74lvsba6",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      //   console.log(response);
      const projects = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { img, title, url, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

// client
//   .getEntries({ content_type: "projects" })
//   .then((response) => console.log(response))
//   .catch(console.error);
