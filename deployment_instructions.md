# Deployment instructions (short)

1. Push this repo to GitHub.
2. On Render:
   - Create a managed Postgres or use your existing DB.
   - Create a Web Service for backend:
     - Root: backend
     - Use Dockerfile or Maven build
     - Add env vars: SPRING_DATASOURCE_URL, SPRING_DATASOURCE_USERNAME, SPRING_DATASOURCE_PASSWORD, PORT=10000
   - Create a Static Site or Web Service for frontend:
     - Root: frontend
     - Build command: npm run build
     - Publish directory: dist
     - Set env var: VITE_API_BASE to your backend URL
3. Deploy and watch logs.

If you hit errors, copy the first red error block from Render logs and paste back for diagnosis.
