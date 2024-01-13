
const valideText = {
  Text: 'En general, las intervenciones para la mejora de la fluidez mostraron un efecto positivo tanto en los estudios en los que se comparaba un grupo experimental con un grupo de control como en los estudios de caso único. Los resultados eran positivos en las investigaciones más rigurosas, que cumplían con los estándares de What Works Clearinghouse y eran mayores en las investigaciones que cumplían los estándares con reservas o no los cumplían. En estos dos casos, los resultados fueron muy similares'
};

describe('template spec', () => {

beforeEach(() => {
  cy.visit('/')
})

  it('Succes text', () => {
    
    cy.get('#box').type(valideText.Text)
    cy.get('#details_panel > .panel-heading > .panel-title > .accordion-toggle').should('include.text','Details')
  })

  it ('selection of details',() =>{
    
    cy.get('#box').type(valideText.Text)
    cy.contains('OPTIONS').click('')
    cy.get(':nth-child(1) > .nav > :nth-child(2) > a').click('')
    cy.get('#details_buttons > :nth-child(2) > .task-list > :nth-child(1)').click('')
    cy.get('#details_buttons > :nth-child(2) > .task-list > :nth-child(2)').click('')
    cy.get('#details_buttons > :nth-child(2) > .task-list > :nth-child(3)').click('')
    cy.get('#details_buttons > :nth-child(2) > .task-list > :nth-child(5)').click('')
    cy.get('[style="padding-right: 10px"] > .task-list > :nth-child(10)').click('')
    cy.get('#options-modal > .modal-dialog > .modal-content > .modal-footer > .btn').click('bottom')
  })
    
  it (' Keyword Density',() => {
    cy.get('#box').type(valideText.Text)
    cy.get('#kwd-accordion-data > :nth-child(1)').click('')
  })
})