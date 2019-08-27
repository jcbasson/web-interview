# NOTES
## Setup

1. Navigate to data folder in the root directory, run yarn, then run yarn start
2. Navigate to server folder in the root directory, run yarn, then run yarn start
3. Navigate to the root directory, run yarn, then run yarn start
4. Wait for the site to open in your browser

## How long did it take?

- 24 hours roughly

## Appproach

- Using the data and UI image I drew out the components to be created separated by business domain.
- After analyzing the component requirements I came up with graphql contracts then setup my graphql server first.
- Followed an outer inner approach with my components creating the outer most components hooked up to graphql queries first.
- Did not follow a TDD approach with my components because have never wrote tests for apollo based components using react-testing-library but some tests do exist to show more or less how I would do it.
- Did follow TDD for any functions surrounding business logic.
- Was not sure how to handle dates on different days in terms of the UI so I just settled on a basic format to display all available times.
- The UI is mobile first with no real adaption for desktop.

## Next steps

- Create a BookingStatus component to notify the user of the progress, success or error in booking their appointment.
- Find a more concrete way to handle errors in booking appointments using graphql mutations and redux.
- More tests around around components
- Come up with desktop UI design.
- Find a better way to display available times especially for different days.
- More evolved types and stricter typing.

## General Feedback

- Just maybe a desktop design and a more explicit design for displaying available times for different days.