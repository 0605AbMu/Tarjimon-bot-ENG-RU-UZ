const { Register } = require("../MIddleware/middleware");

test("Register middleware testing", () => {
  expect(
    Register({ from: { first_name: "Abdumannon", id: "123" } }, function () {})
  )
  .toBe(undefined);
});
