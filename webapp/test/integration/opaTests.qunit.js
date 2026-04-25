/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["test/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
