export async function register() {
  console.log("\n========================================");
  console.log("Environment Variables at Startup:");
  console.log("========================================");

  // List of expected environment variables
  const envVars = [
    "DATABASE_URL",
    "ANTHROPIC_API_KEY",
    "NEXT_PUBLIC_APP_NAME",
    "NODE_ENV",
    "PORT",
  ];

  for (const key of envVars) {
    const value = process.env[key];
    if (value) {
      // Mask sensitive values (show first 10 chars + ...)
      const isSensitive = key.includes("KEY") || key.includes("SECRET") || key.includes("PASSWORD") || key.includes("DATABASE_URL");
      const displayValue = isSensitive && value.length > 10
        ? `${value.substring(0, 10)}...`
        : value;
      console.log(`  ${key}: ${displayValue}`);
    } else {
      console.log(`  ${key}: (not set)`);
    }
  }

  console.log("========================================\n");
}
