<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    </head>
    <body>
        <!-- Opgave 1 -->
        <div>
            <div id="div1">div1</div>
            <div id="div2">div2</div>
            <div id="div3">div3</div>
            <div id="div4">div4</div>

            <form id="form" action="#" method="post">
                <input type="text" id="firstname" name="firstname" placeholder="Firstname" /><br>
                <input type="text" id="lastname" name="Lastname" placeholder="Lastname" /><br>
                <input type="text" id="phone" name="Phone" placeholder="Phone" /><br>
                <input type="text" id="email" name="Email" placeholder="Email" /><br>

                <input type="button" value="Click" onclick="insertToDivs(this.form);" />
            </form>
        </div>
                
        <script src="newjavascript.js"></script>
    </body>
</html>