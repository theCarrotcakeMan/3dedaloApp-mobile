!function(){var e=Handlebars.template,t=Handlebars.templates=Handlebars.templates||{};t["create_account"]=e({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var s;return'<div id="content" class="settings">\n'+(null!=(s=e.invokePartial(r.history_header_nouser,t,{name:"history_header_nouser",data:n,indent:"	",helpers:a,partials:r,decorators:e.decorators}))?s:"")+'	<section>\n		<form id="create_account_form">\n			<table><tr><td><i class="material-icons account_circle"></i> Personal Info</td></tr></table>\n			<br><img id="img-id" class="trigger_getphoto" src="images/photo.png" /><br>\n			<input type="hidden" value="" name="image_profile" id="image_profile">\n			<input type="text" name="user_name" type="text" placeholder="Name" value=""><br>\n			<input type="text" name="user_last_name" type="text" placeholder="Lastname" value=""><br>\n			<input type="text" name="user_email" type="text" placeholder="E-mail" value=""><br>\n			<input type="password" name="user_pwd" type="text" placeholder="Password" value=""><br>\n			<input type="password" name="user_rpt_pwd" type="text" placeholder="Confirm password" value=""><br>\n			<input type="text" name="user_bio" type="text" placeholder="Bio (Tell us about you)" value=""><br>\n			\n			<br><input type="submit" class="submit" value="Start!" >\n		</form>\n	</section>\n</div>\n'+(null!=(s=e.invokePartial(r.dom_assets,t,{name:"dom_assets",data:n,helpers:a,partials:r,decorators:e.decorators}))?s:"")},usePartial:!0,useData:!0})}();