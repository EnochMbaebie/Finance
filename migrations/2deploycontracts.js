const masterSLEC = artifacts.require("masterSLEC");

module.exports = function(deployer) {
  deployer.deploy(masterSLEC);
};
