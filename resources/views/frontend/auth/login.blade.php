 @foreach ($errors->all() as $error)
            {!! $error !!}<br/>
        @endforeach

<form action="" method="POST">
	<input type="text" name="name" required autofocus>
	<input type="text" name="username" required>
	<input type="email" name="email" required>
	<input type="password" name="password" required>
	<input type="hidden" name="_token" value="{{ csrf_token() }}">
	<button type="submit">Login</button>
</form>