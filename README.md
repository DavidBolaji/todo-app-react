# 📝 Todo App

A modern, React-based todo application built with React 19 and featuring a component-driven architecture with custom hooks and context management.

## ✨ Features

- ✅ **Task Management** - Create, read, update, and delete tasks
- 🎯 **Form Handling** - Intuitive form-based task input
- 🔄 **React Hooks** - Modern React patterns with custom hooks
- 🎨 **Component Architecture** - Modular, reusable components
- 🧪 **Comprehensive Testing** - Full test coverage with React Testing Library
- 📱 **Responsive Design** - Works seamlessly across devices

## 🚀 Technology Stack

- **Frontend Framework:** React 19.2.0
- **Language:** JavaScript
- **Build Tool:** React Scripts 5.0.1
- **Testing:** 
  - React Testing Library 16.3.0
  - Jest DOM 6.9.1
  - User Event 13.5.0
- **Performance Monitoring:** Web Vitals 2.1.4

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher recommended)
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
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
todo-app/
├── public/              # Static files and HTML template
├── src/
│   ├── components/      # Reusable React components
│   ├── context/         # React Context providers
│   ├── hooks/           # Custom React hooks
│   └── ...              # Additional source files
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Hot-reloads on file changes
- Displays lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.
- Runs all test suites
- Re-runs tests on file changes
- See the [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the app for production to the `build` folder.
- Optimizes the build for best performance
- Minifies files and includes hashes in filenames
- Your app is ready to be deployed!

See the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**⚠️ Note: This is a one-way operation. Once you `eject`, you can't go back!**

Ejects from Create React App, giving you full control over configuration files (webpack, Babel, ESLint, etc.). Only use this if you need custom configuration beyond what Create React App provides.

## 🧪 Testing

This project uses React Testing Library for component testing. Tests are located alongside their respective components.

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 🚢 Deployment

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain your production-ready application.

### Deployment Options

This app can be deployed to various platforms:

- **Vercel:** `vercel deploy`
- **Netlify:** Drag and drop the `build` folder or connect your repository
- **GitHub Pages:** Follow the [deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
- **Traditional Hosting:** Upload the contents of the `build` folder to your web server

## 🏗️ Architecture

### Components
The `src/components` directory contains all React components, following a modular architecture for reusability and maintainability.

### Context
The `src/context` directory manages global state using React Context API, enabling efficient state sharing across components.

### Custom Hooks
The `src/hooks` directory contains custom React hooks that encapsulate reusable logic and stateful behavior.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

### Code Standards

- Write clean, readable code
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Testing Library](https://testing-library.com/react)

## 💡 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://react.dev/).

---

**Built with ❤️ using React**