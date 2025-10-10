const prisma = require('../lib/prisma');

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Serverless Logging',
        slug: 'serverless-logging',
        summary: 'Centralized logs with Lambda + Kinesis',
        content: 'Full writeup...'
      },
      {
        title: 'CI/CD Pipeline',
        slug: 'ci-cd-pipeline',
        summary: 'GitHub Actions -> ECR -> App Runner',
        content: 'Details...'
      }
    ],
    skipDuplicates: true
  });
  console.log('Seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());