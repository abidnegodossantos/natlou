# Executar como Administrador: clique direito > "Executar com PowerShell" (como admin)
# ou: PowerShell (Admin) > cd "D:\Usuario\Maravilha\Desktop\Site Natlou" > .\scripts\abrir-firewall.ps1

# 1. Verificar privilégios de Administrador
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "ERRO: Este script precisa ser executado como Administrador!" -ForegroundColor Red
    Write-Host "Por favor, abra o PowerShell como Administrador e execute novamente o script." -ForegroundColor Yellow
    Exit
}

$ruleName = "Site Natlou Dev (porta 3000)"
$existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue

if ($existing) {
    Set-NetFirewallRule -DisplayName $ruleName -Enabled True -Action Allow
    Write-Host "Regra de firewall atualizada com sucesso." -ForegroundColor Green
} else {
    New-NetFirewallRule `
        -DisplayName $ruleName `
        -Direction Inbound `
        -LocalPort 3000 `
        -Protocol TCP `
        -Action Allow `
        -Profile Any
    Write-Host "Regra de firewall criada com sucesso." -ForegroundColor Green
}

# 2. Obter IP local de forma robusta (Wi-Fi, Ethernet ou qualquer outro adaptador ativo)
$ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { 
    $_.IPAddress -notlike "127.*" -and 
    $_.IPAddress -notlike "169.254.*" -and
    $_.InterfaceAlias -notlike "*Loopback*"
}

# Tenta encontrar primeiro Wi-Fi, depois Ethernet, ou pega o primeiro disponível
$wifiIp = $ips | Where-Object { $_.InterfaceAlias -like "*Wi-Fi*" -or $_.InterfaceAlias -like "*Wireless*" -or $_.InterfaceAlias -like "*Sem Fio*" } | Select-Object -First 1
$ethernetIp = $ips | Where-Object { $_.InterfaceAlias -like "*Ethernet*" -or $_.InterfaceAlias -like "*Cabo*" } | Select-Object -First 1

$ip = $null
if ($wifiIp) {
    $ip = $wifiIp.IPAddress
} elseif ($ethernetIp) {
    $ip = $ethernetIp.IPAddress
} elseif ($ips) {
    $ip = ($ips | Select-Object -First 1).IPAddress
}

Write-Host ""
if ($ip) {
    Write-Host "Firewall configurado. Aceda a partir de outros dispositivos em:" -ForegroundColor Cyan
    Write-Host "  http://${ip}:3000" -ForegroundColor Yellow
} else {
    Write-Host "Firewall configurado, mas não foi possível detetar um endereço IP de rede ativo." -ForegroundColor Red
    Write-Host "Por favor, verifique se o computador está ligado ao Wi-Fi ou a um cabo de rede." -ForegroundColor Yellow
}
Write-Host ""
Write-Host "Requisitos:" -ForegroundColor Gray
Write-Host "  - npm run dev a correr neste PC (configurado com --hostname 0.0.0.0)" -ForegroundColor Gray
Write-Host "  - Dispositivos na mesma rede local / Wi-Fi" -ForegroundColor Gray
Write-Host "  - NAO usar http://0.0.0.0:3000 (esse endereço não funciona noutros aparelhos)" -ForegroundColor Gray
