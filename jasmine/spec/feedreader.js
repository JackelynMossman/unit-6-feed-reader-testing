/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable indent */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            // test allFeeds is defined
            expect(allFeeds).toBeDefined();
            // test allFeeds length is != 0
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feed urls exist and defined', function() {
            // loop through the items in the allFeeds object
            for (const feed of allFeeds) {
                // test each item has a url defined
                expect(feed.url).toBeDefined();
                // test each item's url is not empty
                expect(feed.url).not.toBe(null);
                // test each item's url's length is != 0
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed names exist and defined', function() {
            // loop through the items in the allFeeds object
            for (const feed of allFeeds) {
                // test each item has a name defined
                expect(feed.name).toBeDefined();
                // test each item's name is not empty
                expect(feed.name).not.toBe(null);
                // test each item's name's length is != 0
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('Menu', function() {
        // declare main body variable used in each test, no code redudancies
        var mainBody = $('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu hidden by default', function() {
            // test menu-hidden class is true
            expect(mainBody.hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu click toggle open/close', function() {
            // declare menu class variable for tests
            var hamburgerMenu = $('.menu-icon-link');

            // click hamburger menu to run toggle menu open test
            hamburgerMenu.click();
            // test menu-hidden class is false because we clicked menu to open
            expect(mainBody.hasClass('menu-hidden')).toBe(false);

            // click hamburger menu to run toggle menu close test
            hamburgerMenu.click();
            // test menu-hidden class is true because we clicked menu to close
            expect(mainBody.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        // run before each function passing in done
        beforeEach(function(done) {
            // after each feed loads call done function
            loadFeed(0, function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('Feed List items exist', function(done) {
            // test the feed container length is != 0 (has at least 1 entry)
            expect($('.feed').has('.entry').length).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        // declare variables to be used in each test, reduce redudancies
        var firstFeed;

        // run before each function passing in done
        beforeEach(function(done) {
            // load feed function with 0 index (ie. first feed)
            loadFeed(0, function() {
                // assign html content of first feed to variable
                firstFeed = $('.feed').html();

                // load feed function with 1 index (ie. second feed)
                loadFeed(1, function() {
                    done();
                });
            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('new feed loaded', function(done) {
            // declare variable, assign html content of feed (now the 2nd feed)
            var nextFeed = $('.feed').html();

            // test nextFeed content is != firstFeed content
            expect(nextFeed).not.toBe(firstFeed);
            done();
        });
    });
}());
