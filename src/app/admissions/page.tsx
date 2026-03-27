'use client';
import { useEffect } from 'react';

export default function AdmissionsPage() {
  useEffect(() => {
    window.location.href = '/admissions.html';
  }, []);
  return null;
}
