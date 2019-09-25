#!/bin/bash

# Recreate config file
rm -rf ./public/env-config
touch ./public/env-config

# Add assignment 
echo "window._env_ = {" >> ./public/env-config

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
  fi

  # Append configuration property to JS file
  echo "  $varname: \"\${$varname}\"," >> ./public/env-config
done < .env.development

echo "};" >> ./public/env-config
