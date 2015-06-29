<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="_token" content="{{ csrf_token() }}" />
	<title>Homepage</title>
	@yield("before-style")
<link rel="stylesheet" type="text/css" href="http://localhost/projects/Bootstrap-docs/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="{{ elixir('css/style.css')}}">
	@yield("after-style")

</head>
<body>
<header>
@include("frontend.includes.nav")
</header>
<section class="content">
<div class="container">
@yield("content")
	<section class="sidebar">
	@include("frontend.includes.sidebar")
	</section>
</div>
</section>
<footer>
</footer>
@yield("before-js")
<script type="text/javascript" src="http://localhost/projects/Bootstrap-docs/js/jquery.min.js"></script>
<script type="text/javascript" src="http://localhost/projects/Bootstrap-docs/dist/js/bootstrap.min.js"></script>
@yield("after-js")
</body>
</html>