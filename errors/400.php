
<!doctype html>
<html>
<head>
    <title>403 Forbidden - Apache</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <style>
        body {
            background-color: #f1f4f5;
            color: #37474f;
            line-height: 1.4;
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
            }
        .error_code {
            display: block;
            font-size: 92px;
            font-weight: 700;
            margin-top: -25px;
            }
        .error_brief {
            display: block;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            }
        .help_button, .fix_button {
            background-color: #399bff;
            color: #fff;
            margin-top: 15px;
            font-size: 14px;
            padding: 7px 20px 7px 20px;
            border: none;
            border-radius: 3px;
            vertical-align: middle;
            cursor: pointer;
            }
        .fix_button {
            background-color: #38ad41;
            }
        #fix_details {
            margin-top: 40px;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.3s, opacity 0.3s linear;
            }
    </style>
    
    <script language="JavaScript">
        function toggleHelp() {
            var e = document.getElementById("fix_details");
            if (e.style.visibility == 'visible') {
                e.style.visibility = 'hidden';
                e.style.opacity = 0;
            } else {
                e.style.visibility = 'visible';
                e.style.opacity = 1;
            }
        }
    </script>
</head>
<body>

<div style="display: table; position: absolute; height: 100%; width: 100%;">
    <div style="display: table-cell; vertical-align: middle; padding: 0 40px;">
        <div style="margin-left: auto; margin-right: auto; width: 520px;">
            <div style="float:left; width:200px; text-align: center; padding-right: 20px;">
                <span class="error_code">400</span>
                <span class="error_description">Неправильный Запрос</span>
            </div>
            <div style="float:left; width:300px;">
                <span class="error_brief">Сервер не дал ответа</span>
                <span class="error_detail">Вернитесь на главную</span>
                <br>
                <input type="button" value="На главную" class="help_button" onclick="toggleHelp()">
            </div>
            <div style="clear:both"></div>
            <div id="fix_details">
                
                <a href="/">Клик</a> 
            </div>
        </div>
    </div>
</div>

</body>