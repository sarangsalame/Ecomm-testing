 Feature:Home Feature
 
 @focus
    Scenario: User click Home on Hamburger Menu
        Given I open a main page
        Then I validate redirection to the main page
        Then Click on the hamburger menu
        Then Click Home on the hamburger menu
        Then Verify User landed on Home Page


    @focus
    Scenario: User click on Logout Button
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Click on the Login text
        Then Verify User lands on Login Page
        Then Enter Email in Login Form
        Then Enter Password in Login Form
        Then Click on Login Button
        Then Verify User landed on Home Page
        Then Click on Logout button