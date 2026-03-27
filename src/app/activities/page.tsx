'use client';
import { useEffect } from 'react';

export default function ActivitiesPage() {
  useEffect(() => {
    window.location.href = '/activities.html';
  }, []);
  return null;
}
