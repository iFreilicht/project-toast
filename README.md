# Toast exercise from joy-of-react, gutted for Parcel HMR repro

To reproduce the issue, run

```
npm install
npm run dev
```

The server will start at http://localhost:1234/.
Open that page.

Then, run

```
touch src/components/ToastProvider/ToastProvider.js
```

This will crash the page.