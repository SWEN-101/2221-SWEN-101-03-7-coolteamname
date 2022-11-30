<script>
	import { goto } from '$app/navigation';
</script>

<!-- Andy's html file -->

<body>
	<hr />
	<h1>Make Appointment</h1>
	<hr />

	<body2>
		<form action="make appointment/appointment made">
			<label for="fname">First name:</label>
			<input type="text" id="fname" name="fname" /><br /><br />
			<label for="lname">Last name:</label>
			<input type="text" id="lname" name="lname" /><br /><br />
			<label for="reason">Reason for visit:</label>
			<input type="text" id="reason" name="reason" /><br /><br />

			<label for="hname">Hospital name:</label>
			<input type="location" id="hname" name="hname" /><br /><br />
			<label for="dname">Doctor:</label>
			<input type="text" id="dname" name="dname" /><br /><br />

			<label for="date">Appointment date:</label>
			<input type="date" id="date" name="date" /><br /><br />
			<label for="time">Appointment time:</label>
			<input type="time" id="time" name="time" /><br /><br />

			<button onclick="window.location='make appointment/appointment made';">Submit</button>
		</form>
	</body2>
    <hr/>
    <button on:click={()=>{goto("./list")}}>view appointments</button>
</body>
