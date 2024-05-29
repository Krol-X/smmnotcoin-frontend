<script>
  export let value = 0
	export let max = 100
	
	$: percents = Math.trunc(value / max * 100)
</script>

<div class="energy-bar">
  <div class="energy-level" style="width: {percents}%;"></div>
  <div class="energy-text">{value}/{max}</div>
</div>

<style>
  .energy-bar {
    width: 100%;
    height: 2rem;
    background-color: #005e83;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .energy-level {
    height: 100%;
    background-color: #009ead;
    border-radius: 10px;
    transition: width 0.2s ease-in-out;
  }
  
  .energy-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
</style>