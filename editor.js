var contentLoaded = false;
var orgId;
var ArticleContent;
var ArticleContentValue;
var Trigger_option = "HOVER";
CloseIconMouseOverAction = true;
var Size_option = "LARGE";

var ArticlesObject;
var SingleArticleId = "";
var AnchorTagsList = null;
var ZohodeskTooltipCommonShowHideVariable = "";
var ZohodeskToolTipCheckVariable = false;


var popupBackgroundColor;
var editer_InnerTextContent = "";
var Chrome_Extension_ArticleSummary;


var New_Created_Snippet_Id;



/* model api response */

var modelApiResponse = [{
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "muhammed.yahya+test15"
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "Levins Durai..."
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "Mani"
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "vasikaran"
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "Ravikumar "
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "Johnson jebakumar"
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "vimal"
        }
    },
    {
        "preferences": "{\"bgColor\":\"#ff728d\",\"viewSize\":\"LARGE\"}",
        "triggers": [{
            "element": "[id='header-inner'] > DIV:nth-child(1) > H1:nth-child(1) > A:nth-child(1)",
            "event": "HOVER",
            "url": "gamil.com",
            "id": "4000000016008"
        }],
        "templateId": "4000000016003",
        "components": [{
            "type": "ARTICLESNIPPET",
            "order": "0",
            "preferences": "{ \"key1\" : \"jsjjs\" }",
            "content": "<h1 style=\"color: blue;\">This is a Heading</h1>",
            "contentId": "4000000016001",
            "id": "4000000016004"
        }],
        "viewCount": "0",
        "id": "4000000016006",
        "name": "mesg1",
        "isEnabled": true,
        "viewtype": "TOOLTIP",
        "modifiedBy": {
            "id": "123",
            "name": "Arul murugan"
        }
    }
];




function ZT_HexColorValue() {};
ZT_HexColorValue.prototype.rgbToHex = function(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
};
ZT_HexColorValue.prototype.componentToHex = function(c) {
    this.hex = c.toString(16);
    return this.hex.length == 1 ? "0" + this.hex : this.hex;
}

var zd_colorValueChanger = new ZT_HexColorValue();

/* new UI functionalaties */



function sidePanel_align_EventBinder() {
    this.iconSpan = document.getElementById("sidePanel_float").firstElementChild;
    this.status = "Right";
    this.leftIcon = `<svg class="zohodesk-tooltip-svg-icon-medium"><use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#Tooltip-alignleft"></use></svg>`;
    this.rightIcon = `<svg class="zohodesk-tooltip-svg-icon-medium"><use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#Tooltip-alignright"></use></svg>`;
}
sidePanel_align_EventBinder.prototype.toggle = function() {
    this.status == "Right" ? this.iconSpan.innerHTML = this.leftIcon : this.iconSpan.innerHTML = this.rightIcon;
    this.status == "Right" ? this.status = "Left" : this.status = "Right";
    var element = document.getElementById("editorBody");
    element.className.indexOf('zohodesk-Tooltip-panel-left') == -1 ? element.className += " zohodesk-Tooltip-panel-left" : element.className = element.className.split(' zohodesk-Tooltip-panel-left').join('');
};
sidePanel_align_EventBinder.prototype.thisBinder = function() {
    this.toggle = this.toggle.bind(this);
};



function zd_tt_toggleHighlighter() {

    var li = document.getElementsByClassName('zohodesk-Tooltip-toggleTap-li');
    li[0].addEventListener('mousedown', function() {
        if (li[0].className.indexOf(' zohodesk-Tooltip-selectedOpts') == -1) {
            li[0].className += " zohodesk-Tooltip-selectedOpts";
            li[1].className = li[1].className.split(" zohodesk-Tooltip-selectedOpts").join("");
            zd_tt_toggleTaps("trigger_list_tap");
        }
    });
    li[1].addEventListener('mousedown', function() {
        if (li[1].className.indexOf(' zohodesk-Tooltip-selectedOpts') == -1) {
            li[0].className = li[0].className.split(" zohodesk-Tooltip-selectedOpts").join("");
            li[1].className += " zohodesk-Tooltip-selectedOpts";
            zd_tt_toggleTaps("add_tooltip_tap");
        }
    });
}


function zd_tt_toggleTaps(arg) {
    document.getElementById("ZDTT_switching_comonElem").innerHTML = "";
    var parser = document.createElement('div');
    if (arg === "trigger_list_tap") {
        var firstChildEle = `<div class="zohodesk-Tooltip-TriggersTitle zohodesk-Tooltip-cl-both" id="zig">
      <div class="zohodesk-Tooltip-TriggersTitlelft">
        <div class="zohodesk-Tooltip-Category">
          <span class="zohodesk-Tooltip-panel-form-selectbox  zohodesk-Tooltip-CategoryName" id="zdtt_spanDropDown">All</span>
          <div class="zohodesk-Tooltip-Selectbox-dropdown" id="triggerTapDropdown">
            <div class="zohodesk-Tooltip-dropdown-content">
              <ul class="zohodesk-Tooltip-list">
                <li class="zohodesk-Tooltip-dropdown-options">All</li>
                <li class="zohodesk-Tooltip-dropdown-options">Created By Me</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="zohodesk-Tooltip-TriggersTitlert">Views</div>
    </div>`;
        parser.innerHTML = firstChildEle;
        document.getElementById("ZDTT_switching_comonElem").appendChild(parser.firstChild);
        var secoundChild = `<div class="loading-area" id="zdtt_loadingContainer">
                  <div class="loading-content">
                      <div class="loading-item"></div>
                  </div>
                  <div>loading...</div>
              </div>`;
        parser.innerHTML = secoundChild;
        document.getElementById("ZDTT_switching_comonElem").appendChild(parser.firstChild);
        var zdtt_spanDropDown = document.getElementById('zdtt_spanDropDown');
        zdtt_spanDropDown.onclick = function() {
            var childDrop = document.getElementsByClassName('zohodesk-Tooltip-Selectbox-dropdown ')[0];
            if (childDrop.className.indexOf('zohodesk-displayBlock') == -1) {
                childDrop.className += " zohodesk-displayBlock";
            } else {
                childDrop.className = childDrop.className.split('zohodesk-displayBlock').join('');
            }
        };
        // createTriggerTap();
    } else if (arg === "add_tooltip_tap") {
        var editerBodyElements = ZohoDesk_tooltip_addNewContaine_creater();
        var childElelength = editerBodyElements.children.length;
        for (var i = 0; i < childElelength; i++) {
            document.getElementById("ZDTT_switching_comonElem").appendChild(editerBodyElements.children[0]);
        }
        zohoDesk_callEditerIntegration();
        articleAPI();
        zdtt_addnewEventsBinder();
    }
}


