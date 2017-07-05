var Task=false;
var active=false;
var EditorListener=true;
var mouseOverDone=true;
var CloseIconMouseOverAction;
var ElementListener;
var parent;
var prvsElems;
var Zohodesk_Chrome_Extension_ConfigureElement=null;
var organitationID;
var AsapId;
var AsapName;
var ExtensionProjectId;
var windowLocationHref;
var PortalName;
var DepartmentName;
var AsapCSS="";
var Chrome_Extension_Save_Or_Edit_Option="Chrome_Extension_Save_ToolTip";
var Chrome_Extension_ToolTip_Delete_Or_Cancel="ToolTip Cancel";
var zd_tt_csrf;
var listOfTriggersObj=[];

var commomDomainNameForAPI="support.zoho.com";


function findHighestZIndex(elem) {
    var elems = document.getElementsByTagName(elem);
    testing = elems;
    var highest = 0;
    for (var i = 0; i < elems.length; i++) {
        var zindex = document.defaultView.getComputedStyle(elems[i]).getPropertyValue("z-index");
        if ((parseInt(zindex) > highest) && (zindex != 'auto')) {
            highest = parseInt(zindex);
        }
    }
    return highest;
}

function attachListeners()
{
        document.addEventListener('mousedown', onMouseDown, true);
        document.addEventListener('click', onMouseClick, true);
        document.addEventListener('mouseup', onMouseUp, true);
        document.addEventListener('dblclick',dblclick,true);
}
function dblclick(e)
{
	document.removeEventListener('click',onMouseClick,true);
	e.target.click();
	document.addEventListener('click', onMouseClick, true);
	document.addEventListener('mouseover',selectElement,true);
	Zohodesk_Chrome_Extension_ConfigureElement=null;
	// document.addEventListener('mousedown',Editor,true);
}
function onMouseDown(e)
{
	ElementListener=findInnerElements("editorBody",e.target);
	if (ElementListener != true)
	{
		Editor(e);
		e.preventDefault();
	    e.stopPropagation();
	}
}
function onMouseClick(e)
{
	ElementListener=findInnerElements("editorBody",e.target);
	TooltipListener=findInnerElements("Chrome_Extension_showContentId",e.target);
	if (ElementListener != true && TooltipListener != true)
	{
		e.preventDefault();
    	e.stopPropagation();
    }
}
function onMouseUp(e)
{
	ElementListener=findInnerElements("editorBody",e.target);
	if (ElementListener != true)
	{
		e.preventDefault();
	    e.stopPropagation();
	}
}
function detachClickListener()
{
	document.removeEventListener('click',onMouseClick,true);
	document.removeEventListener('mouseup', onMouseUp, true);
	document.removeEventListener('click', detachClickListener, true);
	document.removeEventListener('mousedown', onMouseDown, true);
	document.removeEventListener('dblclick',dblclick,true);
}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{
		if (request.message=="activeTooltip")
		{
			window.postMessage({name:"UrlCheck"},"*");
			/*window.postMessage({name:"UrlCheck"},"*");
			chrome.runtime.sendMessage({"message":"editor"});
			document.addEventListener('mouseover',selectElement,true);
			chrome.runtime.sendMessage({"message":"previewMode"});
			attachListeners();*/
		}
		else if(request.message==true)
		{
			window.postMessage({name:"UrlCheck"},"*");
			chrome.runtime.sendMessage({"message":"editor"});
			document.addEventListener('mouseover',selectElement,true);
			chrome.runtime.sendMessage({"message":"previewMode"});
			attachListeners();
		}
		else if(request.message==false)
		{
			active=true;
			signin();
		}
		else if(request.message=="cookieGet")
		{
			var cookieRes=JSON.parse(request.cookieValue);
			if (cookieRes.csrf != "noCookie" && cookieRes.agent != "noCookie")
			{
				zd_tt_csrf=cookieRes.csrf;
				portalAPI(cookieRes.agent);
			}
			else
			{
				createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>You are not signin your zohoDesk account...</b><br> please signin your desk account , and try some time later..."});
			}
		}
		else if (request.message==="active")
		{
			chrome.runtime.sendMessage({"message":active});
		}
		else if (request.message==="deactivateApp")
		{
			action=false;
		}
})
function AllFunction()
{
	document.addEventListener('mousedown',DeriveFunction,true);
}
function DeriveFunction(e)
{
	if (e.target.id=="tool_tip" || e.target.id=="toolTip_id" || e.target.id=="toolTipClickAction" || e.target.id=="toolTipClickActionChild" || e.target.id=="toolTipClickActionMainChild")
	{

		var zohodeskInitJs = document.createElement("script");
		zohodeskInitJs.type = "text/javascript";
		zohodeskInitJs.src = "https://localjs.zohostatic.com/support/05_02_2017_11937/js/ZohoDeskEditor_Tooltip_Init.js";
		zohodeskInitJs.className="desk_support_chromeAddons";
		document.getElementsByTagName("head")[0].appendChild(zohodeskInitJs);

		var Kernelscript = document.createElement("script");
		Kernelscript.type = "text/javascript";
		Kernelscript.src = "https://localjs.zohostatic.com/support/zde_v1/ZohoDeskEditorKernal.min.js";
		Kernelscript.className="desk_support_chromeAddons";
		document.getElementsByTagName("head")[0].appendChild(Kernelscript);

		var zohoDeskEditterCreater = document.createElement("script");
		zohoDeskEditterCreater.type = "text/javascript";
		zohoDeskEditterCreater.defer = true;
		zohoDeskEditterCreater.src = "https://localjs.zohostatic.com/support/05_04_2017_1052/js/ZohoDeskEditor_Tooltip_Edit.js";
		zohoDeskEditterCreater.className="desk_support_chromeAddons";
		document.getElementsByTagName("head")[0].appendChild(zohoDeskEditterCreater);


		clear("toolTipClickAction","parent");
		Task=true;
		attachListeners(e);
		document.addEventListener('mouseover',selectElement,true);
		getConfigureElements();
	}
}
function selectElement(e)
{
	ElementListener=findInnerElements("editorBody",e.target);
	TooltipListener=findInnerElements("Chrome_Extension_showContentId",e.target);
	if (ElementListener != true && TooltipListener !=true)
	{
		if (prvsElems!=undefined && prvsElems!=null)
		{
			prvsClass=(prvsElems.getAttribute("class")).replace(" zohodesk-Tooltip-currentShad","");
			prvsElems.className=prvsClass;
		}
		prvsElems=document.querySelector(fullPath(e.target));
		if(prvsElems){
			prvsElems.className+=" zohodesk-Tooltip-currentShad";
		}
	}
}
function Editor(e)
{	
	if (mouseOverDone==true)
	{
		EditorListener=false;
		Chrome_Extension_ToolTip_Delete_Or_Cancel="ToolTip Cancel";
		Chrome_Extension_Save_Or_Edit_Option="Chrome_Extension_Save_ToolTip";
		Zohodesk_Chrome_Extension_ConfigureElement=prvsElems;
		document.removeEventListener('mouseover',selectElement,true);
		Task=false;
	}
}

