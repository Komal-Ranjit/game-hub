#About Project

Game Hub: Your Ultimate Gaming Companion
Welcome to Game Hub, a dynamic React application designed to be your go-to source for discovering and exploring video games. Powered by the comprehensive RAWG.io API, Game Hub offers a rich and engaging experience for gamers of all kinds.

Key Features:
Extensive Game Library:

Browse through a vast collection of games across all genres and platforms. Each game is presented with detailed information, including supported platforms, critic scores, and an engaging emoji that conveys its appeal.
Advanced Filtering Options:

Platform Filtering: Find games available on your preferred gaming systems, whether it's PC, PlayStation, Xbox, Nintendo, or more.
Relevance Filtering: Sort games by relevance to see the most pertinent results based on your interests.
Genre Filtering: Discover new titles that match your gaming preferences, from action-packed adventures to intricate role-playing games.
Detailed Game Information:

Each game card provides comprehensive details at a glance, including critic scores to help you gauge the game's quality and popularity.
Visual and intuitive emojis give you a quick sense of each game's style and mood.
User-Friendly Interface:

Experience a clean, responsive design that makes navigating through games and applying filters seamless and enjoyable.
The intuitive layout ensures you can find and access information quickly, enhancing your overall browsing experience.
Game Hub is more than just a game directory; it's a personalized tool designed to enhance your gaming life. Whether you're a casual player looking for something new or a hardcore gamer hunting for your next big challenge, Game Hub has something for everyone.

Explore Game Hub today and unlock a world of gaming possibilities at your fingertips!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
