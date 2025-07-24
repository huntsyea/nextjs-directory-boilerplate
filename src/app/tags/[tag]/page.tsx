import { getContentByTag } from '@/lib/content';
import ContentGrid from '@/components/layout/ContentGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TagPage({ params }: { params: { tag: string } }) {
  const content = getContentByTag(params.tag);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 space-y-4">
        <Button asChild variant="outline">
          <Link href="/">← Back to Home</Link>
        </Button>
        <h1 className="text-3xl font-bold font-heading">
          {`Content tagged with "${params.tag}"`}
        </h1>
      </div>
      <ContentGrid items={content} />
    </div>
  );
}