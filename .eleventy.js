module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./_src/css/")
  eleventyConfig.addWatchTarget("./_src/css/")
  eleventyConfig.addPassthroughCopy("./_src/images/")
  eleventyConfig.addPassthroughCopy({ "./_src/favicons": "/" })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

  return {
    dir: {
      input: "_src",
    },
  }
}
