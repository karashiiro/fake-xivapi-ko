const { FFXIVSheetResolver } = require("ffxiv-datamining-github-api");

const sr = new FFXIVSheetResolver("Ra-Workspace/ffxiv-datamining-ko");

sr.getSheetItem("TerritoryType", 202).then(console.log);
