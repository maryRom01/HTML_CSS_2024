# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
npx create-vite@latest react-app-1 --template react

cd react-app-1
npm install
npm run dev

http://localhost:5173/
```

```
npm run build
npm run preview

http://localhost:4173/
```

У React (і Vite) порти 5173 і 4173 використовуються для різних середовищ розробки та збірки:

5173 – Це стандартний порт для Vite у режимі розробки (npm run dev).

Використовується для гарячого перезавантаження (Hot Module Replacement, HMR).

Може змінюватися, якщо порт зайнятий (Vite вибере інший).

Якщо хочеш вказати свій порт, зміни vite.config.js:

```
export default defineConfig({
  server: {
    port: 3000, // Тепер буде запускатися на 3000
  },
});
```

4173 – Це стандартний порт для локального перегляду збірки (npm run preview).

Після npm run build, коли запущено npm run preview, твій проєкт доступний на http://localhost:4173/.

Він використовується, щоб подивитися готову production-версію перед деплоєм.

Резюме
5173 → Режим розробки (npm run dev)

4173 → Перегляд зібраної версії (npm run preview)

Якщо потрібен інший порт, можна налаштувати його у vite.config.js. 🚀