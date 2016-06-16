/* Header */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["header"]=a({1:function(a,e,n,l,r){var i;return'		<img id="account1" src="'+a.escapeExpression(a.lambda(null!=(i=null!=e?e.me:e)?i.profile_pic:i,e))+'" class="profile_pic round">\n'},3:function(a,e,n,l,r){return'		<i id="account1" class="material-icons account_circle"></i>\n'},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,r){var i;return'<header class="daheader">\n	<a href="feed.html">\n		<img class="logo_hook" width="134" height="32" src="images/logo.svg" />\n	</a>\n'+(null!=(i=n["if"].call(null!=e?e:{},null!=e?e.logged_user:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.program(3,r,0),data:r}))?i:"")+"</header>"},useData:!0})}();
/* History header */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["history_header"]=a({1:function(a,e,n,l,r){var i;return'		<img id="account1" src="'+a.escapeExpression(a.lambda(null!=(i=null!=e?e.me:e)?i.profile_pic:i,e))+'" class="profile_pic round">\n'},3:function(a,e,n,l,r){return'		<i id="account1" class="material-icons account_circle"></i>\n'},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,r){var i,t,c=null!=e?e:{};return'<header class="daheader">\n	<a href="#" data-rel="back" id="backBtn" >\n		<i id="back" class="material-icons arrow_back"></i>\n	</a>\n	<p>'+a.escapeExpression((t=null!=(t=n.header_title||(null!=e?e.header_title:e))?t:n.helperMissing,"function"==typeof t?t.call(c,{name:"header_title",hash:{},data:r}):t))+"</p>\n"+(null!=(i=n["if"].call(c,null!=e?e.logged_user:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.program(3,r,0),data:r}))?i:"")+"</header>"},useData:!0})}();
/* History header nouser */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["history_header_nouser"]=a({compiler:[7,">= 4.0.0"],main:function(a,e,n,l,r){var t;return'<header class="daheader">\n	<a id="backBtn" >\n		<i id="back" class="material-icons arrow_back"></i>\n	</a>\n	<p>'+a.escapeExpression((t=null!=(t=n.header_title||(null!=e?e.header_title:e))?t:n.helperMissing,"function"==typeof t?t.call(null!=e?e:{},{name:"header_title",hash:{},data:r}):t))+"</p>\n</header>"},useData:!0})}();
/* Search header */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["search_header"]=a({1:function(a,e,r,n,t){var i;return a.escapeExpression((i=null!=(i=r.search_term||(null!=e?e.search_term:e))?i:r.helperMissing,"function"==typeof i?i.call(null!=e?e:{},{name:"search_term",hash:{},data:t}):i))},3:function(a,e,r,n,t){return""},compiler:[7,">= 4.0.0"],main:function(a,e,r,n,t){var i;return'<header class="big daheader">\n	<a id="backBtn">\n		<i id="back" class="material-icons arrow_back"></i>\n	</a>\n	<div id="barra">\n		<i class="material-icons search invert"></i>\n		<form id="search_form" action="search_results.html" method="GET">\n			<input type="text" name="s" placeholder="Search"  value="'+(null!=(i=r["if"].call(null!=e?e:{},null!=e?e.search_term:e,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.program(3,t,0),data:t}))?i:"")+'" style="color: rgb(255, 255, 255);">\n			<input type="submit" value="" style="display:none; visibility: hidden; width: 0px; height=0px; ">\n		</form>\n	</div>\n	<a href="direct_photo.html">\n		<i id="photo" class="material-icons search photo_camera"></i>\n	</a>\n</header>'},useData:!0})}();
/* Subheader */
	!function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{};s["subheader"]=a({1:function(a,s,n,e,l){var i;return'<a class="cats">'+a.escapeExpression((i=null!=(i=n.name||(null!=s?s.name:s))?i:n.helperMissing,"function"==typeof i?i.call(null!=s?s:{},{name:"name",hash:{},data:l}):i))+"</a>"},compiler:[7,">= 4.0.0"],main:function(a,s,n,e,l){var i;return'<div class="subheader">\n	<div id="swipper">\n		<div>\n			'+(null!=(i=n.each.call(null!=s?s:{},null!=(i=null!=s?s.categories:s)?i.pool:i,{name:"each",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?i:"")+'\n		</div>\n	</div>\n	<div id="subcats" style="display:none">\n		<div id="swipper1">\n		<div>\n			<a id="sca1" class="sucats" onclick="slider.uno();return false;" href="#">SUBCAT 1</a>\n			<a id="sca2" class="sucats" onclick="slider.dos();return false;" href="#">SUBCAT 2</a>\n			<a id="sca3" class="sucats" onclick="slider.tres();return false;" href="#">SUBCAT 3</a>\n			<a id="sca4" class="sucats" onclick="slider.cuatro();return false;" href="#">SUBCAT 4</a>\n		</div>\n	</div><i id="return" class="material-icons arrow_back"></i></div>\n</div>'},useData:!0})}();
/* Footer */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["footer"]=a({1:function(a,e,n,l,i){return'class="active"'},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,i){var t,r=null!=e?e:{};return'<footer>\n	<a href="feed.html" '+(null!=(t=n["if"].call(r,null!=e?e.home_active:e,{name:"if",hash:{},fn:a.program(1,i,0),inverse:a.noop,data:i}))?t:"")+'><i class="material-icons home"></i></a>\n	<a href="search.html" '+(null!=(t=n["if"].call(r,null!=e?e.search_active:e,{name:"if",hash:{},fn:a.program(1,i,0),inverse:a.noop,data:i}))?t:"")+'><i class="material-icons search"></i></a>\n	<a class="always_selected" href="direct_photo.html"><i class="material-icons photo_camera invert"></i></a>\n	<a href="map.html" '+(null!=(t=n["if"].call(r,null!=e?e.explore_active:e,{name:"if",hash:{},fn:a.program(1,i,0),inverse:a.noop,data:i}))?t:"")+'><i class="material-icons explore"></i></a>\n	<a href="notifications.html" '+(null!=(t=n["if"].call(r,null!=e?e.notifications_active:e,{name:"if",hash:{},fn:a.program(1,i,0),inverse:a.noop,data:i}))?t:"")+'><i class="material-icons notifications"></i></a>\n</footer>'},useData:!0})}();
/* dom_assets */
	!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["dom_assets"]=a({compiler:[7,">= 4.0.0"],main:function(a,e,s,n,i){return'<div id="spinner" class="spinner" style="display:none;">\n	<img src="images/d_loading@2x.gif" class="loader_image"/>\n</div>'},useData:!0})}();