function ZohoDesk_tooltip_addNewContaine_creater(obj) {
    var parser = document.createElement('div');
    var output = document.createElement('div');
    if (obj != undefined) {

    } else if (obj == undefined) {
        parser.innerHTML = `<div class="zohodesk-Tooltip-panel-content">
   <div class="zohodesk-Tooltip-panel-headline-text">Trigger Name</div>
   <div class="zohodesk-Tooltip-panel-form-field">
      <input type="text" class="zohodesk-Tooltip-text-box zohodesk-Tooltip-input" placeholder="eg,.Header info icon" id="zd_tt_triggerName">
   </div>
   <div class="zohodesk-Tooltip-panel-headline-text">Choose Article</div>
   <div class="zohodesk-Tooltip-panel-form-field">
      <div class="zohodesk-Tooltip-form-field-icons">
         <span class="zohodesk-Tooltip-editor-iconarticle">
            <svg class="zohodesk-tooltip-svg-icon">
               <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#Tooltip-article"></use>
            </svg>
         </span>
      </div>
      <input type="text" class="zohodesk-Tooltip-text-box zohodesk-Tooltip-input" placeholder="Search..." id="searchArticleBox">
      <div class="zohodesk-Tooltip-Selectbox-dropdown zohodesk-Tooltip-Selectbox-dropdown-search" id="searchDisplay">
         <div class="zohodesk-Tooltip-dropdown-header">
            <span class="zohodesk-Tooltip-search-icon">
               <span class="zohodesk-Tooltip-editor-icontoprightsearch">
                  <svg class="zohodesk-tooltip-svg-icon-small">
                     <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#Tooltip-search"></use>
                  </svg>
               </span>
            </span>
            <span class="zohodesk-Tooltip-search-result">Did you mean <span id="searchName"></span>?</span>
         </div>
      </div>
   </div>
   <div class="zohodesk-Tooltip-panel-form-field">
      <div class="zohodesk-Tooltip-form-field-icons">
         <span class="zohodesk-Tooltip-editor-iconanchor">
            <svg class="zohodesk-tooltip-svg-icon">
               <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#Tooltip-anchor"></use>
            </svg>
         </span>
      </div>
      <div class="zohodesk-Tooltip-panel-form-selectbox zohodesk-Tooltip-placeholder-tag" id="Chrome_Extension_AnChorTag">Select Anchor tag</div>
      <div class="zohodesk-Tooltip-Selectbox-dropdown zohodesk-Tooltip-tags" id="Chrome_Extension_AnChorTag_Show">
      </div>
   </div>
   <div class="zohodesk-Tooltip-multi-form-field">
      <div class="zohodesk-Tooltip-fields">
         <div class="zohodesk-Tooltip-panel-form-field-label">Tooltip Size</div>
         <div class="zohodesk-Tooltip-panel-form-field">
            <div class="zohodesk-Tooltip-panel-form-selectbox" id="zohodesk_tooltip_size_shown_id">Large</div>
            <div class="zohodesk-Tooltip-Selectbox-dropdown" id="zohodesk_tooltip_size_dropDown_id">
               <div class="zohodesk-Tooltip-dropdown-content">
                  <ul class="zohodesk-Tooltip-list">
                     <li class="zohodesk-Tooltip-dropdown-options" id="zohodesk-Tooltip-small">Small</li>
                     <li class="zohodesk-Tooltip-dropdown-options" id="zohodesk-Tooltip-medium">Medium</li>
                     <li class="zohodesk-Tooltip-dropdown-options" id="zohodesk-Tooltip-large">Large</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="zohodesk-Tooltip-fields">
         <div class="zohodesk-Tooltip-panel-form-field-label">Activate Trigger</div>
         <div class="zohodesk-Tooltip-panel-form-field">
            <div class="zohodesk-Tooltip-panel-form-selectbox" id="zohodesk_tooltip_trigger">On Hover</div>
            <div class="zohodesk-Tooltip-Selectbox-dropdown" id="zohodesk_tooltip_trigger_options">
               <div class="zohodesk-Tooltip-dropdown-content">
                  <ul class="zohodesk-Tooltip-list">
                     <li class="zohodesk-Tooltip-dropdown-options" id="zohodesk_tooltip_trigger_options_onClick">On Click</li>
                     <li class="zohodesk-Tooltip-dropdown-options" id="zohodesk_tooltip_trigger_options_onHover">On Hover</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="zohodesk-Tooltip-panel-headline-text">Add Snippet</div>
   <div class="zohodesk-Tooltip-editor-content">
      <div id="editerToolsContainer"></div>
      <!-- <div class="zohodesk-Tooltip-editAddonButtonContainer" id="chromeAdd-onEditAddonButtonContainer">
         <input type="text" placeholder="View More" class="zohodesk-Tooltip-popup-button zohodesk-Tooltip-popup-button-input" />
         </div> -->
      <div class="zohodesk-Tooltip-color-picker zohodesk-Tooltip-cl-both">
         <div class="zohodesk-Tooltip-lft-bar zohodesk-Tooltip-fl-lft">
            <ul class="zohodesk-Tooltip-cl-both zohodesk-Tooltip-list" id="zd_tt_toggleTapsParent">
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-1"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-2"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-3"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-4"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-5"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-6"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-7"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-8"></span>
               </li>
               <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-9"></span>
               </li>
            </ul>
         </div>
         <div class="zohodesk-Tooltip-rt-bar zohodesk-Tooltip-fl-rt">
            <div class="zohodesk-Tooltip-user-input">
               <span class="zohodesk-Tooltip-color-name">
               <input type="" id="ChromeAddonManualBackgroundColorInput" placeholder="eg.,#000000" class="zohodesk-Tooltip-color-value">
               </span>
               <!-- <span class="zohodesk-Tooltip-user-color">
                  <ul class="zohodesk-Tooltip-cl-both">
                  <li class="zohodesk-Tooltip-clr-box">
                  <span class="zohodesk-Tooltip-color" id="zohodesk-Tooltip-color-10"></span>
                  </li>
                  </ul>
                  </span>  -->
            </div>
         </div>
      </div>
   </div>
</div>`;
        output.appendChild(parser.firstElementChild);
        parser.innerHTML = `<div class="zohodesk-Tooltip-panel-footer">
   <div class="zohodesk-Tooltip-footer-button zohodesk-Tooltip-footer-button-save" id="TooltipSave">SAVE</div>
   <div class="zohodesk-Tooltip-footer-button zohodesk-Tooltip-footer-button-delete" id="TooltipCancel">DELETE</div>
</div>`;
        output.appendChild(parser.firstElementChild);
        return output;
    }
}


function ZohoDesk_tooltip_triggerList_creator(obj) {
    var parent = document.createElement('ul');
    parent.className = "zohodesk-Tooltip-list";
    if (obj != undefined) {
        for (var i = 0; i < obj.length; i++) {
            var currentObj = obj[i];
            var li = document.createElement('li');
            li.className = "zohodesk-Tooltip-cl-both zohodesk-Tooltip-triggerlist";
            li.id = currentObj.id ;
            var div = document.createElement('div');
            div.className = "zohodesk-Tooltip-columnone";
            div.innerHTML = "<div class='zohodesk-Tooltip-ArticleName' id='zd_tt_triggerName'>trigger" +i+ "</div><div class='zohodesk-Tooltip-AuthorName'>Modefier name</div>";
            li.appendChild(div);
            div = document.createElement('div');
            div.className = "zohodesk-Tooltip-columntwo";
            div.innerHTML = "<div class='zohodesk-Tooltip-ArticleViews'>" + 0 + "</div>";
            li.appendChild(div);
            div = document.createElement('div');
            div.className = "zohodesk-Tooltip-columnthree";
            div.innerHTML = `<svg class="zohodesk-Tooltip-deleteIcn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#edit"></use></svg><svg class="zohodesk-Tooltip-deleteIcn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use></svg>`;
            div.lastChild.addEventListener('click',deleteSelectedTrigger);
            li.appendChild(div);
            parent.appendChild(li);
        }
        var div = document.createElement('div');
        div.appendChild(parent);
        return div;
    } else {

        var div = document.createElement('div');
        div.appendChild(parent);
        return div;
    }
}
// there are only model code ... not integrate with api



/* new UI functionalaties */




function ZT_HexColorValue() {};
ZT_HexColorValue.prototype.rgbToHex = function(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
};
ZT_HexColorValue.prototype.componentToHex = function(c) {
    this.hex = c.toString(16);
    return this.hex.length == 1 ? "0" + this.hex : this.hex;
}

var zd_colorValueChanger = new ZT_HexColorValue();

function getArticleName(searchStr) {
    searchStr = searchStr + "*";
    window.postMessage({
        name: "Article",
        article: searchStr
    }, "*");
}


function Chrome_Extension_Get_Select_Article(e) {
    var childrens = e.target.parentElement.children;
    if (childrens.length != 0) {
        for (i = 0; i < childrens.length; i++) {
            if (childrens[i] == e.target) {
                if (e.target.id == ArticlesObject[i].id) {
                    document.getElementById("searchArticleBox").value = ArticlesObject[i].title;
                    editer_InnerTextContent = ArticlesObject[i].summary;
                    Chrome_Extension_ArticleSummary = ArticlesObject[i].summary;
                    var injectTheIframeValue = document.getElementsByClassName("KB_Editor_iframe")[0];
                    injectTheIframeValue.contentDocument.body.innerHTML = "<div>" + editer_InnerTextContent + "</div>";
                    document.getElementById("Chrome_Extension_AnChorTag").innerHTML = "Select Anchor tag";
                    AnchorTagsList = null;
                    hide("searchDisplay");
                    window.postMessage({
                        name: "SingleArticle",
                        article: e.target.id
                    }, "*");
                    window.addEventListener("message", function(event) {
                        if (event.data.name == "SingleArticleObject") {
                            SingleArticleId = event.data.value.id;
                            var tempVar = head(event.data.value.answer);
                            if (tempVar.length != 0) {
                                AnchorTagsList = tempVar;
                            }
                        }
                    })
                }
            }
        }
    }
}


