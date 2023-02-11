<script lang="ts">
	import { IonPage } from "ionic-svelte"
	import { qrCode, close } from "ionicons/icons"
	import { BarcodeScanner } from "@capacitor-community/barcode-scanner"
	import { Capacitor } from "@capacitor/core"

	let jsonInputModalOpen = false

	const scanQrCode = async () => {
		if (Capacitor.getPlatform() === "web") {
			jsonInputModalOpen = true

			return
		}

		await BarcodeScanner.checkPermission({ force: true })

		BarcodeScanner.hideBackground()

		const result = await BarcodeScanner.startScan()

		if (result.hasContent) {
			console.log(result.content)
		}
	}
</script>

<IonPage>
	<ion-header translucent={true}>
		<ion-toolbar>
			<ion-title>Archerio</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-card />

	<ion-content fullscreen class="ion-padding">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<ion-fab horizontal="end" vertical="bottom" slot="fixed" on:click={scanQrCode}>
			<ion-fab-button>
				<ion-icon icon={qrCode} />
			</ion-fab-button>
		</ion-fab>

		<ion-modal is-open={jsonInputModalOpen}>
			<ion-header>
				<ion-toolbar>
					<ion-title>Manual JSON Input</ion-title>

					<ion-buttons slot="end">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<ion-button on:click={() => (jsonInputModalOpen = false)}>
							<ion-icon slot="icon-only" icon={close} />
						</ion-button>
					</ion-buttons>
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-item>
					<ion-label position="floating">JSON</ion-label>
					<ion-input />
				</ion-item>
			</ion-content>

			<ion-footer>
				<ion-toolbar>
					<ion-buttons slot="end">
						<ion-button>Submit</ion-button>
					</ion-buttons>
				</ion-toolbar>
			</ion-footer>
		</ion-modal>
	</ion-content>
</IonPage>
