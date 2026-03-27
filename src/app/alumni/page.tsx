'use client';
import { useEffect } from 'react';

export default function AlumniPage() {
  useEffect(() => {
    window.location.href = '/alumni.html';
  }, []);
  return null;
}
