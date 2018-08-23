const locationA = {
	x: 37.855303,
	y: -122.2554052
}

const locationB= {
	x: 37.857898,
	y: -122.2531305
}


function getDistance(aPos, bPos) {
	let sqrDistance = (aPos.x - bPos.x)**2 + (aPos.y - bPos.y)**2;
	return (sqrDistance**0.5);
}

console.log(getDistance(locationB, locationA));