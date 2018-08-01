module.exports = {
	HTML: function(title, list, body, control) {
		return `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Leon Kong's Blog</title>
				<link rel="stylesheet" type="text/css" href="static/style.css">
			</head>
			<body>
				<section class="header">
					<div class="container">
						<h1 class="main">Leon Kong's Blog</h1>
						<ul class="menu">
						<li class="menu"><a href="#">About</a></li>
						<li class="menu"><a href="#">Algorithm</a></li>
						<li class="menu"><a href="#">JavaScript</a></li>
						<li class="menu"><a href="#">ComputerScience</a></li>
						<li class="menu"><a href="#">ToyProjects</a></li>
					</ul>
					</div>
					<div class="heroImg">
					</div>
				</section>

				<section class="content">
					${list}
					${control}
					${body}
				</section>

				<section class="footer">
					<h2>Leon Kong's Blog</h2>
					<p>copyright © Leon Kong. All rights reserved.</p>
				</section>
			</body>
			</html>
		`
	},
	list: function(filelist){
		let list = '<ul>';
		for (let i in filelist) {
			list += `<li><a href="?id=${filelist}">${filelist[i]}</a></li>`;
		};
		list += '</ol>';
		return list;
	}
}