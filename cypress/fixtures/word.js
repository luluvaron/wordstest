import { Given, When, And, Then } from "@cucumber/cucumber/steps";

  Given ('the user entered the page " wordcounter"', () =>{
      cy.get('https://wordcounter.net/')
  })
  
  When ('The user will click on the Options button', () => {
    
  })

  And('select the details data', ()=>{
    cy.get('#details').type(details_modal_tab)
  })

  Then('The number of words contained in the text is displayed')

