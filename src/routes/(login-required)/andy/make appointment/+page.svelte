<script>
	import Header from "$lib/components/Header.svelte";

</script>
<!-- Andy's html file -->


<body>

    <body4>
        <p>
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
    </body4>
    <h1>
        Make Appointment
    </h1>

    <body4>
        <p>
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
    </body4>

    <body2>
        <form action="make appointment/appointment made">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="hname">Hospital name:</label>
            <input type="location" id="hname" name="hname"><br><br>
            <label for="time">Appointment time:</label>
            <input type="date" id="time" name="time"><br><br>
            <button onclick="window.location='make appointment/appointment made';">Submit</button>    
        </form>    </body2>

        <body4>
            <p>
                --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
        </body4>
        <button onclick="window.location='appointment list';">view appointments</button>    



</body>