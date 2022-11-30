<!-- author: Katie Lawson -->

<body>
    <h1>Profile</h1>
    <hr />

    <div class="segments">
        <div>
            <h4> Past Appointments </h4>
            <hr />
            <a href="andy">
                <img src= "src\lib\images\clipboard.png" alt="clipboard" href="src\routes\history\+page.svelte"
                    width="200" 
                    height="200">
            </a>
            <h5>
                Make Appointment?
            </h5>
            <hr />
            <p>
                -- 08/21/2014 - UR Medicine Strong Memorial Hospital 
            </p>
            <p>
                -- 07/31/2011 - Monroe Community Hospital
            </p>
            <p>
                -- 05/18/2006 - Monroe Community Hospital
            </p>
        </div>
        <div>
            <h4> 
                Past Exams/Procedures
            </h4>
            <hr />
            <a href="katie/past_exams">
                <img src= "src\lib\images\exray man.png" alt="xray man" href="src\routes\history\+page.svelte"
                    width="200" 
                    height="200">
            </a>
            <p>
                -- Benign cyst removal: 11/13/2017 
            </p>
            <p> Operating was Dr. Michael Sinclair</p>
            <p>
                -- Tonsillectomy: 09/08/2014 
            </p>
            <p> Operating was Dr. Samuel Madison</p>
            <p>
                -- Laryngoscopy: 08/21/2014
            </p>
            <p> Performed  by Dr. Samuel Madison </p>
        </div>
        <div>
            <h4>
                Pharmacies Near You
            </h4>
            <hr />
            <a href="justin">
                <img src= "src\lib\images\big pharma.png" alt="big pharma" href="src\routes\history\+page.svelte"
                    width="150" 
                    height="150">
            </a>
            <h5>
                Current Pharmacy
            </h5>
            <h6>CVS Pharmacy: 2709 Chili Ave, Rochester, NY</h6>
            <hr />
            <p>-- Wegmans Pharmacy: 745 Caulkins Rd, Rochester, NY</p>
            <p>-- Walgreens: 670 Thurston Rd, Rochester, NY</p>
            <p>-- CVS Pharmacy: 2325 Marketplace Dr, Rochester, NY</p>
        </div>
    </div>

</body>
<style>
    .segments {
        display: flex;
        text-align: justify;
        text-align: center;
        font-size: medium;
        height: 650px;
        background-color: white;
    }

    .segments > div {
        text-align: center;
        width: 300px;
        margin: 30px 20px 30px 20px;
        box-shadow: 4px 5px 11px 10px lightgray;

    }
</style>