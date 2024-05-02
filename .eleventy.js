const Image = require("@11ty/eleventy-img")

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./_src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./docs/images/",
  })

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  }

  return Image.generateHTML(metadata, imageAttributes)
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./_src/css/")
  eleventyConfig.addWatchTarget("./_src/css/")
  eleventyConfig.addPassthroughCopy("./_src/images/")
  eleventyConfig.addPassthroughCopy({ "./_src/favicons": "/" })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode)

  return {
    dir: {
      input: "_src",
      output: "docs",
    },
  }
}
