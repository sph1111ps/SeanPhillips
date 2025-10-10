#!/usr/bin/env node

const { exec } = require('child_process');

const ports = ['3000', '3001', '3002', '3003'];

console.log('🧹 Cleaning up development ports...\n');

let cleanedCount = 0;
let checkedCount = 0;

ports.forEach(port => {
  exec(`netstat -ano | findstr :${port}`, (error, stdout, stderr) => {
    checkedCount++;
    
    if (error) {
      console.log(`✅ Port ${port}: Clean`);
    } else {
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

      if (pids.size > 0) {
        console.log(`🧹 Port ${port}: Found ${pids.size} process(es)`);
        
        pids.forEach(pid => {
          exec(`taskkill /PID ${pid} /F`, (error, stdout, stderr) => {
            if (error) {
              console.log(`❌ Failed to kill process ${pid} on port ${port}`);
            } else {
              console.log(`✅ Killed process ${pid} on port ${port}`);
              cleanedCount++;
            }
          });
        });
      } else {
        console.log(`✅ Port ${port}: Clean`);
      }
    }

    if (checkedCount === ports.length) {
      console.log(`\n🎉 Cleanup complete! Cleaned ${cleanedCount} processes.`);
      console.log('💡 You can now run: npm run dev');
    }
  });
});



