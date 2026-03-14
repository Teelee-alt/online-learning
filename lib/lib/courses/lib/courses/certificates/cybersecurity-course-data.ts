// Cybersecurity Certificate Course Data
export const cybersecurityCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "cybersecurity-certificate",
  title: "Cybersecurity (Certificate)",
  description: "Fundamental training in cybersecurity principles, threats, and defenses. Learn essential skills to protect digital assets, detect security threats, and implement basic security measures for individuals and organizations.",
  duration: "8 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🔒",
  badge: "Certificate",
  prerequisites: [],
  category: "Information Technology",
  difficulty: "Beginner",
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Modules
  modules: [
    // MODULE 1: Introduction to Cybersecurity
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      content: `# Introduction to Cybersecurity

## What is Cybersecurity?
Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, damage, or unauthorized access. It involves implementing measures to ensure confidentiality, integrity, and availability of information.

## Basic History and Evolution
- **1960s-1970s**: Early computer security focused on physical security and simple passwords
- **1980s**: First computer viruses, Morris Worm (1988) - first major internet attack
- **1990s**: Rise of commercial internet, firewall technology, antivirus software
- **2000s**: Sophisticated attacks, organized cybercrime, government involvement
- **2010s-Present**: Advanced persistent threats, ransomware, IoT vulnerabilities, AI in security

## Why Cybersecurity Matters
1. **Protection of Data**: Personal information, financial data, intellectual property
2. **Business Continuity**: Preventing disruptions to operations and services
3. **Financial Protection**: Avoiding financial losses from theft, fraud, or downtime
4. **Reputation Protection**: Maintaining trust with customers and partners
5. **Legal Compliance**: Meeting regulatory requirements for data protection

## Core Principles of Cybersecurity (CIA Triad)
1. **Confidentiality**: Ensuring information is accessible only to authorized individuals
   - Methods: Encryption, access controls, authentication
   - Example: Patient medical records only accessible to healthcare providers

2. **Integrity**: Maintaining accuracy and completeness of data
   - Methods: Hashing, digital signatures, checksums
   - Example: Ensuring financial transaction amounts aren't altered

3. **Availability**: Ensuring information and systems are accessible when needed
   - Methods: Redundancy, backups, disaster recovery
   - Example: Online banking available 24/7

## Types of Cyber Threats
**Malware (Malicious Software)**
- **Viruses**: Self-replicating code that attaches to legitimate programs
- **Worms**: Self-replicating malware that spreads through networks
- **Trojans**: Malware disguised as legitimate software
- **Ransomware**: Encrypts files and demands payment for decryption
- **Spyware**: Secretly monitors user activity

**Social Engineering Attacks**
- **Phishing**: Fake emails/messages tricking users into revealing information
- **Spear Phishing**: Targeted phishing against specific individuals/organizations
- **Whaling**: Phishing targeting high-level executives
- **Vishing**: Voice phishing through phone calls
- **Smishing**: SMS/text message phishing

**Network Attacks**
- **Denial of Service (DoS)**: Overwhelming a system to make it unavailable
- **Distributed Denial of Service (DDoS)**: DoS from multiple systems
- **Man-in-the-Middle (MitM)**: Intercepting communication between two parties
- **SQL Injection**: Injecting malicious code into database queries
- **Cross-Site Scripting (XSS)**: Injecting malicious scripts into web pages

**Other Common Threats**
- **Zero-day exploits**: Attacks on vulnerabilities before patches are available
- **Insider threats**: Malicious actions by employees or contractors
- **Advanced Persistent Threats (APTs)**: Long-term targeted attacks
- **IoT attacks**: Compromising Internet of Things devices

## Cybersecurity Statistics (2023-2024)
- **Average cost of data breach**: $4.45 million (global average)
- **Most common attack vector**: Compromised credentials (19% of breaches)
- **Average time to identify breach**: 204 days
- **Average time to contain breach**: 73 days
- **Ransomware attacks**: Occur every 11 seconds
- **Phishing attempts**: 3.4 billion malicious emails daily
- **Unfilled cybersecurity jobs**: 3.5 million globally

## Basic Security Concepts
**Defense in Depth**
- Multiple layers of security controls
- If one layer fails, others provide protection
- Examples: Firewalls + antivirus + user training + encryption

**Least Privilege Principle**
- Users and systems have minimum access necessary
- Reduces potential damage from compromised accounts
- Example: Regular employees don't have admin rights

**Separation of Duties**
- Critical tasks divided among multiple people
- Prevents single person from having too much control
- Example: Different people approve and process payments

**Need-to-Know Basis**
- Information access only when necessary for job
- Limits exposure of sensitive information
- Example: HR staff don't access financial systems

## Cybersecurity Roles and Careers
**Entry-Level Positions**
- **Security Analyst**: Monitors security systems, analyzes threats
- **Security Administrator**: Manages security tools and systems
- **Incident Responder**: Handles security incidents and breaches
- **Vulnerability Assessor**: Identifies and reports security weaknesses

**Required Skills**
- Basic networking knowledge
- Operating system fundamentals
- Understanding of security tools
- Problem-solving abilities
- Attention to detail
- Communication skills

**Certification Pathways**
- CompTIA Security+ (entry-level standard)
- Certified Ethical Hacker (CEH)
- Cisco CCNA Security
- GIAC Security Essentials (GSEC)

## Security Frameworks and Standards
**Common Frameworks**
- **NIST Cybersecurity Framework**: US government framework (Identify, Protect, Detect, Respond, Recover)
- **ISO 27001**: International standard for information security management
- **CIS Controls**: Center for Internet Security critical security controls
- **PCI DSS**: Payment Card Industry Data Security Standard

**Basic Compliance Requirements**
- **GDPR**: General Data Protection Regulation (EU data protection)
- **HIPAA**: Health Insurance Portability and Accountability Act (US healthcare)
- **SOX**: Sarbanes-Oxley Act (US financial reporting)
- **FERPA**: Family Educational Rights and Privacy Act (US education)

## Getting Started in Cybersecurity
**Basic Security Practices for Everyone**
1. Use strong, unique passwords for each account
2. Enable two-factor authentication (2FA)
3. Keep software and systems updated
4. Be cautious with email attachments and links
5. Regular data backups
6. Use antivirus/anti-malware software
7. Secure home Wi-Fi networks

**Learning Resources**
- Online courses and tutorials
- Capture The Flag (CTF) competitions
- Security blogs and podcasts
- Virtual labs and practice environments
- Professional organizations and forums

**Building a Home Lab**
- Virtual machines for safe experimentation
- Network simulation tools
- Security tools (Wireshark, Nmap, Metasploit)
- Practice vulnerable systems (DVWA, Metasploitable)

## Key Terms to Know
- **Vulnerability**: Weakness that can be exploited
- **Exploit**: Code or technique that takes advantage of vulnerability
- **Threat**: Potential danger that might exploit vulnerability
- **Risk**: Likelihood of threat exploiting vulnerability
- **Attack**: Actual attempt to compromise security
- **Breach**: Successful compromise of security
- **Patch**: Software update fixing vulnerabilities
- **Firewall**: Network security device monitoring traffic
- **Encryption**: Converting data to unreadable format without key
- **Authentication**: Verifying identity of user/system
- **Authorization**: Determining access rights
- **VPN**: Virtual Private Network for secure connections`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three components of the CIA triad in cybersecurity?",
          options: ["Confidentiality, Integrity, Availability", "Confidence, Information, Access", "Control, Inspection, Authorization", "Cyber, Internet, Access"],
          correctAnswer: 0,
          explanation: "The CIA triad consists of Confidentiality (privacy), Integrity (accuracy), and Availability (accessibility)."
        },
        {
          id: 2,
          question: "What is the average global cost of a data breach according to 2023 statistics?",
          options: ["$1.2 million", "$4.45 million", "$8.7 million", "$12.5 million"],
          correctAnswer: 1,
          explanation: "The average global cost of a data breach in 2023 was $4.45 million according to IBM's annual report."
        },
        {
          id: 3,
          question: "What type of malware encrypts files and demands payment for decryption?",
          options: ["Virus", "Worm", "Trojan", "Ransomware"],
          correctAnswer: 3,
          explanation: "Ransomware encrypts files and demands payment (ransom) for the decryption key."
        },
        {
          id: 4,
          question: "What does DDoS stand for?",
          options: ["Direct Denial of Service", "Distributed Denial of Service", "Digital Denial of System", "Data Denial of Service"],
          correctAnswer: 1,
          explanation: "DDoS stands for Distributed Denial of Service - an attack from multiple systems to overwhelm a target."
        },
        {
          id: 5,
          question: "What is the principle of least privilege?",
          options: ["Users have all privileges", "Users have minimum access necessary", "Only administrators have privileges", "Privileges based on seniority"],
          correctAnswer: 1,
          explanation: "Least privilege means users and systems have only the minimum access necessary to perform their functions."
        },
        {
          id: 6,
          question: "How often do ransomware attacks occur according to recent statistics?",
          options: ["Every hour", "Every 11 seconds", "Every minute", "Every day"],
          correctAnswer: 1,
          explanation: "Recent statistics show ransomware attacks occur approximately every 11 seconds globally."
        },
        {
          id: 7,
          question: "What does APT stand for in cybersecurity?",
          options: ["Advanced Persistent Threat", "Automated Protection Technology", "Advanced Protection Tool", "Automated Persistent Threat"],
          correctAnswer: 0,
          explanation: "APT stands for Advanced Persistent Threat - sophisticated, long-term targeted attacks."
        },
        {
          id: 8,
          question: "What is spear phishing?",
          options: ["General spam emails", "Targeted phishing against specific individuals/organizations", "Phone-based phishing", "Social media phishing"],
          correctAnswer: 1,
          explanation: "Spear phishing is highly targeted phishing directed at specific individuals or organizations."
        },
        {
          id: 9,
          question: "What does NIST stand for in cybersecurity frameworks?",
          options: ["National Institute of Standards and Technology", "Network Information Security Technology", "National Internet Security Team", "Network Infrastructure Security Tools"],
          correctAnswer: 0,
          explanation: "NIST stands for National Institute of Standards and Technology, which publishes the Cybersecurity Framework."
        },
        {
          id: 10,
          question: "What is the average time to identify a data breach?",
          options: ["30 days", "90 days", "204 days", "365 days"],
          correctAnswer: 2,
          explanation: "The average time to identify a data breach in 2023 was 204 days according to industry reports."
        },
        {
          id: 11,
          question: "What type of attack involves intercepting communication between two parties?",
          options: ["Phishing", "DDoS", "Man-in-the-Middle", "SQL Injection"],
          correctAnswer: 2,
          explanation: "Man-in-the-Middle attacks intercept and potentially alter communication between two parties."
        },
        {
          id: 12,
          question: "What is defense in depth?",
          options: ["One strong security measure", "Multiple layers of security controls", "Deep packet inspection", "Advanced firewall configuration"],
          correctAnswer: 1,
          explanation: "Defense in depth uses multiple layers of security controls so if one fails, others provide protection."
        },
        {
          id: 13,
          question: "What does GDPR stand for?",
          options: ["General Data Protection Regulation", "Global Data Privacy Rules", "Government Data Protection Requirements", "General Digital Privacy Rights"],
          correctAnswer: 0,
          explanation: "GDPR stands for General Data Protection Regulation, the EU's data protection law."
        },
        {
          id: 14,
          question: "What is a zero-day exploit?",
          options: ["Attack on day zero of system deployment", "Attack on vulnerabilities before patches are available", "Attack that takes zero days to execute", "Exploit with zero detection rate"],
          correctAnswer: 1,
          explanation: "Zero-day exploits target vulnerabilities that are unknown to the vendor or for which no patch exists."
        },
        {
          id: 15,
          question: "What does 2FA stand for?",
          options: ["Two-Factor Authentication", "Two-File Access", "Two-Function Authorization", "Two-Factor Access"],
          correctAnswer: 0,
          explanation: "2FA stands for Two-Factor Authentication - using two different authentication factors for verification."
        },
        {
          id: 16,
          question: "What is the most common attack vector according to recent statistics?",
          options: ["Malware", "Phishing", "Compromised credentials", "Social engineering"],
          correctAnswer: 2,
          explanation: "Compromised credentials (stolen or weak passwords) are the most common attack vector, involved in 19% of breaches."
        },
        {
          id: 17,
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Verified Private Network", "Virtual Protected Network", "Verified Protected Network"],
          correctAnswer: 0,
          explanation: "VPN stands for Virtual Private Network - creates a secure, encrypted connection over a public network."
        },
        {
          id: 18,
          question: "What is the difference between authentication and authorization?",
          options: ["Authentication verifies identity, authorization determines access", "Both mean the same thing", "Authorization verifies identity, authentication determines access", "Authentication is for users, authorization is for systems"],
          correctAnswer: 0,
          explanation: "Authentication verifies who you are, while authorization determines what you're allowed to access."
        },
        {
          id: 19,
          question: "What does XSS stand for?",
          options: ["Cross-Site Scripting", "Extra Security System", "Extended Security Service", "Cross-System Security"],
          correctAnswer: 0,
          explanation: "XSS stands for Cross-Site Scripting - injecting malicious scripts into web pages viewed by users."
        },
        {
          id: 20,
          question: "How many unfilled cybersecurity jobs exist globally?",
          options: ["500,000", "1.2 million", "2.8 million", "3.5 million"],
          correctAnswer: 3,
          explanation: "There are approximately 3.5 million unfilled cybersecurity jobs globally according to industry reports."
        }
      ]
    },

    // MODULE 2: Network Security Fundamentals
    {
      id: 2,
      title: "Network Security Fundamentals",
      content: `# Network Security Fundamentals

## Basic Network Concepts
**Network Components**
- **Nodes**: Devices on a network (computers, servers, routers, switches)
- **Links**: Connections between nodes (cables, wireless signals)
- **Protocols**: Rules for communication (TCP/IP, HTTP, FTP)
- **Topologies**: Network layout (star, bus, ring, mesh)

**OSI Model Layers**
1. **Physical**: Cables, connectors, signals
2. **Data Link**: MAC addresses, switches, frames
3. **Network**: IP addresses, routers, packets
4. **Transport**: TCP/UDP, ports, segments
5. **Session**: Connection management
6. **Presentation**: Data formatting, encryption
7. **Application**: User applications, HTTP, FTP, SMTP

**TCP/IP Model**
- **Application Layer**: HTTP, FTP, SMTP, DNS
- **Transport Layer**: TCP (reliable), UDP (fast)
- **Internet Layer**: IP, ICMP, ARP
- **Network Access Layer**: Ethernet, Wi-Fi

## IP Addressing and Subnetting
**IPv4 Addressing**
- **Format**: Four octets (0-255), e.g., 192.168.1.1
- **Classes**: 
  - Class A: 1.0.0.0 to 126.255.255.255 (Large networks)
  - Class B: 128.0.0.0 to 191.255.255.255 (Medium networks)
  - Class C: 192.0.0.0 to 223.255.255.255 (Small networks)
  - Class D: 224.0.0.0 to 239.255.255.255 (Multicast)
  - Class E: 240.0.0.0 to 255.255.255.255 (Experimental)
- **Private IP Ranges**:
  - 10.0.0.0 to 10.255.255.255
  - 172.16.0.0 to 172.31.255.255
  - 192.168.0.0 to 192.168.255.255

**IPv6 Addressing**
- **Format**: Eight groups of four hexadecimal digits, e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- **Advantages**: Larger address space, better security, auto-configuration
- **Types**: Unicast, Multicast, Anycast

**Subnetting Basics**
- **Subnet Mask**: Determines network portion of IP address
- **CIDR Notation**: IP/prefix length, e.g., 192.168.1.0/24
- **Purpose**: Divide networks for security and management
- **Benefits**: Reduce broadcast traffic, improve security, efficient addressing

## Network Devices and Security
**Routers**
- **Function**: Connect different networks, route traffic
- **Security Features**: Access control lists (ACLs), firewall capabilities
- **Vulnerabilities**: Default passwords, unpatched firmware, misconfiguration
- **Best Practices**: Change default credentials, disable unused services, regular updates

**Switches**
- **Function**: Connect devices within same network, forward frames
- **Types**: Unmanaged (basic), Managed (configurable), Layer 3 (routing)
- **Security Features**: Port security, VLANs, MAC address filtering
- **Threats**: MAC flooding, ARP poisoning, switch spoofing

**Firewalls**
- **Types**:
  - **Packet Filtering**: Examines packet headers (IP, port)
  - **Stateful Inspection**: Tracks connection state
  - **Proxy Firewalls**: Acts as intermediary
  - **Next-Generation Firewalls (NGFW)**: Deep packet inspection, application awareness
- **Deployment**: Network perimeter, between network segments, host-based
- **Rules**: Allow/deny based on source, destination, port, protocol

**Wireless Security**
- **Encryption Protocols**:
  - **WEP**: Weak, easily cracked (avoid)
  - **WPA**: Improved but vulnerable
  - **WPA2**: Current standard (AES encryption)
  - **WPA3**: Latest standard (stronger encryption)
- **Security Measures**: 
  - Change default SSID and passwords
  - Enable network encryption
  - Use strong passwords (12+ characters)
  - Disable WPS (Wi-Fi Protected Setup)
  - Implement MAC address filtering
  - Regular firmware updates

## Network Protocols and Security
**TCP/IP Security**
- **TCP**: Connection-oriented, reliable, three-way handshake
- **UDP**: Connectionless, faster, no error checking
- **Common Ports**:
  - 20/21: FTP (File Transfer Protocol)
  - 22: SSH (Secure Shell)
  - 23: Telnet (insecure, avoid)
  - 25: SMTP (Simple Mail Transfer Protocol)
  - 53: DNS (Domain Name System)
  - 80: HTTP (Hypertext Transfer Protocol)
  - 443: HTTPS (HTTP Secure)
  - 3389: RDP (Remote Desktop Protocol)

**DNS Security**
- **Function**: Translates domain names to IP addresses
- **Threats**: DNS poisoning, DNS amplification attacks
- **Protections**: DNSSEC (DNS Security Extensions), DNS filtering

**DHCP Security**
- **Function**: Automatically assigns IP addresses
- **Threats**: Rogue DHCP servers, DHCP starvation
- **Protections**: DHCP snooping, port security

## Network Attacks and Defenses
**Common Network Attacks**
- **ARP Poisoning**: Redirecting traffic by falsifying ARP responses
- **MAC Flooding**: Overwhelming switch MAC table to cause fail-open
- **VLAN Hopping**: Escaping VLAN segmentation
- **DNS Spoofing**: Redirecting DNS queries to malicious sites
- **Session Hijacking**: Taking over established sessions
- **Port Scanning**: Discovering open ports and services

**Network Defense Strategies**
1. **Network Segmentation**: Divide network into smaller segments
   - Benefits: Limit attack spread, contain breaches
   - Methods: VLANs, subnetting, physical separation

2. **Access Control**: Restrict network access
   - Methods: Network access control (NAC), 802.1X authentication
   - Implementation: Port security, MAC filtering

3. **Monitoring and Detection**: Identify suspicious activity
   - Tools: IDS/IPS, network traffic analyzers, SIEM systems
   - Techniques: Anomaly detection, signature-based detection

4. **Encryption**: Protect data in transit
   - Protocols: SSL/TLS, IPsec, VPNs
   - Implementation: HTTPS, SSH, encrypted email

## Intrusion Detection and Prevention
**IDS vs. IPS**
- **IDS (Intrusion Detection System)**: Monitors and alerts
  - Types: Network-based (NIDS), Host-based (HIDS)
  - Detection Methods: Signature-based, Anomaly-based
- **IPS (Intrusion Prevention System)**: Monitors and blocks
  - Active response to threats
  - Can block malicious traffic automatically

**Deployment Considerations**
- **Network Placement**: Strategic points in network architecture
- **Tuning**: Adjust sensitivity to reduce false positives
- **Maintenance**: Regular signature updates, rule tuning
- **Limitations**: Encrypted traffic, evasion techniques

**SIEM (Security Information and Event Management)**
- **Function**: Collect, analyze, correlate security events
- **Benefits**: Centralized monitoring, threat detection, compliance reporting
- **Components**: Log collection, normalization, correlation, alerting
- **Popular Tools**: Splunk, IBM QRadar, ArcSight, AlienVault

## Virtual Private Networks (VPNs)
**VPN Types**
- **Site-to-Site VPN**: Connects entire networks
- **Remote Access VPN**: Connects individual users to network
- **SSL VPN**: Web-based VPN using SSL/TLS
- **IPsec VPN**: Network layer encryption

**VPN Protocols**
- **PPTP**: Old, weak encryption (avoid)
- **L2TP/IPsec**: Moderate security
- **OpenVPN**: Open source, strong security
- **WireGuard**: Modern, fast, secure
- **IKEv2**: Good for mobile devices

**VPN Security Considerations**
- Encryption strength
- Authentication methods
- Logging policies
- Kill switch feature
- DNS leak protection

## Network Hardening
**Basic Hardening Steps**
1. **Change Defaults**: Credentials, settings, configurations
2. **Disable Unnecessary Services**: Reduce attack surface
3. **Apply Updates**: Firmware, software, security patches
4. **Implement Strong Authentication**: Multi-factor, complex passwords
5. **Configure Firewalls**: Allow only necessary traffic
6. **Enable Logging**: Monitor for suspicious activity
7. **Regular Backups**: Quick recovery from incidents

**Specific Device Hardening**
- **Routers**: Disable remote management, enable logging, configure ACLs
- **Switches**: Enable port security, disable unused ports, implement VLANs
- **Wireless**: Use WPA2/WPA3, disable SSID broadcast, use enterprise authentication
- **Servers**: Harden operating systems, install security software, regular updates

## Network Monitoring Tools
**Basic Monitoring Tools**
- **Wireshark**: Packet analyzer for network troubleshooting
- **Nmap**: Network scanner for discovery and security auditing
- **Netstat**: Display network connections and statistics
- **Tcpdump**: Command-line packet analyzer
- **Ping/Traceroute**: Basic connectivity testing

**Security-Specific Tools**
- **Nessus**: Vulnerability scanner
- **Snort**: Open source intrusion detection/prevention
- **Metasploit**: Penetration testing framework
- **Burp Suite**: Web application security testing
- **John the Ripper**: Password cracking tool (for authorized testing)

## Best Practices for Network Security
**For Home Networks**
1. Change default router credentials
2. Use WPA2/WPA3 encryption
3. Create guest network for visitors
4. Enable firewall on router and devices
5. Regular firmware updates
6. Disable remote management
7. Use strong Wi-Fi passwords

**For Small Businesses**
1. Segment network (separate guest, employee, server networks)
2. Implement business-grade firewall
3. Use VPN for remote access
4. Regular security audits
5. Employee security training
6. Backup critical data
7. Incident response plan

**For Everyone**
1. Use antivirus/anti-malware
2. Enable automatic updates
3. Be cautious with public Wi-Fi
4. Use VPN on public networks
5. Regular security awareness
6. Backup important data
7. Report suspicious activity`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main function of a router?",
          options: ["Connect devices within same network", "Connect different networks and route traffic", "Filter network traffic", "Assign IP addresses"],
          correctAnswer: 1,
          explanation: "Routers connect different networks and route traffic between them based on IP addresses."
        },
        {
          id: 2,
          question: "Which OSI layer handles IP addresses and routing?",
          options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
          correctAnswer: 2,
          explanation: "The Network Layer (Layer 3) handles IP addresses, routing, and logical addressing."
        },
        {
          id: 3,
          question: "What does VLAN stand for?",
          options: ["Virtual Local Area Network", "Very Large Area Network", "Virtual Logical Access Network", "Verified Local Area Network"],
          correctAnswer: 0,
          explanation: "VLAN stands for Virtual Local Area Network - logical segmentation of a physical network."
        },
        {
          id: 4,
          question: "Which port is used for HTTPS secure web traffic?",
          options: ["Port 80", "Port 443", "Port 21", "Port 25"],
          correctAnswer: 1,
          explanation: "HTTPS uses port 443 for encrypted web traffic, while HTTP uses port 80."
        },
        {
          id: 5,
          question: "What is the main difference between IDS and IPS?",
          options: ["IDS blocks attacks, IPS only detects", "IDS detects and alerts, IPS detects and blocks", "IDS is hardware, IPS is software", "No difference, they are the same"],
          correctAnswer: 1,
          explanation: "IDS (Intrusion Detection System) detects and alerts, while IPS (Intrusion Prevention System) detects and blocks attacks."
        },
        {
          id: 6,
          question: "Which wireless encryption protocol should be avoided due to weak security?",
          options: ["WPA2", "WPA3", "WEP", "AES"],
          correctAnswer: 2,
          explanation: "WEP (Wired Equivalent Privacy) has weak encryption and should be avoided due to security vulnerabilities."
        },
        {
          id: 7,
          question: "What does ARP stand for in networking?",
          options: ["Advanced Routing Protocol", "Address Resolution Protocol", "Automatic Resource Planning", "Access Route Protocol"],
          correctAnswer: 1,
          explanation: "ARP stands for Address Resolution Protocol - resolves IP addresses to MAC addresses."
        },
        {
          id: 8,
          question: "What is network segmentation?",
          options: ["Dividing network into smaller segments for security", "Segmenting data packets", "Dividing IP addresses", "Separating network cables"],
          correctAnswer: 0,
          explanation: "Network segmentation divides a network into smaller segments to limit attack spread and contain breaches."
        },
        {
          id: 9,
          question: "Which tool is used for packet analysis and network troubleshooting?",
          options: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
          correctAnswer: 1,
          explanation: "Wireshark is a packet analyzer used for network troubleshooting, analysis, and protocol development."
        },
        {
          id: 10,
          question: "What does DHCP stand for?",
          options: ["Dynamic Host Configuration Protocol", "Digital Host Connection Protocol", "Data Handling Configuration Process", "Dynamic Host Connection Protocol"],
          correctAnswer: 0,
          explanation: "DHCP stands for Dynamic Host Configuration Protocol - automatically assigns IP addresses to devices."
        },
        {
          id: 11,
          question: "Which TCP/IP layer handles application protocols like HTTP and FTP?",
          options: ["Network Layer", "Transport Layer", "Application Layer", "Internet Layer"],
          correctAnswer: 2,
          explanation: "The Application Layer in TCP/IP handles application protocols like HTTP, FTP, SMTP, and DNS."
        },
        {
          id: 12,
          question: "What is the purpose of a firewall?",
          options: ["Speed up network traffic", "Monitor and control network traffic based on security rules", "Assign IP addresses", "Connect wireless devices"],
          correctAnswer: 1,
          explanation: "Firewalls monitor and control incoming and outgoing network traffic based on predetermined security rules."
        },
        {
          id: 13,
          question: "What does SIEM stand for?",
          options: ["Security Information and Event Management", "System Integration and Event Monitoring", "Security Integration and Event Management", "System Information and Event Monitoring"],
          correctAnswer: 0,
          explanation: "SIEM stands for Security Information and Event Management - collects and analyzes security events."
        },
        {
          id: 14,
          question: "Which port is typically used for SSH secure remote access?",
          options: ["Port 22", "Port 23", "Port 25", "Port 3389"],
          correctAnswer: 0,
          explanation: "SSH (Secure Shell) uses port 22 for secure remote command-line access and file transfers."
        },
        {
          id: 15,
          question: "What is ARP poisoning?",
          options: ["Poisoning network cables", "Redirecting traffic by falsifying ARP responses", "Poisoning DNS records", "Attacking ARP protocol with malware"],
          correctAnswer: 1,
          explanation: "ARP poisoning (or spoofing) involves sending falsified ARP messages to redirect traffic to an attacker's system."
        },
        {
          id: 16,
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Verified Private Network", "Virtual Protected Network", "Verified Protected Network"],
          correctAnswer: 0,
          explanation: "VPN stands for Virtual Private Network - creates a secure, encrypted connection over a public network."
        },
        {
          id: 17,
          question: "Which tool is used for network discovery and security auditing?",
          options: ["Wireshark", "Nmap", "Metasploit", "John the Ripper"],
          correctAnswer: 1,
          explanation: "Nmap (Network Mapper) is used for network discovery, security auditing, and port scanning."
        },
        {
          id: 18,
          question: "What is the main purpose of DNS?",
          options: ["Secure network connections", "Translate domain names to IP addresses", "Filter network traffic", "Assign IP addresses"],
          correctAnswer: 1,
          explanation: "DNS (Domain Name System) translates human-readable domain names to machine-readable IP addresses."
        },
        {
          id: 19,
          question: "What does WPA3 provide over WPA2?",
          options: ["Faster speeds", "Stronger encryption and security features", "Better compatibility", "Simpler setup"],
          correctAnswer: 1,
          explanation: "WPA3 provides stronger encryption, protection against brute-force attacks, and enhanced security features compared to WPA2."
        },
        {
          id: 20,
          question: "What is network hardening?",
          options: ["Making network physically harder", "Strengthening network security through configuration and controls", "Hardening network cables", "Making network faster"],
          correctAnswer: 1,
          explanation: "Network hardening involves strengthening network security by configuring devices, applying controls, and implementing security measures."
        }
      ]
    },

    // MODULE 3: Operating System Security
    {
      id: 3,
      title: "Operating System Security",
      content: `# Operating System Security

## Introduction to OS Security
Operating systems are the foundation of computer security. They manage hardware resources, provide services to applications, and enforce security policies. Securing the OS is critical for overall system security.

## OS Security Architecture
**Security Layers in OS**
1. **Hardware Layer**: CPU security features, TPM (Trusted Platform Module)
2. **Kernel Layer**: Core OS security, memory management, process isolation
3. **System Services**: Authentication, logging, encryption services
4. **Application Layer**: Application security, user interfaces
5. **User Layer**: User accounts, permissions, policies

**Security Models**
- **Discretionary Access Control (DAC)**: Owners control access to their resources
- **Mandatory Access Control (MAC)**: System controls access based on security labels
- **Role-Based Access Control (RBAC)**: Access based on user roles
- **Rule-Based Access Control**: Access based on rules (like firewall rules)

**Trusted Computing Base (TCB)**
- All hardware, firmware, and software critical to security
- Must work correctly for security to be maintained
- Includes kernel, security functions, critical processes
- Smaller TCB = easier to secure and verify

## Windows Security
**Windows Security Architecture**
- **Security Reference Monitor**: Kernel component enforcing access validation
- **Local Security Authority (LSA)**: Manages local security policy
- **Security Account Manager (SAM)**: Database of local user accounts
- **Active Directory**: Centralized user management for domains

**Windows Security Features**
- **User Account Control (UAC)**: Prompt for administrative actions
- **BitLocker**: Full disk encryption
- **Windows Defender**: Built-in antivirus and anti-malware
- **Windows Firewall**: Built-in host-based firewall
- **AppLocker**: Application control policies
- **Credential Guard**: Protects credentials in memory

**Windows Hardening Steps**
1. **Account Management**:
   - Disable or rename default administrator account
   - Create individual user accounts
   - Implement strong password policies
   - Enable account lockout policies
   - Regular review of user accounts

2. **Service Management**:
   - Disable unnecessary services
   - Run services with least privilege
   - Regular updates and patches
   - Monitor service accounts

3. **Patch Management**:
   - Enable automatic updates
   - Regular vulnerability scanning
   - Test patches before deployment
   - Maintain patch schedule

## Linux Security
**Linux Security Architecture**
- **Kernel Security Modules**: SELinux, AppArmor, SMACK
- **PAM (Pluggable Authentication Modules)**: Flexible authentication framework
- **sudo**: Privilege escalation with logging
- **iptables/nftables**: Firewall and packet filtering

**Linux Security Features**
- **SELinux (Security-Enhanced Linux)**: Mandatory access control
- **AppArmor**: Application confinement profiles
- **Firewalld**: Dynamic firewall management
- **SELinux/AppArmor**: Mandatory access control systems
- **SSH**: Secure remote access
- **Fail2ban**: Protects against brute-force attacks

**Linux Hardening Steps**
1. **Initial Setup**:
   - Minimal installation (only needed packages)
   - Partition separation (/home, /var, /tmp)
   - Secure boot configuration
   - Remove unnecessary services

2. **Access Control**:
   - Use sudo instead of direct root login
   - Implement strong password policies
   - SSH key authentication instead of passwords
   - Configure PAM modules appropriately

3. **System Hardening**:
   - Regular updates and patches
   - Configure firewall rules
   - Enable SELinux/AppArmor
   - Remove setuid/setgid from unnecessary binaries

## macOS Security
**macOS Security Architecture**
- **Gatekeeper**: Controls application installation
- **XProtect**: Built-in malware protection
- **FileVault**: Full disk encryption
- **SIP (System Integrity Protection)**: Protects system files
- **Sandboxing**: Application isolation

**macOS Security Features**
- **Apple ID and iCloud Keychain**: Secure credential management
- **Touch ID/Face ID**: Biometric authentication
- **Find My Mac**: Device location and remote wipe
- **Privacy Controls**: App permission management
- **Firewall**: Built-in network protection

**macOS Hardening Steps**
1. **System Configuration**:
   - Enable FileVault for encryption
   - Configure firewall settings
   - Enable Gatekeeper
   - Regular software updates

2. **User Management**:
   - Use standard accounts for daily use
   - Strong passwords and Touch ID/Face ID
   - Disable automatic login
   - Screen lock with short timeout

3. **Privacy Settings**:
   - Review app permissions
   - Disable unnecessary services
   - Configure privacy settings
   - Regular security updates

## User Account Management
**Account Types**
- **Administrator/Root**: Full system access
- **Standard User**: Limited access for daily tasks
- **Service Accounts**: For running services/daemons
- **Guest Accounts**: Temporary, limited access

**Password Policies**
- **Complexity Requirements**: Minimum length, character types
- **History Requirements**: Prevent password reuse
- **Age Requirements**: Maximum/minimum password age
- **Lockout Policies**: After failed attempts
- **Best Practices**:
  - Minimum 12 characters
  - Mix of uppercase, lowercase, numbers, symbols
  - No dictionary words or personal information
  - Unique passwords for different systems

**Multi-Factor Authentication (MFA)**
- **Factors**: Something you know (password), have (token), are (biometric)
- **Types**: SMS codes, authenticator apps, hardware tokens, biometrics
- **Implementation**: For all administrative accounts, remote access, sensitive systems
- **Benefits**: Significantly reduces account compromise risk

## File System Security
**Permissions and Ownership**
- **Windows**: NTFS permissions (Full Control, Modify, Read & Execute, Read, Write)
- **Linux/macOS**: Unix permissions (read, write, execute for owner, group, others)
- **Best Practices**:
  - Least privilege principle
  - Regular permission reviews
  - Separate system and data partitions
  - Encrypt sensitive data

**Encryption Options**
- **Full Disk Encryption (FDE)**: Encrypts entire drive
- **File/Folder Encryption**: Encrypts specific files/folders
- **Database Encryption**: Encrypts database contents
- **Application Encryption**: Built into applications
- **Common Tools**: BitLocker (Windows), FileVault (macOS), LUKS (Linux), VeraCrypt

**Audit and Monitoring**
- **File Integrity Monitoring**: Detects unauthorized changes
- **Access Logging**: Records who accessed what files
- **Tools**: Windows Event Log, Linux auditd, macOS Console
- **Best Practices**: Centralized logging, regular review, alerting for critical events

## Patch Management
**Importance of Patching**
- **Security Patches**: Fix vulnerabilities
- **Feature Updates**: New functionality and improvements
- **Stability Patches**: Fix bugs and improve performance
- **Statistics**: 60% of breaches involve unpatched vulnerabilities

**Patch Management Process**
1. **Inventory**: Identify all systems and software
2. **Assessment**: Determine patch priority and impact
3. **Testing**: Test patches in controlled environment
4. **Deployment**: Apply patches systematically
5. **Verification**: Confirm successful installation
6. **Documentation**: Record patch details and process

**Automation Tools**
- **Windows**: WSUS, SCCM, Intune
- **Linux**: yum, apt, dnf with automation scripts
- **macOS**: Apple Business Manager, MDM solutions
- **Cross-platform**: Ansible, Puppet, Chef, SaltStack

## Malware Protection
**Types of Malware Protection**
- **Antivirus**: Traditional signature-based detection
- **Anti-malware**: Broader protection including newer threats
- **Endpoint Detection and Response (EDR)**: Advanced monitoring and response
- **Application Whitelisting**: Only allow approved applications
- **Behavior Monitoring**: Detect suspicious activity patterns

**Common Antivirus Solutions**
- **Windows Defender**: Built into Windows 10/11
- **Third-party**: Norton, McAfee, Kaspersky, Bitdefender
- **Enterprise**: CrowdStrike, SentinelOne, Carbon Black
- **Free**: Avast, AVG, Malwarebytes

**Best Practices**
- Keep antivirus updated
- Regular full system scans
- Real-time protection enabled
- Regular updates and patches
- User education on safe computing

## Logging and Monitoring
**System Logs**
- **Windows**: Event Viewer (Application, Security, System logs)
- **Linux**: syslog, journalctl, /var/log directory
- **macOS**: Console.app, system.log
- **Important Events**: Logins, privilege changes, system changes, errors

**Log Management**
- **Centralized Collection**: SIEM systems, log servers
- **Retention Policies**: How long to keep logs
- **Analysis Tools**: Log parsing, correlation, alerting
- **Compliance**: Meeting regulatory logging requirements

**Monitoring Tools**
- **Built-in**: Windows Performance Monitor, Linux top/htop
- **Third-party**: Nagios, Zabbix, PRTG, SolarWinds
- **Cloud-based**: Datadog, New Relic, AWS CloudWatch
- **Security-focused**: OSSEC, Wazuh, Security Onion

## Backup and Recovery
**Backup Strategies**
- **3-2-1 Rule**: 3 copies, 2 different media, 1 offsite
- **Full Backups**: Complete system backup
- **Incremental Backups**: Only changed data since last backup
- **Differential Backups**: Changed data since last full backup
- **Snapshot Backups**: Point-in-time system state

**Recovery Planning**
- **Recovery Time Objective (RTO)**: Maximum acceptable downtime
- **Recovery Point Objective (RPO)**: Maximum data loss acceptable
- **Disaster Recovery Plan**: Steps to restore operations
- **Testing**: Regular backup restoration tests

**Backup Security**
- **Encryption**: Protect backup data
- **Access Control**: Limit who can access backups
- **Offsite Storage**: Protect against physical threats
- **Verification**: Regular verification of backup integrity

## Security Tools and Utilities
**Built-in Security Tools**
- **Windows**: Windows Security Center, Defender, Firewall
- **Linux**: iptables, firewalld, SELinux, auditd
- **macOS**: Gatekeeper, XProtect, FileVault, Firewall

**Third-party Security Tools**
- **Vulnerability Scanners**: Nessus, OpenVAS, Qualys
- **Configuration Management**: Ansible, Puppet, Chef
- **Monitoring**: Nagios, Zabbix, PRTG
- **Forensics**: Autopsy, FTK, EnCase

**Command Line Security Tools**
- **Windows**: PowerShell security cmdlets
- **Linux**: nmap, netstat, lsof, chkrootkit
- **macOS**: Same as Linux plus macOS-specific tools`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does DAC stand for in access control models?",
          options: ["Digital Access Control", "Discretionary Access Control", "Direct Access Control", "Dynamic Access Control"],
          correctAnswer: 1,
          explanation: "DAC stands for Discretionary Access Control - owners control access to their resources."
        },
        {
          id: 2,
          question: "What is the purpose of User Account Control (UAC) in Windows?",
          options: ["User authentication", "Prompt for administrative actions", "User account creation", "User password management"],
          correctAnswer: 1,
          explanation: "UAC prompts users for permission or administrator credentials before performing actions that could affect system security."
        },
        {
          id: 3,
          question: "What does TCB stand for in OS security?",
          options: ["Total Computer Base", "Trusted Computing Base", "Technical Control Board", "Total Control Base"],
          correctAnswer: 1,
          explanation: "TCB stands for Trusted Computing Base - all hardware, firmware, and software critical to security."
        },
        {
          id: 4,
          question: "Which Linux security module provides mandatory access control?",
          options: ["sudo", "iptables", "SELinux", "PAM"],
          correctAnswer: 2,
          explanation: "SELinux (Security-Enhanced Linux) provides mandatory access control for Linux systems."
        },
        {
          id: 5,
          question: "What is the 3-2-1 rule for backups?",
          options: ["3 hours, 2 days, 1 week backup schedule", "3 copies, 2 different media, 1 offsite", "3 full backups, 2 incremental, 1 differential", "3 servers, 2 locations, 1 administrator"],
          correctAnswer: 1,
          explanation: "The 3-2-1 backup rule: Keep 3 copies of data, on 2 different media, with 1 copy offsite."
        },
        {
          id: 6,
          question: "What does PAM stand for in Linux authentication?",
          options: ["Privileged Access Management", "Pluggable Authentication Modules", "Password Authentication Method", "Protected Access Mechanism"],
          correctAnswer: 1,
          explanation: "PAM stands for Pluggable Authentication Modules - flexible authentication framework in Linux."
        },
        {
          id: 7,
          question: "What percentage of breaches involve unpatched vulnerabilities?",
          options: ["20%", "40%", "60%", "80%"],
          correctAnswer: 2,
          explanation: "Approximately 60% of breaches involve vulnerabilities for which patches were available but not applied."
        },
        {
          id: 8,
          question: "What is FileVault in macOS?",
          options: ["File manager", "Full disk encryption", "Firewall", "File sharing service"],
          correctAnswer: 1,
          explanation: "FileVault is Apple's full disk encryption feature for macOS."
        },
        {
          id: 9,
          question: "What does RBAC stand for in access control?",
          options: ["Rule-Based Access Control", "Role-Based Access Control", "Resource-Based Access Control", "Risk-Based Access Control"],
          correctAnswer: 1,
          explanation: "RBAC stands for Role-Based Access Control - access based on user roles rather than individual users."
        },
        {
          id: 10,
          question: "What is the minimum recommended password length for security?",
          options: ["6 characters", "8 characters", "12 characters", "16 characters"],
          correctAnswer: 2,
          explanation: "Modern security best practices recommend minimum 12-character passwords for better security."
        },
        {
          id: 11,
          question: "What does EDR stand for in endpoint security?",
          options: ["Endpoint Detection and Response", "External Defense and Recovery", "Encrypted Data Recovery", "Enterprise Defense Response"],
          correctAnswer: 0,
          explanation: "EDR stands for Endpoint Detection and Response - advanced monitoring and response capabilities for endpoints."
        },
        {
          id: 12,
          question: "What is SIP in macOS?",
          options: ["System Information Protocol", "System Integrity Protection", "Security Integration Protocol", "System Isolation Protection"],
          correctAnswer: 1,
          explanation: "SIP stands for System Integrity Protection - protects system files and processes in macOS."
        },
        {
          id: 13,
          question: "What does RTO stand for in disaster recovery?",
          options: ["Recovery Time Objective", "Return To Operations", "Recovery Target Objective", "Response Time Objective"],
          correctAnswer: 0,
          explanation: "RTO stands for Recovery Time Objective - maximum acceptable downtime after a failure."
        },
        {
          id: 14,
          question: "What is AppLocker in Windows?",
          options: ["Application locker for security", "Application control policies", "App store for Windows", "Application development tool"],
          correctAnswer: 1,
          explanation: "AppLocker is a Windows feature that controls which applications users can run based on rules."
        },
        {
          id: 15,
          question: "What does MFA typically require?",
          options: ["Multiple passwords", "Something you know, have, and/or are", "Multiple email addresses", "Multiple security questions"],
          correctAnswer: 1,
          explanation: "MFA typically requires two or more authentication factors: something you know (password), have (token), or are (biometric)."
        },
        {
          id: 16,
          question: "What is BitLocker in Windows?",
          options: ["Bit locker for files", "Full disk encryption", "Browser locker", "Bit-level encryption"],
          correctAnswer: 1,
          explanation: "BitLocker is Microsoft's full disk encryption feature available in Windows Pro and Enterprise editions."
        },
        {
          id: 17,
          question: "What does RPO stand for in backup planning?",
          options: ["Recovery Point Objective", "Recovery Process Objective", "Return Point Objective", "Restoration Point Objective"],
          correctAnswer: 0,
          explanation: "RPO stands for Recovery Point Objective - maximum acceptable amount of data loss measured in time."
        },
        {
          id: 18,
          question: "What is Gatekeeper in macOS?",
          options: ["Network gatekeeper", "Controls application installation", "User access control", "System gate for security"],
          correctAnswer: 1,
          explanation: "Gatekeeper controls which applications can be installed on macOS based on developer identity and app notarization."
        },
        {
          id: 19,
          question: "What is the principle of least privilege in OS security?",
          options: ["Users have all privileges", "Users have minimum access necessary", "Only administrators have privileges", "Privileges based on seniority"],
          correctAnswer: 1,
          explanation: "Least privilege means users and processes have only the minimum access necessary to perform their functions."
        },
        {
          id: 20,
          question: "What does WSUS stand for in Windows patch management?",
          options: ["Windows Server Update Services", "Windows System Update Services", "Windows Security Update Services", "Windows Software Update Services"],
          correctAnswer: 0,
          explanation: "WSUS stands for Windows Server Update Services - Microsoft's tool for managing Windows updates in organizations."
        }
      ]
    },

    // MODULE 4: Cryptography Basics
    {
      id: 4,
      title: "Cryptography Basics",
      content: `# Cryptography Basics

## Introduction to Cryptography
Cryptography is the practice and study of techniques for secure communication in the presence of adversaries. It provides confidentiality, integrity, authentication, and non-repudiation for data and communications.

## Basic Cryptographic Concepts
**Terminology**
- **Plaintext**: Original readable message
- **Ciphertext**: Encrypted message
- **Encryption**: Converting plaintext to ciphertext
- **Decryption**: Converting ciphertext back to plaintext
- **Key**: Secret value used for encryption/decryption
- **Algorithm**: Mathematical process for encryption/decryption
- **Cryptanalysis**: Study of breaking cryptographic systems

**Goals of Cryptography**
1. **Confidentiality**: Only authorized parties can read information
2. **Integrity**: Data hasn't been altered in transit
3. **Authentication**: Verifying identity of communicating parties
4. **Non-repudiation**: Sender cannot deny sending a message

**Types of Cryptography**
- **Symmetric Cryptography**: Same key for encryption and decryption
- **Asymmetric Cryptography**: Different keys for encryption and decryption
- **Hash Functions**: One-way functions producing fixed-size output
- **Digital Signatures**: Provide integrity and non-repudiation

## Symmetric Cryptography
**How Symmetric Encryption Works**
- Same secret key used for both encryption and decryption
- Fast and efficient for bulk data encryption
- Challenge: Secure key distribution
- Also called secret-key or private-key cryptography

**Common Symmetric Algorithms**
1. **AES (Advanced Encryption Standard)**
   - Most widely used symmetric algorithm
   - Block size: 128 bits
   - Key sizes: 128, 192, or 256 bits
   - Used in: SSL/TLS, Wi-Fi security, disk encryption

2. **DES (Data Encryption Standard)**
   - Older standard (1977)
   - 56-bit key (considered weak)
   - Largely replaced by 3DES and AES
   - **3DES**: Triple DES, applies DES three times

3. **Blowfish**
   - Variable key length (32-448 bits)
   - Fast and efficient
   - Used in some legacy systems

4. **ChaCha20**
   - Modern stream cipher
   - Fast in software
   - Used in TLS 1.3, VPNs

**Modes of Operation**
- **ECB (Electronic Codebook)**: Each block encrypted separately (weak)
- **CBC (Cipher Block Chaining)**: Each block XORed with previous ciphertext
- **CTR (Counter)**: Uses counter values, allows parallel processing
- **GCM (Galois/Counter Mode)**: Provides authenticated encryption

## Asymmetric Cryptography
**How Asymmetric Encryption Works**
- Uses key pairs: public key and private key
- Public key: Can be shared publicly, used for encryption
- Private key: Kept secret, used for decryption
- Also called public-key cryptography

**Common Asymmetric Algorithms**
1. **RSA (Rivest-Shamir-Adleman)**
   - Most widely used asymmetric algorithm
   - Based on factorization of large prime numbers
   - Key sizes: 2048+ bits recommended
   - Used in: SSL/TLS, digital signatures, secure email

2. **ECC (Elliptic Curve Cryptography)**
   - Smaller keys for equivalent security to RSA
   - More efficient than RSA
   - Key sizes: 256 bits equivalent to RSA 3072 bits
   - Used in: SSL/TLS, cryptocurrencies, mobile devices

3. **Diffie-Hellman Key Exchange**
   - Allows secure key exchange over insecure channels
   - Doesn't provide encryption, only key exchange
   - Foundation for many secure protocols

4. **DSA (Digital Signature Algorithm)**
   - Used for digital signatures only
   - Part of DSS (Digital Signature Standard)

**Public Key Infrastructure (PKI)**
- System for managing digital certificates
- **Certificate Authority (CA)**: Issues and verifies certificates
- **Digital Certificate**: Binds public key to identity
- **Registration Authority (RA)**: Verifies identities for CA
- **Validation Authority (VA)**: Validates certificates

## Hash Functions
**Properties of Hash Functions**
- **Fixed Output**: Always produces same size output (hash/digest)
- **Deterministic**: Same input always produces same hash
- **Fast Computation**: Quick to compute hash
- **Pre-image Resistance**: Hard to find input from hash
- **Collision Resistance**: Hard to find two inputs with same hash
- **Avalanche Effect**: Small input change produces completely different hash

**Common Hash Algorithms**
1. **MD5 (Message Digest 5)**
   - 128-bit hash
   - Considered broken for security purposes
   - Still used for checksums (non-security)

2. **SHA-1 (Secure Hash Algorithm 1)**
   - 160-bit hash
   - Considered weak, being phased out
   - Deprecated for security uses

3. **SHA-2 Family**
   - SHA-256: 256-bit hash (most common)
   - SHA-384: 384-bit hash
   - SHA-512: 512-bit hash
   - Current standard for security applications

4. **SHA-3**
   - Latest SHA standard
   - Different design from SHA-2
   - Not yet widely adopted

**Uses of Hash Functions**
- **Password Storage**: Store hashes, not plaintext passwords
- **Digital Signatures**: Hash message, then sign the hash
- **Data Integrity**: Verify files haven't been altered
- **Blockchain**: Cryptographic linking of blocks
- **Digital Forensics**: Verify evidence integrity

## Digital Signatures
**How Digital Signatures Work**
1. Sender creates hash of message
2. Sender encrypts hash with private key
3. Encrypted hash = digital signature
4. Signature sent with original message
5. Receiver verifies by decrypting signature with sender's public key
6. Compare decrypted hash with newly computed hash

**Benefits of Digital Signatures**
- **Authentication**: Verifies sender identity
- **Integrity**: Ensures message wasn't altered
- **Non-repudiation**: Sender cannot deny sending
- **Standardized**: Legal validity in many jurisdictions

**Common Signature Algorithms**
- **RSA-PSS**: RSA with Probabilistic Signature Scheme
- **ECDSA**: Elliptic Curve Digital Signature Algorithm
- **EdDSA**: Edwards-curve Digital Signature Algorithm

## Cryptographic Protocols
**SSL/TLS (Secure Sockets Layer/Transport Layer Security)**
- **Purpose**: Secure web communications (HTTPS)
- **Versions**: SSL 2.0/3.0 (deprecated), TLS 1.0/1.1 (deprecated), TLS 1.2/1.3 (current)
- **Handshake Process**:
  1. Client hello
  2. Server hello with certificate
  3. Key exchange
  4. Change cipher spec
  5. Encrypted communication

**IPsec (Internet Protocol Security)**
- **Purpose**: Secure IP communications
- **Modes**: Transport (host-to-host), Tunnel (network-to-network)
- **Components**: AH (Authentication Header), ESP (Encapsulating Security Payload)
- **Uses**: VPNs, secure network communications

**PGP/GPG (Pretty Good Privacy/GNU Privacy Guard)**
- **Purpose**: Email encryption and signing
- **Combines**: Symmetric, asymmetric encryption, and digital signatures
- **Web of Trust**: Decentralized trust model
- **Uses**: Secure email, file encryption

## Key Management
**Key Lifecycle Management**
1. **Generation**: Creating cryptographically strong keys
2. **Distribution**: Securely delivering keys to authorized parties
3. **Storage**: Protecting keys from unauthorized access
4. **Usage**: Proper use of keys according to policy
5. **Rotation**: Regularly changing keys
6. **Revocation**: Invalidating compromised keys
7. **Destruction**: Secure deletion of expired keys

**Key Storage Solutions**
- **HSM (Hardware Security Module)**: Physical device for key storage
- **TPM (Trusted Platform Module)**: Built-in hardware for key storage
- **Software Key Stores**: Encrypted files or databases
- **Cloud KMS**: Key management services in cloud platforms

**Best Practices for Key Management**
- Use strong, random keys
- Regular key rotation (1-2 years for asymmetric, more frequent for symmetric)
- Secure key distribution
- Implement key escrow for recovery
- Audit key usage
- Secure key destruction

## Cryptographic Attacks
**Types of Attacks**
- **Brute Force**: Trying all possible keys
- **Cryptanalysis**: Mathematical analysis of algorithm weaknesses
- **Side-channel Attacks**: Analyzing physical implementation (timing, power consumption)
- **Man-in-the-Middle**: Intercepting and altering communications
- **Replay Attacks**: Capturing and resending valid data

**Defenses Against Attacks**
- Use strong, up-to-date algorithms
- Implement proper key management
- Regular algorithm and key updates
- Secure implementation and configuration
- Monitoring for anomalous activity

## Practical Applications
**Password Security**
- **Hashing**: Store password hashes (with salt) not plaintext
- **Salting**: Add random data to password before hashing
- **Peppering**: Additional secret added to hash
- **Key Stretching**: Multiple hash iterations (PBKDF2, bcrypt, scrypt, Argon2)

**Disk Encryption**
- **Full Disk Encryption (FDE)**: Encrypt entire storage device
- **File-level Encryption**: Encrypt individual files
- **Tools**: BitLocker (Windows), FileVault (macOS), LUKS (Linux), VeraCrypt

**Email Security**
- **S/MIME**: Email encryption and signing using certificates
- **PGP/GPG**: End-to-end email encryption
- **TLS**: Transport-level encryption for email servers

**Web Security**
- **HTTPS**: TLS encryption for web traffic
- **HSTS (HTTP Strict Transport Security)**: Forces HTTPS connections
- **Certificate Pinning**: Specific certificate validation

## Quantum Cryptography
**Quantum Threats**
- **Shor's Algorithm**: Can break RSA, ECC, Diffie-Hellman
- **Grover's Algorithm**: Speeds up brute force attacks (reduces security by half)

**Post-Quantum Cryptography**
- Algorithms resistant to quantum attacks
- **Lattice-based**: NTRU, Kyber
- **Code-based**: McEliece
- **Hash-based**: SPHINCS+
- **Multivariate**: Rainbow

**Current Status**
- NIST standardization process ongoing
- Early adoption in some applications
- Planning for quantum-resistant migration

## Cryptographic Standards
**Important Standards Bodies**
- **NIST**: National Institute of Standards and Technology (US)
- **ISO**: International Organization for Standardization
- **IETF**: Internet Engineering Task Force
- **ANSI**: American National Standards Institute

**Common Standards**
- **FIPS 140-3**: Security requirements for cryptographic modules
- **NIST SP 800-57**: Recommendation for key management
- **RFC 5246**: TLS 1.2 specification
- **PKCS series**: Public Key Cryptography Standards`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main difference between symmetric and asymmetric cryptography?",
          options: ["Symmetric is faster", "Symmetric uses same key for encryption and decryption, asymmetric uses different keys", "Asymmetric is older", "Symmetric is more secure"],
          correctAnswer: 1,
          explanation: "Symmetric uses the same key for both encryption and decryption, while asymmetric uses a public key for encryption and private key for decryption."
        },
        {
          id: 2,
          question: "What does AES stand for?",
          options: ["Advanced Encryption Standard", "Asymmetric Encryption System", "Automated Encryption Service", "Advanced Encryption System"],
          correctAnswer: 0,
          explanation: "AES stands for Advanced Encryption Standard, the most widely used symmetric encryption algorithm."
        },
        {
          id: 3,
          question: "What key size is recommended for RSA encryption?",
          options: ["512 bits", "1024 bits", "2048 bits", "4096 bits"],
          correctAnswer: 2,
          explanation: "2048-bit RSA keys are currently recommended, with 3072 or 4096 bits for long-term security."
        },
        {
          id: 4,
          question: "What property of hash functions makes it hard to find two different inputs with the same hash?",
          options: ["Pre-image resistance", "Collision resistance", "Avalanche effect", "Deterministic property"],
          correctAnswer: 1,
          explanation: "Collision resistance means it's computationally infeasible to find two different inputs that produce the same hash output."
        },
        {
          id: 5,
          question: "What does PKI stand for?",
          options: ["Private Key Infrastructure", "Public Key Infrastructure", "Personal Key Information", "Public Key Information"],
          correctAnswer: 1,
          explanation: "PKI stands for Public Key Infrastructure - system for managing digital certificates and public-key encryption."
        },
        {
          id: 6,
          question: "Which TLS version is currently recommended for secure web communications?",
          options: ["TLS 1.0", "TLS 1.1", "TLS 1.2", "TLS 1.3"],
          correctAnswer: 3,
          explanation: "TLS 1.3 is the latest and most secure version, though TLS 1.2 is still widely supported."
        },
        {
          id: 7,
          question: "What is salting in password security?",
          options: ["Adding salt to password storage", "Adding random data to password before hashing", "Seasoning passwords", "Salting hash outputs"],
          correctAnswer: 1,
          explanation: "Salting adds random data to passwords before hashing to prevent rainbow table attacks."
        },
        {
          id: 8,
          question: "What does ECC stand for in cryptography?",
          options: ["Encrypted Communication Channel", "Elliptic Curve Cryptography", "Enhanced Cryptographic Code", "Enterprise Cryptography Control"],
          correctAnswer: 1,
          explanation: "ECC stands for Elliptic Curve Cryptography - provides equivalent security to RSA with smaller key sizes."
        },
        {
          id: 9,
          question: "What is the main purpose of a digital signature?",
          options: ["Encrypt messages", "Provide authentication, integrity, and non-repudiation", "Compress data", "Store keys"],
          correctAnswer: 1,
          explanation: "Digital signatures provide authentication (verifies sender), integrity (ensures message unchanged), and non-repudiation (sender cannot deny sending)."
        },
        {
          id: 10,
          question: "What does HSM stand for in key management?",
          options: ["Hardware Security Module", "Hardware Storage Management", "High Security Module", "Hardware System Management"],
          correctAnswer: 0,
          explanation: "HSM stands for Hardware Security Module - physical computing device that safeguards digital keys."
        },
        {
          id: 11,
          question: "What quantum algorithm threatens RSA encryption?",
          options: ["Grover's Algorithm", "Shor's Algorithm", "Einstein's Algorithm", "Quantum Factorization Algorithm"],
          correctAnswer: 1,
          explanation: "Shor's Algorithm can efficiently factor large numbers, which would break RSA encryption on a quantum computer."
        },
        {
          id: 12,
          question: "What does SSL stand for?",
          options: ["Secure Socket Layer", "System Security Layer", "Software Security Layer", "Secure System Layer"],
          correctAnswer: 0,
          explanation: "SSL stands for Secure Socket Layer - predecessor to TLS for secure network communications."
        },
        {
          id: 13,
          question: "What is key stretching in password security?",
          options: ["Making keys longer", "Multiple hash iterations to slow down brute force attacks", "Stretching key storage", "Extending key lifetime"],
          correctAnswer: 1,
          explanation: "Key stretching applies multiple hash iterations to slow down brute force attacks against password hashes."
        },
        {
          id: 14,
          question: "What does CA stand for in PKI?",
          options: ["Certificate Authority", "Cryptographic Authority", "Certification Authority", "Central Authority"],
          correctAnswer: 0,
          explanation: "CA stands for Certificate Authority - entity that issues digital certificates in a PKI."
        },
        {
          id: 15,
          question: "Which hash algorithm is part of the SHA-2 family and most commonly used?",
          options: ["SHA-1", "SHA-256", "SHA-3", "MD5"],
          correctAnswer: 1,
          explanation: "SHA-256 (256-bit output) is the most commonly used member of the SHA-2 family."
        },
        {
          id: 16,
          question: "What is a rainbow table attack?",
          options: ["Color-based attack", "Precomputed table for reversing cryptographic hash functions", "Rainbow encryption attack", "Table-based encryption"],
          correctAnswer: 1,
          explanation: "Rainbow tables are precomputed tables for reversing cryptographic hash functions, mainly used for cracking password hashes."
        },
        {
          id: 17,
          question: "What does PGP stand for?",
          options: ["Pretty Good Privacy", "Public Good Privacy", "Private Good Protection", "Pretty Good Protection"],
          correctAnswer: 0,
          explanation: "PGP stands for Pretty Good Privacy - data encryption and decryption program for secure communication."
        },
        {
          id: 18,
          question: "What is the avalanche effect in hash functions?",
          options: ["Large output size", "Small input change produces completely different hash", "Fast computation", "Deterministic output"],
          correctAnswer: 1,
          explanation: "Avalanche effect means a small change in input produces a significantly different hash output."
        },
        {
          id: 19,
          question: "What does FIPS 140-3 specify?",
          options: ["Federal information processing standards for cryptographic modules", "Financial security standards", "Firewall standards", "File encryption standards"],
          correctAnswer: 0,
          explanation: "FIPS 140-3 is the US government standard for security requirements for cryptographic modules."
        },
        {
          id: 20,
          question: "What is post-quantum cryptography?",
          options: ["Cryptography after quantum computing", "Cryptographic algorithms resistant to quantum attacks", "Quantum-based cryptography", "Post-processing quantum cryptography"],
          correctAnswer: 1,
          explanation: "Post-quantum cryptography refers to cryptographic algorithms thought to be secure against attacks by quantum computers."
        }
      ]
    },

    // MODULE 5: Application Security
    {
      id: 5,
      title: "Application Security",
      content: `# Application Security

## Introduction to Application Security
Application security focuses on keeping software and applications free from security vulnerabilities that could be exploited by attackers. With most attacks targeting applications, securing them is critical for overall cybersecurity.

## Web Application Security
**Common Web Application Vulnerabilities**
1. **SQL Injection**
   - **Description**: Malicious SQL code inserted into database queries
   - **Impact**: Data theft, modification, deletion, administrative access
   - **Prevention**: Parameterized queries, input validation, stored procedures

2. **Cross-Site Scripting (XSS)**
   - **Description**: Malicious scripts injected into web pages viewed by users
   - **Types**: Reflected, Stored, DOM-based
   - **Impact**: Session hijacking, defacement, malware distribution
   - **Prevention**: Input validation, output encoding, Content Security Policy

3. **Cross-Site Request Forgery (CSRF)**
   - **Description**: Forcing users to execute unwanted actions on authenticated sites
   - **Impact**: Unauthorized actions, data modification
   - **Prevention**: Anti-CSRF tokens, SameSite cookies, referrer checking

4. **Broken Authentication**
   - **Description**: Weaknesses in authentication mechanisms
   - **Impact**: Account takeover, unauthorized access
   - **Prevention**: Multi-factor authentication, strong password policies, secure session management

5. **Sensitive Data Exposure**
   - **Description**: Inadequate protection of sensitive data
   - **Impact**: Data theft, privacy violations
   - **Prevention**: Encryption in transit and at rest, proper key management

**OWASP Top 10**
The Open Web Application Security Project (OWASP) Top 10 lists the most critical web application security risks:
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery

**Web Application Firewalls (WAF)**
- **Function**: Filter, monitor, and block HTTP traffic to web applications
- **Protections**: SQL injection, XSS, CSRF, DDoS attacks
- **Deployment**: Network-based, host-based, cloud-based
- **Limitations**: Cannot fix application code flaws, evasion techniques

## Mobile Application Security
**Mobile-Specific Threats**
- **Insecure Data Storage**: Unencrypted sensitive data on device
- **Weak Server-Side Controls**: Inadequate backend security
- **Insufficient Transport Layer Protection**: Unencrypted network communications
- **Client-Side Injection**: Code injection in mobile apps
- **Poor Authorization and Authentication**: Weak session management

**Platform-Specific Security**
- **iOS Security Features**: App sandboxing, code signing, Keychain, Touch ID/Face ID
- **Android Security Features**: App sandboxing, permissions model, Google Play Protect
- **Best Practices**: Use platform security features, secure data storage, proper session handling

**Mobile App Testing**
- **Static Analysis**: Review source code for vulnerabilities
- **Dynamic Analysis**: Test running application
- **Reverse Engineering**: Analyze compiled applications
- **Tools**: MobSF, QARK, Drozer, Frida

## Software Development Security
**Secure Software Development Lifecycle (SSDLC)**
1. **Requirements**: Security requirements gathering
2. **Design**: Security architecture and design review
3. **Implementation**: Secure coding practices
4. **Verification**: Security testing and code review
5. **Release**: Security assessment before deployment
6. **Response**: Vulnerability management and patching

**Secure Coding Practices**
- **Input Validation**: Validate all user inputs
- **Output Encoding**: Encode data before output
- **Error Handling**: Generic error messages, no information leakage
- **Authentication**: Strong authentication mechanisms
- **Session Management**: Secure session handling
- **Cryptography**: Proper use of cryptographic functions

**Common Programming Vulnerabilities**
- **Buffer Overflow**: Writing beyond allocated memory bounds
- **Integer Overflow**: Mathematical operations exceed variable capacity
- **Race Conditions**: Timing-dependent vulnerabilities
- **Memory Leaks**: Failure to release allocated memory
- **Format String Vulnerabilities**: Uncontrolled format strings

## API Security
**API Security Challenges**
- **Authentication**: Verifying API callers
- **Authorization**: Controlling what API callers can do
- **Input Validation**: Validating API inputs
- **Rate Limiting**: Preventing abuse
- **Data Exposure**: Protecting sensitive data in API responses

**API Security Best Practices**
- Use HTTPS for all API communications
- Implement proper authentication (OAuth 2.0, API keys)
- Validate and sanitize all inputs
- Implement rate limiting and throttling
- Use API gateways for security controls
- Regular security testing of APIs

**Common API Vulnerabilities**
- **Broken Object Level Authorization**: Access to objects not owned by user
- **Broken User Authentication**: Weak authentication mechanisms
- **Excessive Data Exposure**: Returning more data than needed
- **Lack of Resources & Rate Limiting**: No protection against DoS
- **Mass Assignment**: Binding client-provided data to object properties

## Cloud Application Security
**Shared Responsibility Model**
- **Cloud Provider**: Security OF the cloud (infrastructure)
- **Customer**: Security IN the cloud (applications, data, configurations)
- **Understanding**: Know what you're responsible for securing

**Cloud-Specific Threats**
- **Misconfigured Cloud Storage**: Publicly accessible storage buckets
- **Insecure APIs**: Weak API security controls
- **Account Hijacking**: Compromised cloud accounts
- **Malicious Insiders**: Cloud provider employees
- **Advanced Persistent Threats**: Targeted attacks on cloud environments

**Cloud Security Best Practices**
- Implement identity and access management
- Enable logging and monitoring
- Use encryption for data at rest and in transit
- Regular security assessments and audits
- Implement network security controls
- Backup and disaster recovery planning

## Database Security
**Database Security Principles**
- **Least Privilege**: Minimum permissions for database users
- **Defense in Depth**: Multiple security layers
- **Separation of Duties**: Different roles for different tasks
- **Auditing and Monitoring**: Track database activities

**Common Database Vulnerabilities**
- **SQL Injection**: Already covered in web application security
- **Weak Authentication**: Default or weak passwords
- **Excessive Privileges**: Users with unnecessary permissions
- **Unencrypted Data**: Sensitive data stored in plaintext
- **Missing Patches**: Unpatched database software

**Database Security Measures**
- Regular patching and updates
- Strong authentication and access controls
- Encryption of sensitive data
- Regular backups and testing
- Database activity monitoring
- Network segmentation for databases

## Security Testing
**Types of Security Testing**
1. **Static Application Security Testing (SAST)**
   - Analyze source code for vulnerabilities
   - Early in development cycle
   - Tools: SonarQube, Checkmarx, Fortify

2. **Dynamic Application Security Testing (DAST)**
   - Test running applications
   - Simulate attacks on live systems
   - Tools: OWASP ZAP, Burp Suite, Acunetix

3. **Interactive Application Security Testing (IAST)**
   - Combination of SAST and DAST
   - Instrumentation of running applications
   - Tools: Contrast Security, Synopsys Seeker

4. **Software Composition Analysis (SCA)**
   - Identify vulnerabilities in third-party components
   - Check for known vulnerabilities in libraries
   - Tools: Snyk, WhiteSource, Black Duck

**Penetration Testing**
- **Purpose**: Simulate real attacks to find vulnerabilities
- **Types**: Black box, white box, gray box
- **Methodology**: Reconnaissance, scanning, exploitation, reporting
- **Tools**: Metasploit, Nmap, Burp Suite, Kali Linux
- **Reporting**: Document findings, risk ratings, remediation recommendations

**Vulnerability Assessment**
- **Purpose**: Identify and classify vulnerabilities
- **Process**: Scanning, analysis, prioritization, reporting
- **Tools**: Nessus, OpenVAS, Qualys, Rapid7
- **Frequency**: Regular assessments (quarterly, before releases)

## Secure Deployment and Maintenance
**DevSecOps**
- **Integration**: Security integrated into DevOps processes
- **Automation**: Automated security testing and compliance
- **Culture**: Security as everyone's responsibility
- **Tools**: Security tools integrated into CI/CD pipelines

**Container Security**
- **Image Security**: Secure base images, vulnerability scanning
- **Runtime Security**: Monitor running containers
- **Orchestration Security**: Secure Kubernetes or Docker Swarm
- **Best Practices**: Least privilege, network policies, secrets management

**Patch Management for Applications**
- **Vulnerability Management Process**: Identify, assess, patch, verify
- **Prioritization**: Based on risk and impact
- **Testing**: Test patches before deployment
- **Automation**: Automated patch deployment where possible

## Security Tools and Resources
**Development Security Tools**
- **Code Analysis**: SonarQube, ESLint, Pylint, FindBugs
- **Dependency Checking**: OWASP Dependency-Check, Snyk, npm audit
- **Secret Detection**: Git-secrets, TruffleHog
- **Container Security**: Clair, Trivy, Anchore

**Testing Tools**
- **Web Application Testing**: OWASP ZAP, Burp Suite, Nikto
- **Network Testing**: Nmap, Wireshark, Netcat
- **Exploitation Frameworks**: Metasploit, Cobalt Strike
- **Password Testing**: John the Ripper, Hashcat

**Resources and Standards**
- **OWASP**: Open Web Application Security Project
- **SANS**: Security training and resources
- **NIST**: Security standards and guidelines
- **CWE**: Common Weakness Enumeration
- **CVEs**: Common Vulnerabilities and Exposures

## Best Practices Summary
**For Developers**
- Follow secure coding guidelines
- Use security tools in development
- Regular security training
- Participate in code reviews
- Stay updated on security trends

**For Organizations**
- Implement SSDLC processes
- Regular security testing
- Vulnerability management program
- Security training for all staff
- Incident response planning

**For Everyone**
- Keep software updated
- Use security tools and features
- Be aware of security risks
- Report security issues
- Continuous learning about security`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does OWASP stand for?",
          options: ["Open Web Application Security Project", "Organization for Web Application Security Protection", "Online Web Application Security Program", "Open Website Application Security Protocol"],
          correctAnswer: 0,
          explanation: "OWASP stands for Open Web Application Security Project - nonprofit foundation that works to improve software security."
        },
        {
          id: 2,
          question: "What is SQL Injection?",
          options: ["Injecting SQL databases", "Malicious SQL code inserted into database queries", "SQL database attacks", "SQL code injection into applications"],
          correctAnswer: 1,
          explanation: "SQL Injection involves inserting malicious SQL code into database queries through application inputs."
        },
        {
          id: 3,
          question: "What does XSS stand for?",
          options: ["Cross-Site Scripting", "Extra Security System", "Extended Security Service", "Cross-System Security"],
          correctAnswer: 0,
          explanation: "XSS stands for Cross-Site Scripting - injecting malicious scripts into web pages viewed by users."
        },
        {
          id: 4,
          question: "What is the shared responsibility model in cloud security?",
          options: ["Shared security between companies", "Cloud provider secures infrastructure, customer secures applications and data", "Equal security responsibility", "Shared security tools"],
          correctAnswer: 1,
          explanation: "In cloud shared responsibility model, the provider secures the cloud infrastructure, while customers secure their data, applications, and configurations."
        },
        {
          id: 5,
          question: "What does SAST stand for in security testing?",
          options: ["Static Application Security Testing", "System Application Security Testing", "Software Application Security Testing", "Security Application Static Testing"],
          correctAnswer: 0,
          explanation: "SAST stands for Static Application Security Testing - analyzing source code for vulnerabilities."
        },
        {
          id: 6,
          question: "What is CSRF?",
          options: ["Cross-Site Request Forgery", "Cross-Site Response Forgery", "Client-Side Request Forgery", "Cross-Site Resource Forgery"],
          correctAnswer: 0,
          explanation: "CSRF stands for Cross-Site Request Forgery - forcing users to execute unwanted actions on authenticated sites."
        },
        {
          id: 7,
          question: "What does WAF stand for?",
          options: ["Web Application Firewall", "Website Application Filter", "Web Access Firewall", "Website Attack Filter"],
          correctAnswer: 0,
          explanation: "WAF stands for Web Application Firewall - filters, monitors, and blocks HTTP traffic to web applications."
        },
        {
          id: 8,
          question: "What is DevSecOps?",
          options: ["Development Security Operations", "Integrating security into DevOps processes", "Developer security operations", "Development security optimization"],
          correctAnswer: 1,
          explanation: "DevSecOps integrates security practices into DevOps processes, making security everyone's responsibility."
        },
        {
          id: 9,
          question: "What does SSDLC stand for?",
          options: ["Secure Software Development Life Cycle", "System Software Development Life Cycle", "Security System Development Life Cycle", "Software Security Development Life Cycle"],
          correctAnswer: 0,
          explanation: "SSDLC stands for Secure Software Development Life Cycle - integrating security throughout software development."
        },
        {
          id: 10,
          question: "What is a buffer overflow vulnerability?",
          options: ["Buffer over cleaning", "Writing beyond allocated memory bounds", "Buffer memory overflow", "Overflowing data buffers"],
          correctAnswer: 1,
          explanation: "Buffer overflow occurs when a program writes data beyond the bounds of allocated memory, potentially allowing code execution."
        },
        {
          id: 11,
          question: "What does DAST stand for?",
          options: ["Dynamic Application Security Testing", "Digital Application Security Testing", "Direct Application Security Testing", "Development Application Security Testing"],
          correctAnswer: 0,
          explanation: "DAST stands for Dynamic Application Security Testing - testing running applications for vulnerabilities."
        },
        {
          id: 12,
          question: "What is the OWASP Top 10?",
          options: ["Top 10 web servers", "Top 10 most critical web application security risks", "Top 10 security tools", "Top 10 programming languages"],
          correctAnswer: 1,
          explanation: "The OWASP Top 10 is a standard awareness document representing the most critical web application security risks."
        },
        {
          id: 13,
          question: "What does SCA stand for in application security?",
          options: ["Software Composition Analysis", "System Component Analysis", "Security Code Analysis", "Software Code Assessment"],
          correctAnswer: 0,
          explanation: "SCA stands for Software Composition Analysis - identifying vulnerabilities in third-party components and libraries."
        },
        {
          id: 14,
          question: "What is a race condition vulnerability?",
          options: ["Racing processes", "Timing-dependent vulnerability where outcome depends on sequence or timing", "Race between processes", "Conditional racing"],
          correctAnswer: 1,
          explanation: "Race conditions occur when the outcome depends on the sequence or timing of uncontrollable events, potentially leading to security issues."
        },
        {
          id: 15,
          question: "What does IAST stand for?",
          options: ["Interactive Application Security Testing", "Integrated Application Security Testing", "Internal Application Security Testing", "Interactive Application Security Tool"],
          correctAnswer: 0,
          explanation: "IAST stands for Interactive Application Security Testing - combines SAST and DAST approaches using instrumentation."
        },
        {
          id: 16,
          question: "What is broken authentication?",
          options: ["Broken login systems", "Weaknesses in authentication mechanisms allowing compromise", "Authentication system failures", "Broken password systems"],
          correctAnswer: 1,
          explanation: "Broken authentication refers to weaknesses in authentication mechanisms that could allow attackers to compromise passwords, keys, or session tokens."
        },
        {
          id: 17,
          question: "What does CWE stand for?",
          options: ["Common Weakness Enumeration", "Common Web Exploits", "Critical Web Errors", "Common Website Errors"],
          correctAnswer: 0,
          explanation: "CWE stands for Common Weakness Enumeration - community-developed list of common software security weaknesses."
        },
        {
          id: 18,
          question: "What is sensitive data exposure?",
          options: ["Data sensitivity", "Inadequate protection of sensitive data leading to exposure", "Exposed sensitive information", "Data privacy exposure"],
          correctAnswer: 1,
          explanation: "Sensitive data exposure occurs when applications don't adequately protect sensitive information like financial data, PII, or credentials."
        },
        {
          id: 19,
          question: "What does CVE stand for?",
          options: ["Common Vulnerabilities and Exposures", "Common Vulnerability Enumeration", "Critical Vulnerability Evaluation", "Common Vulnerability Exposure"],
          correctAnswer: 0,
          explanation: "CVE stands for Common Vulnerabilities and Exposures - dictionary of common security vulnerabilities and exposures."
        },
        {
          id: 20,
          question: "What is input validation in secure coding?",
          options: ["Validating user inputs", "Checking and sanitizing all user inputs to prevent malicious data", "Input checking", "User input verification"],
          correctAnswer: 1,
          explanation: "Input validation involves checking and sanitizing all user inputs to ensure they meet expected criteria and don't contain malicious data."
        }
      ]
    },

    // MODULE 6: Security Operations and Incident Response
    {
      id: 6,
      title: "Security Operations and Incident Response",
      content: `# Security Operations and Incident Response

## Security Operations Center (SOC)
**SOC Functions and Roles**
- **Tier 1 Analysts**: Monitor alerts, initial triage, basic incident handling
- **Tier 2 Analysts**: Advanced investigation, threat hunting, complex incidents
- **Tier 3 Analysts**: Expert analysis, reverse engineering, threat intelligence
- **SOC Manager**: Oversees operations, staffing, processes
- **Threat Intelligence Analyst**: Research threats, provide context

**SOC Tools and Technologies**
- **SIEM (Security Information and Event Management)**: Centralized log collection and analysis
- **SOAR (Security Orchestration, Automation, and Response)**: Automation of security workflows
- **EDR (Endpoint Detection and Response)**: Endpoint monitoring and response
- **Threat Intelligence Platforms**: Aggregation and analysis of threat data
- **Vulnerability Management**: Scanning and tracking vulnerabilities

**SOC Metrics and KPIs**
- **MTTD (Mean Time to Detect)**: Average time to detect incidents
- **MTTR (Mean Time to Respond)**: Average time to respond to incidents
- **Alert Volume**: Number of alerts generated
- **False Positive Rate**: Percentage of alerts that are false positives
- **Incident Closure Rate**: Percentage of incidents properly closed

## Incident Response Process
**NIST Incident Response Lifecycle**
1. **Preparation**: Develop policies, plans, procedures, teams
2. **Detection & Analysis**: Identify potential incidents, analyze severity
3. **Containment**: Limit damage, prevent further compromise
4. **Eradication**: Remove malicious content, restore systems
5. **Recovery**: Return to normal operations, monitor for recurrence
6. **Post-Incident Activity**: Lessons learned, improvements

**Incident Response Team (IRT)**
- **Team Composition**: Technical experts, management, legal, communications
- **Roles and Responsibilities**: Clearly defined for each team member
- **Authority Levels**: What decisions team can make
- **Communication Plan**: Internal and external communication procedures

**Incident Classification**
- **Severity Levels**:
  - **Critical**: Immediate threat to operations, significant impact
  - **High**: Significant impact, requires immediate attention
  - **Medium**: Moderate impact, requires attention within timeframe
  - **Low**: Minimal impact, routine handling
- **Categories**: Malware, unauthorized access, DoS, policy violations, etc.

## Threat Detection and Monitoring
**Detection Methods**
- **Signature-based**: Known patterns of malicious activity
- **Anomaly-based**: Deviations from normal behavior
- **Behavior-based**: Specific behavioral patterns
- **Heuristic**: Rule-based detection of suspicious activity

**Monitoring Strategies**
- **Continuous Monitoring**: 24/7 monitoring of security events
- **Periodic Reviews**: Regular review of logs and reports
- **Real-time Alerting**: Immediate notification of critical events
- **Threat Hunting**: Proactive search for threats not detected by automated tools

**Common Detection Tools**
- **IDS/IPS**: Network intrusion detection/prevention systems
- **HIDS**: Host-based intrusion detection systems
- **Log Analyzers**: Tools for parsing and analyzing log files
- **Network Traffic Analyzers**: Monitor network traffic for anomalies
- **Endpoint Monitoring**: Monitor endpoint activities and behaviors

## Digital Forensics
**Forensic Principles**
- **Chain of Custody**: Document handling of evidence
- **Evidence Integrity**: Ensure evidence isn't altered
- **Legal Compliance**: Follow legal requirements for evidence collection
- **Documentation**: Thorough documentation of all actions

**Forensic Process**
1. **Identification**: Recognize potential evidence
2. **Preservation**: Secure and preserve evidence
3. **Collection**: Gather evidence using proper methods
4. **Examination**: Analyze evidence for relevant information
5. **Analysis**: Interpret findings, draw conclusions
6. **Reporting**: Document findings and methodology
7. **Presentation**: Present findings as needed

**Forensic Tools**
- **Disk Imaging**: FTK Imager, dd, dc3dd
- **Memory Analysis**: Volatility, Rekall
- **Network Forensics**: Wireshark, NetworkMiner
- **Mobile Forensics**: Cellebrite, Oxygen Forensic
- **Live Analysis**: F-Response, KAPE

## Malware Analysis
**Types of Malware Analysis**
- **Static Analysis**: Analyze without executing (file properties, strings, disassembly)
- **Dynamic Analysis**: Execute in controlled environment (sandbox)
- **Behavioral Analysis**: Observe what malware does
- **Code Analysis**: Reverse engineer malware code

**Analysis Environment**
- **Sandboxes**: Isolated environments for safe execution
- **Virtual Machines**: For analysis and containment
- **Analysis Tools**: IDA Pro, Ghidra, OllyDbg, x64dbg
- **Online Services**: VirusTotal, Hybrid Analysis, ANY.RUN

**Common Malware Analysis Steps**
1. **Initial Triage**: Basic information gathering
2. **Static Analysis**: Examine file without execution
3. **Dynamic Analysis**: Execute in controlled environment
4. **Code Analysis**: Reverse engineer if needed
5. **Reporting**: Document findings and indicators

## Threat Intelligence
**Types of Threat Intelligence**
- **Strategic**: High-level trends, risks, threat actors
- **Tactical**: TTPs (Tactics, Techniques, Procedures) of threat actors
- **Operational**: Specific campaigns, tools, infrastructure
- **Technical**: Indicators of compromise (IPs, domains, hashes)

**Threat Intelligence Lifecycle**
1. **Planning and Direction**: Define requirements
2. **Collection**: Gather data from sources
3. **Processing**: Organize and structure data
4. **Analysis**: Extract meaning and insights
5. **Dissemination**: Share intelligence with stakeholders
6. **Feedback**: Evaluate usefulness, refine requirements

**Threat Intelligence Sources**
- **Open Source**: Publicly available information
- **Commercial**: Paid threat intelligence feeds
- **Community**: Information sharing groups (ISACs)
- **Internal**: Organizational data and incidents
- **Government**: Official threat reports and alerts

## Security Automation
**SOAR (Security Orchestration, Automation, and Response)**
- **Orchestration**: Integration of different security tools
- **Automation**: Automated response to security events
- **Response**: Coordinated incident response
- **Benefits**: Faster response, reduced workload, consistency

**Common Automation Use Cases**
- **Alert Triage**: Automate initial alert analysis
- **Incident Response**: Automated containment actions
- **Threat Hunting**: Automated data collection and analysis
- **Compliance Reporting**: Automated evidence collection

**Automation Tools**
- **SOAR Platforms**: Splunk Phantom, IBM Resilient, Palo Alto Cortex
- **Scripting**: Python, PowerShell for custom automation
- **Workflow Automation**: Tools for creating automated workflows
- **API Integration**: Connecting different security tools

## Business Continuity and Disaster Recovery
**Business Impact Analysis (BIA)**
- **Identify Critical Functions**: What must continue during disruption
- **Determine Impact**: Financial, operational, reputational
- **Recovery Requirements**: RTO, RPO, resources needed
- **Prioritization**: Order of recovery based on criticality

**Recovery Strategies**
- **Data Backup**: Regular backups, testing restoration
- **Alternate Sites**: Hot, warm, cold sites for operations
- **Cloud Services**: Cloud-based disaster recovery
- **Communication Plans**: How to communicate during disruptions

**Testing and Maintenance**
- **Tabletop Exercises**: Discussion-based walkthroughs
- **Functional Tests**: Test specific recovery procedures
- **Full-scale Tests**: Complete disaster recovery simulation
- **Regular Updates**: Keep plans current with changes

## Compliance and Reporting
**Common Compliance Requirements**
- **GDPR**: Data protection and privacy (EU)
- **HIPAA**: Healthcare data protection (US)
- **PCI DSS**: Payment card security
- **SOX**: Financial reporting controls
- **ISO 27001**: Information security management

**Security Reporting**
- **Executive Reports**: High-level overview for management
- **Technical Reports**: Detailed findings for technical staff
- **Compliance Reports**: Evidence of compliance with requirements
- **Incident Reports**: Documentation of security incidents

**Audit Preparation**
- **Evidence Collection**: Gather evidence of security controls
- **Documentation Review**: Ensure policies and procedures are documented
- **Control Testing**: Test effectiveness of security controls
- **Remediation Tracking**: Track and address audit findings

## Career Development in Security Operations
**Skill Development**
- **Technical Skills**: Networking, systems, security tools
- **Analytical Skills**: Critical thinking, problem solving
- **Communication Skills**: Reporting, documentation, presentation
- **Soft Skills**: Teamwork, stress management, adaptability

**Certifications**
- **Entry Level**: CompTIA Security+, GIAC GSEC
- **Operations Focused**: GIAC GCIA, EC-Council CHFI
- **Management**: CISSP, CISM, GIAC GMON
- **Specialized**: GIAC GREM (malware), GIAC GCFA (forensics)

**Career Paths**
- **Security Analyst**: Monitoring, analysis, incident response
- **Threat Hunter**: Proactive threat detection
- **Forensics Analyst**: Digital evidence analysis
- **SOC Manager**: Oversee security operations
- **Threat Intelligence Analyst**: Research and analysis of threats

## Best Practices Summary
**For Security Operations**
- Implement layered defense strategy
- Continuous monitoring and improvement
- Regular training and skill development
- Documented processes and procedures
- Metrics-driven performance management

**For Incident Response**
- Prepare before incidents occur
- Clear roles and responsibilities
- Practice through exercises and simulations
- Learn from every incident
- Continuous improvement of processes

**For Career Development**
- Continuous learning and skill development
- Hands-on practice and experience
- Networking with other professionals
- Contribution to security community
- Balancing technical and soft skills`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does SOC stand for?",
          options: ["Security Operations Center", "System Operations Center", "Security Operations Control", "System Operations Control"],
          correctAnswer: 0,
          explanation: "SOC stands for Security Operations Center - centralized unit that deals with security issues on an organizational level."
        },
        {
          id: 2,
          question: "What does SIEM stand for?",
          options: ["Security Information and Event Management", "System Information and Event Monitoring", "Security Intelligence and Event Management", "System Intelligence and Event Monitoring"],
          correctAnswer: 0,
          explanation: "SIEM stands for Security Information and Event Management - technology that provides real-time analysis of security alerts."
        },
        {
          id: 3,
          question: "What does MTTD stand for in security metrics?",
          options: ["Mean Time to Detect", "Mean Time to Defend", "Maximum Time to Detect", "Minimum Time to Detect"],
          correctAnswer: 0,
          explanation: "MTTD stands for Mean Time to Detect - average time taken to detect security incidents."
        },
        {
          id: 4,
          question: "What is the first phase in the NIST incident response lifecycle?",
          options: ["Detection", "Preparation", "Containment", "Eradication"],
          correctAnswer: 1,
          explanation: "Preparation is the first phase in the NIST incident response lifecycle - developing policies, plans, and teams before incidents occur."
        },
        {
          id: 5,
          question: "What does IRT stand for?",
          options: ["Incident Response Team", "Incident Recovery Team", "Initial Response Team", "Incident Resolution Team"],
          correctAnswer: 0,
          explanation: "IRT stands for Incident Response Team - group responsible for responding to security incidents."
        },
        {
          id: 6,
          question: "What is threat hunting?",
          options: ["Hunting for threats in the wild", "Proactive search for threats not detected by automated tools", "Searching for threat actors", "Hunting malware"],
          correctAnswer: 1,
          explanation: "Threat hunting is the proactive search for threats and malicious activity that evade existing security controls."
        },
        {
          id: 7,
          question: "What does EDR stand for?",
          options: ["Endpoint Detection and Response", "External Detection and Response", "Enterprise Detection and Response", "Enhanced Detection and Response"],
          correctAnswer: 0,
          explanation: "EDR stands for Endpoint Detection and Response - solutions that record endpoint activities and provide response capabilities."
        },
        {
          id: 8,
          question: "What is chain of custody in digital forensics?",
          options: ["Chain of command", "Documentation of evidence handling to prove integrity", "Chain of evidence", "Custody chain for evidence"],
          correctAnswer: 1,
          explanation: "Chain of custody documents the handling of evidence from collection through analysis to presentation in court."
        },
        {
          id: 9,
          question: "What does SOAR stand for?",
          options: ["Security Orchestration, Automation, and Response", "System Orchestration and Response", "Security Operations and Response", "System Operations, Automation, and Response"],
          correctAnswer: 0,
          explanation: "SOAR stands for Security Orchestration, Automation, and Response - technologies that enable automation of security operations."
        },
        {
          id: 10,
          question: "What does BIA stand for in business continuity?",
          options: ["Business Impact Analysis", "Business Intelligence Assessment", "Business Incident Analysis", "Business Integration Assessment"],
          correctAnswer: 0,
          explanation: "BIA stands for Business Impact Analysis - process that determines critical business functions and recovery requirements."
        },
        {
          id: 11,
          question: "What is static malware analysis?",
          options: ["Analyzing malware without executing it", "Static analysis of malware behavior", "Analysis of static malware", "Malware analysis in static environment"],
          correctAnswer: 0,
          explanation: "Static malware analysis examines malware without executing it, looking at file properties, strings, and code structure."
        },
        {
          id: 12,
          question: "What does MTTR stand for?",
          options: ["Mean Time to Respond", "Mean Time to Recover", "Maximum Time to Respond", "Minimum Time to Respond"],
          correctAnswer: 0,
          explanation: "MTTR stands for Mean Time to Respond - average time taken to respond to and resolve security incidents."
        },
        {
          id: 13,
          question: "What are TTPs in threat intelligence?",
          options: ["Tactics, Techniques, and Procedures", "Tools, Techniques, and Processes", "Threats, Tactics, and Procedures", "Tactics, Tools, and Processes"],
          correctAnswer: 0,
          explanation: "TTPs stand for Tactics, Techniques, and Procedures - patterns of activities and methods associated with specific threat actors."
        },
        {
          id: 14,
          question: "What is a sandbox in malware analysis?",
          options: ["Sand container", "Isolated environment for safe execution of malware", "Sand analysis box", "Malware sand environment"],
          correctAnswer: 1,
          explanation: "A sandbox is an isolated environment where malware can be executed safely for analysis without risking the host system."
        },
        {
          id: 15,
          question: "What does RTO stand for in disaster recovery?",
          options: ["Recovery Time Objective", "Return To Operations", "Recovery Target Objective", "Response Time Objective"],
          correctAnswer: 0,
          explanation: "RTO stands for Recovery Time Objective - maximum acceptable downtime after a failure or disaster."
        },
        {
          id: 16,
          question: "What are IOCs in threat intelligence?",
          options: ["Indicators of Compromise", "Indicators of Concern", "Indicators of Cyberattack", "Indicators of Compromise"],
          correctAnswer: 0,
          explanation: "IOCs stand for Indicators of Compromise - forensic artifacts that indicate potentially malicious activity on a system or network."
        },
        {
          id: 17,
          question: "What is dynamic malware analysis?",
          options: ["Dynamic analysis techniques", "Executing malware in controlled environment to observe behavior", "Analysis of dynamic malware", "Malware analysis with dynamic tools"],
          correctAnswer: 1,
          explanation: "Dynamic malware analysis involves executing malware in a controlled environment to observe its behavior and interactions."
        },
        {
          id: 18,
          question: "What does RPO stand for?",
          options: ["Recovery Point Objective", "Recovery Process Objective", "Return Point Objective", "Restoration Point Objective"],
          correctAnswer: 0,
          explanation: "RPO stands for Recovery Point Objective - maximum acceptable amount of data loss measured in time."
        },
        {
          id: 19,
          question: "What is threat intelligence?",
          options: ["Intelligence about threats", "Evidence-based knowledge about threats that helps inform decisions", "Threat information", "Intelligence gathering on threats"],
          correctAnswer: 1,
          explanation: "Threat intelligence is evidence-based knowledge about existing or emerging threats that helps inform security decisions."
        },
        {
          id: 20,
          question: "What does CHFI stand for in cybersecurity certifications?",
          options: ["Certified Hacking Forensic Investigator", "Certified Host Forensic Investigator", "Computer Hacking Forensic Investigator", "Certified Hacking and Forensic Investigation"],
          correctAnswer: 2,
          explanation: "CHFI stands for Computer Hacking Forensic Investigator - EC-Council certification for digital forensics."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Cybersecurity Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Cybersecurity Certificate course",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      // Questions from Module 1 (7 questions)
      {
        id: 1,
        question: "What are the three components of the CIA triad in cybersecurity?",
        options: ["Confidentiality, Integrity, Availability", "Confidence, Information, Access", "Control, Inspection, Authorization", "Cyber, Internet, Access"],
        correctAnswer: 0,
        explanation: "The CIA triad consists of Confidentiality, Integrity, and Availability - core principles of information security.",
        module: 1
      },
      {
        id: 2,
        question: "What is the average global cost of a data breach according to recent statistics?",
        options: ["$1.2 million", "$4.45 million", "$8.7 million", "$12.5 million"],
        correctAnswer: 1,
        explanation: "The average global cost of a data breach is $4.45 million according to recent industry reports.",
        module: 1
      },
      {
        id: 3,
        question: "What type of malware encrypts files and demands payment for decryption?",
        options: ["Virus", "Worm", "Trojan", "Ransomware"],
        correctAnswer: 3,
        explanation: "Ransomware encrypts files and demands payment (ransom) for the decryption key.",
        module: 1
      },
      {
        id: 4,
        question: "What does DDoS stand for?",
        options: ["Direct Denial of Service", "Distributed Denial of Service", "Digital Denial of System", "Data Denial of Service"],
        correctAnswer: 1,
        explanation: "DDoS stands for Distributed Denial of Service - attack from multiple systems to overwhelm a target.",
        module: 1
      },
      {
        id: 5,
        question: "What is the principle of least privilege?",
        options: ["Users have all privileges", "Users have minimum access necessary", "Only administrators have privileges", "Privileges based on seniority"],
        correctAnswer: 1,
        explanation: "Least privilege means users and systems have only the minimum access necessary to perform their functions.",
        module: 1
      },
      {
        id: 6,
        question: "What does APT stand for in cybersecurity?",
        options: ["Advanced Persistent Threat", "Automated Protection Technology", "Advanced Protection Tool", "Automated Persistent Threat"],
        correctAnswer: 0,
        explanation: "APT stands for Advanced Persistent Threat - sophisticated, long-term targeted attacks.",
        module: 1
      },
      {
        id: 7,
        question: "What does NIST stand for in cybersecurity frameworks?",
        options: ["National Institute of Standards and Technology", "Network Information Security Technology", "National Internet Security Team", "Network Infrastructure Security Tools"],
        correctAnswer: 0,
        explanation: "NIST stands for National Institute of Standards and Technology, which publishes cybersecurity frameworks.",
        module: 1
      },

      // Questions from Module 2 (7 questions)
      {
        id: 8,
        question: "What is the main function of a router?",
        options: ["Connect devices within same network", "Connect different networks and route traffic", "Filter network traffic", "Assign IP addresses"],
        correctAnswer: 1,
        explanation: "Routers connect different networks and route traffic between them based on IP addresses.",
        module: 2
      },
      {
        id: 9,
        question: "Which OSI layer handles IP addresses and routing?",
        options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        correctAnswer: 2,
        explanation: "The Network Layer (Layer 3) handles IP addresses, routing, and logical addressing.",
        module: 2
      },
      {
        id: 10,
        question: "Which port is used for HTTPS secure web traffic?",
        options: ["Port 80", "Port 443", "Port 21", "Port 25"],
        correctAnswer: 1,
        explanation: "HTTPS uses port 443 for encrypted web traffic, while HTTP uses port 80.",
        module: 2
      },
      {
        id: 11,
        question: "What is the main difference between IDS and IPS?",
        options: ["IDS blocks attacks, IPS only detects", "IDS detects and alerts, IPS detects and blocks", "IDS is hardware, IPS is software", "No difference, they are the same"],
        correctAnswer: 1,
        explanation: "IDS detects and alerts, while IPS detects and blocks attacks.",
        module: 2
      },
      {
        id: 12,
        question: "Which wireless encryption protocol should be avoided due to weak security?",
        options: ["WPA2", "WPA3", "WEP", "AES"],
        correctAnswer: 2,
        explanation: "WEP has weak encryption and should be avoided due to security vulnerabilities.",
        module: 2
      },
      {
        id: 13,
        question: "What does SIEM stand for?",
        options: ["Security Information and Event Management", "System Integration and Event Monitoring", "Security Integration and Event Management", "System Information and Event Monitoring"],
        correctAnswer: 0,
        explanation: "SIEM stands for Security Information and Event Management - collects and analyzes security events.",
        module: 2
      },
      {
        id: 14,
        question: "Which tool is used for packet analysis and network troubleshooting?",
        options: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
        correctAnswer: 1,
        explanation: "Wireshark is a packet analyzer used for network troubleshooting and analysis.",
        module: 2
      },

      // Questions from Module 3 (7 questions)
      {
        id: 15,
        question: "What does DAC stand for in access control models?",
        options: ["Digital Access Control", "Discretionary Access Control", "Direct Access Control", "Dynamic Access Control"],
        correctAnswer: 1,
        explanation: "DAC stands for Discretionary Access Control - owners control access to their resources.",
        module: 3
      },
      {
        id: 16,
        question: "What is the purpose of User Account Control (UAC) in Windows?",
        options: ["User authentication", "Prompt for administrative actions", "User account creation", "User password management"],
        correctAnswer: 1,
        explanation: "UAC prompts users for permission before performing actions that could affect system security.",
        module: 3
      },
      {
        id: 17,
        question: "Which Linux security module provides mandatory access control?",
        options: ["sudo", "iptables", "SELinux", "PAM"],
        correctAnswer: 2,
        explanation: "SELinux provides mandatory access control for Linux systems.",
        module: 3
      },
      {
        id: 18,
        question: "What is the 3-2-1 rule for backups?",
        options: ["3 hours, 2 days, 1 week backup schedule", "3 copies, 2 different media, 1 offsite", "3 full backups, 2 incremental, 1 differential", "3 servers, 2 locations, 1 administrator"],
        correctAnswer: 1,
        explanation: "3-2-1 backup rule: Keep 3 copies, on 2 different media, with 1 copy offsite.",
        module: 3
      },
      {
        id: 19,
        question: "What does PAM stand for in Linux authentication?",
        options: ["Privileged Access Management", "Pluggable Authentication Modules", "Password Authentication Method", "Protected Access Mechanism"],
        correctAnswer: 1,
        explanation: "PAM stands for Pluggable Authentication Modules - flexible authentication framework.",
        module: 3
      },
      {
        id: 20,
        question: "What is FileVault in macOS?",
        options: ["File manager", "Full disk encryption", "Firewall", "File sharing service"],
        correctAnswer: 1,
        explanation: "FileVault is Apple's full disk encryption feature for macOS.",
        module: 3
      },
      {
        id: 21,
        question: "What is the minimum recommended password length for security?",
        options: ["6 characters", "8 characters", "12 characters", "16 characters"],
        correctAnswer: 2,
        explanation: "Modern security best practices recommend minimum 12-character passwords.",
        module: 3
      },

      // Questions from Module 4 (6 questions)
      {
        id: 22,
        question: "What is the main difference between symmetric and asymmetric cryptography?",
        options: ["Symmetric is faster", "Symmetric uses same key for encryption and decryption, asymmetric uses different keys", "Asymmetric is older", "Symmetric is more secure"],
        correctAnswer: 1,
        explanation: "Symmetric uses same key for both, asymmetric uses public/private key pair.",
        module: 4
      },
      {
        id: 23,
        question: "What does AES stand for?",
        options: ["Advanced Encryption Standard", "Asymmetric Encryption System", "Automated Encryption Service", "Advanced Encryption System"],
        correctAnswer: 0,
        explanation: "AES stands for Advanced Encryption Standard, widely used symmetric encryption.",
        module: 4
      },
      {
        id: 24,
        question: "What property of hash functions makes it hard to find two different inputs with same hash?",
        options: ["Pre-image resistance", "Collision resistance", "Avalanche effect", "Deterministic property"],
        correctAnswer: 1,
        explanation: "Collision resistance means hard to find two inputs with same hash output.",
        module: 4
      },
      {
        id: 25,
        question: "What does PKI stand for?",
        options: ["Private Key Infrastructure", "Public Key Infrastructure", "Personal Key Information", "Public Key Information"],
        correctAnswer: 1,
        explanation: "PKI stands for Public Key Infrastructure - manages digital certificates.",
        module: 4
      },
      {
        id: 26,
        question: "What is salting in password security?",
        options: ["Adding salt to password storage", "Adding random data to password before hashing", "Seasoning passwords", "Salting hash outputs"],
        correctAnswer: 1,
        explanation: "Salting adds random data to passwords before hashing to prevent attacks.",
        module: 4
      },
      {
        id: 27,
        question: "What does ECC stand for in cryptography?",
        options: ["Encrypted Communication Channel", "Elliptic Curve Cryptography", "Enhanced Cryptographic Code", "Enterprise Cryptography Control"],
        correctAnswer: 1,
        explanation: "ECC stands for Elliptic Curve Cryptography - provides security with smaller keys.",
        module: 4
      },

      // Questions from Module 5 (6 questions)
      {
        id: 28,
        question: "What does OWASP stand for?",
        options: ["Open Web Application Security Project", "Organization for Web Application Security Protection", "Online Web Application Security Program", "Open Website Application Security Protocol"],
        correctAnswer: 0,
        explanation: "OWASP stands for Open Web Application Security Project.",
        module: 5
      },
      {
        id: 29,
        question: "What is SQL Injection?",
        options: ["Injecting SQL databases", "Malicious SQL code inserted into database queries", "SQL database attacks", "SQL code injection into applications"],
        correctAnswer: 1,
        explanation: "SQL Injection involves inserting malicious SQL code into database queries.",
        module: 5
      },
      {
        id: 30,
        question: "What does XSS stand for?",
        options: ["Cross-Site Scripting", "Extra Security System", "Extended Security Service", "Cross-System Security"],
        correctAnswer: 0,
        explanation: "XSS stands for Cross-Site Scripting - injecting malicious scripts into web pages.",
        module: 5
      },
      {
        id: 31,
        question: "What does SAST stand for in security testing?",
        options: ["Static Application Security Testing", "System Application Security Testing", "Software Application Security Testing", "Security Application Static Testing"],
        correctAnswer: 0,
        explanation: "SAST stands for Static Application Security Testing - analyzing source code.",
        module: 5
      },
      {
        id: 32,
        question: "What is CSRF?",
        options: ["Cross-Site Request Forgery", "Cross-Site Response Forgery", "Client-Side Request Forgery", "Cross-Site Resource Forgery"],
        correctAnswer: 0,
        explanation: "CSRF stands for Cross-Site Request Forgery.",
        module: 5
      },
      {
        id: 33,
        question: "What does WAF stand for?",
        options: ["Web Application Firewall", "Website Application Filter", "Web Access Firewall", "Website Attack Filter"],
        correctAnswer: 0,
        explanation: "WAF stands for Web Application Firewall.",
        module: 5
      },

      // Questions from Module 6 (7 questions)
      {
        id: 34,
        question: "What does SOC stand for?",
        options: ["Security Operations Center", "System Operations Center", "Security Operations Control", "System Operations Control"],
        correctAnswer: 0,
        explanation: "SOC stands for Security Operations Center.",
        module: 6
      },
      {
        id: 35,
        question: "What does SIEM stand for?",
        options: ["Security Information and Event Management", "System Information and Event Monitoring", "Security Intelligence and Event Management", "System Intelligence and Event Monitoring"],
        correctAnswer: 0,
        explanation: "SIEM stands for Security Information and Event Management.",
        module: 6
      },
      {
        id: 36,
        question: "What does MTTD stand for in security metrics?",
        options: ["Mean Time to Detect", "Mean Time to Defend", "Maximum Time to Detect", "Minimum Time to Detect"],
        correctAnswer: 0,
        explanation: "MTTD stands for Mean Time to Detect.",
        module: 6
      },
      {
        id: 37,
        question: "What is the first phase in the NIST incident response lifecycle?",
        options: ["Detection", "Preparation", "Containment", "Eradication"],
        correctAnswer: 1,
        explanation: "Preparation is first phase in NIST incident response lifecycle.",
        module: 6
      },
      {
        id: 38,
        question: "What does IRT stand for?",
        options: ["Incident Response Team", "Incident Recovery Team", "Initial Response Team", "Incident Resolution Team"],
        correctAnswer: 0,
        explanation: "IRT stands for Incident Response Team.",
        module: 6
      },
      {
        id: 39,
        question: "What does EDR stand for?",
        options: ["Endpoint Detection and Response", "External Detection and Response", "Enterprise Detection and Response", "Enhanced Detection and Response"],
        correctAnswer: 0,
        explanation: "EDR stands for Endpoint Detection and Response.",
        module: 6
      },
      {
        id: 40,
        question: "What does SOAR stand for?",
        options: ["Security Orchestration, Automation, and Response", "System Orchestration and Response", "Security Operations and Response", "System Operations, Automation, and Response"],
        correctAnswer: 0,
        explanation: "SOAR stands for Security Orchestration, Automation, and Response.",
        module: 6
      }
    ]
  }
};

export default cybersecurityCertificateCourse;
