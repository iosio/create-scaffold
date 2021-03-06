module.exports =  ({packageName}) => {

    let html = `\
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta name="Description" content="Put your description here.">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <base href="/">
        <title>${packageName || ''} Demo</title>
</head>
<body>
<noscript>JavaScript is required to use this app.</noscript>
<script type="text/javascript">
    if (navigator.userAgent.indexOf("MSIE") !== -1 || !!window.StyleMedia || !!document.documentMode === true) {
        console.error('This browser is not supported.');
        document.getElementById('body').innerHTML =
            '<div style="max-width: 500px;margin: 50px auto;box-shadow: 0px 6px 19px 2px rgba(150, 160, 229, 0.28);text-align: center; font-family: sans-serif">' +
            '<h3 style="text-align: center;padding: 50px;">This browser is not supported<br>Please use the latest version of Chrome, Firefox, Safari or Opera</h3></div>';
    }
</script>
</body>
</html>`;


    return {
        file: 'demo/src/index.html',
        content: html
    }
};
