const CURRENT_ID = "Miruha_krrg";
const ORIGINAL_ID = "krrg_mrh";

const ROOT_ELEMENT = "react-root";

function replaceId() {
	const evaluateResult = document.evaluate(
		`//span[text()='@${CURRENT_ID}'][not(@data-text)]`,
		document,
		null,
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	);
	const elements = [...Array(evaluateResult.snapshotLength)].map((_, i) =>
		evaluateResult.snapshotItem(i),
	);
	for (element of elements) {
		element.innerHTML = `@${ORIGINAL_ID}`;
	}
}

(() => {
	const observer = new MutationObserver(replaceId);

	observer.observe(document.getElementById(ROOT_ELEMENT), {
		attributes: true,
		childList: true,
		subtree: true,
	});
	replaceId();
})();
