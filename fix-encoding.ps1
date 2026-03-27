# Fix double-encoded UTF-8 characters in HTML files
$files = @('public/admissions.html', 'public/academics.html')

foreach ($file in $files) {
    try {
        # Read as Latin-1 (ISO-8859-1) then re-encode as UTF-8 to fix double encoding
        $content = Get-Content $file -Raw -Encoding UTF8
        $fixed = [System.Text.Encoding]::UTF8.GetString([System.Text.Encoding]::GetEncoding('iso-8859-1').GetBytes($content))
        Set-Content $file -Value $fixed -Encoding UTF8
        Write-Host "Fixed: $file"
    }
    catch {
        Write-Host "Error fixing $file : $_"
    }
}

Write-Host "All files have been processed!"
