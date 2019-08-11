## Unit 6: Feed Reader Testing ##
**Run various tests on RSS feed reader web-based application**
Using Jasmine to execute various tests to ensure the web-based application RSS feed reader is functioning as expected.

### Steps To Run Tests ###
*Open the index.html file in your browser.
*The tests will run and the results are displayed at the bottom of the page.
*Define 4 test suites
*Define 7 tests within test suites
*Tests Run Include:
**Loop through each feed and make sure the feeds are defined and not equal to 0
**Loop through each feed with for...of loop and make sure the feed names are defined and not equal to 0 and not empty
**Loop through each feed with for...of loop and make sure the feed urls are defined and not equal to 0 and not empty
**Test the menu is hidden by default
**Test the menu toggle open/close. Test simulates menu click and checks css if menu hidden class is false, then simulate click and check menu hidden class is true.
**Test that loadFeed function loads at least one entry. This is Async using beforeEach() function.
**Test that loadFeed function changes when a new feed is loaded. This is Async using beforeEach() function.