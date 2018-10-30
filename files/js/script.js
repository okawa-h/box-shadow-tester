(function() {

	new Vue({
		el: "#tester",
		data() {
			return {
				inset       :false,
				offsetX     :10,
				offsetY     :10,
				blurRadius  :10,
				spreadRadius:10
			}
		},
		computed: {
			boxshadow() {

				const property = [];
				if (this.inset) property.push('inset');
				property.push(`${this.offsetX}px`);
				property.push(`${this.offsetY}px`);
				property.push(`${this.blurRadius}px`);
				property.push(`${this.spreadRadius}px`);
				property.push('rgba(0,0,0,.6)');
				return { boxShadow:property.join(' ') }

			}
		}
	})

})();