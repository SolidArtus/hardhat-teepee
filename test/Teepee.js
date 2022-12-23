// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const { expect } = require("chai");

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha 
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("Teepee contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployTeepeeFixture() {
    // Get the ContractFactory and Signers here.
    const Teepee = await ethers.getContractFactory("Teepee");
    const [owner, addr1, addr2] = await ethers.getSigners();

    // To deploy our contract, we just have to call Teepee.deploy() and await
    // its deployed() method, which happens once its transaction has been
    // mined.
    const hardhatTeepee = await Teepee.deploy();

    await hardhatTeepee.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { Teepee, hardhatTeepee, owner, addr1, addr2 };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define each
    // of your tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will `await` it.
    it("Should set the initial balance of the owner to 0", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { hardhatTeepee, owner } = await loadFixture(deployTeepeeFixture);

      // `expect` receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be
      // equal to our Signer's owner.
      expect(await hardhatTeepee.pot_total_amounts(owner.address)).to.equal(0);
    });

    it("Should have the right initialized name", async function () {
      const { hardhatTeepee, owner } = await loadFixture(deployTeepeeFixture);
      const name = "name_set";
      await hardhatTeepee.name_pot(name);
      console.log(await hardhatTeepee.pot_names(owner.address));
      expect(await hardhatTeepee.pot_names(owner.address)).to.equal(name);
    });
  });
  
});
