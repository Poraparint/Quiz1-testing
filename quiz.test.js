const Heart = require('./quiz');

test("Heart :", () => {
  expect(Heart(180, 125)).toBe("Danger");
});
test("Heart :", () => {
  expect(Heart(120, 99)).toBe("General");
});
test("Heart :", () => {
  expect(Heart(139, 100)).toBe("Risk");
});
test("Heart :", () => {
  expect(Heart(159, 154)).toBe("High Risk level 1");
});
test("Heart :", () => {
  expect(Heart(179, 181)).toBe("High Risk level 2");
});
test("Heart :", () => {
  expect(Heart(180, 182)).toBe("High Risk level 3");
});
