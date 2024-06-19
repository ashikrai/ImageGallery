# imageGallery
<b>ImageGallery</b> is a React application that showcases the integration of various advanced features like SASS for styling, TypeScript for type safety, and the usage of the Pixabay API to fetch and display images based on the search text. This project serves as a practical example of how to combine these technologies in a modern web development workflow.

# Screen Demo
We can select any image and view its content such as, owner, size, tags.
We can also view the stats such as number of likes, downloads, comments, views etc
![image](https://github.com/ashikrai/ImageGallery/assets/41672214/28c8eb3c-f59c-40cc-ba05-a0b4fcc8c320)

## Image
We can switch image type between: Image / Illustration / Vector
![image](https://github.com/ashikrai/ImageGallery/assets/41672214/8b9a3673-f232-491a-8ce2-db46d602802c)

## Illustration
![image](https://github.com/ashikrai/ImageGallery/assets/41672214/da1d3f6b-c0c1-4bb0-ab0d-f002063da163)

## Vector
![image](https://github.com/ashikrai/ImageGallery/assets/41672214/6d8264fb-f83f-492f-8606-eff5fa64e98c)


## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **SASS**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Pixabay API**: Integration to fetch random images, or search images based on search-keywords.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/imageGallery.git
   cd imageGallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add your Pixabay API key:
   ```plaintext
   VITE_REACT_APP_PIXABAY_API_KEY=your_pixabay_api_key
   ```

## Usage

1. Run the development server:
   ```bash
   npm run dev
   ```

   This will start the application and you can view it in your browser at `http://localhost:5173`.

2. Build the application for production:
   ```bash
   npm run build
   ```

   This will create an optimized production build in the `build` folder.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.

## Folder Structure

```
imageGallery/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│       ├── css   (Auto generated CSS)
│       ├── images (img resources e.g: logo)
│       ├── interfaces (interface definition for Typescript)
│       ├── sass  (SASS styling)
│   ├── Components/
│   │   ├── HeaderComponent.tsx
│   │   ├── ImageCard.tsx
│   │   └── ...
│   ├── Utils/
│   │   ├── APIHelper.tsx   (For Apis)
│   │   ├── constant.tsx    (For Constant)
│   │   ├── ImageSearchSlice.tsx (For Redux)
│   │   ├── store.tsx      (For Redux)
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── ...
├── .env
├── package.json
├── tsconfig.json
└── ...
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Pixabay API](https://pixabay.com/api/docs/)

## Contact

For any inquiries or feedback, please reach out at [ashikthulungrai7@gmail.com](mailto:ashikthulungrai7@gmail.com).

Enjoy building with ImageGallery!
