document.querySelector("#om_mig").addEventListener("mouseover", OmMigVises);
document.querySelector("#om_mig").addEventListener("mouseout", OmMigVisesIkke);
document.querySelector("#screen").classList.add("hide");

function OmMigVises() {
  console.log("om mig");
  document.querySelector("#screen").classList.remove("hide");
  document.querySelector("#hoved").classList.add("hide");
}
function OmMigVisesIkke() {
  console.log("om lig vises ikke");
  document.querySelector("#screen").classList.toggle("hide");
  document.querySelector("#hoved").classList.remove("hide");
}