/* Side menu */
	!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["sidemenu"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,o,e,i){return'<div class="wrapper" style="display:none">\n	<div id="user">\n		<div class="logout" >\n			<p>Sign in</p>\n			<form id="login_form" class="login_form">\n				<input name="email" type="email" placeholder="email" value=""><br>\n				<input name="password" type="password" placeholder="password"><br>\n				<input type="submit" class="icon_hack" value=""><i class="material-icons post_submit send"></i>\n			</form>\n			<p><a class="underline1" href="#">Forgot password</a></p>\n			<p>New to Dedalo?<br>\n			<a class="underline" href="create_account.html">Create an account</a></p>\n			<p>or</p>\n			<a href="#" data-provider="facebook" class="media login_button facebook" >Sign in with Facebook</a><br>\n			<a href="#" data-provider="google" class="media login_button google" >Sign in with Google</a><br>\n		</div>\n		<div class="footer">\n			<p><a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" ><span>About</span> <img width="134" height="32" src="images/logo.svg" /></a></p>\n			<p><a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Terms and conditions</a> | <a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Privacy policies</a></p>\n		</div>\n	</div>\n	<div class="separate"></div>\n</div>'},useData:!0})}();
/* Side menu logged */
	!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["sidemenu_logged"]=a({1:function(a,n,i,l,e){var s,o=null!=n?n:{},p=i.helperMissing,t="function",c=a.escapeExpression;return'					<img src="'+c((s=null!=(s=i.profile_pic||(null!=n?n.profile_pic:n))?s:p,typeof s===t?s.call(o,{name:"profile_pic",hash:{},data:e}):s))+'" alt="'+c((s=null!=(s=i.display_name||(null!=n?n.display_name:n))?s:p,typeof s===t?s.call(o,{name:"display_name",hash:{},data:e}):s))+'" class="round profile_pic">\n'},3:function(a,n,i,l,e){return'					<i id="account" class="material-icons">account_circle</i>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,i,l,e){var s,o,p=null!=n?n:{};return'<div class="wrapper" style="display:none;">\n	<div id="user">\n		<div class="login">\n			<div>\n'+(null!=(s=i["if"].call(p,null!=n?n.profile_pic:n,{name:"if",hash:{},fn:a.program(1,e,0),inverse:a.program(3,e,0),data:e}))?s:"")+"				<p>"+a.escapeExpression((o=null!=(o=i.display_name||(null!=n?n.display_name:n))?o:i.helperMissing,"function"==typeof o?o.call(p,{name:"display_name",hash:{},data:e}):o))+'</p>\n				<div class="clearfix"></div>\n			</div>\n			<a href="settings.html">Account</a>\n			<a href="dashboard.html">Dashboard</a>\n			<a id="logout" >Log out</a>\n		</div>\n		<div class="footer">\n		<p><span>About</span> <img width="134" height="32" src="images/logo.svg" /></p>\n		<p><a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Terms and conditions<a/> | <a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Privacy policies</a></p>\n		</div>\n	</div>\n	<div class="separate"></div>\n</div>'},useData:!0})}();
/* Feed chunk */
	!function(){var n=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["feed_chunk"]=n({1:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=a.helperMissing,o="function",c=n.escapeExpression;return'        <div id="superior1" class="arriba fotos">\n				<a class="bigg link" href="'+c((s=null!=(s=a.link_base||(null!=l?l.link_base:l))?s:u,typeof s===o?s.call(t,{name:"link_base",hash:{},data:i}):s))+".html?id="+c((s=null!=(s=a.ID||(null!=l?l.ID:l))?s:u,typeof s===o?s.call(t,{name:"ID",hash:{},data:i}):s))+'">\n'+(null!=(r=a["if"].call(t,null!=l?l.thumb_url:l,{name:"if",hash:{},fn:n.program(2,i,0),inverse:n.program(4,i,0),data:i}))?r:"")+"					<div>\n"+(null!=(r=a["if"].call(t,null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,{name:"if",hash:{},fn:n.program(6,i,0),inverse:n.program(8,i,0),data:i}))?r:"")+"						<h1>"+c((s=null!=(s=a.product_title||(null!=l?l.product_title:l))?s:u,typeof s===o?s.call(t,{name:"product_title",hash:{},data:i}):s))+"</h1>\n						<span>"+c(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.name:r,l))+"</span>\n					</div>\n"+(null!=(r=a["if"].call(t,null!=l?l.productos:l,{name:"if",hash:{},fn:n.program(10,i,0),inverse:n.program(12,i,0),data:i}))?r:"")+"				</a>\n"},2:function(n,l,a,e,i){var r;return'						<img src="'+n.escapeExpression((r=null!=(r=a.thumb_url||(null!=l?l.thumb_url:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"thumb_url",hash:{},data:i}):r))+'"/>\n'},4:function(n,l,a,e,i){return'						<img src="images/placeholder.png"/>\n'},6:function(n,l,a,e,i){var r;return'							<img src="'+n.escapeExpression(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,l))+'" class="profile_pic round" />\n'},8:function(n,l,a,e,i){return'							<i class="material-icons account_circle big invert" ></i>\n'},10:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=a.helperMissing,o="function";return"						<div>\n							<p>"+(null!=(s=null!=(s=a.product_description||(null!=l?l.product_description:l))?s:u,r=typeof s===o?s.call(t,{name:"product_description",hash:{},data:i}):s)?r:"")+"</p>\n							<h2>$ "+n.escapeExpression((s=null!=(s=a.price||(null!=l?l.price:l))?s:u,typeof s===o?s.call(t,{name:"price",hash:{},data:i}):s))+"</h2>\n						</div>\n"},12:function(n,l,a,e,i){var r,s;return"						<div><p>"+(null!=(s=null!=(s=a.product_description||(null!=l?l.product_description:l))?s:a.helperMissing,r="function"==typeof s?s.call(null!=l?l:{},{name:"product_description",hash:{},data:i}):s)?r:"")+"</p></div>\n"},14:function(n,l,a,e,i){var r;return null!=(r=(a.if_module||l&&l.if_module||a.helperMissing).call(null!=l?l:{},i&&i.index,4,{name:"if_module",hash:{},fn:n.program(15,i,0),inverse:n.program(39,i,0),data:i}))?r:""},15:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=a.helperMissing,o="function",c=n.escapeExpression;return"		</div>\n		<div "+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,0,{name:"if_eq",hash:{},fn:n.program(16,i,0),inverse:n.noop,data:i}))?r:"")+" "+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,4,{name:"if_eq",hash:{},fn:n.program(18,i,0),inverse:n.noop,data:i}))?r:"")+" "+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,8,{name:"if_eq",hash:{},fn:n.program(20,i,0),inverse:n.noop,data:i}))?r:"")+" "+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,12,{name:"if_eq",hash:{},fn:n.program(22,i,0),inverse:n.noop,data:i}))?r:"")+" "+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,16,{name:"if_eq",hash:{},fn:n.program(24,i,0),inverse:n.noop,data:i}))?r:"")+' class="abajo fotos">\n			<a class="small link" href="'+c((s=null!=(s=a.link_base||(null!=l?l.link_base:l))?s:u,typeof s===o?s.call(t,{name:"link_base",hash:{},data:i}):s))+".html?id="+c((s=null!=(s=a.ID||(null!=l?l.ID:l))?s:u,typeof s===o?s.call(t,{name:"ID",hash:{},data:i}):s))+'">\n'+(null!=(r=a["if"].call(t,null!=l?l.thumb_url:l,{name:"if",hash:{},fn:n.program(26,i,0),inverse:n.program(28,i,0),data:i}))?r:"")+(null!=(r=a["if"].call(t,null!=l?l.productos:l,{name:"if",hash:{},fn:n.program(30,i,0),inverse:n.program(37,i,0),data:i}))?r:"")+"\n		</a>\n"},16:function(n,l,a,e,i){return'id="inferior1" class="abajo fotos"'},18:function(n,l,a,e,i){return'id="superior2" class="arriba fotos merged" style="display:none;"'},20:function(n,l,a,e,i){return'id="inferior2" class="abajo fotos"'},22:function(n,l,a,e,i){return'id="superior3" class="arriba fotos merged" style="display:none;"'},24:function(n,l,a,e,i){return'id="inferior3" class="abajo fotos"'},26:function(n,l,a,e,i){var r;return'					<img src="'+n.escapeExpression((r=null!=(r=a.thumb_url||(null!=l?l.thumb_url:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"thumb_url",hash:{},data:i}):r))+'">\n'},28:function(n,l,a,e,i){return'					<img src="images/placeholder.png">\n'},30:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=n.escapeExpression;return"					<div>\n"+(null!=(r=a["if"].call(t,null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,{name:"if",hash:{},fn:n.program(31,i,0),inverse:n.program(33,i,0),data:i}))?r:"")+"						<h1>"+u((s=null!=(s=a.product_title||(null!=l?l.product_title:l))?s:a.helperMissing,"function"==typeof s?s.call(t,{name:"product_title",hash:{},data:i}):s))+"</h1>\n						<span>"+u(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.name:r,l))+"</span>\n					</div>\n"+(null!=(r=a["if"].call(t,null!=l?l.price:l,{name:"if",hash:{},fn:n.program(35,i,0),inverse:n.noop,data:i}))?r:"")},31:function(n,l,a,e,i){var r;return'							<img src="'+n.escapeExpression(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,l))+'" class="profile_pic round small" />\n'},33:function(n,l,a,e,i){return'							<i class="material-icons account_circle invert" ></i>\n'},35:function(n,l,a,e,i){var r;return"						<div><h2>$ "+n.escapeExpression((r=null!=(r=a.price||(null!=l?l.price:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"price",hash:{},data:i}):r))+"</h2></div>\n"},37:function(n,l,a,e,i){var r;return"					<div><h1>"+n.escapeExpression((r=null!=(r=a.product_title||(null!=l?l.product_title:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"product_title",hash:{},data:i}):r))+"</h1></div>\n"},39:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=a.helperMissing,o="function",c=n.escapeExpression;return'		<a class="small link" href="'+c((s=null!=(s=a.link_base||(null!=l?l.link_base:l))?s:u,typeof s===o?s.call(t,{name:"link_base",hash:{},data:i}):s))+".html?id="+c((s=null!=(s=a.ID||(null!=l?l.ID:l))?s:u,typeof s===o?s.call(t,{name:"ID",hash:{},data:i}):s))+'">\n'+(null!=(r=a["if"].call(t,null!=l?l.thumb_url:l,{name:"if",hash:{},fn:n.program(40,i,0),inverse:n.program(42,i,0),data:i}))?r:"")+"			\n"+(null!=(r=a["if"].call(t,null!=l?l.productos:l,{name:"if",hash:{},fn:n.program(44,i,0),inverse:n.program(51,i,0),data:i}))?r:"")+"		</a>\n"},40:function(n,l,a,e,i){var r;return'				<img src="'+n.escapeExpression((r=null!=(r=a.thumb_url||(null!=l?l.thumb_url:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"thumb_url",hash:{},data:i}):r))+'">\n'},42:function(n,l,a,e,i){return'				<img src="images/placeholder.png">\n'},44:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=n.escapeExpression;return"				<div>\n"+(null!=(r=a["if"].call(t,null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,{name:"if",hash:{},fn:n.program(45,i,0),inverse:n.program(47,i,0),data:i}))?r:"")+"					<h1>"+u((s=null!=(s=a.product_title||(null!=l?l.product_title:l))?s:a.helperMissing,"function"==typeof s?s.call(t,{name:"product_title",hash:{},data:i}):s))+"</h1>\n					<span>"+u(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.name:r,l))+"</span>\n				</div>\n"+(null!=(r=a["if"].call(t,null!=l?l.price:l,{name:"if",hash:{},fn:n.program(49,i,0),inverse:n.noop,data:i}))?r:"")},45:function(n,l,a,e,i){var r;return'						<img src="'+n.escapeExpression(n.lambda(null!=(r=null!=l?l.designer_brand:l)?r.profile_pic:r,l))+'" class="profile_pic round small" />\n'},47:function(n,l,a,e,i){return'						<i class="material-icons account_circle invert" ></i>\n'},49:function(n,l,a,e,i){var r;return"					<div><h2>$ "+n.escapeExpression((r=null!=(r=a.price||(null!=l?l.price:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"price",hash:{},data:i}):r))+"</h2></div>\n"},51:function(n,l,a,e,i){var r;return"				<div><h1>"+n.escapeExpression((r=null!=(r=a.product_title||(null!=l?l.product_title:l))?r:a.helperMissing,"function"==typeof r?r.call(null!=l?l:{},{name:"product_title",hash:{},data:i}):r))+"</h1></div>\n"},53:function(n,l,a,e,i){var r,s=null!=l?l:{},t=a.helperMissing,u="function",o=n.escapeExpression;return'<a class="replica grd" href="'+o((r=null!=(r=a.link_base||(null!=l?l.link_base:l))?r:t,typeof r===u?r.call(s,{name:"link_base",hash:{},data:i}):r))+".html?id="+o((r=null!=(r=a.ID||(null!=l?l.ID:l))?r:t,typeof r===u?r.call(s,{name:"ID",hash:{},data:i}):r))+'"></a>'},55:function(n,l,a,e,i){var r,s,t=null!=l?l:{},u=a.helperMissing,o="function",c=n.escapeExpression;return'<a class="replica sml" href="'+c((s=null!=(s=a.link_base||(null!=l?l.link_base:l))?s:u,typeof s===o?s.call(t,{name:"link_base",hash:{},data:i}):s))+".html?id="+c((s=null!=(s=a.ID||(null!=l?l.ID:l))?s:u,typeof s===o?s.call(t,{name:"ID",hash:{},data:i}):s))+'"></a>'+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,3,{name:"if_eq",hash:{},fn:n.program(56,i,0),inverse:n.noop,data:i}))?r:"")+(null!=(r=(a.if_eq||l&&l.if_eq||u).call(t,i&&i.index,11,{name:"if_eq",hash:{},fn:n.program(58,i,0),inverse:n.noop,data:i}))?r:"")},56:function(n,l,a,e,i){return'</div>\n	<div class="section" id="section2">\n		'},58:function(n,l,a,e,i){return'</div>\n	<div class="section" id="section3">\n		'},compiler:[7,">= 4.0.0"],main:function(n,l,a,e,i){var r,s=null!=l?l:{};return'<div id="static">\n'+(null!=(r=a.each.call(s,null!=l?l.featured:l,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?r:"")+"\n"+(null!=(r=a.each.call(s,null!=l?l.pool:l,{name:"each",hash:{},fn:n.program(14,i,0),inverse:n.noop,data:i}))?r:"")+'</div>\n</div>\n<div id="content-index" class="index">\n	<div class="section" id="section1">'+(null!=(r=a.each.call(s,null!=l?l.featured:l,{name:"each",hash:{},fn:n.program(53,i,0),inverse:n.noop,data:i}))?r:"")+(null!=(r=a.each.call(s,null!=l?l.pool:l,{name:"each",hash:{},fn:n.program(55,i,0),inverse:n.noop,data:i}))?r:"")+"\n	</div>\n</div>\n\n"+(null!=(r=n.invokePartial(e.footer,l,{name:"footer",data:i,helpers:a,partials:e,decorators:n.decorators}))?r:"")},usePartial:!0,useData:!0})}();