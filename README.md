# imageGallery
ImageGallery is a React application that showcases the integration of various advanced features like SASS for styling, TypeScript for type safety, and the usage of the Pexels API to fetch and display random images. This project serves as a practical example of how to combine these technologies in a modern web development workflow.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **SASS**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Pexels API**: Integration to fetch random images, or search images based on search-keywords.

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

3. Create a `.env` file in the root of the project and add your Pexels API key:
   ```plaintext
   REACT_APP_PEXELS_API_KEY=your_pexels_api_key
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
│   ├── logo.png
│   └── ...
├── src/
│   ├── assets/
│       ├── sass
│       ├── css
│   ├── components/
│   │   ├── ImageCard.tsx
│   │   ├── ImageList.tsx
│   │   └── ...
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
- [Pexels API](https://www.pexels.com/api/)

## Contact

For any inquiries or feedback, please reach out at [ashikthulungrai7@example.com](mailto:ashikthulungrai7@example.com).

Enjoy building with ImageGallery!
