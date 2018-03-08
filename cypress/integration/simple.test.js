describe('takes input', function() {
    it('should take user input', function() {
        cy.visit('http://localhost:3000/')
        cy.get('a').click({force: true})
    })
    it('should take input for the dogs', function() {
        cy.get('select').contains('Breed')
        cy.get('select').next().contains('Sex')
        cy.get('input').click({force: true})
    })
    it('should populate with information', function() {
        cy.get('img')
        cy.get('span').contains('Name')
        cy.get('span').next().contains('Breed')
        cy.get('span').next().next().contains('Sex')
        cy.get('span').last().contains('Location')
        cy.get('p').contains('Description')
    })
})