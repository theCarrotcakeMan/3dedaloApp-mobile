!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["subheader"]=a({1:function(a,n,l,e,t){var s,i,r=null!=n?n:{},u=l.helperMissing,c="function";return'<a class="cats" data-id="'+a.escapeExpression((i=null!=(i=l.ID||(null!=n?n.ID:n))?i:u,typeof i===c?i.call(r,{name:"ID",hash:{},data:t}):i))+'">'+(null!=(i=null!=(i=l.name||(null!=n?n.name:n))?i:u,s=typeof i===c?i.call(r,{name:"name",hash:{},data:t}):i)?s:"")+"</a>"},3:function(a,n,l,e,t){var s,i,r=null!=n?n:{};return'\t\t<div id="subcats'+a.escapeExpression((i=null!=(i=l.ID||(null!=n?n.ID:n))?i:l.helperMissing,"function"==typeof i?i.call(r,{name:"ID",hash:{},data:t}):i))+'" style="display:none" class="submenus">\n\t\t\t<div class="swipper1">\n\t\t\t<div>\n'+(null!=(s=l.each.call(r,null!=(s=null!=n?n.children:n)?s.pool:s,{name:"each",hash:{},fn:a.program(4,t,0),inverse:a.noop,data:t}))?s:"")+'\t\t\t</div>\n\t\t</div><i class="return" class="material-icons arrow_back"></i></div>\n'},4:function(a,n,l,e,t){var s,i=null!=n?n:{},r=l.helperMissing,u="function",c=a.escapeExpression;return'\t\t\t\t\t<a id="sca'+c((s=null!=(s=l.ID||(null!=n?n.ID:n))?s:r,typeof s===u?s.call(i,{name:"ID",hash:{},data:t}):s))+'" class="sucats">'+c((s=null!=(s=l.name||(null!=n?n.name:n))?s:r,typeof s===u?s.call(i,{name:"name",hash:{},data:t}):s))+"</a>\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,t){var s,i=null!=n?n:{};return'<div class="subheader">\n\t<div id="swipper">\n\t\t<div>\n\t\t\t'+(null!=(s=l.each.call(i,null!=(s=null!=n?n.categories:n)?s.pool:s,{name:"each",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?s:"")+"\n\t\t</div>\n\t</div>\n"+(null!=(s=l.each.call(i,null!=(s=null!=n?n.categories:n)?s.pool:s,{name:"each",hash:{},fn:a.program(3,t,0),inverse:a.noop,data:t}))?s:"")+"</div>\n\n\n"},useData:!0})}();