<script>
	import { isMenuOpen } from '../assets/js/store';
	import MegaColumn from './MegaColumn.svelte';
	import DropDownColumn from './DropDownColumn.svelte';
//	import NavItems from './NavItems.svelte';
	const navData = {
		"wholeChild": {
			"title": "Whole Child",
			"columns": [
				{"path": "/article/academic", "name": "Academic"},
				{"path": "/article/spiritual", "name": "Spiritual"},
				{"path": "/article/sports", "name": "Sports"},
				{"path": "/article/culture", "name": "Culture"},
				{"path": "/article/faith-reason", "name": "Faith & Reason"}
			]
		},
		"spiritual": {
			"title": "Spiritual",
			"columns": [
				{"path": "/article/prayers", "name": "Prayers"},
				{"path": "/article/formation", "name": "Formation"},
				{"path": "/article/readings", "name": "Readings"},
				{"path": "/article/ccc", "name": "Catechism"},
				{"path": "/article/mentoring", "name": "Mentoring"},
				{"path": "/article/biblical", "name": "Biblical"}
			]
		},
		"virtues": {
			"title": "Virtues",
			"columns": [
				{"path": "/article/virtues", "name": "What are Virtues?"},
				{"path": "/article/stories", "name": "Stories"},
				{"path": "/article/life-of-saints", "name": "Life of Saints"},
				{"path": "/article/corporal-works-of-mercy", "name": "Corporal works of mercy"},
				{"path": "/article/coaching", "name": "Coaching"},
				{"path": "/article/service-projects", "name": "Service Projects"},
				{"path": "/article/spiritual-works-of-mercy", "name": "Spiritual works of mercy"}
			]
		},
		"activities": {
			"title": "Activities",
			"columns": [
				{"path": "/article/chat", "name": "Chat"},
				{"path": "/article/field-outing", "name": "Field Outing"},
				{"path": "/article/bible-study", "name": "Bible study"},
				{"path": "/article/recollections", "name": "Recollections"},
				{"path": "/article/study-weekend", "name": "Study weekend"}
			]
		},
		"highSchool": {
			"title": "High School/College",
			"columns": [
				{"path": "/article/reading-list", "name": "Reading lists"},
				{"path": "/article/movie-club", "name": "Movie Reviews"},
				{"path": "/article/apologetics", "name": "Apologetics"},
				{"path": "/article/game-reviews", "name": "Game Reviews"},
				{"path": "/article/beatitudes", "name": "Living the Beatitudes"},
				{"path": "/article/counseling", "name": "Counseling"}
			]
		},
		"striving": {
			"title": "Striving for Excellence",
			"columns": [
				{"path": "/article/finding-purpose", "name": "Finding Purpose"},
				{"path": "/article/doing-work-well", "name": "Doing Work Well"},
				{"path": "/article/health", "name": "Health"},
				{"path": "/article/being-fruitful", "name": "Being Fruitful"},
				{"path": "/article/spiritual-reading", "name": "Spiritual Reading"},
				{"path": "/article/apostolate", "name": "Apostolate"}
			]
		},
		"help": {
			"title": "Help",
			"columns": [
				{"path": "/about", "name": "About"},
				{"path": "/article/ask-any-question", "name": "Ask any questions"},
				{"path": "/article/connect-families", "name": "Connect families"},
				{"path": "/contact", "name": "Moderators"}
			]
		}
	}
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<!-- svelte-ignore a11y-missing-attribute -->
<style>	
@import './main-nav.css';
</style>
<nav class="main-nav" class:open={$isMenuOpen}>
	<div class="navbar">
		<div class="dropdown">
			<button class="dropbtn">Home
			</button>
			<div class="dropdown-content">
				<div class="header">
				</div>   
				<a href="/home">Welcome</a>
			</div>
		</div> 
		<div class="mega">
			<button class="dropbtn">Family 
			</button>
			<div class="mega-content">
			  <div class="header">
			  </div>   
			  <div class="row">
				<MegaColumn columnInfo={navData.wholeChild} />
				<MegaColumn columnInfo={navData.spiritual} />
				<MegaColumn columnInfo={navData.virtues} />
				<MegaColumn columnInfo={navData.activities} />
				</div>
			</div>
		</div>
		<DropDownColumn columnInfo={navData.highSchool} />
		<DropDownColumn columnInfo={navData.striving} />
		<DropDownColumn columnInfo={navData.help} />
	  </div>
</nav>