function articleAPI() {

    document.getElementById("searchArticleBox").onkeyup = function(e) {
        if (document.getElementById("searchArticleBox").value == "") {
            hide("searchDisplay");
        } else {
            document.getElementById("searchName").innerHTML = e.target.value;
            getArticleName(e.target.value);
            window.addEventListener("message", function(event) {
                if (event.data.name == "article") {
                    if (document.getElementById("searchArticleBox").value == "") {
                        hide("searchDisplay");
                    } else {
                        ArticlesObject = event.data.value;
                        var parentDiv = document.createElement("div");
                        parentDiv.className = "zohodesk-Tooltip-dropdown-content";
                        parentDiv.id = "zohodesk_Tooltip_dropdown_articles_parent_id";
                        var container = document.createElement("ul");
                        container.className = "zohodesk-Tooltip-list";
                        if (ArticlesObject != undefined) {
                            for (i = 0; i < ArticlesObject.length; i++) {
                                var child = document.createElement("li");
                                child.className = "zohodesk-Tooltip-dropdown-options";
                                child.id = ArticlesObject[i].id;
                                child.appendChild(document.createTextNode(ArticlesObject[i].title));
                                container.appendChild(child);
                            }
                            parentDiv.appendChild(container);
                            var element = document.getElementById("searchDisplay").getElementsByTagName('div')[1];
                            if (element != undefined) {
                                element.parentElement.removeChild(element);
                            }
                            document.getElementById("searchDisplay").appendChild(parentDiv);
                            show("searchDisplay");
                            document.getElementById("zohodesk_Tooltip_dropdown_articles_parent_id").onclick = function(e) {
                                Chrome_Extension_Get_Select_Article(e);
                            }
                        }
                    }
                }
            })
        }
    }
}


function head(answer) {
    var fragment = document.createDocumentFragment();
    var div = document.createElement("div");
    div.innerHTML = answer
    fragment.appendChild(div)
    var allHeaders = fragment.querySelectorAll("[id*='heading']")
    var listings = []
    allHeaders.forEach(function(headingNode) {
        listings.push(headingNode.textContent);
    })
    return listings
}

function Zohodesk_Tooltip_clickActionHide() {
    hide(tempVariable);
}

var tempVariable;
document.addEventListener('mousedown', Zohodesk_Tooltip_mousedownActionShow, true);

function Zohodesk_Tooltip_mousedownActionShow(e) {
    if (ZohodeskTooltipCommonShowHideVariable != "") {
        tempVariable = ZohodeskTooltipCommonShowHideVariable;
        document.addEventListener('click', Zohodesk_Tooltip_clickActionHide, true);
    }
}

function show(elementId) {
    var element = document.getElementById(elementId);
    var getClass = element.className;
    var splitClass = getClass.split(" ");
    if (splitClass[splitClass.length - 1] != "zohodesk-displayBlock") {
        var addClass = getClass + " zohodesk-displayBlock";
        element.className = addClass;
    }
    ZohodeskTooltipCommonShowHideVariable = elementId;
}

function hide(elementId) {
    var element = document.getElementById(elementId);
    var getClass = element.className;
    var splitClass = getClass.split(" ");
    if (splitClass[splitClass.length - 1] == "zohodesk-displayBlock") {
        var ordinaryClass = splitClass.slice(0, splitClass.length - 1);
        ordinaryClass = ordinaryClass.join(" ");
        element.className = ordinaryClass;
    }
    if (tempVariable == ZohodeskTooltipCommonShowHideVariable) {
        ZohodeskTooltipCommonShowHideVariable = "";
    }
    document.removeEventListener('click', Zohodesk_Tooltip_clickActionHide, true);
}



