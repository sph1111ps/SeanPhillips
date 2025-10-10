const prisma = require('../../../lib/prisma');

export default async function handler(req, res) {
  const { slug } = req.query;
  
  if (req.method === 'GET') {
    try {
      const project = await prisma.project.findUnique({ where: { slug } });
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      return res.status(200).json(project);
    } catch (error) {
      console.error('Error fetching project:', error);
      return res.status(500).json({ error: 'Failed to fetch project' });
    }
  }
  
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}