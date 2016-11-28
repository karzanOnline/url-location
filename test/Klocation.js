/**
 * Created by caozheng on 2016/11/28.
 */
require('./../KLoction');
var expect = require('chai').expect;


(function (win) {
    var testUrl = "https://github.com/karzanOnline?a=1";
    describe('constructor', function () {
        var testResult =  KLocation(testUrl);

        describe('#output', function () {
            it("return value is an object", function () {
                expect(testResult).to.be.an("object")
            });
            it("property url is string", function () {
                expect(testResult.url).to.be.a("string")
            });
            it("property port is number", function () {
                expect(testResult.port).to.be.a("number")
            });
            it("property host is string", function () {
                expect(testResult.host).to.be.a("string")
            });
            it("property protocol is string", function () {
                expect(testResult.protocol).to.be.a("string")
            });
            it("property pathname is string", function () {
                expect(testResult.pathname).to.be.a("string")
            });
        });

        describe("#method", function () {
            it("getParam", function () {
                expect(testResult.getParam()).to.be.deep.equal({a : '1'})
            });
            it("getProtocol", function () {
                expect(testResult.getProtocol()).to.be.equal("https:")
            });
            it("getHost", function () {
                expect(testResult.getHost()).to.be.equal("github.com")
            });
            it("getPort", function () {
                expect(testResult.getPort()).to.be.empty;
            });
            it("getPathname", function () {
                expect(testResult.getPathname()).to.be.equal("/karzanOnline")
            })

        })

    })

})(this);