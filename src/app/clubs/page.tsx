'use client';
import { useEffect } from 'react';

export default function ClubsPage() {
  useEffect(() => {
    window.location.href = '/clubs.html';
  }, []);
  return null;
}
