import CreateDepartmentModel from "./CreateDepartmentModel";
import asyncFnForJest from "@async-fn/jest";

describe("CreateDepartmentModel", () => {
  let model;
  let submitDepartmentMock;

  beforeEach(() => {
    submitDepartmentMock = asyncFnForJest();

    model = new CreateDepartmentModel(submitDepartmentMock);
  });

  describe("given required fields have been set, when submitted", () => {
    beforeEach(() => {
      model.name.setValue("some-name");

      model.submit();
    });

    it("submits department", () => {
      expect(submitDepartmentMock).toHaveBeenCalledWith({ name: "some-name" });
    });

    it("when submit resolves, clears input", async () => {
      await submitDepartmentMock.resolve();

      expect(model.name.value).toBe("");
    });
  });
});
