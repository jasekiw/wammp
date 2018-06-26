## WAMMP 
Windows - Apache - Mysql - Multi PHP


#### Goal
Have switchable php installs for windows local development.






#### Research so far
Install dependencies with chocolatey
```cmd
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php53"' --version 5.3.29 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php54"' --version 5.4.45 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php55"' --version 5.5.38 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php56"' --version 5.6.36 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php70"' --version 7.0.30 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php71"' --version 7.1.19 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php72"' --version 7.2.6 -my
choco install apache-httpd --params '"/installLocation:C:\wammp /port:80"' --version 2.4.33 -my
```

