
heroku login

heroku create name-app-2022

heroku logs --tail
git add .

git commit -m 'deploying'

git push heroku HEAD:master


heroku addons:create cleardb:ignite

heroku config | grep CLEARDB_DATABASE_URL

user:password@host/database
user =b0a7988ca9ef2f
password =  95aee0cf
host = us-cdbr-east-06.cleardb.net
database = heroku_a2aa97a7c56bd15
:95aee0cf@us-cdbr-east-06.cleardb.net/heroku_a2aa97a7c56bd15?reconnect=true


heroku config:set HOST=us-cdbr-east-06.cleardb.net