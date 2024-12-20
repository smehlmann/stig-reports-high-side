export default function ReportColumns({ index, item, selectedReport }) {
  // console.log('index: ' + index + ' selectedReport: ' + selectedReport);
  // console.log(' item: ' + item);

  switch (selectedReport) {
    case "1":
      return (
        <tr key={index}>
          <td>{item.emass}</td>
          <td>{item.collection}</td>
          <td>{item.benchmark}</td>
          <td>{item.stigVersion}</td>
          <td>{item.assetNames}</td>
        </tr>
      );
    case "2":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.sumOfStigs}</td>
          <td>{item.sumOfChecks}</td>
          <td>{item.avgAssessed}</td>
          <td>{item.avgSubmitted}</td>
          <td>{item.avgAccepted}</td>
          <td>{item.avgRejected}</td>
          <td>{item.sumOfCat3}</td>
          <td>{item.sumOfCat2}</td>
          <td>{item.sumOfCat1}</td>
        </tr>
      );
    case "4":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.assetCount}</td>
        </tr>
      );
    case "5":
      return (
        <tr key={index}>
          <td>{item.datePulled}</td>
          <td>{item.code}</td>
          <td>{item.shortName}</td>
          <td>{item.collectionName}</td>
          <td>{item.emass}</td>
          <td>{item.asset}</td>
          <td>{item.nccm}</td>
          <td>{item.deviceType}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>
          <td>{item.rmfAction}</td>
          <td>{item.isso}</td>
          <td>{item.ccbSAActions}</td>
          <td>{item.other}</td>
          <td>{item.lastTouched}</td>
          <td>{item.stigs}</td>
          <td>{item.benchmarks}</td>
          <td>{item.checks}</td>
          <td>{item.assessed}</td>
          <td>{item.submitted}</td>
          <td>{item.accepted}</td>
          <td>{item.rejected}</td>
          <td>{item.cat3}</td>
          <td>{item.cat2}</td>
          <td>{item.cat1}</td>
          <td>{item.cklWebOrDatabase}</td>
        </tr>
      );
    case "7":
      return (
        <tr key={index}>
          <td>{item.emass}</td>
          <td>{item.acronym}</td>
          <td>{item.asset}</td>
          <td>{item.checks}</td>
          <td>{item.assessed}</td>
          <td>{item.submitted}</td>
          <td>{item.accepted}</td>
          <td>{item.rejected}</td>
          <td>{item.cat3}</td>
          <td>{item.cat2}</td>
          <td>{item.cat1}</td>
        </tr>
      );
    case "8":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.asset}</td>
          <td>{item.deviveType}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>     
          <td>{item.benchmarks}</td>
          <td>{item.latestRev}</td>
          <td>{item.prevRev}</td>
          <td>{item.quarterVer}</td>      
          <td>{item.cklWebOrDatabase}</td>
        </tr>
      );
    case "9":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.benchmark}</td>
          <td>{item.latestRev}</td>
          <td>{item.prevRev}</td>
          <td>{item.quarterVer}</td>
          <td>{item.groupId}</td>
          <td>{item.asset}</td>
          <td>{item.result}</td>
          <td>{item.detail}</td>
          <td>{item.comment}</td>
          <td>{item.status}</td>
        </tr>
      );
    case "10":
      return (
        <tr key={index}>
          <td>{item.code}</td>
          <td>{item.shortName}</td>
          <td>{item.collectionName}</td>
          <td>{item.asset}</td>
          <td>{item.deviceType}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>
          <td>{item.rmfAction}</td>
          <td>{item.isso}</td>
          <td>{item.ccbSAActions}</td>
          <td>{item.other}</td>
          <td>{item.lastTouched}</td>
          <td>{item.stigs}</td>
          <td>{item.assessed}</td>
          <td>{item.submitted}</td>
          <td>{item.rejected}</td>
        </tr>
      );
    case "11":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.asset}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>
          <td>{item.other}</td>
          <td>{item.benchmark}</td>
          <td>{item.revision}</td>
          <td>{item.groupId}</td>
          <td>{item.result}</td>
          <td>{item.modifiedDate}</td>
          <td>{item.modifiedBy}</td>
          <td>{item.ruleId}</td>
          <td>{item.status}</td>
          <td>{item.statusDate}</td>
          <td>{item.checkedBy}</td>
        </tr>
      );
    case "12":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.asset}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>
          <td>{item.rmfAction}</td>
          <td>{item.isso}</td>
          <td>{item.ccbSAActions}</td>
          <td>{item.other}</td>
          <td>{item.benchmarks}</td>
          <td>{item.latestRev}</td>
          <td>{item.prevRev}</td>
          <td>{item.quarterVer}</td>
          <td>{item.assessed}</td>
          <td>{item.submitted}</td>
          <td>{item.accepted}</td>
          <td>{item.rejected}</td>
          <td>{item.cat3}</td>
          <td>{item.cat2}</td>
          <td>{item.cat1}</td>
        </tr>
      );
    case "13":
      return (
        <tr key={index}>
          <td>{item.collectionName}</td>
          <td>{item.asset}</td>
          <td>{item.primOwner}</td>
          <td>{item.sysAdmin}</td>
          <td>{item.rmfAction}</td>
          <td>{item.isso}</td>
          <td>{item.ccbSAActions}</td>
          <td>{item.other}</td>
          <td>{item.benchmarks}</td>
          <td>{item.pinnedRev}</td>
          <td>{item.latestRev}</td>
          <td>{item.prevRev}</td>
          <td>{item.quarterVer}</td>
          <td>{item.assessed}</td>
          <td>{item.submitted}</td>
          <td>{item.accepted}</td>
          <td>{item.rejected}</td>
          <td>{item.cat3}</td>
          <td>{item.cat2}</td>
          <td>{item.cat1}</td>
        </tr>
      );
    default:
      return null;
  }
}
