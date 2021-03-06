// Imports

// const util = require("lib/util");
const mitems = require("content/items");
const mliquids = require("content/liquids");
const mblocks = require("content/blocks");
const msectors = require("campaign/sectors");
const objectives = require("campaign/objectives");

/**
 * Node for the research tech tree.
 *
 * @property {UnlockableContent}    parent          - The parent of the current node.
 * @property {UnlockableContent}    contentType     - The unlockable content that the current node contains.
 * @property {ItemStack}            requirements    - The research requirements required to unlock this node, will use the default if set to null.
 * @property {Seq}                  objectives      - A sequence of Objectives required to unlock this node. Can be null.
 */
const node = (parent, contentType, requirements, objectives) => {
  if(parent != null && contentType != null){
    const tnode = new TechTree.TechNode(TechTree.get(parent), contentType, requirements != null ? requirements : contentType.researchRequirements());
    let used = new ObjectSet();
    
    if(objectives != null) tnode.objectives.addAll(objectives);
  }else{
    print("[techtree.js] " + parent + " or " + contentType + " is null.");
  }
};

// Research Nodes

// Items

node(Items.sand, mitems.sulfur, null, null);
node(Items.phaseFabric, mitems.aerogel, null, null, null);
node(Items.thorium, mitems.diamond, null, null);
node(Items.blastCompound, mitems.fusionCompound, null, null);

// Liquids

node(Liquids.oil, mliquids.corrofluid, null, null);
node(Liquids.cryofluid, mliquids.arctifluid, null, null);
node(mliquids.arctifluid, mliquids.glaciafluid, null, null);
node(Liquids.slag, mliquids.quarkPlasma, null, null);

// Blocks

//   Effect

node(Blocks.coreNucleus, mblocks.coreAtom, null, null);
node(Blocks.shockMine, mblocks.surgeMine, null, null);

/*    Environment

Not Applicable.
node(null, mblocks.diamond, null, null);
node(null, mblocks.sulfur, null, null);

*/

//    Power

node(Blocks.impactReactor, mblocks.fusionReactor, null, null);

//    Production

node(Blocks.phaseWeaver, mblocks.aerogelWeaver, null, null);
node(Blocks.cryofluidMixer, mblocks.arctifluidSynthesizer, null, null);
node(Blocks.cryofluidMixer, mblocks.corrofluidMixer, null, null);
node(mblocks.arctifluidSynthesizer, mblocks.glaciafluidExtractor, null, null);

//    Turrets

node(Blocks.tsunami, mblocks.flood, null, null);
node(Blocks.foreshadow, mblocks.harbinger, null, null);

// Sectors

node(SectorPresets.planetaryTerminal, msectors.glacialWasteland, null, Seq.with(objectives.objectivePlanetaryTerminalActivated))