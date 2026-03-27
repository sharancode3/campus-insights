'use client';
import { useEffect } from 'react';

export default function ResearchPage() {
  useEffect(() => {
    window.location.href = '/research.html';
  }, []);
  return null;
}
