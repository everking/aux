<script>
	import Callout from '$lib/components/Callout.svelte'
	let emailBody = "", emailSubject = "", sendEmailResult="";

	const resetEmail = () => {
		emailBody = "";
		emailSubject = "";
	}

	const setMessage = (message) => {
		sendEmailResult = message;
		setTimeout(() => {
			sendEmailResult = "";
		}, 3000);
	}

	const sendEmail = async () => {
		if (emailBody.trim() === "" || emailSubject.trim() === "") {
			setMessage("Subject and details are required");
			return;
		}

		const data = {
			emailSubject,
			emailBody
		}

		console.log(`send Email ${JSON.stringify(data, null, 2)}`);
		const res = await fetch(`/api/posts/email`, {
		  method: 'POST',
		  headers: {
				'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		});

		let result = await res.json();
		setMessage(result.message);
		console.log(`sendEmailResult: ${sendEmailResult}`);
		console.log(JSON.stringify(result, null, 2));
		resetEmail();
	}
</script>
<style>
	textarea {
		padding: 10px;
		margin-top: 10px;
		width: 800px;
		height: 300px;
		font-size: 12pt;
	}
	.sendButton {
		width: 100px;
	}

</style>

<svelte:head>
	<title>Contact us</title>
</svelte:head>
<h2>Contact us</h2>
<input type="text" bind:value={emailSubject} placeholder="What is this about?" />
<textarea id="content" bind:value={emailBody} placeholder="Provide details here."></textarea>
<div>{sendEmailResult}</div>
<button class="sendButton" on:click={() => sendEmail()}>
	Send
</button>
