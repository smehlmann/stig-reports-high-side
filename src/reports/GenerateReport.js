import * as assetsByCollectionsReport from "./assetsByCollectionsReport.js";
import * as statusReport from "./statusReport.js";
import * as assetCountReport from "./assetCountReport.js";
import * as saReportByAsset from "./saReportByAsset.js";
import * as saReportWithMetricsAndVersions from "./saReportWithMetricsAndVersions.js";
import * as stigBenchmarkByResults from "./stigBenchmarkByResults.js";
import * as exportSaReportsByAsset from "./exportSaReportByAsset.js";
import * as saReportByLabelAndEmass from "./saReportByLabelAndEmass.js";
import * as checklistOver365Days from "./checklistOver365Days.js";
import * as unidentifiedPackages from "./unidentifiedPackages.js";
import * as pinnedReport from "./pinnedReport.js";
import * as saReportByPrinter from "./saReportByPrinters.js";
import * as assetsByRmfSampleReport from "./assetsByRmfSampleReport.js";
import * as reportGetters from "./reportGetters.js";
import * as reportUtils from "./reportUtils.js";

async function GenerateReport(
  auth,
  selection,
  inEmassNums,
  numDaysOver,
  benchmark
) {
  var rows = [];
  var collections = [];

  var emassNums = "";
  // remove whitespace from the eMASS string
  if (inEmassNums && inEmassNums.length > 0) {
    emassNums = inEmassNums.replaceAll(" ", "");
  }
  try {
    // map collections (value) to eMass (key) map
    let emassMap = new Map();

    // Get all collections and filter thenm by eMass, if eMass provided by the user
    var tempCollections = await reportGetters.getCollections(auth);
    emassMap = reportUtils.getCollectionsByEmassNumber(
      tempCollections,
      emassNums
    );

    if (emassMap.size === 0) {
      alert("No Colections found!");
      return rows;
    }
    switch (selection) {
      case "1":
        console.log("Run 1. RMF SAP Report");
        //let tokens = await myTokenUtils.getTokens(oidcBase, client_id, scope);
        rows = await assetsByCollectionsReport.runAssetByCollectionReport(
          auth,
          emassMap
        );
        break;
      case "2":
        console.log("Report removed STIG Status per Collection");
        rows = await statusReport.runStatusReport(
          auth,
          emassNums,
          collections,
          emassMap
        );
        break;
      case "4":
        console.log("Report removed Asset Asset Status per Collection");
        rows = await assetCountReport.runAssetCountReport(
          auth,
          emassNums,
          collections,
          emassMap
        );
        break;
      case "5":
        console.log("Run 2. Asset Mewtrics");
        rows = await saReportByAsset.runSAReportByAsset(
          auth,
          emassNums,
          emassMap
        );
        break;
      case "7":
        console.log("Run 3. RMF Package Asset Count");
        rows = await saReportByLabelAndEmass.runSAReportByLabelAndEmass(
          auth,
          emassMap
        );
        break;
      case "8":
        console.log("Run 4. STIG Benchmark Version Deltas");
        rows =
          await saReportWithMetricsAndVersions.runSAReportWithMetricsAndVersions(
            auth,
            emassMap,
            benchmark
          );
        break;
      case "9":
        // run STIG Benchmark by Results
        console.log("Run 5. Open Result Finding Metrics ");
        rows = await stigBenchmarkByResults.runStigBenchmarkByResults(
          auth,
          emassMap,
          benchmark
        );
        break;
      case "10":
        // run STIG Benchmark by Results
        console.log(
          "Report removed. Export Asset Collection per Primary Owner and System Admin"
        );
        rows = await exportSaReportsByAsset.runExportSAReportByAsset(
          auth,
          emassNums,
          collections,
          emassMap
        );
        break;
      case "11":
        // run Run 6.Checklist Over 356 days
        console.log("Run 6. Checks Not Updated in x Days");
        rows = await checklistOver365Days.runChecklistOver365Days(
          auth,
          emassMap,
          Number(numDaysOver)
        );
        break;
      case "12":
        // removed report 7. STIG Deltas for Unidentified Packages
        console.log("Run 7. STIG Deltas for Unidetified Packages");
        rows = await unidentifiedPackages.runUnidentifiedPackages(
          auth,
          tempCollections
        );
        break;
      case "13":
        // run 7. Pinned Report
        console.log("Run 8. Pinned Report");
        rows = await pinnedReport.runPinnedReport(auth, emassMap);
        break;
      case "15":
        // run 7. Pinned Report
        console.log("Run 9. Asset Metrics for Printers");
        rows = await saReportByPrinter.runSAReportByAssetPrintersOnly(
          auth,
          emassNums,
          emassMap
        );
        break;
      case "16":
        // run 7. Pinned Report
        console.log("Run 10. assetsByRmfSampleReport");
        rows = await assetsByRmfSampleReport.runAssetsByRmfSampleReport(
          auth,
          emassMap
        );
        break;
      default:
        alert("You must provide a valid report option.");
    }

    return rows;
  } catch (e) {
    console.log(e.message);
  }
}

export { GenerateReport };
