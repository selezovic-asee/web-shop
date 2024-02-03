# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


- napomene
- istraži stylex i probaj ga integrirati u projekt. To je novi način pisanja stilova
- imaš 3 vulnerability-a u npmu (ispravio sam ja s npm audit fix - to ti ispiše kad imaš vulnerability-e)
- ok je kako si strukturirao projekt budući da je mali
- po meni bolja ti je raspodjela root(globali), modules(business modules), core/shared (core reusable features)
- promjeni naming sa strelicama to ti da je mogućnost boljeg naming-a npr "." označava razmak za tip "-" za riječ recimo
   da imaš CartCtxProvider to je tipa ctx-provider pa možeš nazvati file cart.ctx-provider.ts
- nauči koristiti shift alt f za formatiranje fileova ili stavi u editoru opciju format on save, jer imaš loš formatting u nekoliko fileova
