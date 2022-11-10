<script>
	export let label;
	export let inputValue;
    export let id;
    export let emptyValue = ''
	export let type = 'text';
    export let property;
    export let ref;
	let focus = false;
	function typeAction(node) {
		node.type = type;
	}
	const onInputFocus = () => {focus = true;};
	const onInputBlur = () => {focus = false;};
    $: isEmpty = inputValue===emptyValue
</script>

<div class="form-group" {ref}>
	<label for={id} class:out={focus || !isEmpty}>{label}</label>
	<input
		use:typeAction
		bind:value={inputValue}
        {id}
        name={id}
        {...property}
		on:focus={onInputFocus}
		on:blur={onInputBlur}
        style={$$props.style}
        class={$$props.class}
	/>
</div>

<style>
	.form-group > input {
		box-sizing: border-box;
		font-size: 1.15rem;
		width: 100%;
		height: 2.5rem;
		border-radius: 0.5rem;
		border: 2px solid var(--color-theme-2);
		padding: 0 1rem;
	}

	.form-group > label {
		position: absolute;
		font-size: 1.15rem;
		top: 0.75rem;
		left: 0.75rem;
		transition: all 0.2s ease-in-out;
	}

	.form-group {
		position: relative;
        flex-grow:1;
		margin: 2rem 0;
	}

	label.out {
		top: -1.5rem;
		left: 0;
	}
</style>
