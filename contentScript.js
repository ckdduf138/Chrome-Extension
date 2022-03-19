window.onload = function(){
    AddAdBlock();
}

function AddAdBlock()
{
    //AdBlockById('ad');
    AdBlockByClass('widget_text widget jb-widget-content-top');
    AdBlockByClass('adsbygoogle');
    AdBlockByClass('stickyunit');
    AdBlockByClass('con_banner writing_banbox');
    AdBlockByClass('adsbygoogle adsbygoogle-noablate');
    AdBlockByClass('i-amphtml-fill-content i-amphtml-replaced-content');
    AdBlockByClass('css-97qxj7 einfil01');
    AdBlockByClass('css-g08hhp e1p106g50');
}

// function AdBlockById(adId)
// {
//     document.getElementById(adId).style.display = 'none';
// }

function AdBlockByClass(adClass)
{
    let ad = document.getElementsByClassName(adClass);
    for (let idx = 0; idx < ad.length; idx++) {
        ad[idx].style.display = 'none';
     }
}