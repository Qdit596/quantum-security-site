module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      input: "public",
      includes: "../_includes",
      output: "dist"
    },
    htmlTemplateEngine: "njk"
  };
};
