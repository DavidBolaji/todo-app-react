# 📝 Todo App

A modern, feature-rich todo application built with React 19, featuring custom hooks, context API for state management, and comprehensive testing coverage.

## ✨ Features

- ✅ Create, read, update, and delete todos
- 🎯 Custom React hooks for enhanced functionality
- 🔄 Context API for global state management
- 📱 Responsive design
- 🧪 Comprehensive test coverage with React Testing Library
- ⚡ Built with the latest React 19

## 🚀 Technology Stack

- **Framework**: React 19.2.0
- **Language**: JavaScript
- **Build Tool**: React Scripts 5.0.1
- **Testing**: 
  - React Testing Library 16.3.0
  - Jest DOM 6.9.1
  - User Event Testing 13.5.0
- **Performance Monitoring**: Web Vitals 2.1.4

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🏗️ Project Structure

```
todo-app/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   ├── context/         # Context API providers and consumers
│   ├── hooks/           # Custom React hooks
│   └── ...
├── package.json         # Project dependencies and scripts
└── README.md
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🧪 Testing

This project uses React Testing Library for component testing. Tests are located alongside their respective components.

Run tests with:
```bash
npm test
```

For coverage report:
```bash
npm test -- --coverage --watchAll=false
```

## 🏛️ Architecture

### Components
Reusable UI components are organized in the `src/components` directory, following React best practices for component composition.

### Context API
Global state management is handled through React Context, with providers located in `src/context`. This ensures efficient state sharing across components without prop drilling.

### Custom Hooks
The `src/hooks` directory contains custom React hooks that encapsulate reusable logic and stateful behavior, promoting code reusability and cleaner components.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build folder will contain optimized production-ready files.

### Deployment Options

This app can be deployed to various platforms:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `build` folder to Netlify
- **GitHub Pages**: See [deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
- **Firebase**: Follow [Firebase hosting guide](https://create-react-app.dev/docs/deployment/#firebase)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
- [React Testing Library](https://testing-library.com/react)

## 👥 Support

If you have any questions or run into issues, please open an issue in the repository.

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).