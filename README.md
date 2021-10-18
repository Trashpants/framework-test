## Framework Test app

A super simple cart system that follows the simple rules:

Light bulbs are on a BOGOF offer

A bulk discount offer exists for anyone buying 3 or more chess sets

Notes;
This follows the general structure of the provided template. Just switched a TS template for the project instead though.

You only have to add discount rules to the ruleset - otherwise its price * count

Tests exist - I've not included any visual tests,

Along with tests normally I'd normally pick a11y selectors rather than getByText selectors

No a11y stuff has been added (no i18n obviously)

Time related issues:
While extending / replacing rules is relatively easy, each function for calculating the cost isn't really the best. In order to apply multiple discount factors you couldn't add in an extra line, you'd have to modify the same line to be calculated in a more complex way.

There should be a display of the cart contents somewhere.

Haven't added in eslint / prettier

If we we're to do this properly id expect that we'd use something like next / gatsby instead of CRA-cli
