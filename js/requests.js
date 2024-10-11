version = '0.3';

function getUserData(username, hotel){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://origins.habbo"+ hotel + "/api/public/users?name=" + username);
	xhr.send();
	xhr.responseType = "json";
	xhr.onload = () => {
	if (xhr.readyState == 4 && xhr.status == 200) {
		// Clear "user doesn't exist" message
		document.getElementById('userDoesntExist').textContent = "";
		const data = xhr.response;
		// uniqueID
		document.getElementById('uniqueId').textContent = "ID: " + data['uniqueId'];
		// Username
		document.getElementById('user').textContent = "User: " + data['name'];
		// Figure string
		document.getElementById('textAvatar').textContent = "Avatar";
		const avatar = document.getElementById('avatar');
		avatar.src = 'https://www.habbo.com/habbo-imaging/avatarimage?figure=' + data['figureString'] + '&gender=M&direction=4&head_direction=4&action=gesture=nrm&&size=l';
		avatar.title = data['figureString'];
		// Motto
		document.getElementById('motto').textContent = "Motto: " + data['motto'];
		// Online
		document.getElementById('online').textContent = "Online: " + data['online'];
		// Last acces time
		document.getElementById('lastAccess').textContent = "Last access: " + data['lastAccessTime'].slice(0,10);
		// Member since
		document.getElementById('memberSince').textContent = "Member since: " + data['memberSince'].slice(0,10);
		// Selected Badge
		try {
			const badge = document.getElementById('badge');
			badge.src = 'https://habborator.org/badges/badges/' + data['selectedBadges'][0]['code'] + '.gif'
			badge.title = data['selectedBadges'][0]['name'] + "\n" + data['selectedBadges'][0]['description'];
			document.getElementById('textBadge').textContent = "Badge";
		} catch(error) {
			// There is no badge selected
			badge.src = "";
			badge.title = "";
			document.getElementById('textBadge').textContent = "";
		}

	} else {
		document.getElementById('uniqueId').textContent = "";
		document.getElementById('user').textContent = "";
		document.getElementById('textAvatar').textContent = "";
		document.getElementById('textBadge').textContent = "";
		document.getElementById('motto').textContent = "";
		document.getElementById('online').textContent = "";
		document.getElementById('lastAccess').textContent = "";
		document.getElementById('memberSince').textContent = "";
		const avatar = document.getElementById('avatar');
		avatar.src = "";
		avatar.title = "";
		const badge = document.getElementById('badge');
		badge.src = "";
		badge.title = "";
		document.getElementById('userDoesntExist').textContent = "Oops...! That user doesn't exist";
		}
	};
	}


	var credits = "Version: " + version + "\n" +
				"Some of the images are taken from habborator.org (badges, icons)." + "\n" +
				"Font: Volter Goldfish by Sulake" + "\n" +
				"Built with HTML, CSS, Javascript, Go & Wails" + "\n" +
				"by Diffuso (https://github.com/Diffuso)"
		;