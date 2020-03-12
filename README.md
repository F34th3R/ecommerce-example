# Ecommerce Example!!

## Scripts ⌨

### Backend 🖥

```bash
# install dependencies
$ npm run ibackend

# run server!
$ npm run server
```

### Frontend 💻

```bash
# install dependencies
$ npm ifrontend

# run client side
$ npm run client
```

## File structure 🌲
```bash
.
├── backend
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── src
│       ├── config
│       │   ├── dev.js
│       │   ├── key.js
│       │   └── prod.js
│       ├── database
│       │   └── connection.js
│       ├── helpers
│       │   ├── generateUUID.js       
│       │   ├── hashPassword.js       
│       │   └── passwordCompareSync.js
│       ├── index.js
│       ├── routes       
│       │   └── route.js 
│       └── server       
│           └── app.js   
├── frontend
│   ├── LICENSE
│   ├── package.json     
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico  
│   │   ├── index.html   
│   │   ├── logo192.png  
│   │   ├── logo512.png  
│   │   ├── manifest.json
│   │   └── robots.txt   
│   ├── README.md
│   ├── src
│   │   ├── assets
│   │   │   └── img
│   │   │       └── logo.svg
│   │   ├── index.js
│   │   ├── pages
│   │   │   └── App.js
│   │   ├── serviceWorker.js
│   │   ├── setupTests.js
│   │   ├── styles
│   │   │   └── GlobalStyle.js
│   │   └── test
│   │       └── App.test.js
│   └── yarn.lock
├── LICENSE
└── README.md
```
