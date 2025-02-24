#!/usr/bin/env bash

# Do not proceed if a deployment fails.
set -e

# All the coronastatus sites that are hosted on DO.
declare -a HOSTS=(
    'coronastatus.es'
    'coronastatus.co'
    'coronastatus.fr'
    'coronastatus.mx'
    'coronastatus.us'
    'coronastatus.org.ua'
    'coronastatusau.org'
    'coronastatusmt.com'
    'coronastatus.it'

#   Ready, but nameservers not yet pointed to DigitalOcean
#   'coronastatus.ng'

#   Adriaan told med to wait with deploying NL.
#   'coronastatus.nl'

#   Deploy script is a little differnt for the Norwegian site.
#   'coronastatus.no'

#    These sites are not hosted with us.
#   'coronastatus.sk'
#   'coronastatus.dk'
);

# Deploy procedure over ssh.
DEPLOY_COMMAND='cd /srv/scripts && ./deploy-prod.sh'
for HOST in "${HOSTS[@]}"; do
    echo "> Deploying to ${HOST}:";
    ssh "app@${HOST}" $DEPLOY_COMMAND;
    echo "> Finished deploying to ${HOST}.";
done
