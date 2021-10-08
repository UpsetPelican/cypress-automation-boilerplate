/// <reference types="Cypress" />
import DDGHomepage from '../../page-objects/ddg-home'

describe('DDG Test', () => {
    let ddhome = new DDGHomepage()

    it('Simple search', () =>{
        cy.visit(Cypress.env('baseUrl'))
        cy.get(ddhome.searchField)
            .type('cypress javascript')
            .type('{enter}')
        cy.get(ddhome.firstResult).click()
        cy.title().should('eq','JavaScript End to End Testing Framework | cypress.io')
        // Acording to Cypress' Docs, you shouln't mix different domains in tests (duck duck > cypress io)
        // https://docs.cypress.io/guides/references/error-messages#Cypress-detected-a-cross-origin-error-happened-on-page-load
        // This is just an example on how to force using cypress.json chrome web security option
    })
})