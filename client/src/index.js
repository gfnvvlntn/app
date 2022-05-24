import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import Root from "./root";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Root />
  </Suspense>
);
