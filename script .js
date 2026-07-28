<!DOCTYPE html>
<html>
<head>

<title>Shila Analysis Tool</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="container">

<h1>🚀 Shila Analysis Tool</h1>

<p>Deriv Live Analysis Dashboard</p>

<input
type="password"
id="token"
placeholder="Enter Deriv API Token">

<button id="connect">
Connect
</button>

<h3 id="status">
Disconnected
</h3>

<div class="card">

<h2>Account Balance</h2>

<h1 id="balance">

0.00

</h1>

</div>

<div class="card">

<h2>Select Volatility</h2>

<select id="symbol">

<option value="R_10">
Volatility 10
</option>

<option value="R_25">
Volatility 25
</option>

<option value="R_50">
Volatility 50
</option>

<option value="R_75">
Volatility 75
</option>

<option value="R_100">
Volatility 100
</option>

</select>

<button id="start">
Start Analysis
</button>

</div>

<div class="card">

<h2>Live Tick</h2>

<h1 id="price">
--
</h1>

<h2>

Last Digit

<span id="digit">
-
</span>

</h2>

</div>

<div class="card">

<h2>Digit Statistics</h2>

<div id="stats">

0 : <span id="d0">0</span><br>
1 : <span id="d1">0</span><br>
2 : <span id="d2">0</span><br>
3 : <span id="d3">0</span><br>
4 : <span id="d4">0</span><br>
5 : <span id="d5">0</span><br>
6 : <span id="d6">0</span><br>
7 : <span id="d7">0</span><br>
8 : <span id="d8">0</span><br>
9 : <span id="d9">0</span>

</div>

</div>

<script src="script.js"></script>

</body>
</html>
