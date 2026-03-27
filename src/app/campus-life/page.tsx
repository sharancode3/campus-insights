'use client';
import { useEffect } from 'react';

export default function CampusLifePage() {
  useEffect(() => {
    window.location.href = '/campus-life.html';
  }, []);
  return null;
}
