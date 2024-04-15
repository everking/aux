<script>
	import { isMenuOpen } from '../assets/js/store';
//	import NavItems from './NavItems.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<!-- svelte-ignore a11y-missing-attribute -->
<style>	
	.column > h6 {
		margin: 1rem 0 1rem;
	}
	.navbar {
	  overflow: hidden;
	  font-family: Arial, Helvetica, sans-serif;
	}
	
	.navbar a {
	  float: left;
	  font-size: 16px;
	  color: black;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	}
	
	.mega {
	  float: left;
	  overflow: hidden;
	}
	
	.mega .dropbtn {
	  font-size: 16px; 
	  border: none;
	  outline: none;
	  color: black;
	  padding: 14px 16px;
	  background-color: inherit;
	  font-style: inherit;
	  font-size: inherit;
	  line-height: inherit;
	  font-family: inherit;
	  font-weight: bold;
	  margin: 0;
	}
	
	.navbar a:hover, .mega:hover .dropbtn {
	  background-color: teal;
	  color:white;
	}
	
	.mega-content {
	  display: none;
	  position: absolute;
	  background-color: teal;
	  width: 100%;
	  left: 0;
	  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	  z-index: 1;
	}
	
	.mega-content .header {
	  background: teal;
	  padding: 10px;
	  color: white;
	}
	
	.mega:hover .mega-content {
	  display: block;
	}
	
	/* Create three equal columns that floats next to each other */
	.column {
	  float: left;
	  width: 25%;
	  padding: 5px;
	  background-color: #ccc;
	  height: 440px;
	}
	
	.column a {
	  float: none;
	  color: black;
	  padding: 8px;
	  text-decoration: none;
	  display: block;
	  text-align: left;
	}
	
	.column a:hover {
	  background-color: #39b8b4;
	}

	.dropdown {
	  float: left;
	  overflow: hidden;
	}

	.dropdown .dropbtn {
	border: none;
	outline: none;
	color: black;
	padding: 14px 16px;
	background-color: inherit;
	font-family: inherit;
	margin: 0;
	height:55px;
	}

	a {
		height:55px;
	}
.dropdown:hover .dropbtn {
  background-color: teal;
  color:white;
}
.dropdown-content .header {
	  background: teal;
	  padding: 10px;
	  color: white;
	}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ccc;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #30c3c6;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Clear floats after the columns */
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
				<div class="column">
				  <h6>Whole Child</h6>
				  <a href="#">Academic</a>
				  <a href="#">Spiritual</a>
				  <a href="#">Sports</a>
				  <a href="#">Culture</a>
				  <a href="#">Faith & Reason</a>
				</div>
				<div class="column">
				  <h6>Spiritual</h6>
				  <a href="#">Bible</a>
				  <a href="#">Prayers</a>
				  <a href="#">Formation</a>
				  <a href="#">Readings</a>
				  <a href="#">Catechism</a>
				  <a href="#">Mentoring</a>
				</div>
				<div class="column">
				  <h6>Virtues</h6>
				  <a href="#">Stories</a>
					<a href="#">Life of Saints</a>
					<a href="#">Corporal works of mercy</a>
					<a href="#">Mentoring</a>
					<a href="#">Service Projects</a>
					<a href="#">Spiritual works of mercy</a>
				</div>
				<div class="column">
					<h6>Activities</h6>
					<a href="#">Stories</a>
					  <a href="#">Chat</a>
					  <a href="#">Field Outing</a>
					  <a href="#">Bible Study</a>
					  <a href="#">Recollection</a>
					  <a href="#">Study weekend</a>
				  </div>
				</div>
			</div>
		</div>
		<div class="dropdown">
			<button class="dropbtn">High School/College 
			  <i class="fa fa-caret-down"></i>
			</button>
			<div class="dropdown-content">
				<div class="header">
				</div>   
				<a href="#">Reading lists</a>
				<a href="#">Friendship clubs</a>
				<a href="#">Movie club</a>
				<a href="#">Sports Group</a>
				<a href="#">Game Reviews</a>
				<a href="#">Mentoring</a>
				<a href="#">Counseling</a>
			</div>
		</div> 
		<div class="dropdown">
			<button class="dropbtn">Striving for Excellence
			</button>
			<div class="dropdown-content">
				<div class="header">
				</div>   
				<a href="#">Pointers</a>
				<a href="#">Coaching</a>
				<a href="#">Health</a>
				<a href="#">Counseling</a>
				<a href="#">Bible Study</a>
			</div>
		</div> 
		<div class="dropdown">
			<button class="dropbtn">Help
			</button>
			<div class="dropdown-content">
				<div class="header">
				</div>   
				<a href="/about">About</a>
				<a href="#">Ask any questions</a>
				<a href="#">Connect Familes</a>
				<a href="/contact">Moderators</a>
			</div>
		</div> 
	  </div>




<!-- <NavItems /> -->	
</nav>
