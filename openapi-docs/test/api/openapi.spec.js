const { OpenApiValidator } = require("express-openapi-validate")
const  jsYaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const expect = require("expect.js")

const apiDocument = jsYaml.load(fs. readFileSync( path.resolve( "../openapi-spec.yaml") , "utf-8"))
const validator =  new OpenApiValidator(apiDocument)

describe("openapi validator", () => {
    it("It contains required metadata", () => {
        expect(typeof validator._document.info.title).to.be.a('string')
    })
})