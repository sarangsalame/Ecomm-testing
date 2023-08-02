Feature: LogIn Feature

    Feature Description

    @focus
    Scenario: User try to Login without Email
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Click on the Login text
        Then Verify User lands on Login Page
        Then Enter Email field as blank in Login Form
        Then Enter Password in Login Form
        Then Click on Login Button
        Then Error text of Email must present in Login Page

    @focus
    Scenario: User try to Login without Password
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Click on the Login text
        Then Verify User lands on Login Page
        Then Enter Email in Login Form
        Then Enter password field as blank in Login Form
        Then Click on Login Button
        Then Error text of Password must present in Login Page

    @focus
    Scenario: User login and land on Home Page
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