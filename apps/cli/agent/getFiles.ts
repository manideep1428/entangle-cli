import fs from "fs";
import path from "path";

type FileMap = { [key: string]: string };

type ProjectFiles = { [parentFolder: string]: FileMap };

function getAllFiles(dir: string, ignoreList: string[], baseDir: string = dir): FileMap {
  let files: FileMap = {};
  
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (ignoreList.includes(entry)) continue;

    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      Object.assign(files, getAllFiles(fullPath, ignoreList, baseDir));
    } else {
      files[relativePath] = fs.readFileSync(fullPath, "utf-8");
    }
  }

  return files;
}

function getProjectFiles(parentDir: string): ProjectFiles {
  const entangleFile = path.join(parentDir, ".entangle");
  let ignoreList: string[] = [];

  if (fs.existsSync(entangleFile)) {
    try {
      const entangleConfig = JSON.parse(fs.readFileSync(entangleFile, "utf-8"));
      ignoreList = entangleConfig.ignore || [];
    } catch (error) {
      console.error("Error reading .entangle file:", error);
    }
  }

  const parentFolderName = path.basename(parentDir);
  const files = getAllFiles(parentDir, ignoreList);

  // Include .git if exists
  const gitDir = path.join(parentDir, ".git");
  if (fs.existsSync(gitDir) && fs.statSync(gitDir).isDirectory()) {
    files[".git"] = "Included";
  }

  const output: ProjectFiles = { [parentFolderName]: files };
  
  // Save as JSON in root directory
  fs.writeFileSync("project_files.json", JSON.stringify(output, null, 2));
  
  return output;
}

