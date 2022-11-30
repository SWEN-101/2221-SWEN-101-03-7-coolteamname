<!-- author: Katie Lawson -->

<body>
    <h1>History</h1>
    <hr />

    <div class="segments">
        <div>
            <h4> Past Appointments </h4>
            <hr />
            <a href="src\routes\history\+page.svelte">
                <img src= "src\lib\images\clipboard.png" alt="clipboard" href="src\routes\history\+page.svelte"
                    width="200" 
                    height="200">
            </a>
            <h5>
                Make Appointment?
            </h5>
            <hr />
            <p>
                -- This will be one past appointment date with the location
            </p>
            <p>
                -- This will be another
            </p>
            <p>
                -- And this another
            </p>
        </div>
        <div>
            <h4> 
                Past Exams
            </h4>
            <hr />
            <a href="src\routes\history\+page.svelte">
                <img src= "src\lib\images\exray man.png" alt="xray man" href="src\routes\history\+page.svelte"
                    width="200" 
                    height="200">
            </a>
            <p>-- This is where past exams/tests will be</p>
            <p>-- This will be maybe be shortcuts to when the exams were</p>
            <p>-- Hopefully clicking the header will bring the user to the Profile page that still needs to be made</p>
        </div>
        <div>
            <h4>
                Pharmacies Near You
            </h4>
            <hr />
            <a href="src\routes\history\+page.svelte">
                <img src= "src\lib\images\big pharma.png" alt="big pharma" href="src\routes\history\+page.svelte"
                    width="150" 
                    height="150">
            </a>
            <p>-- This is where the nearest pharmacies will be</p>
            <p>-- Clicking on any of the pharmacies should hopefully bring the user to the map page, where it will show the location</p>
            <p>-- We'll see if I can get it to work</p>
        </div>
    </div>

</body>
<style>
    .segments {
        display: flex;
        text-align: justify;
        text-align: center;
        height: 550px;
        background-color: white;
    }

    .segments > div {
        text-align: center;
        width: 300px;
        margin: 30px 20px 30px 20px;
        box-shadow: 4px 5px 11px 10px lightgray;

    }
</style>