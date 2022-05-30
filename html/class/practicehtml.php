<!DOCTYPE html>
<html>

<head>
<title>HTML Practice</title>
<style>
body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>

<body>
<a href="https://www.w3schools.com">This is a link</a>
<p>Hello PHP. Today is <?php echo date("l"); ?>. How are you?</p>
<p>
<script type="text/javascript">
     document.write("Hello JavaScript. Today is " + Date() );
</script>
</p>

<p id="demo"></p>
<script>
var text = "";
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;
for (i = 0; i < food.length; i++) {
    text += "I love " + food[i] + "<br>";
     }
document.getElementById("demo").innerHTML = text;
</script>
</body>

</html>