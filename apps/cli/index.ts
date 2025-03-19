#!/usr/bin/env bun

import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Define version from package.json or hardcode it for now
const version = '1.0.0';

// Set up the program basics
program
  .name('mycli')
  .description('A CLI tool built with Bun and Commander')
  .version(version);

// Example command: list files in a directory
program
  .command('list')
  .description('List files in a directory')
  .argument('[directory]', 'Directory to list files from', '.')
  .option('-a, --all', 'Show hidden files')
  .option('-l, --long', 'Use long listing format')
  .action(async (directory, options) => {
    try {
      const dir = path.resolve(directory);
      const files = await fs.promises.readdir(dir);
      
      // Filter hidden files unless --all flag is used
      const filteredFiles = options.all ? files : files.filter(file => !file.startsWith('.'));
      
      if (options.long) {
        // Long format listing with file details
        console.log(`Contents of ${dir}:`);
        console.log('----------------------------------------');
        
        for (const file of filteredFiles) {
          const filePath = path.join(dir, file);
          const stats = await fs.promises.stat(filePath);
          const size = stats.size.toString().padStart(10);
          const date = stats.mtime.toISOString().split('T')[0];
          const type = stats.isDirectory() ? 'directory' : 'file';
          
          console.log(`${size} bytes  ${date}  [${type}]  ${file}`);
        }
      } else {
        // Simple listing
        console.log(`Contents of ${dir}:`);
        console.log(filteredFiles.join('\n'));
      }
    } catch (error : any) {
      console.error(`Error listing directory: ${error.message}`);
      process.exit(1);
    }
  });

// Example command: create a new project
program
  .command('create')
  .description('Create a new project')
  .argument('<name>', 'Project name')
  .option('-t, --template <template>', 'Template to use', 'default')
  .action((name, options) => {
    try {
      console.log(`Creating new project "${name}" with template "${options.template}"...`);
      
      // Create project directory
      const projectPath = path.resolve(name);
      if (fs.existsSync(projectPath)) {
        console.error(`Error: Directory "${name}" already exists`);
        process.exit(1);
      }
      
      fs.mkdirSync(projectPath);
      
      // Create basic files based on template
      if (options.template === 'default') {
        // Create package.json
        const packageJson = {
          name,
          version: '0.1.0',
          type: 'module',
          scripts: {
            start: 'bun run index.js',
            dev: 'bun --watch run index.js'
          },
          dependencies: {},
          devDependencies: {}
        };
        
        fs.writeFileSync(
          path.join(projectPath, 'package.json'),
          JSON.stringify(packageJson, null, 2)
        );
        
        // Create index.js
        fs.writeFileSync(
          path.join(projectPath, 'index.js'),
          'console.log("Hello from Bun!");\n'
        );
        
        // Create README.md
        fs.writeFileSync(
          path.join(projectPath, 'README.md'),
          `# ${name}\n\nA project created with mycli.\n`
        );
        
        console.log(`✅ Project created successfully at ${projectPath}`);
        console.log('\nNext steps:');
        console.log(`  cd ${name}`);
        console.log('  bun install');
        console.log('  bun run start');
      } else {
        console.error(`Error: Template "${options.template}" not found`);
        process.exit(1);
      }
    } catch (error : any) {
      console.error(`Error creating project: ${error.message}`);
      process.exit(1);
    }
  });

// Example command: get system info
program
  .command('system')
  .description('Display system information')
  .action(() => {
    console.log('System Information:');
    console.log('----------------------------------------');
    console.log(`Platform: ${os.platform()}`);
    console.log(`Architecture: ${os.arch()}`);
    console.log(`CPU Cores: ${os.cpus().length}`);
    console.log(`Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`);
    console.log(`Free Memory: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`);
    console.log(`Uptime: ${Math.round(os.uptime() / 3600)} hours`);
    console.log(`Bun Version: ${process.version}`);
  });

// Parse command line arguments
program.parse();

// If no arguments are provided, show help
if (process.argv.length <= 2) {
  program.help();
}