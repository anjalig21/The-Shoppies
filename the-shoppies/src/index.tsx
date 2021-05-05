import React from "react";
import ReactDOM from "react-dom";
import "@shopify/polaris/dist/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: "Sort by",
            defaultItemSingular: "item",
            defaultItemPlural: "items",
            showing: "Showing {itemsCount} {resource}",
            Item: {
              viewItem: "View details for {itemName}",
            },
          },
          Common: {
            checkbox: "checkbox",
          },
        },
      }}
    >
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
