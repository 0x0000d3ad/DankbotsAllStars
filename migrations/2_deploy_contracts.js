const { time } = require( '@openzeppelin/test-helpers' );

var DankbotsAllStars = artifacts.require( "DankbotsAllStars.sol" );

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( DankbotsAllStars );
}
