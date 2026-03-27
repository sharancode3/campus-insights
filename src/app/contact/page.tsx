'use client';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.location.href = '/contact.html';
  }, []);
  return null;
}
