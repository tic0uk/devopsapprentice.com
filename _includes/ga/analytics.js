/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-DMWL3FGW7X', function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DMWL3FGW7X', { 'anonymize_ip': true,
    cookie_domain: 'devopsapprentice.com',
    cookie_flags: 'SameSite=None;Secure'
    });
})
