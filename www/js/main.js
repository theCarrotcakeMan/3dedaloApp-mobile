	 /*     _                        _     _           _   
	*    / \   _ __  _ __     ___ | |__ (_) ___  ___| |_ 
	*   / _ \ | '_ \| '_ \   / _ \| '_ \| |/ _ \/ __| __|
	*  / ___ \| |_) | |_) | | (_) | |_) | |  __/ (__| |_ 
	* /_/   \_\ .__/| .__/   \___/|_.__// |\___|\___|\__|
	*         |_|   |_|               |__/               
	*/

	var app = {
		app_context: this,
		// Application Constructor
		initialize: function() {
			this.bindEvents();
			/* IMPORTANT to set requests to be syncronous */
			/* TODO test all requests without the following code 'cause of deprecation */
			$.ajaxSetup({
				 async: false
			});
			window.loggedIn = false;
			app.registerPartials();
			app.registerHelpers();
			/* localStorage init */
			this.ls 		= window.localStorage;
			var log_info 	= JSON.parse(this.ls.getItem('dedalo_log_info'));
							window.user 	= (log_info) ? log_info.user_login : '';
							window.user_id 	= (log_info) ? log_info.user_id : '';
							window.user_role = (log_info) ? log_info.user_role : '';
			if(log_info)
				loggedIn = true;
			/* Initialize API request handler */
			window.apiRH = new requestHandlerAPI().construct(app);

			/* Check if has any token */
			if(apiRH.has_token()){
				/* Check if has a valid token */
				var response = apiRH.has_valid_token();
				if(response){
					var data_id = $(this).data('id');
					console.log('You okay, now you can start making calls');
					/* Take the user to it's timeline */
					var is_home = window.is_home;
					if(is_home)
						window.location.assign('feed.html?filter_feed=all');
					return;
				}else{
					/* Token is not valid, user needs to authenticate */
					console.log("Your token is not valid anymore (or has not been validated yet)");
					return;
				}
			}
			
			/* Requesting passive token if no token is previously stored */
			console.log(apiRH.request_token().get_request_token());
		},
		registerPartials: function() {
			/* Add files to be loaded here */
			var filenames = ['header', 'history_header', 'history_header_nouser', 'search_header', 'feed', 'sidemenu', 'sidemenu_logged', 'footer', 'subheader', 'dom_assets'];
			filenames.forEach(function (filename) {
				var request = new XMLHttpRequest();
				request.open('GET', 'views/partials/' + filename + '.hbs', false);
				request.send(null);
				if (request.status === 200) 
			    	Handlebars.registerPartial(filename, request.responseText);

			});
		},
		registerPartial: function(filename) {
			var request = new XMLHttpRequest();
			request.open('GET', 'views/partials/' + filename + '.hbs', false);
			request.send(null);
			if (request.status === 200) 
			    	Handlebars.registerPartial(filename, request.responseText);
			return;
		},
		registerTemplate : function(name) {
		    $.ajax({
	            url : 'views/' + name + '.hbs',
	            success : function(response) {
		                if (Handlebars.templates === undefined)
		                    Handlebars.templates = {};
		            Handlebars.templates[name] = Handlebars.compile(response);
	            }
	        });
	        return;
		},
		registerHelpers : function() {
		    Handlebars.registerHelper('if_eq', function(a, b, opts) {
			    if (a == b) {
			        return opts.fn(this);
			    } else {
			        return opts.inverse(this);
			    }
			});
			Handlebars.registerHelper('if_module', function(a, b, opts) {
			    if (a%b == 0) {
			        return opts.fn(this);
			    } else {
			        return opts.inverse(this);
			    }
			});
	        return;
		},
		bindEvents: function() {
			document.addEventListener('deviceready', app.onDeviceReady, false);
			document.addEventListener('mobileinit', app.onDMobileInit, false);
		},

		// deviceready Event Handler
		onDeviceReady: function() {
			app.receivedEvent('deviceready');

			/*   ___    _         _   _     
			*  / _ \  / \  _   _| |_| |__  
			* | | | |/ _ \| | | | __| '_ \ 
			* | |_| / ___ \ |_| | |_| | | |
			*  \___/_/   \_\__,_|\__|_| |_|
			*/                              
			try{
				OAuth.initialize('VWadBFs2rbk8esrvqSEFCyHGKnc');
			}
			catch(err){
				// app.toast("Oauth error ocurred");
				console.log('OAuth initialize error: ' + err);
			}
		},

		// deviceready Event Handler
		onMobileInit: function() {
			app.receivedEvent('mobileinit');
		},
		// Update DOM on a Received Event
		receivedEvent: function(id) {
			if(id == 'deviceready' && typeof navigator.splashscreen != 'undefined'){
				navigator.splashscreen.hide();
			}
		},
		gatherEnvironment: function(optional_data, history_title) {
			/* Gather environment information */
			var meInfo 	= apiRH.ls.getItem('me');
			var logged 	= apiRH.ls.getItem('me.logged');
			var parsed 	= {me: JSON.parse(meInfo), logged_user: JSON.parse(logged)};
			
			if(optional_data){
				parsed['data'] = optional_data;
				//return parsed;
			}
			if(history_title)
				parsed['header_title'] = history_title;
			return parsed;

		},
		getUrlVars: function() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
				vars[key] = value;
			});
			return vars;
		},
		/* Returns the values in a form as an associative array */
		/* IMPORTANT: Does NOT include password type fields */
		getFormData: function (selector) {
			return $(selector).serializeJSON();
		},
		isObjEmpty: function (obj) {

				if (obj == null) return true;
				if (obj.length > 0)    return false;
				if (obj.length === 0)  return true;

				for (var key in obj) 
					if (hasOwnProperty.call(obj, key)) return false;
				return true;
		},
		render_header : function(){
			$.getJSON(api_base_url+'auth/user/me/', function(response){
				console.log(response);
				var template = Handlebars.templates.header(response);
				$('.content').append( template );
			});
		},
		render_menu : function(){
			$.getJSON(api_base_url+'auth/'+user+'/me', function(response){
				console.log(response);
				var template = Handlebars.templates.header(response);
				$('.main').prepend( template ).trigger('create');
			});
		},
		render_feed : function(offset, filter){
			app.showLoader();
			$.getJSON(api_base_url+'feed/'+offset+'/'+filter , function(response){
			})
			 .fail(function(err){
				console.log(JSON.stringify(err));
				app.hideLoader();
				app.toast("Failed connecting to our servers, please check your Internet connection.")
			})
			 .done(function(response){
				var data = app.gatherEnvironment(response);
					data.home_active = true;
					console.log(data);
			 	var source   = $("#feed_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
					if(!loggedIn)
						$('#account1').trigger('click');
				}, 2000);
			});
			
		},
		render_search_composite : function(){
			$.getJSON(api_base_url+user+'/content/search-composite/')
			 .done(function(response){
			 	console.log(response);
				response.search_active =  true;
				var data 	 = app.gatherEnvironment(response);
					data.search_active = true;
				var source   = $("#search_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
			})
			 .fail(function(error){
			 	console.log(error);
			 });
		},
		render_search_results : function(search_term){
			$.getJSON(api_base_url+'content/search/'+search_term)
			 .done(function(response){
				var data 	 = app.gatherEnvironment(response.data);
					data.search_active = true;
					data.search_term = search_term;
					console.log(data);
				var source   = $("#search_results_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
			})
			 .fail(function(error){
			 	console.log(error);
			 });
		},
		render_map : function(){
			// $.getJSON(api_base_url+'content/search-composite/')
			//  .done(function(response){
				// console.log(response);
				var data = {explore_active: true};
				var source   = $("#map_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
			// })
			//  .fail(function(error){
			//  	console.log(error);
			//  });
		},
		render_detail : function(product_id){

			$.getJSON(api_base_url+'products/'+product_id)
			 .done(function(response){
			 	console.log(response);
				var data = app.gatherEnvironment(response, "Printables");
				var source   = $("#detail_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			 .fail(function(error){
			 	console.log(error);
			 });
		},
		render_post : function(post_id){

			/* Send header_title for it renders history_header */
			$.getJSON(api_base_url+'content/'+post_id)
			 .done(function(response){
				var data = app.gatherEnvironment(response, "Now reading");
				var source   = $("#post_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			 .fail(function(error){
			 	console.log(error);
			 });
		},
		render_create_user : function(){

			/* Send header_title for it renders history_header */
			var data = app.gatherEnvironment(null, "Create account");
			var source   = $("#create_user_template").html();
			var template = Handlebars.compile(source);
			$('.main').html( template(data) );
			setTimeout(function(){
				app.hideLoader();
			}, 2000);
		},
		render_settings : function(){
			/* Send header_title for it renders history_header */
			$.getJSON(api_base_url+user+'/me/')
			 .done(function(response){
			 	console.log(response);
				/* Send header_title for it renders history_header */
				var data = app.gatherEnvironment(response, "Account settings");
				var source   = $("#settings_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			  .fail(function(err){
		  		console.log(err);
		  	});
		},
		render_notifications : function(){
			/* Send header_title for it renders history_header */
			var data = app.gatherEnvironment(null, "Notifications");
			data.notifications_active = true;
			var source   = $("#notifications_template").html();
			var template = Handlebars.compile(source);
			$('.main').html( template(data) );
			setTimeout(function(){
				app.hideLoader();
			}, 2000);
		},
		render_dashboard : function(){
			$.getJSON(api_base_url+user+'/dashboard/')
			 .done(function(response){
			 	/* Send header_title for it renders history_header */
				var data = app.gatherEnvironment(response, "Dashboard");
			 	console.log(data);
				var source   = $("#dashboard_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			  .fail(function(err){
		  		console.log(err);
		  	});
		},
		render_maker : function(maker_id){
			$.getJSON(api_base_url+user+'/maker/'+maker_id)
			 .done(function(response){
			 	/* Send header_title for it renders history_header */
				var data = app.gatherEnvironment(response, "Maker profile");
			 	console.log(data);
				var source   = $("#maker_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			  .fail(function(err){
		  		console.log(err);
		  	});
		},
		render_taxonomy : function(term_id, tax_name){
			$.getJSON(api_base_url+'content/taxonomy/'+tax_name+'/'+term_id)
			 .done(function(response){
			 	/* Send header_title for it renders history_header */
			 	var header_title = (tax_name == 'design-tools') ? 'Made with: '+response.name : response.name;
				var data = app.gatherEnvironment(response, header_title);
				var source   = $("#tax_archive_template").html();
				var template = Handlebars.compile(source);
				$('.main').html( template(data) );
				setTimeout(function(){
					app.hideLoader();
				}, 2000);
			})
			  .fail(function(err){
		  		console.log(err);
		  	});
		},
		get_user_timeline : function(offset){
			/* To do: send block length from the app */
			$.getJSON(api_base_url+user+'/timeline/'+offset, function(response){
				offset++;
				var data = {};
				data.results = response;
				var source   = $("#event_entry_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(data) );
				/* To do: send block length from the app, change hardcoded 10 */
				if($('#load_more_posts').length > 0)
					$('#load_more_posts').remove();
				if(data.results.length < 10){
					$('.feed_container').append( "<a class='load_more' data-role='none'>No hay más actividad</a>" );
					return;
				}
				$('.feed_container').append( "<a class='load_more' id='load_more_posts' data-role='none' data-page='"+offset+"'><i class='fa fa-refresh'></i> Cargar más</a>" );
				return;
			}).fail(function(err){
				console.log(err);
			}).done(function(err){
				app.render_header();
			});
			
		},
		render_event_minigallery: function(event_id, limit){
			
			$.getJSON(api_base_url+'events/'+event_id+'/gallery/'+limit+'/thumbnail/', function(response){

				app.registerTemplate('mini_event_gallery');
				var template = Handlebars.templates.mini_event_gallery(response);
				$('.append_gallery').prepend( template ).trigger('create');
			});
		},
		render_event_popup: function(event_id){
			app.registerTemplate('event_popup');
			var template = Handlebars.templates.event_popup({'event_id': event_id});
			$('.main').append( template ).trigger('create');
		},
		render_comments: function(event_id, offset){
			$.getJSON(api_base_url+'events/comments/'+event_id+'/'+offset, function(response){
				var template   = Handlebars.templates.comments(response.data);
				$('.main').append( template );
			});
		},
		render_event: function(event_id){
			app.render_header();
			$.getJSON(api_base_url+user+'/events/'+event_id, function(response){
				app.registerTemplate('single_event');
				var template = Handlebars.templates.single_event(response);
				$('.feed_container').append( template ).trigger('create');
			});
			app.render_event_minigallery(event_id, 5);
			app.render_comments(event_id, 0);
			app.render_event_gallery_partial(event_id);
			app.render_event_popup(event_id);
		},
		render_my_schedule: function(offset){
			$.getJSON(api_base_url+user+'/scheduled_feed/'+offset, function(response){
				var source   = $("#event_single_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response) );
			});
		},
		render_user: function(user_login){
			$.getJSON(api_base_url+user+'/user/'+user_login, function(response){
				var source   = $("#user_profile_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response) ).trigger('create');
			});
		},
		render_user_profile: function(user_login){
			$.getJSON( api_base_url+user+'/user/'+user_login , function(response){
				var source   = $("#user_profile_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').prepend( template(response) ).trigger('create');
				if(response.is_artista){
					app.render_artist_project_partial(response.user_login);
					app.render_artist_picsmini(response.user_login)
				}
			});
		},
		render_user_picsmini: function(user_login){
			$.getJSON( api_base_url+'user/'+user_login+'/gallery/5/thumbnail/', function(response){
				var source   = $("#user_picsmini").html();
				var template = Handlebars.compile(source);
				$('.feed_container').prepend( template(response) ).trigger('create');
			});
		},
		render_artist_picsmini: function(user_login){
			$.getJSON( api_base_url+'user/'+user_login+'/projects/99/thumbnail/', function(response){
				var source   = $("#mini_projects_template").html();
				var template = Handlebars.compile(source);
				$('.artist_project_mini').append( template(response) );
			});
		},
		render_my_profile: function(){
			$.getJSON( api_base_url+user+'/user/'+user , function(response){
				var source   = $("#my_profile_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').prepend( template(response) ).trigger('create');
			});
		},
		render_categories: function(){
			$.getJSON( api_base_url+user+'/categories/0' , function(response){
				var source   = $("#category_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response) ).trigger('create');
			});
		},
		render_subcategories: function(parent){
			$.getJSON( api_base_url+user+'/categories/'+parent , function(response){
				var source   = $("#subcategory_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response) ).trigger('create');
			});
		},
		render_category_detail: function(cat_id){
			$.getJSON( api_base_url+user+'/category/'+cat_id , function(response){
				var source   = $("#category_detail_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response.data) ).trigger('create');
			});
		},
		render_schedule_first_events: function(offset){
			$.getJSON( api_base_url+user+'/events/feed/'+offset , function(response){
				var source   = $("#event_entry_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response) ).trigger('create');
			});
		},
		render_venue_profile: function(venue_id){
			$.getJSON( api_base_url+user+'/venues/'+venue_id , function(response){
				var source   = $("#venue_profile_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response.data) ).trigger('create');
			});
		},
		render_discover_screen: function(){
			$.getJSON( api_base_url+user+'/feeds/discover/' , function(response){
				var source   = $("#discover_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response.data) ).trigger('create');
			});
		},
		get_search_results: function(search_term, offset){
			$.getJSON( api_base_url+'user/'+user+'/search/'+search_term+'/'+offset , function(response){
				var source   = $("#search_entry_template").html();
				var template = Handlebars.compile(source);
				console.log(response);
				$('.feed_container').append( template(response.data) ).trigger('create');
				/* To do: send block length from the app, change hardcoded 10 */
				if($('#load_more_results').length > 0)
					$('#load_more_results').remove();
				if(response.data == 0){
					$('.feed_container').append( "<a class='load_more' data-role='none'>No hay resultados para tu búsqueda</a>" );
					return;
				}
				if(response.data.results.length < 10){
					$('.feed_container').append( "<a class='load_more' data-role='none'>No hay más resultados</a>" );
					return;
				}
				$('.feed_container').append( "<a class='load_more' id='load_more_results' data-role='none' data-page='"+offset+"'><i class='fa fa-refresh'></i> Cargar más</a>" );
				return;
			});
		},
		get_user_followers: function(queried_user, type){
			if(!type) type = "any";
			$.getJSON( api_base_url+user+'/user/'+queried_user+'/followers/'+type , function(response){
				var source   = $("#follower_entry_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response.data) ).trigger('create');
			});
		},
		get_user_followees: function(queried_user, type){
			if(!type) type = "any";
			$.getJSON( api_base_url+user+'/user/'+queried_user+'/followees/'+type , function(response){
				var source   = $("#follower_entry_template").html();
				var template = Handlebars.compile(source);
				$('.feed_container').append( template(response.data) ).trigger('create');
			});
		},
		set_selected_filter: function(filter){
			$(".tab_button").filter(function() {
					return $(this).data('rel') == filter; 
			}).addClass('selected');
		},
		set_query_title: function(queried_term){
			$('.insert_query').text('"'+queried_term+'"');
		},
		set_selected_city: function(stored_city){
			if(!stored_city || stored_city == '')
				return false;
			var opt = $("#city option[value='"+stored_city+"']");
			opt.prop('selected', 'selected');
			$('#city').change();
			return;
		},
		get_file_from_device: function(destination, source){
			apiRH.getFileFromDevice(destination, source);		
		},
		showLoader: function(){
			$('#spinner').show();
		},
		hideLoader: function(){
			$('#spinner').hide();
		},
		toast: function(message, bottom){
			try{
				if(!bottom){
					window.plugins.toast.showLongCenter(message);
				}else{
					window.plugins.toast.showLongBottom(message);
				}
			}
			catch(err){
				console.log('Toasting error: ' + JSON.stringify(err));
				alert(message);
			}
			return;
		},
		render_event_gallery_partial: function(event_id){
			
			$.getJSON(api_base_url+'events/'+event_id+'/gallery/99/', function(response){
				var template = Handlebars.templates.gallery_base(response);
				$('body').append( template);
				/*Set elements into temporary variable */
				window.event_temp_gallery_items = response.items;
			});
			return;
		},
		render_user_gallery_partial: function(user_login){
			
			$.getJSON(api_base_url+'user/'+user_login+'/gallery/99/', function(response){
				var template = Handlebars.templates.gallery_base(response);
				$('body').append( template );
				/*Set elements into temporary variable */
				window.user_temp_gallery_items = response.items;
			});
			return;
		},
		render_artist_project_partial: function(user_login){
			
			$.getJSON(api_base_url+'user/'+user_login+'/projects/99/', function(response){
				var template = Handlebars.templates.gallery_base(response);
				$('body').append( template );
				/*Set elements into temporary variable */
				window.user_temp_gallery_items = response.items;
			});
			return;
		},
		trigger_event_gallery: function(index){
			window.event_gallery = null;
			var pswpElement = document.querySelectorAll('.pswp')[0];
			var items = window.event_temp_gallery_items;
			var options = {
				history: false,
		        focus: false,

		        showAnimationDuration: 0,
		        hideAnimationDuration: 0,
			    index: index
			};
			// Initializes and opens PhotoSwipe
			window.event_gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			return;
		},
		trigger_user_gallery: function(index){
			window.user_gallery = null;
			var pswpElement = document.querySelectorAll('.pswp')[0];
			var items = window.user_temp_gallery_items;
			var options = {
				history: false,
		        focus: false,

		        showAnimationDuration: 0,
		        hideAnimationDuration: 0,
			    index: index
			};
			// Initializes and opens PhotoSwipe
			window.user_gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			return;
		}
	};

   /*      _                                       _                        _       
	*   __| | ___   ___ _   _ _ __ ___   ___ _ __ | |_   _ __ ___  __ _  __| |_   _ 
	*  / _` |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __| | '__/ _ \/ _` |/ _` | | | |
	* | (_| | (_) | (__| |_| | | | | | |  __/ | | | |_  | | |  __/ (_| | (_| | |_| |
	*  \__,_|\___/ \___|\__,_|_| |_| |_|\___|_| |_|\__| |_|  \___|\__,_|\__,_|\__, |
	*                                                                         |___/ 
	*/
	jQuery(document).ready(function($) {

		$('#search_by_photo').click(function(){
			app.get_file_from_device('search', 'camera');
		});

		/* Create a new account the old fashioned way */
		if($('#register_form').length)
			$('#register_form').validate({
				rules: {
					user_login_reg: "required",
					user_email_reg: {
							required: true,
							email: true
						},
					user_country: "required",
					i_accept_terms : "required"
				},
				messages: {
					user_login_reg: "Debes proporcionar un username",
					user_email_reg: {
							required: "Debes proporcionar un email",
							email: "Por favor proporciona un email válido"
						},
					user_country: "Por favor selecciona tu país",
					i_accept_terms: "Debes aceptar los términos y condiciones para continuar"
				},
				submitHandler: function(e){
					var data_login  	= app.getFormData('#register_form');
					data_login.user_password_reg = $('#user_password_reg').val();
					var responsedata 	= apiRH.registerNative(data_login);
					if(responsedata) {
						apiRH.save_user_data_clientside(responsedata);
						window.location.assign('feed.html?filter_feed=all');
						return;
					}
					app.toast('Lo sentimos, el nombre de usuario ya existe.');
					e.preventDefault();
				}
			});

		/* Log Out from the API */
		$('body').on('click', '#logout', function(e){
			/* Requesting logout from server */
			var response = apiRH.logOut({user_login : user, request_token : apiRH.get_request_token() });
			if(response.success){
				app.toast('Session ended, see you soon!');
					app.ls.removeItem('dedalo_log_info');
					app.ls.removeItem('request_token');
					app.ls.removeItem('me.logged');
					app.ls.removeItem('me');
				window.location.assign('index.html');
				return;
			}
			app.toast('Ocurrió un problema al intentar cerrar tu sesión');
			return;
		});





		// ----------------------------------------------------------------------



		//MARK NOTIFICATION AS READ
		$('.main').on('tap', '.each_notification a', function(e){
			e.preventDefault();
			var redirect = $(this).attr('href');
			var $context = $(this);
			if($context.hasClass('read')) return false;
			var context_id = $context.data('id');
			
			var response = apiRH.makeRequest(user+'/notifications/read/'+context_id);
			if(response){
				$context.addClass('read');
			}
			window.location.assign(redirect);
			
		});

	

	//-----------------------------------------------------------

		/* Pagination Load more posts */
		$(document).on('tap', '#load_more_posts', function(e){
			e.preventDefault();
			var offset = $(this).data('page');
			app.get_user_timeline(offset);
			e.stopPropagation();
		});

		/* Pagination Load more search results */
		$(document).on('tap', '#load_more_results', function(e){
			e.preventDefault();
			var offset = $(this).data('page');
			var GET = app.getUrlVars();

			app.get_search_results(GET.searchbox, offset);
			e.stopPropagation();
		});

	
		/* Insert new comment in event */
		$('#comment_button').on('tap', function(){
			var post_id = $('#hidden_event_id').val();
			var comment_content = $('#comment_content').val();
			var response = apiRH.makeRequest(user+'/events/comments/', {'event_id': post_id, 'comment_content': comment_content});
			if(response.success){
				window.location.reload();
				return;
			}
			app.toast('Ha ocurrido un error al postear tu comentario');
		});

		/* Autocomplete usernames for recommend event */
		$("#user_rec").on("change keyup", function() {
			var search = $(this).val();
			var render = "";
			var response = apiRH.getRequest(user+'/search/'+search, null);
			response.data.forEach(function(value){
				render += "<li class='fill_input' data-value='"+value+"'>"+value+"</li>";
			});
					$("#hidden_list").html(render).show().delay(6000).fadeOut('fast');
			});

			/* change value when suggested username is clicked */
			$(document).on('tap', '.fill_input', function(){
				var value = $(this).data('value');
				$('#user_rec').val(value);
				$("#hidden_list").html('').fadeOut('fast');
			});

			$(document).on('tap', 'a[rel=external]', function(){
				app.showLoader();
			});

			/* Category follow events */
			$(document).on('tap', '._nav_follow_category', function(e){
				e.preventDefault();
				var $context 	= $(this);
				var cat_id 		= $(this).data('id');
				var response 	= apiRH.makeRequest(user+'/categories/follow/', {'cat_id': cat_id});
			e.stopPropagation();
			if(response.success){
				app.toast('Sigues una nueva categoría');
				$context.removeClass('_nav_follow_category follow_category').addClass('_nav_unfollow_category unfollow_category');
				if($context.hasClass('inline')){
					$context.html('<i class="fa fa-check"></i>');
					return;
				}
				$context.html('<i class="fa fa-check"></i> Siguiendo');
				e.stopPropagation();
				return;
			}
			return app.toast('Oops! ocurrió un error');
			});

		/* Category follow events */
			$(document).on('tap', '._nav_unfollow_category', function(e){
				e.preventDefault();
				var $context 	= $(this);
				var cat_id 		= $(this).data('id');
				var response 	= apiRH.makeRequest(user+'/categories/unfollow/', {'cat_id': cat_id});
				e.stopPropagation();
			if(response.success){
				app.toast('Dejaste de seguir una categoría');
				$context.removeClass('_nav_unfollow_category unfollow_category').addClass('_nav_follow_category follow_category');
				if($context.hasClass('inline')){
					$context.html('<i class="fa fa-plus-circle"></i>');
					return;	
				}
				$context.html('<i class="fa fa-plus-circle"></i> Seguir');
				
				return;	
			}
			return app.toast('Oops! ocurrió un error');
			});

			/* Upload file to event trigger */
			$('#event_upload_trigger').on('tap', function(){
				$(this).fadeOut('fast', function(){
					$('#event_file_upload').fadeIn().removeClass('invisibo');
					$('#event_camera_upload').fadeIn().removeClass('invisibo');
				});
			});

				/* Upload picture from gallery */
				$('#event_file_upload').on('tap', function(){
					var ls = window.localStorage;
					ls.setItem('museo_last_selected_event', $(this).data('eventid'));
					app.get_file_from_device('event', 'gallery');
				});
				/* Take a picture and upload it */
				$('#event_camera_upload').on('tap', function(){
					var ls = window.localStorage;
					ls.setItem('museo_last_selected_event', $(this).data('eventid'));
					app.get_file_from_device('event', 'camera');
				});
		
			/* Upload user profile pic */
			$('#mod_user_profile').on('tap', function(){
				app.get_file_from_device('profile', 'gallery');
			});

	});