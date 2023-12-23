import libantimony from "../libAntimony/libantimony.js";

// var loadAntimonyString; // libantimony function
// var loadString;   // 		"
// var loadSBMLString; //		"
// var getSBMLString; //		"
// var getAntimonyString; //	"
// var getCompSBMLString; //	"
// var clearPreviousLoads; //	"
// var getLastError; //		"
// var getWarnings;  //		"
// var getSBMLInfoMessages; //	"
// var getSBMLWarnings; //		"
// var freeAll;      //		"
// var jsFree;         // emscripten function
// var jsAllocateUTF8; //  	

// try {
//   libantimony().then((libantimony: any) => {
//     //	Format: libantimony.cwrap( function name, return type, input param array of types).
//     loadString = libantimony.cwrap("loadString", "number", ["number"]);
//     loadAntimonyString = libantimony.cwrap("loadAntimonyString", "number", [
//       "number",
//     ]);
//     loadSBMLString = libantimony.cwrap("loadSBMLString", "number", [
//       "number",
//     ]);
//     getSBMLString = libantimony.cwrap("getSBMLString", "string", ["null"]);
//     getAntimonyString = libantimony.cwrap("getAntimonyString", "string", [
//       "null",
//     ]);
//     getCompSBMLString = libantimony.cwrap("getCompSBMLString", "string", [
//       "string",
//     ]);
//     clearPreviousLoads = libantimony.cwrap("clearPreviousLoads", "null", [
//       "null",
//     ]);
//     getLastError = libantimony.cwrap("getLastError", "string", ["null"]);
//     getWarnings = libantimony.cwrap("getWarnings", "string", ["null"]);
//     getSBMLInfoMessages = libantimony.cwrap("getSBMLInfoMessages", "string", [
//       "string",
//     ]);
//     getSBMLWarnings = libantimony.cwrap("getSBMLWarnings", "string", [
//       "string",
//     ]);
//     freeAll = libantimony.cwrap("freeAll", "null", ["null"]);

//     jsFree = (strPtr: any) => libantimony._free(strPtr);
//     jsAllocateUTF8 = (newStr: any) => libantimony.allocateUTF8(newStr);
//   });
// } catch (err) {
//   console.log("Load libantimony error: ", err);
// }