function clear(e,action)
{
	if (action=="parent")
	{
		parent=document.getElementById(e).parentElement;
		parent.parentElement.removeChild(parent);
	}
	else if(action=="current")
	{
		parent=document.getElementById(e).parentElement;
		parent.removeChild(document.getElementById(e));
	}
}
function fullPath( selectedElement ){ 
	var isIDExist = false;
	var elementPath = [];
	var childs;
	if(selectedElement.id!=""){  
	elementPath.unshift("[id='"+selectedElement.id+"']")
	return elementPath[0]
	    }

	while(!isIDExist){
	childs=selectedElement.parentElement.children
	for(var c=0;childs[c]!=selectedElement;c++);
	elementPath.unshift(selectedElement.tagName+":nth-child("+(c+1)+")")
	selectedElement = selectedElement.parentElement
	if(selectedElement.id!==""){
	elementPath.unshift("[id='"+selectedElement.id+"']")
	isIDExist=true
	        }
	else if(selectedElement.tagName=="HTML"){
	elementPath.unshift("HTML")
	isIDExist=true
	        }
	    }
	    return elementPath.join(" > ")
}
function findInnerElements(parentEleId,checkEle){
	try{
		var innerElement = false
		var parentEle = document.getElementById(parentEleId);
		var parentEleChild = parentEle.getElementsByTagName("*")
		var parentEleChildLen = parentEleChild.length
		for(i=0;i<parentEleChildLen;i++){
			if(checkEle==parentEleChild[i]){
				innerElement=true
				break
			}
		}
		return innerElement
	}catch(err){
		//console.log(err);
	}	
}


