Feature: Coming Soon!

  Scenario: The one where the application is coming soon
    Given the arrived feature flag is off
    When I check the home page
    Then I see that the FizzBuzz Calculator is Coming Soon