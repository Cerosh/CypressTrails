describe("Identifiers using CSS-Selectors",()=>{

    before("Lauch the URL in default browser", ()=>{
        cy.visit("https://docs.cypress.io/api/commands/visit") 
    })
    it("Identify the element using class name",()=>{
        cy.get(".main-content-title").should('be.visible')
    })
    
    it ("Identify the element using id", ()=>{
        cy.get("#Syntax").should('be.visible')
    })
    it("Assert the title of the page", ()=>{
        cy.document().title().should("contain","Cypress Documentation")
    })

    it("Identify the element using AND",()=>{
        cy.get("div[role='alert'][class='alert_22O9T warning_mhQ92']").should("be.visible")
    })
    it.skip("Identify the element using OR", ()=>
    {
        cy.get("div[role='alert'],[class='alert_22O9T warning_mhQ92']").should("be.visible")
    })
    it("Identify the element using Contains", ()=>{
        cy.get("div[class*='alert']").should('have.length', 3)
    })
    it("Identify the element using Starts with", ()=>{
        cy.get("[class^=alert]").should('have.length.at.least',4)
    })
    it("Identify the element using Ends with", ()=>{
        cy.get("[class$=punctuation]").should('have.length.above',3)
    })
    it("Identify the Count of all child node", ()=>{
        cy.get(".nuxt-content div").should("have.length.at.least",3)
    })
    it("Identify the all the siblings", ()=>{
        cy.get("div[class='alert_22O9T warning_mhQ92'] ~ p").should("have.length.at.least",10)
       
    })

})