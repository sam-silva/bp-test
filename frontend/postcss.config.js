const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./**/**/*.html", "./**/**/*.svelte"],
	whitelistPatterns: [/svelte-/, /customorange$/, /customgreen$/, /customblue$/, /-reverse$/],
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
const production = !process.env.ROLLUP_WATCH;
module.exports = {
	plugins: [require("tailwindcss"), ...(production ? [purgecss] : [])],
};
