function Heart(SYS, DIA) {
  let status = "Danger";

  if (SYS <= 120 && DIA < 100) {
    status = "General";
  } else if (SYS >= 120 && SYS <= 139 && DIA >= 100) {
    status = "Risk";
  } else if (SYS >= 140 && SYS < 160 && DIA >= 125 && DIA < 155) {
    status = "High Risk level 1";
  } else if (SYS >= 160 && SYS < 180 && DIA >= 155 && DIA < 182) {
    status = "High Risk level 2";
  } else if (SYS >= 180 && DIA >= 182) {
    status = "High Risk level 3";
  }

  return status;
}
module.exports = Heart;
