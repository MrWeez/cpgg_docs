"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3873:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const o="tableOfContentsInline_0DDH";function r(e){let{toc:n,isChild:t}=e;return n.length?a.createElement("ul",{className:t?"":"table-of-contents"},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(r,{isChild:!0,toc:e.children}))))):null}const l=function(e){let{toc:n}=e;return a.createElement("div",{className:(0,i.Z)(o)},a.createElement(r,{toc:n}))}},5602:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),o=t(3873);const r={sidebar_position:1},l="Getting started",s={unversionedId:"v0.8/Installation/getting-started",id:"v0.8/Installation/getting-started",isDocsHomePage:!1,title:"Getting started",description:"It is recommended that you have some sort of Linux and MariaDB experience before installing this.",source:"@site/docs/v0.8/Installation/getting-started.md",sourceDirName:"v0.8/Installation",slug:"/v0.8/Installation/getting-started",permalink:"/docs/v0.8/Installation/getting-started",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/v0.8/Installation/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Additional Configuration",permalink:"/docs/v0.8/Installation/additional-configuration"}},d=[{value:"Dependencies",id:"dependencies",children:[{value:"Example Dependency Installation",id:"example-dependency-installation",children:[]},{value:"Extra Dependency Used on this Dashboard",id:"extra-dependency-used-on-this-dashboard",children:[]},{value:"Installing Composer",id:"installing-composer",children:[]}]},{value:"Download Files",id:"download-files",children:[]},{value:"Basic Setup",id:"basic-setup",children:[{value:"Database Setup",id:"database-setup",children:[]}]},{value:"Web server Configuration",id:"web-server-configuration",children:[]},{value:"How to add this config",id:"how-to-add-this-config",children:[{value:"Example Nginx Config",id:"example-nginx-config",children:[]},{value:"Enable Configuration",id:"enable-configuration",children:[]},{value:"Adding SSL",id:"adding-ssl",children:[]}]},{value:"Panel Installation",id:"panel-installation",children:[{value:"Set Permissions",id:"set-permissions",children:[]},{value:"Running the installer",id:"running-the-installer",children:[]}]},{value:"Queue Listeners",id:"queue-listeners",children:[{value:"Crontab Configuration",id:"crontab-configuration",children:[]},{value:"Create Queue Worker",id:"create-queue-worker",children:[]}]}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended that you have some sort of Linux and MariaDB experience before installing this."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Warning, The dashboard is currently in pre-release and may contain some bugs. Use This dashboard at your own risk."))),(0,i.kt)(o.Z,{toc:d,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PHP ",(0,i.kt)("inlineCode",{parentName:"li"},"7.4")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"8.0")," (recommended, ",(0,i.kt)("inlineCode",{parentName:"li"},"8.1")," will not work) with the following extensions: ",(0,i.kt)("inlineCode",{parentName:"li"},"cli"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"openssl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gd"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PDO"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mbstring"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenizer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bcmath"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"xml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dom"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zip"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"fpm")," if you are planning to use NGINX."),(0,i.kt)("li",{parentName:"ul"},"MySQL ",(0,i.kt)("inlineCode",{parentName:"li"},"5.7.22")," or higher (MySQL ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," recommended) ",(0,i.kt)("strong",{parentName:"li"},"or")," MariaDB ",(0,i.kt)("inlineCode",{parentName:"li"},"10.2")," or higher."),(0,i.kt)("li",{parentName:"ul"},"Redis (",(0,i.kt)("inlineCode",{parentName:"li"},"redis-server"),")"),(0,i.kt)("li",{parentName:"ul"},"A web server (Apache, NGINX, Caddy, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unzip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"composer")," v2")),(0,i.kt)("h3",{id:"example-dependency-installation"},"Example Dependency Installation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, please check that you also install PHP 8.0 or 7.4!")),(0,i.kt)("p",null,"The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP, Redis, and MariaDB\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\nadd-apt-repository -y ppa:chris-lea/redis-server\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Add universe repository if you are on Ubuntu 18.04\napt-add-repository universe\n\n# Install Dependencies\napt -y install php8.0 php8.0-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server\n')),(0,i.kt)("h3",{id:"extra-dependency-used-on-this-dashboard"},"Extra Dependency Used on this Dashboard"),(0,i.kt)("p",null,"You need to install this, use the appropriate PHP version (php -v)\nExtra dependency used for handling currency's"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt -y install php8.0-intl\n")),(0,i.kt)("h3",{id:"installing-composer"},"Installing Composer"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, you can skip this step!")),(0,i.kt)("p",null,"Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n")),(0,i.kt)("h2",{id:"download-files"},"Download Files"),(0,i.kt)("p",null,"The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel && cd /var/www/controlpanel\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ControlPanel-gg/dashboard.git ./\n")),(0,i.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,i.kt)("p",null,"Now that all the files have been downloaded we need to configure some core aspects of the Panel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You will need a database setup and a database user with the correct permissions created for that database before"),"\n",(0,i.kt)("strong",{parentName:"p"},"continuing any further.")),(0,i.kt)("h3",{id:"database-setup"},"Database Setup"),(0,i.kt)("p",null,"To make a database and database user, you can follow this guide.\nThis is for MariaDB. Please change the USE_YOUR_OWN_PASSWORD part to your password. Also, 127.0.0.1 is for localhost. Please have basic knowledge of Linux before attempting this. Use at your own responsibility."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nEXIT;\n")),(0,i.kt)("h2",{id:"web-server-configuration"},"Web server Configuration"),(0,i.kt)("p",null,"You should paste the contents of the file below, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"<domain>")," with your domain name being used in a file called controlpanel.conf and place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/"),", or \u2014 if on CentOS, ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/.")),(0,i.kt)("h2",{id:"how-to-add-this-config"},"How to add this config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /etc/nginx/sites-available/\nnano controlpanel.conf\n")),(0,i.kt)("h3",{id:"example-nginx-config"},"Example Nginx Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n        listen 80;\n        root /var/www/controlpanel/public;\n        index index.php index.html index.htm index.nginx-debian.html;\n        server_name YOUR.DOMAIN.COM;\n\n        location / {\n                try_files $uri $uri/ /index.php?$query_string;\n        }\n\n        location ~ \\.php$ {\n                include snippets/fastcgi-php.conf;\n                fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;\n        }\n\n        location ~ /\\.ht {\n                deny all;\n        }\n}\n")),(0,i.kt)("h3",{id:"enable-configuration"},"Enable Configuration"),(0,i.kt)("p",null,"The final step is to enable your NGINX configuration and restart it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/controlpanel.conf /etc/nginx/sites-enabled/controlpanel.conf\n\n# Check for nginx errors\nsudo nginx -t\n\n# You need to restart nginx regardless of OS. only do this you haven't received any errors\nsystemctl restart nginx\n")),(0,i.kt)("h3",{id:"adding-ssl"},"Adding SSL"),(0,i.kt)("p",null,"There are many ways to add SSL to your site. A simple solution is to use Cert bot from Let\u2019s Encrypt. Cert bot will automatically install the certificates for you and keep your SSL certifications up to date!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n#install certbot for nginx\nsudo apt install -y certbot\nsudo apt install -y python3-certbot-nginx\n#install certificates\nsudo certbot --nginx -d yourdomain.com\n")),(0,i.kt)("h2",{id:"panel-installation"},"Panel Installation"),(0,i.kt)("p",null,"First, we will have to install all composer packages.\nFor this, navigate into your ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/controlpanel")," again and run the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer install --no-dev --optimize-autoloader\n")),(0,i.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,i.kt)("p",null,"The last step in the installation process is to set the correct permissions on the Panel files so that the web server can\nuse them correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R www-data:www-data /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using NGINX on CentOS:\nchown -R nginx:nginx /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using Apache on CentOS\nchown -R apache:apache /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n****\n")),(0,i.kt)("p",null,"Once this is done, you should be able to access the dashboard via your web browser."),(0,i.kt)("h3",{id:"running-the-installer"},"Running the installer"),(0,i.kt)("h4",{id:"navigate-to-httpsyourdomaincominstall-to-run-the-web-installer-and-follow-the-steps"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"h4"},"https://yourdomain.com/install")," to run the Web-Installer and follow the steps."),(0,i.kt)("p",null,"If you encounter problems with the email setup, you can use the skip button and set it up later."),(0,i.kt)("p",null,"Once the Web-Installer has been completed, you will be navigated to the login-page of your installation.",(0,i.kt)("br",null)),(0,i.kt)("h4",{id:"dont-forget-to-complete-the-steps-listed-below-here"},"Don't forget to complete the steps listed below here."),(0,i.kt)("h2",{id:"queue-listeners"},"Queue Listeners"),(0,i.kt)("h3",{id:"crontab-configuration"},"Crontab Configuration"),(0,i.kt)("p",null,"The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks such as billing users hourly and suspending unpaid servers. To open the crontab run: ",(0,i.kt)("inlineCode",{parentName:"p"},"crontab -e")," and paste the following configuration into crontab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1\n")),(0,i.kt)("h3",{id:"create-queue-worker"},"Create Queue Worker"),(0,i.kt)("p",null,"Next, you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard."),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"controlpanel.service")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," with the contents below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Controlpanel Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Controlpanel Queue Worker\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",null,"Finally, enable the service and set it to boot on machine start."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now controlpanel.service\n")))}c.isMDXComponent=!0},6010:(e,n,t)=>{function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:()=>i});const i=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}}}]);