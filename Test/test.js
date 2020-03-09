var expect = require("chai").expect;
var Titleize = require("../index");

describe("Titleize Class", function() {

  let titleize;

  beforeEach(() => {
    titleize = new Titleize();
  });

  it("to capitalize initial letter of each word in input", function() {
    expect(titleize.convertName("seth smith")).to.equal("Seth Smith");
  });

  it("to append period to leading titles", function() {
    expect(titleize.convertName("dr zhivago")).to.equal("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(titleize.convertName("Mr. Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleize.convertName("Mr Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize.convertName("Mr ALEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});
