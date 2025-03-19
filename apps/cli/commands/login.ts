import axios from "axios";
import open from "open"; // npm install open
import fs from "fs";
import os from "os";
import path from "path";

const API_BASE_URL = "https://your-app.com"; // Your Next.js backend URL
const TOKEN_PATH = path.join(os.homedir(), ".entangle_token");

export async function login() {
  const sessionId = Math.random().toString(36).substring(2, 15); // Generate unique session ID
  const loginUrl = `${API_BASE_URL}/sign-in?session_id=${sessionId}`;

  console.log("Opening browser for authentication...");
  open(loginUrl); // Open Clerk sign-in page

  // Poll for authentication token
  let token = null;
  while (!token) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds before polling again
    try {
      const response = await axios.get(`${API_BASE_URL}/api/check-auth`, {
        params: { session_id: sessionId },
      });
      token = response.data.token;
    } catch (error :any) {
      if (error.response?.status !== 404) {
        console.error("Error checking authentication:", error.message);
        return;
      }
    }
  }

  console.log("Authentication successful! Token:", token);
  fs.writeFileSync(TOKEN_PATH, token);
  console.log("Token saved successfully!");
}

login();
