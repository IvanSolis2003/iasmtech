-- Credenciales de prueba opcionales para las demos publicas de cada proyecto.
ALTER TABLE "Project" ADD COLUMN "testUser" TEXT;
ALTER TABLE "Project" ADD COLUMN "testPassword" TEXT;
ALTER TABLE "Project" ADD COLUMN "testRole" TEXT;
