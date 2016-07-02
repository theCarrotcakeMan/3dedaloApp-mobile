!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["settings"]=n({1:function(n,e,a,t,l){var i;return'				<img id="settings_image" src="'+n.escapeExpression(n.lambda(null!=(i=null!=e?e.me:e)?i.profile_pic:i,e))+'" class="profile_pic round change_pic">\n'},3:function(n,e,a,t,l){return'				<br><img id="img-id" src="images/photo.png" /><br>\n'},5:function(n,e,a,t,l){return"checked"},7:function(n,e,a,t,l){return"hidden"},9:function(n,e,a,t,l,i,s){var r,d,o=null!=e?e:{},c=a.helperMissing,p=n.escapeExpression,m=n.lambda;return'							<option value="'+p((d=null!=(d=a.index||l&&l.index)?d:c,"function"==typeof d?d.call(o,{name:"index",hash:{},data:l}):d))+'" data-eq="'+p(m(null!=(r=null!=s[1]?s[1].data:s[1])?r.cat_printer_brand:r,e))+'" '+(null!=(r=(a.if_eq||e&&e.if_eq||c).call(o,l&&l.index,null!=(r=null!=s[1]?s[1].data:s[1])?r.cat_printer_brand:r,{name:"if_eq",hash:{},fn:n.program(10,l,0,i,s),inverse:n.noop,data:l}))?r:"")+">"+p(m(e,e))+"</option>\n"},10:function(n,e,a,t,l){return"selected"},12:function(n,e,a,t,l,i,s){var r,d,o=null!=e?e:{},c=a.helperMissing,p=n.escapeExpression,m=n.lambda;return'							<option value="'+p((d=null!=(d=a.index||l&&l.index)?d:c,"function"==typeof d?d.call(o,{name:"index",hash:{},data:l}):d))+'" data-eq="'+p(m(null!=(r=null!=s[1]?s[1].data:s[1])?r.cat_printer_model:r,e))+'" '+(null!=(r=(a.if_eq||e&&e.if_eq||c).call(o,l&&l.index,null!=(r=null!=s[1]?s[1].data:s[1])?r.cat_printer_model:r,{name:"if_eq",hash:{},fn:n.program(10,l,0,i,s),inverse:n.noop,data:l}))?r:"")+">"+p(m(e,e))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l,i,s){var r,d=null!=e?e:{},o=n.lambda,c=n.escapeExpression;return'<div id="content" class="settings">\n'+(null!=(r=n.invokePartial(t.history_header_nouser,e,{name:"history_header_nouser",data:l,indent:"	",helpers:a,partials:t,decorators:n.decorators}))?r:"")+'	<section>\n		<form id="settings_form" class="settings_form">\n			<table><tr><td><i class="material-icons account_circle small"></i> Personal Info</td></tr></table>\n\n'+(null!=(r=a["if"].call(d,null!=(r=null!=e?e.me:e)?r.profile_pic:r,{name:"if",hash:{},fn:n.program(1,l,0,i,s),inverse:n.program(3,l,0,i,s),data:l}))?r:"")+'			<input type="text" name="user_first_name" placeholder="Name" value="'+c(o(null!=(r=null!=e?e.data:e)?r.first_name:r,e))+'"><br>\n			<input type="text" name="user_last_name" placeholder="Lastname" value="'+c(o(null!=(r=null!=e?e.data:e)?r.last_name:r,e))+'"><br>\n			<input type="text" name="user_email" placeholder="E-mail" value="'+c(o(null!=(r=null!=e?e.data:e)?r.email:r,e))+'"><br>\n			<input type="text" name="user_bio" placeholder="Bio (Tell us about you)" value="'+c(o(null!=(r=null!=e?e.data:e)?r.bio:r,e))+'"><br>\n			<section class="options">\n				<div class="roundedTwo inline_check">\n					<input type="checkbox" name="become_printer" id="become_printer" value="true" '+(null!=(r=a["if"].call(d,null!=(r=null!=e?e.data:e)?r.is_printer:r,{name:"if",hash:{},fn:n.program(5,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'>\n					<label for="become_printer"></label>\n				</div>\n				<label class="inline_check">Become a printer</label>\n				<section class="form_part dbl_indent '+(null!=(r=a.unless.call(d,null!=(r=null!=e?e.data:e)?r.is_printer:r,{name:"unless",hash:{},fn:n.program(7,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'" >\n					<p class="lil_comment">Hardware specs</p>\n					<select name="printer_brand" class="good_ol_select fifty" id="printer_brand">\n						<option value="">Brand</option>\n'+(null!=(r=a.each.call(d,null!=e?e.printer_brands:e,{name:"each",hash:{},fn:n.program(9,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'					</select>\n					<select name="printer_model" class="good_ol_select fifty" id="printer_model">\n						<option value="">Model</option>\n'+(null!=(r=a.each.call(d,null!=(r=null!=e?e.data:e)?r.models_already:r,{name:"each",hash:{},fn:n.program(12,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'					</select>\n					<a class="buttonlike" id="locate_new_printer"><i class="material-icons location"></i>Save printer location</a>\n				</section>\n				<br>\n			</section>\n			<br><input type="submit" class="submit" value="Save" >\n\n			<!-- <section class="options">\n				<div class="roundedTwo inline_check">\n					<input type="checkbox" name="become_scanner" id="become_scanner" value="true" '+(null!=(r=a["if"].call(d,null!=(r=null!=e?e.data:e)?r.is_scanner:r,{name:"if",hash:{},fn:n.program(5,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'>\n					<label for="become_scanner"></label>\n				</div>\n				<label class="inline_check">Become a scanner</label>\n				<section class="form_part dbl_indent '+(null!=(r=a.unless.call(d,null!=(r=null!=e?e.data:e)?r.is_scanner:r,{name:"unless",hash:{},fn:n.program(7,l,0,i,s),inverse:n.noop,data:l}))?r:"")+'">\n				</section>\n				<br>\n			</section> -->\n			<form id="save_password" class="save_password">\n				<br><p>Change your password</p>\n				<input type="password" name="user_pwd" placeholder="New password" value=""><br>\n				<input type="password" name="user_rpt_pwd" placeholder="Confirm new password" value="">\n				<br>\n			</form>\n			\n			<!-- <table>\n				<tr>\n					<td><i class="material-icons">local_shipping</i> Shipping</td>\n					<td></td>\n					<td></td>\n				</tr>\n				<tr>\n					<td class="shipp"><i class="material-icons">adjust</i> Home</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td class="shipp"><i class="material-icons">panorama_fish_eye</i> Work</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td><a href="address.html"><i class="material-icons">control_point</i> Add Address</a></td>\n					<td></td>\n					<td></td>\n				</tr>\n			</table>\n			<table>\n				<tr>\n					<td><i class="material-icons">credit_card</i> Payment</td>\n					<td></td>\n					<td></td>\n				</tr>\n				<tr>\n					<td class="paym"><i class="material-icons">adjust</i> Visa 1234</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td class="paym"><i class="material-icons">panorama_fish_eye</i> Mastercard 3456</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td class="paym"><i class="material-icons">panorama_fish_eye</i> Amex 6789</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td class="paym"><i class="material-icons">panorama_fish_eye</i> Paypal</td>\n					<td><i class="material-icons">mode_edit</i></td>\n					<td><i class="material-icons">delete</i></td>\n				</tr>\n				<tr>\n					<td><a href="card.html"><i class="material-icons">control_point</i> Add Card</a></td>\n					<td></td>\n					<td></td>\n				</tr>\n			</table> -->\n		</form>\n	</section>\n</div>\n'},usePartial:!0,useData:!0,useDepths:!0})}();