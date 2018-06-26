## WAMMP 
Windows - Apache - Mysql - Multi PHP


#### Goal
Have switchable php installs for windows local development.






#### Research so far
Install dependencies with chocolatey
```cmd
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php56"' --version 5.6.36 -my
choco install php --params '"/ThreadSafe /InstallDir:C:\wammp\php70"' --version 7.0.30 -my
choco install apache-httpd --params '"/installLocation:C:\wammp /port:80"' --version 2.4.33 -my
```