function Chrome_Extension_ExecuteEditor()
{
	window.postMessage({name:"Department"},"*")
	chrome.runtime.sendMessage({"message":"editor"});
	document.addEventListener('mouseover',selectElement,true);
	chrome.runtime.sendMessage({"message":"previewMode"});
	attachListeners();
}

function Chrome_Extension_AddExtension(AsapId,organitationID,AsapName,domainName)
{
	requestAPI(" https://"+commomDomainNameForAPI+"/api/web/extensions?isEnabled=true&orgId="+organitationID+"&extensionName="+encodeURIComponent(AsapName)+"&domain="+encodeURIComponent(domainName)+"&asapId="+AsapId).post().then((res)=>{
		if(res.data != "you_dontHave_A_permission"){
			ExtensionProjectId=res.id;
			Chrome_Extension_ExecuteEditor();
		}
		else{
			createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>You dont have a admin permission for this portal...</b> sorry Permission is denited..."});
			document.getElementsByClassName("zohodesk-Tooltip-error-message")[0].style.position="fixed";
			document.getElementsByClassName("zohodesk-Tooltip-layer")[0].style.position="fixed";
		}
	})
}


function Chrome_Extension_GetExtension(AsapId,organitationID)
{
	var domainName=window.location.hostname;
	requestAPI(" https://"+commomDomainNameForAPI+"/api/web/extensions?orgId="+organitationID+"&domain="+encodeURIComponent(domainName)+"&asapId="+AsapId).get().then((res)=>{
		if (res[0] != undefined)
		{
			console.log("Created",res);
			ExtensionProjectId=res[0].id;
			Chrome_Extension_ExecuteEditor();
		}
		else
		{
			console.log("willCreate",res);
			Chrome_Extension_AddExtension(AsapId,organitationID,AsapName,domainName);
		}
	})
}

function portalAPI(IAMAGENTTICKET)
{
	requestAPI(" https://support.zoho.com/api/v1/reports/organizations?ticket="+IAMAGENTTICKET).get().then((res)=>{
		var portals=res.data;
		var i;
		console.log(res);
		if(typeof(res.data)=="object"){
			for(i in portals){
				if(JSON.stringify(portals[i].id)==JSON.stringify(organitationID)){
					if(portals[i].isAdmin){
						Chrome_Extension_GetExtension(AsapId,organitationID);
						PortalName=portals[i].organizationName;
						return;
					}
					else
					{
						createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>You are not a Admin...</b> sorry Permission is denited..."});
						return;
					}
				}
			}
			createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>You are not in the portal ...</b> sorry Permission is denited..."});
			return;
		}
		else if(typeof(res.data)=="string"){
			createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>Please Sign in desk.zoho.com ... </b> sorry Permission is denited..."});
		}
	})
}

window.addEventListener("message", function(event)
{
	if (event.data.name=="department")
	{
		DepartmentName=event.data.value;
	}
	else if(event.data.type==="toolTip_orgId"){
		organitationID=event.data.orgId;
		AsapId=event.data.AsapId;
		AsapName=event.data.AsapName;
		chrome.runtime.sendMessage({"message":"getCookie"});
	}
	else if(event.data.type=="Asap_Not_Found")
	{
		createToolTipErrorPopupBox({buttons:[{id:"zd_tt_ok",content:"ok"},{id:"zd_tt_cancel",content:"cancel"}],content:"<b>ASAP is not found ...</b><br>Please enable the ASAP and start the configuration ..."});
	}

})

/*requestAPI("http://muhammed-zt133.tsi.zohocorpin.com:8936/api/web/asap/1000000008961?orgId=4628348&domain=hhskha.com").get().then((res)=>{
console.log(res);
})*/



