import { useState } from "react";
import { create } from "../services/tutorial.service";

export default function AddTutorial() {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    let data = { title: tutorial.title, description: tutorial.description };
    create(data)
      .then((res) => {
        setTutorial({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          published: res.data.published,
        });
        //After tutorial change submit to True
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return {
    tutorial,
    saveTutorial,
    submitted,
    setSubmitted,
    newTutorial,
    handleInputChange,
  };
}
