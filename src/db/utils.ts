import { platform, homedir } from 'os';
import path from 'path';
import fs from 'fs';
import { name } from '../../package.json'

export const databasePath = () => {
  const homeDir = homedir();
  let dbPath;

  if (platform() === 'win32') {
    dbPath = path.join(homeDir, 'AppData', 'Roaming', name, `${name}.sqlite`);
  } else if (platform() === 'darwin') {
    dbPath = path.join(homeDir, 'Library', 'Application Support', name, `${name}.sqlite`);
  } else {
    dbPath = path.join(homeDir, '.local', 'share', name, `${name}.sqlite`);
  }

  // Ensure the directory exists
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return dbPath;
}

export default databasePath
