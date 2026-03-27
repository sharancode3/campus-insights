# Fix double-encoded emoji characters using byte manipulation
$files = @('public/admissions.html', 'public/academics.html')

# Double-encoded emoji byte sequences to fix
$replacements = @{
    # [byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8e, 0xc2, 0x93) = "🎓"
    "🎓" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8e, 0xc2, 0x93))
    "📚" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x93, 0xc2, 0x9a))
    "🔬" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x94, 0xc2, 0xac))
    "💼" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x92, 0xc2, 0xbc))
    "🌍" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8c, 0xc2, 0x8d))
    "📜" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x93, 0xc2, 0x9c))
    "🏢" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8f, 0xc2, 0xa2))
    "💻" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x92, 0xc2, 0xbb))
    "🧪" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0xa7, 0xc2, 0xaa))
    "🤖" = ([byte[]](0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0xa4, 0xc2, 0x96))
}

foreach ($file in $files) {
    Write-Host "Processing: $file"
    
    # Read file as bytes
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $modified = $false
    
    # Replace each emoji
    foreach ($emoji in $replacements.Keys) {
        $oldBytes = $replacements[$emoji]
        $newBytes = [System.Text.Encoding]::UTF8.GetBytes($emoji)
        
        # Find and replace
        $index = 0
        while ($index -lt ($bytes.Length - $oldBytes.Length)) {
            $match = $true
            for ($i = 0; $i -lt $oldBytes.Length; $i++) {
                if ($bytes[$index + $i] -ne $oldBytes[$i]) {
                    $match = $false
                    break
                }
            }
            
            if ($match) {
                # Replace bytes
                $newArray = New-Object byte[] ($bytes.Length - $oldBytes.Length + $newBytes.Length)
                [Array]::Copy($bytes, 0, $newArray, 0, $index)
                [Array]::Copy($newBytes, 0, $newArray, $index, $newBytes.Length)
                [Array]::Copy($bytes, $index + $oldBytes.Length, $newArray, $index + $newBytes.Length, $bytes.Length - $index - $oldBytes.Length)
                $bytes = $newArray
                $modified = $true
                Write-Host "  Fixed emoji: $emoji"
            }
            else {
                $index++
            }
        }
    }
    
    if ($modified) {
        [System.IO.File]::WriteAllBytes($file, $bytes)
        Write-Host "  Saved: $file"
    }
    else {
        Write-Host "  No changes needed"
    }
}

Write-Host "Done!"
