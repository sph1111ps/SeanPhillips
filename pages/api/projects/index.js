const prisma = require('../../../lib/prisma');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({ 
        orderBy: { createdAt: 'desc' } 
      });
      res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, slug, summary, content } = req.body;
      const project = await prisma.project.create({ 
        data: { title, slug, summary, content } 
      });
      res.status(201).json(project);
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ error: 'Failed to create project' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}