// Imports

const mitems = require("content/items");

// Assignment

const sulfurOre = extend(Floor, "sulfur-ore", {
	variants: 1,
	itemDrop: mitems.sulfur,
	buildVisibility: BuildVisibility.editorOnly,
	playerUnmineable: true
});