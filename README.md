# requirejs-demo
Requirejs demo code for beginner. Using jQuery, Backbone

## run
Click index.html

## apache config
```
<VirtualHost *:2000>
    DocumentRoot "/Users/liaowei/Documents/code/github/requirejs-demo"
    ServerName require
    RewriteEngine On
    RewriteRule ^/(?!asset).* /Users/liaowei/Documents/code/github/requirejs-demo/index.html
</VirtualHost>
```