#!/usr/bin/env node

const { exec } = require('child_process');

const port = process.argv[2] || '3000';

console.log(`Killing processes on port ${port}...`);

exec(`netstat -ano | findstr :${port}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`No processes found on port ${port}`);
    return;
  }

  const lines = stdout.split('\n');
  const pids = new Set();

  lines.forEach(line => {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 5 && parts[1].includes(`:${port}`)) {
      const pid = parts[parts.length - 1];
      if (pid && pid !== '0') {
        pids.add(pid);
      }
    }
  });

  if (pids.size === 0) {
    console.log(`No processes found on port ${port}`);
    return;
  }

  console.log(`Found ${pids.size} process(es) on port ${port}`);
  
  pids.forEach(pid => {
    exec(`taskkill /PID ${pid} /F`, (error, stdout, stderr) => {
      if (error) {
        console.log(`Failed to kill process ${pid}: ${error.message}`);
      } else {
        console.log(`Killed process ${pid}`);
      }
    });
  });
});



