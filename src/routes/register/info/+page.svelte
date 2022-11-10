<script>
	import { goto } from '$app/navigation';
	import StyledInput from '$lib/components/StyledInput.svelte';
	import { auth } from '$lib/firebaseConfig';
	import { onMount } from 'svelte';
	let email;
	if (auth.currentUser == null) {
		onMount(() => {
			goto('/register');
		});
	} else {
		email = auth.currentUser.email;
		console.log(email ?? '');
	}
	let inputDict = {
		fName: '',
		lName: '',
		phoneNum: '',
		email: email ?? '',
		sex: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		country: ''
	};

    const onSubmitHandler = ()=>{
        
    }
</script>

<form>
	<div class="name">
		<StyledInput
			label="First Name"
			id="fname"
			name="fname"
			bind:inputValue={inputDict.fName}
			autocomplete="given-name"
			required
		/>
		<StyledInput
			label="Last Name"
			id="lname"
			name="lname"
			bind:inputValue={inputDict.lName}
			autocomplete="family-name"
			required
		/>
	</div>
	<div class="sex-phone">
		<StyledInput
			label="Sex"
			id="sex"
			name="sex"
			bind:inputValue={inputDict.sex}
			autocomplete="sex"
			reqired
		/>
		<StyledInput
			label="Phone Number"
			id="phone"
			name="phone"
			bind:inputValue={inputDict.phoneNum}
			type="tel"
			autocomplete="tel"
			pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			reqired
		/>
	</div>
	<StyledInput
		label="Email"
		id="email"
		name="email"
		bind:inputValue={inputDict.email}
		autocomplete="email"
		reqired
	/>
	<StyledInput
		label="Address Line1"
		id="address1"
		name="address1"
		bind:inputValue={inputDict.address1}
		autocomplete="address-level4"
		reqired
	/>
	<StyledInput
		label="Address Line2"
		id="address2"
		name="address2"
		bind:inputValue={inputDict.address2}
		autocomplete="address-level3"
		reqired
	/>
	<div class="city-state-zip">
		<StyledInput
			label="City"
			id="city"
			name="city"
			ref='city'
			bind:inputValue={inputDict.city}
			autocomplete="address-level2"
			reqired
		/>
		<StyledInput
			label="State/Province/Region"
			id="state"
			name="state"
			ref="state"
			bind:inputValue={inputDict.state}
			autocomplete="address-level-1"
			reqired
		/>
		<StyledInput
			label="Zip"
			id="zip"
			name="zip"
			ref="zip"
			bind:inputValue={inputDict.zip}
			autocomplete="postal-code"
			reqired
		/>
	</div>
	<StyledInput
		label="Country"
		id="country"
		name="country"
		bind:inputValue={inputDict.country}
		autocomplete="country-name"
		reqired
	/>
    <button type="submit" class="btn">Submit</button>
</form>

<style>
	.name,
	.sex-phone,
	.city-state-zip {
		display: flex;
		justify-content: space-around;
		gap: 10px;
		margin: -2rem 0;
	}
	form {
		padding-top: 2rem;
		max-width: 800px;
		margin: auto;
	}
</style>
