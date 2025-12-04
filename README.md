# 📝 Todo App

A modern, interactive todo application built with React 19, featuring a clean interface for managing your daily tasks efficiently.

## ✨ Features

- ✅ **Task Management** - Create, read, update, and delete todos
- 🎯 **React Hooks** - Leverages modern React patterns for state management
- 📝 **Form Handling** - Intuitive form interface for task creation
- 🧪 **Comprehensive Testing** - Full test coverage with React Testing Library
- 🎨 **Component-Based Architecture** - Modular and reusable components
- 🔄 **Context API** - Efficient state management across components
- 📱 **Responsive Design** - Works seamlessly across devices

## 🚀 Technology Stack

### Core Technologies
- **React** `19.2.0` - UI library
- **React DOM** `19.2.0` - DOM rendering
- **JavaScript** - Primary language

### Development & Testing
- **React Scripts** `5.0.1` - Build tooling
- **React Testing Library** `16.3.0` - Component testing
- **Jest DOM** `6.9.1` - DOM testing utilities
- **User Event** `13.5.0` - User interaction simulation
- **Web Vitals** `2.1.4` - Performance metrics

## 📁 Project Structure

```
todo-app/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── context/         # Context providers
│   ├── hooks/           # Custom React hooks
│   └── ...             # Additional source files
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

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
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Hot-reloads when you make changes
- Displays lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.
- Runs all test suites
- Re-runs tests on file changes
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the app for production to the `build` folder.
- Optimizes the build for best performance
- Minifies code and includes hashes in filenames
- Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**⚠️ Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you need full control over the build configuration, you can `eject` at any time. This command will:
- Remove the single build dependency
- Copy all configuration files into your project
- Give you full control over webpack, Babel, ESLint, etc.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments.

## 🧪 Running Tests

This project uses React Testing Library for comprehensive component testing.

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in CI mode
CI=true npm test
```

## 🚢 Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

The build folder can be deployed to various hosting platforms:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `build` folder contents to your web server

For detailed deployment instructions, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## 🏗️ Architecture

### Components
Reusable UI components located in `src/components/`

### Context
Application-wide state management using React Context API in `src/context/`

### Custom Hooks
Reusable logic and side effects in `src/hooks/`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Coding Standards

- Write meaningful commit messages
- Add tests for new features
- Ensure all tests pass before submitting PR
- Follow existing code style and conventions
- Update documentation as needed

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Hooks](https://react.dev/reference/react)

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🐛 Issues

Found a bug or have a suggestion? Please [open an issue](../../issues) on GitHub.

---

**Built with ❤️ using React**