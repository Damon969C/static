const categories = {
    debian: {
        name: "Debian 配置",
        categories: [
            { id: "debian-all", name: "工具" },
            { id: "debian-changyong", name: "常用命令" },
            { id: "debian-python", name: "Python" },
            { id: "debian-docker", name: "Docker" },
            { id: "debian-wg", name: "WireGuard" },
            { id: "debian-acme", name: "ACME申请域名证书" },
            { id: "debian-compose", name: "Docker Compose" },
            { id: "debian-mountdisk", name: "硬盘挂载" },
            //{ id: "debian-network", name: "网络命令" },
            //{ id: "network", name: "网络命令" },
            //{ id: "network", name: "网络命令" },
            { id: "debian-keadhcp", name: "Kea DHCP Server" },
            { id: "debian-nftables", name: "Nftables防火墙" },
            { id: "debian-adguard", name: "AdGuardHome安装" },
            { id: "debian-ssh", name: "SSH" },
            //{ id: "network", name: "网络命令" },
            { id: "debian-screen", name: "Screen" },
            { id: "debian-tmux", name: "Tmux" },
            //{ id: "network", name: "网络命令" },
            //{ id: "network", name: "网络命令" },
            //{ id: "network", name: "网络命令" },
            //{ id: "debian-docker", name: "#Docker 命令" },
            { id: "debian-tar", name: "tar 命令" },
            { id: "debian-tee", name: "tee 命令" },
            { id: "debian-find", name: "find 命令" }
            //{ id: "debian-database", name: "数据库命令" }
        ]
    },
    pve: {
        name: "PVE 配置",
        categories: [
            { id: "pve-all", name: "杂项" },
            { id: "pve-importdisk", name: "导入磁盘镜像" },
            { id: "pve-changyong", name: "初始配置" },
            { id: "pve-diskrdm", name: "磁盘RDM直通" },
            { id: "pve-zfs", name: "ZFS" },
            //{ id: "importdisk", name: "导入磁盘镜像" },
            //{ id: "importdisk", name: "导入磁盘镜像" },
            //{ id: "importdisk", name: "导入磁盘镜像" },
            //{ id: "importdisk", name: "导入磁盘镜像" },
            //{ id: "importdisk", name: "导入磁盘镜像" }
        ]
    },
    openwrt: {
        name: "OpenWrt 配置",
        categories: [
            //{ id: "network", name: "网络管理" },
            { id: "op-dhcp", name: "DHCP与DNS" }
        ]
    },
    windows: {
        name: "Windows 配置",
        categories: [
            { id: "win-net", name: "网络命令" },
            { id: "win-ffmpeg", name: "FFmpeg" },
            { id: "win-adb", name: "ADB命令" },
            { id: "win-2022", name: "MD5/WIN2022激活" },
            //{ id: "powershell", name: "Powershell" },
            //{ id: "powershell", name: "Powershell" },
            //{ id: "powershell", name: "Powershell" },
            //{ id: "powershell", name: "Powershell" },
            //{ id: "powershell", name: "Powershell" },
            //{ id: "network", name: "Network" }
        ]
    }
};
