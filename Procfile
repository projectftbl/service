web: /bin/bash -c '(nohup ssh -n -i compose-heroku-key -o StrictHostKeyChecking=no \
-N compose@aws-eu-west-1-portal.1.dblayer.com -p 11243 \
-L 127.0.0.1:28015:10.82.176.4:28015 \
-L 127.0.0.2:28015:10.82.176.3:28015 \
-L 127.0.0.3:28015:10.82.176.2:28015 &); node bootstrap.js'
