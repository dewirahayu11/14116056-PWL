module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy ('assets')
	eleventyConfig.addPassthroughCopy ('css')
	eleventyConfig.addPassthroughCopy ('gambar')
	eleventyConfig.addPassthroughCopy ('javascript')
	return {
		addPassthroughCopy: true
	}
}