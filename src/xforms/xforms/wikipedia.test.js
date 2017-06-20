/* eslint-disable */
//
// eslint DISABLED because this file, due to embedded text, is too far gone and trips out eslint.
//

//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var transformer = require('./wikipedia')

describe('wikpedia', function () {
  var input = `
<!DOCTYPE html>
<html class="client-nojs" lang="en" dir="ltr">
<head>
<meta charset="UTF-8"/>
<title>Tkuma (political party) - Wikipedia, the free encyclopedia</title>
<script>document.documentElement.className = document.documentElement.className.replace( /(^|\s)client-nojs(\s|$)/, "$1client-js$2" );</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Tkuma_(political_party)","wgTitle":"Tkuma (political party)","wgCurRevisionId":730333615,"wgRevisionId":730333615,"wgArticleId":1056102,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["Articles containing Hebrew-language text","Articles with Hebrew-language external links","Hebrew words and phrases","Orthodox Jewish political parties","Political parties in Israel","Political parties established in 1998","Conservative parties in Israel","1988 establishments in Israel","Religious Zionist political parties in Israel"],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"Tkuma_(political_party)","wgRelevantArticleId":1056102,"wgRequestId":"V7oQtgpAMEkAAJPpf78AAAAL","wgIsProbablyEditable":true,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgWikiEditorEnabledModules":{"toolbar":true,"dialogs":true,"preview":false,"publish":false},"wgBetaFeaturesFeatures":[],"wgMediaViewerOnClick":true,"wgMediaViewerEnabledByDefault":true,"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","usePageImages":true,"usePageDescriptions":true},"wgPreferredVariant":"en","wgMFDisplayWikibaseDescriptions":{"search":true,"nearby":true,"watchlist":true,"tagline":false},"wgRelatedArticles":null,"wgRelatedArticlesUseCirrusSearch":true,"wgRelatedArticlesOnlyUseCirrusSearch":false,"wgULSCurrentAutonym":"English","wgNoticeProject":"wikipedia","wgCentralNoticeCookiesToDelete":[],"wgCentralNoticeCategoriesUsingLegacy":["Fundraising","fundraising"],"wgCategoryTreePageCategoryOptions":"{\"mode\":0,\"hideprefix\":20,\"showcount\":true,\"namespaces\":false}","wgFlaggedRevsParams":{"tags":{"status":{"levels":1,"quality":2,"pristine":3}}},"wgStableRevisionId":null,"wgWikibaseItemId":"Q2665610","wgCentralAuthMobileDomain":false,"wgVisualEditorToolbarScrollOffset":0});mw.loader.state({"ext.globalCssJs.user.styles":"ready","ext.globalCssJs.site.styles":"ready","site.styles":"ready","noscript":"ready","user.styles":"ready","user.cssprefs":"ready","user":"ready","user.options":"loading","user.tokens":"loading","ext.cite.styles":"ready","wikibase.client.init":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.nojs":"ready","ext.tmh.thumbnail.styles":"ready","ext.wikimediaBadges":"ready","mediawiki.legacy.shared":"ready","mediawiki.legacy.commonPrint":"ready","mediawiki.sectionAnchor":"ready","mediawiki.skinning.interface":"ready","skins.vector.styles":"ready","ext.globalCssJs.user":"ready","ext.globalCssJs.site":"ready"});mw.loader.implement("user.options",function($,jQuery,require,module){mw.user.options.set({"variant":"en"});});mw.loader.implement("user.tokens",function ( $, jQuery, require, module ) {
mw.user.tokens.set({"editToken":"+\\","patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});/*@nomin*/;

});mw.loader.load(["mediawiki.page.startup","mediawiki.legacy.wikibits","ext.centralauth.centralautologin","mmv.head","ext.visualEditor.desktopArticleTarget.init","ext.uls.init","ext.uls.interface","ext.quicksurveys.init","mw.MediaWikiPlayer.loader","mw.PopUpMediaTransform","skins.vector.js"]);});</script>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.cite.styles%7Cext.gadget.DRN-wizard%2CReferenceTooltips%2Ccharinsert%2Cfeatured-articles-links%2CrefToolbar%2Cswitcher%2Cteahouse%7Cext.tmh.thumbnail.styles%7Cext.uls.nojs%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.sectionAnchor%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"/>
<script async="" src="/w/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=vector"></script>
<meta name="ResourceLoaderDynamicStyles" content=""/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector"/>
<meta name="generator" content="MediaWiki 1.28.0-wmf.15"/>
<meta name="referrer" content="origin-when-cross-origin"/>
<link rel="alternate" href="android-app://org.wikipedia/http/en.m.wikipedia.org/wiki/Tkuma_(political_party)"/>
<link rel="alternate" type="application/x-wiki" title="Edit this page" href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit"/>
<link rel="edit" title="Edit this page" href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit"/>
<link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png"/>
<link rel="shortcut icon" href="/static/favicon/wikipedia.ico"/>
<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikipedia (en)"/>
<link rel="EditURI" type="application/rsd+xml" href="//en.wikipedia.org/w/api.php?action=rsd"/>
<link rel="copyright" href="//creativecommons.org/licenses/by-sa/3.0/"/>
<link rel="canonical" href="https://en.wikipedia.org/wiki/Tkuma_(political_party)"/>
<link rel="dns-prefetch" href="//login.wikimedia.org"/>
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
</head>
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Tkuma_political_party rootpage-Tkuma_political_party skin-vector action-view feature-page-action-bar-v2">		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="content" class="mw-body" role="main">
			<a id="top"></a>

							<div id="siteNotice"><!-- CentralNotice --></div>
						<div class="mw-indicators">
</div>
			<h1 id="firstHeading" class="firstHeading" lang="en">Tkuma (political party)</h1>
									<div id="bodyContent" class="mw-body-content">
									<div id="siteSub">From Wikipedia, the free encyclopedia</div>
								<div id="contentSub"></div>
												<div id="jump-to-nav" class="mw-jump">
					Jump to:					<a href="#mw-head">navigation</a>, 					<a href="#p-search">search</a>
				</div>
				<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table class="infobox vcard" style="width:22em">
<tr>
<th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;padding-top:0; padding-bottom:0;">
<div style="padding-top:0.3em; padding-bottom:0.3em; line-height: 1;"><span class="fn org">Tkuma</span></div>
</th>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">Leader</th>
<td class="agent" style="line-height:1.3em;"><a href="/wiki/Hanan_Porat" title="Hanan Porat">Hanan Porat</a> (1998–99)<br />
<a href="/wiki/Zvi_Hendel" title="Zvi Hendel">Zvi Hendel</a> (1999–2009)<br />
<a href="/wiki/Ya%27akov_Katz_(politician_born_1951)" title="Ya'akov Katz (politician born 1951)">Ya'akov Katz</a> (2009–12)<br />
<a href="/wiki/Uri_Ariel" title="Uri Ariel">Uri Ariel</a> (2012–)</td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">Chairman</th>
<td class="agent" style="line-height:1.3em;"><a href="/wiki/Uri_Ariel" title="Uri Ariel">Uri Ariel</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">Founded</th>
<td style="line-height:1.3em;">1998</td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">Split&#160;from</th>
<td style="line-height:1.3em;"><a href="/wiki/National_Religious_Party" title="National Religious Party">National Religious Party</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;"><a href="/wiki/List_of_political_ideologies" title="List of political ideologies">Ideology</a></th>
<td class="category" style="line-height:1.3em;"><a href="/wiki/Religious_Zionism" title="Religious Zionism">Religious Zionism</a><br />
<a href="/wiki/Greater_Israel" title="Greater Israel">Greater Israel</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;"><a href="/wiki/Political_spectrum" title="Political spectrum">Political&#160;position</a></th>
<td class="category" style="line-height:1.3em;"><a href="/wiki/Far-right_politics" title="Far-right politics">Far-right</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;"><a href="/wiki/Religion" title="Religion">Religion</a></th>
<td class="category" style="line-height:1.3em;"><a href="/wiki/Modern_Orthodox_Judaism" title="Modern Orthodox Judaism">Modern Orthodox Judaism</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">National affiliation</th>
<td class="category" style="line-height:1.3em;"><a href="/wiki/The_Jewish_Home" title="The Jewish Home">The Jewish Home</a></td>
</tr>
<tr>
<th scope="row" style="line-height:1.3em;">Most MKs</th>
<td style="line-height:1.3em;"><span class="nowrap">5 (2013)</span></td>
</tr>
</table>
<p><b>Tkuma</b> (<a href="/wiki/Hebrew_language" title="Hebrew language">Hebrew</a>: <span class="script-hebrew" style="font-size: 115%; font-family: Alef, 'SBL Hebrew', 'David CLM', 'Frenk Ruehl CLM', 'Hadasim CLM', Shofar, David, 'Noto Sans Hebrew', 'Ezra SIL', 'Ezra SIL SR', FreeSerif, 'Times New Roman', FreeSans, Arial;" dir="rtl">תקומה</span>, <i>Resurrection</i>) is a religious, <a href="/wiki/Far-right_politics" title="Far-right politics">far-right</a> <a href="/wiki/List_of_political_parties_in_Israel" title="List of political parties in Israel">political party</a> in <a href="/wiki/Israel" title="Israel">Israel</a>.</p>
<p></p>
<div id="toc" class="toc">
<div id="toctitle">
<h2>Contents</h2>
</div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Background"><span class="tocnumber">1</span> <span class="toctext">Background</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#See_also"><span class="tocnumber">2</span> <span class="toctext">See also</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#References"><span class="tocnumber">3</span> <span class="toctext">References</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#External_links"><span class="tocnumber">4</span> <span class="toctext">External links</span></a></li>
</ul>
</div>
<p></p>
<h2><span class="mw-headline" id="Background">Background</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit&amp;section=1" title="Edit section: Background">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Tkuma was established in 1998 when <a href="/wiki/Hanan_Porat" title="Hanan Porat">Hanan Porat</a> and <a href="/wiki/Zvi_Hendel" title="Zvi Hendel">Zvi Hendel</a> left the <a href="/wiki/National_Religious_Party" title="National Religious Party">National Religious Party</a>. At first the new party was named <i>Emunim</i> (Hebrew: אמונים, <i>[The] Faithful</i>), but was later renamed Tkuma. Together with <a href="/wiki/Moledet" title="Moledet">Moledet</a> and <a href="/wiki/Herut_%E2%80%93_The_National_Movement" title="Herut – The National Movement">Herut – The National Movement</a> they formed the <a href="/wiki/National_Union_(Israel)" title="National Union (Israel)">National Union</a>, which won four seats in the <a href="/wiki/Israeli_legislative_election,_1999" class="mw-redirect" title="Israeli legislative election, 1999">1999 elections</a>.</p>
<p>For the <a href="/wiki/Israeli_legislative_election,_2003" title="Israeli legislative election, 2003">2003 elections</a> <a href="/wiki/Yisrael_Beiteinu" title="Yisrael Beiteinu">Yisrael Beiteinu</a> joined the National Union (though Herut left), with its increased support helping to win 7 seats. The party was included in <a href="/wiki/Ariel_Sharon" title="Ariel Sharon">Ariel Sharon</a>'s coalition alongside <a href="/wiki/Likud" title="Likud">Likud</a>, <a href="/wiki/Shinui" title="Shinui">Shinui</a>, the <a href="/wiki/National_Religious_Party" title="National Religious Party">National Religious Party</a> and <a href="/wiki/Yisrael_BaAliyah" title="Yisrael BaAliyah">Yisrael BaAliyah</a>.</p>
<p>Because of tensions over the <a href="/wiki/Israel%27s_unilateral_disengagement_plan" class="mw-redirect" title="Israel's unilateral disengagement plan">withdrawal from the Gaza Strip</a> (Tkuma was ideologically opposed, and Hendel lived in the Gaza settlement of <a href="/wiki/Ganei_Tal,_Hof_Aza" title="Ganei Tal, Hof Aza">Ganei Tal</a>), National Union ministers <a href="/wiki/Binyamin_Elon" title="Binyamin Elon">Binyamin Elon</a> and <a href="/wiki/Avigdor_Lieberman" title="Avigdor Lieberman">Avigdor Lieberman</a> were sacked, and the party left the coalition. However, the National Union was bolstered by the addition of <a href="/wiki/Ahi_(political_party)" title="Ahi (political party)">Ahi</a>, which had split off from the National Religious Party when they decided to remain in the coalition.</p>
<p>Before the <a href="/wiki/Israeli_legislative_election,_2006" title="Israeli legislative election, 2006">2006 elections</a> Yisrael Beiteinu left the alliance to fight the election alone. However, at the last minute the National Religious Party decided to join the alliance, which won nine seats, two of which were allocated to Tkuma and taken by Hendel and <a href="/wiki/Uri_Ariel" title="Uri Ariel">Uri Ariel</a>.</p>
<p>On 3 November 2008 the party announced a merger with Ahi, National Religious Party and Moledet to form a new right-wing party,<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup> which was later named <a href="/wiki/The_Jewish_Home" title="The Jewish Home">the Jewish Home</a>. However, around half the former Tkuma members later left the new party to re-establish Tkuma, and rejoin the National Union alongside <a href="/wiki/Moledet" title="Moledet">Moledet</a>, <a href="/wiki/Hatikva_(political_party)" title="Hatikva (political party)">Hatikva</a> and <a href="/wiki/Eretz_Yisrael_Shelanu" title="Eretz Yisrael Shelanu">Eretz Yisrael Shelanu</a>.</p>
<p>In 2012 the party opted to run as part of the Jewish Home list for the <a href="/wiki/Israeli_legislative_election,_2013" title="Israeli legislative election, 2013">2013 elections</a>. The joint list won 12 seats, four of which (<a href="/wiki/Uri_Ariel" title="Uri Ariel">Ariel</a>, <a href="/wiki/Eli_Ben-Dahan" title="Eli Ben-Dahan">Ben-Dahan</a>, <a href="/wiki/Zvulun_Kalfa" title="Zvulun Kalfa">Kalfa</a> and <a href="/wiki/Orit_Strook" title="Orit Strook">Strook</a>) were nominated by the Tkuma central committee. The party decided to continue its alliance with the Jewish Home for the <a href="/wiki/Israeli_legislative_election,_2015" title="Israeli legislative election, 2015">2015 Knesset elections</a>,<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup> taking the 2nd, 8th, 13th, and 17th spots on the joint list.<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> The Jewish Home dropped to 8 seats in that election.</p>
<p>Tkuma is against territorial concessions. Some members support the annexation of the entire West Bank, though the official policy of the Jewish Home parliamentary faction, of which it is part, supports only annexation of <a href="/wiki/West_Bank_Areas_in_the_Oslo_II_Accord" title="West Bank Areas in the Oslo II Accord">Area C of the West Bank</a>.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup></p>
<h2><span class="mw-headline" id="See_also">See also</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit&amp;section=2" title="Edit section: See also">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li><a href="/wiki/Gush_Emunim" title="Gush Emunim">Gush Emunim</a></li>
<li><a href="/wiki/Religious_Zionism" title="Religious Zionism">Religious Zionism</a></li>
</ul>
<h2><span class="mw-headline" id="References">References</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit&amp;section=3" title="Edit section: References">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="reflist" style="list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1">^</a></b></span> <span class="reference-text"><cite class="citation news">Meranda, Amnon (3 November 2008). <a rel="nofollow" class="external text" href="http://www.ynetnews.com/articles/0,7340,L-3617027,00.html">"Right-wing parties unite"</a>. Ynetnews<span class="reference-accessdate">. Retrieved <span class="nowrap">20 December</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATkuma+%28political+party%29&amp;rft.atitle=Right-wing+parties+unite&amp;rft.aufirst=Amnon&amp;rft.aulast=Meranda&amp;rft.date=2008-11-03&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.ynetnews.com%2Farticles%2F0%2C7340%2CL-3617027%2C00.html&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2">^</a></b></span> <span class="reference-text"><cite class="citation news">Ezra, Hezki (20 December 2014). <a rel="nofollow" class="external text" href="http://www.israelnationalnews.com/News/News.aspx/188892">"Tekuma Decides: No Split from Jewish Home"</a>. Arutz Sheva<span class="reference-accessdate">. Retrieved <span class="nowrap">20 December</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATkuma+%28political+party%29&amp;rft.atitle=Tekuma+Decides%3A+No+Split+from+Jewish+Home&amp;rft.aufirst=Hezki&amp;rft.aulast=Ezra&amp;rft.date=2014-12-20&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.israelnationalnews.com%2FNews%2FNews.aspx%2F188892&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3">^</a></b></span> <span class="reference-text"><cite class="citation news">Avi Lewis (12 January 2015). <a rel="nofollow" class="external text" href="http://www.timesofisrael.com/jewish-home-faction-tekumah-selects-knesset-candidates/">"Jewish Home faction Tekumah selects Knesset candidates"</a>. <i>The Times of Israel</i><span class="reference-accessdate">. Retrieved <span class="nowrap">15 June</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATkuma+%28political+party%29&amp;rft.atitle=Jewish+Home+faction+Tekumah+selects+Knesset+candidates&amp;rft.au=Avi+Lewis&amp;rft.date=2015-01-12&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.timesofisrael.com%2Fjewish-home-faction-tekumah-selects-knesset-candidates%2F&amp;rft.jtitle=The+Times+of+Israel&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4">^</a></b></span> <span class="reference-text"><cite class="citation news">Raphael Ahren (12 March 2015). <a rel="nofollow" class="external text" href="http://www.timesofisrael.com/from-annexation-to-right-of-return-what-the-parties-say-about-the-palestinians/">"From annexation to right of return: What the parties say about the Palestinians"</a>. <i>The Times of Israel</i><span class="reference-accessdate">. Retrieved <span class="nowrap">15 June</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATkuma+%28political+party%29&amp;rft.atitle=From+annexation+to+right+of+return%3A+What+the+parties+say+about+the+Palestinians&amp;rft.au=Raphael+Ahren&amp;rft.date=2015-03-12&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.timesofisrael.com%2Ffrom-annexation-to-right-of-return-what-the-parties-say-about-the-palestinians%2F&amp;rft.jtitle=The+Times+of+Israel&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
</ol>
</div>
<h2><span class="mw-headline" id="External_links">External links</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit&amp;section=4" title="Edit section: External links">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li><a rel="nofollow" class="external text" href="http://www.tkuma.org.il">Official website</a> <span class="languageicon" style="font-size:0.95em; font-weight:bold; color:#555;">(Hebrew)</span></li>
</ul>
<div role="navigation" class="navbox" aria-labelledby="23x15px.7Cborder_.7Calt.3DIsrael.7Clink.3DIsrael_Parliamentary_groups_in_Israel" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="4">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Israeli_political_parties" title="Template:Israeli political parties"><abbr title="View this template" style=";;background:none transparent;border:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Israeli_political_parties" title="Template talk:Israeli political parties"><abbr title="Discuss this template" style=";;background:none transparent;border:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Israeli_political_parties&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;">e</abbr></a></li>
</ul>
</div>
<div id="23x15px.7Cborder_.7Calt.3DIsrael.7Clink.3DIsrael_Parliamentary_groups_in_Israel" style="font-size:114%"><span class="flagicon"><a href="/wiki/Israel" title="Israel"><img alt="Israel" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/21px-Flag_of_Israel.svg.png" width="21" height="15" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/32px-Flag_of_Israel.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/41px-Flag_of_Israel.svg.png 2x" data-file-width="660" data-file-height="480" /></a></span> <a href="/wiki/List_of_political_parties_in_Israel" title="List of political parties in Israel">Parliamentary groups in Israel</a></div>
</th>
</tr>
<tr style="height:2px">
<td colspan="2"></td>
</tr>
<tr>
<td class="navbox-image" rowspan="1" style="width:0%;padding:0px 2px 0px 0px">
<div><a href="/wiki/Emblem_of_Israel" title="Emblem of Israel"><img alt="Emblem of Israel alternative blue-gold.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Emblem_of_Israel_alternative_blue-gold.svg/40px-Emblem_of_Israel_alternative_blue-gold.svg.png" width="40" height="49" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Emblem_of_Israel_alternative_blue-gold.svg/60px-Emblem_of_Israel_alternative_blue-gold.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Emblem_of_Israel_alternative_blue-gold.svg/80px-Emblem_of_Israel_alternative_blue-gold.svg.png 2x" data-file-width="401" data-file-height="496" /></a></div>
</td>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Likud" title="Likud">Likud</a></li>
<li><a href="/wiki/Zionist_Union" title="Zionist Union">Zionist Union</a>
<ul>
<li><a href="/wiki/Israeli_Labor_Party" title="Israeli Labor Party">Labor Party</a></li>
<li><a href="/wiki/Hatnuah" title="Hatnuah">Hatnuah</a></li>
<li><a href="/wiki/Green_Movement_(Israel)" title="Green Movement (Israel)">Green Movement</a></li>
</ul>
</li>
<li><a href="/wiki/Joint_List" title="Joint List">Joint List</a>
<ul>
<li><a href="/wiki/Hadash" title="Hadash">Hadash</a></li>
<li><a href="/wiki/United_Arab_List" title="United Arab List">United Arab List</a></li>
<li><a href="/wiki/Balad_(political_party)" title="Balad (political party)">Balad</a></li>
<li><a href="/wiki/Islamic_Movement_in_Israel" title="Islamic Movement in Israel">Islamic Movement</a></li>
<li><a href="/wiki/Ta%27al" title="Ta'al">Ta'al</a></li>
</ul>
</li>
<li><a href="/wiki/Yesh_Atid" title="Yesh Atid">Yesh Atid</a></li>
<li><a href="/wiki/Kulanu" title="Kulanu">Kulanu</a></li>
<li><a href="/wiki/The_Jewish_Home" title="The Jewish Home">The Jewish Home</a> (<strong class="selflink">Tkuma</strong>)</li>
<li><a href="/wiki/Shas" title="Shas">Shas</a></li>
<li><a href="/wiki/Yisrael_Beiteinu" title="Yisrael Beiteinu">Yisrael Beiteinu</a></li>
<li><a href="/wiki/United_Torah_Judaism" title="United Torah Judaism">United Torah Judaism</a>
<ul>
<li><a href="/wiki/Agudat_Yisrael" title="Agudat Yisrael">Agudat Yisrael</a></li>
<li><a href="/wiki/Degel_HaTorah" title="Degel HaTorah">Degel HaTorah</a></li>
</ul>
</li>
<li><a href="/wiki/Meretz" title="Meretz">Meretz</a></li>
</ul>
</div>
</td>
<td class="navbox-image" rowspan="1" style="width:0%;padding:0px 0px 0px 2px">
<div><a href="/wiki/Coat_of_arms_of_Israel" title="Coat of arms of Israel"><img alt="Emblem of Israel.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Israel.svg/40px-Emblem_of_Israel.svg.png" width="40" height="49" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Israel.svg/60px-Emblem_of_Israel.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emblem_of_Israel.svg/80px-Emblem_of_Israel.svg.png 2x" data-file-width="858" data-file-height="1061" /></a></div>
</td>
</tr>
<tr style="height:2px">
<td colspan="2"></td>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="4">
<div>
<ul>
<li><a href="/wiki/List_of_political_parties_in_Israel" title="List of political parties in Israel">List of political parties in Israel</a></li>
<li><a href="/wiki/Politics_of_Israel" title="Politics of Israel">Politics of Israel</a></li>
<li><a href="/wiki/Portal:Politics" title="Portal:Politics">Politics portal</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>


<!-- Saved in parser cache with key enwiki:pcache:idhash:1056102-0!*!0!!en!4!* and timestamp 20160806121248 and revision id 730333615
 -->
<noscript><img src="//en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;" /></noscript></div>					<div class="printfooter">
						Retrieved from "<a dir="ltr" href="https://en.wikipedia.org/w/index.php?title=Tkuma_(political_party)&amp;oldid=730333615">https://en.wikipedia.org/w/index.php?title=Tkuma_(political_party)&amp;oldid=730333615</a>"					</div>
				<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category" title="Help:Category">Categories</a>: <ul><li><a href="/wiki/Category:Hebrew_words_and_phrases" title="Category:Hebrew words and phrases">Hebrew words and phrases</a></li><li><a href="/wiki/Category:Orthodox_Jewish_political_parties" title="Category:Orthodox Jewish political parties">Orthodox Jewish political parties</a></li><li><a href="/wiki/Category:Political_parties_in_Israel" title="Category:Political parties in Israel">Political parties in Israel</a></li><li><a href="/wiki/Category:Political_parties_established_in_1998" title="Category:Political parties established in 1998">Political parties established in 1998</a></li><li><a href="/wiki/Category:Conservative_parties_in_Israel" title="Category:Conservative parties in Israel">Conservative parties in Israel</a></li><li><a href="/wiki/Category:1988_establishments_in_Israel" title="Category:1988 establishments in Israel">1988 establishments in Israel</a></li><li><a href="/wiki/Category:Religious_Zionist_political_parties_in_Israel" title="Category:Religious Zionist political parties in Israel">Religious Zionist political parties in Israel</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories: <ul><li><a href="/wiki/Category:Articles_containing_Hebrew-language_text" title="Category:Articles containing Hebrew-language text">Articles containing Hebrew-language text</a></li><li><a href="/wiki/Category:Articles_with_Hebrew-language_external_links" title="Category:Articles with Hebrew-language external links">Articles with Hebrew-language external links</a></li></ul></div></div>				<div class="visualClear"></div>
							</div>
		</div>
		<div id="mw-navigation">
			<h2>Navigation menu</h2>

			<div id="mw-head">
									<div id="p-personal" role="navigation" class="" aria-labelledby="p-personal-label">
						<h3 id="p-personal-label">Personal tools</h3>
						<ul>
							<li id="pt-anonuserpage">Not logged in</li><li id="pt-anontalk"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [n]" accesskey="n">Talk</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [y]" accesskey="y">Contributions</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Tkuma+%28political+party%29" title="You are encouraged to create an account and log in; however, it is not mandatory">Create account</a></li><li id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Tkuma+%28political+party%29" title="You're encouraged to log in; however, it's not mandatory. [o]" accesskey="o">Log in</a></li>						</ul>
					</div>
									<div id="left-navigation">
										<div id="p-namespaces" role="navigation" class="vectorTabs" aria-labelledby="p-namespaces-label">
						<h3 id="p-namespaces-label">Namespaces</h3>
						<ul>
															<li  id="ca-nstab-main" class="selected"><span><a href="/wiki/Tkuma_(political_party)"  title="View the content page [c]" accesskey="c">Article</a></span></li>
															<li  id="ca-talk"><span><a href="/wiki/Talk:Tkuma_(political_party)"  title="Discussion about the content page [t]" accesskey="t" rel="discussion">Talk</a></span></li>
													</ul>
					</div>
										<div id="p-variants" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-variants-label">
												<h3 id="p-variants-label">
							<span>Variants</span><a href="#"></a>
						</h3>

						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
									</div>
				<div id="right-navigation">
										<div id="p-views" role="navigation" class="vectorTabs" aria-labelledby="p-views-label">
						<h3 id="p-views-label">Views</h3>
						<ul>
															<li id="ca-view" class="selected"><span><a href="/wiki/Tkuma_(political_party)" >Read</a></span></li>
															<li id="ca-edit"><span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=edit"  title="Edit this page [e]" accesskey="e">Edit</a></span></li>
															<li id="ca-history" class="collapsible"><span><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=history"  title="Past revisions of this page [h]" accesskey="h">View history</a></span></li>
													</ul>
					</div>
										<div id="p-cactions" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-cactions-label">
						<h3 id="p-cactions-label"><span>More</span><a href="#"></a></h3>

						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
										<div id="p-search" role="search">
						<h3>
							<label for="searchInput">Search</label>
						</h3>

						<form action="/w/index.php" id="searchform">
							<div id="simpleSearch">
							<input type="search" name="search" placeholder="Search" title="Search Wikipedia [f]" accesskey="f" id="searchInput"/><input type="hidden" value="Special:Search" name="title"/><input type="submit" name="fulltext" value="Search" title="Search Wikipedia for this text" id="mw-searchButton" class="searchButton mw-fallbackSearchButton"/><input type="submit" name="go" value="Go" title="Go to a page with this exact name if it exists" id="searchButton" class="searchButton"/>							</div>
						</form>
					</div>
									</div>
			</div>
			<div id="mw-panel">
				<div id="p-logo" role="banner"><a class="mw-wiki-logo" href="/wiki/Main_Page"  title="Visit the main page"></a></div>
						<div class="portal" role="navigation" id='p-navigation' aria-labelledby='p-navigation-label'>
			<h3 id='p-navigation-label'>Navigation</h3>

			<div class="body">
									<ul>
						<li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li><li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li><li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content – the best of Wikipedia">Featured content</a></li><li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li><li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li><li id="n-sitesupport"><a href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us">Donate to Wikipedia</a></li><li id="n-shoplink"><a href="//shop.wikimedia.org" title="Visit the Wikipedia store">Wikipedia store</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-interaction' aria-labelledby='p-interaction-label'>
			<h3 id='p-interaction-label'>Interaction</h3>

			<div class="body">
									<ul>
						<li id="n-help"><a href="/wiki/Help:Contents" title="Guidance on how to use and edit Wikipedia">Help</a></li><li id="n-aboutsite"><a href="/wiki/Wikipedia:About" title="Find out about Wikipedia">About Wikipedia</a></li><li id="n-portal"><a href="/wiki/Wikipedia:Community_portal" title="About the project, what you can do, where to find things">Community portal</a></li><li id="n-recentchanges"><a href="/wiki/Special:RecentChanges" title="A list of recent changes in the wiki [r]" accesskey="r">Recent changes</a></li><li id="n-contactpage"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us" title="How to contact Wikipedia">Contact page</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-tb' aria-labelledby='p-tb-label'>
			<h3 id='p-tb-label'>Tools</h3>

			<div class="body">
									<ul>
						<li id="t-whatlinkshere"><a href="/wiki/Special:WhatLinksHere/Tkuma_(political_party)" title="List of all English Wikipedia pages containing links to this page [j]" accesskey="j">What links here</a></li><li id="t-recentchangeslinked"><a href="/wiki/Special:RecentChangesLinked/Tkuma_(political_party)" title="Recent changes in pages linked from this page [k]" accesskey="k">Related changes</a></li><li id="t-upload"><a href="/wiki/Wikipedia:File_Upload_Wizard" title="Upload files [u]" accesskey="u">Upload file</a></li><li id="t-specialpages"><a href="/wiki/Special:SpecialPages" title="A list of all special pages [q]" accesskey="q">Special pages</a></li><li id="t-permalink"><a href="/w/index.php?title=Tkuma_(political_party)&amp;oldid=730333615" title="Permanent link to this revision of the page">Permanent link</a></li><li id="t-info"><a href="/w/index.php?title=Tkuma_(political_party)&amp;action=info" title="More information about this page">Page information</a></li><li id="t-wikibase"><a href="https://www.wikidata.org/wiki/Q2665610" title="Link to connected data repository item [g]" accesskey="g">Wikidata item</a></li><li id="t-cite"><a href="/w/index.php?title=Special:CiteThisPage&amp;page=Tkuma_%28political_party%29&amp;id=730333615" title="Information on how to cite this page">Cite this page</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-coll-print_export' aria-labelledby='p-coll-print_export-label'>
			<h3 id='p-coll-print_export-label'>Print/export</h3>

			<div class="body">
									<ul>
						<li id="coll-create_a_book"><a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Tkuma+%28political+party%29">Create a book</a></li><li id="coll-download-as-rdf2latex"><a href="/w/index.php?title=Special:Book&amp;bookcmd=render_article&amp;arttitle=Tkuma+%28political+party%29&amp;returnto=Tkuma+%28political+party%29&amp;oldid=730333615&amp;writer=rdf2latex">Download as PDF</a></li><li id="t-print"><a href="/w/index.php?title=Tkuma_(political_party)&amp;printable=yes" title="Printable version of this page [p]" accesskey="p">Printable version</a></li>					</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id='p-lang' aria-labelledby='p-lang-label'>
			<h3 id='p-lang-label'>Languages</h3>

			<div class="body">
									<ul>
						<li class="interlanguage-link interwiki-cs"><a href="https://cs.wikipedia.org/wiki/Tkuma" title="Tkuma – Czech" lang="cs" hreflang="cs">Čeština</a></li><li class="interlanguage-link interwiki-de"><a href="https://de.wikipedia.org/wiki/Tkuma" title="Tkuma – German" lang="de" hreflang="de">Deutsch</a></li><li class="interlanguage-link interwiki-fr"><a href="https://fr.wikipedia.org/wiki/Tkuma" title="Tkuma – French" lang="fr" hreflang="fr">Français</a></li><li class="interlanguage-link interwiki-he"><a href="https://he.wikipedia.org/wiki/%D7%94%D7%90%D7%99%D7%97%D7%95%D7%93_%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99_-_%D7%AA%D7%A7%D7%95%D7%9E%D7%94" title="האיחוד הלאומי - תקומה – Hebrew" lang="he" hreflang="he">עברית</a></li><li class="interlanguage-link interwiki-pl"><a href="https://pl.wikipedia.org/wiki/Tekuma_(partia)" title="Tekuma (partia) – Polish" lang="pl" hreflang="pl">Polski</a></li><li class="interlanguage-link interwiki-ru"><a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%BA%D1%83%D0%BC%D0%B0_(%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8F)" title="Ткума (партия) – Russian" lang="ru" hreflang="ru">Русский</a></li><li class="interlanguage-link interwiki-sv"><a href="https://sv.wikipedia.org/wiki/Tkuma" title="Tkuma – Swedish" lang="sv" hreflang="sv">Svenska</a></li><li class="uls-p-lang-dummy"><a href="#"></a></li>					</ul>
				<div class='after-portlet after-portlet-lang'><span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Q2665610#sitelinks-wikipedia" title="Edit interlanguage links" class="wbc-editpage">Edit links</a></span></div>			</div>
		</div>
				</div>
		</div>
		<div id="footer" role="contentinfo">
							<ul id="footer-info">
											<li id="footer-info-lastmod"> This page was last modified on 18 July 2016, at 10:20.</li>
											<li id="footer-info-copyright">Text is available under the <a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike License</a><a rel="license" href="//creativecommons.org/licenses/by-sa/3.0/" style="display:none;"></a>;
additional terms may apply.  By using this site, you agree to the <a href="//wikimediafoundation.org/wiki/Terms_of_Use">Terms of Use</a> and <a href="//wikimediafoundation.org/wiki/Privacy_policy">Privacy Policy</a>. Wikipedia® is a registered trademark of the <a href="//www.wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.</li>
									</ul>
							<ul id="footer-places">
											<li id="footer-places-privacy"><a href="https://wikimediafoundation.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">Privacy policy</a></li>
											<li id="footer-places-about"><a href="/wiki/Wikipedia:About" title="Wikipedia:About">About Wikipedia</a></li>
											<li id="footer-places-disclaimer"><a href="/wiki/Wikipedia:General_disclaimer" title="Wikipedia:General disclaimer">Disclaimers</a></li>
											<li id="footer-places-contact"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a></li>
											<li id="footer-places-developers"><a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">Developers</a></li>
											<li id="footer-places-cookiestatement"><a href="https://wikimediafoundation.org/wiki/Cookie_statement">Cookie statement</a></li>
											<li id="footer-places-mobileview"><a href="//en.m.wikipedia.org/w/index.php?title=Tkuma_(political_party)&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
									</ul>
										<ul id="footer-icons" class="noprint">
											<li id="footer-copyrightico">
							<a href="https://wikimediafoundation.org/"><img src="/static/images/wikimedia-button.png" srcset="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x" width="88" height="31" alt="Wikimedia Foundation"/></a>						</li>
											<li id="footer-poweredbyico">
							<a href="//www.mediawiki.org/"><img src="/static/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x" width="88" height="31"/></a>						</li>
									</ul>
						<div style="clear:both"></div>
	  </div>
		<script>(window.RLQ=window.RLQ||[]).push(function(){mw.loader.load(["ext.cite.a11y","mediawiki.toc","mediawiki.action.view.postEdit","site","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","mediawiki.searchSuggest","ext.gadget.teahouse","ext.gadget.ReferenceTooltips","ext.gadget.DRN-wizard","ext.gadget.charinsert","ext.gadget.refToolbar","ext.gadget.switcher","ext.gadget.featured-articles-links","mmv.bootstrap.autostart","ext.visualEditor.targetLoader","ext.eventLogging.subscriber","ext.wikimediaEvents","ext.navigationTiming","schema.UniversalLanguageSelector","ext.uls.eventlogger","ext.uls.interlanguage","ext.centralNotice.startUp","ext.centralNotice.geoIP"]);});</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set( {
    "wgPageParseReport": {
        "limitreport": {
            "cputime": "0.172",
            "walltime": "0.249",
            "ppvisitednodes": {
                "value": 1275,
                "limit": 1000000
            },
            "ppgeneratednodes": {
                "value": 0,
                "limit": 1500000
            },
            "postexpandincludesize": {
                "value": 20927,
                "limit": 2097152
            },
            "templateargumentsize": {
                "value": 580,
                "limit": 2097152
            },
            "expansiondepth": {
                "value": 11,
                "limit": 40
            },
            "expensivefunctioncount": {
                "value": 1,
                "limit": 500
            },
            "timingprofile": [
                "100.00%  216.033      1 -total",
                " 45.35%   97.965      1 Template:Infobox_political_party",
                " 32.14%   69.433      1 Template:Infobox",
                " 27.57%   59.560      1 Template:Reflist",
                " 22.76%   49.175      4 Template:Cite_news",
                " 13.53%   29.239      1 Template:He_icon",
                " 11.83%   25.563      1 Template:Language_icon",
                " 11.34%   24.507      1 Template:Br_separated_entries",
                "  9.84%   21.266      1 Template:Israeli_political_parties",
                "  9.48%   20.477      1 Template:Category_handler"
            ]
        },
        "scribunto": {
            "limitreport-timeusage": {
                "value": "0.067",
                "limit": "10.000"
            },
            "limitreport-memusage": {
                "value": 2837806,
                "limit": 52428800
            }
        },
        "EntityAccessCount": 0,
        "cachereport": {
            "origin": "mw1239",
            "timestamp": "20160806121248",
            "ttl": 2592000,
            "transientcontent": false
        }
    }
} );});</script><script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":64,"wgHostname":"mw1238"});});</script>
	</body>
</html>`

  var output = `<h1 id="firstHeading" class="firstHeading" lang="en">Tkuma (political party)</h1>
<p><b>Tkuma</b> (<a href="/wiki/Hebrew_language" title="Hebrew language">Hebrew</a>: <span class="script-hebrew" style="font-size: 115%; font-family: Alef, &apos;SBL Hebrew&apos;, &apos;David CLM&apos;, &apos;Frenk Ruehl CLM&apos;, &apos;Hadasim CLM&apos;, Shofar, David, &apos;Noto Sans Hebrew&apos;, &apos;Ezra SIL&apos;, &apos;Ezra SIL SR&apos;, FreeSerif, &apos;Times New Roman&apos;, FreeSans, Arial;" dir="rtl">&#x5EA;&#x5E7;&#x5D5;&#x5DE;&#x5D4;</span>, <i>Resurrection</i>) is a religious, <a href="/wiki/Far-right_politics" title="Far-right politics">far-right</a> <a href="/wiki/List_of_political_parties_in_Israel" title="List of political parties in Israel">political party</a> in <a href="/wiki/Israel" title="Israel">Israel</a>.</p>
<p></p>

<p></p>
<h2>Background</h2>
<p>Tkuma was established in 1998 when <a href="/wiki/Hanan_Porat" title="Hanan Porat">Hanan Porat</a> and <a href="/wiki/Zvi_Hendel" title="Zvi Hendel">Zvi Hendel</a> left the <a href="/wiki/National_Religious_Party" title="National Religious Party">National Religious Party</a>. At first the new party was named <i>Emunim</i> (Hebrew: &#x5D0;&#x5DE;&#x5D5;&#x5E0;&#x5D9;&#x5DD;, <i>[The] Faithful</i>), but was later renamed Tkuma. Together with <a href="/wiki/Moledet" title="Moledet">Moledet</a> and <a href="/wiki/Herut_%E2%80%93_The_National_Movement" title="Herut &#x2013; The National Movement">Herut &#x2013; The National Movement</a> they formed the <a href="/wiki/National_Union_(Israel)" title="National Union (Israel)">National Union</a>, which won four seats in the <a href="/wiki/Israeli_legislative_election,_1999" class="mw-redirect" title="Israeli legislative election, 1999">1999 elections</a>.</p>
<p>For the <a href="/wiki/Israeli_legislative_election,_2003" title="Israeli legislative election, 2003">2003 elections</a> <a href="/wiki/Yisrael_Beiteinu" title="Yisrael Beiteinu">Yisrael Beiteinu</a> joined the National Union (though Herut left), with its increased support helping to win 7 seats. The party was included in <a href="/wiki/Ariel_Sharon" title="Ariel Sharon">Ariel Sharon</a>&apos;s coalition alongside <a href="/wiki/Likud" title="Likud">Likud</a>, <a href="/wiki/Shinui" title="Shinui">Shinui</a>, the <a href="/wiki/National_Religious_Party" title="National Religious Party">National Religious Party</a> and <a href="/wiki/Yisrael_BaAliyah" title="Yisrael BaAliyah">Yisrael BaAliyah</a>.</p>
<p>Because of tensions over the <a href="/wiki/Israel%27s_unilateral_disengagement_plan" class="mw-redirect" title="Israel&apos;s unilateral disengagement plan">withdrawal from the Gaza Strip</a> (Tkuma was ideologically opposed, and Hendel lived in the Gaza settlement of <a href="/wiki/Ganei_Tal,_Hof_Aza" title="Ganei Tal, Hof Aza">Ganei Tal</a>), National Union ministers <a href="/wiki/Binyamin_Elon" title="Binyamin Elon">Binyamin Elon</a> and <a href="/wiki/Avigdor_Lieberman" title="Avigdor Lieberman">Avigdor Lieberman</a> were sacked, and the party left the coalition. However, the National Union was bolstered by the addition of <a href="/wiki/Ahi_(political_party)" title="Ahi (political party)">Ahi</a>, which had split off from the National Religious Party when they decided to remain in the coalition.</p>
<p>Before the <a href="/wiki/Israeli_legislative_election,_2006" title="Israeli legislative election, 2006">2006 elections</a> Yisrael Beiteinu left the alliance to fight the election alone. However, at the last minute the National Religious Party decided to join the alliance, which won nine seats, two of which were allocated to Tkuma and taken by Hendel and <a href="/wiki/Uri_Ariel" title="Uri Ariel">Uri Ariel</a>.</p>
<p>On 3 November 2008 the party announced a merger with Ahi, National Religious Party and Moledet to form a new right-wing party, which was later named <a href="/wiki/The_Jewish_Home" title="The Jewish Home">the Jewish Home</a>. However, around half the former Tkuma members later left the new party to re-establish Tkuma, and rejoin the National Union alongside <a href="/wiki/Moledet" title="Moledet">Moledet</a>, <a href="/wiki/Hatikva_(political_party)" title="Hatikva (political party)">Hatikva</a> and <a href="/wiki/Eretz_Yisrael_Shelanu" title="Eretz Yisrael Shelanu">Eretz Yisrael Shelanu</a>.</p>
<p>In 2012 the party opted to run as part of the Jewish Home list for the <a href="/wiki/Israeli_legislative_election,_2013" title="Israeli legislative election, 2013">2013 elections</a>. The joint list won 12 seats, four of which (<a href="/wiki/Uri_Ariel" title="Uri Ariel">Ariel</a>, <a href="/wiki/Eli_Ben-Dahan" title="Eli Ben-Dahan">Ben-Dahan</a>, <a href="/wiki/Zvulun_Kalfa" title="Zvulun Kalfa">Kalfa</a> and <a href="/wiki/Orit_Strook" title="Orit Strook">Strook</a>) were nominated by the Tkuma central committee. The party decided to continue its alliance with the Jewish Home for the <a href="/wiki/Israeli_legislative_election,_2015" title="Israeli legislative election, 2015">2015 Knesset elections</a>, taking the 2nd, 8th, 13th, and 17th spots on the joint list. The Jewish Home dropped to 8 seats in that election.</p>
<p>Tkuma is against territorial concessions. Some members support the annexation of the entire West Bank, though the official policy of the Jewish Home parliamentary faction, of which it is part, supports only annexation of <a href="/wiki/West_Bank_Areas_in_the_Oslo_II_Accord" title="West Bank Areas in the Oslo II Accord">Area C of the West Bank</a>.</p>
<h2>See also</h2>
<ul>
<li><a href="/wiki/Gush_Emunim" title="Gush Emunim">Gush Emunim</a></li>
<li><a href="/wiki/Religious_Zionism" title="Religious Zionism">Religious Zionism</a></li>
</ul>
<h2>References</h2>
<div class="reflist" style="list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1">^ Meranda, Amnon (3 November 2008). &quot;Right-wing parties unite&quot;. Ynetnews. Retrieved 20 December 2014.&#xA0;</li>
<li id="cite_note-2">^ Ezra, Hezki (20 December 2014). &quot;Tekuma Decides: No Split from Jewish Home&quot;. Arutz Sheva. Retrieved 20 December 2014.&#xA0;</li>
<li id="cite_note-3">^ Avi Lewis (12 January 2015). &quot;Jewish Home faction Tekumah selects Knesset candidates&quot;. The Times of Israel. Retrieved 15 June 2015.&#xA0;</li>
<li id="cite_note-4">^ Raphael Ahren (12 March 2015). &quot;From annexation to right of return: What the parties say about the Palestinians&quot;. The Times of Israel. Retrieved 15 June 2015.&#xA0;</li>
</ol>
</div>
<h2>External links</h2>
<ul>
<li><a rel="nofollow" class="external text" href="http://www.tkuma.org.il">Official website</a> <span class="languageicon" style="font-size:0.95em; font-weight:bold; color:#555;">(Hebrew)</span></li>
</ul>
<div role="navigation" class="navbox" aria-labelledby="23x15px.7Cborder_.7Calt.3DIsrael.7Clink.3DIsrael_Parliamentary_groups_in_Israel" style="padding:3px">

</div>`

  it('returns expected output', function () {
    assert.strictEqual(transformer.xform(input), output)
  })
})