var html = `<div style="height: 0; width: 0; position: absolute; visibility: hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="Tooltio-plus" viewBox="0 0 32 32">
  <path d="M16,2.7c0.4,0,0.7,0.1,0.9,0.4s0.4,0.6,0.4,0.9v10.7H28c0.4,0,0.7,0.1,0.9,0.4c0.3,0.3,0.4,0.6,0.4,0.9
    c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.3-0.6,0.4-0.9,0.4H17.3V28c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.3-0.6,0.4-0.9,0.4c-0.4,0-0.7-0.1-0.9-0.4
    c-0.3-0.3-0.4-0.6-0.4-0.9V17.3H4c-0.4,0-0.7-0.1-0.9-0.4S2.7,16.4,2.7,16s0.1-0.7,0.4-0.9c0.3-0.3,0.6-0.4,0.9-0.4h10.7V4
    c0-0.4,0.1-0.7,0.4-0.9C15.3,2.8,15.6,2.7,16,2.7z"/>
  </symbol>
        <symbol id="Tooltip-addon" viewBox="0 0 32 32">
  <path d="M26.4,0.4H5.6c-2.8,0-5.1,2.3-5.1,5.1v16.1c0,2.8,2.3,5.1,5.1,5.1h5.6l4.8,4.8l4.8-4.8h5.6c2.8,0,5.1-2.3,5.1-5.1v-16
    C31.5,2.7,29.2,0.4,26.4,0.4L26.4,0.4z M17,20.4H7.2c-0.6,0-1.2-0.5-1.2-1.2S6.6,18,7.2,18H17c0.6,0,1.2,0.5,1.2,1.2
    S17.7,20.4,17,20.4z M24.8,15.2H7.2C6.6,15.2,6,14.7,6,14s0.5-1.2,1.2-1.2h17.6c0.6,0,1.2,0.5,1.2,1.2S25.4,15.2,24.8,15.2
    L24.8,15.2z M24.8,10H7.2C6.6,10,6,9.5,6,8.8s0.5-1.2,1.2-1.2h17.6c0.6,0,1.2,0.5,1.2,1.2C26,9.5,25.4,10,24.8,10L24.8,10z"/>
  </symbol>
        <symbol id="Tooltip-alignleft" viewBox="0 0 32 32">
  <path d="M28.1,0.4H3.9C2,0.4,0.4,2,0.4,3.9v24.2c0,1.9,1.6,3.5,3.5,3.5l0,0h24.2c1.9,0,3.5-1.6,3.5-3.5V3.9C31.6,2,30,0.4,28.1,0.4z
     M29,28.1c0,0.5-0.4,0.8-0.8,0.8H15.5V3h12.6c0.5,0,0.8,0.4,0.8,0.8L29,28.1L29,28.1z"/>
  </symbol>
        <symbol id="Tooltip-alignright" viewBox="0 0 32 32">
  <path d="M31.3,2.6c-0.4-1-1.4-1.8-2.5-2c-0.2,0-0.4-0.1-0.7-0.1H3.9C2,0.4,0.4,2,0.4,3.9v24.2c0,1.9,1.6,3.5,3.5,3.5h24.2
    c0.2,0,0.5,0,0.7-0.1c1.1-0.2,2-1,2.5-2c0.2-0.4,0.3-0.9,0.3-1.3V3.9C31.6,3.4,31.5,3,31.3,2.6L31.3,2.6z M3.9,29
    c-0.5,0-0.8-0.4-0.8-0.8V3.9c0-0.5,0.4-0.8,0.8-0.8h12.6V29L3.9,29L3.9,29z"/>
  </symbol>
  <symbol id="edit" viewBox="0 0 48 48">
<path d="M46,7l-3.9-3.9c-1.3-1.3-3.4-1.3-4.6,0L16.1,24.4l8.6,8.6L46,11.7C47.3,10.4,47.3,8.3,46,7z M14.2,26.2l-1.8,10.4l10.4-1.8
  L14.2,26.2z M39,42.3H4.6V7.8H28l3.6-3.6h-28C2.2,4.3,1,5.5,1,6.9v36.4c0,1.4,1.2,2.6,2.6,2.6H40c1.4,0,2.6-1.2,2.6-2.6V19.7
  L39,23.3V42.3z"></path>
</symbol>
<symbol id="delete" viewBox="0 0 48 48">
        <path d="M9.048,44.472C9.107,45.885,10.27,47,11.684,47h24.632c1.414,0,2.577-1.115,2.637-2.528l1.759-30.705H7.288L9.048,44.472z
        M29.572,22.99c0-0.592,0.479-1.072,1.072-1.072h1.714c0.592,0,1.072,0.48,1.072,1.072v14.786c0,0.592-0.48,1.072-1.072,1.072
        h-1.714c-0.592,0-1.072-0.479-1.072-1.072V22.99z M22.072,22.99c0-0.592,0.479-1.072,1.071-1.072h1.715
        c0.592,0,1.071,0.48,1.071,1.072v14.786c0,0.592-0.48,1.072-1.071,1.072h-1.715c-0.592,0-1.071-0.479-1.071-1.072V22.99z
         M14.57,22.99c0-0.592,0.479-1.072,1.072-1.072h1.714c0.592,0,1.072,0.48,1.072,1.072v14.786c0,0.592-0.48,1.072-1.072,1.072
        h-1.714c-0.592,0-1.072-0.479-1.072-1.072V22.99z M14.57,22.99"></path>
        <path d="M41.883,3.701H30.519V1.553C30.519,1.248,30.272,1,29.966,1H18.034c-0.305,0-0.553,0.248-0.553,0.553v2.148H6.117
        c-0.914,0-1.656,0.741-1.656,1.656v5.201h39.077V5.357C43.539,4.443,42.797,3.701,41.883,3.701L41.883,3.701z M41.883,3.701"></path>
      </symbol>
        <symbol id="Tooltip-anchor" viewBox="0 0 32 32">
  <path d="M30.7,16l-5.1,3.9l2.2,0.8c-2.1,3.6-5.9,6.2-10.3,6.5V14h3.1v-2.3h-3.1V8.8c1.7-0.5,3-2.1,3-4c0-2.3-1.9-4.1-4.2-4.1
    s-4.2,1.9-4.2,4.1c0,1.9,1.2,3.5,3,4v2.8H12V14h3.1v13.3c-4.8-0.4-8.7-3.6-10.7-7.7l2.4-0.8l-4.7-4.1l-1.6,6.4L3.1,20
    C4,26.4,9.6,31.2,16.3,31.2c6.2,0,11.5-4.3,12.9-10l2.4,1.1L30.7,16L30.7,16z M16.3,6.4c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6
    s1.6,0.7,1.6,1.6C17.9,5.7,17.2,6.4,16.3,6.4C16.3,6.4,16.3,6.4,16.3,6.4z"/>
  </symbol>
  <symbol id="logout" viewBox="0 0 48 48">
        <path d="M25.389,46.5c-12.406,0-22.5-10.094-22.5-22.5s10.094-22.5,22.5-22.5c6.055,0,11.733,2.369,15.991,6.672
        c0.636,0.643,0.983,1.493,0.979,2.396c-0.005,0.903-0.36,1.751-1.003,2.387c-0.637,0.631-1.481,0.979-2.378,0.979
        c-0.91,0-1.764-0.356-2.403-1.003c-2.979-3.01-6.952-4.667-11.186-4.667c-8.677,0-15.736,7.06-15.736,15.737
        c0,8.677,7.06,15.736,15.736,15.736c4.232,0,8.204-1.656,11.183-4.664c0.64-0.646,1.494-1.002,2.404-1.002
        c0.896,0,1.741,0.347,2.379,0.978c1.324,1.312,1.335,3.458,0.023,4.783C37.119,44.132,31.442,46.5,25.389,46.5z M34.17,32.249
        c-0.625,0-1.299-0.495-1.299-1.295v-3.854h-9.058c-1.709,0-3.1-1.391-3.1-3.1s1.391-3.099,3.1-3.099h9.058v-3.854
        c0-0.8,0.674-1.295,1.298-1.295c0.266,0,0.524,0.086,0.748,0.247l9.657,6.953c0.341,0.245,0.537,0.627,0.537,1.047
        c0,0.421-0.196,0.804-0.537,1.05l-9.656,6.954C34.695,32.163,34.436,32.249,34.17,32.249L34.17,32.249z"></path>
      </symbol>
        <symbol id="Tooltip-article" viewBox="0 0 32 32">
  <path d="M27.7,31.6c1.2,0,2.2-0.9,2.2-2.2V2.6c0-1.2-0.9-2.2-2.2-2.2H12.1v6.9c0,1.8-1.3,3.1-3.1,3.1H2.1v18.9
    c0,1.2,0.9,2.2,2.2,2.2L27.7,31.6L27.7,31.6z M16.5,26.1H8.9c-0.5,0-1.1-0.4-1.1-1.1c0-0.5,0.4-1.1,1.1-1.1h7.6
    c0.5,0,1.1,0.4,1.1,1.1C17.6,25.6,17,26.1,16.5,26.1L16.5,26.1L16.5,26.1z M24.2,20.9H8.9c-0.5,0-1.1-0.4-1.1-1.1
    c0-0.5,0.4-1.1,1.1-1.1h15.3c0.5,0,1.1,0.4,1.1,1.1C25.1,20.3,24.7,20.9,24.2,20.9L24.2,20.9z M8.9,13.2h15.3c0.5,0,1.1,0.4,1.1,1.1
    s-0.4,1.1-1.1,1.1H8.9c-0.5,0-1.1-0.4-1.1-1.1S8.4,13.2,8.9,13.2L8.9,13.2z M3.1,9.2h6c0.9,0,1.8-0.8,1.8-1.8V1.4
    c0-0.5-0.4-0.9-0.9-0.9c-0.3,0-0.4,0.1-0.7,0.3L2.5,7.6C1.9,8.1,2.3,9.2,3.1,9.2C3.1,9.2,3.1,9.2,3.1,9.2z"/>
  </symbol>
        <symbol id="Tooltip-bgclr" viewBox="0 0 32 32">
  <path d="M16,0.4C7.4,0.4,0.4,7.4,0.4,16S7.4,31.6,16,31.6c1.4,0,2.6-1.2,2.6-2.6c0-0.7-0.2-1.2-0.7-1.7c-0.4-0.5-0.7-1-0.7-1.7
    c0-1.4,1.2-2.6,2.6-2.6h3.1c4.9,0,8.7-3.8,8.7-8.6C31.6,6.7,24.6,0.4,16,0.4L16,0.4L16,0.4z M6.5,16c-1.4,0-2.6-1.2-2.6-2.6
    s1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6S7.9,16,6.5,16C6.5,16,6.5,16,6.5,16z M11.7,9.1c-1.4,0-2.6-1.2-2.6-2.6s1.2-2.6,2.6-2.6
    s2.6,1.2,2.6,2.6S13.1,9.1,11.7,9.1L11.7,9.1z M20.3,9.1c-1.4,0-2.6-1.2-2.6-2.6s1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6
    C22.9,7.9,21.7,9.1,20.3,9.1L20.3,9.1z M25.5,16c-1.4,0-2.6-1.2-2.6-2.6s1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6S26.9,16,25.5,16
    C25.5,16,25.5,16,25.5,16z"/>
  </symbol>
        <symbol id="Tooltip-close" viewBox="0 0 32 32">
  <path d="M16,0.4C7.4,0.4,0.4,7.4,0.4,16s7,15.6,15.6,15.6s15.6-7,15.6-15.6S24.6,0.4,16,0.4C16,0.4,16,0.4,16,0.4z M21.9,21.9
    c-0.6,0.6-1.6,0.6-2.3,0L16,18.4L12.4,22c-0.6,0.6-1.6,0.6-2.3,0s-0.6-1.6,0-2.3l3.7-3.7l-3.5-3.5c-0.6-0.6-0.6-1.6,0-2.3
    s1.6-0.6,2.3,0l3.5,3.5l3.3-3.3c0.6-0.6,1.6-0.6,2.3,0s0.6,1.6,0,2.3l-3.3,3.3l3.6,3.6C22.5,20.3,22.5,21.3,21.9,21.9L21.9,21.9z"/>
  </symbol>
        <symbol id="Tooltip-edit" viewBox="0 0 32 32">
  <path d="M0.4,23v8.5H9L26,14.5l-8.5-8.6L0.4,23L0.4,23z M30.8,6L26,1.2c-0.5-0.5-1.1-0.8-1.9-0.8s-1.3,0.3-1.9,0.8l-3.4,3.4l8.5,8.5
    l3.4-3.4c0.5-0.5,0.8-1.1,0.8-1.9C31.6,7.2,31.3,6.6,30.8,6z"/>
  </symbol>
        <symbol id="Tooltip-headereye" viewBox="0 0 32 32">
  <path d="M16,5.4C8.9,5.4,2.8,9.8,0.4,16C2.8,22.2,8.9,26.6,16,26.6S29.2,22.2,31.6,16C29.2,9.8,23.1,5.4,16,5.4
    C16,5.4,16,5.4,16,5.4z M16,23.1c-4,0-7.1-3.1-7.1-7.1S12,8.9,16,8.9s7.1,3.1,7.1,7.1S20,23.1,16,23.1L16,23.1z M16,11.8
    c-2.4,0-4.3,1.8-4.3,4.2s1.8,4.2,4.3,4.2c2.4,0,4.2-1.8,4.2-4.2S18.4,11.8,16,11.8L16,11.8z"/>
  </symbol>
  <!--
        <symbol id="Tooltip-headerquestion" viewBox="0 0 32 32">
  <path fill="#444" d="M15.778 0.444c-8.578 0.133-15.467 7.156-15.333 15.778 0.133 8.578 7.156 15.467 15.778 15.333 8.578-0.133 15.467-7.156 15.333-15.778-0.133-8.578-7.156-15.467-15.778-15.333v0zM15.733 25.467h-0.089c-1.333-0.044-2.267-1.022-2.222-2.311s0.978-2.222 2.267-2.222h0.089c1.378 0.044 2.267 1.022 2.222 2.356 0 1.289-0.933 2.178-2.267 2.178v0zM21.289 14.444c-0.311 0.444-0.978 0.978-1.867 1.644l-0.933 0.667c-0.533 0.4-0.844 0.8-0.933 1.156-0.089 0.311-0.133 0.356-0.133 0.978v0.133h-3.644v-0.311c0.044-1.244 0.089-2 0.578-2.622 0.8-0.978 2.622-2.133 2.711-2.178 0.267-0.178 0.489-0.4 0.622-0.667 0.4-0.533 0.533-0.933 0.533-1.333 0-0.578-0.178-1.067-0.489-1.556-0.311-0.444-0.933-0.667-1.778-0.667s-1.467 0.267-1.822 0.844c-0.356 0.578-0.533 1.2-0.533 1.822v0.133h-3.733v-0.178c0.089-2.267 0.933-3.956 2.444-4.889 0.933-0.622 2.133-0.933 3.511-0.933 1.822 0 3.333 0.444 4.533 1.289 1.2 0.889 1.822 2.178 1.822 3.911 0.044 1.022-0.267 1.911-0.889 2.756v0z"></path>
  </symbol>
  -->
        
      <symbol id="Tooltip-headerquestion" viewBox="0 0 32 32">
  <path d="M15.8,0.4C7.2,0.6,0.3,7.6,0.4,16.2c0.1,8.6,7.2,15.5,15.8,15.3c8.6-0.1,15.5-7.2,15.3-15.8C31.4,7.2,24.4,0.3,15.8,0.4
    C15.8,0.4,15.8,0.4,15.8,0.4z M15.7,25.5L15.7,25.5c-1.4,0-2.4-1-2.3-2.3s1-2.2,2.3-2.2h0.1c1.4,0,2.3,1,2.2,2.4
    C18,24.6,17.1,25.5,15.7,25.5L15.7,25.5L15.7,25.5z M21.3,14.4c-0.3,0.4-1,1-1.9,1.6l-0.9,0.7c-0.5,0.4-0.8,0.8-0.9,1.2
    c-0.1,0.3-0.1,0.4-0.1,1V19h-3.6v-0.3c0-1.2,0.1-2,0.6-2.6c0.8-1,2.6-2.1,2.7-2.2c0.3-0.2,0.5-0.4,0.6-0.7c0.4-0.5,0.5-0.9,0.5-1.3
    c0-0.6-0.2-1.1-0.5-1.6c-0.3-0.4-0.9-0.7-1.8-0.7s-1.5,0.3-1.8,0.8c-0.4,0.6-0.5,1.2-0.5,1.8v0.1H9.9v-0.2c0.1-2.3,0.9-4,2.4-4.9
    c0.9-0.6,2.1-0.9,3.5-0.9c1.8,0,3.3,0.4,4.5,1.3c1.2,0.9,1.8,2.2,1.8,3.9C22.2,12.7,21.9,13.6,21.3,14.4L21.3,14.4L21.3,14.4z"/>
  </symbol>  
        
        
        
        
        
        
        
        
        
        
        <symbol id="Tooltip-move" viewBox="0 0 32 32">
  <path d="M31.2,15.2l-4.4-4.4c-0.2-0.2-0.5-0.3-0.8-0.3s-0.6,0.1-0.8,0.3s-0.3,0.5-0.3,0.8v2.2h-6.7V7.1h2.2c0.3,0,0.6-0.1,0.8-0.3
    s0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8l-4.4-4.4c-0.2-0.2-0.5-0.3-0.8-0.3s-0.6,0.1-0.8,0.3l-4.4,4.4c-0.2,0.2-0.3,0.5-0.3,0.8
    s0.1,0.6,0.3,0.8s0.5,0.3,0.8,0.3h2.2v6.7H7.1v-2.2c0-0.3-0.1-0.6-0.3-0.8S6.3,10.4,6,10.4s-0.6,0.1-0.8,0.3l-4.4,4.4
    c-0.2,0.2-0.3,0.5-0.3,0.8s0.1,0.6,0.3,0.8l4.4,4.4c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3s0.3-0.5,0.3-0.8v-2.2h6.7v6.7h-2.2
    c-0.3,0-0.6,0.1-0.8,0.3s-0.3,0.5-0.3,0.8s0.1,0.6,0.3,0.8l4.4,4.4c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3l4.4-4.4
    c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8s-0.5-0.3-0.8-0.3h-2.2v-6.7h6.7v2.2c0,0.3,0.1,0.6,0.3,0.8s0.5,0.3,0.8,0.3
    s0.6-0.1,0.8-0.3l4.4-4.4c0.2-0.2,0.3-0.5,0.3-0.8S31.5,15.4,31.2,15.2C31.2,15.2,31.2,15.2,31.2,15.2z"/>
  </symbol>
        <symbol id="TooltipEditor-align-center" viewBox="0 0 32 32">
  <path d="M8,9.1h16v1.7H8V9.1z M8,17.1h16v1.7H8V17.1z"/>
  <path class="stblu" d="M12,13.1h8v1.7h-8V13.1z M12,21.1h8v1.7h-8V21.1z"/>
  </symbol>
        <symbol id="TooltipEditor-align-justify" viewBox="0 0 32 32">
  <path d="M8,9.1h16v1.7H8V9.1z M8,17.1h16v1.7H8V17.1z"/>
  <path class="stblu" d="M8,13.1h16v1.7H8V13.1z M8,21.1h16v1.7H8V21.1z"/>
  </symbol>
       <symbol id="TooltipEditor-align-left" viewBox="0 0 32 32">
  <path d="M8,9.1h16v1.7H8V9.1z M8,17.1h16v1.7H8V17.1z"/>
  <path class="stblu" d="M8,13.1h8v1.7H8V13.1z M8,21.1h8v1.7H8V21.1z"/>
  </symbol>
        <symbol id="TooltipEditor-align-right" viewBox="0 0 32 32">
  <path d="M8,9.1h16v1.7H8V9.1z M8,17.1h16v1.7H8V17.1z"/>
  <path class="stblu" d="M16,13.1h8v1.7h-8V13.1z M16,21.1h8v1.7h-8V21.1z"/>
  </symbol>
        <symbol id="TooltipEditor-clrpick" viewBox="0 0 32 32">
  <path d="M21.5,10.6l-1.3,1.3l0.3,0.3c0.2,0.2,0.3,0.6,0.2,1c-0.1,0.3-0.2,0.6-0.4,0.8s-0.5,0.3-0.8,0.3s-0.6-0.1-0.8-0.3l-0.4-0.4
    l-5.9,5.9c-0.5,0.3-1,0.5-1.5,0.5s-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3s0.2-1,0.5-1.3l5.9-5.9l-0.4-0.4c-0.2-0.2-0.3-0.5-0.3-0.8
    s0.1-0.6,0.3-0.8c0.3-0.3,0.8-0.5,1.1-0.5c0.3,0,0.6,0.1,0.7,0.3l0.3,0.3l1.3-1.3C18.9,7.2,19.4,7,20,7s1.1,0.2,1.5,0.6
    s0.6,0.9,0.6,1.5S21.9,10.2,21.5,10.6z"/>
  <path class="stwhi" d="M16.2,9.5c-0.1,0-0.3,0.1-0.4,0.2l0.8,0.9l2.7,2.7c0.2-0.1,0.3-0.3,0.3-0.4L16.2,9.5z"/>
  <path class="stblu" d="M23.4,23.5H14c-0.5,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8h9.3c0.5,0,0.8,0.4,0.8,0.8S23.8,23.5,23.4,23.5z
     M10.4,17.6c-0.1,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2l5.9-5.9l-1.1-1.1
    C16.4,11.8,10.4,17.6,10.4,17.6z M9.5,20.3c-0.1,0-0.2,0-0.3,0.1c-0.2,0.3-1.5,2-1.5,2.8c0,1,0.8,1.7,1.7,1.7c1,0,1.7-0.8,1.7-1.7
    c0-0.8-1.2-2.5-1.5-2.8C9.8,20.3,9.7,20.3,9.5,20.3C9.5,20.3,9.5,20.3,9.5,20.3z"/>
  </symbol>
        <symbol id="TooltipEditor-list-number" viewBox="0 0 32 32">
  <path d="M11.9,9.8h13v1.9h-13V9.8z M11.9,15.3h13v1.9h-13C11.9,17.2,11.9,15.3,11.9,15.3z M11.9,20.7h13v1.9h-13V20.7z"/>
  <path class="stblu" d="M7.1,12.6l0.6-0.1V9.7H7.1V9.2l1.3-0.3v3.5L9,12.6v0.5H7.1C7.1,13.1,7.1,12.6,7.1,12.6z M7.1,18v-0.5l1.1-1.4
    c0.2-0.2,0.3-0.4,0.3-0.6c0.1-0.2,0.1-0.3,0.1-0.4c0-0.2,0-0.3-0.1-0.4s-0.2-0.2-0.3-0.2c-0.2,0-0.3,0.1-0.4,0.2S7.7,15,7.7,15.2
    H7.1c0-0.4,0.1-0.7,0.3-0.9c0.2-0.3,0.5-0.4,0.9-0.4c0.4,0,0.6,0.1,0.8,0.3s0.3,0.5,0.3,0.9c0,0.2-0.1,0.5-0.2,0.7
    c-0.1,0.2-0.3,0.5-0.6,0.8L8,17.4h0.9L9,17h0.5v1H7.1z M7.8,20.6h0.4c0.2,0,0.3-0.1,0.4-0.2s0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4
    s-0.2-0.2-0.3-0.2s-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4H7.1c0-0.3,0.1-0.6,0.3-0.8s0.5-0.3,0.8-0.3c0.4,0,0.6,0.1,0.9,0.3
    c0.2,0.2,0.3,0.5,0.3,0.9c0,0.2,0,0.4-0.1,0.5c-0.1,0.2-0.2,0.3-0.4,0.4c0.2,0.1,0.3,0.2,0.4,0.4s0.2,0.4,0.2,0.6
    c0,0.4-0.1,0.7-0.3,0.9s-0.5,0.3-0.9,0.3c-0.3,0-0.6-0.1-0.8-0.3s-0.3-0.5-0.3-0.9l0,0h0.7c0,0.2,0,0.3,0.1,0.4s0.2,0.2,0.4,0.2
    s0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.2,0.1-0.4s0-0.4-0.1-0.5s-0.2-0.2-0.4-0.2H7.8C7.8,21.2,7.8,20.6,7.8,20.6z"/>
  </symbol>
        <symbol id="TooltipEditor-list-round" viewBox="0 0 32 32">
  <path d="M11.8,9.3H25v2H11.8V9.3z M11.8,14.9H25v2H11.8V14.9z M11.8,20.4H25v2H11.8V20.4z"/>
  <path class="stblu" d="M8.3,20.1c0.7,0,1.3,0.6,1.3,1.3S9,22.7,8.3,22.7S7,22.1,7,21.4S7.6,20.1,8.3,20.1z M8.3,14.6
    c0.7,0,1.3,0.6,1.3,1.3S9,17.2,8.3,17.2S7,16.6,7,15.9S7.6,14.6,8.3,14.6z M8.3,9.3c0.7,0,1.3,0.6,1.3,1.3S9,11.9,8.3,11.9
    S7,11.3,7,10.6S7.6,9.3,8.3,9.3z"/>
  </symbol>
        <symbol id="TooltipEditor-list-permalink" viewBox="0 0 32 32">
  <path d="M12.9,24c-1.3,0-2.6-0.5-3.5-1.4c-0.9-1-1.4-2.2-1.4-3.5s0.5-2.6,1.4-3.5l1.4-1.4c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2
    c0.2,0.3,0.2,0.7,0,0.9l-1.4,1.4c-0.7,0.7-1.1,1.6-1.1,2.6s0.4,1.9,1.1,2.6c0.7,0.7,1.6,1,2.6,1s1.9-0.4,2.6-1l1.4-1.4
    c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.5s-0.1,0.3-0.2,0.5l-1.4,1.4C15.5,23.5,14.2,24,12.9,24z M14,18.6
    c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.3,0.2-0.5l4.5-4.5c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2
    c0.2,0.3,0.2,0.7,0,0.9l-4.5,4.5C14.4,18.6,14.2,18.6,14,18.6z M20.3,18.4c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5
    s0.1-0.3,0.2-0.5l1.8-1.8c1.4-1.4,1.4-3.7,0-5.2C21,9.7,20,9.3,19.1,9.3c-1,0-1.9,0.4-2.6,1.1l-1.8,1.8c-0.1,0.1-0.3,0.2-0.5,0.2
    s-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.3,0.2-0.5l1.8-1.8c1-0.9,2.3-1.4,3.6-1.4s2.6,0.5,3.5,1.4c1.9,1.9,1.9,5,0,7
    l-1.8,1.8C20.6,18.3,20.5,18.4,20.3,18.4z"/>
  </symbol>
        <symbol id="TooltipEditor-tab-height" viewBox="0 0 32 32">
  <path fill="#444" d="M10.5 11.1v-1.5h4.5v1.5l-1.2 0.3v3.7h4.4v-3.7l-1.2-0.3v-1.5h4.5v1.5l-1.2 0.3v9.2l1.2 0.3v1.5h-4.5v-1.5l1.2-0.3v-3.5h-4.4v3.5l1.2 0.3v1.5h-4.5v-1.5l1.1-0.3v-9.2l-1.1-0.3z"></path>
  </symbol>
        <symbol id="TooltipEditor-txtbold" viewBox="0 0 32 32">
  <path d="M16.2,9c1.6,0,2.9,0.3,3.9,1s1.4,1.6,1.4,2.9c0,0.6-0.2,1.2-0.5,1.7s-0.8,0.9-1.5,1.1c0.8,0.2,1.5,0.6,1.9,1.2
    s0.6,1.3,0.6,2c0,1.3-0.4,2.4-1.3,3c-0.9,0.7-2.1,1-3.8,1H10v-1.7l1.5-0.3V11L10,10.7V9H16.2z M14.3,14.9h2c0.8,0,1.3-0.2,1.7-0.5
    s0.6-0.8,0.6-1.3c0-0.6-0.2-1.1-0.6-1.4s-1-0.5-1.8-0.5h-1.9C14.3,11.2,14.3,14.9,14.3,14.9z M14.3,16.8v4h2.6
    c0.7,0,1.3-0.2,1.7-0.5s0.6-0.8,0.6-1.4c0-0.7-0.2-1.2-0.5-1.6s-0.9-0.5-1.6-0.5H14.3z"/>
  </symbol>
        <symbol id="TooltipEditor-txtitalic" viewBox="0 0 32 32">
  <path d="M15.2,10.7L15.8,9h5.8L21,10.7L19.3,11l-3.9,10l1.4,0.3L16.2,23h-5.8l0.7-1.7l1.6-0.3l3.9-10C16.6,11,15.2,10.7,15.2,10.7z"
    />
  </symbol>
        <symbol id="TooltipEditor-txtunderline" viewBox="0 0 32 32">
  <path d="M14.9,8v1.5l-1.3,0.3v6.3c0,0.8,0.2,1.4,0.6,1.8s1,0.6,1.8,0.6c0.8,0,1.4-0.2,1.8-0.6s0.7-1,0.7-1.8V9.7l-1.3-0.3V8h5v1.5
    l-1.3,0.3v6.3c0,1.4-0.4,2.4-1.3,3.2c-0.9,0.7-2.1,1.1-3.5,1.1c-1.5,0-2.6-0.4-3.5-1.1s-1.3-1.8-1.3-3.2V9.7L9.8,9.5V8
    C9.8,8,14.9,8,14.9,8z"/>
  <path class="stblu" d="M9.5,22h13v2h-13V22z"/>
  </symbol>
        <symbol id="Tooltip-search" viewBox="0 0 32 32">
  <path d="M12.6,25.3C5.7,25.3,0,19.7,0,12.6C0,5.7,5.5,0,12.5,0s12.6,5.5,12.6,12.5C25.3,19.5,19.5,25.3,12.6,25.3
    C12.6,25.3,12.6,25.3,12.6,25.3z M12.6,2.6c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S18.2,2.6,12.6,2.6
    C12.6,2.6,12.6,2.6,12.6,2.6z M30.6,32c-0.3,0-0.7-0.2-0.9-0.3l-9.9-10.2c-0.3-0.7-0.2-1.4,0.3-1.7s1-0.2,1.4,0l9.9,10.2
    c0.5,0.5,0.3,1.4-0.2,1.9C31.1,31.8,30.8,32,30.6,32z M4.3,13.3c-0.3,0-0.7-0.3-0.7-0.7c0-4.8,4-8.8,8.8-8.8c0.3,0,0.5,0.3,0.5,0.7
    S12.6,5,12.5,5C8.5,5.2,5,8.5,5,12.6C5,13,4.7,13.3,4.3,13.3z"/>
  </symbol>
        
        
    </svg>
  </div>
  

  <div class="zohodesk-Tooltip-panel zohodesk-Tooltip-panel-right" id="editorBody">
    <div class="zohodesk-Tooltip-panel-header">
      <div class="zohodesk-Tooltip-cl-both">
        <div class="zohodesk-Tooltip-fl-lft">
          <span class="zohodesk-Tooltip-panel-header-text zohodesk-Tooltip-clrWhite">Tooltip</span>
          <div class="zohodesk-Tooltip-headerquestion-icon">
            <span class="zohodesk-Tooltip-editor-iconheaderquestion">
              <svg class="zohodesk-tooltip-svg-icon-medium">
                <use xlink:href="#Tooltip-headerquestion"></use>
              </svg>
            </span>
          </div>
        </div>
        <div class="zohodesk-Tooltip-fl-rt">
          <div id="sidePanel_float" class="zohodesk-Tooltip-inline-icons zohodesk-Tooltip-selected-inline-icons">
            <span class="zohodesk-Tooltip-editor-iconalignleft">
              <svg class="zohodesk-tooltip-svg-icon-medium">
                <use xlink:href="#Tooltip-alignright"></use>
              </svg>
            </span>
          </div>
          <div class="zohodesk-Tooltip-inline-icons">
            <a href="Tooltip-Login.html">
              <span class="zohodesk-Tooltip-editor-iconalignright">
                <svg class="zohodesk-tooltip-svg-icon-medium">
                  <use xlink:href="#logout"></use>
                </svg>
              </span>
            </a>
          </div>
          <div class="zohodesk-Tooltip-inline-icons">
            <span class="zohodesk-Tooltip-editor-iconclose panel-close" id="closeEditor">
              <svg class="zohodesk-tooltip-svg-icon-medium">
                <use xlink:href="#Tooltip-close"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="zohodesk-Tooltip-selectOptsContent">
        <ul class="zohodesk-Tooltip-cl-both zohodesk-Tooltip-list">
          <li class="zohodesk-Tooltip-toggleTap-li zohodesk-Tooltip-fl-lft zohodesk-Tooltip-selectOpts zohodesk-Tooltip-selectedOpts">
            <span class="zohodesk-Tooltip-selectOptsName">Triggers</span>
          </li>
          <li class="zohodesk-Tooltip-toggleTap-li zohodesk-Tooltip-fl-lft zohodesk-Tooltip-selectOpts">
            <span class="zohodesk-Tooltip-selectOptsName">+ Add New</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="zohodesk-Tooltip-pstnrltv" id='ZDTT_switching_comonElem'></div>
  </div>




  `;
