const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
  const input = "";
  const actual = normalizeURL(input);
  const expected = "null";
  expect(actual).toEqual(expected);
});
