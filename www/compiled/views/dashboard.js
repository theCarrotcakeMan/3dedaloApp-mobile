!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["dashboard"]=a({1:function(a,n,l,e,r){var o;return(null!=(o=l.each.call(null!=n?n:{},null!=(o=null!=(o=null!=n?n.data:n)?o.categories:o)?o.pool:o,{name:"each",hash:{},fn:a.program(2,r,0),inverse:a.noop,data:r}))?o:"")+"		</div>\n"},2:function(a,n,l,e,r){var o,t,s=null!=n?n:{},i=l.helperMissing,u="function",d=a.escapeExpression;return'				<a class="'+(null!=(o=l["if"].call(s,null!=n?n.followed:n,{name:"if",hash:{},fn:a.program(3,r,0),inverse:a.program(5,r,0),data:r}))?o:"")+' cat-choose" data-id="'+d((t=null!=(t=l.ID||(null!=n?n.ID:n))?t:i,typeof t===u?t.call(s,{name:"ID",hash:{},data:r}):t))+'" href="#">'+d((t=null!=(t=l.name||(null!=n?n.name:n))?t:i,typeof t===u?t.call(s,{name:"name",hash:{},data:r}):t))+"</a>\n"},3:function(a,n,l,e,r){return" choosed unfollow_category "},5:function(a,n,l,e,r){return" follow_category "},7:function(a,n,l,e,r){return'			<p class="message">Sorry, no categories</p>\n		</div>\n'},9:function(a,n,l,e,r){var o;return(null!=(o=l.each.call(null!=n?n:{},null!=(o=null!=(o=null!=n?n.data:n)?o.makers:o)?o.pool:o,{name:"each",hash:{},fn:a.program(10,r,0),inverse:a.noop,data:r}))?o:"")+"		</div>\n"},10:function(a,n,l,e,r){var o,t,s=null!=n?n:{},i=l.helperMissing,u="function",d=a.escapeExpression;return'					<a class="usuario '+(null!=(o=l["if"].call(s,null!=n?n.followed:n,{name:"if",hash:{},fn:a.program(11,r,0),inverse:a.program(13,r,0),data:r}))?o:"")+'" data-id="'+d((t=null!=(t=l.ID||(null!=n?n.ID:n))?t:i,typeof t===u?t.call(s,{name:"ID",hash:{},data:r}):t))+'"><img src="'+d((t=null!=(t=l.profile_pic||(null!=n?n.profile_pic:n))?t:i,typeof t===u?t.call(s,{name:"profile_pic",hash:{},data:r}):t))+'"></a>\n'},11:function(a,n,l,e,r){return" following unfollow_user "},13:function(a,n,l,e,r){return" follow_user "},15:function(a,n,l,e,r){return'				<p class="message">Sorry, no users</p>\n		</div>\n'},17:function(a,n,l,e,r){var o;return null!=(o=a.invokePartial(e.sidemenu_logged,null!=n?n.me:n,{name:"sidemenu_logged",data:r,indent:"	",helpers:l,partials:e,decorators:a.decorators}))?o:""},19:function(a,n,l,e,r){var o;return null!=(o=a.invokePartial(e.sidemenu,n,{name:"sidemenu",data:r,indent:"	",helpers:l,partials:e,decorators:a.decorators}))?o:""},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,r){var o,t=null!=n?n:{};return'<div id="content" class="settings">\n'+(null!=(o=a.invokePartial(e.history_header,n,{name:"history_header",data:r,indent:"	",helpers:l,partials:e,decorators:a.decorators}))?o:"")+'	<section>\n		<table><tr><td>Choose from categories to follow</td></tr></table>\n		<div id="dashboard1" class="dashboard_section">\n'+(null!=(o=l["if"].call(t,null!=(o=null!=(o=null!=n?n.data:n)?o.categories:o)?o.count:o,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.program(7,r,0),data:r}))?o:"")+'		\n		<table><tr><td>Choose from users to follow</td></tr></table>\n		<div id="dashboard2" class="dashboard_section">\n'+(null!=(o=l["if"].call(t,null!=(o=null!=(o=null!=n?n.data:n)?o.makers:o)?o.count:o,{name:"if",hash:{},fn:a.program(9,r,0),inverse:a.program(15,r,0),data:r}))?o:"")+"		\n	</section>\n\n</div>\n"+(null!=(o=l["if"].call(t,null!=n?n.logged_user:n,{name:"if",hash:{},fn:a.program(17,r,0),inverse:a.program(19,r,0),data:r}))?o:"")},usePartial:!0,useData:!0})}();