<script>
	import axios from 'axios';

	let phone_number = '';
	function getRedirection() {
		axios({ url: '/pay', method: 'POST', data: { phone_number } }).then((r) => {
			window.location.replace(r.data.redirection_url);
		});
	}
</script>

<div class="shop-cart">
	<a
		href="intent://app.stagingsimpl.com#Intent;scheme=https;package=com.simpl.android.staging;S.intent_data=f76f8d2030b1c71b9876d81a7352b65c;S.intent_type=Launch%20Pay;end"
		>test intent</a
	>
	<div class="shop-cart-title">Tomato</div>
	<div class="shop-cart-desc">Fresh as the morning breeze!</div>
	<div class="shop-cart-slider">
		<img
			alt="tomato"
			style="width: 100%; border-radius: 15px"
			src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-round-desi-vegetable-seeds-16969384296588.jpg?v=1601351553"
		/>
	</div>
	<div class="deets">
		<div>
			<label for="phone">Phone:</label>
			<input
				type="text"
				id="phone"
				on:change={(val) => {
					console.log(val.target.value);
					phone_number = val.target.value;
				}}
			/>
		</div>
	</div>
	<div class="shop-cart-cta">
		<div class="shop-cart-cta-price">1kg - ₹500</div>
		<button class="btn" on:click={getRedirection}>
			Pay Via Simpl<span class="bg" />
		</button>
	</div>
</div>
<div class="bg" />

<style>
	.bg {
		opacity: 1;
	}

	.shop-cart {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 350px;
		background-color: #f5f5f5;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		padding: 25px;
		text-align: center;
		z-index: 2;
	}
	.shop-cart-slider {
		display: flex;
		overflow: hidden;
	}
	.shop-cart-title {
		font-weight: 900;
		text-transform: uppercase;
		font-size: 30px;
		color: #23211f;
		margin-bottom: 5px;
	}
	.shop-cart-desc {
		font-size: 17px;
		opacity: 0.6;
		margin-bottom: 3px;
	}
	.shop-cart-cta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
	}
	.shop-cart-cta-price {
		font-size: 24px;
		font-weight: 600;
	}
	.btn {
		position: relative;
		z-index: 1;
		float: right;
		display: inline-block;
		font-size: 13px;
		font-weight: 900;
		text-transform: uppercase;
		color: #ff3100;
		padding: 12px 18px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		line-height: 0.95;
		border: none;
		background: none;
		outline: none;
		border: 1px solid #ff3100;
		border-radius: 20px;
		overflow: hidden;
	}
	.btn .bg {
		width: 101%;
		height: 101%;
		display: block !important;
		z-index: -1;
		opacity: 0;
		transition: all 0.3s ease-in-out;
		background: linear-gradient(135deg, #a61322, #d33f34);
	}
	.btn:hover {
		color: #fff !important;
		border: 1px solid transparent !important;
		background-color: #d33f34;
	}
	.btn:hover .bg {
		opacity: 1;
	}
	.deets {
		margin-top: 20px;
	}
	.deets label {
		font-size: 13px;
		font-weight: 900;
		padding-right: 40px;
	}
</style>
