<!DOCTYPE html>
<html>
<head>
	<title>Ajax live search</title>
</head>
<body>
	<h1>Ajax - live search</h1>

	<h2>Search Customers</h2>
	<form>
	<div>
		<label>Sort By</label>
		<input type="radio" value="first_name" name="sort" checked><label>First Name</label>
		<input type="radio" value="last_name" name="sort"><label>Last Name</label>
		<input type="radio" value="email_address" name="sort"><label>Email</label>
	</div>
		<div>
			<label for="customer-name">Customer Name:</label>
			<input type="text" id="customer-name" placeholder="Customer Name">
		</div>
		<span id="result"></span>
	</form>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/live-search.js"></script>
</body>
</html>