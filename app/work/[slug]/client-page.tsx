'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TOCItem {
  level: number;
  title: string;
  id: string;
}

interface ProjectClientPageProps {
  project: {
    title: string;
    company: string;
    year: string;
    description: string;
    metrics?: string;
    tags?: string[];
    slug: string;
  };
  tableOfContents: TOCItem[];
  htmlContent: string;
}

export default function ProjectClientPage() { return null; }