#!/bin/bash

sudo chmod -R 777 /home/ec2-user/user-app

cd /home/ec2-user/user-app


export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

#start our node app in the background
node index.js > index.out.log 2> index.err.log < /dev/null & 