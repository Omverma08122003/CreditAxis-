# CreditAxis (Final) - Deployment + Local Dev ZIP

This ZIP contains a minimal, cleaned, deployment-ready scaffold for the CreditAxis project.
It supports both:
 - Local development (use backend/.env.local)
 - Deployment to Render (set environment variables in Render service)

Structure:
- backend/  -> Spring Boot app (Maven) with Dockerfile
- frontend/ -> React (Vite) app with Dockerfile

Quick local run (backend):
1. Install Java 17, Maven.
2. cd backend
3. mvn -DskipTests package
4. java -jar target/*.jar

Quick local run (frontend):
1. Install Node 18+ and npm
2. cd frontend
3. npm install
4. npm run dev

Deploy notes (Render):
- Import this repo into Render and use render.yaml (or create two web services: backend using backend/Dockerfile, frontend using frontend/Dockerfile)
- Set environment variables for backend:
  SPRING_DATASOURCE_URL
  SPRING_DATASOURCE_USERNAME
  SPRING_DATASOURCE_PASSWORD
  PORT (Render provides a port)

Set Vercel / Frontend env:
  VITE_API_BASE = https://<backend-url>

