import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ThemeProvider } from "@material-tailwind/react";
import "./i18n";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PrimeReactProvider } from "primereact/api";


createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <ThemeProvider> */}
        <App />
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  </PrimeReactProvider>
);
