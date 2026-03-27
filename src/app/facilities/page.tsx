'use client';
import { useEffect } from 'react';

export default function FacilitiesPage() {
  useEffect(() => {
    window.location.href = '/facilities.html';
  }, []);
  return null;
}
