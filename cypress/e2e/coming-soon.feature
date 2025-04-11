Feature: Coming Soon!

  Scenario: The one where the application is coming soon
    Given the leap year calculator feature flag is off
    When I check the home page
    Then I see that the Leap Year Calculator is Coming Soon

  Scenario: The one where the year is a Typical Usual Year
    Given the leap year calculator feature flag is on
    When I check the home page
    And I enter the year 2003
    Then the year is not a leap year
