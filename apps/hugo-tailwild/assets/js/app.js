// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
"use strict";

// Prefetch in-viewport links during idle time
import { listen } from "quicklink/dist/quicklink.mjs";
listen();

import "@pwabuilder/pwaupdate/dist/pwa-update.js";

const el = document.createElement("pwa-update");
document.body.appendChild(el);
