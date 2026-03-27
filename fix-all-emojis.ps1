# Fix double-encoded emoji characters using byte manipulation
# Using Unicode escape sequences instead of direct emojis

$files = @('public/admissions.html', 'public/academics.html')

# Mapping of broken byte sequences to correct emojis
$replacements = @(
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8e, 0xc2, 0x93); emoji = "u1F393" }, # Graduation cap
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x93, 0xc2, 0x9a); emoji = "u1F4DA" }, # Books
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x94, 0xc2, 0xac); emoji = "u1F52C" }, # Microscope
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x92, 0xc2, 0xbc); emoji = "u1F4BC" }, # Briefcase
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8c, 0xc2, 0x8d); emoji = "u1F30D" }, # Globe
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x93, 0xc2, 0x9c); emoji = "u1F4DC" }, # Scroll
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x8f, 0xc2, 0xa2); emoji = "u1F3E2" }, # Building
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0x92, 0xc2, 0xbb); emoji = "u1F4BB" }, # Laptop
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0xa7, 0xc2, 0xaa); emoji = "u1F9EA" }, # Test tube
    @{ old = @(0xc3, 0xb0, 0xc2, 0x9f, 0xc2, 0xa4, 0xc2, 0x96); emoji = "u1F916" }  # Robot
)

foreach ($file in $files) {
    Write-Host "Processing: $file"
    
    try {
        # Read file
        $content = Get-Content -Path $file -Raw -Encoding UTF8
        $changed = $false
        
        foreach ($item in $replacements) {
            # Create string from broken bytes (interpreted as Latin-1 then UTF-8)
            $oldStr = [System.Text.Encoding]::GetEncoding('iso-8859-1').GetString($item.old)
            $newEmoji = [char]::ConvertFromUtf32([Convert]::ToInt32($item.emoji.Substring(1), 16))
            
            if ($content -contains $oldStr) {
                $content = $content -replace [regex]::Escape($oldStr), $newEmoji
                $changed = $true
                Write-Host "  Fixed emoji"
            }
        }
        
        if ($changed) {
            Set-Content -Path $file -Value $content -Encoding UTF8
            Write-Host "  Saved: $file"
        }
        else {
            Write-Host "  No changes needed"
        }
    }
    catch {
        Write-Host "  Error: $_"
    }
}

Write-Host "Done!"
