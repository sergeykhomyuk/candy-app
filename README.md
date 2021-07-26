# Candy App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Run `yarn install` to install node_modules.

Run `yarn start` to start dev-server OR run `yarn build` + `serve -s ./build` (or any other static server) to start production build.

## Notes
### Architecture
Application is divided into the following libs (`./src/libs/`):
- `collection` - feature library for displaying images.
- `core` - shareable core library for utils, configs and types.
- `design-system` - shareable components/styles library for visual elements.
- `layout` - ui library for the application layout.

### Collection
#### Sub-modules:
- `core` - models, business-logic.
- `data-access` - API, store.
- `shell` - entry point with container.
- `ui` - dummy ui components.

#### Notes:
- API is missing flags indicating if the current user liked/commented on an item.
- Links to owner avatars (`ownerImage`) are broken (403 error), so as a work-around I replaced them with random avatars from randomuser.me (check `src/libs/collection/data-access/map-collection-item.ts`).
- Store is currently implemented using `useReducer`, but could be easily replaced with `redux` (or any other global state management library), once the state would need to become global.
- Masonry grid is implemented using `masonic`. `react-window` doesn't work in a strict-mode as it relies on deprecated `findDOMNode` react api. `react-virtualized` doesn't support masonry layout. Need to perform extensive performance testing for `masonic` library and if bottle-necks are revealed - consider extracting image size on the back-end side and implementing custom virtualized masonry grid.
### Design-System
#### Notes:
- Consider replacing px with rem (font-sizes, spaces) - that would ease UI scaling.
- I tried to extract spacings from figma prototype, but they are inconsistent, so I used the following steps: 4, 8, 12, 16, 24, 32 and use them instead of hard-coded values.
- Consider applying shadow to the top menu when scrolled.
- Consider adding placeholders to avatars and images while they are loading.


## Task 1
### Estimation:
- Application shell - 1h
- Grid
  - Virtualized grid with various height - 3h (main risk)
  - Card - 1h
- Filtration - 1h
- Tests - 1h (for demo only)

Total: 7h

### Actual:
- Application shell - 1h
- Grid
  - Virtualized grid with various height - 4h
  - Card - 1h
- Filtration - 1h
- Tests - Not implemented.

Total: 7h

## Task 2
> What technologies would you use to build the application?
- Core: React
- Grid virtualization: masonic
- Tools: CRA, TypeScript, ESlint, Prettier, Jest, Cypress

> What requirements would you have for selecting this technology?
- Requirements for performance and supported platforms (Mobile devices / SSR).
- Team member's competencies with selected technologies.
- Control over 3rd party dependencies (keep the number of dependencies reasonably low to maintain the balance between control and speed of development).
- Ability to scale if needed.

> What consideration would you take building the application?
- List of supported browsers, devices, screen resolutions -> Assume that only ever-green browsers are supported, only desktops are supported (but with multiple breakpoints). In real-world app need to make research on the target audience.
- Amount of data -> Assume that pagination is not required, filtering will be performed on the UI side. In real-world app need to introduce server-side filtering and pagination.
- Supported locales/languages -> Assume that only 1 locale/language is supported.  In real-world app need to introduce i18n.
- Accessibility -> Assume that a11y is not required. In real-world app need to support a11y.
- Animations -> Assume that animations are not required. In real-world app need to introduce re-flow and loading animations.
- Design System / Colour Palette / Storybook -> Assume that the design system will be introduced later.
- Authentication and Authorization -> Assume that  Authentication and Authorization are not required to access data.
- Errors handling -> Assume that errors handling/logging will be added later.
- Unit and e2e tests -> Assume that the full tests coverage would be provided later.
- CI -> Assume that CI will be implemented later (pre-commit hooks for prettier and linter, unit / e2e tests execution for PR's, tests coverage validation, package.json scanning).
- Caching and compression -> Assume that static content caching and compression policies will be defined later.
- Feature toggles -> Assume that feature toggles will be added later.
- Budgets -> Assume that budgets for bundles sizes, performance, and memory consumption will be defined later.
- Architecture -> Provide simple modular architecture.
- Securing -> Assume that content security requirements (CSP, Subresource Integrity) will be added later.
- Application versioning -> Assume that application version checker will be added later (service that would check if a new version is available every X minutes).
- Metrics collection -> Assume that metrics collection will be implemented later.
- GDPR / Copyrights -> Assume that no GDPR data is collected, cookies are not used for user tracking.


