import Tax from "./Tax.js";
//Ontario Test cases
QUnit.test("Ontario Tax calculation for income less than $40922", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(20000, 200);
    assert.equal(taxes[0], "1010.000", "We expect correct value in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $81847 and $40922)", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(50000, 5000);
    assert.equal(taxes[0], "2897.637"    , "We expect correct value in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $150000 and $81847", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(110000, 7000);
    assert.equal(taxes[0], "8952.875", "We expect correct value in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income between $220000 and $150000", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(175000, 10000);
    assert.equal(taxes[0], "16457.000", "We expect correct value in Ontario Tax");
});

QUnit.test("Ontario Tax calculation for income greater than $220000", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(225000, 50000);
    assert.equal(taxes[0], "22587.000", "We expect correct value in Ontario Tax");
});
//Federal Test cases
QUnit.test("Federal Tax calculation for income less than $40922", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(20000, 200);
    assert.equal(taxes[1], "3000.000", "We expect correct value in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $81847 and $40922)", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(50000, 5000);
    assert.equal(taxes[1], "7759.190", "We expect correct value in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $150000 and $81847", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(110000, 7000);
    assert.equal(taxes[1], "21128.620", "We expect correct value in Federal Tax");
});

QUnit.test("Federal Tax calculation for income between $220000 and $150000", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(175075, 10000);
    assert.equal(taxes[1], "39088.230", "We expect correct value in Federal Tax");
});

QUnit.test("Federal Tax calculation for income greater than $220000", function (assert) {
    const oTax = new Tax();
    var taxes = oTax.calculate(225000, 50000);
    assert.equal(taxes[1], "54567.000", "We expect correct value in Federal Tax");
});
