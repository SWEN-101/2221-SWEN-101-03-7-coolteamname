<script>
	import Header from "$lib/components/Header.svelte";

</script>
<!-- Andy's html file -->


<body>
    <head>Stealth
        <p>
            Stealth
        </p>
    </head>

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
        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="hname">Hospital name:</label>
            <input type="text" id="hname" name="hname"><br><br>
            <label for="time">Appointment time:</label>
            <input type="text" id="time" name="time"><br><br>
            <button onclick="window.location='andy/appointment list/appointment made';">Submit</button>    
        </form>    </body2>


</body>