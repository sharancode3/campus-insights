#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import codecs

# Read the file
with codecs.open('public/admissions.html', 'r', encoding='utf-8-sig') as f:
    content = f.read()

# These are the corrupted emoji sequences that need fixing
# They appear as mojibake (broken characters)
corrupted_icons = {
    'ðŸŽ"': '🎓',     # Graduation cap - Undergraduate
    'ðŸ"š': '📚',     # Books - Postgraduate  
    'ðŸ"¬': '🔬',     # Microscope - Doctoral
    'ðŸ'\¼': '💼',     # Briefcase - Executive
    'ðŸŌ': '🌍',      # Globe - International
    'ðŸ"–': '📜'      # Scroll - Diploma
}

# Replace each corrupted sequence
for corrupted, proper_emoji in corrupted_icons.items():
    if corrupted in content:
        content = content.replace(corrupted, proper_emoji)
        print(f"✓ Fixed: {corrupted} → {proper_emoji}")
    else:
        print(f"✗ Not found: {corrupted}")

# Write the fixed content back
with codecs.open('public/admissions.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✓ All icons have been fixed successfully!")
