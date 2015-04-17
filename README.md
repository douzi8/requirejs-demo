# requirejs-demo
Requirejs demo code for beginner. Using jQuery, Backbone, underscore as front-end framework.

## run
You should deploy this project on static service, eg apache, nginx.

### apache config
```
<VirtualHost *:2000>
    DocumentRoot "/Users/liaowei/Documents/code/github/requirejs-demo"
    ServerName require
    RewriteEngine On
    RewriteRule ^/(?!asset).* /Users/liaowei/Documents/code/github/requirejs-demo/index.html
</VirtualHost>
```

### start admin
```
grunt app
```