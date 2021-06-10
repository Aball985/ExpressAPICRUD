import styles from "./AddTutorial.module.scss";
import AddTutorialHook from "../../hooks/AddTutorial.hook";

export default function AddTutorial() {
  const hook = AddTutorialHook();

  console.log(hook);
  return (
    <div className="submit-form">
      {hook.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={hook.tutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={hook.tutorial.title}
              onChange={hook.handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={hook.tutorial.description}
              onChange={hook.handleInputChange}
              name="description"
            />
          </div>

          <button onClick={hook.saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
