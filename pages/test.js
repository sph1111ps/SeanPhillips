import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  return (
    <main className="container mx-auto p-4">
      <section style={{ marginTop: 24 }}>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Example: Serverless Logging</CardTitle>
            <CardDescription>Brief summary of the project and link to full case study.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Project details here.</p>
            <Button>View</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
