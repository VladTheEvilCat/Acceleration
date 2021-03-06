// Imports

const mliquids = require("content/liquids");
const mitems = require("content/items");

// Assignment

const glaciafluidExtractor = extend(Fracker, "glaciafluid-extractor", {
	health: 360,
	size: 4,
	solid: true,
	hasPower: true,
	hasLiquid: true,
	itemCapacity: 0,
	liquidCapacity: 10,
	result: mliquids.glaciafluid,
	requirements: ItemStack.with(
		Items.lead, 240,
		Items.silicon, 210,
		Items.metaglass, 120,
		Items.titanium, 240,
		Items.surgeAlloy, 150,
		mitems.aerogel, 120
	),
	category: Category.crafting,
	outputLiquid: new LiquidStack(mliquids.glaciafluid, 1),
	craftTime: 120,
	attribute: Attribute.water,
	buildVisibility: BuildVisibility.shown
});

glaciafluidExtractor.consumes.power(100);
glaciafluidExtractor.consumes.liquid(mliquids.arctifluid, 0.2)