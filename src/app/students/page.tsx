'use client';
import { useEffect } from 'react';

export default function StudentsPage() {
  useEffect(() => {
    window.location.href = '/students.html';
  }, []);
  return null;
}
