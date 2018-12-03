import { UPDATE_LICENSE, UPDATE_FORK_SELECTION } from "../types";
import { handleDropdownSelect, handleForkCheckboxChange } from "../index";

describe("test update_license", () => {
  it("has correct type", () => {
    const actionType = handleDropdownSelect().type;
    expect(actionType).toEqual(UPDATE_LICENSE);
  });
  it("has correct payload", () => {
    const payload = handleDropdownSelect(true).payload;
    expect(payload).toEqual(true);
  });
});

describe("test update_fork_selection", () => {
  it("has correct type", () => {
    const actionType = handleForkCheckboxChange().type;
    expect(actionType).toEqual(UPDATE_FORK_SELECTION);
  });
  it("has correct payload", () => {
    const payload = handleForkCheckboxChange(true).payload;
    expect(payload).toEqual(true);
  });
});
