function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_hello = __loadTag(require("../../../taglib/test-hello/renderer"));

  return function render(data, out) {
    test_hello({
        name: "Frank"
      }, out);

    test_hello({
        name: "Frank"
      }, out);

    test_hello({
        name: "Frank"
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
