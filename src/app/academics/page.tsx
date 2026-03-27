'use client';
import { useEffect } from 'react';

export default function AcademicsPage() {
  useEffect(() => {
    window.location.href = '/academics.html';
  }, []);
  return null;
}
