param(
    [string]$RemoteUser = $env:DEPLOY_USER,
    [string]$RemoteHost = $env:DEPLOY_HOST,
    [string]$RemotePath = $env:DEPLOY_PATH,
    [string]$KeyPath = $env:DEPLOY_KEY
)

if (-not $RemoteUser -or -not $RemoteHost -or -not $RemotePath) {
    Write-Host "Usage: npm run deploy -- <user> <host> <remotePath> [keyPath]  OR set environment variables DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH and optionally DEPLOY_KEY"
    Write-Host "Example: npm run deploy -- meteh@1.2.3.4 /var/www/site C:\\Users\\you\\.ssh\\id_rsa"
    exit 1
}

$buildDir = Join-Path -Path (Get-Location) -ChildPath 'build'
if (-not (Test-Path $buildDir)) {
    Write-Host "Build directory '$buildDir' not found. Run 'npm run build' first or make sure build succeeded." -ForegroundColor Red
    exit 1
}

# Prefer scp (from OpenSSH). On modern Windows scp is available if OpenSSH client is installed.
$scp = Get-Command scp -ErrorAction SilentlyContinue
if ($scp) {
    Write-Host "Uploading $buildDir to ${RemoteUser}@${RemoteHost}:${RemotePath} using scp..."
    # Use -r to copy directory contents. Support optional key file via -i
    $keyOption = $null
    if ($KeyPath) {
        if (-not (Test-Path $KeyPath)) {
            Write-Host "Provided key path '$KeyPath' not found." -ForegroundColor Red
            exit 1
        }
        $keyOption = @("-i", "$KeyPath")
        Write-Host "Using key: $KeyPath"
    }
    try {
        if ($keyOption) {
            & scp @keyOption -r "$buildDir/*" "${RemoteUser}:${RemotePath}"
        } else {
            scp -r "$buildDir/*" "${RemoteUser}:${RemotePath}"
        }
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Upload completed successfully." -ForegroundColor Green
            exit 0
        } else {
            Write-Host "scp exited with code $LASTEXITCODE" -ForegroundColor Yellow
            exit $LASTEXITCODE
        }
    } catch {
        Write-Host "scp failed: $_" -ForegroundColor Red
        exit 1
    }
} else {
    # Fall back to zip
    Write-Host "scp not found on PATH. Creating zip archive instead..."
    $zipPath = Join-Path -Path $env:TEMP -ChildPath "site_build.zip"
    if (Test-Path $zipPath) { Remove-Item $zipPath }
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::CreateFromDirectory($buildDir, $zipPath)
    Write-Host "Created archive: $zipPath"
    Write-Host "Upload this file to your server (e.g. with WinSCP or SFTP), then unzip to the web root:"
    Write-Host "  unzip site_build.zip -d $RemotePath"
    exit 0
}
