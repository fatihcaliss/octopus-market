# Octopus-Market

This serves as an illustrative model of a commercial website. Please note that the information presented on this site is generated from mock data provided by https://dummyjson.com/docs/products.

## :point_right: [Click here to see on browser](https://octopus-market.vercel.app/)

![Project Presentation](https://github.com/fatihcaliss/octopus-market/blob/master/public/octopusMarketGIF.gif?raw=true)

## About the Project

- This project was developed using Next.js 14.0.1 in conjunction with the app router system and TypeScript for robust development. The styling of the application was achieved using the Tailwind UI, ensuring a visually appealing and user-friendly interface.

- Authentication in this web application is implemented using next-auth in combination with credentials, offering a secure login experience for users. You can use any user's credentials from [dummyjson.com/user](https://dummyjson.com/users). Also you can use placeholder data which is on login page:

```
username: 'kminchelle',
password: '0lelplR',
```

- The pages /products and /products/:id are protected, and you can only access them if you are logged in.

- All data utilized within the project is sourced from the https://dummyjson.com/docs API, which provides mock data to populate the website's content.

- The /products (store) page offers users the ability to filter products in two different ways: by selecting a category, entering a word for quick search. To optimize performance, title and range filters leverage a debounce function, located in the util folder, eliminating the need for larger libraries like Lodash.

- For efficient data management and state handling, the project relies on the tanstack query library for all network requests.

- To enhance the overall user experience and user interface (UI/UX) of the application, the "react-toastify" package has been incorporated.

All data is fetched from the [https://dummyjson.com/](https://dummyjson.com/docs) API.

## Used Packages

The following packages are used in the project:

- **@tanstack/react-query**: "^5.22.2"
- **axios**: "^1.6.7",
- **next**: "14.1.0",
- **next-auth**: "^4.24.6",
- **react**: "^18",
- **react-dom**: "^18",
- **react-hook-form**: "^7.50.1",
- **react-image-gallery**: "^1.3.0",
- **react-toastify**: "^10.0.4"

## Installation

You can install the project packages by running the following command:

- `https://github.com/fatihcaliss/octopus-market.git` – clone repository to your local
- `cd calis-store` – go to calis-store folder
- `npm i` – install all packages
- `npm run dev` – start project in your local
