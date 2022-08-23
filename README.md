## Setup:

- Download or clone the project
- This app was built with yarn
- Set `REACT_APP_OPEN_WEATHER_MAP_API_KEY` on `.env` file, you can get a new one on [this link](https://home.openweathermap.org/api_keys).
- Open
- Execute yarn install command `yarn`

## Running locally:

```bash
yarn start
```

The app is running on http://localhost:1234

## Running on docker:

Currently we have a production docker, if you want to run it:

```bash
docker build -t ui-app .
docker run -p 8080:80 ui-app
```

The app is running on http://localhost:8080

## Folder structure:

- src
  - components: Stateless/shared components
  - containers: Heavy logic components
  - hooks: shared hooks
  - queries: [react-query](https://tanstack.com/query/v4/) queries
  - services: external services
  - tests: extra utils/mock data
  - utis: helpers functions
- bootstrap.tsx: Component with app providers to start the app
- consts.ts: Main consts used on app
- globalStyle.ts: global theme applied to styled-components

## Tech choices:

- React: Since I don't have a deep knowledge on NextJS, I decided to use React.
- TypeScript: TypeScript was added to bring more type safety to the app, reducing bugs and increasing speed after initial effort.
- Parcel: Since I was doing a code challenge, I decided to use Parcel for it simplicity to start a project.
- React-query: Once the app doesn't require a complex state management, and mostly is data fetching, React-query is a perfect solution for this scope.
- use-persisted-state: One of the main goals of this app is to keep the state of the app in the browser, so I added use-persisted-state to help on have that synced in diff tabs and saved on localstorage.
- styled-components: Easy to setup, easy to maintain themes, dynamic class names and more.

## Next Steps:

- Support i18n
- Support multiple themes
- Improve layout 😅 (add icons, animations, other informations)
- Increase acessibility
- Forecast temperature: Forecast dates get the first hour match, which tends to be always cooler than the rest of the day, maybe in a next version get the forecast of the closer hour that user is seeing.