var position = document.createElement("div");
position.id = "ToolTipEditorPosition";
position.className = "zohodesk-tooltip-displayinline";
document.body.appendChild(position);
document.getElementById("ToolTipEditorPosition").innerHTML = html;
var zdtt_sidePanalAlign = new sidePanel_align_EventBinder();
zdtt_sidePanalAlign.thisBinder();
document.getElementById("sidePanel_float").onmouseup = zdtt_sidePanalAlign.toggle;
// document.getElementById("Chrome_Extension_portal").innerHTML=PortalName;
zd_tt_toggleHighlighter();
zd_tt_toggleTaps("trigger_list_tap");




function backgroundColorRemove(element) {
    var elementClassSplit = element.className.split(" ");
    if (elementClassSplit[elementClassSplit.length - 1] == "zohodesk-Tooltip-selected-inline-icons") {
        var ordinaryClass = elementClassSplit.slice(0, elementClassSplit.length - 1);
        ordinaryClass = ordinaryClass.join(" ");
        element.className = ordinaryClass;
    }
}


document.getElementById("closeEditor").onclick = function(e) {
    if (AsapCSS != "") {
        var scriptCSS = document.createElement("script");
        scriptCSS.type = "text/javascript";
        scriptCSS.appendChild(document.createTextNode(InjectedScript));
        document.head.appendChild(AsapCSS);
        AsapCSS = "";
    }
    chrome.runtime.sendMessage({
        "message": "userView"
    });
    var a = document.getElementsByClassName("KB_Editor_iframe")[0];
    if (a.contentDocument.body.innerHTML === "<div><br></div>") {
        location.href = 'javascript:chrome_addons_inner_text=""; void 0'
    }
    removeConfigureElements();
    var element = prvsElems;
    if (element != undefined) {
        var elementClass = element.className;
        var elementClassSplit = elementClass.split(" ");
        if (elementClassSplit[elementClassSplit.length - 1] == "zohodesk-Tooltip-currentShad") {
            var ordinaryClass = elementClassSplit.slice(0, elementClassSplit.length - 1);
            ordinaryClass = ordinaryClass.join(" ");
            element.className = ordinaryClass;
        }
    }
    document.body.removeChild(document.getElementById("ToolTipEditorPosition"));
    EditorListener = true;
    active = false;
    detachClickListener();
    document.removeEventListener('mouseover', selectElement, true);
    CloseIconMouseOverAction = false;
}




