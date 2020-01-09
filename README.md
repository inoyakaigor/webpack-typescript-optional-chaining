# webpack and typescript optional chaining error
This repo reproduces an "Module parse failed: Unexpected token" when using optional chaining or nullish coalescing operator with TS target "ESNext" in compiler options.

| package     | version |
|-------------|--------|
| webpack     | 4.41.5 |
| typescript  | 3.7.4  |
| ts-loader   | 6.2.1  |
| webpack-cli | 3.3.10 |

> Note: To be clear typescript is not needed to reproduce this error but in my case I using it
