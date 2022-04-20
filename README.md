# Raspberry Pi Web Server
>Goal: To set up an easy HTML web server on a Raspberry Pi

## Setup
You will need:

1. Raspberry Pi (Preferred 2,3,or 0, the 4 and 400 can be used for better things)
2. Node.js installed on said Pi

`sudo apt install nodejs`
 OR install it via <a href="https://github.com/botspot/pi-apps">Pi-Apps</a>

 How to install:

 1. `git clone github.com/pxlmastr00/raspberry-pi-web-server`
 2. `cd Raspberry-Pi-Web-Server`
 3. `bash install.sh`
 
 You can now delete the download.

 4. `cd /home/pi/server`

 ## Making your website
 1. Now, we will make the website. Navigate into 'site' and go to `index.html`. This is your site. Feel free to add CSS and JavaScript. 

 2. Starting the website:

Let's start the server. Navigate to `/home/pi/server` and run: 
```
node index.js
```

3. Open up a terminal tab and run: 
```
hostname -I
```
4. Your website will be the IP followed by :3000.