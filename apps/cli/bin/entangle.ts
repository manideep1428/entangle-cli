#!/usr/bin/env bun

import { $ } from "bun";
import fs from "fs";
import path from "path";
import open from "open";
import  { login } from "../commands/login";
import d from "../commands/do";

const TOKEN_PATH = path.join(process.env.HOME || process.env.USERPROFILE || ".", ".entangle_token");

async function main() {
    const command = process.argv[2];

    switch (command) {
        case "login":
            await login();
            break;
        case "run":
            await d();
            break;
        case "logout":
            // await logout();
            break;
        default:
            console.log("❌ Unknown command. Use `entangle login`, `entangle run`, or `entangle logout`.");
    }
}

main();
