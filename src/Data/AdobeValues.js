const adobeValues = [
    {
        "name": "accept_language",
        "description": "Lists all accepted languages, as indicated in the Accept-Language HTTP header in an image request.",
        "type": "char(20)"
    },
    {
        "name": "aemassetid",
        "description": "A multi-value variable corresponding to Asset ID\\u2019s (GUID\\u2019s) of a set of Adobe Experience Manager Assets. Increments Impression Events.",
        "type": "text"
    },
    {
        "name": "aemassetsource",
        "description": "Identifies the source of the asset event. Used in Adobe Experience Manager.",
        "type": "varchar(255)"
    },
    {
        "name": "aemclickedassetid",
        "description": "Asset ID of an Adobe Experience Manager asset. Increments Click Events.",
        "type": "varchar(255)"
    },
    {
        "name": "browser",
        "description": "Numeric ID of the browser. References the browser.tsv lookup table.",
        "type": "int unsigned"
    },
    {
        "name": "browser_height",
        "description": "Height in pixels of the browser window.",
        "type": "smallint unsigned"
    },
    {
        "name": "browser_width",
        "description": "Width in pixels of the browser window.",
        "type": "smallint unsigned"
    },
    {
        "name": "c_color",
        "description": "Bit depth of the color palette. Used as part of calculating the Color depth dimension. AppMeasurement uses the JavaScript function screen.colorDepth().",
        "type": "char(20)"
    },
    {
        "name": "campaign",
        "description": "Variable used in the Tracking Code dimension.",
        "type": "varchar(255)"
    },
    {
        "name": "carrier",
        "description": "Adobe Advertising Cloud integration variable. Specifies the mobile carrier. References the carrier lookup table.",
        "type": "varchar(100)"
    },
    {
        "name": "channel",
        "description": "Variable used in the Site sections dimension.",
        "type": "varchar(100)"
    },
    {
        "name": "click_action",
        "description": "No longer used. Address of linked clicked in the legacy Clickmap tool.",
        "type": "varchar(100)"
    },
    {
        "name": "click_action_type",
        "description": "No longer used. Link type of the legacy Clickmap tool.",
        "type": "tinyint unsigned"
    },
    {
        "name": "click_context",
        "description": "No longer used. Page name where the link click occurred. Part of the legacy Clickmap tool.",
        "type": "varchar(255)"
    },
    {
        "name": "click_context_type",
        "description": "No longer used. Indicates if click_context had a page name or defaulted to page URL.",
        "type": "tinyint unsigned"
    },
    {
        "name": "click_sourceid",
        "description": "No longer used. Numeric ID for the location on the page of the clicked link. Part of the legacy Clickmap tool.",
        "type": "int unsigned"
    },
    {
        "name": "click_tag",
        "description": "No longer used. Type of HTML element that was clicked.",
        "type": "char(10)"
    },
    {
        "name": "clickmaplink",
        "description": "Activity Map link",
        "type": "varchar(255)"
    },
    {
        "name": "clickmaplinkbyregion",
        "description": "Activity Map link by region",
        "type": "varchar(255)"
    },
    {
        "name": "clickmappage",
        "description": "Activity Map page",
        "type": "varchar(255)"
    },
    {
        "name": "clickmapregion",
        "description": "Activity Map region",
        "type": "varchar(255)"
    },
    {
        "name": "code_ver",
        "description": "AppMeasurement Library version used to compile and send the image request.",
        "type": "char(16)"
    },
    {
        "name": "color",
        "description": "Color depth ID based on the value of the c_color column. References the color_depth.tsv lookup table.",
        "type": "smallint unsigned"
    },
    {
        "name": "connection_type",
        "description": "Numeric ID representing the connection type. Variable used in the Connection type dimension. References the connection_type.tsv lookup table.",
        "type": "tinyint unsigned"
    },
    {
        "name": "cookies",
        "description": "Variable used in the Cookie support dimension.",
        "type": "char(1)"
    },
    {
        "name": "country",
        "description": "Numeric ID representing the country the hit came from. Used in the Countries dimension. Uses country.tsv lookup.",
        "type": "smallint unsigned"
    },
    {
        "name": "ct_connect_type",
        "description": "Related to the connection_type column. Most common values are LAN\\/Wifi, Mobile Carrier, and Modem.",
        "type": "char(20)"
    },
    {
        "name": "curr_factor",
        "description": "Determines the currency decimal place, and is used for currency conversion. For example, USD uses two decimal places, so this column value would be 2.",
        "type": "tinyint"
    },
    {
        "name": "curr_rate",
        "description": "The exchange rate when the transaction occurred. Adobe partners with XE to determine the current day\\u2019s exchange rate.",
        "type": "decimal(24,12)"
    },
    {
        "name": "currency",
        "description": "The currency code that was used during the transaction.",
        "type": "char(8)"
    },
    {
        "name": "cust_hit_time_gmt",
        "description": "Timestamp-enabled report suites only. The timestamp sent with the hit, based in Unix time.",
        "type": "int"
    },
    {
        "name": "cust_visid",
        "description": "If a custom visitor ID is set, it is populated in this column.",
        "type": "varchar(255)"
    },
    {
        "name": "daily_visitor",
        "description": "Flag to determine if the hit is a new daily visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "date_time",
        "description": "The time of the hit in readable format, based on the report suite\\u2019s time zone.",
        "type": "datetime"
    },
    {
        "name": "domain",
        "description": "Variable used in the Domain dimension. Based on the visitor\\u2019s internet access point.",
        "type": "varchar(100)"
    },
    {
        "name": "duplicate_events",
        "description": "Lists each event that was counted as a duplicate.",
        "type": "varchar(255)"
    },
    {
        "name": "duplicate_purchase",
        "description": "Flag indicating that the purchase event for this hit should be ignored because it is a duplicate.",
        "type": "tinyint unsigned"
    },
    {
        "name": "duplicated_from",
        "description": "Only used in report suites containing hit copy VISTA rules. Indicates which report suite the hit was copied from.",
        "type": "varchar(40)"
    },
    {
        "name": "ef_id",
        "description": "The ef_id used in Adobe Advertising Cloud integrations.",
        "type": "varchar(255)"
    },
    {
        "name": "event_list",
        "description": "Comma-separated list of numeric IDs representing events triggered on the hit. Includes both default events and custom events 1-1000. Uses event.tsv lookup.",
        "type": "text"
    },
    {
        "name": "exclude_hit",
        "description": "Flag indicating that the hit is excluded from reporting. The visit_num column is not incremented for excluded hits.",
        "type": "tinyint unsigned"
    },
    {
        "name": "first_hit_page_url",
        "description": "The very first URL of the visitor.",
        "type": "varchar(255)"
    },
    {
        "name": "first_hit_pagename",
        "description": "Variable used in the Entry page original dimension. The original entry page name of the visitor.",
        "type": "varchar(100)"
    },
    {
        "name": "first_hit_ref_domain",
        "description": "Variable used in the Original referring domain dimension. Based on first_hit_referrer. The very first referring domain of the visitor.",
        "type": "varchar(100)"
    },
    {
        "name": "first_hit_ref_type",
        "description": "Numeric ID representing the referrer type of the very first referrer of the visitor. Uses referrer_type.tsv lookup.",
        "type": "tinyint unsigned"
    },
    {
        "name": "first_hit_referrer",
        "description": "The very first referring URL of the visitor.",
        "type": "varchar(255)"
    },
    {
        "name": "first_hit_time_gmt",
        "description": "Timestamp of the very first hit of the visitor in Unix time.",
        "type": "int"
    },
    {
        "name": "geo_city",
        "description": "Name of the city the hit came from, based on IP. Used in the Cities dimension.",
        "type": "char(32)"
    },
    {
        "name": "geo_country",
        "description": "Abbreviation of the country the hit came from, based on IP.",
        "type": "char(4)"
    },
    {
        "name": "geo_dma",
        "description": "Numeric ID of the demographic area the hit came from, based on IP. Used in the US DMA dimension.",
        "type": "int unsigned"
    },
    {
        "name": "geo_region",
        "description": "Name of the state or region the hit came from, based on IP. Used in the Regions dimension.",
        "type": "char(32)"
    },
    {
        "name": "geo_zip",
        "description": "The zip code the hit came came from, based on IP. Helps populate the Zip code dimension. See also zip.",
        "type": "varchar(16)"
    },
    {
        "name": "hier1 - hier5",
        "description": "Used by hierarchy variables. Contains a delimited list of values. The delimiter is chosen under report suite settings.",
        "type": "varchar(255)"
    },
    {
        "name": "hit_source",
        "description": "Indicates what source the hit came from. Hit sources 1, 2, and 6 are billed.",
        "type": "tinyint unsigned"
    },
    {
        "name": "hit_time_gmt",
        "description": "The timestamp of the hit Adobe data collection servers received the hit, based in Unix time.",
        "type": "int"
    },
    {
        "name": "hitid_high",
        "description": "Used in combination with hitid_low to uniquely identify a hit.",
        "type": "bigint unsigned"
    },
    {
        "name": "hitid_low",
        "description": "Used in combination with hitid_high to uniquely identify a hit.",
        "type": "bigint unsigned"
    },
    {
        "name": "homepage",
        "description": "No longer used. Indicated if the current URL is the browser\\u2019s homepage.",
        "type": "char(1)"
    },
    {
        "name": "hourly_visitor",
        "description": "Flag to determine if the hit is a new hourly visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "ip",
        "description": "IP Address, based on the HTTP header of the image request.",
        "type": "char(20)"
    },
    {
        "name": "ip2",
        "description": "Not used. Backend reference variable for report suites containing VISTA rules based on IP address.",
        "type": "char(20)"
    },
    {
        "name": "j_jscript",
        "description": "Version of JavaScript supported by the browser.",
        "type": "char(5)"
    },
    {
        "name": "java_enabled",
        "description": "Flag indicating whether Java is enabled.",
        "type": "char(1)"
    },
    {
        "name": "javascript",
        "description": "Lookup ID of JavaScript version, based on j_jscript. Uses lookup table.",
        "type": "tinyint unsigned"
    },
    {
        "name": "language",
        "description": "Numeric ID of language. Uses languages.tsv lookup table.",
        "type": "smallint unsigned"
    },
    {
        "name": "last_hit_time_gmt",
        "description": "Timestamp (in Unix time) of the prior hit. Used to calculate the Days since last visit dimension.",
        "type": "int"
    },
    {
        "name": "last_purchase_num",
        "description": "Variable used in the Customer loyalty dimension. The number of previous purchases the visitor has made.",
        "type": "int unsigned"
    },
    {
        "name": "last_purchase_time_gmt",
        "description": "Used in the Days since last purchase dimension. Timestamp (in Unix time) of the last purchase made. For first-time purchases and visitors that have not made a purchase before, this value is 0.",
        "type": "int"
    },
    {
        "name": "latlon1",
        "description": "Location (down to 10 km)",
        "type": "varchar(255)"
    },
    {
        "name": "latlon23",
        "description": "Location (down to 100 m)",
        "type": "varchar(255)"
    },
    {
        "name": "latlon45",
        "description": "Location (down to 1 m)",
        "type": "varchar(255)"
    },
    {
        "name": "mc_audiences",
        "description": "List of Audience Manager segment IDs that the visitor belongs to.",
        "type": "text"
    },
    {
        "name": "mcvisid",
        "description": "Experience Cloud Visitor ID. 128-bit number consisting of two concatenated 64-bit numbers padded to 19 digits.",
        "type": "varchar(255)"
    },
    {
        "name": "mobile_id",
        "description": "If the user is using a mobile device, the numeric ID of the device.",
        "type": "int"
    },
    {
        "name": "mobileaction",
        "description": "Mobile action. Automatically collected when trackAction is called in Mobile Services. Allows for automatic action pathing in the app.",
        "type": "varchar(100)"
    },
    {
        "name": "mobileappid",
        "description": "Mobile app ID. Stores the application name and version in the following format: [AppName] [BundleVersion]",
        "type": "varchar(255)"
    },
    {
        "name": "mobileappperformanceappid",
        "description": "Used in the Apteligent data connector. The App ID used in Apteligent.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileappperformancecrashid",
        "description": "Used in the Apteligent data connector. The crash ID used in Apteligent.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileappstoreobjectid",
        "description": "Used in the Appfigures data connector. App store object ID.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilebeaconmajor",
        "description": "Mobile Services beacon major",
        "type": "varchar(100)"
    },
    {
        "name": "mobilebeaconminor",
        "description": "Mobile Services beacon minor",
        "type": "varchar(100)"
    },
    {
        "name": "mobilebeaconproximity",
        "description": "Mobile Services beacon proximity",
        "type": "varchar(255)"
    },
    {
        "name": "mobilebeaconuuid",
        "description": "Mobile Services beacon UUID",
        "type": "varchar(100)"
    },
    {
        "name": "mobilecampaigncontent",
        "description": "The name or ID of the content that displayed the link. Populated by Mobile App Acquisition.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilecampaignmedium",
        "description": "Marketing medium, such as banner or email. Populated by Mobile App Acquisition.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilecampaignname",
        "description": "Name of the campaign, also stored in the campaign variable. Populated by Mobile App Acquisition.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilecampaignsource",
        "description": "Original referrer, such as newsletter or social media network. Populated by Mobile App Acquisition.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilecampaignterm",
        "description": "Paid keywords or other terms you want to track with this acquisition. Populated by Mobile App Acquisition.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledayofweek",
        "description": "Number of the weekday that the app was launched on.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledayssincefirstuse",
        "description": "Number of days since the app was run for the first time.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledayssincelastupgrade",
        "description": "Collected from the context data variable a.DaysSinceLastUpgrade. The number of days that have passed since the previous session.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledayssincelastuse",
        "description": "Number of days since the app was last run.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledeeplinkid",
        "description": "Collected from the context data variable a.deeplink.id. Used in acquisition reports as an identifier for mobile acquisition link.",
        "type": "varchar(255)"
    },
    {
        "name": "mobiledevice",
        "description": "Mobile device name. On iOS, it is stored as a comma-separated 2-digit string. The first number represents the device generation, and the second number represents the device family.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilehourofday",
        "description": "Defines the hour of the day the app was launched. Follows 24-hour numerical format.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileinstalldate",
        "description": "Mobile install date. Provides the date of the first time a user opens the mobile app.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilelaunchessincelastupgrade",
        "description": "Collected from the context data variable a.LaunchesSinceUpgrade. Reports the number of launches since last upgrade.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilelaunchnumber",
        "description": "Increments by one each time the mobile app is launched.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileltv",
        "description": "No longer used. Populated by trackLifetimeValue methods.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilemessagebuttonname",
        "description": "Collected from the context data variable a.message.button.id. Used for in-app messaging to identify the button that closed the message.",
        "type": "varchar(100)"
    },
    {
        "name": "mobilemessageid",
        "description": "In-app Message ID",
        "type": "varchar(255)"
    },
    {
        "name": "mobilemessageonline",
        "description": "In-app Message Online",
        "type": "varchar(255)"
    },
    {
        "name": "mobilemessagepushoptin",
        "description": "Collected from the context data variable a.push.optin. Set to \\u201ctrue\\u201d when the user opts in to push messaging; otherwise the value is \\u201cfalse\\u201d.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilemessagepushpayloadid",
        "description": "Collected from the context data variable a.push.payloadid. Used in push messaging as the payload identifier.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileosenvironment",
        "description": "Collected from the context data variable a.OSEnvironment. States OS environment, such as Android or iOS.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileosversion",
        "description": "Mobile Services operating system version",
        "type": "varchar(255)"
    },
    {
        "name": "mobileplaceaccuracy",
        "description": "Collected from the context data variable a.loc.acc. Indicates the accuracy of the GPS in meters at time of collection.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileplacecategory",
        "description": "Collected from the context data variable a.loc.category. Describes the category of a specific place.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileplaceid",
        "description": "Collected from the context data variable a.loc.id. Identifier for a given point of interest.",
        "type": "varchar(255)"
    },
    {
        "name": "mobilerelaunchcampaigncontent",
        "description": "Mobile Services launch content",
        "type": "varchar(255)"
    },
    {
        "name": "mobilerelaunchcampaignmedium",
        "description": "Mobile Services launch medium",
        "type": "varchar(255)"
    },
    {
        "name": "mobilerelaunchcampaignsource",
        "description": "Mobile Services launch source",
        "type": "varchar(255)"
    },
    {
        "name": "mobilerelaunchcampaignterm",
        "description": "Mobile Services launch term",
        "type": "varchar(255)"
    },
    {
        "name": "mobilerelaunchcampaigntrackingcode",
        "description": "Collected from the context data variable a.launch.campaign.trackingcode. Used in acquisition as the tracking code for launch campaign.",
        "type": "varchar(255)"
    },
    {
        "name": "mobileresolution",
        "description": "Resolution of the mobile device. [Width] x [Height] in pixels.",
        "type": "varchar(255)"
    },
    {
        "name": "monthly_visitor",
        "description": "Flag indicating the visitor is unique to the current month.",
        "type": "tinyint unsigned"
    },
    {
        "name": "mvvar1 - mvvar3",
        "description": "List variable values. Contains a delimited list of custom values depending on implementation.",
        "type": "text"
    },
    {
        "name": "namespace",
        "description": "Not used. Part of a scrapped feature.",
        "type": "varchar(50)"
    },
    {
        "name": "new_visit",
        "description": "Flag that determines if the current hit is a new visit. Set by Adobe servers after 30 minutes of visit inactivity.",
        "type": "tinyint unsigned"
    },
    {
        "name": "os",
        "description": "Numeric ID representing the operating system of the visitor. Based on the user_agent column. Uses os lookup.",
        "type": "int unsigned"
    },
    {
        "name": "p_plugins",
        "description": "No longer used. List of plugins available to the browser. Used the JavaScript function navigator.plugins().",
        "type": "text"
    },
    {
        "name": "page_event",
        "description": "The type of hit that is sent in the image request (standard hit, download link, custom link, exit link). See Page event lookup.",
        "type": "tinyint unsigned"
    },
    {
        "name": "page_event_var1",
        "description": "Only used in link tracking image requests. The URL of the download link, exit link, or custom link clicked.",
        "type": "text"
    },
    {
        "name": "page_event_var2",
        "description": "Only used in link tracking image requests. The custom name (if specified) of the link.",
        "type": "varchar(100)"
    },
    {
        "name": "page_event_var3",
        "description": "No longer used. Contained Survey and Media module data. Populated legacy video reports in previous versions of Adobe Analytics.",
        "type": "text"
    },
    {
        "name": "page_type",
        "description": "Used to populate the Pages not found dimension. Used exclusively for 404 pages. This variable should either be empty or contain the value ErrorPage.",
        "type": "char(20)"
    },
    {
        "name": "page_url",
        "description": "The URL of the hit. Stripped from link tracking image requests.",
        "type": "varchar(255)"
    },
    {
        "name": "pagename",
        "description": "Used to populate the Page dimension. If the pagename variable is empty, Analytics uses page_url instead.",
        "type": "varchar(100)"
    },
    {
        "name": "paid_search",
        "description": "Flag that is set if the hit matches paid search detection.",
        "type": "tinyint unsigned"
    },
    {
        "name": "partner_plugins",
        "description": "Not used. Part of a scrapped feature.",
        "type": "varchar(255)"
    },
    {
        "name": "persistent_cookie",
        "description": "Used in the Persistent cookie support dimension. Indicates if the visitor supports cookies that are not discarded after each hit.",
        "type": "char(1)"
    },
    {
        "name": "plugins",
        "description": "No longer used. List of numeric ID\\u2019s that correspond to plugins available within the browser. Uses plugins.tsv lookup.",
        "type": "varchar(180)"
    },
    {
        "name": "pointofinterest",
        "description": "Mobile Services point of interest name",
        "type": "varchar(255)"
    },
    {
        "name": "pointofinterestdistance",
        "description": "Mobile Services distance to point of interest center",
        "type": "varchar(255)"
    },
    {
        "name": "post_ columns",
        "description": "Contains the value ultimately used in reports. Each post column is populated after server-side logic, processing rules, and VISTA rules. Adobe recommends using post columns in most cases.",
        "type": "See respective non-post column"
    },
    {
        "name": "prev_page",
        "description": "Not used. Adobe-proprietary identifier of the previous page.",
        "type": "int unsigned"
    },
    {
        "name": "product_list",
        "description": "Product list as passed in through the products variable. Products are delimited by commas while individual product properties are delimited by semicolons.",
        "type": "text"
    },
    {
        "name": "product_merchandising",
        "description": "Not used. Use product_list instead.",
        "type": "text"
    },
    {
        "name": "prop1 - prop75",
        "description": "Custom traffic variables 1-75. Used in Prop dimensions.",
        "type": "varchar(100)"
    },
    {
        "name": "purchaseid",
        "description": "Unique identifier for a purchase, as set using the purchaseID variable. Used by the duplicate_purchase column.",
        "type": "char(20)"
    },
    {
        "name": "quarterly_visitor",
        "description": "Flag to determine if the hit is a new quarterly visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "ref_domain",
        "description": "Based on the referrer column. The referring domain of the hit. Used in the Referring domain dimension.",
        "type": "varchar(100)"
    },
    {
        "name": "ref_type",
        "description": "A numeric ID representing the type of referral for the hit. Used in the Referrer type dimension.",
        "type": "tinyint unsigned"
    },
    {
        "name": "referrer",
        "description": "Page URL of the previous page. Used in the Referrer dimension. Note that while referrer uses a data type of varchar(255), post_referrer uses a data type of varchar(244).",
        "type": "varchar(255)"
    },
    {
        "name": "resolution",
        "description": "Numeric ID representing the resolution of the monitor. Used in the Monitor resolution dimension. Uses resolution.tsv lookup table.",
        "type": "smallint unsigned"
    },
    {
        "name": "s_kwcid",
        "description": "Keyword ID used in Adobe Advertising Cloud integrations.",
        "type": "varchar(255)"
    },
    {
        "name": "s_resolution",
        "description": "Raw screen resolution value. Gathered using the JavaScript function screen.width x screen.height.",
        "type": "char(20)"
    },
    {
        "name": "search_engine",
        "description": "Numeric ID representing the Search Engine that referred the visitor to your site. Uses search_engines.tsv lookup.",
        "type": "smallint unsigned"
    },
    {
        "name": "search_page_num",
        "description": "Used by the All Search Page Rank dimension. Indicates which page of search results your site appeared on before the user clicked through to your site.",
        "type": "smallint unsigned"
    },
    {
        "name": "secondary_hit",
        "description": "Flag that tracks secondary hits. Typically originates from multi-suite tagging and VISTA rules that copy hits.",
        "type": "tinyint unsigned"
    },
    {
        "name": "service",
        "description": "Not used. Use page_event instead.",
        "type": "char(2)"
    },
    {
        "name": "socialaccountandappids",
        "description": "No longer used. Social account and app ID\\u2019s",
        "type": "varchar(255)"
    },
    {
        "name": "socialassettrackingcode",
        "description": "No longer used. Social campaign variable",
        "type": "varchar(255)"
    },
    {
        "name": "socialauthor",
        "description": "No longer used. Social Authors variable",
        "type": "varchar(255)"
    },
    {
        "name": "socialcontentprovider",
        "description": "No longer used. Social Platforms\\/Properties",
        "type": "varchar(255)"
    },
    {
        "name": "socialinteractiontype",
        "description": "No longer used. Social interaction type",
        "type": "varchar(255)"
    },
    {
        "name": "sociallanguage",
        "description": "No longer used. Social language",
        "type": "varchar(255)"
    },
    {
        "name": "sociallatlong",
        "description": "No longer used. Social Latitude\\/Longitude",
        "type": "varchar(255)"
    },
    {
        "name": "socialowneddefinitioninsighttype",
        "description": "No longer used. Social owned definition insight type",
        "type": "varchar(255)"
    },
    {
        "name": "socialowneddefinitioninsightvalue",
        "description": "No longer used. Social owned definition insight value",
        "type": "varchar(255)"
    },
    {
        "name": "socialowneddefinitionmetric",
        "description": "No longer used. Social owned definition metric",
        "type": "varchar(255)"
    },
    {
        "name": "socialowneddefinitionpropertyvspost",
        "description": "No longer used. Social owned definition property vs. post",
        "type": "varchar(255)"
    },
    {
        "name": "socialownedpostids",
        "description": "No longer used. Social owned post ID\\u2019s",
        "type": "varchar(255)"
    },
    {
        "name": "socialownedpropertyid",
        "description": "No longer used. Social owned property ID",
        "type": "varchar(255)"
    },
    {
        "name": "socialownedpropertyname",
        "description": "No longer used. Social owned property name",
        "type": "varchar(255)"
    },
    {
        "name": "socialownedpropertypropertyvsapp",
        "description": "No longer used. Social owned property vs app",
        "type": "varchar(255)"
    },
    {
        "name": "state",
        "description": "State variable.",
        "type": "varchar(50)"
    },
    {
        "name": "stats_server",
        "description": "Not of use. Adobe internal server that processed the hit.",
        "type": "char(30)"
    },
    {
        "name": "t_time_info",
        "description": "Local time for the visitor. Format is: M\\/D\\/YYYY HH:MM:SS Month (0-11, 0=January) Timezone offset (in minutes)",
        "type": "varchar(100)"
    },
    {
        "name": "tnt",
        "description": "Used in Adobe Target integrations.",
        "type": "text"
    },
    {
        "name": "tnt_action",
        "description": "Used in Adobe Target integrations.",
        "type": "text"
    },
    {
        "name": "tnt_post_vista",
        "description": "No longer used. Use post_tnt instead.",
        "type": "text"
    },
    {
        "name": "transactionid",
        "description": "A unique identifier where various data points can be uploaded later via data sources. Collected using the transactionID variable.",
        "type": "text"
    },
    {
        "name": "truncated_hit",
        "description": "A flag indicating that the image request was truncated. Indicates that a partial hit was received.",
        "type": "char(1)"
    },
    {
        "name": "ua_color",
        "description": "No longer used. Formerly used as a fallback for color depth.",
        "type": "char(20)"
    },
    {
        "name": "ua_os",
        "description": "No longer used. Formerly used as a fallback for operating system.",
        "type": "char(80)"
    },
    {
        "name": "ua_pixels",
        "description": "No longer used. Formerly used as a fallback for browser height and width.",
        "type": "char(20)"
    },
    {
        "name": "user_agent",
        "description": "User agent string sent in the HTTP header of the image request.",
        "type": "text"
    },
    {
        "name": "user_hash",
        "description": "Not of use. Hash on the report suite ID. Use username instead.",
        "type": "int unsigned"
    },
    {
        "name": "user_server",
        "description": "Used in the Server dimension.",
        "type": "varchar(100)"
    },
    {
        "name": "userid",
        "description": "Not of use. The numeric ID for the report suite ID. Use username instead.",
        "type": "int unsigned"
    },
    {
        "name": "username",
        "description": "The report suite ID for the hit.",
        "type": "char(40)"
    },
    {
        "name": "va_closer_detail",
        "description": "Variable used in the Last touch detail dimension.",
        "type": "varchar(255)"
    },
    {
        "name": "va_closer_id",
        "description": "Numeric ID that identifies the Last touch channel dimension. Lookup for this ID can be found in the Marketing Channel Manager.",
        "type": "tinyint unsigned"
    },
    {
        "name": "va_finder_detail",
        "description": "Variable used in the First touch detail dimension.",
        "type": "varchar(255)"
    },
    {
        "name": "va_finder_id",
        "description": "Numeric ID that identifies the First touch channel dimension. Lookup for this ID can be found in the Marketing Channel Manager.",
        "type": "tinyint unsigned"
    },
    {
        "name": "va_instance_event",
        "description": "Flag to identify Marketing Channel Instances.",
        "type": "tinyint unsigned"
    },
    {
        "name": "va_new_engagement",
        "description": "Flag to identify Marketing Channel New engagements.",
        "type": "tinyint unsigned"
    },
    {
        "name": "video",
        "description": "Video content",
        "type": "varchar(255)"
    },
    {
        "name": "videoad",
        "description": "Video ad name",
        "type": "varchar(255)"
    },
    {
        "name": "videoadinpod",
        "description": "Video ad in pod position",
        "type": "varchar(255)"
    },
    {
        "name": "videoadlength",
        "description": "Video ad length",
        "type": "varchar(255)"
    },
    {
        "name": "videoadload",
        "description": "Video ad loads",
        "type": "varchar(255)"
    },
    {
        "name": "videoadname",
        "description": "Video ad name",
        "type": "varchar(255)"
    },
    {
        "name": "videoadplayername",
        "description": "Video ad player name",
        "type": "varchar(255)"
    },
    {
        "name": "videoadpod",
        "description": "Video ad pod",
        "type": "varchar(255)"
    },
    {
        "name": "videoadvertiser",
        "description": "Video advertiser",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudioalbum",
        "description": "Video audio album",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudioartist",
        "description": "Video audio artist",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudioauthor",
        "description": "Video audio author",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudiolabel",
        "description": "Video audio label",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudiopublisher",
        "description": "Video audio publisher",
        "type": "varchar(255)"
    },
    {
        "name": "videoaudiostation",
        "description": "Video audio station",
        "type": "varchar(255)"
    },
    {
        "name": "videocampaign",
        "description": "Video campaign",
        "type": "varchar(255)"
    },
    {
        "name": "videochannel",
        "description": "Video channel",
        "type": "varchar(255)"
    },
    {
        "name": "videochapter",
        "description": "Video chapter name",
        "type": "varchar(255)"
    },
    {
        "name": "videocontenttype",
        "description": "Video content type. Set to \\u2018Video\\u2019 automatically for all video views",
        "type": "varchar(255)"
    },
    {
        "name": "videodaypart",
        "description": "Video day part",
        "type": "varchar(255)"
    },
    {
        "name": "videoepisode",
        "description": "Video episode",
        "type": "varchar(255)"
    },
    {
        "name": "videofeedtype",
        "description": "Video feed type",
        "type": "varchar(255)"
    },
    {
        "name": "videogenre",
        "description": "Video genre",
        "type": "text"
    },
    {
        "name": "videolength",
        "description": "Video length",
        "type": "varchar(255)"
    },
    {
        "name": "videomvpd",
        "description": "Video MVPD",
        "type": "varchar(255)"
    },
    {
        "name": "videoname",
        "description": "Video name",
        "type": "varchar(255)"
    },
    {
        "name": "videonetwork",
        "description": "Video network",
        "type": "varchar(255)"
    },
    {
        "name": "videopath",
        "description": "Video path",
        "type": "varchar(100)"
    },
    {
        "name": "videoplayername",
        "description": "Video player name",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoebitrateaverageevar",
        "description": "Video quality average bit rate",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoebitratechangecountevar",
        "description": "Video quality change count",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoebuffercountevar",
        "description": "Video quality buffer count",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoebuffertimeevar",
        "description": "Video quality buffer time",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoedroppedframecountevar",
        "description": "Video quality dropped frame count",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoeerrorcountevar",
        "description": "Video quality error count",
        "type": "varchar(255)"
    },
    {
        "name": "videoqoeextneralerrors",
        "description": "Video quality external errors",
        "type": "text"
    },
    {
        "name": "videoqoeplayersdkerrors",
        "description": "Video quality SDK errors",
        "type": "text"
    },
    {
        "name": "videoqoetimetostartevar",
        "description": "Video quality time to start",
        "type": "varchar(255)"
    },
    {
        "name": "videoseason",
        "description": "Video season",
        "type": "varchar(255)"
    },
    {
        "name": "videosegment",
        "description": "Video segment",
        "type": "varchar(255)"
    },
    {
        "name": "videoshow",
        "description": "Video show",
        "type": "varchar(255)"
    },
    {
        "name": "videoshowtype",
        "description": "Video show type",
        "type": "varchar(255)"
    },
    {
        "name": "videostreamtype",
        "description": "Video stream type",
        "type": "varchar(255)"
    },
    {
        "name": "visid_high",
        "description": "Used in combination with visid_low to uniquely identify a visitor.",
        "type": "bigint unsigned"
    },
    {
        "name": "visid_low",
        "description": "Used in combination with visid_high to uniquely identify a visitor.",
        "type": "bigint unsigned"
    },
    {
        "name": "visid_new",
        "description": "Flag to identify if the hit contains a newly generated visitor ID.",
        "type": "char(1)"
    },
    {
        "name": "visid_timestamp",
        "description": "If visitor ID was newly generated, provides the timestamp (in Unix time) of when the visitor ID was generated.",
        "type": "int"
    },
    {
        "name": "visid_type",
        "description": "Not for external use; internally used by Adobe for processing optimizations. Numeric ID representing the method used to identify the visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "visit_keywords",
        "description": "Variable used in the Search keyword dimension. This column uses a non-standard character limit of varchar(244) to accommodate back-end logic used by Adobe.",
        "type": "varchar(244)"
    },
    {
        "name": "visit_num",
        "description": "Variable used in the Visit number dimension. Starts at 1, and increments each time a new visit starts per visitor.",
        "type": "int unsigned"
    },
    {
        "name": "visit_page_num",
        "description": "Variable used in the Hit depth dimension. Increases by 1 for each hit the user generates. Resets each visit.",
        "type": "int unsigned"
    },
    {
        "name": "visit_ref_domain",
        "description": "Based on the visit_referrer column. The first referring domain of the visit.",
        "type": "varchar(100)"
    },
    {
        "name": "visit_ref_type",
        "description": "Numeric ID representing the referrer type of the first referrer of the visit. Uses the referrer_type.tsv lookup table.",
        "type": "tinyint unsigned"
    },
    {
        "name": "visit_referrer",
        "description": "The first referrer of the visit.",
        "type": "varchar(255)"
    },
    {
        "name": "visit_search_engine",
        "description": "Numeric ID of the first search engine of the visit. Uses search_engines.tsv lookup.",
        "type": "smallint unsigned"
    },
    {
        "name": "visit_start_page_url",
        "description": "The first URL of the visit.",
        "type": "varchar(255)"
    },
    {
        "name": "visit_start_pagename",
        "description": "The first Page Name of the visit.",
        "type": "varchar(100)"
    },
    {
        "name": "visit_start_time_gmt",
        "description": "Timestamp (in Unix time) of the first hit of the visit.",
        "type": "int"
    },
    {
        "name": "weekly_visitor",
        "description": "Flag to determine if the hit is a new weekly visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "yearly_visitor",
        "description": "Flag to determine if the hit is a new yearly visitor.",
        "type": "tinyint unsigned"
    },
    {
        "name": "zip",
        "description": "Helps populate the Zip code dimension. See also geo_zip.",
        "type": "varchar(50)"
    },
    {
        "name": "evar1",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar2",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar3",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar4",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar5",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar6",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar7",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar8",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar9",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar10",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar11",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar12",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar13",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar14",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar15",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar16",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar17",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar18",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar19",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar20",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar21",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar22",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar23",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar24",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar25",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar26",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar27",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar28",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar29",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar30",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar31",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar32",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar33",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar34",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar35",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar36",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar37",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar38",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar39",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar40",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar41",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar42",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar43",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar44",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar45",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar46",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar47",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar48",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar49",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar50",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar51",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar52",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar53",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar54",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar55",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar56",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar57",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar58",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar59",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar60",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar61",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar62",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar63",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar64",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar65",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar66",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar67",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar68",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar69",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar70",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar71",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar72",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar73",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar74",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar75",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar76",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar77",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar78",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar79",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar80",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar81",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar82",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar83",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar84",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar85",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar86",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar87",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar88",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar89",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar90",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar91",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar92",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar93",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar94",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar95",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar96",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar97",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar98",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar99",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar100",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar101",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar102",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar103",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar104",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar105",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar106",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar107",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar108",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar109",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar110",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar111",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar112",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar113",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar114",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar115",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar116",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar117",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar118",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar119",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar120",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar121",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar122",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar123",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar124",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar125",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar126",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar127",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar128",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar129",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar130",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar131",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar132",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar133",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar134",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar135",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar136",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar137",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar138",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar139",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar140",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar141",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar142",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar143",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar144",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar145",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar146",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar147",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar148",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar149",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar150",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar151",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar152",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar153",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar154",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar155",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar156",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar157",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar158",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar159",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar160",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar161",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar162",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar163",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar164",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar165",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar166",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar167",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar168",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar169",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar170",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar171",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar172",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar173",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar174",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar175",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar176",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar177",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar178",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar179",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar180",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar181",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar182",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar183",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar184",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar185",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar186",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar187",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar188",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar189",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar190",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar191",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar192",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar193",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar194",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar195",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar196",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar197",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar198",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar199",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar200",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar201",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar202",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar203",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar204",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar205",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar206",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar207",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar208",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar209",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar210",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar211",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar212",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar213",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar214",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar215",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar216",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar217",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar218",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar219",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar220",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar221",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar222",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar223",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar224",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar225",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar226",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar227",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar228",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar229",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar230",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar231",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar232",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar233",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar234",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar235",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar236",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar237",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar238",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar239",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar240",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar241",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar242",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar243",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar244",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar245",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar246",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar247",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar248",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar249",
        "description": null,
        "type": "varchar(255)"
    },
    {
        "name": "evar250",
        "description": null,
        "type": "varchar(255)"
    }
]
