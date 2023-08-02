Feature: Product Feature

    @focus
    Scenario: User Clicks on the product and lands on Product Discription Page
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
        Then User can click on the product and land on product details page

    @focus
    Scenario: User can add product to cart
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
        Then User can click on the product and land on product details page

    @focus
    Scenario: User can order product from cart
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
        Then User can click on the product and land on product details page
        Then User Click on Add Product Button
        Then User clicks on Go To Cart button
        Then User clicks on Place Order Button
        Then Enter Address in the address field
        Then Click on Order Place button
        Then Click the Order Status button