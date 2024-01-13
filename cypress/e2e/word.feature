Feature: User enters a text in the text box

     Scenario: Text copied into text box
         Given the user entered the page 'wordcounter'
         When is it located in the text box
         And copy the selected text
         Then the page shows all the details of the entered text


Feature: Selection of details

     Scenario: User selects text details
           Given the user's access to the details module.
           When you turn off details you don't want to see
           Then close the details module.
          And on the right side of the page only the details are shown on


Feature: Text Features

       Scenario: you only want to display the characteristics of the text
           Given the user is in the details module
           When you turn off all the details
           And leave only the feature details on
           Then the user will only see the number of characteristics of the attached text

Feature: Number of words in the text

       Scenario: you only want to know the number of words in the text
           Given the user is in the details module
           When you turn off all the details
           And leave only the detail of words on
           Then the user will only see the number of words of the attached text
           

Feature: Most repeated words in the text

     Scenario: List of the three most repeated words in the text
         Given The user was located in the Keyword Density module
         When you see the list of the most repeated words in the text
         Then the user will identify which are the first three words repeated in the text


Feature: Most repeated words in the text

     Scenario: selection of repeated words
         Given The user was located in the Keyword Density module
         When do I select the repeated word
         Then word will then be underlined in the text
         And it will show where it is repeated