Feature: SignUp Feature

    Feature Description

    @focus
    Scenario: Sign Up with a new user
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name in Signup Form
        Then Enter Last Name in Signup Form
        Then Enter Email in Signup Form
        Then Enter Password in SignUp Form
        Then Enter Mobile Number in SignUp Form
        Then Click on Signup Submit button
        Then Verify User landed on Home Page

    @focus
    Scenario: User try to Sign Up with no credential
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name as blank in Signup Form
        Then Enter Last Name as blank in Signup Form
        Then Enter Email as blank in Signup Form
        Then Enter Password as blank in Signup Form
        Then Enter Mobile Number as blank in Signup Form
        Then Click on Signup Submit button
        Then Error text must present for First Name
        Then Error text must present for Last Name
        Then Error text must present for Email
        Then Error text must present for Password
        Then Error text must present for Mobile Number


    @focus
    Scenario: User try to signup without first name
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name as blank in Signup Form
        Then Enter Last Name in Signup Form
        Then Enter Email in Signup Form
        Then Enter Password in SignUp Form
        Then Enter Mobile Number in SignUp Form
        Then Click on Signup Submit button
        Then Error text must present for First Name

    @focus
    Scenario: User try to signup without last name
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name in Signup Form
        Then Enter Last Name as blank in Signup Form
        Then Enter Email in Signup Form
        Then Enter Password in SignUp Form
        Then Enter Mobile Number in SignUp Form
        Then Click on Signup Submit button
        Then Error text must present for Last Name

    @focus
    Scenario: User try to signup without email
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name in Signup Form
        Then Enter Last Name in Signup Form
        Then Enter Email as blank in Signup Form
        Then Enter Password in SignUp Form
        Then Enter Mobile Number in SignUp Form
        Then Click on Signup Submit button
        Then Error text must present for Email

    @focus
    Scenario: User try to signup without password
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name in Signup Form
        Then Enter Last Name in Signup Form
        Then Enter Email in Signup Form
        Then Enter Password as blank in Signup Form
        Then Enter Mobile Number in SignUp Form
        Then Click on Signup Submit button
        Then Error text must present for Password

    @focus
    Scenario: User try to signup without mobile number
        Given I open a main page
        Then I validate redirection to the main page
        When Click on the Sign Up Button
        Then Land on Sign Up Page
        Then Enter First Name in Signup Form
        Then Enter Last Name in Signup Form
        Then Enter Email in Signup Form
        Then Enter Password in SignUp Form
        Then Enter Mobile Number as blank in Signup Form
        Then Click on Signup Submit button
        Then Error text must present for Mobile Number



   



