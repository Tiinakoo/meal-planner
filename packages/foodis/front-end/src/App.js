import "./App.scss";
import "./Typography.scss";
import React from "react";
import CreateDepartment from "./departments/CreateDepartment";
import CreateDepartmentModel from "./departments/CreateDepartmentModel";

const createDepartmentModel = new CreateDepartmentModel();

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="panel">
          <div className="typography__primary">
            <CreateDepartment createDepartmentModel={createDepartmentModel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
