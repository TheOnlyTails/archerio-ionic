<script lang="ts">
	import { setupIonicBase } from "ionic-svelte"

	setupIonicBase()

	/* Import all components - or do partial loading - see below */
	import "ionic-svelte/components/all"

	/* Theme variables */
	import "../theme/variables.css"
</script>

<ion-app>
	<slot />
</ion-app>