function zohoDesk_callEditerIntegration() {
    if (document.getElementsByClassName("desk_support_chromeAddons").length === 3) {
        location.href = "javascript:functionLoaderCheck(); void 0";
    }
};


var port = chrome.runtime.connect();
window.addEventListener("message", function(event) {
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "Editter_InnerContent_Changed")) {
        editer_InnerTextContent = event.data.text;
    }
}, false);


var maxZIndexValue = findHighestZIndex('div');

document.getElementById('editorBody').style.zIndex = parseInt(maxZIndexValue) + 2;




function zdtt_addnewEventsBinder() {
    articleAPI();

    document.getElementById("Chrome_Extension_AnChorTag").onmouseup = function(e) {
        if (AnchorTagsList != null) {
            var parentDiv = document.createElement("div");
            parentDiv.className = "zohodesk-Tooltip-dropdown-content";
            parentDiv.id = "zohodesk_Tooltip_dropdown_articles_parent_id";
            var container = document.createElement("ul");
            container.className = "zohodesk-Tooltip-list";
            for (i = 0; i < AnchorTagsList.length; i++) {
                var child = document.createElement("li");
                child.className = "zohodesk-Tooltip-dropdown-options";
                child.id = AnchorTagsList[i];
                child.appendChild(document.createTextNode(AnchorTagsList[i]));
                container.appendChild(child);
            }
            parentDiv.appendChild(container);
            var element = document.getElementById("Chrome_Extension_AnChorTag_Show").getElementsByTagName('div')[0];
            if (element != undefined) {
                element.parentElement.removeChild(element);
            }
            document.getElementById("Chrome_Extension_AnChorTag_Show").appendChild(parentDiv);
            show("Chrome_Extension_AnChorTag_Show");
            document.getElementById("Chrome_Extension_AnChorTag_Show").children[0].onclick = function(e) {
                document.getElementById("Chrome_Extension_AnChorTag").innerHTML = e.target.innerHTML;
                hide("Chrome_Extension_AnChorTag_Show");
            }
        }
    }

    document.getElementById("zohodesk_tooltip_trigger").onmouseup = function(e) {
        show("zohodesk_tooltip_trigger_options");
    }


    document.getElementById("zohodesk_tooltip_trigger_options_onClick").onmouseup = function(e) {
        document.getElementById("zohodesk_tooltip_trigger").innerHTML = e.target.innerHTML;
        if (e.target.innerHTML == "On Hover") {
            Trigger_option = "HOVER";
        } else {
            Trigger_option = "CLICK";
        }

    }
    document.getElementById("zohodesk_tooltip_trigger_options_onHover").onmouseup = zd_tt_showTrigger;

    document.getElementById("TooltipSave").onclick = function(e) {
        var zd_tt_triggerName = document.getElementById("zd_tt_triggerName").value;
        if (zd_tt_triggerName != "") {
            if (Chrome_Extension_Save_Or_Edit_Option == "Chrome_Extension_Save_ToolTip") {
                if (Zohodesk_Chrome_Extension_ConfigureElement != null) {
                    if (editer_InnerTextContent != "") {
                        
                        popupBackgroundColor = window.getComputedStyle(document.getElementById('editerToolsContainer').lastElementChild.contentDocument.body, null).getPropertyValue('background-color');
                        popupBackgroundColor = popupBackgroundColor.toLocaleLowerCase();
                        if (popupBackgroundColor == "") {
                            popupBackgroundColor = "#ffffff";
                        }
                        if (popupBackgroundColor.indexOf("#") == -1) {
                            if (popupBackgroundColor.indexOf("rgb") != -1) {
                                var arrayOfRGB = popupBackgroundColor.split("rgb(")[1].split(")")[0].split(",");
                                popupBackgroundColor = zd_colorValueChanger.rgbToHex(parseInt(arrayOfRGB[0]), parseInt(arrayOfRGB[1]), parseInt(arrayOfRGB[2]));
                            }
                        }
                        ArticleContent = editer_InnerTextContent;
                        var element = prvsElems;
                        var elementClass = element.className;
                        var elementClassSplit = elementClass.split(" ");
                        if (elementClassSplit[elementClassSplit.length - 1] == "zohodesk-Tooltip-currentShad") {
                            var ordinaryClass = elementClassSplit.slice(0, elementClassSplit.length - 1);
                            ordinaryClass = ordinaryClass.join(" ");
                            element.className = ordinaryClass;
                        }
                        if (ArticleContent != "") {
                            windowLocationHref = window.location.pathname;
                            var obj = {};
                            obj.viewtype = "TOOLTIP";
                            // obj.name=zd_tt_triggerName;
                            obj.isEnabled = true;
                            obj.preferences = {
                                viewSize: Size_option,
                                bgColor: popupBackgroundColor
                            };
                            obj.triggers = [{}];
                            //obj.messages[0].triggers[0].id=null;
                            obj.triggers[0].event = Trigger_option;
                            // console.log("Element:",fullPath(prvsElems));
                            obj.triggers[0].element = fullPath(prvsElems);
                            obj.triggers[0].url = windowLocationHref;
                            obj.components = [{}];
                            //obj.messages[0].components[0].id=null;
                            obj.components[0].type = "ARTICLESNIPPET";
                            obj.components[0].order = "0";
                            obj.components[0].preferences = null;
                            obj.components[0].solutionId = SingleArticleId;
                            obj.components[0].content = ArticleContent;
                            Trigger_option = "HOVER";
                            // console.log(obj);
                            var Zohodesk_Chrome_Extension_Save_Configure_Snippet_Url = "https://" + commomDomainNameForAPI + "/api/web/extensions/" + ExtensionProjectId + "/messages?orgId=" + organitationID;
                            element.className +=" zohodesk-Tooltip-currentShad";
                            requestAPI(Zohodesk_Chrome_Extension_Save_Configure_Snippet_Url).post('', obj).then((res) => {
                                if(res.data == undefined){
                                    document.getElementById("searchArticleBox").value = "";
                                    var liTags = document.getElementsByClassName('zohodesk-Tooltip-clr-box');
                                    for (i = 0; i < liTags.length; i++) {
                                        liTags[i].style.borderColor = "";
                                    }
                                    document.getElementById("zd_tt_triggerName").value="";
                                    document.getElementById('ChromeAddonManualBackgroundColorInput').value = "";
                                    location.href = "javascript:tooltipBackgroundColourChanger('white');";
                                    listOfTriggersObj[listOfTriggersObj.length] = res;
                                    EditorListener = true;
                                    // getConfigureElements();
                                    document.addEventListener('mouseover', selectElement, true);
                                    var a = document.getElementsByClassName("KB_Editor_iframe")[0];
                                    a.contentDocument.body.innerHTML = "<div><br></div>";
                                    Zohodesk_Chrome_Extension_ConfigureElement = null;
                                    editer_InnerTextContent = "";
                                    SingleArticleId = "";
                                }
                            })
                            //document.body.removeChild(document.getElementById("ToolTipEditorPosition"));
                            //zohodesk_tooltip_parentElement();
                        }
                    } else {
                        createToolTipErrorPopupBox({
                            id: "editorBody",
                            buttons: [{
                                id: "zd_tt_ok",
                                content: "ok"
                            }, {
                                id: "zd_tt_cancel",
                                content: "cancel"
                            }],
                            content: "<b>Article is not selected ...</b><br> please select the article content , and hit the save button..."
                        });
                    }
                } else {
                    createToolTipErrorPopupBox({
                        id: "editorBody",
                        buttons: [{
                            id: "zd_tt_ok",
                            content: "ok"
                        }, {
                            id: "zd_tt_cancel",
                            content: "cancel"
                        }],
                        content: "<b>Element is not selected ...</b> please select the element , and hit the save button..."
                    });
                }
            } else if (Chrome_Extension_Save_Or_Edit_Option == "Chrome_Extension_Update_ToolTip") {
                if (editer_InnerTextContent != "") {
                    ConfigureObjectForEdit.components.content = editer_InnerTextContent;
                    ConfigureObjectForEdit.preferences.bgColor = popupBackgroundColor;
                    ConfigureObjectForEdit.preferences.viewSize = Size_option;
                    ConfigureObjectForEdit.triggers.event = Trigger_option;
                    if (SingleArticleId != StaticArticleId) {
                        ConfigureObjectForEdit.components.contentId = null;
                    }
                    ConfigureObjectForEdit.components.solutionId = SingleArticleId;
                    var Zohodesk_Chrome_Extension_Update_Configure_Snippet_Url = "https://" + commomDomainNameForAPI + "/api/web/extensions/" + ExtensionProjectId + "/messages/" + ConfigureObjectForEdit.id + "?orgId=" + organitationID;
                    requestAPI(Zohodesk_Chrome_Extension_Update_Configure_Snippet_Url).post('', ConfigureObjectForEdit).then((res) => {
                        // console.log("Updated",res);
                    })

                }
            }
        } else {
            createToolTipErrorPopupBox({
                id: "editorBody",
                buttons: [{
                    id: "zd_tt_ok",
                    content: "ok"
                }, {
                    id: "zd_tt_cancel",
                    content: "cancel"
                }],
                content: "<b>Trigger Name Is Empty</b> please enter the trigger name , and hit the save button..."
            });
        }
    }
    document.getElementById("TooltipCancel").onclick = function(e) {
        if (Chrome_Extension_ToolTip_Delete_Or_Cancel == "ToolTip Cancel") {
            document.getElementById("searchArticleBox").value = "";
            document.addEventListener('mouseover', selectElement, true);
            attachListeners();
            mouseOverDone = true;
            a = document.getElementsByClassName("KB_Editor_iframe")[0];
            a.contentDocument.body.innerHTML = "<div><br></div>";
            var liTags = document.getElementsByClassName('zohodesk-Tooltip-clr-box');
            for (i = 0; i < liTags.length; i++) {
                liTags[i].style.borderColor = "";
            }
            document.getElementById('ChromeAddonManualBackgroundColorInput').value = "";
            location.href = "javascript:tooltipBackgroundColourChanger('white');";
            Zohodesk_Chrome_Extension_ConfigureElement = null;
            document.removeEventListener('mousedown', Zohodesk_Tooltip_mousedownActionShow, true);
        } else if (Chrome_Extension_ToolTip_Delete_Or_Cancel == "ToolTip Delete") {
            var Zohodesk_Chrome_Extension_Delete_Configured_Snippet_URL = "https://" + commomDomainNameForAPI + "/api/web/extensions/" + ExtensionProjectId + "/messages/" + ConfigureObjectForEdit.id + "?orgId=" + organitationID;
            requestAPI(Zohodesk_Chrome_Extension_Add_Snippet_Url).post().then((res) => {
                // console.log("Deleted",res);
            })
        }
    }


    document.getElementById("zohodesk_tooltip_size_shown_id").onmouseup = function(e) {
        show("zohodesk_tooltip_size_dropDown_id");
    }
    document.getElementById("zohodesk-Tooltip-small").onmouseup = zd_tt_triggerSizeOptionSelector;
    document.getElementById("zohodesk-Tooltip-medium").onmouseup = zd_tt_triggerSizeOptionSelector;
    document.getElementById("zohodesk-Tooltip-large").onmouseup = zd_tt_triggerSizeOptionSelector;


    document.getElementById("zohodesk-Tooltip-color-6").click();

}
function zd_tt_triggerSizeOptionSelector(e){
    document.getElementById("zohodesk_tooltip_size_shown_id").innerHTML = e.target.innerHTML;
    if(e.target.innerText=="Small"){
        Size_option = "SMALL";
    }
    else if(e.target.innerText=="Medium"){
        Size_option = "MEDIUM";
    }
    else if(e.target.innerText=="Large"){
        Size_option = "LARGE";
    }
}
function deleteSelectedTrigger(elem) {
    elem=elem.target.parentNode.parentNode;
    var div=document.createElement("div");
    div.className="deleteLoadingparent";
    if(elem.localName=="div"){
        elem=elem.parentNode;
    }
    div.innerHTML=" <div class='loading-content' style='top: 8px;'><div class='loading-item'></div></div><div>deleteing...</div>";
    elem.appendChild(div);
    if(elem.id!="" || elem.id!=null || elem.id!=undefined){
        var Zohodesk_Chrome_Extension_Delete_Configured_Snippet_URL = "https://" + commomDomainNameForAPI + "/api/web/extensions/" + ExtensionProjectId + "/messages/" + elem.id + "?orgId=" + organitationID;
        requestAPI(Zohodesk_Chrome_Extension_Delete_Configured_Snippet_URL).del().then((res) => {
            if(res.responseStatus===200){
                elem.className+=" zd_tt_deleteTriggerAnim";
                setTimeout(function(){elem.className+=" zd_tt_transitions"},100);
                elem.parentElement.removeChild(elem);
            }
            else{
                elem.removeChild(div);
            }
        })
    }
}

function zd_tt_showTrigger(e) {
    document.getElementById("zohodesk_tooltip_trigger").innerHTML = e.target.innerHTML;
    if (e.target.innerHTML == "On Hover") {
        Trigger_option = "HOVER";
    } else {
        Trigger_option = "CLICK";
    }
}