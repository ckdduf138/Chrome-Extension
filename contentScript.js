window.onload = function(){
    AddAdBlock();
}

function AddAdBlock()
{
    AdBlockById("ad_unit");
    AdBlockByClass("adsbygoogle");
    AdBlockByClass("stickyunit");
    AdBlockByClass("con_banner writing_banbox");
    AdBlockByClass("adsbygoogle adsbygoogle-noablate");
}

function AdBlockByClass(adClass)
{
    let ad = document.getElementsByClassName(adClass);
    for (let idx = 0; idx < ad.length; idx++) {
        ad[idx].style.display = "none";
     }
}