#!/bin/bash

#download node and npm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

nvm install node


DIR="/home/ec2-user/user-app"

if [ -d "$DIR"]; then
    echo "${DIR} exists"
else 
    echo "Create ${DIR} directory"
    mkdir ${DIR}
fi