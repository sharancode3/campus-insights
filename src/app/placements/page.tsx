'use client';
import { useEffect } from 'react';

export default function PlacementsPage() {
  useEffect(() => {
    window.location.href = '/placements.html';
  }, []);
  return null;
}
