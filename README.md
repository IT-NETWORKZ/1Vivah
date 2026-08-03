# React Admin / SuperAdmin App (Vite + Bootstrap)

## Folder Structure

```
1Vivah.com/
├── public/                      # static assets served as-is
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── global.css       # custom overrides on top of Bootstrap
│   │       └── variables.scss
│   ├── components/
│   │   └── common/               # shared reusable UI (Navbar, Sidebar, Footer, Loader, Button...)
│   ├── layouts/
│   │   ├── MainLayout.jsx        # public site layout
│   │   ├── AdminLayout.jsx       # admin panel shell (sidebar + navbar)
│   │   └── SuperAdminLayout.jsx  # superadmin panel shell
│   ├── pages/
│   │   ├── public/                # Home, Login, NotFound
│   │   ├── admin/                 # Admin-only pages
│   │   └── superadmin/            # Superadmin-only pages
│   ├── routes/
│   │   ├── AppRoutes.jsx          # central route definitions
│   │   └── ProtectedRoute.jsx     # role-based route guard
│   ├── context/
│   │   └── AuthContext.jsx        # auth state (user, login, logout)
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/                  # axios API calls, grouped by domain
│   │   ├── api.js                 # axios instance + interceptors
│   │   ├── authService.js
│   │   ├── adminService.js
│   │   └── superAdminService.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── store/                     # (optional) redux/zustand store, currently empty
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js                 # includes @ path aliases
├── package.json
├── .env                           # VITE_API_BASE_URL
└── .gitignore
```

## Setup

```bash
npm install
npm run dev
```

## Roles & Routing

- `/`            → public site (MainLayout)
- `/login`        → public login page
- `/admin/*`      → protected, requires role `admin` or `superadmin` (AdminLayout)
- `/superadmin/*` → protected, requires role `superadmin` only (SuperAdminLayout)

Role checking is handled in `src/routes/ProtectedRoute.jsx` using the `AuthContext`.
Update `src/pages/public/Login.jsx` to call the real `authService.login()` instead of
the fake user currently used as a placeholder.

## Styling

Bootstrap is imported globally in `main.jsx`:
```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/global.css'   // your overrides, loaded AFTER bootstrap
```
Add page/component-specific CSS as `.module.css` or plain `.css` files next to the component
if you want scoped styles, or extend `global.css` for shared utility classes.

## Path Aliases

Configured in `vite.config.js` — use them instead of long relative imports:
```js
import Button from '@components/common/Button/Button.jsx'
import AdminDashboard from '@pages/admin/Dashboard.jsx'
```

## Next Steps

1. `npm install`
2. Wire `authService.js` to your real backend and remove the fake login in `Login.jsx`.
3. Add real API calls in `adminService.js` / `superAdminService.js`.
4. Flesh out `components/common` with any additional shared UI (Modal, Table wrapper, etc. — folders already scaffolded).
