import { should } from "chai"
import { contains } from "cypress/types/jquery"

describe("First cypress Test", ()=>{
    it("Launch the URL",()=>{
        cy.visit("https://qavbox.github.io/demo/signup/")
    })
    it("Assert the URL", ()=>{
        cy.url().should("contain","signup")
    })
    it("Enter the full name", ()=>{
        cy.get("#username").as("usernameId")
        cy.get("@usernameId").type("Cerosh")
        cy.get("@usernameId").clear()
        cy.get("@usernameId").type("Cerosh Jacob", {delay:50})
    })
    it("Read text and and chain assertion", ()=>{
        cy.get("#hidden_div").should('not.be.visible').and("contain","I am hidden")
    })
    it("Count the number of elements", ()=>{
        cy.get("input[name='experience']").its("length").should("eq",8)
    })
    it("Use of Check box", ()=>{
        cy.get("input[name*='language']").check("Java")
        cy.get("input[name*='language'][value='Java']").should('be.checked').and("be.visible")
    })
    it("Submitting the registration form with logging enabled",()=>{
        cy.get("input[name='commit']",{log:true}).click()
    })
    it ("Assert the alert", ()=>{
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Registration Done!');
          })
    })
    it("Override the current time", ()=>{
        const date = new Date(2021,10,22).getTime()
        cy.clock(date)
        
        cy.log("date")
        
        
    })

})