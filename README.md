# 🖼️ React Image Search App using Pixabay API![image](https://github.com/user-attachments/assets/351ae175-e0e3-448a-b4ea-82669d1ebe14)

# imageGallery
A modern React application that allows users to search for images using the Pixabay API. Users can search images based on keywords and filter results by type — photo, illustration, or vector. 
Each image result displays detailed metadata such as tags, uploader, likes, downloads, views, and comments.

<b>ImageGallery</b> showcases the integration of various advanced features like SASS for styling, TypeScript for type safety, and the usage of the Pixabay API to fetch and display images based on the search text. This project serves as a practical example of how to combine these technologies in a modern web development workflow.

# 🚀 Features
🔍 Real-time Image Search using Pixabay API

🧭 Filter results by category: `Photo`, `Vector`, `Illustration`

🖼️ Image gallery with preview

ℹ️ View image details:

* Tags   
  -  User who uploaded
  -  Number of Likes
  -  Downloads
  -  Comments
  -  Views

📱 Responsive design (works well on mobile and desktop)

# 1. 🔍 Search Interface
Users can type their query and the image will be retireved using the pixabay API and displayed in user-friendly way
![image](https://github.com/user-attachments/assets/302ed5eb-50e1-4c99-80ea-4ba81f05c678)

# 2. 🖼️ Image Gallery
We can select any image and view its content such as, owner, size, tags.
We can also view the stats such as number of likes, downloads, comments, views etc
![image](https://github.com/user-attachments/assets/617f5d25-c116-4902-b265-e1705fff8046)


# 3. 📊 Image Details
Clicking on an image displays metadata like:
- Tags
- User name
- Likes 👍
- Downloads ⬇️
- Views 👁️
- Comments 💬

![image](https://github.com/user-attachments/assets/8162336a-b114-434e-a2c3-ebf904970928)
![image](https://github.com/user-attachments/assets/f2269c52-58c3-47ff-b723-c59498958e80)



## 4. Image Types
We can switch image type between: Image / Illustration / Vector
![image](https://github.com/user-attachments/assets/99614bf5-62fc-4499-a353-7561f78d4b31)

## Illustration
![image](https://github.com/user-attachments/assets/936a7ad3-7184-4a32-845e-55effeb895c5)

## Vector
![image](https://github.com/user-attachments/assets/6618564a-8215-44fe-aea7-5457f12bf51b)


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

3. Get Pixabay API Key
Sign up at Pixabay  
Visit your API settings to generate an API key  
Create a `.env` file in the root of the project and add your Pixabay API key:  
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
