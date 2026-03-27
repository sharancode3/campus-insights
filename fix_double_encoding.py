#!/usr/bin/env python3
import os

files_to_fix = ['public/admissions.html', 'public/academics.html']

# These are the UTF-8 byte sequences for the emoji when they're incorrectly encoded
# The original emojis got UTF-8 encoded, then those bytes were treated as Latin-1 and re-encoded to UTF-8
# So we need to find the double-encoded versions and replace them with proper UTF-8 emojis

replacements = {
    # Graduation cap emoji (🎓 = F0 9F 8E 93)
    # When double-encoded: C3 B0 C2 9F C2 8E C2 93
    b'\xc3\xb0\xc2\x9f\xc2\x8e\xc2\x93': '🎓',
    
    # Books emoji (📚 = F0 9F 93 9A)  
    # When double-encoded: C3 B0 C2 9F C2 93 C2 9A
    b'\xc3\xb0\xc2\x9f\xc2\x93\xc2\x9a': '📚',
    
    # Microscope emoji (🔬 = F0 9F 94 AC)
    # When double-encoded: C3 B0 C2 9F C2 94 C2 AC
    b'\xc3\xb0\xc2\x9f\xc2\x94\xc2\xac': '🔬',
    
    # Briefcase emoji (💼 = F0 9F 92 BC)
    # When double-encoded: C3 B0 C2 9F C2 92 C2 BC
    b'\xc3\xb0\xc2\x9f\xc2\x92\xc2\xbc': '💼',
    
    # Globe emoji (🌍 = F0 9F 8C 8D)
    # When double-encoded: C3 B0 C2 9F C2 8C C2 8D
    b'\xc3\xb0\xc2\x9f\xc2\x8c\xc2\x8d': '🌍',
    
    # Scroll emoji (📜 = F0 9F 93 9C)
    # When double-encoded: C3 B0 C2 9F C2 93 C2 9C
    b'\xc3\xb0\xc2\x9f\xc2\x93\xc2\x9c': '📜',
    
    # Building emoji (🏢 = F0 9F 8F A2)
    # When double-encoded: C3 B0 C2 9F C2 8F C2 A2
    b'\xc3\xb0\xc2\x9f\xc2\x8f\xc2\xa2': '🏢',
    
    # Laptop emoji (💻 = F0 9F 92 BB)
    # When double-encoded: C3 B0 C2 9F C2 92 C2 BB
    b'\xc3\xb0\xc2\x9f\xc2\x92\xc2\xbb': '💻',
    
    # Test tube emoji (🧪 = F0 9F A7 AA)
    # When double-encoded: C3 B0 C2 9F C2 A7 C2 AA
    b'\xc3\xb0\xc2\x9f\xc2\xa7\xc2\xaa': '🧪',
    
    # Robot emoji (🤖 = F0 9F A4 96)
    # When double-encoded: C3 B0 C2 9F C2 A4 C2 96
    b'\xc3\xb0\xc2\x9f\xc2\xa4\xc2\x96': '🤖',
}

for file_path in files_to_fix:
    try:
        # Read as binary
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Apply replacements
        for old_bytes, new_emoji in replacements.items():
            if old_bytes in content:
                new_bytes = new_emoji.encode('utf-8')
                content = content.replace(old_bytes, new_bytes)
                print(f"Fixed in {file_path}: replaced {len(replacements)} emojis")
        
        # Write back
        with open(file_path, 'wb') as f:
            f.write(content)
        
        print(f"Processed: {file_path}")
    except Exception as e:
        print(f"Error with {file_path}: {e}")

print("Done!")
